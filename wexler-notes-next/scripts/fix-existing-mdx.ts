// scripts/fix-existing-mdx.ts
// Fixes HTML-to-MDX compatibility issues in ALL existing MDX files.
// Run with: npx tsx scripts/fix-existing-mdx.ts
// Or: node --import tsx scripts/fix-existing-mdx.ts
// Safe: idempotent — can run multiple times.
import fs from 'fs'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

interface FixResult {
  file: string
  changes: string[]
}

const results: FixResult[] = []
let totalChanges = 0

/**
 * Fix HTML-to-MDX compatibility issues.
 * Same logic as fixMdxCompatibility() in migrate-docs.ts.
 */
function fixMdxCompatibility(content: string): { content: string; changes: string[] } {
  let inCodeBlock = false
  let codeBlockMarker = ''
  const changes: string[] = []

  const lines = content.split('\n')
  const result: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const lineNum = i + 1

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
      let fixed = line

      // Fix 1: class= → className= (JSX compatibility)
      if (/<[a-z][a-z0-9]*\s+class=/gi.test(fixed)) {
        const before = fixed
        fixed = fixed.replace(/<([a-z][a-z0-9]*)\s+class=/gi, '<$1 className=')
        if (before !== fixed) {
          changes.push(`line ${lineNum}: class → className`)
        }
      }

      // Fix 2: <> empty tags → <span></span>
      if (/^(\s*)<>\s*$/.test(fixed)) {
        const before = fixed
        fixed = fixed.replace(/^(\s*)<>\s*$/, '$1<span></span>')
        if (before !== fixed) {
          changes.push(`line ${lineNum}: <> → <span></span>`)
        }
      }

      result.push(fixed)
    } else {
      result.push(line)
    }
  }

  return { content: result.join('\n'), changes }
}

function scanDir(dir: string) {
  if (!fs.existsSync(dir)) {
    console.error('Directory not found: ' + dir)
    return
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue

    if (entry.isDirectory()) {
      scanDir(path.join(dir, entry.name))
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      const fp = path.join(dir, entry.name)
      const relPath = path.relative(CONTENT_DIR, fp)

      const raw = fs.readFileSync(fp, 'utf-8')
      const { content: fixed, changes } = fixMdxCompatibility(raw)

      if (changes.length > 0) {
        fs.writeFileSync(fp, fixed, 'utf-8')
        results.push({ file: relPath, changes })
        totalChanges += changes.length
        console.log(`✓ Fixed: ${relPath} (${changes.length} changes)`)
      }
    }
  }
}

console.log('\nFixing existing MDX files for HTML→MDX compatibility...\n')
console.log('Content dir:', CONTENT_DIR)
console.log('')

scanDir(CONTENT_DIR)

console.log('')
console.log('─'.repeat(50))
console.log(`Fixed: ${results.length} files`)
console.log(`Total changes: ${totalChanges}`)

if (results.length > 0) {
  console.log('\nFiles modified:')
  results.forEach(r => {
    console.log(`  ${r.file} (${r.changes.length} changes)`)
  })
} else {
  console.log('\nAll files already compatible — no changes needed.')
}
console.log('')