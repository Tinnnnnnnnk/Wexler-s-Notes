// scripts/check-export-assets.ts
// Check for missing assets referenced in static export

import * as fs from 'fs'
import * as path from 'path'

const OUT_DIR = path.join(process.cwd(), 'out')

interface MissingAsset {
  file: string
  asset: string
  type: 'js' | 'css' | 'image' | 'media' | 'other'
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

function getAssetType(ext: string): MissingAsset['type'] {
  if (['.js'].includes(ext)) return 'js'
  if (['.css'].includes(ext)) return 'css'
  if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico'].includes(ext)) return 'image'
  if (['.mp4', '.webm', '.ogg', '.mp3', '.wav'].includes(ext)) return 'media'
  return 'other'
}

function extractAssetRefs(htmlContent: string): string[] {
  const refs: string[] = []

  // Match src and href attributes
  const patterns = [
    /src=["']([^"']+)["']/g,
    /href=["']([^"']+\.css)["']/g,
    /url\(["']?([^"')]+)["']?\)/g,
  ]

  for (const pattern of patterns) {
    let match
    while ((match = pattern.exec(htmlContent)) !== null) {
      refs.push(match[1])
    }
  }

  return refs
}

async function main() {
  console.log('\n=== Export Assets Check ===\n')

  if (!fs.existsSync(OUT_DIR)) {
    console.log('✗ out/ directory does not exist - run build first')
    process.exit(1)
  }

  const htmlFiles = findHtmlFiles(OUT_DIR)
  console.log(`Found ${htmlFiles.length} HTML files\n`)

  const missingAssets: MissingAsset[] = []

  for (const file of htmlFiles) {
    const content = fs.readFileSync(file, 'utf-8')
    const refs = extractAssetRefs(content)

    for (const ref of refs) {
      // Skip external refs
      if (ref.startsWith('http://') || ref.startsWith('https://') || ref.startsWith('//')) {
        continue
      }

      // Resolve the ref
      const baseDir = path.dirname(file)
      let targetPath: string

      if (ref.startsWith('/')) {
        targetPath = path.join(OUT_DIR, ref)
      } else {
        targetPath = path.resolve(baseDir, ref)
      }

      // Remove query string
      targetPath = targetPath.split('?')[0]

      if (!fs.existsSync(targetPath)) {
        const ext = path.extname(targetPath).toLowerCase()
        const relativeFile = path.relative(process.cwd(), file)
        missingAssets.push({
          file: relativeFile,
          asset: ref,
          type: getAssetType(ext),
        })
      }
    }
  }

  if (missingAssets.length === 0) {
    console.log('✓ No missing assets found')
    console.log('')
    console.log('=== Check PASSED ===')
    process.exit(0)
  } else {
    console.log(`✗ Found ${missingAssets.length} missing assets:\n`)
    for (const ma of missingAssets) {
      console.log(`  [${ma.type}] ${ma.file}`)
      console.log(`    Asset: ${ma.asset}`)
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
