// scripts/editor-validate.ts
// Validate editor layout files against schema

import Ajv from 'ajv'
import * as fs from 'fs'
import * as path from 'path'
import { readManifest, listLayouts, getLayoutPath } from './editor-utils'

const SCHEMA_PATH = path.join(process.cwd(), 'editor-schema', 'layout.schema.json')
const MANIFEST_PATH = path.join(process.cwd(), 'public', 'editor-layouts', 'manifest.json')
const LAYOUTS_DIR = path.join(process.cwd(), 'public', 'editor-layouts', 'layouts')

interface ValidationResult {
  passed: boolean
  errors: string[]
  warnings: string[]
}

async function loadSchema(): Promise<unknown> {
  try {
    return JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf-8'))
  } catch (e) {
    throw new Error(`Failed to load schema: ${SCHEMA_PATH}`)
  }
}

async function validateLayouts(): Promise<ValidationResult> {
  const errors: string[] = []
  const warnings: string[] = []

  if (!fs.existsSync(LAYOUTS_DIR)) {
    warnings.push('Layouts directory does not exist')
    return { passed: errors.length === 0, errors, warnings }
  }

  const schema = await loadSchema()
  const ajv = new Ajv({ allErrors: true })
  const validate = ajv.compile(schema)

  const layoutFiles = listLayouts()

  if (layoutFiles.length === 0) {
    warnings.push('No layout files found')
  }

  for (const routeKey of layoutFiles) {
    const filePath = getLayoutPath(routeKey)
    try {
      const content = fs.readFileSync(filePath, 'utf-8')
      const layout = JSON.parse(content)

      const valid = validate(layout)
      if (!valid && validate.errors) {
        for (const err of validate.errors) {
          errors.push(`[${routeKey}] ${err.instancePath}: ${err.message}`)
        }
      }

      // Additional checks
      if (layout.routeKey !== routeKey) {
        errors.push(`[${routeKey}] routeKey mismatch: file name is '${routeKey}' but layout.routeKey is '${layout.routeKey}'`)
      }

      // Check blocks
      if (layout.blocks && Array.isArray(layout.blocks)) {
        for (let i = 0; i < layout.blocks.length; i++) {
          const block = layout.blocks[i]
          if (!block.id) {
            errors.push(`[${routeKey}] Block ${i}: missing id`)
          }
          if (typeof block.x !== 'number') {
            errors.push(`[${routeKey}] Block ${i}: x must be a number`)
          }
          if (typeof block.y !== 'number') {
            errors.push(`[${routeKey}] Block ${i}: y must be a number`)
          }
        }
      } else {
        errors.push(`[${routeKey}] Missing or invalid blocks array`)
      }
    } catch (e) {
      errors.push(`[${routeKey}] Failed to parse: ${e}`)
    }
  }

  return { passed: errors.length === 0, errors, warnings }
}

async function validateManifest(): Promise<ValidationResult> {
  const errors: string[] = []
  const warnings: string[] = []

  if (!fs.existsSync(MANIFEST_PATH)) {
    errors.push('manifest.json does not exist')
    return { passed: false, errors, warnings }
  }

  try {
    const manifest = readManifest()

    if (!manifest.version) {
      errors.push('manifest.json: missing version')
    }

    if (!manifest.layouts || typeof manifest.layouts !== 'object') {
      errors.push('manifest.json: missing or invalid layouts object')
    }

    // Verify all entries in manifest have corresponding files
    const layoutFiles = listLayouts()
    for (const routeKey of Object.keys(manifest.layouts || {})) {
      if (!layoutFiles.includes(routeKey)) {
        errors.push(`manifest.json: entry '${routeKey}' exists but file does not`)
      }
    }

    // Verify all files are listed in manifest
    for (const routeKey of layoutFiles) {
      if (!manifest.layouts || !manifest.layouts[routeKey]) {
        errors.push(`manifest.json: file '${routeKey}.json' exists but not listed in manifest`)
      }
    }
  } catch (e) {
    errors.push(`manifest.json: Failed to parse: ${e}`)
  }

  return { passed: errors.length === 0, errors, warnings }
}

async function main() {
  console.log('\n=== Editor Layout Validation ===\n')

  let allPassed = true

  // Validate layouts
  console.log('--- Validating Layouts ---')
  const layoutResult = await validateLayouts()

  if (layoutResult.passed) {
    console.log('✓ Layouts: All files valid')
  } else {
    console.log('✗ Layouts: Validation failed')
    allPassed = false
  }

  for (const err of layoutResult.errors) {
    console.log(`  ✗ ${err}`)
  }

  for (const warn of layoutResult.warnings) {
    console.log(`  ⚠ ${warn}`)
  }

  // Validate manifest
  console.log('\n--- Validating Manifest ---')
  const manifestResult = await validateManifest()

  if (manifestResult.passed) {
    console.log('✓ Manifest: Valid')
  } else {
    console.log('✗ Manifest: Validation failed')
    allPassed = false
  }

  for (const err of manifestResult.errors) {
    console.log(`  ✗ ${err}`)
  }

  console.log('')

  if (allPassed) {
    console.log('=== Validation PASSED ===')
    process.exit(0)
  } else {
    console.log('=== Validation FAILED ===')
    process.exit(1)
  }
}

main().catch((e) => {
  console.error('Validation error:', e)
  process.exit(1)
})
