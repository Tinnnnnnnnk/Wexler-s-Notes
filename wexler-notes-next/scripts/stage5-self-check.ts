// scripts/stage5-self-check.ts
// Stage 5 self-check script for GitOps editor workflow

import * as fs from 'fs'
import * as path from 'path'

const PROJECT_ROOT = process.cwd()

interface CheckResult {
  name: string
  passed: boolean
  details: string
}

function checkDirectoryStructure(): CheckResult {
  const dirs = [
    'public/editor-layouts/layouts',
    'editor-schema',
  ]
  const missing: string[] = []

  for (const dir of dirs) {
    const fullPath = path.join(PROJECT_ROOT, dir)
    if (!fs.existsSync(fullPath)) {
      missing.push(dir)
    }
  }

  return {
    name: '目录结构',
    passed: missing.length === 0,
    details: missing.length === 0 ? '所有目录已创建' : `缺少: ${missing.join(', ')}`,
  }
}

function checkSchemaFile(): CheckResult {
  const schemaPath = path.join(PROJECT_ROOT, 'editor-schema', 'layout.schema.json')
  if (!fs.existsSync(schemaPath)) {
    return { name: 'Schema文件', passed: false, details: 'layout.schema.json 不存在' }
  }

  const content = fs.readFileSync(schemaPath, 'utf-8')
  const schema = JSON.parse(content)

  const hasVersion = schema.properties?.schemaVersion?.const === 'editor-layout.v1'
  const hasRoute = schema.properties?.route !== undefined
  const hasRouteKey = schema.properties?.routeKey !== undefined
  const hasBlocks = schema.properties?.blocks !== undefined

  return {
    name: 'Schema文件',
    passed: hasVersion && hasRoute && hasRouteKey && hasBlocks,
    details: `version: ${hasVersion ? '✓' : '✗'}, route: ${hasRoute ? '✓' : '✗'}, routeKey: ${hasRouteKey ? '✓' : '✗'}, blocks: ${hasBlocks ? '✓' : '✗'}`,
  }
}

function checkManifestFile(): CheckResult {
  const manifestPath = path.join(PROJECT_ROOT, 'public', 'editor-layouts', 'manifest.json')
  if (!fs.existsSync(manifestPath)) {
    return { name: 'Manifest文件', passed: false, details: 'manifest.json 不存在' }
  }

  try {
    const content = fs.readFileSync(manifestPath, 'utf-8')
    const manifest = JSON.parse(content)
    const hasVersion = manifest.version !== undefined
    const hasLayouts = manifest.layouts !== undefined

    return {
      name: 'Manifest文件',
      passed: hasVersion && hasLayouts,
      details: `version: ${hasVersion ? '✓' : '✗'}, layouts: ${hasLayouts ? '✓' : '✗'}`,
    }
  } catch {
    return { name: 'Manifest文件', passed: false, details: 'JSON解析失败' }
  }
}

function checkScripts(): CheckResult {
  const scripts = [
    'scripts/editor-utils.ts',
    'scripts/editor-validate.ts',
    'scripts/editor-apply-bundle.ts',
    'scripts/editor-build-manifest.ts',
    'scripts/editor-rollback.ts',
  ]
  const missing: string[] = []

  for (const script of scripts) {
    const fullPath = path.join(PROJECT_ROOT, script)
    if (!fs.existsSync(fullPath)) {
      missing.push(script)
    }
  }

  return {
    name: '脚本文件',
    passed: missing.length === 0,
    details: missing.length === 0 ? '所有脚本已创建' : `缺少: ${missing.join(', ')}`,
  }
}

function checkPackageScripts(): CheckResult {
  const packagePath = path.join(PROJECT_ROOT, 'package.json')
  if (!fs.existsSync(packagePath)) {
    return { name: 'Package Scripts', passed: false, details: 'package.json 不存在' }
  }

  const content = fs.readFileSync(packagePath, 'utf-8')
  const packageJson = JSON.parse(content)

  const requiredScripts = [
    'editor:validate',
    'editor:manifest',
    'editor:apply',
    'editor:rollback',
    'stage5:self-check',
  ]

  const missing: string[] = []
  for (const script of requiredScripts) {
    if (!packageJson.scripts?.[script]) {
      missing.push(script)
    }
  }

  return {
    name: 'Package Scripts',
    passed: missing.length === 0,
    details: missing.length === 0 ? '所有脚本已配置' : `缺少: ${missing.join(', ')}`,
  }
}

function checkCIWorkflow(): CheckResult {
  const workflowPath = path.join(PROJECT_ROOT, '..', '.github', 'workflows', 'editor-config-check.yml')
  if (!fs.existsSync(workflowPath)) {
    return { name: 'CI Workflow', passed: false, details: 'editor-config-check.yml 不存在' }
  }

  const content = fs.readFileSync(workflowPath, 'utf-8')
  const hasValidateStep = content.includes('editor:validate')
  const hasBuildStep = content.includes('next:build') || content.includes('npm run build')

  return {
    name: 'CI Workflow',
    passed: hasValidateStep && hasBuildStep,
    details: `validate: ${hasValidateStep ? '✓' : '✗'}, build: ${hasBuildStep ? '✓' : '✗'}`,
  }
}

function checkEditorUtils(): CheckResult {
  const utilsPath = path.join(PROJECT_ROOT, 'scripts', 'editor-utils.ts')
  if (!fs.existsSync(utilsPath)) {
    return { name: 'Editor Utils', passed: false, details: 'editor-utils.ts 不存在' }
  }

  const content = fs.readFileSync(utilsPath, 'utf-8')
  const hasGenerateRouteKey = content.includes('generateRouteKey')
  const hasReverseRouteKey = content.includes('reverseRouteKey')
  const hasReadManifest = content.includes('readManifest')
  const hasWriteLayout = content.includes('writeLayout')

  return {
    name: 'Editor Utils',
    passed: hasGenerateRouteKey && hasReverseRouteKey && hasReadManifest && hasWriteLayout,
    details: `generateRouteKey: ${hasGenerateRouteKey ? '✓' : '✗'}, reverseRouteKey: ${hasReverseRouteKey ? '✓' : '✗'}, readManifest: ${hasReadManifest ? '✓' : '✗'}, writeLayout: ${hasWriteLayout ? '✓' : '✗'}`,
  }
}

function main() {
  console.log('\n=== Stage 5 Self-Check ===\n')

  const checks = [
    checkDirectoryStructure,
    checkSchemaFile,
    checkManifestFile,
    checkScripts,
    checkPackageScripts,
    checkCIWorkflow,
    checkEditorUtils,
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
    console.log('=== All checks passed ===')
  } else {
    console.log('=== Some checks failed ===')
  }
  console.log('')
}

main()
