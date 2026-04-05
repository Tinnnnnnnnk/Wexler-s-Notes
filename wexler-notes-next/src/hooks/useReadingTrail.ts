'use client'
// src/hooks/useReadingTrail.ts
// Reading trail persistence — migrated from CommandPalette.vue

import { useState, useCallback, useEffect } from 'react'
import type { ReadingSnapshot } from '@/types/mdx'

const TRAIL_STORAGE_KEY = 'wexler.readingTrail.v1'
const MAX_RECENT = 18

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function shortText(value: string, maxLength = 48): string {
  const text = String(value || '').replace(/\s+/g, ' ').trim()
  if (!text) return ''
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength)}...`
}

function normalizeSnapshot(raw: Partial<ReadingSnapshot>): ReadingSnapshot | null {
  if (!raw || typeof raw !== 'object') return null
  const path = String(raw.path || '').trim()
  if (!path.startsWith('/')) return null
  return {
    path,
    title: shortText(raw.title || path, 72),
    excerpt: shortText(raw.excerpt || '', 120),
    progress: clamp(Number(raw.progress || 0), 0, 1),
    scrollY: Math.max(0, Number(raw.scrollY || 0)),
    headingId: String(raw.headingId || '').trim(),
    updatedAt: Number(raw.updatedAt || Date.now()),
  }
}

function loadSnapshots(): ReadingSnapshot[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(TRAIL_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    const source = Array.isArray(parsed?.recent) ? parsed.recent : []
    return source
      .map((item: Partial<ReadingSnapshot>) => normalizeSnapshot(item))
      .filter(Boolean)
      .slice(0, MAX_RECENT) as ReadingSnapshot[]
  } catch {
    return []
  }
}

function saveSnapshots(snapshots: ReadingSnapshot[]): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(TRAIL_STORAGE_KEY, JSON.stringify({
      recent: snapshots.slice(0, MAX_RECENT),
      updatedAt: Date.now(),
    }))
  } catch {
    // ignore
  }
}

export interface UseReadingTrailReturn {
  trail: ReadingSnapshot[]
  upsertSnapshot: (snapshot: Partial<ReadingSnapshot>) => void
  restorePosition: (snapshot: ReadingSnapshot) => boolean
}

export function useReadingTrail(): UseReadingTrailReturn {
  const [trail, setTrail] = useState<ReadingSnapshot[]>([])

  useEffect(() => {
    setTrail(loadSnapshots())
  }, [])

  const upsertSnapshot = useCallback((snapshot: Partial<ReadingSnapshot>) => {
    const normalized = normalizeSnapshot(snapshot)
    if (!normalized) return

    setTrail((prev) => {
      const existing = prev.filter((item) => item.path !== normalized.path)
      const next = [normalized, ...existing].slice(0, MAX_RECENT)
      saveSnapshots(next)
      return next
    })
  }, [])

  const restorePosition = useCallback((snapshot: ReadingSnapshot): boolean => {
    if (!snapshot) return false

    if (snapshot.headingId) {
      const node = document.getElementById(snapshot.headingId)
      if (node) {
        node.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return true
      }
    }

    if (Number.isFinite(snapshot.scrollY)) {
      window.scrollTo({ top: Math.max(0, snapshot.scrollY), behavior: 'smooth' })
      return true
    }

    return false
  }, [])

  return { trail, upsertSnapshot, restorePosition }
}
