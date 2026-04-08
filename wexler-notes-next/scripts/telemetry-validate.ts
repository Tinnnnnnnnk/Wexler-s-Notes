// scripts/telemetry-validate.ts
// Validate telemetry event schema and whitelist

import * as fs from 'fs'
import * as path from 'path'

const ALLOWED_EVENTS = [
  'page_view',
  'fx_mode_switch',
  'layout_mode_switch',
  'toc_click',
  'sidebar_search',
  'image_lightbox_open',
  'bgm_play',
  'bgm_pause',
  'bgm_seek',
  'editor_open',
  'editor_publish',
  'editor_export',
  'editor_rollback',
  'editor_add_block',
  'editor_delete_block',
  'editor_patch_block',
]

function main() {
  console.log('\n=== Telemetry Validation ===\n')

  const schemaPath = path.join(process.cwd(), 'src', 'lib', 'telemetry', 'schema.ts')
  if (!fs.existsSync(schemaPath)) {
    console.log('✗ schema.ts not found')
    process.exit(1)
  }

  const content = fs.readFileSync(schemaPath, 'utf-8')

  // Check for PII patterns
  const piiPatterns = [
    /\bemail\b/i,
    /\bname\b.*(?!.*type|.*label)/i,
    /\bphone\b/i,
    /\baddress\b/i,
    /\buser_id\b/i,
    /\bip\b/i,
  ]

  let hasPII = false
  for (const pattern of piiPatterns) {
    if (pattern.test(content)) {
      console.log(`✗ Potential PII pattern found: ${pattern}`)
      hasPII = true
    }
  }

  if (hasPII) {
    console.log('\n✗ PII violation detected')
    process.exit(1)
  }

  console.log('✓ No PII patterns found')

  // Check allowed events list
  const hasAllowedList = content.includes('ALLOWED_EVENTS')
  const hasIsAllowedFunction = content.includes('isAllowedEvent')

  if (!hasAllowedList) {
    console.log('✗ ALLOWED_EVENTS not defined')
    process.exit(1)
  }

  if (!hasIsAllowedFunction) {
    console.log('✗ isAllowedEvent function not defined')
    process.exit(1)
  }

  console.log('✓ Event whitelist defined')
  console.log('✓ isAllowedEvent function present')

  // Check session management
  const sessionPath = path.join(process.cwd(), 'src', 'lib', 'telemetry', 'session.ts')
  if (fs.existsSync(sessionPath)) {
    const sessionContent = fs.readFileSync(sessionPath, 'utf-8')
    const noPIIInSession = !/email|phone|name/i.test(sessionContent)
    if (noPIIInSession) {
      console.log('✓ Session management (no PII)')
    } else {
      console.log('✗ Potential PII in session.ts')
      process.exit(1)
    }
  }

  // Check client implementation
  const clientPath = path.join(process.cwd(), 'src', 'lib', 'telemetry', 'client.ts')
  if (fs.existsSync(clientPath)) {
    const clientContent = fs.readFileSync(clientPath, 'utf-8')
    const hasTrack = clientContent.includes('track(')
    const hasFlush = clientContent.includes('flush(')
    const hasQueue = clientContent.includes('queue')

    if (hasTrack && hasFlush && hasQueue) {
      console.log('✓ Client implementation complete (track/flush/queue)')
    } else {
      console.log('✗ Client implementation incomplete')
      process.exit(1)
    }
  }

  console.log('\n=== Validation PASSED ===')
  process.exit(0)
}

main()
