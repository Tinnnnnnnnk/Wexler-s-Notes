// src/types/uiMode.ts

export type FxMode =
  | 'default'
  | 'glass'
  | 'liquid'
  | 'cyberpunk'
  | 'cyber-hacker'
  | 'cyber-corp'
  | 'cyber-game'
  | 'rgb'
  | 'anime'
  | 'haru'
  | 'mugen'
  | 'stream'
  | 'aurora'
  | 'graphite'
  | 'sakura'
  | 'ocean'
  | 'ember'
export type LayoutMode = 'minimal' | 'dashboard' | 'editorial'
export type PerfMode = 'normal' | 'safe'

export type FxModeKey = Extract<
  FxMode,
  | 'default'
  | 'glass'
  | 'liquid'
  | 'cyberpunk'
  | 'cyber-hacker'
  | 'cyber-corp'
  | 'cyber-game'
  | 'rgb'
  | 'anime'
  | 'haru'
  | 'mugen'
  | 'stream'
  | 'aurora'
  | 'graphite'
  | 'sakura'
  | 'ocean'
  | 'ember'
>

export interface UiModeState {
  fxMode: FxMode
  layoutMode: LayoutMode
  perfMode: PerfMode
  isHome: boolean
  isSkyTakeOut: boolean
}

export interface UiModeActions {
  setFxMode: (mode: FxMode) => void
  toggleFxMode: (target: 'glass' | 'liquid') => void
  setLayoutMode: (mode: LayoutMode) => void
  setPerfMode: (mode: PerfMode) => void
  evaluatePerfProfile: () => boolean
}
