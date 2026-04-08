// scripts/check-performance-budget.ts
// Check build output against performance budget

import * as fs from 'fs'
import * as path from 'path'

const OUT_DIR = path.join(process.cwd(), 'out')

// Performance budget thresholds
const BUDGET = {
  // Max total JS size in KB
  totalJsSizeKB: 500,
  // Max single HTML file size in KB
  maxHtmlSizeKB: 100,
  // Max single JS chunk size in KB
  maxJsChunkKB: 250,
  // Max CSS size in KB
  totalCssSizeKB: 100,
  // Max number of HTML files
  maxHtmlFiles: 200,
}

interface BudgetResult {
  name: string
  actual: string
  limit: string
  passed: boolean
}

function formatBytes(bytes: number): string {
  const kb = bytes / 1024
  return `${kb.toFixed(2)} KB`
}

function getFilesRecursively(dir: string, filter?: (name: string) => boolean): string[] {
  if (!fs.existsSync(dir)) return []
  const results: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...getFilesRecursively(full, filter))
    } else if (!filter || filter(entry.name)) {
      results.push(full)
    }
  }
  return results
}

async function main() {
  console.log('\n=== Performance Budget Check ===\n')

  if (!fs.existsSync(OUT_DIR)) {
    console.log('✗ out/ directory does not exist - run build first')
    process.exit(1)
  }

  const results: BudgetResult[] = []

  // Check 1: Total JS size
  const jsFiles = getFilesRecursively(OUT_DIR, (n) => n.endsWith('.js'))
  const totalJsSize = jsFiles.reduce((sum, f) => sum + fs.statSync(f).size, 0)
  results.push({
    name: 'Total JS Size',
    actual: formatBytes(totalJsSize),
    limit: `${BUDGET.totalJsSizeKB} KB`,
    passed: totalJsSize <= BUDGET.totalJsSizeKB * 1024,
  })

  // Check 2: Total CSS size
  const cssFiles = getFilesRecursively(OUT_DIR, (n) => n.endsWith('.css'))
  const totalCssSize = cssFiles.reduce((sum, f) => sum + fs.statSync(f).size, 0)
  results.push({
    name: 'Total CSS Size',
    actual: formatBytes(totalCssSize),
    limit: `${BUDGET.totalCssSizeKB} KB`,
    passed: totalCssSize <= BUDGET.totalCssSizeKB * 1024,
  })

  // Check 3: HTML file count
  const htmlFiles = getFilesRecursively(OUT_DIR, (n) => n.endsWith('.html'))
  results.push({
    name: 'HTML Files Count',
    actual: htmlFiles.length.toString(),
    limit: `${BUDGET.maxHtmlFiles}`,
    passed: htmlFiles.length <= BUDGET.maxHtmlFiles,
  })

  // Check 4: Max HTML file size
  let maxHtmlSize = 0
  let maxHtmlFile = ''
  for (const file of htmlFiles) {
    const size = fs.statSync(file).size
    if (size > maxHtmlSize) {
      maxHtmlSize = size
      maxHtmlFile = file
    }
  }
  results.push({
    name: 'Max HTML File Size',
    actual: formatBytes(maxHtmlSize),
    limit: `${BUDGET.maxHtmlSizeKB} KB`,
    passed: maxHtmlSize <= BUDGET.maxHtmlSizeKB * 1024,
  })

  // Check 5: Max JS chunk size
  let maxJsSize = 0
  for (const file of jsFiles) {
    const size = fs.statSync(file).size
    if (size > maxJsSize) {
      maxJsSize = size
    }
  }
  results.push({
    name: 'Max JS Chunk Size',
    actual: formatBytes(maxJsSize),
    limit: `${BUDGET.maxJsChunkKB} KB`,
    passed: maxJsSize <= BUDGET.maxJsChunkKB * 1024,
  })

  // Print results
  let allPassed = true
  for (const result of results) {
    const status = result.passed ? '✓' : '✗'
    console.log(`${status} ${result.name}`)
    console.log(`   Actual: ${result.actual}`)
    console.log(`   Limit:  ${result.limit}`)
    console.log('')
    if (!result.passed) allPassed = false
  }

  if (allPassed) {
    console.log('=== Performance Budget Check PASSED ===')
    process.exit(0)
  } else {
    console.log('=== Performance Budget Check FAILED ===')
    console.log('\nBudget Configuration:')
    console.log(JSON.stringify(BUDGET, null, 2))
    process.exit(1)
  }
}

main().catch((e) => {
  console.error('Error:', e)
  process.exit(1)
})
