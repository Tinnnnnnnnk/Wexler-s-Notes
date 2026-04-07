// scripts/stage3-self-check.ts
// 阶段3自检脚本 - 检查关键路由、导出健康度、风格类名状态
import fs from 'fs'
import path from 'path'

const OUT_DIR = path.join(process.cwd(), 'out')
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

interface CheckResult {
  name: string
  passed: boolean
  details: string
}

function checkExportExists(): CheckResult {
  const exists = fs.existsSync(OUT_DIR)
  return {
    name: '导出目录存在',
    passed: exists,
    details: exists ? `out/ 目录已生成` : 'out/ 目录不存在',
  }
}

function checkDocsExport(): CheckResult {
  if (!fs.existsSync(OUT_DIR)) {
    return { name: 'Docs页面导出', passed: false, details: 'out/ 不存在' }
  }
  const docsDir = path.join(OUT_DIR, 'docs')
  if (!fs.existsSync(docsDir)) {
    return { name: 'Docs页面导出', passed: false, details: 'out/docs/ 目录不存在' }
  }
  const htmlFiles = getFilesRecursively(docsDir).filter(f => f.endsWith('.html'))
  return {
    name: 'Docs页面导出',
    passed: htmlFiles.length > 0,
    details: `找到 ${htmlFiles.length} 个 HTML 文件`,
  }
}

function checkNoNextError(): CheckResult {
  if (!fs.existsSync(OUT_DIR)) {
    return { name: '__next_error__检查', passed: false, details: 'out/ 不存在' }
  }
  const allFiles = getFilesRecursively(OUT_DIR)
  const errorFiles = allFiles.filter(f => {
    try {
      const content = fs.readFileSync(f, 'utf-8')
      return content.includes('__next_error__')
    } catch {
      return false
    }
  })
  return {
    name: '__next_error__检查',
    passed: errorFiles.length === 0,
    details: errorFiles.length === 0 ? '0 个错误页' : `发现 ${errorFiles.length} 个错误页`,
  }
}

function checkStaticParamsCoverage(): CheckResult {
  if (!fs.existsSync(CONTENT_DIR)) {
    return { name: '静态参数覆盖', passed: false, details: 'content/ 不存在' }
  }
  const mdxFiles = getFilesRecursively(CONTENT_DIR).filter(f => /\.mdx?$/.test(f))
  return {
    name: '静态参数覆盖',
    passed: mdxFiles.length > 0,
    details: `找到 ${mdxFiles.length} 个 MDX 文件`,
  }
}

function checkKeyRoutes(): CheckResult {
  const keyRoutes = [
    'docs/面试笔记/MyWeb/构建过程end',
    'docs/Code/Hot100/Binary-Tree/236-二叉树的最近公共祖先',
    'docs/Code/Hot100/Binary-Tree',
    'docs/Info/Software',
    'docs/PaiSmart/面试/v2-day1',
  ]

  if (!fs.existsSync(OUT_DIR)) {
    return { name: '关键路由检查', passed: false, details: 'out/ 不存在' }
  }

  const results: string[] = []
  let passed = 0

  for (const route of keyRoutes) {
    // Check if the HTML file exists for this route
    const candidates = [
      path.join(OUT_DIR, `${route}.html`),
      path.join(OUT_DIR, route, 'index.html'),
    ]
    const exists = candidates.some(c => fs.existsSync(c))
    results.push(`  ${exists ? '✓' : '✗'} /${route}`)
    if (exists) passed++
  }

  return {
    name: '关键路由检查',
    passed: passed === keyRoutes.length,
    details: `\n${results.join('\n')}\n通过 ${passed}/${keyRoutes.length}`,
  }
}

function getFilesRecursively(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  const results: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...getFilesRecursively(full))
    } else {
      results.push(full)
    }
  }
  return results
}

function main() {
  console.log('\n=== 阶段3 自检脚本 ===\n')

  const checks = [
    checkExportExists,
    checkDocsExport,
    checkNoNextError,
    checkStaticParamsCoverage,
    checkKeyRoutes,
  ]

  let allPassed = true

  for (const check of checks) {
    const result = check()
    const icon = result.passed ? '✓' : '✗'
    console.log(`${icon} ${result.name}: ${result.details}`)
    if (!result.passed) allPassed = false
  }

  console.log('')
  if (allPassed) {
    console.log('=== 所有检查通过 ===')
  } else {
    console.log('=== 部分检查失败 ===')
  }
  console.log('')
}

main()
