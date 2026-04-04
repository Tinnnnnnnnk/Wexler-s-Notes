import { ref } from 'vue'

const EDIT_MODE_KEY = 'wexler.editor.mode'
const ROUTE_DRAFT_KEY_PREFIX = 'wexler.editor.layout.route.draft.v2.'
const ROUTE_PUBLISHED_KEY_PREFIX = 'wexler.editor.layout.route.published.v2.'
const ROUTE_PUBLISHED_HISTORY_KEY_PREFIX = 'wexler.editor.layout.route.published.history.v3.'
const LEGACY_ROUTE_LAYOUT_KEY_PREFIX = 'wexler.editor.layout.route.v1.'

const EXPORT_SCHEMA = 'wexler.editor.layout.bundle'
const EXPORT_VERSION = 3
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
  const historyCandidate = Array.isArray(source.publishedHistory)
    ? source.publishedHistory
    : Array.isArray(source.history)
      ? source.history
      : []

  return {
    route,
    draft: normalizeLayout(route, draftCandidate),
    published: normalizeLayout(route, publishedCandidate),
    publishedHistory: normalizeHistoryList(route, historyCandidate)
  }
}

function stringifyLayout(routeInput, layout) {
  return JSON.stringify(normalizeLayout(routeInput, layout))
}

