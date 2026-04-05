import { ref } from 'vue'

const EDIT_MODE_KEY = 'wexler.editor.mode'
const ROUTE_DRAFT_KEY_PREFIX = 'wexler.editor.layout.route.draft.v2.'
const ROUTE_PUBLISHED_KEY_PREFIX = 'wexler.editor.layout.route.published.v2.'
const ROUTE_PUBLISHED_HISTORY_KEY_PREFIX = 'wexler.editor.layout.route.published.history.v3.'
const ROUTE_AUDIT_KEY_PREFIX = 'wexler.editor.audit.route.v1.'
const LEGACY_ROUTE_LAYOUT_KEY_PREFIX = 'wexler.editor.layout.route.v1.'

const EXPORT_SCHEMA = 'wexler.editor.layout.bundle'
const EXPORT_VERSION = 3
const LAYOUT_SCHEMA_VERSION = 2
const IMPORT_CONFLICT_CODE = 'IMPORT_CONFLICT'
const UNSUPPORTED_BUNDLE_VERSION_CODE = 'UNSUPPORTED_BUNDLE_VERSION'
const MAX_PUBLISHED_HISTORY = 12
const AUDIT_SCHEMA = 'wexler.editor.audit.bundle'
const AUDIT_VERSION = 1
const PROJECT_SCHEMA = 'wexler.editor.project.bundle'
const PROJECT_VERSION = 1
const MAX_ROUTE_AUDIT_LOGS = 160
const EDIT_ACCESS_KEY = 'wexler.editor.auth'

const isEditorMode = ref(false)
const isEditorAccessUnlocked = ref(false)
const editorGuardState = ref({
  allowEditor: true,
  locked: false,
  requiresSecret: false,
  message: '',
  reason: '',
  mode: 'allowed',
  host: '',
  allowedHosts: [],
  isProd: false,
  unlocked: true
})
const draftLayoutsByRoute = ref({})
const publishedLayoutsByRoute = ref({})
const publishedHistoryByRoute = ref({})
const auditLogsByRoute = ref({})
const selectedByRoute = ref({})
let initialized = false

