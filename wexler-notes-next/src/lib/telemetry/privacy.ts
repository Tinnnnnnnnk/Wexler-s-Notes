// src/lib/telemetry/privacy.ts
// Privacy protection - field filtering and sanitization

import type { TelemetryEvent } from './schema'

// PII field patterns that should never be sent
const PII_PATTERNS = [
  'email',
  'phone',
  'name',
  'address',
  'ssn',
  'credit',
  'password',
  'token',
  'secret',
  'auth',
  'ip',
  'cookie',
  'userId',
  'user_id',
  'account',
]

// Allowed event properties (whitelist)
const ALLOWED_PROPS = [
  'event',
  'timestamp',
  'visitorId',
  'sessionId',
  'url',
  'referrer',
  'title',
  'from',
  'to',
  'headingId',
  'headingText',
  'query',
  'resultsCount',
  'imageSrc',
  'trackName',
  'seekPosition',
  'route',
  'blockId',
  'details',
  'metricName',
  'value',
  'rating',
  'path',
  'variantKey',
  'experimentKey',
]

export function sanitizeEvent(event: Partial<TelemetryEvent>): TelemetryEvent | null {
  // Check for PII in event name
  const eventName = event.event || ''
  for (const pattern of PII_PATTERNS) {
    if (eventName.toLowerCase().includes(pattern)) {
      console.warn('[Telemetry] PII detected in event name:', eventName)
      return null
    }
  }

  // Only keep allowed properties
  const sanitized: Record<string, unknown> = {}

  for (const key of ALLOWED_PROPS) {
    if (key in event) {
      const value = event[key as keyof typeof event]
      if (typeof value === 'string' && value.length > 0 && value.length <= 500) {
        sanitized[key] = value
      } else if (typeof value === 'number') {
        sanitized[key] = value
      } else if (typeof value === 'boolean') {
        sanitized[key] = value
      }
    }
  }

  // Ensure required fields
  if (!sanitized.event || !sanitized.timestamp || !sanitized.visitorId) {
    return null
  }

  return sanitized as unknown as TelemetryEvent
}

export function checkForPII(obj: unknown, path: string = ''): string[] {
  const violations: string[] = []

  if (typeof obj !== 'object' || obj === null) {
    return violations
  }

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = path ? `${path}.${key}` : key

    // Check if key matches PII pattern
    for (const pattern of PII_PATTERNS) {
      if (key.toLowerCase().includes(pattern)) {
        violations.push(currentPath)
      }
    }

    // Recurse into objects
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      violations.push(...checkForPII(value, currentPath))
    }

    // Check string values
    if (typeof value === 'string') {
      // Check for email patterns
      if (/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(value)) {
        violations.push(`${currentPath} (email pattern)`)
      }
      // Check for phone patterns
      if (/^\+?[\d\s-]{10,}$/.test(value)) {
        violations.push(`${currentPath} (phone pattern)`)
      }
    }
  }

  return violations
}

export function validateEventSchema(event: unknown): boolean {
  if (!event || typeof event !== 'object') return false

  const e = event as Record<string, unknown>

  // Must have event name
  if (!e.event || typeof e.event !== 'string') return false

  // Must have timestamp
  if (!e.timestamp || typeof e.timestamp !== 'string') return false

  // Must have visitorId
  if (!e.visitorId || typeof e.visitorId !== 'string') return false

  // Check for PII violations
  const violations = checkForPII(event)
  if (violations.length > 0) {
    console.warn('[Telemetry] PII violations found:', violations)
    return false
  }

  return true
}