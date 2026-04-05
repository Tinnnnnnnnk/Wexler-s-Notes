import { ref } from 'vue'

const STORAGE_KEY = 'wexler.homeFx.mode'
const homeFxMode = ref('default')
let initialized = false
let writeRaf = 0
let queuedMode = 'default'

function safeReadStorage() {
  if (typeof window === 'undefined') return '0'
  try {
    return localStorage.getItem(STORAGE_KEY) || '0'
  } catch (error) {
    return '0'
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

function normalizeMode(mode) {
  return mode === 'glass' || mode === 'liquid' ? mode : 'default'
}

function applyHomeFxMode(mode) {
  if (homeFxMode.value === mode) return
  homeFxMode.value = mode
  safeWriteStorage(mode)
}

function initHomeFxState() {
  if (initialized) return
  const savedMode = safeReadStorage()
  homeFxMode.value = normalizeMode(savedMode)
  queuedMode = homeFxMode.value
  initialized = true
}

function setHomeFxMode(mode) {
  const normalized = normalizeMode(mode)

  if (typeof window === 'undefined') {
    applyHomeFxMode(normalized)
    return
  }

  queuedMode = normalized

  if (writeRaf) {
    window.cancelAnimationFrame(writeRaf)
  }

  writeRaf = window.requestAnimationFrame(() => {
    writeRaf = 0
    applyHomeFxMode(queuedMode)
  })
}

function toggleHomeFxMode(targetMode) {
  if (targetMode !== 'glass' && targetMode !== 'liquid') {
    setHomeFxMode('default')
    return
  }
  setHomeFxMode(homeFxMode.value === targetMode ? 'default' : targetMode)
}

export { homeFxMode, initHomeFxState, setHomeFxMode, toggleHomeFxMode }