function normalizeRoute(routeInput) {
  const raw = typeof routeInput === 'string' && routeInput.trim() ? routeInput.trim() : '/'
  const route = raw.split(/[?#]/)[0] || '/'
  if (route === '/') return '/'
  return route.startsWith('/') ? route : `/${route}`
}

function readRuntimeEnv(name) {
  if (!name) return undefined

  const viteEnv = import.meta && import.meta.env ? import.meta.env : null
  if (viteEnv && Object.prototype.hasOwnProperty.call(viteEnv, name)) {
    return viteEnv[name]
  }

  return undefined
}

function parseBooleanFlag(value) {
  if (typeof value !== 'string') return null
  const normalized = value.trim().toLowerCase()
  if (!normalized) return null
  if (['1', 'true', 'yes', 'on'].includes(normalized)) return true
  if (['0', 'false', 'no', 'off'].includes(normalized)) return false
  return null
}

function normalizeHostRule(hostRaw) {
  if (typeof hostRaw !== 'string') return ''
  const trimmed = hostRaw.trim().toLowerCase()
  if (!trimmed) return ''
  return trimmed.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
}

function parseAllowedHosts(rawValue) {
  if (typeof rawValue !== 'string') return []
  return rawValue
    .split(',')
    .map((item) => normalizeHostRule(item))
    .filter(Boolean)
}

function getCurrentHost() {
  if (typeof window === 'undefined' || !window.location) return ''
  const host = window.location.hostname
  return typeof host === 'string' ? host.trim().toLowerCase() : ''
}

function hostMatchesRule(hostname, rule) {
  if (!hostname || !rule) return false
  if (rule === '*') return true
  if (rule.startsWith('*.')) {
    const root = rule.slice(2)
    return hostname === root || hostname.endsWith(`.${root}`)
  }
  return hostname === rule
}

function isHostAllowed(hostname, rules) {
  if (!rules.length) return true
  if (!hostname) return false
  return rules.some((rule) => hostMatchesRule(hostname, rule))
}

function readEditorPolicy() {
  const isProd = Boolean(import.meta && import.meta.env && import.meta.env.PROD)
  const enableInProd = parseBooleanFlag(readRuntimeEnv('VITE_EDITOR_ENABLE'))
  const allowedHosts = parseAllowedHosts(readRuntimeEnv('VITE_EDITOR_ALLOWED_HOSTS'))

  return {
    isProd,
    enableInProd,
    allowedHosts
  }
}

function evaluateEditorGuard() {
  const policy = readEditorPolicy()
  const host = getCurrentHost()
  const requiresSecret = false
  const unlocked = true

  if (policy.isProd && policy.enableInProd !== true) {
    return {
      allowEditor: false,
      locked: false,
      requiresSecret,
      message: '生产环境已关闭编辑模式（可配置 VITE_EDITOR_ENABLE=1 开启）。',
      reason: 'prod_disabled',
      mode: 'blocked',
      host,
      allowedHosts: policy.allowedHosts,
      isProd: policy.isProd,
      unlocked
    }
  }

  if (policy.allowedHosts.length && !isHostAllowed(host, policy.allowedHosts)) {
    return {
      allowEditor: false,
      locked: false,
      requiresSecret,
      message: '当前域名不在编辑白名单中（VITE_EDITOR_ALLOWED_HOSTS）。',
      reason: 'host_not_allowed',
      mode: 'blocked',
      host,
      allowedHosts: policy.allowedHosts,
      isProd: policy.isProd,
      unlocked
    }
  }

  return {
    allowEditor: true,
    locked: false,
    requiresSecret,
    message: '编辑模式可用。',
    reason: 'ok',
    mode: 'allowed',
    host,
    allowedHosts: policy.allowedHosts,
    isProd: policy.isProd,
    unlocked
  }
}

function refreshEditorGuardState() {
  const next = evaluateEditorGuard()
  editorGuardState.value = next

  if (!next.allowEditor && isEditorMode.value) {
    isEditorMode.value = false
    persistEditorMode()
  }

  return next
}

function getEditorGuardStatus() {
  const current = refreshEditorGuardState()
  return {
    ...current
  }
}

function canUseEditor() {
  return refreshEditorGuardState().allowEditor
}

function unlockEditorAccess() {
  isEditorAccessUnlocked.value = true
  safeWriteStorage(EDIT_ACCESS_KEY, '1')
  const guard = refreshEditorGuardState()
  return {
    ok: true,
    message: '编辑模式可用。',
    guard
  }
}

function lockEditorAccess() {
  isEditorAccessUnlocked.value = true
  safeWriteStorage(EDIT_ACCESS_KEY, '1')
  isEditorMode.value = false
  persistEditorMode()
  const guard = refreshEditorGuardState()
  return {
    ok: true,
    message: '编辑模式已关闭。',
    guard
  }
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
      version: LAYOUT_SCHEMA_VERSION,
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
    version: LAYOUT_SCHEMA_VERSION,
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

  const blockSource = Array.isArray(raw.blocks)
    ? raw.blocks
    : Array.isArray(raw.items)
      ? raw.items
      : Array.isArray(raw.modules)
        ? raw.modules
        : null

  const blocks = blockSource
    ? blockSource.map((block, index) => normalizeBlock(block, index))
    : fallback.blocks

  return {
    version: LAYOUT_SCHEMA_VERSION,
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

function normalizeBundleVersion(value) {
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return 1
  return Math.max(1, Math.floor(parsed))
}

function normalizeProjectVersion(value) {
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return 1
  return Math.max(1, Math.floor(parsed))
}

function coerceImportBundle(parsed, currentRouteInput = '/') {
  if (!parsed || typeof parsed !== 'object') {
    return {
      ok: false,
      message: 'Import payload must be an object.'
    }
  }

  if (parsed.schema === EXPORT_SCHEMA) {
    const version = normalizeBundleVersion(parsed.version)
    if (version > EXPORT_VERSION) {
      return {
        ok: false,
        code: UNSUPPORTED_BUNDLE_VERSION_CODE,
        message: `导入文件版本 v${version} 高于当前支持的 v${EXPORT_VERSION}。`
      }
    }

    if (parsed.scope === 'route' || parsed.scope === 'all') {
      return {
        ok: true,
        bundle: {
          ...parsed,
          version
        }
      }
    }

    if (parsed.routes && typeof parsed.routes === 'object' && !Array.isArray(parsed.routes)) {
      return {
        ok: true,
        bundle: {
          schema: EXPORT_SCHEMA,
          version,
          scope: 'all',
          routes: parsed.routes,
          migratedFrom: version
        }
      }
    }

    return {
      ok: true,
      bundle: {
        schema: EXPORT_SCHEMA,
        version,
        scope: 'route',
        route:
          typeof parsed.route === 'string' && parsed.route.trim()
            ? normalizeRoute(parsed.route)
            : normalizeRoute(currentRouteInput),
        draft:
          parsed.draft && typeof parsed.draft === 'object'
            ? parsed.draft
            : parsed.layout && typeof parsed.layout === 'object'
              ? parsed.layout
              : parsed,
        published:
          parsed.published && typeof parsed.published === 'object'
            ? parsed.published
            : parsed.layout && typeof parsed.layout === 'object'
              ? parsed.layout
              : parsed.draft && typeof parsed.draft === 'object'
                ? parsed.draft
                : parsed,
        publishedHistory: Array.isArray(parsed.publishedHistory)
          ? parsed.publishedHistory
          : Array.isArray(parsed.history)
            ? parsed.history
            : [],
        migratedFrom: version
      }
    }
  }

  if (
    Array.isArray(parsed.blocks) ||
    Array.isArray(parsed.items) ||
    Array.isArray(parsed.modules) ||
    (parsed.layout && typeof parsed.layout === 'object')
  ) {
    return {
      ok: true,
      bundle: {
        schema: EXPORT_SCHEMA,
        version: 1,
        scope: 'route',
        route:
          typeof parsed.route === 'string' && parsed.route.trim()
            ? normalizeRoute(parsed.route)
            : normalizeRoute(currentRouteInput),
        draft:
          parsed.layout && typeof parsed.layout === 'object'
            ? parsed.layout
            : parsed,
        published:
          parsed.layout && typeof parsed.layout === 'object'
            ? parsed.layout
            : parsed,
        publishedHistory: [],
        migratedFrom: 1
      }
    }
  }

  return {
    ok: false,
    message: 'Unsupported import payload structure.'
  }
}

function coerceAuditImportBundle(parsed) {
  if (!parsed || typeof parsed !== 'object') {
    return {
      ok: false,
      message: 'Invalid audit payload.'
    }
  }

  if (parsed.schema === AUDIT_SCHEMA) {
    const version = normalizeBundleVersion(parsed.version)
    if (version > AUDIT_VERSION) {
      return {
        ok: false,
        code: UNSUPPORTED_BUNDLE_VERSION_CODE,
        message: `Unsupported audit bundle version v${version}. Current max is v${AUDIT_VERSION}.`
      }
    }

    if (parsed.routes && typeof parsed.routes === 'object' && !Array.isArray(parsed.routes)) {
      return {
        ok: true,
        bundle: {
          schema: AUDIT_SCHEMA,
          version,
          routes: parsed.routes,
          migratedFrom: version
        }
      }
    }

    return {
      ok: false,
      message: 'Audit bundle missing routes payload.'
    }
  }

  if (parsed.routes && typeof parsed.routes === 'object' && !Array.isArray(parsed.routes)) {
    return {
      ok: true,
      bundle: {
        schema: AUDIT_SCHEMA,
        version: 1,
        routes: parsed.routes,
        migratedFrom: 1
      }
    }
  }

  return {
    ok: false,
    message: 'Unsupported audit payload structure.'
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

function normalizeAuditEntry(raw, index = 0) {
  if (!raw || typeof raw !== 'object') return null

  const detail =
    raw.detail && typeof raw.detail === 'object' && !Array.isArray(raw.detail)
      ? raw.detail
      : {}

  return {
    id:
      typeof raw.id === 'string' && raw.id.trim()
        ? raw.id.trim()
        : `audit-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    at: typeof raw.at === 'string' && raw.at.trim() ? raw.at.trim() : new Date().toISOString(),
    action: typeof raw.action === 'string' && raw.action.trim() ? raw.action.trim() : 'update',
    detail
  }
}

function normalizeAuditLog(routeInput, rawList) {
  if (!Array.isArray(rawList)) return []

  return rawList
    .map((item, index) => normalizeAuditEntry(item, index))
    .filter(Boolean)
    .slice(0, MAX_ROUTE_AUDIT_LOGS)
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

function routeAuditKey(routeInput) {
  return `${ROUTE_AUDIT_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`
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

function persistRouteAuditLog(routeInput) {
  const route = ensureRouteLayout(routeInput)
  safeWriteStorage(routeAuditKey(route), JSON.stringify(auditLogsByRoute.value[route] || []))
}

function loadRouteAuditLog(routeInput) {
  const route = normalizeRoute(routeInput)
  const raw = safeReadStorage(routeAuditKey(route))
  let logs = []

  if (raw) {
    try {
      logs = normalizeAuditLog(route, JSON.parse(raw))
    } catch (error) {
      logs = []
    }
  }

  auditLogsByRoute.value = {
    ...auditLogsByRoute.value,
    [route]: logs
  }
}

function ensureRouteAuditLog(routeInput) {
  const route = ensureRouteLayout(routeInput)
  if (!auditLogsByRoute.value[route]) {
    loadRouteAuditLog(route)
  }
  return route
}

function getRouteAuditLog(routeInput) {
  const route = ensureRouteAuditLog(routeInput)
  return auditLogsByRoute.value[route] || []
}

function appendRouteAuditLog(routeInput, action, detail = {}, options = {}) {
  const route = ensureRouteAuditLog(routeInput)
  const persist = options.persist !== false
  const safeDetail =
    detail && typeof detail === 'object' && !Array.isArray(detail) ? detail : {}
  const entry = normalizeAuditEntry({
    id: `audit-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    at: new Date().toISOString(),
    action,
    detail: safeDetail
  })
  if (!entry) return null

  auditLogsByRoute.value = {
    ...auditLogsByRoute.value,
    [route]: [entry, ...getRouteAuditLog(route)].slice(0, MAX_ROUTE_AUDIT_LOGS)
  }

  if (persist) {
    persistRouteAuditLog(route)
  }
  return entry
}

function clearRouteAuditLog(routeInput, options = {}) {
  const route = ensureRouteAuditLog(routeInput)
  const persist = options.persist !== false
  auditLogsByRoute.value = {
    ...auditLogsByRoute.value,
    [route]: []
  }
  if (persist) {
    persistRouteAuditLog(route)
  }
  return {
    ok: true,
    route
  }
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
      } else if (key.startsWith(ROUTE_AUDIT_KEY_PREFIX)) {
        result.add(decodeURIComponent(key.slice(ROUTE_AUDIT_KEY_PREFIX.length)))
      } else if (key.startsWith(LEGACY_ROUTE_LAYOUT_KEY_PREFIX)) {
        result.add(decodeURIComponent(key.slice(LEGACY_ROUTE_LAYOUT_KEY_PREFIX.length)))
      }
    }
  } catch (error) {
    // Ignore storage inspection errors.
  }

  return [...result]
}

function getAllEditorRoutes() {
  return collectStoredRoutes()
    .map((item) => normalizeRoute(item))
    .filter((item, index, arr) => arr.indexOf(item) === index)
    .sort((a, b) => {
      if (a === '/') return -1
      if (b === '/') return 1
      return a.localeCompare(b, 'zh-Hans-CN')
    })
}

function initEditorState() {
  if (initialized) return
  const savedMode = safeReadStorage(EDIT_MODE_KEY)
  isEditorAccessUnlocked.value = true
  safeWriteStorage(EDIT_ACCESS_KEY, '1')
  const guard = refreshEditorGuardState()
  isEditorMode.value = savedMode === '1' && guard.allowEditor
  persistEditorMode()
  initialized = true
}

function setEditorMode(nextValue) {
  const target = Boolean(nextValue)
  const guard = refreshEditorGuardState()

  if (target && !guard.allowEditor) {
    isEditorMode.value = false
    persistEditorMode()
    return {
      ok: false,
      message: guard.message || '当前环境不允许开启编辑模式。',
      guard
    }
  }

  isEditorMode.value = target
  persistEditorMode()
  return {
    ok: true,
    message: target ? '编辑模式已开启。' : '编辑模式已关闭。',
    guard: refreshEditorGuardState()
  }
}

function toggleEditorMode() {
  return setEditorMode(!isEditorMode.value)
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

function getRouteDraftLayout(routeInput) {
  const route = ensureRouteLayout(routeInput)
  return clone(draftLayoutsByRoute.value[route] || createDefaultLayout(route))
}

function replaceRouteDraftLayout(routeInput, layout, options = {}) {
  const route = ensureRouteLayout(routeInput)
  setDraftLayout(route, layout, options)
  ensureSelectedValid(route)
  return {
    ok: true,
    route
  }
}

function duplicateRouteBlock(routeInput, blockId, options = {}) {
  const route = ensureRouteLayout(routeInput)
  const targetId = typeof blockId === 'string' ? blockId : ''
  const sourceBlock = getRouteBlocks(route).find((item) => item.id === targetId)
  if (!sourceBlock) {
    return {
      ok: false,
      route,
      message: '未找到待复制的模块。'
    }
  }

  const offsetX = Number.isFinite(Number(options.offsetX)) ? Number(options.offsetX) : 24
  const offsetY = Number.isFinite(Number(options.offsetY)) ? Number(options.offsetY) : 24
  const persist = options.persist !== false
  const nextLayout = clone(draftLayoutsByRoute.value[route])
  const cloneId = `block-${Date.now()}-${Math.floor(Math.random() * 1000)}`
  const nextIndex = nextLayout.blocks.length
  const nextZ = Math.max(...nextLayout.blocks.map((item) => item.z), 0) + 1

  nextLayout.blocks.push(
    normalizeBlock(
      {
        ...sourceBlock,
        id: cloneId,
        x: sourceBlock.x + offsetX,
        y: sourceBlock.y + offsetY,
        z: nextZ
      },
      nextIndex
    )
  )

  setDraftLayout(route, nextLayout, { persist })
  setSelectedRouteBlock(route, cloneId)

  return {
    ok: true,
    route,
    id: cloneId
  }
}

function moveRouteBlockLayer(routeInput, blockId, direction, options = {}) {
  const route = ensureRouteLayout(routeInput)
  const targetId = typeof blockId === 'string' ? blockId : ''
  const step = Number(direction)
  if (!Number.isFinite(step) || step === 0) {
    return {
      ok: false,
      route,
      message: '图层移动方向无效。'
    }
  }

  const ordered = [...getRouteBlocks(route)].sort((a, b) => a.z - b.z)
  const currentIndex = ordered.findIndex((item) => item.id === targetId)
  if (currentIndex < 0) {
    return {
      ok: false,
      route,
      message: '未找到目标模块。'
    }
  }

  const targetIndex = currentIndex + (step > 0 ? 1 : -1)
  if (targetIndex < 0 || targetIndex >= ordered.length) {
    return {
      ok: false,
      route,
      message: '已经在最顶层或最底层。'
    }
  }

  const persist = options.persist !== false
  const currentBlock = ordered[currentIndex]
  const swapBlock = ordered[targetIndex]
  const nextLayout = clone(draftLayoutsByRoute.value[route])
  const currentLayoutIndex = nextLayout.blocks.findIndex((item) => item.id === currentBlock.id)
  const swapLayoutIndex = nextLayout.blocks.findIndex((item) => item.id === swapBlock.id)
  if (currentLayoutIndex < 0 || swapLayoutIndex < 0) {
    return {
      ok: false,
      route,
      message: '图层交换失败。'
    }
  }

  const tempZ = nextLayout.blocks[currentLayoutIndex].z
  nextLayout.blocks[currentLayoutIndex].z = nextLayout.blocks[swapLayoutIndex].z
  nextLayout.blocks[swapLayoutIndex].z = tempZ
  setDraftLayout(route, nextLayout, { persist })

  return {
    ok: true,
    route
  }
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
    meta: {
      layoutVersion: LAYOUT_SCHEMA_VERSION,
      maxPublishedHistory: MAX_PUBLISHED_HISTORY
    },
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
    meta: {
      layoutVersion: LAYOUT_SCHEMA_VERSION,
      maxPublishedHistory: MAX_PUBLISHED_HISTORY
    },
    scope: 'all',
    routes: payload
  }
}

function getAllRoutesAuditBundle() {
  const routes = collectStoredRoutes()
  const payload = {}

  routes.forEach((rawRoute) => {
    const route = ensureRouteAuditLog(rawRoute)
    payload[route] = clone(getRouteAuditLog(route))
  })

  return {
    schema: AUDIT_SCHEMA,
    version: AUDIT_VERSION,
    exportedAt: new Date().toISOString(),
    meta: {
      maxRouteLogs: MAX_ROUTE_AUDIT_LOGS
    },
    routes: payload
  }
}

function getEditorProjectBundle() {
  const layoutBundle = getAllRoutesExportBundle()
  const auditBundle = getAllRoutesAuditBundle()

  return {
    schema: PROJECT_SCHEMA,
    version: PROJECT_VERSION,
    exportedAt: new Date().toISOString(),
    meta: {
      layoutSchema: EXPORT_SCHEMA,
      layoutVersion: EXPORT_VERSION,
      auditSchema: AUDIT_SCHEMA,
      auditVersion: AUDIT_VERSION
    },
    layoutBundle,
    auditBundle
  }
}

function detectRouteImportConflict(routeInput, incomingDraft, options = {}) {
  if (options.force === true) return null
  const route = ensureRouteLayout(routeInput)
  if (!routeHasUnpublishedChanges(route)) return null

  const currentDraft = draftLayoutsByRoute.value[route] || createDefaultLayout(route)
  const nextDraft = normalizeLayout(route, incomingDraft)
  if (stringifyLayout(route, currentDraft) === stringifyLayout(route, nextDraft)) return null

  return {
    route,
    reason: '当前页面存在未发布草稿改动，导入会覆盖这些改动。'
  }
}

function importRoutePayload(payload, fallbackRouteInput, options = {}) {
  const fallbackRoute = ensureRouteLayout(fallbackRouteInput)

  const route =
    typeof payload?.route === 'string' && payload.route.trim()
      ? normalizeRoute(payload.route)
      : fallbackRoute

  const normalized = normalizeRoutePayload(route, payload)
  const conflict = detectRouteImportConflict(normalized.route, normalized.draft, options)
  if (conflict) {
    return {
      ok: false,
      code: IMPORT_CONFLICT_CODE,
      message: '检测到导入冲突，请确认后再覆盖导入。',
      routes: [conflict.route],
      conflicts: [conflict]
    }
  }

  setDraftLayout(normalized.route, normalized.draft, { persist: true })
  setPublishedLayout(normalized.route, normalized.published, { persist: true })
  setPublishedHistory(normalized.route, normalized.publishedHistory, { persist: true })
  ensureSelectedValid(normalized.route)

  return {
    ok: true,
    route: normalized.route
  }
}

function importAllRoutesPayload(routesMap, options = {}) {
  if (!routesMap || typeof routesMap !== 'object' || Array.isArray(routesMap)) {
    return {
      ok: false,
      message: 'Invalid routes payload.'
    }
  }

  const normalizedList = Object.entries(routesMap).map(([rawRoute, payload]) =>
    normalizeRoutePayload(rawRoute, payload)
  )
  const conflicts = normalizedList
    .map((normalized) => detectRouteImportConflict(normalized.route, normalized.draft, options))
    .filter(Boolean)

  if (conflicts.length) {
    return {
      ok: false,
      code: IMPORT_CONFLICT_CODE,
      message: `检测到 ${conflicts.length} 个页面存在未发布草稿冲突。`,
      routes: conflicts.map((item) => item.route),
      conflicts
    }
  }

  const updatedRoutes = []
  normalizedList.forEach((normalized) => {
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

function importAllRoutesAuditPayload(routesMap, options = {}) {
  if (!routesMap || typeof routesMap !== 'object' || Array.isArray(routesMap)) {
    return {
      ok: false,
      message: 'Invalid audit routes payload.'
    }
  }

  const persist = options.persist !== false
  const clearMissing = options.clearMissing === true
  const normalizedEntries = Object.entries(routesMap).map(([rawRoute, rawLogs]) => {
    const route = ensureRouteLayout(rawRoute)
    return [route, normalizeAuditLog(route, rawLogs)]
  })

  const nextLogsByRoute = {
    ...auditLogsByRoute.value
  }
  const importedRoutes = []

  normalizedEntries.forEach(([route, logs]) => {
    nextLogsByRoute[route] = logs
    importedRoutes.push(route)
  })

  if (clearMissing) {
    const importedSet = new Set(importedRoutes)
    collectStoredRoutes().forEach((rawRoute) => {
      const route = normalizeRoute(rawRoute)
      if (importedSet.has(route)) return
      nextLogsByRoute[route] = []
    })
  }

  auditLogsByRoute.value = nextLogsByRoute

  if (persist) {
    const routesToPersist = clearMissing ? collectStoredRoutes() : importedRoutes
    routesToPersist.forEach((rawRoute) => {
      const route = normalizeRoute(rawRoute)
      ensureRouteLayout(route)
      persistRouteAuditLog(route)
    })
  }

  return {
    ok: true,
    message: `Imported audit logs for ${importedRoutes.length} route(s).`,
    routes: importedRoutes
  }
}

function importEditorBundle(rawText, currentRouteInput = '/', options = {}) {
  let parsed
  try {
    parsed = JSON.parse(rawText)
  } catch (error) {
    return {
      ok: false,
      message: 'Invalid JSON file.'
    }
  }

  const coerced = coerceImportBundle(parsed, currentRouteInput)
  if (!coerced.ok) return coerced
  const bundle = coerced.bundle

  if (bundle.scope === 'route') {
    const result = importRoutePayload(bundle, currentRouteInput, options)
    if (!result.ok) return result

    const migratedHint = Number.isFinite(Number(bundle.migratedFrom))
      ? `（已迁移自 v${bundle.migratedFrom}）`
      : ''
    return {
      ok: true,
      message: `Imported route layout: ${result.route}${migratedHint}`,
      routes: [result.route]
    }
  }

  if (bundle.scope === 'all') {
    const result = importAllRoutesPayload(bundle.routes, options)
    if (!result.ok) return result
    const migratedHint = Number.isFinite(Number(bundle.migratedFrom))
      ? `（已迁移自 v${bundle.migratedFrom}）`
      : ''
    return {
      ...result,
      message: `${result.message}${migratedHint}`
    }
  }

  return {
    ok: false,
    message: 'Unsupported bundle scope.'
  }
}

function importEditorProjectBundle(rawText, currentRouteInput = '/', options = {}) {
  let parsed
  try {
    parsed = JSON.parse(rawText)
  } catch (error) {
    return {
      ok: false,
      message: 'Invalid JSON file.'
    }
  }

  if (parsed && typeof parsed === 'object' && parsed.schema === PROJECT_SCHEMA) {
    const projectVersion = normalizeProjectVersion(parsed.version)
    if (projectVersion > PROJECT_VERSION) {
      return {
        ok: false,
        code: UNSUPPORTED_BUNDLE_VERSION_CODE,
        message: `Unsupported project bundle version v${projectVersion}. Current max is v${PROJECT_VERSION}.`
      }
    }

    const layoutSource =
      parsed.layoutBundle && typeof parsed.layoutBundle === 'object'
        ? parsed.layoutBundle
        : parsed.layout && typeof parsed.layout === 'object'
          ? parsed.layout
          : null
    const auditSource =
      parsed.auditBundle && typeof parsed.auditBundle === 'object'
        ? parsed.auditBundle
        : parsed.audit && typeof parsed.audit === 'object'
          ? parsed.audit
          : null

    if (!layoutSource && !auditSource) {
      return {
        ok: false,
        message: 'Project bundle contains no importable layout or audit payload.'
      }
    }

    let layoutResult = null
    if (layoutSource) {
      layoutResult = importEditorBundle(JSON.stringify(layoutSource), currentRouteInput, options)
      if (!layoutResult.ok) return layoutResult
    }

    let auditResult = null
    if (auditSource) {
      const coercedAudit = coerceAuditImportBundle(auditSource)
      if (!coercedAudit.ok) return coercedAudit
      auditResult = importAllRoutesAuditPayload(coercedAudit.bundle.routes, options)
      if (!auditResult.ok) return auditResult
    }

    const layoutRoutes = Array.isArray(layoutResult?.routes) ? layoutResult.routes : []
    const auditRoutes = Array.isArray(auditResult?.routes) ? auditResult.routes : []
    const mergedRoutes = [...new Set([...layoutRoutes, ...auditRoutes])]
    const detailText = []
    if (layoutResult) {
      detailText.push(`layout ${layoutRoutes.length} route(s)`)
    }
    if (auditResult) {
      detailText.push(`audit ${auditRoutes.length} route(s)`)
    }

    return {
      ok: true,
      message: `Imported project bundle (${detailText.join(', ')}).`,
      routes: mergedRoutes,
      layoutResult,
      auditResult
    }
  }

  if (parsed && typeof parsed === 'object' && parsed.schema === AUDIT_SCHEMA) {
    const coercedAudit = coerceAuditImportBundle(parsed)
    if (!coercedAudit.ok) return coercedAudit
    return importAllRoutesAuditPayload(coercedAudit.bundle.routes, options)
  }

  return importEditorBundle(rawText, currentRouteInput, options)
}

export {
  isEditorMode,
  isEditorAccessUnlocked,
  editorGuardState,
  draftLayoutsByRoute,
  publishedLayoutsByRoute,
  publishedHistoryByRoute,
  auditLogsByRoute,
  selectedByRoute,
  initEditorState,
  normalizeRoute,
  ensureRouteLayout,
  getAllEditorRoutes,
  getEditorGuardStatus,
  canUseEditor,
  unlockEditorAccess,
  lockEditorAccess,
  setEditorMode,
  toggleEditorMode,
  setSelectedRouteBlock,
  getRouteBlocks,
  getPublishedRouteBlocks,
  getRouteDraftLayout,
  replaceRouteDraftLayout,
  getRoutePublishedHistory,
  getOrderedRouteBlocks,
  getSelectedRouteBlockId,
  getSelectedRouteBlock,
  routeHasUnpublishedChanges,
  getRouteEditStatus,
  validateDraftRoute,
  duplicateRouteBlock,
  moveRouteBlockLayer,
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
  getRouteAuditLog,
  appendRouteAuditLog,
  clearRouteAuditLog,
  getRouteExportBundle,
  getAllRoutesExportBundle,
  getAllRoutesAuditBundle,
  getEditorProjectBundle,
  importEditorBundle,
  importAllRoutesAuditPayload,
  importEditorProjectBundle
}
