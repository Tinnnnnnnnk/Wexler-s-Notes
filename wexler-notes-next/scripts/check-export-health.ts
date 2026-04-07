// scripts/check-export-health.ts
// Checks for __next_error__ pages in the static export output
import fs from 'fs'
import path from 'path'

const OUT_DIR = path.join(process.cwd(), 'out')

interface HealthResult {
  totalHtmlFiles: number
  errorPages: string[]
  emptyPages: string[]
}

function scanOut(dir: string): HealthResult {
  if (!fs.existsSync(dir)) {
    return { totalHtmlFiles: 0, errorPages: [], emptyPages: [] }
  }

  let totalHtmlFiles = 0
  const errorPages: string[] = []
  const emptyPages: string[] = []

  function scan(currentDir: string) {
    if (!fs.existsSync(currentDir)) return
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name)
      if (entry.isDirectory()) {
        scan(fullPath)
      } else if (entry.name.endsWith('.html')) {
        totalHtmlFiles++
        const relPath = path.relative(OUT_DIR, fullPath)
        try {
          const content = fs.readFileSync(fullPath, 'utf-8')
          if (content.includes('__next_error__')) {
            errorPages.push(relPath)
          } else if (content.length < 500) {
            emptyPages.push(relPath)
          }
        } catch {
          // ignore
        }
      }
    }
  }

  scan(dir)
  return { totalHtmlFiles, errorPages, emptyPages }
}

function main() {
  console.log('\n=== Export Health Check ===\n')
  console.log('Output dir:', OUT_DIR)
  console.log('')

  const result = scanOut(OUT_DIR)

  console.log('--- Summary ---')
  console.log(`Total HTML files: ${result.totalHtmlFiles}`)
  console.log(`Error pages (__next_error__): ${result.errorPages.length}`)
  console.log(`Potentially empty pages: ${result.emptyPages.length}`)
  console.log('')

  if (result.errorPages.length > 0) {
    console.log('--- Error Pages ---')
    result.errorPages.forEach(p => console.log(`  ✗ ${p}`))
    console.log('')
  }

  if (result.emptyPages.length > 0) {
    console.log('--- Empty/Small Pages ---')
    result.emptyPages.forEach(p => console.log(`  ⚠ ${p}`))
    console.log('')
  }

  if (result.errorPages.length === 0 && result.totalHtmlFiles > 0) {
    console.log('✓ Export health check PASSED')
  } else if (result.totalHtmlFiles === 0) {
    console.log('⚠ No output found. Run `npm run build` first.')
  }

  console.log('')
}

main()
