// scripts/aggregate-telemetry.ts
// Aggregate telemetry data and generate summary report

import * as fs from 'fs'
import * as path from 'path'

interface TelemetryEvent {
  event: string
  timestamp: string
  visitorId: string
  sessionId: string
  url?: string
  [key: string]: unknown
}

interface TelemetrySummary {
  generatedAt: string
  totalEvents: number
  uniqueVisitors: number
  uniqueSessions: number
  eventsByType: Record<string, number>
  eventsByDay: Record<string, number>
  topPages: { url: string; count: number }[]
  conversionFunnel: {
    pageViews: number
    searches: number
    docClicks: number
    editorOpens: number
    editorPublishes: number
  }
}

function main() {
  console.log('\n=== Aggregate Telemetry ===\n')

  const outputDir = path.join(process.cwd(), 'analytics', 'reports')
  fs.mkdirSync(outputDir, { recursive: true })

  // Try to load from localStorage export or use sample data
  let events: TelemetryEvent[] = []

  // Check for exported events file
  const exportPath = path.join(process.cwd(), 'analytics', 'events-export.json')
  if (fs.existsSync(exportPath)) {
    try {
      const raw = fs.readFileSync(exportPath, 'utf-8')
      events = JSON.parse(raw)
      console.log(`Loaded ${events.length} events from export file`)
    } catch (e) {
      console.log('Failed to load export file, using sample data')
    }
  }

  // Generate sample data if no events
  if (events.length === 0) {
    console.log('Generating sample telemetry data...')
    const now = Date.now()
    const days = 7

    for (let d = 0; d < days; d++) {
      const dayTs = now - d * 24 * 60 * 60 * 1000
      const dateStr = new Date(dayTs).toISOString().split('T')[0]

      const dayEvents = [
        { event: 'page_view', count: Math.floor(Math.random() * 50) + 20 },
        { event: 'fx_mode_switch', count: Math.floor(Math.random() * 10) + 5 },
        { event: 'layout_mode_switch', count: Math.floor(Math.random() * 8) + 3 },
        { event: 'toc_click', count: Math.floor(Math.random() * 30) + 10 },
        { event: 'sidebar_search', count: Math.floor(Math.random() * 15) + 5 },
        { event: 'bgm_play', count: Math.floor(Math.random() * 20) + 8 },
        { event: 'editor_open', count: Math.floor(Math.random() * 5) + 1 },
        { event: 'editor_publish', count: Math.floor(Math.random() * 2) + 1 },
      ]

      for (const dayEvent of dayEvents) {
        for (let i = 0; i < dayEvent.count; i++) {
          events.push({
            event: dayEvent.event,
            timestamp: `${dateStr}T${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}.000Z`,
            visitorId: `visitor-${Math.floor(Math.random() * 100) + 1}`,
            sessionId: `session-${Math.floor(Math.random() * 50) + 1}`,
            url: Math.random() > 0.5 ? '/' : '/docs/tech/intro',
          })
        }
      }
    }

    console.log(`Generated ${events.length} sample events`)
  }

  // Aggregate
  const visitors = new Set(events.map((e) => e.visitorId))
  const sessions = new Set(events.map((e) => e.sessionId))
  const eventsByType: Record<string, number> = {}
  const eventsByDay: Record<string, number> = {}
  const pageCounts: Record<string, number> = {}

  for (const event of events) {
    eventsByType[event.event] = (eventsByType[event.event] || 0) + 1

    const day = event.timestamp.split('T')[0]
    eventsByDay[day] = (eventsByDay[day] || 0) + 1

    if (event.url) {
      pageCounts[event.url] = (pageCounts[event.url] || 0) + 1
    }
  }

  const topPages = Object.entries(pageCounts)
    .map(([url, count]) => ({ url, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)

  const summary: TelemetrySummary = {
    generatedAt: new Date().toISOString(),
    totalEvents: events.length,
    uniqueVisitors: visitors.size,
    uniqueSessions: sessions.size,
    eventsByType,
    eventsByDay,
    topPages,
    conversionFunnel: {
      pageViews: eventsByType['page_view'] || 0,
      searches: eventsByType['sidebar_search'] || 0,
      docClicks: eventsByType['toc_click'] || 0,
      editorOpens: eventsByType['editor_open'] || 0,
      editorPublishes: eventsByType['editor_publish'] || 0,
    },
  }

  // Write report
  const outputPath = path.join(outputDir, 'telemetry-summary.json')
  fs.writeFileSync(outputPath, JSON.stringify(summary, null, 2), 'utf-8')

  console.log('\n=== Telemetry Summary ===')
  console.log(`Total Events: ${summary.totalEvents}`)
  console.log(`Unique Visitors: ${summary.uniqueVisitors}`)
  console.log(`Unique Sessions: ${summary.uniqueSessions}`)
  console.log(`\nOutput: ${outputPath}`)

  // Print top events
  console.log('\nTop Events:')
  const sortedEvents = Object.entries(summary.eventsByType)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  for (const [event, count] of sortedEvents) {
    console.log(`  ${event}: ${count}`)
  }

  // Print conversion funnel
  console.log('\nConversion Funnel:')
  console.log(`  Page Views: ${summary.conversionFunnel.pageViews}`)
  console.log(`  Searches: ${summary.conversionFunnel.searches}`)
  console.log(`  Doc Clicks: ${summary.conversionFunnel.docClicks}`)
  console.log(`  Editor Opens: ${summary.conversionFunnel.editorOpens}`)
  console.log(`  Editor Publishes: ${summary.conversionFunnel.editorPublishes}`)

  console.log('\n=== Aggregation Complete ===')
  process.exit(0)
}

main()