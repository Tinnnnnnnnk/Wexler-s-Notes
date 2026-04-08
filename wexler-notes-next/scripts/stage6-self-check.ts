// scripts/stage6-self-check.ts
// Stage 6 self-check: run all quality gates

import { execSync } from 'child_process'

interface CheckResult {
  name: string
  passed: boolean
  output: string
}

function runCommand(name: string, cmd: string): CheckResult {
  console.log(`\n--- Running: ${name} ---\n`)
  try {
    const output = execSync(cmd, { encoding: 'utf-8', stdio: 'pipe' })
    console.log(output)
    return { name, passed: true, output }
  } catch (e: unknown) {
    const error = e as { stdout?: string; stderr?: string; message?: string }
    const output = error.stdout || error.stderr || error.message || ''
    console.log(output)
    return { name, passed: false, output }
  }
}

async function main() {
  console.log('\n=== Stage 6 Self-Check ===')
  console.log('Running all quality gates...\n')

  const checks: CheckResult[] = []

  // 1. Lint
  checks.push(runCommand('Lint', 'npm run lint'))

  // 2. Editor Validate
  checks.push(runCommand('Editor Validate', 'npm run editor:validate'))

  // 3. Export Links Check (requires build)
  checks.push(runCommand('Export Links Check', 'npm run export:check-links'))

  // 4. Export Assets Check (requires build)
  checks.push(runCommand('Export Assets Check', 'npm run export:check-assets'))

  // 5. Performance Budget (requires build)
  checks.push(runCommand('Performance Budget', 'npm run perf:budget'))

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

main().catch((e) => {
  console.error('Error:', e)
  process.exit(1)
})
