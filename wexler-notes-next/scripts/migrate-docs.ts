// scripts/migrate-docs.ts
// Runs with: tsx scripts/migrate-docs.ts
import fs from 'fs'
import path from 'path'

const SOURCE_DIR = path.join(process.cwd(), '..', 'my-knowledge-base', 'docs')
const DEST_DIR = path.join(process.cwd(), 'src', 'content')

const SKIP_DIRS = ['.vitepress', '.obsidian', 'public', 'node_modules', '.git']

const CALLOUT_PATTERN = /\[!(note|tip|warning|danger)\]/gi

interface Stats {
  copied: number
  calloutsConverted: number
  skipped: number
}

const stats: Stats = { copied: 0, calloutsConverted: 0, skipped: 0 }

function convertCallouts(content: string): { content: string; count: number } {
  let count = 0
  const lines = content.split('\n')
  const result: string[] = []
  let inCallout = false
  let calloutType = ''
  let calloutLines: string[] = []
  let calloutIndent = ''

  for (const line of lines) {
    const calloutMatch = line.match(/^(\s*)>\s*\[!(note|tip|warning|danger)\]/i)
    if (calloutMatch && !inCallout) {
      inCallout = true
      calloutType = calloutMatch[2].toLowerCase()
      calloutIndent = calloutMatch[1]
      const label = calloutMatch[2].charAt(0).toUpperCase() + calloutMatch[2].slice(1).toLowerCase()
      const bodyText = line.replace(/^(\s*)>\s*\[!(note|tip|warning|danger)\]\s*/i, '').trim()
      calloutLines = bodyText ? [`<Callout type="${calloutType}">`, '', bodyText] : [`<Callout type="${calloutType}">`]
      count++
    } else if (inCallout) {
      const contentMatch = line.match(/^(\s*)>\s*(.*)/)
      if (contentMatch) {
        calloutLines.push(contentMatch[2])
      } else {
        result.push(...calloutLines)
        if (calloutLines.length > 0) result.push('</Callout>')
        result.push('')
        inCallout = false
        calloutLines = []
        result.push(line)
      }
    } else {
      if (inCallout && calloutLines.length > 0) {
        result.push(...calloutLines)
        result.push('</Callout>')
        result.push('')
        inCallout = false
        calloutLines = []
      }
      result.push(line)
    }
  }

  if (inCallout && calloutLines.length > 0) {
    result.push(...calloutLines)
    result.push('</Callout>')
  }

  return { content: result.join('\n'), count }
}

function processFile(srcPath: string, relativePath: string) {
  const destRel = relativePath.replace(/\.md$/, '.mdx')
  const destPath = path.join(DEST_DIR, destRel)

  if (!fs.existsSync(path.dirname(destPath))) {
    fs.mkdirSync(path.dirname(destPath), { recursive: true })
  }

  let content = fs.readFileSync(srcPath, 'utf-8')

  const hasCallouts = CALLOUT_PATTERN.test(content)
  if (hasCallouts) {
    CALLOUT_PATTERN.lastIndex = 0
    const { content: converted, count } = convertCallouts(content)
    content = converted
    stats.calloutsConverted += count
  }

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
  if (stats.calloutsConverted > 0) {
    console.log(`🔄 Callouts:   ${stats.calloutsConverted} blockquotes converted`)
  }
  if (stats.skipped > 0) {
    console.log(`⏭  Skipped:    ${stats.skipped} items (.vitepress, .obsidian, etc.)`)
  }
  console.log('─'.repeat(50))
  console.log()
}

main()
