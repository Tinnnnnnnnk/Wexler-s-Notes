// scripts/security-pii-scan.ts
// Scan telemetry schema and events for PII violations

import * as fs from 'fs'
import * as path from 'path'

interface PIIFinding {
  file: string
  type: string
  description: string
  severity: 'critical' | 'high' | 'medium'
}

interface ScanResult {
  scannedAt: string
  totalFiles: number
  totalFindings: number
  findings: PIIFinding[]
  passed: boolean
}

// Forbidden PII patterns (field names)
const PII_FIELD_PATTERNS = [
  { pattern: /\bemail\b/i, type: 'Email Field', description: 'Field named "email" is not allowed' },
  { pattern: /\bphone\b/i, type: 'Phone Field', description: 'Field named "phone" is not allowed' },
  { pattern: /\bidcard\b/i, type: 'ID Card Field', description: 'Field named "idcard" is not allowed' },
  { pattern: /\baddress\b/i, type: 'Address Field', description: 'Field named "address" is not allowed' },
  { pattern: /\bip[_-]?address\b/i, type: 'IP Address Field', description: 'Field named "ip" or "ip_address" is not allowed' },
  { pattern: /\bcookie[_-]?raw\b/i, type: 'Cookie Raw Field', description: 'Raw cookie field is not allowed' },
  { pattern: /\buser[_-]?id\b/i, type: 'User ID Field', description: 'Field named "userId" or "user_id" is not allowed' },
  { pattern: /\baccount[_-]?no\b/i, type: 'Account Number Field', description: 'Account number field is not allowed' },
  { pattern: /\bcredit[_-]?card\b/i, type: 'Credit Card Field', description: 'Credit card field is not allowed' },
  { pattern: /\bssn\b/i, type: 'SSN Field', description: 'Social Security Number field is not allowed' },
]

// String value patterns to detect in content
const PII_VALUE_PATTERNS = [
  { pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, type: 'Email Pattern', description: 'Email address pattern detected in content' },
  { pattern: /^\+?[\d\s-]{10,}$/g, type: 'Phone Pattern', description: 'Phone number pattern detected in content' },
  { pattern: /\b\d{3}-\d{2}-\d{4}\b/g, type: 'SSN Pattern', description: 'SSN pattern detected in content' },
  { pattern: /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g, type: 'Credit Card Pattern', description: 'Credit card number pattern detected' },
]

// Files to scan (exclude privacy.ts which defines the patterns)
const SCAN_PATHS = [
  'src/lib/telemetry',
  'public/experiments',
]

// Excluded files (those that define PII patterns)
const EXCLUDED_FILES = ['privacy.ts']

function scanFile(filePath: string): PIIFinding[] {
  // Skip excluded files
  const fileName = path.basename(filePath)
  if (EXCLUDED_FILES.includes(fileName)) {
    return []
  }

  const findings: PIIFinding[] = []

  try {
    const content = fs.readFileSync(filePath, 'utf-8')

    // Check field names
    for (const { pattern, type, description } of PII_FIELD_PATTERNS) {
      pattern.lastIndex = 0
      if (pattern.test(content)) {
        findings.push({
          file: path.relative(process.cwd(), filePath),
          type,
          description,
          severity: 'critical',
        })
      }
    }

    // Check string values (only for non-privacy files)
    if (!fileName.includes('privacy')) {
      for (const { pattern, type, description } of PII_VALUE_PATTERNS) {
        pattern.lastIndex = 0
        if (pattern.test(content)) {
          findings.push({
            file: path.relative(process.cwd(), filePath),
            type,
            description,
            severity: 'high',
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

    if (entry.isDirectory()) {
      files.push(...findFiles(fullPath))
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.json'))) {
      files.push(fullPath)
    }
  }

  return files
}

function main() {
  console.log('\n=== Security PII Scan ===\n')

  const outputDir = path.join(process.cwd(), 'security', 'reports')
  fs.mkdirSync(outputDir, { recursive: true })

  const allFiles: string[] = []
  for (const scanPath of SCAN_PATHS) {
    const fullPath = path.join(process.cwd(), scanPath)
    allFiles.push(...findFiles(fullPath))
  }

  console.log(`Scanning ${allFiles.length} files for PII...`)

  const allFindings: PIIFinding[] = []

  for (const file of allFiles) {
    const findings = scanFile(file)
    allFindings.push(...findings)

    if (findings.length > 0) {
      console.log(`\n✗ ${path.relative(process.cwd(), file)}:`)
      for (const finding of findings) {
        console.log(`  [${finding.severity}] ${finding.type}: ${finding.description}`)
      }
    }
  }

  const result: ScanResult = {
    scannedAt: new Date().toISOString(),
    totalFiles: allFiles.length,
    totalFindings: allFindings.length,
    findings: allFindings,
    passed: allFindings.length === 0,
  }

  const outputPath = path.join(outputDir, 'pii-scan.json')
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8')

  console.log('\n=== Summary ===')
  console.log(`Files scanned: ${result.totalFiles}`)
  console.log(`Findings: ${result.totalFindings}`)

  if (result.passed) {
    console.log('\n✓ No PII violations found')
    console.log(`Output: ${outputPath}`)
    console.log('\n=== Scan PASSED ===')
    process.exit(0)
  } else {
    console.log('\n✗ PII violations detected - fix before committing')
    console.log(`Output: ${outputPath}`)
    console.log('\n=== Scan FAILED ===')
    process.exit(1)
  }
}

main()
