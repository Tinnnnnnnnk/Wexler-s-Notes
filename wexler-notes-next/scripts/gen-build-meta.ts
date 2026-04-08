// scripts/gen-build-meta.ts
// Generate build metadata for traceability

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'

interface BuildMeta {
  version: string
  commitSha: string
  branch: string
  buildTime: string
  nodeVersion: string
  sourceWorkflow: string
  buildNumber?: string
}

function getGitCommit(): string {
  try {
    return execSync('git rev-parse HEAD', { encoding: 'utf-8' }).trim()
  } catch {
    return 'unknown'
  }
}

function getGitBranch(): string {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf-8' }).trim()
  } catch {
    return 'unknown'
  }
}

function getNodeVersion(): string {
  return process.version
}

function generateVersion(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hash = getGitCommit().slice(0, 7)
  return `${year}.${month}.${day}-${hash}`
}

async function main() {
  console.log('\n=== Generate Build Metadata ===\n')

  const outDir = path.join(process.cwd(), 'public')
  fs.mkdirSync(outDir, { recursive: true })

  const meta: BuildMeta = {
    version: generateVersion(),
    commitSha: getGitCommit(),
    branch: getGitBranch(),
    buildTime: new Date().toISOString(),
    nodeVersion: getNodeVersion(),
    sourceWorkflow: process.env.GITHUB_WORKFLOW || 'local',
  }

  const outputPath = path.join(outDir, 'build-meta.json')
  fs.writeFileSync(outputPath, JSON.stringify(meta, null, 2), 'utf-8')

  console.log('✓ Build metadata generated:')
  console.log(JSON.stringify(meta, null, 2))
  console.log(`\nFile: ${outputPath}`)
}

main().catch((e) => {
  console.error('Error:', e)
  process.exit(1)
})
