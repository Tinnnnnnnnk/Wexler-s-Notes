import { ref } from 'vue'

const EDIT_MODE_KEY = 'wexler.editor.mode'
const ROUTE_LAYOUT_KEY_PREFIX = 'wexler.editor.layout.route.v1.'

const isEditorMode = ref(false)
const layoutsByRoute = ref({})
const selectedByRoute = ref({})
let initialized = false

function normalizeRoute(routeInput) {
  const raw = typeof routeInput === 'string' && routeInput.trim() ? routeInput.trim() : '/'
  const route = raw.split(/[?#]/)[0] || '/'
  if (route === '/') return '/'
  return route.startsWith('/') ? route : `/${route}`
}

function createDefaultBlockSeed() {
  return {
    id: 'block-1',
    kind: 'text',
    x: 96,
    y: 140,
    w: 420,
    h: 180,
    z: 10,
    opacity: 0.9,
    radius: 16,
    blur: 12,
    bg: 'rgba(16, 28, 40, 0.3)',
    color: '#f3f7fc',
    kicker: 'Module',
    title: 'Untitled',
    body: 'Editable content block'
  }
}

function createDefaultLayout(routeInput) {
  const route = normalizeRoute(routeInput)

  if (route === '/') {
    return {
      version: 1,
      blocks: [
        {
          ...createDefaultBlockSeed(),
          id: 'hero-intro',
          x: 76,
          y: 128,
          w: 560,
          h: 220,
          z: 10,
          opacity: 0.95,
          radius: 18,
          blur: 14,
          bg: 'rgba(16, 28, 40, 0.36)',
          color: '#f3f7fc',
          kicker: 'Digital Garden',
          title: "Wexler's Notes",
          body: '\u5168\u6808\u5f00\u53d1\u4e0e\u8fd0\u7ef4\u77e5\u8bc6\u5e93'
        },
        {
          ...createDefaultBlockSeed(),
          id: 'quick-link',
          x: 76,
          y: 372,
          w: 360,
          h: 136,
          z: 11,
          opacity: 0.92,
          radius: 16,
          blur: 12,
          bg: 'rgba(12, 20, 30, 0.28)',
          color: '#e6eff8',
          kicker: 'Launch',
          title: 'Core Notes',
          body: '/Sky-Take-Out/00-\u540e\u7aef\u5f00\u53d1\u77e5\u8bc6\u5927\u672c\u8425'
        }
      ]
    }
  }

  return {
    version: 1,
    blocks: []
  }
}

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function toSafeNumber(value, fallback) {
  const num = Number(value)
  if (!Number.isFinite(num)) return fallback
  return num
}

function normalizeBlock(raw, index) {
  const fallback = createDefaultBlockSeed()
  return {
    id: typeof raw?.id === 'string' && raw.id.trim() ? raw.id : `block-${index + 1}`,
    kind: 'text',
    x: clamp(toSafeNumber(raw?.x, fallback.x), 0, 5000),
    y: clamp(toSafeNumber(raw?.y, fallback.y), 0, 5000),
    w: clamp(toSafeNumber(raw?.w, fallback.w), 180, 1200),
    h: clamp(toSafeNumber(raw?.h, fallback.h), 90, 900),
    z: clamp(toSafeNumber(raw?.z, fallback.z), 0, 200),
    opacity: clamp(toSafeNumber(raw?.opacity, fallback.opacity), 0.05, 1),
    radius: clamp(toSafeNumber(raw?.radius, fallback.radius), 0, 60),
    blur: clamp(toSafeNumber(raw?.blur, fallback.blur), 0, 24),
    bg: typeof raw?.bg === 'string' && raw.bg.trim() ? raw.bg : fallback.bg,
    color: typeof raw?.color === 'string' && raw.color.trim() ? raw.color : fallback.color,
    kicker: typeof raw?.kicker === 'string' ? raw.kicker : '',
    title: typeof raw?.title === 'string' ? raw.title : '',
    body: typeof raw?.body === 'string' ? raw.body : ''
  }
}

function normalizeLayout(routeInput, raw) {
  const fallback = createDefaultLayout(routeInput)
  if (!raw || typeof raw !== 'object') return fallback

  const blocks = Array.isArray(raw.blocks)
    ? raw.blocks.map((block, index) => normalizeBlock(block, index))
    : fallback.blocks

  return {
    version: 1,
    blocks
  }
}

function safeReadStorage(key) {
  if (typeof window === 'undefined') return null
  try {
    return localStorage.getItem(key)
  } catch (error) {
    return null
  }
}

function safeWriteStorage(key, value) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, value)
  } catch (error) {
    // Ignore write failures in private mode.
  }
}

function routeStorageKey(routeInput) {
  const route = normalizeRoute(routeInput)
  return `${ROUTE_LAYOUT_KEY_PREFIX}${encodeURIComponent(route)}`
}

function persistEditorMode() {
  safeWriteStorage(EDIT_MODE_KEY, isEditorMode.value ? '1' : '0')
}

function persistRouteLayout(routeInput) {
  const route = ensureRouteLayout(routeInput)
  safeWriteStorage(routeStorageKey(route), JSON.stringify(layoutsByRoute.value[route]))
}

