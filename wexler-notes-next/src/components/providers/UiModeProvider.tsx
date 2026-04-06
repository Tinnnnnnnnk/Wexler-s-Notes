// src/components/providers/UiModeProvider.tsx
// Provides shared fxMode + layoutMode state to Navbar and HomePage
'use client'
import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'
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
  return prefersReduced || saveData || (cpuCores > 0 && cpuCores <= 4) || (memorySize > 0 && memorySize <= 4)
}

interface UiModeContextValue {
  fxMode: FxMode
  layoutMode: LayoutMode
  perfMode: PerfMode
  setFxMode: (mode: FxMode) => void
  setFxModeDirect: (mode: FxMode) => void
  toggleFxMode: (target: 'glass' | 'liquid') => void
  setLayoutMode: (mode: LayoutMode) => void
  setPerfMode: (mode: PerfMode) => void
}

export const UiModeContext = createContext<UiModeContextValue>({
  fxMode: 'default',
  layoutMode: 'minimal',
  perfMode: 'normal',
  setFxMode: () => {},
  setFxModeDirect: () => {},
  toggleFxMode: () => {},
  setLayoutMode: () => {},
  setPerfMode: () => {},
})

export function useUiModeContext(): UiModeContextValue {
  return useContext(UiModeContext)
}

export function UiModeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  // Default to 'glass' so backdrop shows on first load
  const [fxMode, setFxModeState] = useState<FxMode>('glass')
  const [layoutMode, setLayoutModeState] = useState<LayoutMode>('minimal')
  const [perfMode, setPerfModeState] = useState<PerfMode>('normal')

  useEffect(() => {
    const savedFx = normalizeFxMode(safeRead(FX_STORAGE_KEY, 'glass'))
    const savedLayout = normalizeLayoutMode(safeRead(LAYOUT_STORAGE_KEY, 'minimal'))
    const perf = evaluatePerformanceProfile() ? 'safe' : 'normal'
    setFxModeState(savedFx)
    setLayoutModeState(savedLayout)
    setPerfModeState(perf)
  }, [])

  // Sync HTML classes
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

  const setFxModeDirect = useCallback((mode: FxMode) => {
    safeWrite(FX_STORAGE_KEY, mode)
    setFxModeState(mode)
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
    setPerfModeState(mode)
  }, [])

  const value = useMemo(() => ({
    fxMode,
    layoutMode,
    perfMode,
    setFxMode: setFxModeDirect,
    setFxModeDirect,
    toggleFxMode,
    setLayoutMode,
    setPerfMode,
  }), [fxMode, layoutMode, perfMode, setFxModeDirect, toggleFxMode, setLayoutMode, setPerfMode])

  return (
    <UiModeContext.Provider value={value}>
      {children}
    </UiModeContext.Provider>
  )
}
