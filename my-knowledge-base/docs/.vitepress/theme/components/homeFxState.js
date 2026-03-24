import { ref } from 'vue'

const STORAGE_KEY = 'wexler.homeFx.mode'
const homeFxMode = ref('default')
let initialized = false

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

function initHomeFxState() {
  if (initialized) return
  const savedMode = safeReadStorage()
  homeFxMode.value = savedMode === 'glass' || savedMode === 'liquid' ? savedMode : 'default'
  initialized = true
}

function setHomeFxMode(mode) {
  homeFxMode.value = mode === 'glass' || mode === 'liquid' ? mode : 'default'
  safeWriteStorage(homeFxMode.value)
}

function toggleHomeFxMode(targetMode) {
  if (targetMode !== 'glass' && targetMode !== 'liquid') {
    setHomeFxMode('default')
    return
  }
  setHomeFxMode(homeFxMode.value === targetMode ? 'default' : targetMode)
}

export { homeFxMode, initHomeFxState, setHomeFxMode, toggleHomeFxMode }
