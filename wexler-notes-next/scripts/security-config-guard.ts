// scripts/security-config-guard.ts
// Validate environment variable security configurations

import * as fs from 'fs'
import * as path from 'path'

interface ConfigFinding {
  variable: string
  expected?: string
  actual?: string
  severity: 'critical' | 'high' | 'medium'
  description: string
}

interface GuardResult {
  scannedAt: string
  totalChecks: number
  totalFindings: number
  findings: ConfigFinding[]
  passed: boolean
}

// Security configuration rules
const CONFIG_RULES = [
  {
    variable: 'NEXT_PUBLIC_EDITOR_ENABLED',
    defaultInProduction: 'false',
    description: 'Editor should be disabled in production by default',
    severity: 'high' as const,
  },
  {
    variable: 'NEXT_PUBLIC_TELEMETRY_ENABLED',
    checkHasValue: true,
    description: 'Telemetry must have explicit value (true/false)',
    severity: 'medium' as const,
  },
  {
    variable: 'NEXT_PUBLIC_TELEMETRY_SAMPLE_RATE',
    checkRange: { min: 0, max: 1 },
    description: 'Sample rate must be between 0 and 1',
    severity: 'high' as const,
  },
  {
    variable: 'NEXT_PUBLIC_TELEMETRY_ENDPOINT',
    checkForLocalhost: true,
    description: 'Endpoint should not point to localhost in production',
    severity: 'medium' as const,
  },
]

function checkEnvFiles(): ConfigFinding[] {
  const findings: ConfigFinding[] = []
  const projectRoot = process.cwd()

  const envFiles = [
    '.env.production',
    '.env.production.local',
    '.env.local',
    'wexler-notes-next/.env.production',
    'wexler-notes-next/.env.production.local',
    'wexler-notes-next/.env.local',
  ]

  for (const envFile of envFiles) {
    const fullPath = path.join(projectRoot, envFile)
    if (!fs.existsSync(fullPath)) continue

    try {
      const content = fs.readFileSync(fullPath, 'utf-8')
      const lines = content.split('\n')

      for (const rule of CONFIG_RULES) {
        const line = lines.find((l) => l.startsWith(`${rule.variable}=`))
        if (!line) {
          if (rule.checkHasValue && envFile.includes('production')) {
            findings.push({
              variable: rule.variable,
              expected: 'must have explicit value',
              actual: 'not set',
              severity: rule.severity,
              description: `${rule.description} (in ${envFile})`,
            })
          }
          continue
        }

        const value = line.split('=')[1]?.trim()?.replace(/["']/g, '') || ''

        // Check range
        if (rule.checkRange) {
          const num = parseFloat(value)
          if (isNaN(num) || num < rule.checkRange.min || num > rule.checkRange.max) {
            findings.push({
              variable: rule.variable,
              expected: `${rule.checkRange.min} <= value <= ${rule.checkRange.max}`,
              actual: value,
              severity: rule.severity,
              description: `${rule.description} (in ${envFile})`,
            })
          }
        }

        // Check localhost
        if (rule.checkForLocalhost && value.includes('localhost') && envFile.includes('production')) {
          findings.push({
            variable: rule.variable,
            expected: 'no localhost URL',
            actual: value,
            severity: 'high',
            description: `Endpoint should not use localhost in production (in ${envFile})`,
          })
        }
      }
    } catch {
      // Ignore read errors
    }
  }

  return findings
}

function checkSchemaDefaults(): ConfigFinding[] {
  const findings: ConfigFinding[] = []

  // Check telemetry schema for default values
  const schemaPath = path.join(process.cwd(), 'src', 'lib', 'telemetry', 'schema.ts')
  if (fs.existsSync(schemaPath)) {
    const content = fs.readFileSync(schemaPath, 'utf-8')

    // Verify PII fields are not in allowed list
    const piiFields = ['email', 'phone', 'name', 'address', 'ip', 'cookie', 'userId']
    for (const field of piiFields) {
      if (content.includes(`'${field}'`) || content.includes(`"${field}"`)) {
        findings.push({
          variable: `schema.${field}`,
          severity: 'critical',
          description: `PII field "${field}" found in telemetry schema - this is a critical violation`,
        })
      }
    }
  }

  return findings
}

function main() {
  console.log('\n=== Security Config Guard ===\n')

  const outputDir = path.join(process.cwd(), 'security', 'reports')
  fs.mkdirSync(outputDir, { recursive: true })

  const envFindings = checkEnvFiles()
  const schemaFindings = checkSchemaDefaults()
  const allFindings = [...envFindings, ...schemaFindings]

  // Print findings
  if (allFindings.length > 0) {
    console.log('Findings:')
    for (const finding of allFindings) {
      console.log(`\n✗ [${finding.severity}] ${finding.variable}`)
      console.log(`  ${finding.description}`)
      if (finding.expected) {
        console.log(`  Expected: ${finding.expected}`)
      }
      if (finding.actual) {
        console.log(`  Actual: ${finding.actual}`)
      }
    }
  }

  const result: GuardResult = {
    scannedAt: new Date().toISOString(),
    totalChecks: CONFIG_RULES.length,
    totalFindings: allFindings.length,
    findings: allFindings,
    passed: allFindings.length === 0,
  }

  const outputPath = path.join(outputDir, 'config-guard.json')
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8')

  console.log('\n=== Summary ===')
  console.log(`Checks performed: ${result.totalChecks}`)
  console.log(`Findings: ${result.totalFindings}`)

  if (result.passed) {
    console.log('\n✓ Configuration guard passed')
    console.log(`Output: ${outputPath}`)
    console.log('\n=== Guard PASSED ===')
    process.exit(0)
  } else {
    console.log('\n✗ Configuration issues found')
    console.log(`Output: ${outputPath}`)
    console.log('\n=== Guard FAILED ===')
    process.exit(1)
  }
}

main()
