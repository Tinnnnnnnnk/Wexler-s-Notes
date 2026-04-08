// scripts/check-export-links.ts
// Check for broken internal links in static export

import * as fs from 'fs'
import * as path from 'path'

const OUT_DIR = path.join(process.cwd(), 'out')

interface BrokenLink {
  file: string
  link: string
  reason: string
}

function findHtmlFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  const results: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(full))
    } else if (entry.name.endsWith('.html')) {
      results.push(full)
    }
  }
  return results
}

function extractLinks(htmlContent: string): string[] {
  const links: string[] = []

  // Match href attributes
  const hrefRegex = /href=["']([^"']+)["']/g
  let match
  while ((match = hrefRegex.exec(htmlContent)) !== null) {
    links.push(match[1])
  }

  return links
}

function resolveLink(baseFile: string, link: string): string | null {
  // Skip external links
  if (link.startsWith('http://') || link.startsWith('https://') || link.startsWith('//')) {
    return null
  }

  // Skip anchor-only links
  if (link.startsWith('#')) {
    return null
  }

  // Skip mailto/tel links
  if (link.startsWith('mailto:') || link.startsWith('tel:')) {
    return null
  }

  // Resolve the link
  const baseDir = path.dirname(baseFile)
  let targetPath: string

  if (link.startsWith('/')) {
    // Absolute path from out directory
    targetPath = path.join(OUT_DIR, link)
  } else {
    // Relative path
    targetPath = path.resolve(baseDir, link)
  }

  // Remove query string and fragment
  targetPath = targetPath.split('?')[0].split('#')[0]

  // Check if file exists
  if (fs.existsSync(targetPath)) {
    return null
  }

  // Try with .html extension
  if (!targetPath.endsWith('.html')) {
    if (fs.existsSync(targetPath + '.html')) {
      return null
    }
    if (fs.existsSync(path.join(targetPath, 'index.html'))) {
      return null
    }
  }

  return targetPath
}

async function main() {
  console.log('\n=== Export Links Check ===\n')

  if (!fs.existsSync(OUT_DIR)) {
    console.log('✗ out/ directory does not exist - run build first')
    process.exit(1)
  }

  const htmlFiles = findHtmlFiles(OUT_DIR)
  console.log(`Found ${htmlFiles.length} HTML files\n`)

  const brokenLinks: BrokenLink[] = []

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf-8')
    const links = extractLinks(content)

    for (const link of links) {
      const broken = resolveLink(file, link)
      if (broken) {
        const relativeFile = path.relative(process.cwd(), file)
        brokenLinks.push({
          file: relativeFile,
          link,
          reason: `Target not found: ${broken}`,
        })
      }
    }
  }

  if (brokenLinks.length === 0) {
    console.log('✓ No broken links found')
    console.log('')
    console.log('=== Check PASSED ===')
    process.exit(0)
  } else {
    console.log(`✗ Found ${brokenLinks.length} broken links:\n`)
    for (const bl of brokenLinks) {
      console.log(`  ✗ ${bl.file}`)
      console.log(`    Link: ${bl.link}`)
      console.log(`    Reason: ${bl.reason}`)
      console.log('')
    }
    console.log('=== Check FAILED ===')
    process.exit(1)
  }
}

main().catch((e) => {
  console.error('Error:', e)
  process.exit(1)
})
