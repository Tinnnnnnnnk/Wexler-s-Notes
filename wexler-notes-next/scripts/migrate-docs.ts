// scripts/migrate-docs.ts
// Runs with: tsx scripts/migrate-docs.ts
import fs from 'fs'
import path from 'path'

const SOURCE_DIR = path.join(process.cwd(), '..', 'my-knowledge-base', 'docs')
const DEST_DIR = path.join(process.cwd(), 'src', 'content')
const PUBLIC_DIR = path.join(process.cwd(), '..', 'my-knowledge-base', 'docs', 'public')

const SKIP_DIRS = ['.vitepress', '.obsidian', 'node_modules', '.git']
const PUBLIC_SUBDIRS = ['images', 'media']

interface Stats {
  copied: number
  skipped: number
  assetsCopied: number
}

const stats: Stats = { copied: 0, skipped: 0, assetsCopied: 0 }

// ---------------------------------------------------------------------------
// Text transformations
// ---------------------------------------------------------------------------

function stripCalloutMarkers(content: string): string {
  return content
    .replace(/^(\s*)>\s*\[![a-zA-Z+-]+\]\s*/gim, '$1> ')
    .replace(/^(\s*)>\s*/g, '$1> ')
}

/**
 * Fix HTML-to-MDX compatibility issues BEFORE MDX compilation.
 *
 * Root cause: MDX v3 compiles content as JSX. Raw HTML attributes like `class="..."`
 * are invalid in JSX (must use `className="..."`), and empty `<>` tags cause
 * compilation errors. This transformer runs on every file during migration (and
 * is replicated in serializeMDX as a runtime fallback), ensuring future uploads
 * are automatically sanitized without manual intervention.
 *
 * Supported transformations:
 * 1. `<tag class="...">` → `<tag className="...">` (JSX attribute requirement)
 * 2. `<>` empty JSX fragments → `<span>` wrappers (valid HTML, MDX-safe)
 */
function fixMdxCompatibility(content: string): string {
  let inCodeBlock = false
  let codeBlockMarker = ''

  const lines = content.split('\n')
  const result: string[] = []

  for (const line of lines) {
    const codeMatch = line.match(/^(\s*)(```+|~~~)\s*/)
    if (codeMatch) {
      if (!inCodeBlock) {
        inCodeBlock = true
        codeBlockMarker = codeMatch[2]
      } else if (line.trim().startsWith(codeBlockMarker)) {
        inCodeBlock = false
        codeBlockMarker = ''
      }
      result.push(line)
      continue
    }

    if (!inCodeBlock) {
      // Fix 1: class= → className= (JSX compatibility)
      // Only affects inline HTML elements (span, div, p, etc.)
      // Doesn't affect things like HTML comments or doctypes
      let fixed = line.replace(/<([a-z][a-z0-9]*)\s+class=/gi, '<$1 className=')

      // Fix 2: <> empty tags → <span></span>
      // MDX treats <> as JSX fragment syntax, but empty <> in text is just text.
      // We convert them to a span wrapper to prevent parsing errors.
      // Only converts standalone <> lines or <> at start of line content.
      fixed = fixed.replace(/^(\s*)<>\s*$/, '$1<span></span>')

      result.push(fixed)
    } else {
      result.push(line)
    }
  }

  return result.join('\n')
}

/**
 * Replace $...$ inline math and $$...$$ block math with HTML spans.
 * Must run BEFORE curly brace escaping so braces in math are protected.
 */
function processMath(content: string): string {
  // Replace $$...$$ block math (use [\s\S] for dotAll compatibility)
  content = content.replace(/\$\$([^$]+?)\$\$/g, (_m: string, math: string) => {
    return '<div class="math-block">' + math + '</div>'
  })
  // Replace $...$ inline math
  content = content.replace(/\$([^$\n]+?)\$/g, (_m: string, math: string) => {
    return '<span class="math-inline">' + math + '</span>'
  })
  return content
}

function stripFrontmatterBlock(content: string): { fm: string; body: string } {
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)(?:\r?\n-{3,})\r?\n([\s\S]*)$/)
  if (fmMatch) {
    return { fm: fmMatch[1].trim(), body: fmMatch[2] }
  }
  return { fm: '', body: content }
}

/**
 * Escape curly braces that MDX treats as JSX expression delimiters.
 * Only escapes braces OUTSIDE of fenced code blocks.
 * Math ($...$) must be processed BEFORE this so braces in math are protected.
 */
function escapeMdxExpressions(content: string): string {
  const { fm, body } = stripFrontmatterBlock(content)
  const fmBlock = fm ? '---\n' + fm + '\n---\n\n' : ''

  const lines = body.split('\n')
  const result: string[] = []
  let inCodeBlock = false
  let codeBlockMarker = ''

  for (const line of lines) {
    const codeMatch = line.match(/^(\s*)(```+|~~~)\s*/)
    if (codeMatch) {
      if (!inCodeBlock) {
        inCodeBlock = true
        codeBlockMarker = codeMatch[2]
      } else if (line.trim().startsWith(codeBlockMarker)) {
        inCodeBlock = false
        codeBlockMarker = ''
      }
      result.push(line)
      continue
    }

    if (!inCodeBlock) {
      result.push(line.replace(/\{/g, '\\{').replace(/\}/g, '\\}'))
    } else {
      result.push(line)
    }
  }

  return fmBlock + result.join('\n')
}

