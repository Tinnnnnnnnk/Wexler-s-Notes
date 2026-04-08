// scripts/editor-build-manifest.ts
// Rebuild manifest.json from layout files

import * as fs from 'fs'
import * as path from 'path'
import { LAYOUTS_DIR, readManifest, writeManifest, listLayouts, getLayoutPath } from './editor-utils'

async function main() {
  console.log('\n=== Editor Build Manifest ===\n')

  const layouts = listLayouts()

  if (layouts.length === 0) {
    console.log('No layout files found')
    const manifest = {
      version: '1.0.0',
      updatedAt: new Date().toISOString(),
      layouts: {},
    }
    writeManifest(manifest)
    console.log('✓ Empty manifest written')
    return
  }

  const newManifest = {
    version: '1.0.0',
    updatedAt: new Date().toISOString(),
    layouts: {} as Record<string, { updatedAt: string }>,
  }

  for (const routeKey of layouts) {
    const filePath = getLayoutPath(routeKey)
    try {
      const content = fs.readFileSync(filePath, 'utf-8')
      const layout = JSON.parse(content)

      newManifest.layouts[routeKey] = {
        updatedAt: layout.updatedAt || new Date().toISOString(),
      }

      console.log(`✓ ${routeKey}: ${layout.route || '/'}`)
    } catch (e) {
      console.error(`✗ ${routeKey}: Failed to parse`)
    }
  }

  writeManifest(newManifest)
  console.log(`\n✓ Manifest rebuilt with ${layouts.length} entries`)
  console.log(`  File: public/editor-layouts/manifest.json`)
}

main().catch((e) => {
  console.error('Error:', e)
  process.exit(1)
})
