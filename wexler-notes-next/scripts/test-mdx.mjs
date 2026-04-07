// scripts/test-mdx.mjs
// Test MDX compilation directly
import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

async function testFile(filePath, relPath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    // Only strip frontmatter if --- at the very beginning
    let source = raw
    const fmMatch = raw.match(/^[ \t]*(?:[\ufeff\r\n]+)?---([\s\S]*?)(?:^---[ \t]*$)/m)
    if (fmMatch) {
      const leading = raw.slice(0, fmMatch.index! + fmMatch[0].length)
      if (/^[ \t]*---/.test(leading)) {
        source = raw.slice(fmMatch.index! + fmMatch[0].length).trimStart()
      }
    }
    
    await compileMDX({
      source,
      options: {
        mdxOptions: { remarkPlugins: [remarkGfm] },
      },
    })
    return { ok: true, path: relPath }
  } catch (err) {
    return { ok: false, path: relPath, error: String(err).slice(0, 300) }
  }
}

const testFiles = [
  'Resume/简历V3.0.mdx',
  'Resume/前7天目标.mdx',
  'Code/DS/DFS.mdx',
  'Code/DS/细节部分.mdx',
  'Code/通用模板.mdx',
]

async function main() {
  for (const rel of testFiles) {
    const filePath = path.join(CONTENT_DIR, rel)
    const result = await testFile(filePath, rel)
    if (result.ok) {
      console.log(`OK: ${rel}`)
    } else {
      console.log(`FAIL: ${rel}`)
      console.log(`  ${(result as any).error}`)
    }
  }
}

main()
