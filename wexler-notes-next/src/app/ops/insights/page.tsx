// src/app/ops/insights/page.tsx
// Observability insights page with trends, vitals, and experiment decisions

'use client'

import { useEffect, useState } from 'react'

interface BuildMeta {
  version: string
  commitSha: string
  branch: string
  buildTime: string
  nodeVersion: string
  sourceWorkflow: string
}

interface EventStats {
  eventCounts: Record<string, number>
  total: number
  last24h: number
}

interface TrendData {
  date: string
  counts: Record<string, number>
}

interface ExperimentInfo {
  key: string
  name: string
  enabled: boolean
  rollout: number
  variants: { key: string; weight: number; label: string }[]
  defaultVariant: string
}

interface ExperimentDecision {
  decision: 'ship-variant' | 'keep-testing' | 'rollback' | 'insufficient-data'
  reason: string
  recommendedAction: string
}

interface VitalsDistribution {
  good: number
  needsImprovement: number
  poor: number
}

export default function InsightsPage() {
  const [buildMeta, setBuildMeta] = useState<BuildMeta | null>(null)
  const [eventStats, setEventStats] = useState<EventStats | null>(null)
  const [experiments, setExperiments] = useState<ExperimentInfo[]>([])
  const [decisions, setDecisions] = useState<ExperimentDecision[]>([])
  const [vitalsDist, setVitalsDist] = useState<VitalsDistribution | null>(null)
  const [trendData, setTrendData] = useState<TrendData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      // Load build metadata
      try {
        const metaRes = await fetch('/build-meta.json')
        if (metaRes.ok) {
          setBuildMeta(await metaRes.json())
        }
      } catch {
        // ignore
      }

      // Load local telemetry stats
      try {
        const raw = localStorage.getItem('wexler.telemetry.local')
        if (raw) {
          const events = JSON.parse(raw)
          const counts: Record<string, number> = {}
          const cutoff = Date.now() - 24 * 60 * 60 * 1000
          let last24h = 0

          // Calculate trend data (last 7 days)
          const byDate: Record<string, Record<string, number>> = {}
          for (const ev of events) {
            counts[ev.event] = (counts[ev.event] || 0) + 1
            const ts = new Date(ev.timestamp).getTime()
            if (ts > cutoff) last24h++

            const date = ev.timestamp.split('T')[0]
            if (!byDate[date]) byDate[date] = {}
            byDate[date][ev.event] = (byDate[date][ev.event] || 0) + 1
          }

          const trend = Object.entries(byDate)
            .map(([date, c]) => ({ date, counts: c }))
            .sort((a, b) => a.date.localeCompare(b.date))
            .slice(-7)

          setTrendData(trend)
          setEventStats({ eventCounts: counts, total: events.length, last24h })

          // Calculate vitals distribution
          const vitals = events.filter((e: unknown) => {
            const event = e as { event?: string }
            return event.event === 'web_vital'
          })
          const ratings = vitals.map((v: unknown) => {
            const vital = v as { rating?: 'good' | 'needs-improvement' | 'poor' }
            return vital.rating
          })
          setVitalsDist({
            good: ratings.filter((r: string) => r === 'good').length,
            needsImprovement: ratings.filter((r: string) => r === 'needs-improvement').length,
            poor: ratings.filter((r: string) => r === 'poor').length,
          })
        }
      } catch {
        // ignore
      }

      // Load experiments config
      try {
        const expRes = await fetch('/experiments/experiments.json')
        if (expRes.ok) {
          const config = await expRes.json()
          setExperiments(config.experiments || [])
        }
      } catch {
        // ignore
      }

      // Load experiment decisions
      try {
        const decisionRes = await fetch('/experiments/experiment-decision.md')
        if (decisionRes.ok) {
          const text = await decisionRes.text()
          // Parse markdown for decisions
          const lines = text.split('\n')
          const parsed: ExperimentDecision[] = []
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('**Decision:**')) {
              const decision = lines[i].replace('**Decision:**', '').trim().replace('`', '')
              const reason = lines[i + 1]?.replace('**Reason:**', '').trim() || ''
              const action = lines.find((l, idx) => idx > i && l.startsWith('**Recommended Action:**'))
              parsed.push({
                decision: decision as ExperimentDecision['decision'],
                reason,
                recommendedAction: action?.replace('**Recommended Action:**', '').trim() || '',
              })
            }
          }
          if (parsed.length === 0) {
            // Use sample data
            parsed.push({
              decision: 'keep-testing',
              reason: 'Continue A/B test to gather more data',
              recommendedAction: 'Monitor for 1000 total exposures',
            })
          }
          setDecisions(parsed)
        }
      } catch {
        // ignore
      }

      setLoading(false)
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
        <p>Loading insights...</p>
      </div>
    )
  }

  const totalVitals = vitalsDist ? vitalsDist.good + vitalsDist.needsImprovement + vitalsDist.poor : 0

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Ops Insights Dashboard</h1>

      {/* Build Metadata */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Build Metadata</h2>
        {buildMeta ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <div><strong>Version:</strong> {buildMeta.version}</div>
            <div><strong>Branch:</strong> {buildMeta.branch}</div>
            <div><strong>Workflow:</strong> {buildMeta.sourceWorkflow}</div>
            <div><strong>Commit:</strong> <code style={{ fontSize: '0.875rem' }}>{buildMeta.commitSha}</code></div>
            <div><strong>Build Time:</strong> {new Date(buildMeta.buildTime).toLocaleString()}</div>
            <div><strong>Node:</strong> {buildMeta.nodeVersion}</div>
          </div>
        ) : (
          <p style={{ color: '#666' }}>No build metadata available</p>
        )}
      </section>

      {/* Event Trends (Last 7 days) */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Event Trends (Last 7 Days)</h2>
        {trendData.length > 0 ? (
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end', height: '100px' }}>
            {trendData.map((day) => {
              const total = Object.values(day.counts).reduce((s, c) => s + c, 0)
              const max = Math.max(...trendData.map((d) => Object.values(d.counts).reduce((s, c) => s + c, 0)))
              const height = max > 0 ? (total / max) * 80 : 0
              return (
                <div key={day.date} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '100%', height: `${height}px`, backgroundColor: '#3b82f6', borderRadius: '4px 4px 0 0', minHeight: '4px' }} title={`${total} events`} />
                  <span style={{ fontSize: '0.75rem', marginTop: '4px', color: '#666' }}>{day.date.split('-')[2]}</span>
                </div>
              )
            })}
          </div>
        ) : (
          <p style={{ color: '#666' }}>No trend data available</p>
        )}
      </section>

      {/* Event Statistics */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Event Statistics</h2>
        {eventStats ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
            <div>
              <p><strong>Total Events:</strong> {eventStats.total}</p>
              <p><strong>Last 24h:</strong> {eventStats.last24h}</p>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Event</th>
                  <th style={{ padding: '0.5rem', textAlign: 'right', borderBottom: '1px solid #e5e7eb' }}>Count</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(eventStats.eventCounts)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 10)
                  .map(([event, count]) => (
                    <tr key={event}>
                      <td style={{ padding: '0.25rem 0.5rem' }}>{event}</td>
                      <td style={{ padding: '0.25rem 0.5rem', textAlign: 'right' }}>{count}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p style={{ color: '#666' }}>No event data available</p>
        )}
      </section>

      {/* Web Vitals Distribution */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Web Vitals Distribution</h2>
        {vitalsDist && totalVitals > 0 ? (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1, padding: '1rem', backgroundColor: '#22c55e20', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#22c55e' }}>{vitalsDist.good}</div>
              <div style={{ color: '#666', fontSize: '0.875rem' }}>Good ({Math.round((vitalsDist.good / totalVitals) * 100)}%)</div>
            </div>
            <div style={{ flex: 1, padding: '1rem', backgroundColor: '#f59e0b20', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>{vitalsDist.needsImprovement}</div>
              <div style={{ color: '#666', fontSize: '0.875rem' }}>Needs Improvement ({Math.round((vitalsDist.needsImprovement / totalVitals) * 100)}%)</div>
            </div>
            <div style={{ flex: 1, padding: '1rem', backgroundColor: '#ef444420', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>{vitalsDist.poor}</div>
              <div style={{ color: '#666', fontSize: '0.875rem' }}>Poor ({Math.round((vitalsDist.poor / totalVitals) * 100)}%)</div>
            </div>
          </div>
        ) : (
          <p style={{ color: '#666' }}>No vitals data available. Enable telemetry to collect performance metrics.</p>
        )}
      </section>

      {/* Experiments with Decisions */}
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Experiments & Decisions</h2>
        {experiments.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {experiments.map((exp, idx) => {
              const decision = decisions[idx]
              const icon = decision?.decision === 'ship-variant' ? '✅' : decision?.decision === 'rollback' ? '❌' : decision?.decision === 'keep-testing' ? '⏳' : '❓'
              return (
                <div key={exp.key} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: exp.enabled ? '#22c55e' : '#94a3b8' }} />
                    <strong>{exp.name}</strong>
                    <span style={{ fontSize: '0.875rem', color: '#666' }}>({exp.key})</span>
                  </div>
                  {decision && (
                    <div style={{ marginTop: '0.5rem', padding: '0.75rem', backgroundColor: '#f9fafb', borderRadius: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <span>{icon}</span>
                        <strong>{decision.decision}</strong>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#666', margin: '0.25rem 0' }}>{decision.reason}</p>
                      <p style={{ fontSize: '0.75rem', color: '#666' }}><strong>Action:</strong> {decision.recommendedAction}</p>
                    </div>
                  )}
                  <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                    <span><strong>Rollout:</strong> {exp.rollout}%</span>
                    <span style={{ marginLeft: '1rem' }}><strong>Variants:</strong> {exp.variants.map((v) => v.key).join(', ')}</span>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <p style={{ color: '#666' }}>No experiments configured</p>
        )}
      </section>

      {/* Queue Health */}
      <section style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Queue Health</h2>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>
          Queue status is maintained in localStorage. When telemetry endpoint is configured, events are sent with retry and deduplication.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ padding: '0.5rem 1rem', backgroundColor: '#f9fafb', borderRadius: '4px' }}>
            <strong>Max Queue Size:</strong> 500
          </div>
          <div style={{ padding: '0.5rem 1rem', backgroundColor: '#f9fafb', borderRadius: '4px' }}>
            <strong>Flush Interval:</strong> 30s
          </div>
          <div style={{ padding: '0.5rem 1rem', backgroundColor: '#f9fafb', borderRadius: '4px' }}>
            <strong>Max Retries:</strong> 3
          </div>
        </div>
      </section>
    </div>
  )
}