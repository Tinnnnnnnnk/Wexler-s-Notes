// scripts/editor-apply-bundle.ts
// Apply editor layout bundle to publish directory

import * as fs from 'fs'
import * as path from 'path'
import { generateRouteKey, writeLayout, writeManifest, readManifest } from './editor-utils'

interface Bundle {
  schemaVersion?: string
  route?: string
  routeKey?: string
  updatedAt?: string
  blocks?: unknown[]
}

function validateBundle(bundle: Bundle): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!bundle.schemaVersion) {
    errors.push('Missing schemaVersion')
  } else if (bundle.schemaVersion !== 'editor-layout.v1') {
    errors.push(`Invalid schemaVersion: ${bundle.schemaVersion} (expected: editor-layout.v1)`)
  }

  if (!bundle.route) {
    errors.push('Missing route')
  }

  if (!bundle.blocks) {
    errors.push('Missing blocks')
  } else if (!Array.isArray(bundle.blocks)) {
    errors.push('blocks must be an array')
  }

  return { valid: errors.length === 0, errors }
}

async function main() {
  const args = process.argv.slice(2)

  if (args.length < 2 || args[0] !== '--input') {
    console.log('Usage: npx tsx scripts/editor-apply-bundle.ts --input <json-file>')
    process.exit(1)
  }

  const inputFile = args[1]

  if (!fs.existsSync(inputFile)) {
    console.error(`Error: Input file not found: ${inputFile}`)
    process.exit(1)
  }

  let bundle: Bundle
  try {
    const content = fs.readFileSync(inputFile, 'utf-8')
    bundle = JSON.parse(content)
  } catch (e) {
    console.error(`Error: Failed to parse JSON: ${e}`)
    process.exit(1)
  }

  // Validate bundle
  const validation = validateBundle(bundle)
  if (!validation.valid) {
    console.error('Error: Invalid bundle')
    for (const err of validation.errors) {
      console.error(`  - ${err}`)
    }
    process.exit(1)
  }

  // Generate routeKey
  const routeKey = bundle.routeKey || generateRouteKey(bundle.route!)
  const route = bundle.route!

  // Prepare layout data
  const layoutData = {
    schemaVersion: 'editor-layout.v1',
    route: route,
    routeKey: routeKey,
    updatedAt: bundle.updatedAt || new Date().toISOString(),
    blocks: bundle.blocks,
  }

  // Write layout file
  writeLayout(routeKey, layoutData)
  console.log(`✓ Layout written: public/editor-layouts/layouts/${routeKey}.json`)

  // Update manifest
  const manifest = readManifest()
  manifest.updatedAt = new Date().toISOString()
  manifest.layouts[routeKey] = {
    updatedAt: layoutData.updatedAt,
  }
  writeManifest(manifest)
  console.log(`✓ Manifest updated`)

  console.log('\nBundle applied successfully!')
  console.log(`Route: ${route}`)
  console.log(`RouteKey: ${routeKey}`)
  console.log(`Blocks: ${layoutData.blocks.length}`)

  console.log('\nNext steps:')
  console.log('1. Commit the changes: git add -A && git commit -m "editor: apply layout for ${route}"')
  console.log('2. Push to trigger CI: git push origin main')
  console.log('3. After CI passes, the layout will be live')
}

main().catch((e) => {
  console.error('Error:', e)
  process.exit(1)
})
