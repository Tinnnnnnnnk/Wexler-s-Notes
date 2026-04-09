// src/hooks/useUiMode.ts
// Unified UI mode hook — tries context first, falls back to isolated state.
// Navbar uses this so it works on both home (UiModeProvider) and docs pages.
'use client'
import { useState, useCallback, useEffect } from 'react'
import type { FxMode, LayoutMode, PerfMode } from '@/types/uiMode'
import { useUiModeContext } from '@/components/providers/UiModeProvider'

const FX_STORAGE_KEY = 'wexler.homeFx.mode'
const LAYOUT_STORAGE_KEY = 'wexler.homeLayout.mode'

const FX_CLASSES: Record<FxMode, string> = {
  default: 'home-default-mode',
  glass: 'home-glass-mode',
  liquid: 'home-liquid-mode',
  cyberpunk: 'home-cyberpunk-mode',
  rgb: 'home-rgb-mode',
  anime: 'home-anime-mode',
  stream: 'home-stream-mode',
  aurora: 'home-aurora-mode',
  graphite: 'home-graphite-mode',
  sakura: 'home-sakura-mode',
  ocean: 'home-ocean-mode',
  ember: 'home-ember-mode',
}

const LAYOUT_CLASSES: Record<LayoutMode, string> = {
  minimal: 'home-layout-minimal',
  dashboard: 'home-layout-dashboard',
  editorial: 'home-layout-editorial',
}

function safeRead(key: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback
  try {
    return localStorage.getItem(key) ?? fallback
  } catch {
    return fallback
  }
}

function safeWrite(key: string, value: string): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, value)
  } catch {
    // ignore
  }
}

function normalizeFxMode(value: string): FxMode {
  const m = value?.trim().toLowerCase()
  const valid: FxMode[] = [
    'default',
    'glass',
    'liquid',
    'cyberpunk',
    'rgb',
    'anime',
    'stream',
    'aurora',
    'graphite',
    'sakura',
    'ocean',
    'ember',
  ]
  return valid.includes(m as FxMode) ? (m as FxMode) : 'default'
}

function normalizeLayoutMode(value: string): LayoutMode {
  const m = value?.trim().toLowerCase()
  if (m === 'dashboard' || m === 'editorial') return m as LayoutMode
  return 'minimal'
}

function evaluatePerformanceProfile(): boolean {
  if (typeof window === 'undefined') return false
  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true
  const cpuCores = Number((navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency || 0)
  const memorySize = Number((navigator as Navigator & { deviceMemory?: number }).deviceMemory || 0)
  return prefersReduced || saveData || (cpuCores > 0 && cpuCores <= 4) || (memorySize > 0 && memorySize <= 4)
}

// Isolated state for use outside UiModeProvider (e.g. Navbar on docs pages)
function useIsolatedUiMode(isHome = false) {
  const [fxMode, setFxModeState] = useState<FxMode>('default')
  const [layoutMode, setLayoutModeState] = useState<LayoutMode>('minimal')
  const [perfMode, setPerfModeState] = useState<PerfMode>('normal')

  useEffect(() => {
    const savedFx = normalizeFxMode(safeRead(FX_STORAGE_KEY, 'default'))
    const savedLayout = normalizeLayoutMode(safeRead(LAYOUT_STORAGE_KEY, 'minimal'))
    const perf = evaluatePerformanceProfile() ? 'safe' : 'normal'
    setFxModeState(savedFx)
    setLayoutModeState(savedLayout)
    setPerfModeState(perf)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    ;(Object.keys(FX_CLASSES) as FxMode[]).forEach((m) => {
      document.documentElement.classList.toggle(FX_CLASSES[m], m === fxMode)
    })
    ;(Object.keys(LAYOUT_CLASSES) as LayoutMode[]).forEach((m) => {
      document.documentElement.classList.toggle(LAYOUT_CLASSES[m], isHome && m === layoutMode)
    })
    document.documentElement.classList.toggle('home-fx-performance-safe', perfMode === 'safe')
  }, [fxMode, layoutMode, perfMode, isHome])

  const setFxMode = useCallback((mode: FxMode) => {
    setFxModeState((prev) => {
      const normalized = normalizeFxMode(mode)
      if (prev === normalized) return prev
      safeWrite(FX_STORAGE_KEY, normalized)
      return normalized
    })
  }, [])

  const toggleFxMode = useCallback((target: 'glass' | 'liquid') => {
    setFxModeState((prev) => {
      const next = prev === target ? 'default' : target
      safeWrite(FX_STORAGE_KEY, next)
      return next
    })
  }, [])

  const setLayoutMode = useCallback((mode: LayoutMode) => {
    setLayoutModeState((prev) => {
      const normalized = normalizeLayoutMode(mode)
      if (prev === normalized) return prev
      safeWrite(LAYOUT_STORAGE_KEY, normalized)
      return normalized
    })
  }, [])

  return {
    fxMode,
    layoutMode,
    perfMode,
    setFxMode,
    toggleFxMode,
    setLayoutMode,
    setPerfMode: (mode: PerfMode) => setPerfModeState(mode),
  }
}

export interface UseUiModeReturn {
  fxMode: FxMode
  layoutMode: LayoutMode
  perfMode: PerfMode
  setFxMode: (mode: FxMode) => void
  toggleFxMode: (target: 'glass' | 'liquid') => void
  setLayoutMode: (mode: LayoutMode) => void
  setPerfMode: (mode: PerfMode) => void
}

/**
 * Returns shared UI mode state from UiModeProvider if available (home page),
 * otherwise falls back to isolated local state (docs pages / Navbar).
 * isHome=true additionally applies layout class to document root.
 */
export function useUiMode(isHome = false): UseUiModeReturn {
  const isolated = useIsolatedUiMode(isHome)
  try {
    const ctx = useUiModeContext()
    return ctx
  } catch {
    return isolated
  }
}
