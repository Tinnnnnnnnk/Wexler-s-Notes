// src/lib/telemetry/transport.ts
// Durable transport layer with retry and fallback

import type { TelemetryEvent } from './schema'

interface TransportConfig {
  endpoint: string
  maxRetries: number
  retryDelay: number
  useBeacon: boolean
}

const DEFAULT_CONFIG: TransportConfig = {
  endpoint: '',
  maxRetries: 3,
  retryDelay: 1000,
  useBeacon: true,
}

export class Transport {
  private config: TransportConfig
  private retryCount = 0
  private droppedCount = 0

  constructor(config: Partial<TransportConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config }
  }

  setEndpoint(endpoint: string): void {
    this.config.endpoint = endpoint
  }

  getStats(): { retryCount: number; droppedCount: number } {
    return { retryCount: this.retryCount, droppedCount: this.droppedCount }
  }

  resetStats(): void {
    this.retryCount = 0
    this.droppedCount = 0
  }

  async send(events: TelemetryEvent[]): Promise<boolean> {
    if (!this.config.endpoint || events.length === 0) {
      return false
    }

    const body = JSON.stringify({ events, ts: Date.now() })

    // Try sendBeacon first (async, non-blocking)
    if (this.config.useBeacon && typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const sent = navigator.sendBeacon(this.config.endpoint, body)
      if (sent) return true
    }

    // Fallback to fetch with keepalive
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000)

      const response = await fetch(this.config.endpoint, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (response.ok || response.status === 0) {
        return true
      }

      throw new Error(`HTTP ${response.status}`)
    } catch (error) {
      return this.retry(events, 1)
    }
  }

  private async retry(events: TelemetryEvent[], attempt: number): Promise<boolean> {
    if (attempt > this.config.maxRetries) {
      this.retryCount += attempt - 1
      this.droppedCount += events.length
      return false
    }

    // Exponential backoff
    const delay = this.config.retryDelay * Math.pow(2, attempt - 1)
    await this.sleep(delay)

    try {
      const body = JSON.stringify({ events, ts: Date.now(), retry: attempt })

      if (this.config.useBeacon && typeof navigator !== 'undefined' && navigator.sendBeacon) {
        const sent = navigator.sendBeacon(this.config.endpoint, body)
        if (sent) return true
      }

      const response = await fetch(this.config.endpoint, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
      })

      if (response.ok || response.status === 0) {
        return true
      }

      throw new Error(`HTTP ${response.status}`)
    } catch {
      return this.retry(events, attempt + 1)
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

// Singleton transport instance
export const transport = new Transport()