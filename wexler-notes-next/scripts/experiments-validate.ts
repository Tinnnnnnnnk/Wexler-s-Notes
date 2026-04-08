// scripts/experiments-validate.ts
// Validate experiments.json configuration

import * as fs from 'fs'
import * as path from 'path'

interface Variant {
  key: string
  weight: number
  label: string
}

interface Experiment {
  key: string
  name: string
  description: string
  enabled: boolean
  rollout: number
  startAt?: string
  endAt?: string
  variants: Variant[]
  defaultVariant: string
  trackConversion?: string[]
}

interface ExperimentsConfig {
  version: string
  experiments: Experiment[]
}

function main() {
  console.log('\n=== Experiments Validation ===\n')

  const configPath = path.join(process.cwd(), 'public', 'experiments', 'experiments.json')
  if (!fs.existsSync(configPath)) {
    console.log('✗ experiments.json not found')
    process.exit(1)
  }

  let config: ExperimentsConfig
  try {
    const content = fs.readFileSync(configPath, 'utf-8')
    config = JSON.parse(content)
  } catch (e) {
    console.log('✗ Invalid JSON:', e)
    process.exit(1)
  }

  if (!config.version) {
    console.log('✗ Missing version field')
    process.exit(1)
  }

  console.log(`✓ Version: ${config.version}`)

  if (!Array.isArray(config.experiments)) {
    console.log('✗ experiments must be an array')
    process.exit(1)
  }

  console.log(`✓ Experiments count: ${config.experiments.length}`)

  let allValid = true
  for (const exp of config.experiments) {
    console.log(`\n--- Experiment: ${exp.key} ---`)

    // Required fields
    if (!exp.key) {
      console.log('  ✗ Missing key')
      allValid = false
      continue
    }

    if (!exp.name) {
      console.log('  ✗ Missing name')
      allValid = false
    }

    if (typeof exp.enabled !== 'boolean') {
      console.log('  ✗ enabled must be boolean')
      allValid = false
    }

    if (typeof exp.rollout !== 'number' || exp.rollout < 0 || exp.rollout > 100) {
      console.log('  ✗ rollout must be 0-100')
      allValid = false
    }

    // Variants
    if (!Array.isArray(exp.variants) || exp.variants.length === 0) {
      console.log('  ✗ variants must be non-empty array')
      allValid = false
      continue
    }

    let totalWeight = 0
    for (const variant of exp.variants) {
      if (!variant.key) {
        console.log('  ✗ Variant missing key')
        allValid = false
      }
      if (typeof variant.weight !== 'number') {
        console.log('  ✗ Variant weight must be number')
        allValid = false
      }
      totalWeight += variant.weight
    }

    if (totalWeight !== 100) {
      console.log(`  ⚠ Total weight is ${totalWeight}, expected 100`)
    } else {
      console.log('  ✓ Variant weights sum to 100')
    }

    // Default variant check
    const hasDefault = exp.variants.some(v => v.key === exp.defaultVariant)
    if (!hasDefault) {
      console.log('  ✗ defaultVariant not in variants')
      allValid = false
    }

    // Time window validation
    if (exp.startAt) {
      const start = new Date(exp.startAt)
      if (isNaN(start.getTime())) {
        console.log('  ✗ Invalid startAt date')
        allValid = false
      }
    }

    if (exp.endAt) {
      const end = new Date(exp.endAt)
      if (isNaN(end.getTime())) {
        console.log('  ✗ Invalid endAt date')
        allValid = false
      }
    }

    if (exp.startAt && exp.endAt) {
      const start = new Date(exp.startAt)
      const end = new Date(exp.endAt)
      if (end <= start) {
        console.log('  ✗ endAt must be after startAt')
        allValid = false
      }
    }

    console.log('  ✓ All checks passed')
  }

  console.log('')
  if (allValid) {
    console.log('=== Validation PASSED ===')
    process.exit(0)
  } else {
    console.log('=== Validation FAILED ===')
    process.exit(1)
  }
}

main()
