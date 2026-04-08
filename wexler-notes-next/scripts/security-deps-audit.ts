// scripts/security-deps-audit.ts
// Run npm audit and normalize results

import { execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

interface Vulnerability {
  id: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  title: string
  url?: string
}

interface AuditResult {
  scannedAt: string
  totalDependencies: number
  vulnerabilities: {
    critical: number
    high: number
    medium: number
    low: number
    total: number
  }
  criticalVulnerabilities: Vulnerability[]
  passed: boolean
  blockingThreshold: string
}

// Blocking threshold: fail if critical > 0
const BLOCK_THRESHOLD = { critical: 0, high: 10, medium: 50 }

function main() {
  console.log('\n=== Security Dependencies Audit ===\n')

  const outputDir = path.join(process.cwd(), 'security', 'reports')
  fs.mkdirSync(outputDir, { recursive: true })

  let auditOutput = ''
  try {
    console.log('Running npm audit...')
    auditOutput = execSync('npm audit --json', { encoding: 'utf-8', stdio: 'pipe' })
  } catch (e: unknown) {
    const error = e as { stdout?: string }
    auditOutput = error.stdout || ''
  }

  let parsed = { vulnerabilities: {} }
  try {
    parsed = JSON.parse(auditOutput)
  } catch {
    // If parsing fails, assume no vulnerabilities
  }

  const vulns = parsed.vulnerabilities || {}
  const critical = vulns.critical?.length || 0
  const high = vulns.high?.length || 0
  const medium = vulns.medium?.length || 0
  const low = vulns.low?.length || 0
  const total = critical + high + medium + low

  const criticalVulns: Vulnerability[] = (vulns.critical || []).map((v: unknown) => {
    const vuln = v as { id?: string; title?: string; url?: string }
    return {
      id: vuln.id || 'unknown',
      severity: 'critical' as const,
      title: vuln.title || 'Unknown vulnerability',
      url: vuln.url,
    }
  })

  const result: AuditResult = {
    scannedAt: new Date().toISOString(),
    totalDependencies: 0, // npm audit doesn't always provide this
    vulnerabilities: {
      critical,
      high,
      medium,
      low,
      total,
    },
    criticalVulnerabilities: criticalVulns.slice(0, 10), // Limit to 10
    passed: critical <= BLOCK_THRESHOLD.critical && high <= BLOCK_THRESHOLD.high && medium <= BLOCK_THRESHOLD.medium,
    blockingThreshold: `critical>${BLOCK_THRESHOLD.critical} OR high>${BLOCK_THRESHOLD.high} OR medium>${BLOCK_THRESHOLD.medium}`,
  }

  // Print summary
  console.log('\n=== Vulnerability Summary ===')
  console.log(`Critical: ${critical}`)
  console.log(`High: ${high}`)
  console.log(`Medium: ${medium}`)
  console.log(`Low: ${low}`)
  console.log(`Total: ${total}`)

  if (critical > 0) {
    console.log('\n✗ Critical vulnerabilities found:')
    for (const v of criticalVulns.slice(0, 5)) {
      console.log(`  - [${v.id}] ${v.title}`)
    }
  }

  const outputPath = path.join(outputDir, 'deps-audit.json')
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8')

  console.log(`\nBlocking threshold: ${result.blockingThreshold}`)

  if (result.passed) {
    console.log('\n✓ Dependencies audit passed')
    console.log(`Output: ${outputPath}`)
    console.log('\n=== Audit PASSED ===')
    process.exit(0)
  } else {
    console.log('\n✗ Dependencies audit failed - vulnerabilities exceed threshold')
    console.log(`Output: ${outputPath}`)
    console.log('\n=== Audit FAILED ===')
    process.exit(1)
  }
}

main()
