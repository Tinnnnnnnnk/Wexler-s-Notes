// scripts/check-static-params-coverage.ts
// Verifies that generateStaticParams covers all MDX files in src/content/
import fs from 'fs'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

interface ScanResult {
  totalFiles: number
  totalDirs: number
  slugs: string[]
  missingFrontmatter: string[]
}

function scanContent(dir: string, baseSlug: string = ''): ScanResult {
  if (!fs.existsSync(dir)) {
    return { totalFiles: 0, totalDirs: 0, slugs: [], missingFrontmatter: [] }
  }

  let totalFiles = 0
  let totalDirs = 0
  const slugs: string[] = []
  const missingFrontmatter: string[] = []

  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => !e.name.startsWith('_') && !e.name.startsWith('.'))

  for (const entry of entries) {
    const relPath = baseSlug ? `${baseSlug}/${entry.name}` : entry.name
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      totalDirs++
      const child = scanContent(fullPath, relPath)
      totalFiles += child.totalFiles
      slugs.push(...child.slugs)
      missingFrontmatter.push(...child.missingFrontmatter)
    } else if (/\.mdx?$/.test(entry.name)) {
      totalFiles++
      const slug = relPath.replace(/\.mdx?$/, '')
      slugs.push(slug)
      // Check frontmatter
      try {
        const raw = fs.readFileSync(fullPath, 'utf-8')
        if (!raw.startsWith('---')) {
          missingFrontmatter.push(slug)
        }
      } catch {
        // ignore
      }
    }
  }

  return { totalFiles, totalDirs, slugs, missingFrontmatter }
}

function main() {
  console.log('\n=== Static Params Coverage Check ===\n')
  console.log('Content dir:', CONTENT_DIR)
  console.log('')

  const result = scanContent(CONTENT_DIR)

  console.log('--- Summary ---')
  console.log(`Total files: ${result.totalFiles}`)
  console.log(`Total directories: ${result.totalDirs}`)
  console.log(`Slugs generated: ${result.slugs.length}`)
  console.log('')

  console.log('--- Sample Slugs (first 10) ---')
  result.slugs.slice(0, 10).forEach(slug => console.log(`  /docs/${slug}`))
  console.log('')

  if (result.missingFrontmatter.length > 0) {
    console.log('--- Files Missing Frontmatter ---')
    result.missingFrontmatter.forEach(slug => console.log(`  ${slug}`))
    console.log(`Total: ${result.missingFrontmatter.length}`)
  } else {
    console.log('--- All files have frontmatter ---')
  }

  console.log('')
  console.log('--- Key Routes ---')
  const keyRoutes = [
    '面试笔记/MyWeb/构建过程end',
    'Code/Hot100/Binary-Tree/236-二叉树的最近公共祖先',
    'PaiSmart/面试/v2-day1',
  ]
  keyRoutes.forEach(route => {
    const found = result.slugs.includes(route)
    console.log(`  ${found ? '✓' : '✗'} /docs/${route}`)
  })

  console.log('')
}

main()
