// scripts/stage7-self-check.ts
// Stage 7 self-check: validate telemetry and experiments

import { execSync } from 'child_process'

interface CheckResult {
  name: string
  passed: boolean
}

function runCheck(name: string, cmd: string): CheckResult {
  console.log(`\n--- Running: ${name} ---\n`)
  try {
    const output = execSync(cmd, { encoding: 'utf-8', stdio: 'pipe' })
    console.log(output)
    return { name, passed: true }
  } catch (e: unknown) {
    const error = e as { stdout?: string; stderr?: string }
    const output = error.stdout || error.stderr || ''
    console.log(output)
    return { name, passed: false }
  }
}

async function main() {
  console.log('\n=== Stage 7 Self-Check ===\n')

  const checks: CheckResult[] = []

  // 1. Lint
  checks.push(runCheck('Lint', 'npm run lint'))

  // 2. Telemetry Validation
  checks.push(runCheck('Telemetry Validation', 'npm run telemetry:validate'))

  // 3. Experiments Validation
  checks.push(runCheck('Experiments Validation', 'npm run experiments:validate'))

  // Summary
  console.log('\n\n=== Summary ===\n')
  let allPassed = true
  for (const check of checks) {
    const status = check.passed ? '✓' : '✗'
    console.log(`${status} ${check.name}`)
    if (!check.passed) allPassed = false
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
