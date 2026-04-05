/**
 * Wexler's Notes - Unified UI Mode Store
 *
 * Single source of truth for all UI mode state.
 * Only this module may write to the document root class list.
 *
 * Modes:
 *   mode.fx:     'default' | 'glass' | 'liquid'
 *   mode.layout: 'minimal' | 'dashboard' | 'editorial'
 *   mode.perf:   'normal' | 'safe'
 */

import { ref, watch } from 'vue'

// ---------------------------------------------------------------------------
// Storage keys
// ---------------------------------------------------------------------------
const FX_STORAGE_KEY = 'wexler.homeFx.mode'
const LAYOUT_STORAGE_KEY = 'wexler.homeLayout.mode'

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const VALID_FX_MODES = ['default', 'glass', 'liquid']
const VALID_LAYOUT_MODES = ['minimal', 'dashboard', 'editorial']

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
const fxMode = ref('default')
const layoutMode = ref('minimal')
const perfMode = ref('normal')

let fxInitialized = false
let layoutInitialized = false

// ---------------------------------------------------------------------------
// Normalizers
// ---------------------------------------------------------------------------
function normalizeFxMode(value) {
  const m = String(value || '').trim().toLowerCase()
  return VALID_FX_MODES.includes(m) ? m : 'default'
}

function normalizeLayoutMode(value) {
  const m = String(value || '').trim().toLowerCase()
  return VALID_LAYOUT_MODES.includes(m) ? m : 'minimal'
}

// ---------------------------------------------------------------------------
// Storage helpers
// ---------------------------------------------------------------------------
function safeRead(key, fallback) {
  if (typeof window === 'undefined') return fallback
  try {
    return localStorage.getItem(key) ?? fallback
  } catch {
    return fallback
  }
}

function safeWrite(key, value) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, value)
  } catch {
    // Ignore storage errors.
  }
}

// ---------------------------------------------------------------------------
// HTML class synchronization
// ---------------------------------------------------------------------------
const FX_CLASSES = {
  default: 'home-default-mode',
  glass: 'home-glass-mode',
  liquid: 'home-liquid-mode'
}

const LAYOUT_CLASSES = {
  minimal: 'home-layout-minimal',
  dashboard: 'home-layout-dashboard',
  editorial: 'home-layout-editorial'
}

function syncFxClass(fx) {
  if (typeof document === 'undefined') return
  VALID_FX_MODES.forEach((m) => {
    document.documentElement.classList.toggle(FX_CLASSES[m], m === fx)
  })
}

function syncLayoutClass(layout, isHome) {
  if (typeof document === 'undefined') return
  VALID_LAYOUT_MODES.forEach((m) => {
    document.documentElement.classList.toggle(LAYOUT_CLASSES[m], isHome && m === layout)
  })
}

function syncPerfClass(perf) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('home-fx-performance-safe', perf === 'safe')
}

function syncAllClasses() {
  syncFxClass(fxMode.value)
  syncLayoutClass(layoutMode.value, _isHome())
  syncPerfClass(perfMode.value)
}

function clearAllModeClasses() {
  if (typeof document === 'undefined') return
  VALID_FX_MODES.forEach((m) => document.documentElement.classList.remove(FX_CLASSES[m]))
  VALID_LAYOUT_MODES.forEach((m) => document.documentElement.classList.remove(LAYOUT_CLASSES[m]))
  document.documentElement.classList.remove('home-fx-performance-safe')
}

// ---------------------------------------------------------------------------
// Route helper (lazy to avoid circular dependency)
// ---------------------------------------------------------------------------
let _routePath = '/'

export function setRoutePath(path) {
  _routePath = path
}

function _isHome() {
  return _routePath === '/'
}

// ---------------------------------------------------------------------------
// Performance profile evaluation
// ---------------------------------------------------------------------------
export function evaluatePerformanceProfile() {
  if (typeof window === 'undefined') return false
  const prefersReduced =
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  const saveData = navigator.connection?.saveData === true
  const cpuCores = Number(navigator.hardwareConcurrency || 0)
  const memorySize = Number(navigator.deviceMemory || 0)
  const lowHardware =
    (Number.isFinite(cpuCores) && cpuCores > 0 && cpuCores <= 4) ||
    (Number.isFinite(memorySize) && memorySize > 0 && memorySize <= 4)
  return prefersReduced || saveData || lowHardware
}

function applyPerfProfile() {
  perfMode.value = evaluatePerformanceProfile() ? 'safe' : 'normal'
  syncPerfClass(perfMode.value)
}

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------
export function initUiModeStore() {
  if (!fxInitialized) {
    fxMode.value = normalizeFxMode(safeRead(FX_STORAGE_KEY, 'default'))
    fxInitialized = true
  }
  if (!layoutInitialized) {
    layoutMode.value = normalizeLayoutMode(safeRead(LAYOUT_STORAGE_KEY, 'minimal'))
    layoutInitialized = true
  }
  syncAllClasses()
}

// ---------------------------------------------------------------------------
// FX Mode actions
// ---------------------------------------------------------------------------
export function setFxMode(mode) {
  const normalized = normalizeFxMode(mode)
  if (fxMode.value === normalized) return
  fxMode.value = normalized
  safeWrite(FX_STORAGE_KEY, normalized)
  syncFxClass(normalized)
}

export function toggleFxMode(target) {
  if (target !== 'glass' && target !== 'liquid') {
    setFxMode('default')
    return
  }
  setFxMode(fxMode.value === target ? 'default' : target)
}

export function getFxMode() {
  return fxMode.value
}

// ---------------------------------------------------------------------------
// Layout Mode actions
// ---------------------------------------------------------------------------
export function setLayoutMode(mode) {
  const normalized = normalizeLayoutMode(mode)
  if (layoutMode.value === normalized) return
  layoutMode.value = normalized
  safeWrite(LAYOUT_STORAGE_KEY, normalized)
  syncLayoutClass(normalized, _isHome())
}

export function getLayoutMode() {
  return layoutMode.value
}

// ---------------------------------------------------------------------------
// Route sync (call this on every route change)
// ---------------------------------------------------------------------------
export function syncRouteMode(path) {
  _routePath = path
  syncLayoutClass(layoutMode.value, _isHome())
}

// ---------------------------------------------------------------------------
// Performance mode
// ---------------------------------------------------------------------------
export function setPerfMode(mode) {
  const normalized = mode === 'safe' ? 'safe' : 'normal'
  if (perfMode.value === normalized) return
  perfMode.value = normalized
  syncPerfClass(normalized)
}

export function getPerfMode() {
  return perfMode.value
}

// ---------------------------------------------------------------------------
// Bulk state hydration (for components that need all state at once)
// ---------------------------------------------------------------------------
export function getUiModeState() {
  return {
    fx: fxMode.value,
    layout: layoutMode.value,
    perf: perfMode.value,
    isHome: _isHome()
  }
}
