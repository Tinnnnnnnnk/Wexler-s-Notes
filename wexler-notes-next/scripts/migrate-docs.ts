// scripts/migrate-docs.ts
// Runs with: tsx scripts/migrate-docs.ts
import fs from 'fs'
import path from 'path'

const SOURCE_DIR = path.join(process.cwd(), '..', 'my-knowledge-base', 'docs')
const DEST_DIR = path.join(process.cwd(), 'src', 'content')

const SKIP_DIRS = ['.vitepress', '.obsidian', 'public', 'node_modules', '.git']

interface Stats {
  copied: number
  skipped: number
}

const stats: Stats = { copied: 0, skipped: 0 }

/**
 * Strip the [!note] callout marker from blockquote lines.
 * MDXComponents.tsx overrides `blockquote` to render as <Callout type="...">,
 * so we just need to normalize the blockquote body text.
 */
function stripCalloutMarkers(content: string): string {
  return content
    .replace(/^(\s*)>\s*\[!(note|tip|warning|danger)\]\s*/gim, '$1> ')
    .replace(/^(\s*)>\s*/g, '$1> ')
}

/**
 * Escape curly braces that MDX treats as JSX expression delimiters.
 * In MDX, { starts an expression and } closes it. In plain text content
 * (especially in lists, tables, or indented blocks), curly braces
 * must be escaped to avoid "is not defined" ReferenceErrors.
 *
 * Strategy: escape all { that are NOT inside fenced code blocks.
 * We check each { to ensure it's not immediately preceded by a backslash.
 */
function escapeMdxExpressions(content: string): string {
  const lines = content.split('\n')
  const result: string[] = []
  let inCodeBlock = false
  let codeBlockMarker = ''

  for (const line of lines) {
    // Track fenced code blocks
    const codeMatch = line.match(/^(\s*)(```+|~~~)\s*/)
    if (codeMatch) {
      if (!inCodeBlock) {
        inCodeBlock = true
        codeBlockMarker = codeMatch[2]
      } else if (line.trim().startsWith(codeBlockMarker)) {
        inCodeBlock = false
        codeBlockMarker = ''
      }
    }

    // Only escape braces outside code blocks
    if (!inCodeBlock) {
      result.push(line.replace(/\{/g, '\\{'))
    } else {
      result.push(line)
    }
  }

  return result.join('\n')
}

function processFile(srcPath: string, relativePath: string) {
  // Skip VitePress-specific files
  if (relativePath === 'index.md' || relativePath === 'index' || relativePath.endsWith('/index.md')) {
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
  content = escapeMdxExpressions(content)
  fs.writeFileSync(destPath, content, 'utf-8')
  stats.copied++
}

function scanDir(srcDir: string, relativeDir: string = '') {
  if (!fs.existsSync(srcDir)) {
    console.warn(`Source directory does not exist: ${srcDir}`)
    return
  }

  const entries = fs.readdirSync(srcDir, { withFileTypes: true })

  for (const entry of entries) {
    if (SKIP_DIRS.includes(entry.name)) {
      stats.skipped++
      continue
    }

    const relPath = relativeDir ? `${relativeDir}/${entry.name}` : entry.name
    const srcPath = path.join(srcDir, entry.name)

    if (entry.isDirectory()) {
      scanDir(srcPath, relPath)
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      processFile(srcPath, relPath)
    }
  }
}

function main() {
  console.log(`\n📄 Migrating docs from:\n  ${SOURCE_DIR}\n  → ${DEST_DIR}\n`)

  scanDir(SOURCE_DIR)

  console.log('─'.repeat(50))
  console.log(`✅ Copied:     ${stats.copied} files`)
  if (stats.skipped > 0) {
    console.log(`⏭  Skipped:    ${stats.skipped} items (.vitepress, .obsidian, etc.)`)
  }
  console.log('─'.repeat(50))
  console.log()
}

main()
