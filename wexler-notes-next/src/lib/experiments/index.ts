// src/lib/experiments/index.ts
// A/B experiment framework

export interface ExperimentVariant {
  key: string
  weight: number
  label: string
}

export interface Experiment {
  key: string
  name: string
  description: string
  enabled: boolean
  rollout: number // 0-100 percentage
  startAt?: string
  endAt?: string
  variants: ExperimentVariant[]
  defaultVariant: string
  trackConversion?: string[]
}

export interface ExperimentAssignment {
  experimentKey: string
  variantKey: string
  isControl: boolean
}

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return Math.abs(hash)
}

function bucketUser(visitorId: string, experimentKey: string, totalBuckets: number = 100): number {
  const combined = `${visitorId}:${experimentKey}`
  return hashString(combined) % totalBuckets
}

class ExperimentsClient {
  private experiments: Experiment[] = []
  private assignments: Map<string, ExperimentAssignment> = new Map()
  private visitorId: string = ''

  loadExperiments(experiments: Experiment[]): void {
    this.experiments = experiments
    this.assignments.clear()

    if (typeof window !== 'undefined') {
      this.visitorId = localStorage.getItem('wexler.telemetry.visitor') || ''
    }
  }

  getAssignment(experimentKey: string): ExperimentAssignment | null {
    // Check cache
    const cached = this.assignments.get(experimentKey)
    if (cached) return cached

    const experiment = this.experiments.find(e => e.key === experimentKey)
    if (!experiment) return null

    // Check if experiment is active
    if (!experiment.enabled) {
      const assignment: ExperimentAssignment = {
        experimentKey,
        variantKey: experiment.defaultVariant,
        isControl: true,
      }
      this.assignments.set(experimentKey, assignment)
      return assignment
    }

    // Check time window
    if (experiment.startAt) {
      const start = new Date(experiment.startAt).getTime()
      if (Date.now() < start) {
        const assignment: ExperimentAssignment = {
          experimentKey,
          variantKey: experiment.defaultVariant,
          isControl: true,
        }
        this.assignments.set(experimentKey, assignment)
        return assignment
      }
    }

    if (experiment.endAt) {
      const end = new Date(experiment.endAt).getTime()
      if (Date.now() > end) {
        const assignment: ExperimentAssignment = {
          experimentKey,
          variantKey: experiment.defaultVariant,
          isControl: true,
        }
        this.assignments.set(experimentKey, assignment)
        return assignment
      }
    }

    // Check rollout percentage
    if (experiment.rollout < 100) {
      const bucket = bucketUser(this.visitorId, experimentKey)
      if (bucket >= experiment.rollout) {
        const assignment: ExperimentAssignment = {
          experimentKey,
          variantKey: experiment.defaultVariant,
          isControl: true,
        }
        this.assignments.set(experimentKey, assignment)
        return assignment
      }
    }

    // Determine variant
    const variantBucket = bucketUser(this.visitorId + experimentKey, 'variant')
    let cumulative = 0
    let selectedVariant = experiment.defaultVariant

    for (const variant of experiment.variants) {
      cumulative += variant.weight
      if (variantBucket < cumulative) {
        selectedVariant = variant.key
        break
      }
    }

    const assignment: ExperimentAssignment = {
      experimentKey,
      variantKey: selectedVariant,
      isControl: selectedVariant === experiment.defaultVariant,
    }

    this.assignments.set(experimentKey, assignment)
    return assignment
  }

  getAllAssignments(): ExperimentAssignment[] {
    return this.experiments.map(e => this.getAssignment(e.key)).filter(Boolean) as ExperimentAssignment[]
  }

  getExperiment(experimentKey: string): Experiment | undefined {
    return this.experiments.find(e => e.key === experimentKey)
  }

  getAllExperiments(): Experiment[] {
    return [...this.experiments]
  }

  clearAssignments(): void {
    this.assignments.clear()
  }
}

export const experimentsClient = new ExperimentsClient()
