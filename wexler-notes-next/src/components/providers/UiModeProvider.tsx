// src/components/providers/UiModeProvider.tsx
'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
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
  if (value === 'glass' || value === 'liquid') return value
  return 'default'
}

function normalizeLayoutMode(value: string): LayoutMode {
  if (value === 'dashboard' || value === 'editorial') return value
  return 'minimal'
}

function evaluatePerformanceProfile(): boolean {
  if (typeof window === 'undefined') return false
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData === true
  const cpuCores = Number((navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency || 0)
  const memorySize = Number((navigator as Navigator & { deviceMemory?: number }).deviceMemory || 0)

  // 扩大 safe 模式触发范围：<=6 核 CPU 或 <=4GB 内存均降档
  // 这覆盖了绝大多数笔记本和旧款移动设备，显著降低 GPU 组合压力
  return prefersReduced || saveData || (cpuCores > 0 && cpuCores <= 6) || (memorySize > 0 && memorySize <= 4)
}

interface UiModeContextValue {
  fxMode: FxMode
  layoutMode: LayoutMode
  perfMode: PerfMode
  setFxMode: (mode: FxMode) => void
  toggleFxMode: (target: 'glass' | 'liquid') => void
  setLayoutMode: (mode: LayoutMode) => void
  setPerfMode: (mode: PerfMode) => void
}

export const UiModeContext = createContext<UiModeContextValue>({
  fxMode: 'default',
  layoutMode: 'minimal',
  perfMode: 'normal',
  setFxMode: () => {},
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
  const [fxMode, setFxModeState] = useState<FxMode>('default')
  const [layoutMode, setLayoutModeState] = useState<LayoutMode>('minimal')
  const [perfMode, setPerfModeState] = useState<PerfMode>('normal')

  useEffect(() => {
    const savedFx = normalizeFxMode(safeRead(FX_STORAGE_KEY, 'default'))
    const savedLayout = normalizeLayoutMode(safeRead(LAYOUT_STORAGE_KEY, 'minimal'))
    setFxModeState(savedFx)
    setLayoutModeState(savedLayout)
    setPerfModeState(evaluatePerformanceProfile() ? 'safe' : 'normal')
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return

    ;(Object.keys(FX_CLASSES) as FxMode[]).forEach((mode) => {
      document.documentElement.classList.toggle(FX_CLASSES[mode], mode === fxMode)
    })

    ;(Object.keys(LAYOUT_CLASSES) as LayoutMode[]).forEach((mode) => {
      document.documentElement.classList.toggle(LAYOUT_CLASSES[mode], isHome && mode === layoutMode)
    })

    document.documentElement.classList.toggle('home-fx-performance-safe', perfMode === 'safe')
  }, [fxMode, layoutMode, perfMode, isHome])

  const setFxMode = useCallback((mode: FxMode) => {
    const next = normalizeFxMode(mode)
    safeWrite(FX_STORAGE_KEY, next)
    setFxModeState(next)
  }, [])

  const toggleFxMode = useCallback((target: 'glass' | 'liquid') => {
    setFxModeState((prev) => {
      const next: FxMode = prev === target ? 'default' : target
      safeWrite(FX_STORAGE_KEY, next)
      return next
    })
  }, [])

  const setLayoutMode = useCallback((mode: LayoutMode) => {
    const next = normalizeLayoutMode(mode)
    safeWrite(LAYOUT_STORAGE_KEY, next)
    setLayoutModeState(next)
  }, [])

  const setPerfMode = useCallback((mode: PerfMode) => {
    setPerfModeState(mode)
  }, [])

  const value = useMemo(
    () => ({
      fxMode,
      layoutMode,
      perfMode,
      setFxMode,
      toggleFxMode,
      setLayoutMode,
      setPerfMode,
    }),
    [fxMode, layoutMode, perfMode, setFxMode, toggleFxMode, setLayoutMode, setPerfMode],
  )

  return <UiModeContext.Provider value={value}>{children}</UiModeContext.Provider>
}