function createSnapshotId() {
  return `snap-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function createHistorySnapshot(routeInput, layout, reason = 'publish') {
  const route = normalizeRoute(routeInput)
  const snapshotReason =
    typeof reason === 'string' && reason.trim() ? reason.trim() : 'publish'

  return {
    id: createSnapshotId(),
    at: new Date().toISOString(),
    reason: snapshotReason,
    layout: normalizeLayout(route, layout)
  }
}

function normalizeHistoryEntry(routeInput, raw, index = 0) {
  const route = normalizeRoute(routeInput)
  if (!raw || typeof raw !== 'object') return null

  const layoutSource =
    raw.layout && typeof raw.layout === 'object'
      ? raw.layout
      : Array.isArray(raw.blocks)
        ? raw
        : null
  if (!layoutSource) return null

  return {
    id:
      typeof raw.id === 'string' && raw.id.trim()
        ? raw.id.trim()
        : `${createSnapshotId()}-${index}`,
    at: typeof raw.at === 'string' && raw.at.trim() ? raw.at.trim() : new Date().toISOString(),
    reason: typeof raw.reason === 'string' && raw.reason.trim() ? raw.reason.trim() : 'publish',
    layout: normalizeLayout(route, layoutSource)
  }
}

function normalizeHistoryList(routeInput, rawList) {
  if (!Array.isArray(rawList)) return []

  return rawList
    .map((item, index) => normalizeHistoryEntry(routeInput, item, index))
    .filter(Boolean)
    .slice(0, MAX_PUBLISHED_HISTORY)
}

function routeDraftKey(routeInput) {
  return `${ROUTE_DRAFT_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`
}

function routePublishedKey(routeInput) {
  return `${ROUTE_PUBLISHED_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`
}

function routePublishedHistoryKey(routeInput) {
  return `${ROUTE_PUBLISHED_HISTORY_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`
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

function persistPublishedRouteHistory(routeInput) {
  const route = ensureRouteLayout(routeInput)
  safeWriteStorage(
    routePublishedHistoryKey(route),
    JSON.stringify(publishedHistoryByRoute.value[route] || [])
  )
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

function setPublishedHistory(routeInput, historyList, options = {}) {
  const route = normalizeRoute(routeInput)
  const persist = options.persist !== false
  const normalized = normalizeHistoryList(route, historyList)

  publishedHistoryByRoute.value = {
    ...publishedHistoryByRoute.value,
    [route]: normalized
  }

  if (persist) {
    persistPublishedRouteHistory(route)
  }
}

function loadRouteLayout(routeInput) {
  const route = normalizeRoute(routeInput)

  const draftRaw = safeReadStorage(routeDraftKey(route))
  const publishedRaw = safeReadStorage(routePublishedKey(route))
  const historyRaw = safeReadStorage(routePublishedHistoryKey(route))
  const legacyRaw = safeReadStorage(routeLegacyKey(route))

  let draftLayout = null
  let publishedLayout = null
  let publishedHistory = []

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

  if (historyRaw) {
    try {
      publishedHistory = normalizeHistoryList(route, JSON.parse(historyRaw))
    } catch (error) {
      publishedHistory = []
    }
  }

  if (!draftLayout && !publishedLayout && legacyRaw) {
    try {
      const legacyLayout = normalizeLayout(route, JSON.parse(legacyRaw))
      draftLayout = clone(legacyLayout)
      publishedLayout = clone(legacyLayout)
      publishedHistory = []
      safeWriteStorage(routeDraftKey(route), JSON.stringify(draftLayout))
      safeWriteStorage(routePublishedKey(route), JSON.stringify(publishedLayout))
      safeWriteStorage(routePublishedHistoryKey(route), JSON.stringify(publishedHistory))
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
  publishedHistoryByRoute.value = {
    ...publishedHistoryByRoute.value,
    [route]: normalizeHistoryList(route, publishedHistory)
  }

  ensureSelectedValid(route)
}

function ensureRouteLayout(routeInput) {
  const route = normalizeRoute(routeInput)
  if (
    !draftLayoutsByRoute.value[route] ||
    !publishedLayoutsByRoute.value[route] ||
    !publishedHistoryByRoute.value[route]
  ) {
    loadRouteLayout(route)
  }
  return route
}

function collectStoredRoutes() {
  const result = new Set([
    ...Object.keys(draftLayoutsByRoute.value),
    ...Object.keys(publishedLayoutsByRoute.value),
    ...Object.keys(publishedHistoryByRoute.value)
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
      } else if (key.startsWith(ROUTE_PUBLISHED_HISTORY_KEY_PREFIX)) {
        result.add(decodeURIComponent(key.slice(ROUTE_PUBLISHED_HISTORY_KEY_PREFIX.length)))
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

function getRoutePublishedHistory(routeInput) {
  const route = ensureRouteLayout(routeInput)
  return publishedHistoryByRoute.value[route] || []
}

function validateRouteLayout(routeInput, layoutInput) {
  const route = normalizeRoute(routeInput)
  const layout = normalizeLayout(route, layoutInput)
  const errors = []
  const warnings = []
  const seenIds = new Set()

  if (layout.blocks.length > 80) {
    errors.push({
      code: 'TOO_MANY_BLOCKS',
      message: `模块数量为 ${layout.blocks.length}，超过 80 的上限。`
    })
  }

  if (!layout.blocks.length) {
    warnings.push({
      code: 'EMPTY_LAYOUT',
      message: '当前页面没有模块，发布后会是空白页面。'
    })
  }

  layout.blocks.forEach((block, index) => {
    const label = `模块 #${index + 1}${block.id ? `（${block.id}）` : ''}`
    const contentLength = `${block.kicker}${block.title}${block.body}`.trim().length

    if (seenIds.has(block.id)) {
      errors.push({
        code: 'DUPLICATE_ID',
        blockId: block.id,
        index,
        message: `${label} 与其他模块使用了重复 ID。`
      })
    }
    seenIds.add(block.id)

    if (!contentLength) {
      warnings.push({
        code: 'EMPTY_CONTENT',
        blockId: block.id,
        index,
        message: `${label} 没有任何文案内容。`
      })
    }

    if (block.title.length > 120) {
      warnings.push({
        code: 'TITLE_TOO_LONG',
        blockId: block.id,
        index,
        message: `${label} 标题过长（>${120} 字）。`
      })
    }

    if (block.body.length > 2000) {
      warnings.push({
        code: 'BODY_TOO_LONG',
        blockId: block.id,
        index,
        message: `${label} 正文过长（>${2000} 字），可能影响可读性。`
      })
    }

    if (block.x + block.w > 5000 || block.y + block.h > 5000) {
      warnings.push({
        code: 'OUT_OF_VIEWPORT',
        blockId: block.id,
        index,
        message: `${label} 可能超出可编辑区域边界。`
      })
    }
  })

  return {
    ok: errors.length === 0,
    route,
    checkedAt: new Date().toISOString(),
    blockCount: layout.blocks.length,
    errors,
    warnings
  }
}

function validateDraftRoute(routeInput) {
  const route = ensureRouteLayout(routeInput)
  return validateRouteLayout(route, draftLayoutsByRoute.value[route])
}

function pushPublishedHistorySnapshot(routeInput, layout, reason = 'publish') {
  const route = ensureRouteLayout(routeInput)
  const snapshot = createHistorySnapshot(route, layout, reason)
  const nextHistory = [snapshot, ...getRoutePublishedHistory(route)].slice(0, MAX_PUBLISHED_HISTORY)
  setPublishedHistory(route, nextHistory, { persist: true })
  return snapshot
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
    historyCount: getRoutePublishedHistory(route).length,
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
  const publishedLayout = clone(publishedLayoutsByRoute.value[route] || createDefaultLayout(route))
  const validation = validateRouteLayout(route, draftLayout)

  if (!validation.ok) {
    return {
      ok: false,
      route,
      message: '发布校验未通过，请先修复错误项。',
      validation
    }
  }

  if (stringifyLayout(route, publishedLayout) !== stringifyLayout(route, draftLayout)) {
    pushPublishedHistorySnapshot(route, publishedLayout, 'publish')
  }

  setPublishedLayout(route, draftLayout, { persist: true })
  persistDraftRouteLayout(route)
  return {
    ok: true,
    route,
    validation,
    historyCount: getRoutePublishedHistory(route).length
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

function rollbackPublishedRoute(routeInput, snapshotId = '') {
  const route = ensureRouteLayout(routeInput)
  const history = getRoutePublishedHistory(route)
  if (!history.length) {
    return {
      ok: false,
      route,
      message: '没有可回滚的发布快照。'
    }
  }

  const targetIndex = snapshotId
    ? history.findIndex((item) => item.id === snapshotId)
    : 0
  if (targetIndex < 0) {
    return {
      ok: false,
      route,
      message: '未找到指定的回滚快照。'
    }
  }

  const targetSnapshot = history[targetIndex]
  const currentPublished = clone(publishedLayoutsByRoute.value[route] || createDefaultLayout(route))
  const historyWithoutTarget = history.filter((_, index) => index !== targetIndex)
  const shouldKeepCurrentAsSnapshot =
    stringifyLayout(route, currentPublished) !== stringifyLayout(route, targetSnapshot.layout)

  const nextHistory = shouldKeepCurrentAsSnapshot
    ? [createHistorySnapshot(route, currentPublished, 'rollback'), ...historyWithoutTarget]
    : historyWithoutTarget

  setPublishedHistory(route, nextHistory.slice(0, MAX_PUBLISHED_HISTORY), { persist: true })
  setPublishedLayout(route, clone(targetSnapshot.layout), { persist: true })
  setDraftLayout(route, clone(targetSnapshot.layout), { persist: true })
  ensureSelectedValid(route)

  return {
    ok: true,
    route,
    snapshot: {
      id: targetSnapshot.id,
      at: targetSnapshot.at,
      reason: targetSnapshot.reason
    },
    historyCount: getRoutePublishedHistory(route).length
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
    published: clone(publishedLayoutsByRoute.value[route]),
    publishedHistory: clone(getRoutePublishedHistory(route))
  }
}

function getAllRoutesExportBundle() {
  const routes = collectStoredRoutes()
  const payload = {}

  routes.forEach((rawRoute) => {
    const route = ensureRouteLayout(rawRoute)
    payload[route] = {
      draft: clone(draftLayoutsByRoute.value[route]),
      published: clone(publishedLayoutsByRoute.value[route]),
      publishedHistory: clone(getRoutePublishedHistory(route))
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
  setPublishedHistory(normalized.route, normalized.publishedHistory, { persist: true })
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
    setPublishedHistory(normalized.route, normalized.publishedHistory, { persist: true })
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
  publishedHistoryByRoute,
  selectedByRoute,
  initEditorState,
  normalizeRoute,
  ensureRouteLayout,
  setEditorMode,
  toggleEditorMode,
  setSelectedRouteBlock,
  getRouteBlocks,
  getPublishedRouteBlocks,
  getRoutePublishedHistory,
  getOrderedRouteBlocks,
  getSelectedRouteBlockId,
  getSelectedRouteBlock,
  routeHasUnpublishedChanges,
  getRouteEditStatus,
  validateDraftRoute,
  patchRouteBlock,
  addRouteTextBlock,
  removeRouteBlock,
  resetRouteLayout,
  saveDraftRoute,
  publishDraftRoute,
  rollbackPublishedRoute,
  revertRouteDraft,
  persistDraftRouteLayout,
  persistPublishedRouteLayout,
  persistPublishedRouteHistory,
  getRouteExportBundle,
  getAllRoutesExportBundle,
  importEditorBundle
}
