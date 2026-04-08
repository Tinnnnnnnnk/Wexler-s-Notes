// scripts/editor-rollback.ts
// Rollback editor layout to a specific commit

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'
import { generateRouteKey, getLayoutPath, readManifest, writeManifest } from './editor-utils'
import { logAudit } from './editor-audit-log'

function getLayoutsFromCommit(commit: string): string[] {
  try {
    const output = execSync(`git ls-tree -r --name-only ${commit} -- public/editor-layouts/layouts/`, {
      encoding: 'utf-8',
    })
    return output
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        const match = line.match(/public\/editor-layouts\/layouts\/(.+)\.json$/)
        return match ? match[1] : null
      })
      .filter(Boolean) as string[]
  } catch {
    return []
  }
}

function getFileFromCommit(commit: string, routeKey: string): unknown | null {
  try {
    const output = execSync(`git show ${commit}:public/editor-layouts/layouts/${routeKey}.json`, {
      encoding: 'utf-8',
    })
    return JSON.parse(output)
  } catch {
    return null
  }
}

function getLayoutFromHistory(routeKey: string): string[] {
  try {
    const output = execSync(`git log --oneline --all -- public/editor-layouts/layouts/${routeKey}.json`, {
      encoding: 'utf-8',
    })
    return output
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.split(' ')[0])
  } catch {
    return []
  }
}

async function main() {
  const args = process.argv.slice(2)

  if (args.length < 2 || args[0] !== '--route') {
    console.log('Usage: npx tsx scripts/editor-rollback.ts --route <route> [--commit <commit-sha>] [--confirm]')
    console.log('')
    console.log('Options:')
    console.log('  --route <path>   Route to rollback (required)')
    console.log('  --commit <sha>   Specific commit to rollback to (optional)')
    console.log('  --list           List available rollback points')
    console.log('  --confirm        Confirm rollback operation (required for production)')
    console.log('')
    console.log('Examples:')
    console.log('  # Rollback / to the previous version')
    console.log('  npx tsx scripts/editor-rollback.ts --route /')
    console.log('')
    console.log('  # Rollback /docs/xxx to a specific commit')
    console.log('  npx tsx scripts/editor-rollback.ts --route /docs/xxx --commit abc123')
    console.log('')
    console.log('  # List available rollback points for /')
    console.log('  npx tsx scripts/editor-rollback.ts --route / --list')
    process.exit(1)
  }

  const route = args[1]
  const routeKey = generateRouteKey(route)
  const confirm = args.includes('--confirm')

  const commitIndex = args.indexOf('--commit')
  const listIndex = args.indexOf('--list')

  // List mode
  if (listIndex !== -1) {
    const commits = getLayoutFromHistory(routeKey)
    console.log(`\nAvailable rollback points for ${route} (${routeKey}):\n`)
    if (commits.length === 0) {
      console.log('No history found')
    } else {
      for (const commit of commits) {
        console.log(`  - ${commit}`)
      }
    }
    return
  }

  // Production safety check
  const isProduction = process.env.NODE_ENV === 'production' || args.includes('--production')
  if (isProduction && !confirm) {
    console.error('Error: Production rollback requires --confirm flag')
    console.error('This will restore the layout to a previous version')
    console.error('')
    console.error('To confirm, run:')
    console.error(`  npx tsx scripts/editor-rollback.ts --route ${route} --confirm`)
    logAudit({
      timestamp: new Date().toISOString(),
      operation: 'rollback',
      route,
      routeKey,
      success: false,
      details: 'Rejected: --confirm flag required for production',
    })
    process.exit(1)
  }

  // Rollback mode
  const commit = commitIndex !== -1 ? args[commitIndex + 1] : null

  console.log(`\n=== Editor Layout Rollback ===\n`)
  console.log(`Route: ${route}`)
  console.log(`RouteKey: ${routeKey}`)

  // If no commit specified, find the previous commit for this file
  let targetCommit: string | null = null
  if (!commit) {
    const commits = getLayoutFromHistory(routeKey)
    if (commits.length > 1) {
      // commits[0] is the current HEAD, commits[1] is the previous
      targetCommit = commits[1]
    } else if (commits.length === 1) {
      console.log('No previous version found - this is the only version')
      logAudit({
        timestamp: new Date().toISOString(),
        operation: 'rollback',
        route,
        routeKey,
        success: false,
        details: 'No previous version available',
      })
      process.exit(1)
    } else {
      console.log('No history found for this route')
      logAudit({
        timestamp: new Date().toISOString(),
        operation: 'rollback',
        route,
        routeKey,
        success: false,
        details: 'No history found',
      })
      process.exit(1)
    }
  } else {
    targetCommit = commit
  }

  console.log(`Target commit: ${targetCommit}`)

  // Get layout from commit
  const layout = getFileFromCommit(targetCommit!, routeKey)
  if (!layout) {
    console.error(`Error: Could not find layout at commit ${targetCommit}`)
    logAudit({
      timestamp: new Date().toISOString(),
      operation: 'rollback',
      route,
      routeKey,
      success: false,
      details: `Layout not found at commit ${targetCommit}`,
    })
    process.exit(1)
  }

  // Write layout file
  const filePath = getLayoutPath(routeKey)
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify(layout, null, 2), 'utf-8')
  console.log(`✓ Layout restored: ${filePath}`)

  // Update manifest
  const manifest = readManifest()
  manifest.updatedAt = new Date().toISOString()
  if (layout && typeof layout === 'object' && 'updatedAt' in layout) {
    manifest.layouts[routeKey] = {
      updatedAt: (layout as { updatedAt: string }).updatedAt,
    }
  }
  writeManifest(manifest)
  console.log(`✓ Manifest updated`)

  // Log audit
  logAudit({
    timestamp: new Date().toISOString(),
    operation: 'rollback',
    route,
    routeKey,
    commitSha: targetCommit,
    details: `Rolled back to commit ${targetCommit}`,
    success: true,
  })
  console.log('✓ Audit log written')

  console.log('\nRollback completed!')
  console.log('\nNext steps:')
  console.log('1. Commit the rollback: git add -A && git commit -m "editor: rollback ${route} to ${targetCommit}"')
  console.log('2. Push to trigger CI: git push origin main')
}

main().catch((e) => {
  console.error('Error:', e)
  process.exit(1)
})
