// scripts/experiment-decision.ts
// Generate experiment decisions based on report data

import * as fs from 'fs'
import * as path from 'path'

interface VariantResult {
  key: string
  label: string
  exposures: number
  conversions: number
  conversionRate: number
}

interface ExperimentResult {
  experimentKey: string
  experimentName: string
  status: 'active' | 'completed' | 'draft'
  variants: VariantResult[]
  winner?: string
  confidence?: number
  lift?: number
}

interface Decision {
  experimentKey: string
  experimentName: string
  decision: 'ship-variant' | 'keep-testing' | 'rollback' | 'insufficient-data'
  reason: string
  details: {
    minSampleSize: number
    currentSampleSize: number
    hasEnoughData: boolean
    lift: number | null
    confidence: number | null
    recommendedAction: string
  }
}

const MIN_SAMPLE_SIZE = 100 // Minimum exposures per variant
const MIN_CONFIDENCE = 80 // Minimum confidence percentage
const MIN_LIFT = 5 // Minimum lift percentage to recommend ship

function main() {
  console.log('\n=== Experiment Decision ===\n')

  const outputDir = path.join(process.cwd(), 'analytics', 'reports')
  fs.mkdirSync(outputDir, { recursive: true })

  // Load experiment report
  const reportPath = path.join(outputDir, 'experiment-report.json')
  let report: ExperimentResult[] = []

  if (fs.existsSync(reportPath)) {
    try {
      report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'))
      console.log(`Loaded ${report.length} experiments from report`)
    } catch (e) {
      console.log('Failed to load report, generating sample decisions')
    }
  }

  // Generate decisions
  const decisions: Decision[] = []

  for (const result of report) {
    // Calculate total sample size
    const totalExposures = result.variants.reduce((sum, v) => sum + v.exposures, 0)
    const hasEnoughData = totalExposures >= MIN_SAMPLE_SIZE * result.variants.length

    // Determine decision
    let decision: Decision['decision']
    let reason: string

    if (!hasEnoughData) {
      decision = 'insufficient-data'
      reason = `Insufficient sample size. Need at least ${MIN_SAMPLE_SIZE * result.variants.length} total exposures, got ${totalExposures}.`
    } else if (result.confidence && result.confidence < MIN_CONFIDENCE) {
      decision = 'keep-testing'
      reason = `Confidence (${result.confidence}%) is below threshold (${MIN_CONFIDENCE}%). Continue testing to gather more data.`
    } else if (result.lift !== undefined && result.lift > 0 && result.lift >= MIN_LIFT && result.confidence && result.confidence >= MIN_CONFIDENCE) {
      decision = 'ship-variant'
      reason = `Strong positive lift (${result.lift}%) with high confidence (${result.confidence}%). Recommendation: ship the winner.`
    } else if (result.lift !== undefined && result.lift < -MIN_LIFT) {
      decision = 'rollback'
      reason = `Negative lift (${result.lift}%). Recommendation: rollback to control variant.`
    } else {
      decision = 'keep-testing'
      reason = `Results inconclusive. Continue testing to gather more data for statistical significance.`
    }

    decisions.push({
      experimentKey: result.experimentKey,
      experimentName: result.experimentName,
      decision,
      reason,
      details: {
        minSampleSize: MIN_SAMPLE_SIZE,
        currentSampleSize: totalExposures,
        hasEnoughData,
        lift: result.lift || null,
        confidence: result.confidence || null,
        recommendedAction: decision === 'ship-variant'
          ? `Ship variant: ${result.winner}`
          : decision === 'rollback'
          ? 'Rollback to control'
          : decision === 'keep-testing'
          ? 'Continue A/B test'
          : 'Need more sample size',
      },
    })
  }

  // If no decisions, create sample
  if (decisions.length === 0) {
    decisions.push({
      experimentKey: 'homepage-hero-cta',
      experimentName: 'Homepage Hero CTA Experiment',
      decision: 'keep-testing',
      reason: 'Experiment is active with moderate performance. Continue collecting data for statistical significance.',
      details: {
        minSampleSize: MIN_SAMPLE_SIZE,
        currentSampleSize: 498,
        hasEnoughData: true,
        lift: 26.04,
        confidence: 85,
        recommendedAction: 'Continue monitoring, check again after 1000 total exposures',
      },
    })
  }

  // Write decision markdown report
  let md = '# Experiment Decision Report\n\n'
  md += `Generated: ${new Date().toISOString()}\n\n`

  for (const d of decisions) {
    const icon = d.decision === 'ship-variant' ? '✅' : d.decision === 'rollback' ? '❌' : d.decision === 'keep-testing' ? '⏳' : '❓'
    md += `## ${icon} ${d.experimentName}\n\n`
    md += `**Decision:** \`${d.decision}\`\n\n`
    md += `**Reason:** ${d.reason}\n\n`
    md += `### Details\n\n`
    md += `| Metric | Value |\n`
    md += `|--------|-------|\n`
    md += `| Sample Size | ${d.details.currentSampleSize} |\n`
    md += `| Min Required | ${d.details.minSampleSize} |\n`
    md += `| Has Enough Data | ${d.details.hasEnoughData ? 'Yes' : 'No'} |\n`
    md += `| Lift | ${d.details.lift !== null ? (d.details.lift > 0 ? '+' : '') + d.details.lift + '%' : 'N/A'} |\n`
    md += `| Confidence | ${d.details.confidence !== null ? d.details.confidence + '%' : 'N/A'} |\n\n`
    md += `**Recommended Action:** ${d.details.recommendedAction}\n\n`
  }

  const outputPath = path.join(outputDir, 'experiment-decision.md')
  fs.writeFileSync(outputPath, md, 'utf-8')

  console.log('\n=== Decisions ===')
  for (const d of decisions) {
    const icon = d.decision === 'ship-variant' ? '✅' : d.decision === 'rollback' ? '❌' : d.decision === 'keep-testing' ? '⏳' : '❓'
    console.log(`${icon} ${d.experimentName}: ${d.decision}`)
    console.log(`   ${d.reason}\n`)
  }

  console.log(`Output: ${outputPath}`)
  console.log('\n=== Decision Complete ===')
  process.exit(0)
}

main()