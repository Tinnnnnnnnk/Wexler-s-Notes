// src/lib/telemetry/queue.ts
// Local event queue with TTL, dedup, and batching

import type { TelemetryEvent } from './schema'

const QUEUE_KEY = 'wexler.telemetry.local'
const MAX_QUEUE_SIZE = 500
const MAX_EVENT_AGE = 24 * 60 * 60 * 1000 // 24 hours

export interface QueueStats {
  size: number
  pending: number
  dropped: number
  oldestTs: string | null
}

class EventQueue {
  private pending: TelemetryEvent[] = []
  private dropped = 0
  private flushTimer: ReturnType<typeof setInterval> | null = null
  private isClient = false

  constructor() {
    if (typeof window !== 'undefined') {
      this.isClient = true
      this.loadFromStorage()
      this.startFlushTimer()
    }
  }

  private loadFromStorage(): void {
    try {
      const raw = localStorage.getItem(QUEUE_KEY)
      if (raw) {
        const events: TelemetryEvent[] = JSON.parse(raw)
        const now = Date.now()
        // Filter out old events
        const valid = events.filter((e) => {
          const ts = new Date(e.timestamp).getTime()
          return now - ts < MAX_EVENT_AGE
        })
        this.pending = valid
      }
    } catch {
      this.pending = []
    }
  }

  private saveToStorage(): void {
    if (!this.isClient) return
    try {
      // Keep only last MAX_QUEUE_SIZE events
      const trimmed = this.pending.slice(-MAX_QUEUE_SIZE)
      localStorage.setItem(QUEUE_KEY, JSON.stringify(trimmed))
    } catch {
      // Storage full
    }
  }

  private startFlushTimer(): void {
    if (this.flushTimer) return
    this.flushTimer = setInterval(() => {
      if (this.pending.length > 0) {
        this.saveToStorage()
      }
    }, 30000) // Save every 30s
  }

  push(event: TelemetryEvent): void {
    // Deduplicate by timestamp + event type + visitorId
    const isDuplicate = this.pending.some(
      (e) =>
        e.timestamp === event.timestamp &&
        e.event === event.event &&
        e.visitorId === event.visitorId
    )

    if (isDuplicate) return

    this.pending.push(event)

    // Drop oldest if queue full
    if (this.pending.length > MAX_QUEUE_SIZE) {
      this.pending.shift()
      this.dropped++
    }

    this.saveToStorage()
  }

  pushBatch(events: TelemetryEvent[]): void {
    for (const event of events) {
      this.push(event)
    }
  }

  drain(count: number): TelemetryEvent[] {
    const batch = this.pending.slice(0, count)
    this.pending = this.pending.slice(count)
    this.saveToStorage()
    return batch
  }

  getAll(): TelemetryEvent[] {
    return [...this.pending]
  }

  getStats(): QueueStats {
    return {
      size: this.pending.length,
      pending: this.pending.length,
      dropped: this.dropped,
      oldestTs: this.pending[0]?.timestamp || null,
    }
  }

  clear(): void {
    this.pending = []
    this.dropped = 0
    if (this.isClient) {
      localStorage.removeItem(QUEUE_KEY)
    }
  }

  destroy(): void {
    if (this.flushTimer) {
      clearInterval(this.flushTimer)
      this.flushTimer = null
    }
    this.saveToStorage()
  }

  // Export events for analysis
  exportEvents(): TelemetryEvent[] {
    return this.getAll()
  }

  // Get trend data (last N days)
  getTrend(days: number = 7): { date: string; counts: Record<string, number> }[] {
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
    const events = this.pending.filter((e) => new Date(e.timestamp).getTime() > cutoff)

    const byDate: Record<string, Record<string, number>> = {}

    for (const event of events) {
      const date = event.timestamp.split('T')[0]
      if (!byDate[date]) {
        byDate[date] = {}
      }
      byDate[date][event.event] = (byDate[date][event.event] || 0) + 1
    }

    return Object.entries(byDate)
      .map(([date, counts]) => ({ date, counts }))
      .sort((a, b) => a.date.localeCompare(b.date))
  }
}

// Singleton
export const eventQueue = new EventQueue()