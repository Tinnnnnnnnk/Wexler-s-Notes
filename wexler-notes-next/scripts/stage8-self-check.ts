// scripts/stage8-self-check.ts
// Stage 8 self-check: validate all data loop components

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

function checkTelemetryModules(): CheckResult {
  const modules = [
    'src/lib/telemetry/schema.ts',
    'src/lib/telemetry/client.ts',
    'src/lib/telemetry/session.ts',
    'src/lib/telemetry/transport.ts',
    'src/lib/telemetry/queue.ts',
    'src/lib/telemetry/webVitals.ts',
    'src/lib/telemetry/privacy.ts',
  ]

  const missing = modules.filter((m) => !checkFileExists(path.join(process.cwd(), m)))

  return {
    name: 'Telemetry Modules',
    passed: missing.length === 0,
    details: missing.length === 0 ? 'All modules present' : `Missing: ${missing.join(', ')}`,
  }
}

function checkPIIPatterns(): CheckResult {
  const telemetryDir = path.join(process.cwd(), 'src', 'lib', 'telemetry')

  if (!fs.existsSync(telemetryDir)) {
    return { name: 'PII Check', passed: false, details: 'Telemetry directory not found' }
  }

  const piiPatterns = [
    /\bemail\b/i,
    /\bphone\b/i,
    /\bname\b.*(?<!(type|label|key))/i,
    /\bip\b(?!\s*address)/,
    /\bcookie\b/i,
  ]

  let violations: string[] = []

  const files = fs.readdirSync(telemetryDir, { withFileTypes: true })
  for (const file of files) {
    if (file.isFile() && file.name.endsWith('.ts')) {
      const content = fs.readFileSync(path.join(telemetryDir, file.name), 'utf-8')

      for (const pattern of piiPatterns) {
        if (pattern.test(content)) {
          violations.push(`${file.name}: matches ${pattern}`)
        }
      }
    }
  }

  return {
    name: 'PII Check',
    passed: violations.length === 0,
    details: violations.length === 0 ? 'No PII patterns found' : `Found: ${violations.join('; ')}`,
  }
}

function checkExperimentsConfig(): CheckResult {
  const configPath = path.join(process.cwd(), 'public', 'experiments', 'experiments.json')

  if (!checkFileExists(configPath)) {
    return { name: 'Experiments Config', passed: false, details: 'experiments.json not found' }
  }

  try {
    const content = fs.readFileSync(configPath, 'utf-8')
    const config = JSON.parse(content)

    if (!config.version) {
      return { name: 'Experiments Config', passed: false, details: 'Missing version' }
    }

    if (!Array.isArray(config.experiments)) {
      return { name: 'Experiments Config', passed: false, details: 'experiments must be array' }
    }

    return { name: 'Experiments Config', passed: true, details: 'Valid configuration' }
  } catch (e) {
    return { name: 'Experiments Config', passed: false, details: `Invalid JSON: ${e}` }
  }
}

function checkReportsGenerated(): CheckResult {
  const reportsDir = path.join(process.cwd(), 'analytics', 'reports')

  if (!fs.existsSync(reportsDir)) {
    return { name: 'Reports Generated', passed: false, details: 'Reports directory not found' }
  }

  const requiredReports = [
    'telemetry-summary.json',
    'experiment-report.json',
    'experiment-decision.md',
  ]

  const missing = requiredReports.filter((r) => !checkFileExists(path.join(reportsDir, r)))

  return {
    name: 'Reports Generated',
    passed: missing.length === 0,
    details: missing.length === 0 ? 'All reports present' : `Missing: ${missing.join(', ')}`,
  }
}

function checkInsightsPage(): CheckResult {
  const pagePath = path.join(process.cwd(), 'src', 'app', 'ops', 'insights', 'page.tsx')

  if (!checkFileExists(pagePath)) {
    return { name: 'Insights Page', passed: false, details: 'page.tsx not found' }
  }

  const content = fs.readFileSync(pagePath, 'utf-8')
  const hasBuildMeta = content.includes('build-meta.json')
  const hasEventStats = content.includes('eventCounts')
  const hasExperiments = content.includes('experiments')
  const hasVitals = content.includes('WebVital') || content.includes('vitals')

  const passed = hasBuildMeta && hasEventStats && hasExperiments

  return {
    name: 'Insights Page',
    passed,
    details: `BuildMeta: ${hasBuildMeta}, EventStats: ${hasEventStats}, Experiments: ${hasExperiments}`,
  }
}

function checkAnalyticsScripts(): CheckResult {
  const scripts = [
    'scripts/aggregate-telemetry.ts',
    'scripts/experiment-report.ts',
    'scripts/experiment-decision.ts',
  ]

  const missing = scripts.filter((s) => !checkFileExists(path.join(process.cwd(), s)))

  return {
    name: 'Analytics Scripts',
    passed: missing.length === 0,
    details: missing.length === 0 ? 'All scripts present' : `Missing: ${missing.join(', ')}`,
  }
}

function main() {
  console.log('\n=== Stage 8 Self-Check ===\n')

  const checks = [
    checkTelemetryModules,
    checkPIIPatterns,
    checkExperimentsConfig,
    checkReportsGenerated,
    checkInsightsPage,
    checkAnalyticsScripts,
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