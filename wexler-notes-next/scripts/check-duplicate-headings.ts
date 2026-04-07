// scripts/check-duplicate-headings.ts
// 运行方式: npx ts-node scripts/check-duplicate-headings.ts
// 或: node -r ts-node/register scripts/check-duplicate-headings.ts

import fs from 'fs'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

interface Heading {
  id: string
  text: string
  line: number
  level: number
}

interface DocIssue {
  file: string
  headings: Heading[]
  duplicates: Map<string, Heading[]>
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function extractHeadings(source: string, filePath: string): { headings: Heading[]; duplicates: Map<string, Heading[]> } {
  const headings: Heading[] = []
  const seenIds = new Map<string, Heading>()
  const headingRegex = /^#{2,4}\s+(.+?)(?:\s*\{#([\w-]+)\})?\s*$/gm
  
  let match
  const lines = source.split('\n')
  
  while ((match = headingRegex.exec(source)) !== null) {
    const line = source.substring(0, match.index).split('\n').length
    const rawLevel = match[0].match(/^(#+)/)?.[1].length ?? 2
    const text = match[1].trim()
    const id = match[2] ?? slugify(text)
    
    if (text) {
      const heading: Heading = { id, text, line, level: rawLevel }
      
      if (seenIds.has(id)) {
        // 标记为重复
        const original = seenIds.get(id)!
        if (!original.duplicate) {
          original.duplicate = true
          headings.push(original)
        }
        headings.push(heading)
      } else {
        seenIds.set(id, { ...heading })
      }
    }
  }
  
  return { headings, duplicates: new Map() }
}

function findDuplicateIds(source: string): Map<string, { lines: number[]; texts: string[] }> {
  const idMap = new Map<string, { lines: number[]; texts: string[] }>()
  const headingRegex = /^#{2,4}\s+(.+?)(?:\s*\{#([\w-]+)\})?\s*$/gm
  
  let match
  while ((match = headingRegex.exec(source)) !== null) {
    const line = source.substring(0, match.index).split('\n').length
    const text = match[1].trim()
    const id = match[2] ?? slugify(text)
    
    if (!idMap.has(id)) {
      idMap.set(id, { lines: [], texts: [] })
    }
    const entry = idMap.get(id)!
    entry.lines.push(line)
    entry.texts.push(text)
  }
  
  // 只返回有重复的
  const duplicates = new Map<string, { lines: number[]; texts: string[] }>()
  for (const [id, data] of idMap) {
    if (data.lines.length > 1) {
      duplicates.set(id, data)
    }
  }
  
  return duplicates
}

function scanDirectory(dir: string): DocIssue[] {
  const issues: DocIssue[] = []
  
  if (!fs.existsSync(dir)) {
    console.error(`目录不存在: ${dir}`)
    return issues
  }
  
  function walk(currentDir: string, relativePath: string = '') {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
    
    for (const entry of entries) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue
      
      const fullPath = path.join(currentDir, entry.name)
      const relPath = path.join(relativePath, entry.name)
      
      if (entry.isDirectory()) {
        walk(fullPath, relPath)
      } else if (/\.mdx?$/.test(entry.name)) {
        const source = fs.readFileSync(fullPath, 'utf-8')
        const duplicates = findDuplicateIds(source)
        
        if (duplicates.size > 0) {
          issues.push({
            file: relPath,
            headings: [],
            duplicates
          })
        }
      }
    }
  }
  
  walk(dir)
  return issues
}

function main() {
  console.log('🔍 扫描文档中的重复标题 id...\n')
  
  const issues = scanDirectory(CONTENT_DIR)
  
  if (issues.length === 0) {
    console.log('✅ 没有发现重复的标题 id！')
    process.exit(0)
  }
  
  console.log(`⚠️  发现 ${issues.length} 个文件包含重复的标题 id:\n`)
  
  for (const issue of issues) {
    console.log(`📄 ${issue.file}`)
    for (const [id, data] of issue.duplicates) {
      console.log(`   重复 id: "${id}"`)
      data.lines.forEach((line, idx) => {
        console.log(`     ${idx + 1}. 第 ${line} 行: "${data.texts[idx]}"`)
      })
    }
    console.log()
  }
  
  console.log('💡 修复建议:')
  console.log('   1. 为重复的标题添加自定义 id，例如:')
  console.log('      ## 当日题目清单要点与优先级表 {#priority-1}')
  console.log('      ## 当日题目清单要点与优先级表 {#priority-2}')
  console.log('   2. 或者修改其中一个标题的文本，使其 slug 不同')
  
  process.exit(1)
}

main()