// ---------------------------------------------------------------------------
// MDX file migration
// ---------------------------------------------------------------------------

function processFile(srcPath: string, relativePath: string) {
  if (
    relativePath === 'index.md' ||
    relativePath === 'index' ||
    relativePath.endsWith('/index.md')
  ) {
    stats.skipped++
    return
  }

  const destRel = relativePath.replace(/\.md$/, '.mdx')
  const destPath = path.join(DEST_DIR, destRel)

  if (!fs.existsSync(path.dirname(destPath))) {
    fs.mkdirSync(path.dirname(destPath), { recursive: true })
  }

  let content = fs.readFileSync(srcPath, 'utf-8')
  content = stripCalloutMarkers(content)
  content = processMath(content)
  content = escapeMdxExpressions(content)
  content = fixMdxCompatibility(content)
  fs.writeFileSync(destPath, content, 'utf-8')
  stats.copied++
}

function scanDir(srcDir: string, relativeDir = '') {
  if (!fs.existsSync(srcDir)) {
    console.warn('Source directory not found: ' + srcDir)
    return
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true })

  for (const entry of entries) {
    if (SKIP_DIRS.includes(entry.name)) {
      stats.skipped++
      continue
    }

    const relPath = relativeDir ? relativeDir + '/' + entry.name : entry.name
    const srcPath = path.join(srcDir, entry.name)

    if (entry.isDirectory()) {
      scanDir(srcPath, relPath)
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      processFile(srcPath, relPath)
    }
  }
}

// ---------------------------------------------------------------------------
// Static asset copying
// ---------------------------------------------------------------------------

function copyPublicAssets() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.warn('Public directory not found: ' + PUBLIC_DIR)
    return
  }

  const nextPublicDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(nextPublicDir)) {
    fs.mkdirSync(nextPublicDir, { recursive: true })
  }

  for (const subdir of PUBLIC_SUBDIRS) {
    const srcDir = path.join(PUBLIC_DIR, subdir)
    const destDir = path.join(nextPublicDir, subdir)
    if (!fs.existsSync(srcDir)) continue

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true })
    }

    function copyRecursive(src: string, dest: string) {
      const entries = fs.readdirSync(src, { withFileTypes: true })
      for (const entry of entries) {
        const srcPath = path.join(src, entry.name)
        const destPath = path.join(dest, entry.name)
        if (entry.isDirectory()) {
          if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true })
          copyRecursive(srcPath, destPath)
        } else {
          fs.copyFileSync(srcPath, destPath)
          stats.assetsCopied++
        }
      }
    }

    copyRecursive(srcDir, destDir)
    console.log('  Copied static assets from public/' + subdir + '/')
  }
}

// ---------------------------------------------------------------------------
// Entry
// ---------------------------------------------------------------------------

function main() {
  console.log('\nMigrating docs from:\n  ' + SOURCE_DIR + '\n  -> ' + DEST_DIR + '\n')

  scanDir(SOURCE_DIR)

  console.log('-'.repeat(50))
  console.log('Copied MDX:   ' + stats.copied + ' files')
  if (stats.skipped > 0) {
    console.log('Skipped:      ' + stats.skipped + ' items (.vitepress, .obsidian, etc.)')
  }

  console.log('\nCopying static assets...')
  copyPublicAssets()
  if (stats.assetsCopied > 0) {
    console.log('Assets copied: ' + stats.assetsCopied + ' files')
  }

  console.log('-'.repeat(50))
  console.log()
}

main()
