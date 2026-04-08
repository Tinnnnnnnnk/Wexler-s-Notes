// src/lib/telemetry/session.ts
// Anonymous visitor/session ID management - no PII

import type { TelemetryEvent } from './schema'

const VISITOR_KEY = 'wexler.telemetry.visitor'
const SESSION_KEY = 'wexler.telemetry.session'
const SESSION_TIMEOUT = 30 * 60 * 1000 // 30 minutes

function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`
}

export function getVisitorId(): string {
  if (typeof window === 'undefined') return 'server'

  try {
    let visitorId = localStorage.getItem(VISITOR_KEY)
    if (!visitorId) {
      visitorId = generateId()
      localStorage.setItem(VISITOR_KEY, visitorId)
    }
    return visitorId
  } catch {
    return 'local-storage-unavailable'
  }
}

export function getSessionId(): string {
  if (typeof window === 'undefined') return 'server'

  try {
    let sessionId = sessionStorage.getItem(SESSION_KEY)
    const lastActive = sessionStorage.getItem(`${SESSION_KEY}_lastActive`)

    // Check if session expired
    if (lastActive) {
      const elapsed = Date.now() - parseInt(lastActive, 10)
      if (elapsed > SESSION_TIMEOUT) {
        sessionId = null
      }
    }

    if (!sessionId) {
      sessionId = generateId()
      sessionStorage.setItem(SESSION_KEY, sessionId)
    }

    sessionStorage.setItem(`${SESSION_KEY}_lastActive`, Date.now().toString())
    return sessionId
  } catch {
    return 'session-storage-unavailable'
  }
}

export function clearSession(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY)
    sessionStorage.removeItem(`${SESSION_KEY}_lastActive`)
  } catch {
    // ignore
  }
}

export function clearVisitor(): void {
  try {
    localStorage.removeItem(VISITOR_KEY)
    clearSession()
  } catch {
    // ignore
  }
}
