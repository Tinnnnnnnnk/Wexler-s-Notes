import { ref } from 'vue'

const EDIT_MODE_KEY = 'wexler.editor.mode'
const ROUTE_DRAFT_KEY_PREFIX = 'wexler.editor.layout.route.draft.v2.'
const ROUTE_PUBLISHED_KEY_PREFIX = 'wexler.editor.layout.route.published.v2.'
const ROUTE_PUBLISHED_HISTORY_KEY_PREFIX = 'wexler.editor.layout.route.published.history.v3.'
const LEGACY_ROUTE_LAYOUT_KEY_PREFIX = 'wexler.editor.layout.route.v1.'

const EXPORT_SCHEMA = 'wexler.editor.layout.bundle'
const EXPORT_VERSION = 2
const MAX_PUBLISHED_HISTORY = 12

const isEditorMode = ref(false)
const draftLayoutsByRoute = ref({})
const publishedLayoutsByRoute = ref({})
const publishedHistoryByRoute = ref({})
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
          body: '全栈开发与运维知识库'
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
          body: '/Sky-Take-Out/00-后端开发知识大本营'
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

function normalizeRoutePayload(routeInput, payload) {
  const route = normalizeRoute(routeInput)
  const source = payload && typeof payload === 'object' ? payload : {}
  const draftCandidate =
    source.draft && typeof source.draft === 'object'
      ? source.draft
      : source.layout && typeof source.layout === 'object'
        ? source.layout
        : source
  const publishedCandidate =
    source.published && typeof source.published === 'object'
      ? source.published
      : source.layout && typeof source.layout === 'object'
        ? source.layout
        : draftCandidate

  return {
    route,
    draft: normalizeLayout(route, draftCandidate),
    published: normalizeLayout(route, publishedCandidate)
  }
}

function stringifyLayout(routeInput, layout) {
  return JSON.stringify(normalizeLayout(routeInput, layout))
}

function routeDraftKey(routeInput) {
  return `${ROUTE_DRAFT_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`
}

function routePublishedKey(routeInput) {
  return `${ROUTE_PUBLISHED_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`
}

function routeLegacyKey(routeInput) {
  return `${LEGACY_ROUTE_LAYOUT_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`
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

function safeRemoveStorage(key) {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(key)
  } catch (error) {
    // Ignore removal failures.
  }
}

function persistEditorMode() {
  safeWriteStorage(EDIT_MODE_KEY, isEditorMode.value ? '1' : '0')
}

function persistDraftRouteLayout(routeInput) {
  const route = ensureRouteLayout(routeInput)
  safeWriteStorage(routeDraftKey(route), JSON.stringify(draftLayoutsByRoute.value[route]))
}

function persistPublishedRouteLayout(routeInput) {
  const route = ensureRouteLayout(routeInput)
  safeWriteStorage(routePublishedKey(route), JSON.stringify(publishedLayoutsByRoute.value[route]))
}

function ensureSelectedValid(routeInput) {
  const route = normalizeRoute(routeInput)
  const blocks = draftLayoutsByRoute.value[route]?.blocks || []
  const selectedId = selectedByRoute.value[route] || ''
  const stillExists = blocks.some((block) => block.id === selectedId)
  if (stillExists) return

  selectedByRoute.value = {
    ...selectedByRoute.value,
    [route]: blocks[0]?.id || ''
  }
}

function setDraftLayout(routeInput, layout, options = {}) {
  const route = normalizeRoute(routeInput)
  const persist = options.persist !== false
  const normalized = normalizeLayout(route, layout)

  draftLayoutsByRoute.value = {
    ...draftLayoutsByRoute.value,
    [route]: normalized
  }

  ensureSelectedValid(route)
  if (persist) {
    persistDraftRouteLayout(route)
  }
}

function setPublishedLayout(routeInput, layout, options = {}) {
  const route = normalizeRoute(routeInput)
  const persist = options.persist !== false
  const normalized = normalizeLayout(route, layout)

  publishedLayoutsByRoute.value = {
    ...publishedLayoutsByRoute.value,
    [route]: normalized
  }

  if (persist) {
    persistPublishedRouteLayout(route)
  }
}