function loadRouteLayout(routeInput) {
  const route = normalizeRoute(routeInput)
  const savedLayout = safeReadStorage(routeStorageKey(route))

  let resolvedLayout
  if (savedLayout) {
    try {
      resolvedLayout = normalizeLayout(route, JSON.parse(savedLayout))
    } catch (error) {
      resolvedLayout = createDefaultLayout(route)
    }
  } else {
    resolvedLayout = createDefaultLayout(route)
  }

  layoutsByRoute.value = {
    ...layoutsByRoute.value,
    [route]: resolvedLayout
  }

  if (!selectedByRoute.value[route]) {
    selectedByRoute.value = {
      ...selectedByRoute.value,
      [route]: resolvedLayout.blocks[0]?.id || ''
    }
  }
}

function ensureRouteLayout(routeInput) {
  const route = normalizeRoute(routeInput)
  if (!layoutsByRoute.value[route]) {
    loadRouteLayout(route)
  }
  return route
}

function initEditorState() {
  if (initialized) return
  const savedMode = safeReadStorage(EDIT_MODE_KEY)
  isEditorMode.value = savedMode === '1'
  initialized = true
}

function setEditorMode(nextValue) {
  isEditorMode.value = Boolean(nextValue)
  persistEditorMode()
}

function toggleEditorMode() {
  setEditorMode(!isEditorMode.value)
}

function setSelectedRouteBlock(routeInput, blockId) {
  const route = ensureRouteLayout(routeInput)
  selectedByRoute.value = {
    ...selectedByRoute.value,
    [route]: typeof blockId === 'string' ? blockId : ''
  }
}

function getRouteBlocks(routeInput) {
  const route = ensureRouteLayout(routeInput)
  return layoutsByRoute.value[route]?.blocks || []
}

function getOrderedRouteBlocks(routeInput) {
  return [...getRouteBlocks(routeInput)].sort((a, b) => a.z - b.z)
}

function getSelectedRouteBlockId(routeInput) {
  const route = ensureRouteLayout(routeInput)
  return selectedByRoute.value[route] || ''
}

function getSelectedRouteBlock(routeInput) {
  const route = ensureRouteLayout(routeInput)
  const selectedId = selectedByRoute.value[route] || ''
  const blocks = getRouteBlocks(route)
  return blocks.find((block) => block.id === selectedId) || null
}

function patchRouteBlock(routeInput, blockId, patch, options = {}) {
  const route = ensureRouteLayout(routeInput)
  const persist = options.persist !== false
  const blocks = getRouteBlocks(route)
  const targetIndex = blocks.findIndex((block) => block.id === blockId)
  if (targetIndex < 0) return

  const nextLayout = clone(layoutsByRoute.value[route])
  nextLayout.blocks[targetIndex] = normalizeBlock(
    { ...nextLayout.blocks[targetIndex], ...patch },
    targetIndex
  )

  layoutsByRoute.value = {
    ...layoutsByRoute.value,
    [route]: nextLayout
  }

  if (persist) {
    persistRouteLayout(route)
  }
}

function addRouteTextBlock(routeInput) {
  const route = ensureRouteLayout(routeInput)
  const nextLayout = clone(layoutsByRoute.value[route] || createDefaultLayout(route))
  const nextId = `block-${Date.now()}-${Math.floor(Math.random() * 1000)}`
  const count = nextLayout.blocks.length

  nextLayout.blocks.push(
    normalizeBlock(
      {
        ...createDefaultBlockSeed(),
        id: nextId,
        x: 120 + count * 18,
        y: 170 + count * 18,
        z: 12 + count
      },
      count
    )
  )

  layoutsByRoute.value = {
    ...layoutsByRoute.value,
    [route]: nextLayout
  }

  setSelectedRouteBlock(route, nextId)
  persistRouteLayout(route)
}

function removeRouteBlock(routeInput, blockId) {
  const route = ensureRouteLayout(routeInput)
  const nextLayout = clone(layoutsByRoute.value[route])
  const filtered = nextLayout.blocks.filter((block) => block.id !== blockId)

  if (filtered.length === nextLayout.blocks.length) return
  nextLayout.blocks = filtered

  layoutsByRoute.value = {
    ...layoutsByRoute.value,
    [route]: nextLayout
  }

  if (selectedByRoute.value[route] === blockId) {
    setSelectedRouteBlock(route, nextLayout.blocks[0]?.id || '')
  }

  persistRouteLayout(route)
}

function resetRouteLayout(routeInput) {
  const route = ensureRouteLayout(routeInput)
  const nextLayout = createDefaultLayout(route)

  layoutsByRoute.value = {
    ...layoutsByRoute.value,
    [route]: nextLayout
  }

  setSelectedRouteBlock(route, nextLayout.blocks[0]?.id || '')
  persistRouteLayout(route)
}

export {
  isEditorMode,
  layoutsByRoute,
  selectedByRoute,
  initEditorState,
  normalizeRoute,
  ensureRouteLayout,
  setEditorMode,
  toggleEditorMode,
  setSelectedRouteBlock,
  getRouteBlocks,
  getOrderedRouteBlocks,
  getSelectedRouteBlockId,
  getSelectedRouteBlock,
  patchRouteBlock,
  addRouteTextBlock,
  removeRouteBlock,
  resetRouteLayout,
  persistRouteLayout
}
