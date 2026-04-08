// scripts/security-secrets-scan.ts
// Scan for hardcoded secrets, tokens, and private keys

import * as fs from 'fs'
import * as path from 'path'

interface SecretFinding {
  file: string
  line: number
  type: string
  match: string
  severity: 'critical' | 'high' | 'medium'
}

interface ScanResult {
  scannedAt: string
  totalFiles: number
  totalFindings: number
  findings: SecretFinding[]
  passed: boolean
}

// High-risk patterns
const SECRET_PATTERNS = [
  { pattern: /-----BEGIN (RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY-----/gi, type: 'Private Key', severity: 'critical' as const },
  { pattern: /api[_-]?key["\s]*[=:]["\s]*[a-zA-Z0-9]{20,}/gi, type: 'API Key', severity: 'critical' as const },
  { pattern: /secret[_-]?key["\s]*[=:]["\s]*[a-zA-Z0-9]{16,}/gi, type: 'Secret Key', severity: 'critical' as const },
  { pattern: /token["\s]*[=:]["\s]*[a-zA-Z0-9_-]{20,}/gi, type: 'Token', severity: 'high' as const },
  { pattern: /password["\s]*[=:]["\s]*["'][^"']{6,}["']/gi, type: 'Password', severity: 'high' as const },
  { pattern: /aws[_-]?access[_-]?key[_-]?id["\s]*[=:]["\s]*[A-Z0-9]{16,20}/gi, type: 'AWS Access Key', severity: 'critical' as const },
  { pattern: /sk-[a-zA-Z0-9]{20,}/gi, type: 'Stripe Secret Key', severity: 'critical' as const },
  { pattern: /ghp_[a-zA-Z0-9]{36}/gi, type: 'GitHub Personal Token', severity: 'critical' as const },
  { pattern: /xox[baprs]-[a-zA-Z0-9]{10,}/gi, type: 'Slack Token', severity: 'critical' as const },
]

// Allowed files/directories
const EXCLUDED_PATHS = [
  'node_modules',
  '.git',
  'out',
  '.next',
  'coverage',
  'security/reports',
  '.env.example',
  '.env.local.example',
]

// Allowed file extensions
const SCANNABLE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.env', '.yml', '.yaml', '.md']

function shouldExclude(filePath: string): boolean {
  for (const excluded of EXCLUDED_PATHS) {
    if (filePath.includes(excluded)) return true
  }
  return false
}

function scanFile(filePath: string): SecretFinding[] {
  const findings: SecretFinding[] = []

  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const lines = content.split('\n')

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      for (const { pattern, type, severity } of SECRET_PATTERNS) {
        // Reset lastIndex for global patterns
        pattern.lastIndex = 0
        if (pattern.test(line)) {
          findings.push({
            file: path.relative(process.cwd(), filePath),
            line: i + 1,
            type,
            match: line.substring(0, 100).trim(),
            severity,
          })
        }
      }
    }
  } catch {
    // Ignore read errors
  }

  return findings
}

function findFiles(dir: string): string[] {
  const files: string[] = []

  if (!fs.existsSync(dir)) return files

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (shouldExclude(fullPath)) continue

    if (entry.isDirectory()) {
      files.push(...findFiles(fullPath))
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase()
      if (SCANNABLE_EXTENSIONS.includes(ext)) {
        files.push(fullPath)
      }
    }
  }

  return files
}

function main() {
  console.log('\n=== Security Secrets Scan ===\n')

  const outputDir = path.join(process.cwd(), 'security', 'reports')
  fs.mkdirSync(outputDir, { recursive: true })

  const files = findFiles(process.cwd())
  console.log(`Scanning ${files.length} files...`)

  const allFindings: SecretFinding[] = []

  for (const file of files) {
    const findings = scanFile(file)
    allFindings.push(...findings)

    if (findings.length > 0) {
      console.log(`\n✗ ${path.relative(process.cwd(), file)}:`)
      for (const finding of findings) {
        console.log(`  Line ${finding.line}: [${finding.severity}] ${finding.type}`)
      }
    }
  }

  const result: ScanResult = {
    scannedAt: new Date().toISOString(),
    totalFiles: files.length,
    totalFindings: allFindings.length,
    findings: allFindings,
    passed: allFindings.length === 0,
  }

  const outputPath = path.join(outputDir, 'secrets-scan.json')
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8')

  console.log('\n=== Summary ===')
  console.log(`Files scanned: ${result.totalFiles}`)
  console.log(`Findings: ${result.totalFindings}`)

  if (result.passed) {
    console.log('\n✓ No hardcoded secrets found')
    console.log(`Output: ${outputPath}`)
    console.log('\n=== Scan PASSED ===')
    process.exit(0)
  } else {
    console.log('\n✗ Secrets detected - review and remove before committing')
    console.log(`Output: ${outputPath}`)
    console.log('\n=== Scan FAILED ===')
    process.exit(1)
  }
}

main()