function loadRouteLayout(routeInput) {
  const route = normalizeRoute(routeInput)

  const draftRaw = safeReadStorage(routeDraftKey(route))
  const publishedRaw = safeReadStorage(routePublishedKey(route))
  const legacyRaw = safeReadStorage(routeLegacyKey(route))

  let draftLayout = null
  let publishedLayout = null

  if (draftRaw) {
    try {
      draftLayout = normalizeLayout(route, JSON.parse(draftRaw))
    } catch (error) {
      draftLayout = null
    }
  }

  if (publishedRaw) {
    try {
      publishedLayout = normalizeLayout(route, JSON.parse(publishedRaw))
    } catch (error) {
      publishedLayout = null
    }
  }

  if (!draftLayout && !publishedLayout && legacyRaw) {
    try {
      const legacyLayout = normalizeLayout(route, JSON.parse(legacyRaw))
      draftLayout = clone(legacyLayout)
      publishedLayout = clone(legacyLayout)
      safeWriteStorage(routeDraftKey(route), JSON.stringify(draftLayout))
      safeWriteStorage(routePublishedKey(route), JSON.stringify(publishedLayout))
      safeRemoveStorage(routeLegacyKey(route))
    } catch (error) {
      // Ignore legacy parse errors.
    }
  }

  if (!draftLayout && publishedLayout) {
    draftLayout = clone(publishedLayout)
  }
  if (draftLayout && !publishedLayout) {
    publishedLayout = clone(draftLayout)
  }
  if (!draftLayout && !publishedLayout) {
    const fallback = createDefaultLayout(route)
    draftLayout = clone(fallback)
    publishedLayout = clone(fallback)
  }

  draftLayoutsByRoute.value = {
    ...draftLayoutsByRoute.value,
    [route]: normalizeLayout(route, draftLayout)
  }
  publishedLayoutsByRoute.value = {
    ...publishedLayoutsByRoute.value,
    [route]: normalizeLayout(route, publishedLayout)
  }

  ensureSelectedValid(route)
}

function ensureRouteLayout(routeInput) {
  const route = normalizeRoute(routeInput)
  if (!draftLayoutsByRoute.value[route] || !publishedLayoutsByRoute.value[route]) {
    loadRouteLayout(route)
  }
  return route
}

function collectStoredRoutes() {
  const result = new Set([
    ...Object.keys(draftLayoutsByRoute.value),
    ...Object.keys(publishedLayoutsByRoute.value)
  ])

  if (typeof window === 'undefined') {
    return [...result]
  }

  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i)
      if (!key) continue

      if (key.startsWith(ROUTE_DRAFT_KEY_PREFIX)) {
        result.add(decodeURIComponent(key.slice(ROUTE_DRAFT_KEY_PREFIX.length)))
      } else if (key.startsWith(ROUTE_PUBLISHED_KEY_PREFIX)) {
        result.add(decodeURIComponent(key.slice(ROUTE_PUBLISHED_KEY_PREFIX.length)))
      } else if (key.startsWith(LEGACY_ROUTE_LAYOUT_KEY_PREFIX)) {
        result.add(decodeURIComponent(key.slice(LEGACY_ROUTE_LAYOUT_KEY_PREFIX.length)))
      }
    }
  } catch (error) {
    // Ignore storage inspection errors.
  }

  return [...result]
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
  return draftLayoutsByRoute.value[route]?.blocks || []
}

