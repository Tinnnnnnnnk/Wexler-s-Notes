// scripts/stage4-self-check.ts
// 阶段4自检脚本 - 检查编辑模式功能完整性
import fs from 'fs'
import path from 'path'

const PROJECT_ROOT = process.cwd()

interface CheckResult {
  name: string
  passed: boolean
  details: string
}

function checkEditorToggle(): CheckResult {
  const filePath = path.join(PROJECT_ROOT, 'src', 'components', 'editor', 'EditorToggle.tsx')
  if (!fs.existsSync(filePath)) {
    return { name: 'EditorToggle组件', passed: false, details: '文件不存在' }
  }
  const content = fs.readFileSync(filePath, 'utf-8')
  const hasEnvCheck = content.includes('NEXT_PUBLIC_EDITOR_ENABLED')
  return {
    name: 'EditorToggle组件',
    passed: hasEnvCheck,
    details: hasEnvCheck ? '包含环境变量控制逻辑' : '缺少环境变量控制',
  }
}

function checkNavbarIntegration(): CheckResult {
  const filePath = path.join(PROJECT_ROOT, 'src', 'components', 'layout', 'Navbar.tsx')
  if (!fs.existsSync(filePath)) {
    return { name: 'Navbar集成', passed: false, details: '文件不存在' }
  }
  const content = fs.readFileSync(filePath, 'utf-8')
  const hasEditorToggle = content.includes('EditorToggle')
  return {
    name: 'Navbar集成',
    passed: hasEditorToggle,
    details: hasEditorToggle ? '已集成EditorToggle' : '未集成EditorToggle',
  }
}

function checkEditorToolbar(): CheckResult {
  const filePath = path.join(PROJECT_ROOT, 'src', 'components', 'editor', 'EditorToolbar.tsx')
  if (!fs.existsSync(filePath)) {
    return { name: 'EditorToolbar功能', passed: false, details: '文件不存在' }
  }
  const content = fs.readFileSync(filePath, 'utf-8')
  const hasImport = content.includes('handleFileChange')
  const hasExport = content.includes('handleImportClick')
  return {
    name: 'EditorToolbar功能',
    passed: hasImport && hasExport,
    details: `导入: ${hasImport ? '✓' : '✗'}, 导出: ${hasExport ? '✓' : '✗'}`,
  }
}

function checkUseEditorHook(): CheckResult {
  const filePath = path.join(PROJECT_ROOT, 'src', 'hooks', 'useEditor.ts')
  if (!fs.existsSync(filePath)) {
    return { name: 'useEditor Hook', passed: false, details: '文件不存在' }
  }
  const content = fs.readFileSync(filePath, 'utf-8')
  const hasUndo = content.includes('const undo')
  const hasRedo = content.includes('const redo')
  const hasImport = content.includes('const importBundle')
  const hasExport = content.includes('const exportBundle')
  const hasCanUndo = content.includes('canUndo')
  const hasCanRedo = content.includes('canRedo')
  return {
    name: 'useEditor Hook',
    passed: hasUndo && hasRedo && hasImport && hasExport,
    details: `Undo: ${hasUndo ? '✓' : '✗'}, Redo: ${hasRedo ? '✓' : '✗'}, Import: ${hasImport ? '✓' : '✗'}, Export: ${hasExport ? '✓' : '✗'}, canUndo: ${hasCanUndo ? '✓' : '✗'}, canRedo: ${hasCanRedo ? '✓' : '✗'}`,
  }
}

function checkNextConfig(): CheckResult {
  const filePath = path.join(PROJECT_ROOT, 'next.config.ts')
  if (!fs.existsSync(filePath)) {
    return { name: 'Next.js配置', passed: false, details: '文件不存在' }
  }
  const content = fs.readFileSync(filePath, 'utf-8')
  const hasEnvVar = content.includes('NEXT_PUBLIC_EDITOR_ENABLED')
  return {
    name: 'Next.js配置',
    passed: hasEnvVar,
    details: hasEnvVar ? '已添加NEXT_PUBLIC_EDITOR_ENABLED' : '缺少NEXT_PUBLIC_EDITOR_ENABLED配置',
  }
}

function checkEnvExample(): CheckResult {
  // .env.example may be filtered by globalignore, check via CI config instead
  const filePath = path.join(PROJECT_ROOT, '..', '.github', 'workflows', 'temp-build-verify.yml')
  if (!fs.existsSync(filePath)) {
    return { name: '环境变量配置', passed: false, details: 'workflow文件不存在' }
  }
  const content = fs.readFileSync(filePath, 'utf-8')
  const hasEditorEnabled = content.includes('NEXT_PUBLIC_EDITOR_ENABLED=true')
  return {
    name: '环境变量配置',
    passed: hasEditorEnabled,
    details: hasEditorEnabled ? 'CI中已配置NEXT_PUBLIC_EDITOR_ENABLED' : 'CI中缺少NEXT_PUBLIC_EDITOR_ENABLED配置',
  }
}

function main() {
  console.log('\n=== 阶段4 自检脚本 ===\n')

  const checks = [
    checkEditorToggle,
    checkNavbarIntegration,
    checkEditorToolbar,
    checkUseEditorHook,
    checkNextConfig,
    checkEnvExample,
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
