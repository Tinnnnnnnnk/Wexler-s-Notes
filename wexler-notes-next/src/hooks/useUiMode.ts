'use client'
// src/hooks/useUiMode.ts
// Unified UI mode state — migrated from stores/uiModeState.js
// This hook is the SINGLE WRITER for HTML classList (same contract as the original store)

import { useState, useCallback, useEffect } from 'react'
import type { FxMode, LayoutMode, PerfMode } from '@/types/uiMode'

const FX_STORAGE_KEY = 'wexler.homeFx.mode'
const LAYOUT_STORAGE_KEY = 'wexler.homeLayout.mode'

const FX_CLASSES: Record<FxMode, string> = {
  default: 'home-default-mode',
  glass: 'home-glass-mode',
  liquid: 'home-liquid-mode',
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
  if (m === 'glass' || m === 'liquid') return m as FxMode
  return 'default'
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
  const lowHardware =
    (Number.isFinite(cpuCores) && cpuCores > 0 && cpuCores <= 4) ||
    (Number.isFinite(memorySize) && memorySize > 0 && memorySize <= 4)
  return prefersReduced || saveData || lowHardware
}

export interface UseUiModeReturn {
  fxMode: FxMode
  layoutMode: LayoutMode
  perfMode: PerfMode
  isHome: boolean
  isSkyTakeOut: boolean
  setFxMode: (mode: FxMode) => void
  toggleFxMode: (target: 'glass' | 'liquid') => void
  setLayoutMode: (mode: LayoutMode) => void
  setPerfMode: (mode: PerfMode) => void
}

export function useUiMode(isHome = false): UseUiModeReturn {
  const [fxMode, setFxModeState] = useState<FxMode>('default')
  const [layoutMode, setLayoutModeState] = useState<LayoutMode>('minimal')
  const [perfMode, setPerfModeState] = useState<PerfMode>('normal')

  // Sync HTML classes whenever state changes
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

  // Initialize from localStorage on mount
  useEffect(() => {
    const savedFx = normalizeFxMode(safeRead(FX_STORAGE_KEY, 'default'))
    const savedLayout = normalizeLayoutMode(safeRead(LAYOUT_STORAGE_KEY, 'minimal'))
    const perf = evaluatePerformanceProfile() ? 'safe' : 'normal'
    setFxModeState(savedFx)
    setLayoutModeState(savedLayout)
    setPerfModeState(perf)
  }, [])

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

  const setPerfMode = useCallback((mode: PerfMode) => {
    setPerfModeState((prev) => {
      const normalized = mode === 'safe' ? 'safe' : 'normal'
      if (prev === normalized) return prev
      return normalized
    })
  }, [])

  const isSkyTakeOut = false // determined by route in components

  return {
    fxMode,
    layoutMode,
    perfMode,
    isHome,
    isSkyTakeOut,
    setFxMode,
    toggleFxMode,
    setLayoutMode,
    setPerfMode,
  }
}