function getPublishedRouteBlocks(routeInput) {
  const route = ensureRouteLayout(routeInput)
  return publishedLayoutsByRoute.value[route]?.blocks || []
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

function routeHasUnpublishedChanges(routeInput) {
  const route = ensureRouteLayout(routeInput)
  return (
    stringifyLayout(route, draftLayoutsByRoute.value[route]) !==
    stringifyLayout(route, publishedLayoutsByRoute.value[route])
  )
}

function getRouteEditStatus(routeInput) {
  const route = ensureRouteLayout(routeInput)
  return {
    route,
    blockCount: getRouteBlocks(route).length,
    publishedBlockCount: getPublishedRouteBlocks(route).length,
    dirty: routeHasUnpublishedChanges(route)
  }
}

function patchRouteBlock(routeInput, blockId, patch, options = {}) {
  const route = ensureRouteLayout(routeInput)
  const persist = options.persist !== false
  const blocks = getRouteBlocks(route)
  const targetIndex = blocks.findIndex((block) => block.id === blockId)
  if (targetIndex < 0) return

  const nextLayout = clone(draftLayoutsByRoute.value[route])
  nextLayout.blocks[targetIndex] = normalizeBlock(
    { ...nextLayout.blocks[targetIndex], ...patch },
    targetIndex
  )

  setDraftLayout(route, nextLayout, { persist })
}

function addRouteTextBlock(routeInput) {
  const route = ensureRouteLayout(routeInput)
  const nextLayout = clone(draftLayoutsByRoute.value[route] || createDefaultLayout(route))
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

  setDraftLayout(route, nextLayout, { persist: true })
  setSelectedRouteBlock(route, nextId)
}

function removeRouteBlock(routeInput, blockId) {
  const route = ensureRouteLayout(routeInput)
  const nextLayout = clone(draftLayoutsByRoute.value[route])
  const filtered = nextLayout.blocks.filter((block) => block.id !== blockId)

  if (filtered.length === nextLayout.blocks.length) return
  nextLayout.blocks = filtered

  setDraftLayout(route, nextLayout, { persist: true })
  if (selectedByRoute.value[route] === blockId) {
    setSelectedRouteBlock(route, nextLayout.blocks[0]?.id || '')
  }
}

function resetRouteLayout(routeInput) {
  const route = ensureRouteLayout(routeInput)
  const nextLayout = createDefaultLayout(route)
  setDraftLayout(route, nextLayout, { persist: true })
  setSelectedRouteBlock(route, nextLayout.blocks[0]?.id || '')
}

function saveDraftRoute(routeInput) {
  const route = ensureRouteLayout(routeInput)
  persistDraftRouteLayout(route)
  return {
    ok: true,
    route
  }
}

function publishDraftRoute(routeInput) {
  const route = ensureRouteLayout(routeInput)
  const draftLayout = clone(draftLayoutsByRoute.value[route])
  setPublishedLayout(route, draftLayout, { persist: true })
  persistDraftRouteLayout(route)
  return {
    ok: true,
    route
  }
}

function revertRouteDraft(routeInput) {
  const route = ensureRouteLayout(routeInput)
  const publishedLayout = clone(publishedLayoutsByRoute.value[route] || createDefaultLayout(route))
  setDraftLayout(route, publishedLayout, { persist: true })
  ensureSelectedValid(route)
  return {
    ok: true,
    route
  }
}

function getRouteExportBundle(routeInput) {
  const route = ensureRouteLayout(routeInput)
  return {
    schema: EXPORT_SCHEMA,
    version: EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    scope: 'route',
    route,
    draft: clone(draftLayoutsByRoute.value[route]),
    published: clone(publishedLayoutsByRoute.value[route])
  }
}

function getAllRoutesExportBundle() {
  const routes = collectStoredRoutes()
  const payload = {}

  routes.forEach((rawRoute) => {
    const route = ensureRouteLayout(rawRoute)
    payload[route] = {
      draft: clone(draftLayoutsByRoute.value[route]),
      published: clone(publishedLayoutsByRoute.value[route])
    }
  })

  return {
    schema: EXPORT_SCHEMA,
    version: EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    scope: 'all',
    routes: payload
  }
}

function importRoutePayload(payload, fallbackRouteInput) {
  const fallbackRoute = ensureRouteLayout(fallbackRouteInput)

  const route =
    typeof payload?.route === 'string' && payload.route.trim()
      ? normalizeRoute(payload.route)
      : fallbackRoute

  const normalized = normalizeRoutePayload(route, payload)

  setDraftLayout(normalized.route, normalized.draft, { persist: true })
  setPublishedLayout(normalized.route, normalized.published, { persist: true })
  ensureSelectedValid(normalized.route)

  return {
    route: normalized.route
  }
}

function importAllRoutesPayload(routesMap) {
  if (!routesMap || typeof routesMap !== 'object' || Array.isArray(routesMap)) {
    return {
      ok: false,
      message: 'Invalid routes payload.'
    }
  }

  const updatedRoutes = []
  Object.entries(routesMap).forEach(([rawRoute, payload]) => {
    const normalized = normalizeRoutePayload(rawRoute, payload)
    setDraftLayout(normalized.route, normalized.draft, { persist: true })
    setPublishedLayout(normalized.route, normalized.published, { persist: true })
    ensureSelectedValid(normalized.route)
    updatedRoutes.push(normalized.route)
  })

  return {
    ok: true,
    message: `Imported ${updatedRoutes.length} route(s).`,
    routes: updatedRoutes
  }
}

function importEditorBundle(rawText, currentRouteInput = '/') {
  let parsed
  try {
    parsed = JSON.parse(rawText)
  } catch (error) {
    return {
      ok: false,
      message: 'Invalid JSON file.'
    }
  }

  if (!parsed || typeof parsed !== 'object') {
    return {
      ok: false,
      message: 'Import payload must be an object.'
    }
  }

  if (parsed.schema === EXPORT_SCHEMA) {
    if (parsed.scope === 'route') {
      const result = importRoutePayload(parsed, currentRouteInput)
      return {
        ok: true,
        message: `Imported route layout: ${result.route}`,
        routes: [result.route]
      }
    }

    if (parsed.scope === 'all') {
      return importAllRoutesPayload(parsed.routes)
    }

    return {
      ok: false,
      message: 'Unsupported bundle scope.'
    }
  }

  if (Array.isArray(parsed.blocks)) {
    const route = ensureRouteLayout(currentRouteInput)
    const normalized = normalizeLayout(route, parsed)
    setDraftLayout(route, normalized, { persist: true })
    ensureSelectedValid(route)

    return {
      ok: true,
      message: `Imported plain layout to draft: ${route}`,
      routes: [route]
    }
  }

  return {
    ok: false,
    message: 'Unsupported import payload structure.'
  }
}

export {
  isEditorMode,
  draftLayoutsByRoute,
  publishedLayoutsByRoute,
  selectedByRoute,
  initEditorState,
  normalizeRoute,
  ensureRouteLayout,
  setEditorMode,
  toggleEditorMode,
  setSelectedRouteBlock,
  getRouteBlocks,
  getPublishedRouteBlocks,
  getOrderedRouteBlocks,
  getSelectedRouteBlockId,
  getSelectedRouteBlock,
  routeHasUnpublishedChanges,
  getRouteEditStatus,
  patchRouteBlock,
  addRouteTextBlock,
  removeRouteBlock,
  resetRouteLayout,
  saveDraftRoute,
  publishDraftRoute,
  revertRouteDraft,
  persistDraftRouteLayout,
  persistPublishedRouteLayout,
  getRouteExportBundle,
  getAllRoutesExportBundle,
  importEditorBundle
}
