import { ref } from 'vue'

const STORAGE_KEY = 'wexler.homeLayout.mode'
const VALID_MODES = ['minimal', 'dashboard', 'editorial']

const homeLayoutMode = ref('minimal')
let initialized = false
let pendingWriteMode = 'minimal'
let writeRaf = 0

function normalizeMode(value) {
  const mode = String(value || '').trim().toLowerCase()
  return VALID_MODES.includes(mode) ? mode : 'minimal'
}

function safeReadStorage() {
  if (typeof window === 'undefined') return 'minimal'
  try {
    return localStorage.getItem(STORAGE_KEY) || 'minimal'
  } catch (error) {
    return 'minimal'
  }
}

function safeWriteStorage(value) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch (error) {
    // Ignore storage errors.
  }
}

function applyMode(mode) {
  if (homeLayoutMode.value === mode) return
  homeLayoutMode.value = mode
  safeWriteStorage(mode)
}

function initHomeLayoutState() {
  if (initialized) return
  const saved = safeReadStorage()
  const normalized = normalizeMode(saved)
  homeLayoutMode.value = normalized
  pendingWriteMode = normalized
  initialized = true
}

function setHomeLayoutMode(mode) {
  const normalized = normalizeMode(mode)

  if (typeof window === 'undefined') {
    applyMode(normalized)
    return
  }

  pendingWriteMode = normalized
  if (writeRaf) {
    window.cancelAnimationFrame(writeRaf)
  }

  writeRaf = window.requestAnimationFrame(() => {
    writeRaf = 0
    applyMode(pendingWriteMode)
  })
}

export { homeLayoutMode, initHomeLayoutState, setHomeLayoutMode }
