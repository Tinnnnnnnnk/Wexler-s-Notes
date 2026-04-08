// scripts/editor-audit-log.ts
// Audit log for editor operations

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'

export interface AuditEntry {
  timestamp: string
  operation: 'apply' | 'rollback' | 'validate'
  route?: string
  routeKey?: string
  commitSha?: string
  user?: string
  details?: string
  success: boolean
}

const AUDIT_DIR = path.join(process.cwd(), 'security', 'reports')
const AUDIT_FILE = path.join(AUDIT_DIR, 'editor-audit.json')

export function logAudit(entry: AuditEntry): void {
  fs.mkdirSync(AUDIT_DIR, { recursive: true })

  let logs: AuditEntry[] = []

  if (fs.existsSync(AUDIT_FILE)) {
    try {
      const content = fs.readFileSync(AUDIT_FILE, 'utf-8')
      logs = JSON.parse(content)
    } catch {
      logs = []
    }
  }

  // Add git info
  try {
    entry.commitSha = execSync('git rev-parse HEAD', { encoding: 'utf-8' }).trim().substring(0, 7)
    entry.user = execSync('git config user.email || echo "unknown"', { encoding: 'utf-8' }).trim()
  } catch {
    // Ignore git errors
  }

  logs.push(entry)

  // Keep last 100 entries
  const trimmed = logs.slice(-100)

  fs.writeFileSync(AUDIT_FILE, JSON.stringify(trimmed, null, 2), 'utf-8')
}

export function getAuditLog(): AuditEntry[] {
  if (!fs.existsSync(AUDIT_FILE)) return []

  try {
    const content = fs.readFileSync(AUDIT_FILE, 'utf-8')
    return JSON.parse(content)
  } catch {
    return []
  }
}
