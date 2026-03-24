import { ref } from 'vue'

const STORAGE_KEY = 'wexler.homeFx.glassMode'
const homeFxEnabled = ref(false)
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
    localStorage.setItem(STORAGE_KEY, value ? '1' : '0')
  } catch (error) {
    // Ignore storage errors.
  }
}

function initHomeFxState() {
  if (initialized) return
  homeFxEnabled.value = safeReadStorage() === '1'
  initialized = true
}

function setHomeFxEnabled(value) {
  homeFxEnabled.value = Boolean(value)
  safeWriteStorage(homeFxEnabled.value)
}

function toggleHomeFxEnabled() {
  setHomeFxEnabled(!homeFxEnabled.value)
}

export { homeFxEnabled, initHomeFxState, setHomeFxEnabled, toggleHomeFxEnabled }
