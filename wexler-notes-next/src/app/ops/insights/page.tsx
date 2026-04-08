// src/app/ops/insights/page.tsx
// Observability insights page - read-only, no PII

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

interface ExperimentInfo {
  key: string
  name: string
  enabled: boolean
  rollout: number
  variants: { key: string; weight: number; label: string }[]
  defaultVariant: string
}

export default function InsightsPage() {
  const [buildMeta, setBuildMeta] = useState<BuildMeta | null>(null)
  const [eventStats, setEventStats] = useState<EventStats | null>(null)
  const [experiments, setExperiments] = useState<ExperimentInfo[]>([])
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

      // Load local telemetry stats (from localStorage)
      try {
        const raw = localStorage.getItem('wexler.telemetry.local')
        if (raw) {
          const events = JSON.parse(raw)
          const counts: Record<string, number> = {}
          const cutoff = Date.now() - 24 * 60 * 60 * 1000
          let last24h = 0

          for (const ev of events) {
            counts[ev.event] = (counts[ev.event] || 0) + 1
            const ts = new Date(ev.timestamp).getTime()
            if (ts > cutoff) last24h++
          }

          setEventStats({
            eventCounts: counts,
            total: events.length,
            last24h,
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

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Ops Insights</h1>

      {/* Build Metadata */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Build Metadata</h2>
        {buildMeta ? (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc', fontWeight: 'bold' }}>Version</td>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{buildMeta.version}</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc', fontWeight: 'bold' }}>Commit SHA</td>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc', fontFamily: 'monospace' }}>{buildMeta.commitSha}</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc', fontWeight: 'bold' }}>Branch</td>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{buildMeta.branch}</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc', fontWeight: 'bold' }}>Build Time</td>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{buildMeta.buildTime}</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc', fontWeight: 'bold' }}>Node Version</td>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{buildMeta.nodeVersion}</td>
              </tr>
              <tr>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc', fontWeight: 'bold' }}>Workflow</td>
                <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{buildMeta.sourceWorkflow}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p style={{ color: '#666' }}>No build metadata available</p>
        )}
      </section>

      {/* Event Statistics */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Event Statistics (Local Cache)</h2>
        {eventStats ? (
          <>
            <p style={{ marginBottom: '0.5rem' }}>
              <strong>Total Events:</strong> {eventStats.total} | <strong>Last 24h:</strong> {eventStats.last24h}
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'left' }}>Event</th>
                  <th style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>Count</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(eventStats.eventCounts)
                  .sort((a, b) => b[1] - a[1])
                  .map(([event, count]) => (
                    <tr key={event}>
                      <td style={{ padding: '0.5rem', border: '1px solid #ccc' }}>{event}</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #ccc', textAlign: 'right' }}>{count}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </>
        ) : (
          <p style={{ color: '#666' }}>No event data available</p>
        )}
      </section>

      {/* Experiments */}
      <section>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Experiments</h2>
        {experiments.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {experiments.map((exp) => (
              <div key={exp.key} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: exp.enabled ? '#22c55e' : '#94a3b8',
                  }} />
                  <strong>{exp.name}</strong>
                  <span style={{ fontSize: '0.875rem', color: '#666' }}>({exp.key})</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>{exp.description}</p>
                <p style={{ fontSize: '0.875rem' }}>
                  <strong>Rollout:</strong> {exp.rollout}% | <strong>Default:</strong> {exp.defaultVariant}
                </p>
                <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                  <strong>Variants:</strong>
                  <ul style={{ margin: '0.5rem 0 0 1.5rem' }}>
                    {exp.variants.map((v) => (
                      <li key={v.key}>{v.key} ({v.weight}%) - {v.label}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: '#666' }}>No experiments configured</p>
        )}
      </section>
    </div>
  )
}
