// scripts/fill-frontmatter.ts
// Automatically fills missing frontmatter in MDX files
import fs from 'fs'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')
const DRY_RUN = process.argv.includes('--dry-run')

interface FileInfo {
  path: string
  slug: string
  hasFrontmatter: boolean
}

function getDateFromMtime(filePath: string): string {
  try {
    const stat = fs.statSync(filePath)
    const date = stat.mtime
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}

function inferTitle(filePath: string): string {
  const name = path.basename(filePath, path.extname(filePath))
  // Remove numeric prefixes like "01-", "02-", "v1.0 "
  return name.replace(/^\d+[\s.-]+/, '').replace(/\s+/g, ' ').trim()
}

function inferDescription(slug: string): string {
  return `Documentation page for ${slug.split('/').pop()}`
}

function checkFrontmatter(content: string): boolean {
  return /^---\r?\n/.test(content)
}

function addFrontmatter(content: string, title: string, description: string, date: string): string {
  const frontmatter = `---\ntitle: ${title}\ndescription: ${description}\ndate: ${date}\n---\n\n`
  return frontmatter + content
}

function scanDir(dir: string): FileInfo[] {
  const results: FileInfo[] = []

  if (!fs.existsSync(dir)) return results

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (!entry.name.startsWith('_') && !entry.name.startsWith('.')) {
        results.push(...scanDir(fullPath))
      }
    } else if (/\.mdx?$/.test(entry.name)) {
      const relPath = path.relative(CONTENT_DIR, fullPath)
      const slug = relPath.replace(/\.mdx?$/, '')
      try {
        const content = fs.readFileSync(fullPath, 'utf-8')
        results.push({
          path: fullPath,
          slug,
          hasFrontmatter: checkFrontmatter(content),
        })
      } catch {
        // ignore errors
      }
    }
  }

  return results
}

function main() {
  console.log('\n=== Frontmatter Fill Script ===\n')
  console.log('Content dir:', CONTENT_DIR)
  console.log('Mode:', DRY_RUN ? 'DRY RUN (no changes)' : 'APPLY (will write files)')
  console.log('')

  const files = scanDir(CONTENT_DIR)
  const missing = files.filter(f => !f.hasFrontmatter)
  const present = files.filter(f => f.hasFrontmatter)

  console.log('--- Summary ---')
  console.log(`Total files: ${files.length}`)
  console.log(`Has frontmatter: ${present.length}`)
  console.log(`Missing frontmatter: ${missing.length}`)
  console.log('')

  if (missing.length === 0) {
    console.log('✓ All files have frontmatter!')
    return
  }

  console.log('--- Files to Update ---')
  missing.forEach(f => console.log(`  ${f.slug}`))
  console.log('')

  if (DRY_RUN) {
    console.log('--- Dry Run Complete (no files modified) ---')
    return
  }

  console.log('--- Applying Frontmatter ---')
  let count = 0
  for (const file of missing) {
    try {
      const content = fs.readFileSync(file.path, 'utf-8')
      const title = inferTitle(file.path)
      const description = inferDescription(file.slug)
      const date = getDateFromMtime(file.path)
      const updated = addFrontmatter(content, title, description, date)
      fs.writeFileSync(file.path, updated, 'utf-8')
      count++
      console.log(`  ✓ ${file.slug}`)
    } catch (err) {
      console.error(`  ✗ ${file.slug}: ${err}`)
    }
  }

  console.log('')
  console.log(`--- Applied ${count} frontmatter updates ---`)

  // Verify
  const afterFiles = scanDir(CONTENT_DIR)
  const afterMissing = afterFiles.filter(f => !f.hasFrontmatter)
  console.log(`Remaining missing: ${afterMissing.length}`)
  console.log('')
}

main()
