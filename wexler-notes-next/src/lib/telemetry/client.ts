// src/lib/telemetry/client.ts
// Telemetry client with queue, batching, and sampling

import type { TelemetryEvent } from './schema'
import { isAllowedEvent } from './schema'
import { getVisitorId, getSessionId } from './session'

const QUEUE_MAX_SIZE = 200
const FLUSH_INTERVAL = 5000 // 5 seconds

interface TelemetryConfig {
  enabled: boolean
  endpoint: string
  sampleRate: number
}

function getConfig(): TelemetryConfig {
  if (typeof window === 'undefined') {
    return { enabled: false, endpoint: '', sampleRate: 0 }
  }

  return {
    enabled: process.env.NEXT_PUBLIC_TELEMETRY_ENABLED === 'true',
    endpoint: process.env.NEXT_PUBLIC_TELEMETRY_ENDPOINT || '',
    sampleRate: parseFloat(process.env.NEXT_PUBLIC_TELEMETRY_SAMPLE_RATE || '1'),
  }
}

function shouldSample(rate: number): boolean {
  return Math.random() < rate
}

class TelemetryClient {
  private queue: TelemetryEvent[] = []
  private flushTimer: ReturnType<typeof setInterval> | null = null
  private isClient = false

  constructor() {
    if (typeof window !== 'undefined') {
      this.isClient = true
      this.startFlushTimer()
    }
  }

  private startFlushTimer(): void {
    if (this.flushTimer) return
    this.flushTimer = setInterval(() => this.flush(), FLUSH_INTERVAL)
  }

  private stopFlushTimer(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
      this.flushTimer = null
    }
  }

  track(event: TelemetryEvent): void {
    if (!this.isClient) return

    const config = getConfig()
    if (!config.enabled) return
    if (!shouldSample(config.sampleRate)) return

    // Add base context
    const enrichedEvent: TelemetryEvent = {
      ...event,
      visitorId: event.visitorId || getVisitorId(),
      sessionId: event.sessionId || getSessionId(),
      url: event.url || (typeof window !== 'undefined' ? window.location.href : ''),
      timestamp: event.timestamp || new Date().toISOString(),
    }

    // Enforce schema
    if (!isAllowedEvent(enrichedEvent.event)) {
      console.warn('[Telemetry] Unknown event:', enrichedEvent.event)
      return
    }

    // Add to queue
    this.queue.push(enrichedEvent)

    // Drop oldest if queue full
    if (this.queue.length > QUEUE_MAX_SIZE) {
      this.queue.shift()
    }
  }

  flush(): void {
    if (!this.isClient) return
    if (this.queue.length === 0) return

    const config = getConfig()
    const events = [...this.queue]
    this.queue = []

    if (!config.endpoint) {
      // No endpoint - just log locally
      this.storeLocally(events)
      return
    }

    // Send using sendBeacon or fetch keepalive
    const body = JSON.stringify({ events })

    if (navigator.sendBeacon) {
      const sent = navigator.sendBeacon(config.endpoint, body)
      if (!sent) {
        this.storeLocally(events)
      }
    } else {
      fetch(config.endpoint, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
      }).catch(() => {
        this.storeLocally(events)
      })
    }
  }

  private storeLocally(events: TelemetryEvent[]): void {
    try {
      const KEY = 'wexler.telemetry.local'
      const existing = localStorage.getItem(KEY)
      const stored = existing ? JSON.parse(existing) : []
      stored.push(...events)
      // Keep last 1000 events
      const trimmed = stored.slice(-1000)
      localStorage.setItem(KEY, JSON.stringify(trimmed))
    } catch {
      // Storage full or unavailable
    }
  }

  getLocalStats(): { eventCounts: Record<string, number>; total: number; last24h: number } {
    try {
      const KEY = 'wexler.telemetry.local'
      const raw = localStorage.getItem(KEY)
      if (!raw) return { eventCounts: {}, total: 0, last24h: 0 }

      const events: TelemetryEvent[] = JSON.parse(raw)
      const eventCounts: Record<string, number> = {}
      const cutoff = Date.now() - 24 * 60 * 60 * 1000

      let last24h = 0
      for (const ev of events) {
        eventCounts[ev.event] = (eventCounts[ev.event] || 0) + 1
        const ts = new Date(ev.timestamp).getTime()
        if (ts > cutoff) last24h++
      }

      return { eventCounts, total: events.length, last24h }
    } catch {
      return { eventCounts: {}, total: 0, last24h: 0 }
    }
  }

  clearLocal(): void {
    try {
      localStorage.removeItem('wexler.telemetry.local')
    } catch {
      // ignore
    }
  }

  destroy(): void {
    this.stopFlushTimer()
    this.flush()
  }
}

// Singleton instance
export const telemetry = new TelemetryClient()

export function track(event: Omit<TelemetryEvent, 'visitorId' | 'sessionId' | 'url' | 'timestamp'>): void {
  telemetry.track(event as TelemetryEvent)
}
