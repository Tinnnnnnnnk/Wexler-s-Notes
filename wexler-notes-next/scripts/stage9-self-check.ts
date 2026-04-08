// scripts/stage9-self-check.ts
// Stage 9 self-check: security and governance validation

import * as fs from 'fs'
import * as path from 'path'

interface CheckResult {
  name: string
  passed: boolean
  details: string
}

function checkFileExists(filePath: string): boolean {
  return fs.existsSync(filePath)
}

function checkSecurityScripts(): CheckResult {
  const scripts = [
    'scripts/security-secrets-scan.ts',
    'scripts/security-pii-scan.ts',
    'scripts/security-deps-audit.ts',
    'scripts/security-config-guard.ts',
  ]

  const missing = scripts.filter((s) => !checkFileExists(path.join(process.cwd(), s)))

  return {
    name: 'Security Scripts',
    passed: missing.length === 0,
    details: missing.length === 0 ? 'All scripts present' : `Missing: ${missing.join(', ')}`,
  }
}

function checkSecurityReports(): CheckResult {
  const reportsDir = path.join(process.cwd(), 'security', 'reports')

  if (!fs.existsSync(reportsDir)) {
    return { name: 'Security Reports', passed: false, details: 'Reports directory not found' }
  }

  const requiredReports = [
    'secrets-scan.json',
    'pii-scan.json',
    'deps-audit.json',
    'config-guard.json',
  ]

  const missing = requiredReports.filter((r) => !checkFileExists(path.join(reportsDir, r)))

  return {
    name: 'Security Reports',
    passed: missing.length === 0,
    details: missing.length === 0 ? 'All reports present' : `Missing: ${missing.join(', ')}`,
  }
}

function checkSecurityDocs(): CheckResult {
  const docs = [
    'my-knowledge-base/MyWeb/Security-Baseline-Guide.md',
  ]

  const missing = docs.filter((d) => !checkFileExists(path.join(process.cwd(), '..', d)))

  return {
    name: 'Security Documentation',
    passed: missing.length === 0,
    details: missing.length === 0 ? 'Documentation present' : `Missing: ${missing.join(', ')}`,
  }
}

function checkNginxTemplate(): CheckResult {
  const templatePath = path.join(process.cwd(), 'security', 'nginx-security-headers.conf')

  if (!checkFileExists(templatePath)) {
    return { name: 'Nginx Template', passed: false, details: 'nginx-security-headers.conf not found' }
  }

  const content = fs.readFileSync(templatePath, 'utf-8')
  const hasCSP = content.includes('Content-Security-Policy')
  const hasXFrame = content.includes('X-Frame-Options')
  const hasXCTO = content.includes('X-Content-Type-Options')

  return {
    name: 'Nginx Template',
    passed: hasCSP && hasXFrame && hasXCTO,
    details: `CSP: ${hasCSP}, X-Frame: ${hasXFrame}, X-CTO: ${hasXCTO}`,
  }
}

function checkCIWorkflow(): CheckResult {
  const workflowPath = path.join(process.cwd(), '..', '.github', 'workflows', 'security-governance-gate.yml')

  if (!checkFileExists(workflowPath)) {
    return { name: 'CI Workflow', passed: false, details: 'security-governance-gate.yml not found' }
  }

  const content = fs.readFileSync(workflowPath, 'utf-8')
  const hasSecrets = content.includes('security:secrets') || content.includes('security-secrets-scan')
  const hasPII = content.includes('security:pii') || content.includes('security-pii-scan')
  const hasDeps = content.includes('security:deps') || content.includes('security-deps-audit')

  return {
    name: 'CI Workflow',
    passed: hasSecrets && hasPII && hasDeps,
    details: `Secrets: ${hasSecrets}, PII: ${hasPII}, Deps: ${hasDeps}`,
  }
}

function main() {
  console.log('\n=== Stage 9 Self-Check ===\n')

  const checks = [
    checkSecurityScripts,
    checkSecurityReports,
    checkSecurityDocs,
    checkNginxTemplate,
    checkCIWorkflow,
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
    process.exit(0)
  } else {
    console.log('=== Some checks failed ===')
    process.exit(1)
  }
}

main()
