// src/lib/telemetry/webVitals.ts
// Web Vitals collection (LCP, INP, CLS, FCP, TTFB)

import type { EventName } from './schema'

// PerformanceNavigationTiming.responseStart 是 DOM Performance API 属性，非 Node perf_hooks
// 用 minimal interface 解决 TypeScript strict 模式下的类型错误
type PerformanceNavTimingFix = { responseStart: number }
// LayoutShift 属于 DOM lib，在 Next.js + TypeScript 环境下需要显式定义
type LayoutShift = { value: number; hadRecentInput: boolean }

interface WebVital {
  metricName: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  path: string
  timestamp: string
}

// Rating thresholds based on Core Web Vitals guidelines
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  INP: { good: 200, poor: 500 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 },
}

function getRating(metricName: string, value: number): WebVital['rating'] {
  const thresholds = THRESHOLDS[metricName as keyof typeof THRESHOLDS]
  if (!thresholds) return 'needs-improvement'

  if (value <= thresholds.good) return 'good'
  if (value <= thresholds.poor) return 'needs-improvement'
  return 'poor'
}

type VitalCallback = (vital: WebVital) => void

class WebVitalsCollector {
  private callbacks: VitalCallback[] = []
  private path = ''

  constructor() {
    if (typeof window !== 'undefined') {
      this.path = window.location.pathname
    }
  }

  onVital(callback: VitalCallback): () => void {
    this.callbacks.push(callback)
    return () => {
      this.callbacks = this.callbacks.filter((cb) => cb !== callback)
    }
  }

  private emit(vital: WebVital): void {
    for (const callback of this.callbacks) {
      try {
        callback(vital)
      } catch {
        // ignore callback errors
      }
    }
  }

  private trackWebVital(metricName: string, value: number): void {
    const vital: WebVital = {
      metricName,
      value,
      rating: getRating(metricName, value),
      path: this.path,
      timestamp: new Date().toISOString(),
    }
    this.emit(vital)
  }

  start(): void {
    if (typeof window === 'undefined') return

    // LCP
    this.observeMetric('LCP', (entry) => {
      if (entry.startTime > 0) {
        this.trackWebVital('LCP', entry.startTime)
      }
    })

    // FCP
    this.observeMetric('FCP', (entry) => {
      if (entry.startTime > 0) {
        this.trackWebVital('FCP', entry.startTime)
      }
    })

    // TTFB
    this.observeMetric('TTFB', (entry) => {
      const ttfbEntry = entry as unknown as PerformanceNavTimingFix
      if (ttfbEntry.responseStart > 0) {
        this.trackWebVital('TTFB', ttfbEntry.responseStart)
      }
    })

    // CLS (cumulative layout shift)
    let clsValue = 0
    let clsEntries: LayoutShift[] = []

    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as unknown as LayoutShift[]) {
        if (!entry.hadRecentInput) {
          clsEntries.push(entry)
          clsValue += entry.value
        }
      }
    })

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true })
    } catch {
      // CLS not supported
    }

    // Report CLS on page hide
    if (document) {
      document.addEventListener(
        'visibilitychange',
        () => {
          if (document.visibilityState === 'hidden') {
            if (clsValue > 0) {
              this.trackWebVital('CLS', Math.round(clsValue * 1000) / 1000)
            }
          }
        },
        { once: true }
      )
    }

    // INP (Interaction to Next Paint) - simplified version
    let inpValue = 0
    let lastInputTime = 0
    let interactionDuration = 0

    const inpObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as PerformanceEventTiming[]) {
        if (entry.processingStart > lastInputTime) {
          lastInputTime = entry.processingStart
          interactionDuration = entry.duration
        }
      }
    })

    try {
      inpObserver.observe({ type: 'event', buffered: true })
    } catch {
      // INP not supported
    }

    // Report INP on page hide
    if (document) {
      document.addEventListener(
        'visibilitychange',
        () => {
          if (document.visibilityState === 'hidden') {
            inpObserver.disconnect()
            if (lastInputTime > 0 && interactionDuration > 0) {
              inpValue = Math.max(inpValue, interactionDuration)
            }
            if (inpValue > 0) {
              this.trackWebVital('INP', inpValue)
            }
          }
        },
        { once: true }
      )
    }
  }

  private observeMetric(metricName: string, callback: (entry: PerformanceEntry) => void): void {
    try {
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          callback(entry)
        }
      })
      observer.observe({ type: metricName.toLowerCase(), buffered: true })
    } catch {
      // Metric not supported
    }
  }

  getDistribution(): { good: number; needsImprovement: number; poor: number } {
    try {
      const raw = localStorage.getItem('wexler.telemetry.local')
      if (!raw) {
        return { good: 0, needsImprovement: 0, poor: 0 }
      }

      const events = JSON.parse(raw)
      const vitals = events.filter((e: unknown) => {
        const event = e as { event?: string }
        return event.event === 'web_vital'
      })

      const ratings = vitals.map((v: unknown) => {
        const vital = v as { rating?: 'good' | 'needs-improvement' | 'poor' }
        return vital.rating
      })

      return {
        good: ratings.filter((r: string) => r === 'good').length,
        needsImprovement: ratings.filter((r: string) => r === 'needs-improvement').length,
        poor: ratings.filter((r: string) => r === 'poor').length,
      }
    } catch {
      return { good: 0, needsImprovement: 0, poor: 0 }
    }
  }
}

// Singleton
export const webVitalsCollector = new WebVitalsCollector()

// Start collecting when imported
if (typeof window !== 'undefined') {
  webVitalsCollector.start()
}