<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import {
  addRouteTextBlock,
  appendRouteAuditLog,
  clearRouteAuditLog,
  duplicateRouteBlock,
  ensureRouteLayout,
  getAllRoutesAuditBundle,
  getAllEditorRoutes,
  getOrderedRouteBlocks,
  getRouteAuditLog,
  getRouteDraftLayout,
  getPublishedRouteBlocks,
  getEditorProjectBundle,
  getRoutePublishedHistory,
  getRouteBlocks,
  getRouteEditStatus,
  getRouteExportBundle,
  getAllRoutesExportBundle,
  getSelectedRouteBlock,
  getSelectedRouteBlockId,
  importEditorProjectBundle,
  initEditorState,
  isEditorMode,
  moveRouteBlockLayer,
  patchRouteBlock,
  persistDraftRouteLayout,
  publishDraftRoute,
  removeRouteBlock,
  replaceRouteDraftLayout,
  resetRouteLayout,
  rollbackPublishedRoute,
  revertRouteDraft,
  saveDraftRoute,
  setSelectedRouteBlock,
  validateDraftRoute
} from './editorState'

const route = useRoute()
const { page } = useData()
const currentRoute = ref('/')
const interactionState = ref(null)
const guideLines = ref({ vertical: [], horizontal: [] })
const importInputRef = ref(null)
const ioMessage = ref('')
const ioMessageType = ref('info')
const validationReport = ref(null)
const routeEditHistory = ref({})
const panelCollapsed = ref(false)
const performanceMode = ref(false)
const canvasMetrics = ref({
  width: 1200,
  height: 900
})

let ioTimer = null
let interactionRafId = 0
let pendingPointer = null

const showCanvas = computed(() => isEditorMode.value)
const isInteracting = computed(() => Boolean(interactionState.value))
const orderedBlocks = computed(() => getOrderedRouteBlocks(currentRoute.value))
const layerBlocks = computed(() => [...orderedBlocks.value].reverse())
const selectedBlockId = computed(() => getSelectedRouteBlockId(currentRoute.value))
const selectedBlock = computed(() => getSelectedRouteBlock(currentRoute.value))
const routeStatus = computed(() => getRouteEditStatus(currentRoute.value))
const routeHistory = computed(() => getRoutePublishedHistory(currentRoute.value))
const latestHistory = computed(() => routeHistory.value[0] || null)
const historyStats = computed(() => {
  const bucket = ensureRouteHistoryBucket(currentRoute.value)
  return {
    undo: bucket.undo.length,
    redo: bucket.redo.length
  }
})
const blockCountSummary = computed(
  () => `${routeStatus.value.blockCount}/${routeStatus.value.publishedBlockCount}`
)
const canvasStyle = computed(() => ({
  height: `${canvasMetrics.value.height}px`
}))
const allEditedRoutes = computed(() => getAllEditorRoutes())
const routeAuditLogs = computed(() => getRouteAuditLog(currentRoute.value))
const auditPreviewLogs = computed(() => routeAuditLogs.value.slice(0, 8))
const publishDiffPreview = computed(() => getPublishDiffPreview(currentRoute.value))

const SNAP_GRID = 12
const SNAP_THRESHOLD = 8
const MAX_HISTORY_STEPS = 50
const CANVAS_LIMIT = 5000
const BLOCK_MIN_WIDTH = 180
const BLOCK_MAX_WIDTH = 1200
const BLOCK_MIN_HEIGHT = 90
const BLOCK_MAX_HEIGHT = 900

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function normalizeColorHex(value, fallback = '#ffffff') {
  if (typeof value !== 'string') return fallback
  const text = value.trim()
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(text) ? text : fallback
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value))
}

function getComparableBlockSnapshot(block) {
  if (!block || typeof block !== 'object') return null
  return {
    id: String(block.id || ''),
    kind: String(block.kind || ''),
    x: Number(block.x || 0),
    y: Number(block.y || 0),
    w: Number(block.w || 0),
    h: Number(block.h || 0),
    z: Number(block.z || 0),
    opacity: Number(block.opacity || 0),
    radius: Number(block.radius || 0),
    blur: Number(block.blur || 0),
    bg: String(block.bg || ''),
    color: String(block.color || ''),
    kicker: String(block.kicker || ''),
    title: String(block.title || ''),
    body: String(block.body || '')
  }
}

function getPublishDiffPreview(routeInput) {
  const routePath = ensureRouteLayout(routeInput)
  const draftBlocks = getRouteBlocks(routePath)
  const publishedBlocks = getPublishedRouteBlocks(routePath)
  const draftMap = new Map(draftBlocks.map((item) => [item.id, getComparableBlockSnapshot(item)]))
  const publishedMap = new Map(
    publishedBlocks.map((item) => [item.id, getComparableBlockSnapshot(item)])
  )

  let added = 0
  let removed = 0
  let changed = 0

  draftMap.forEach((draftBlock, id) => {
    if (!publishedMap.has(id)) {
      added += 1
      return
    }
    const publishedBlock = publishedMap.get(id)
    if (JSON.stringify(draftBlock) !== JSON.stringify(publishedBlock)) {
      changed += 1
    }
  })

  publishedMap.forEach((_, id) => {
    if (!draftMap.has(id)) {
      removed += 1
    }
  })

  return {
    route: routePath,
    added,
    removed,
    changed,
    totalDraft: draftBlocks.length,
    totalPublished: publishedBlocks.length
  }
}

function ensureRouteHistoryBucket(routeInput) {
  const routePath = ensureRouteLayout(routeInput)
  const existing = routeEditHistory.value[routePath]
  if (existing) return existing

  const next = {
    undo: [],
    redo: []
  }

  routeEditHistory.value = {
    ...routeEditHistory.value,
    [routePath]: next
  }
  return next
}

function createLayoutSnapshot(routeInput, reason = '') {
  const routePath = ensureRouteLayout(routeInput)
  const layout = getRouteDraftLayout(routePath)
  const serialized = JSON.stringify(layout)
  return {
    route: routePath,
    reason,
    at: Date.now(),
    serialized,
    layout
  }
}

function pushUndoSnapshot(routeInput, reason = '') {
  const routePath = ensureRouteLayout(routeInput)
  const bucket = ensureRouteHistoryBucket(routePath)
  const snapshot = createLayoutSnapshot(routePath, reason)
  const last = bucket.undo[bucket.undo.length - 1]
  if (last?.serialized === snapshot.serialized) {
    return
  }
  bucket.undo.push(snapshot)
  if (bucket.undo.length > MAX_HISTORY_STEPS) {
    bucket.undo.shift()
  }
  bucket.redo = []
}

function applyHistorySnapshot(snapshot) {
  if (!snapshot) return false
  const routePath = ensureRouteLayout(snapshot.route || currentRoute.value)
  replaceRouteDraftLayout(routePath, cloneJson(snapshot.layout), { persist: true })
  return true
}

function handleUndo() {
  const routePath = ensureRouteLayout(currentRoute.value)
  const bucket = ensureRouteHistoryBucket(routePath)
  if (!bucket.undo.length) {
    setMessage('error', '操作失败。')
    return
  }

  const currentSnapshot = createLayoutSnapshot(routePath, 'current')
  const targetSnapshot = bucket.undo.pop()
  bucket.redo.push(currentSnapshot)
  if (bucket.redo.length > MAX_HISTORY_STEPS) {
    bucket.redo.shift()
  }

  applyHistorySnapshot(targetSnapshot)
  appendAudit('undo', { summary: targetSnapshot?.reason || 'undo' })
}

function handleRedo() {
  const routePath = ensureRouteLayout(currentRoute.value)
  const bucket = ensureRouteHistoryBucket(routePath)
  if (!bucket.redo.length) {
    setMessage('error', '操作失败。')
    return
  }

  const currentSnapshot = createLayoutSnapshot(routePath, 'current')
  const targetSnapshot = bucket.redo.pop()
  bucket.undo.push(currentSnapshot)
  if (bucket.undo.length > MAX_HISTORY_STEPS) {
    bucket.undo.shift()
  }

  applyHistorySnapshot(targetSnapshot)
  appendAudit('redo', { summary: targetSnapshot?.reason || 'redo' })
}

function getCanvasBounds() {
  return canvasMetrics.value
}

function getDocumentHeight() {
  if (typeof window === 'undefined') return 900
  const body = document.body
  const html = document.documentElement
  return Math.max(
    body?.scrollHeight || 0,
    body?.offsetHeight || 0,
    html?.clientHeight || 0,
    html?.scrollHeight || 0,
    html?.offsetHeight || 0
  )
}

function refreshCanvasMetrics() {
  if (typeof window === 'undefined') return

  const routeBlocks = getRouteBlocks(currentRoute.value)
  const maxBlockBottom = routeBlocks.reduce((max, block) => Math.max(max, block.y + block.h), 0)
  const docHeight = getDocumentHeight()
  const width = clamp(Math.round(window.innerWidth), 320, CANVAS_LIMIT)
  const height = clamp(
    Math.max(docHeight - 72, maxBlockBottom + 280, 760),
    760,
    CANVAS_LIMIT
  )

  canvasMetrics.value = { width, height }
}

function createPageTemplateLayout() {
  const now = Date.now()
  const pageTitle = String(page.value?.title || '').trim()
  const routeLabel = currentRoute.value === '/' ? '首页' : currentRoute.value
  const docTitle =
    pageTitle ||
    document.querySelector('.VPDoc h1, .VPHero .name, .VPHero .text')?.textContent?.trim() ||
    routeLabel
  const description =
    String(page.value?.description || '').trim() ||
    document.querySelector('.VPDoc p')?.textContent?.trim() ||
    '从这里开始编辑当前页面，支持拖拽、缩放、发布和回滚。'

  const primaryBlock = {
    id: `route-hero-${now}`,
    kind: 'text',
    x: 88,
    y: 120,
    w: 560,
    h: 220,
    z: 20,
    opacity: 0.94,
    radius: 18,
    blur: 12,
    bg: 'rgba(16, 28, 40, 0.34)',
    color: '#f3f7fc',
    kicker: 'Page Intro',
    title: docTitle,
    body: description
  }

  const secondaryBlock = {
    id: `route-meta-${now}`,
    kind: 'text',
    x: 88,
    y: 368,
    w: 390,
    h: 140,
    z: 21,
    opacity: 0.9,
    radius: 16,
    blur: 10,
    bg: 'rgba(12, 20, 30, 0.28)',
    color: '#e6eff8',
    kicker: 'Route',
    title: routeLabel,
    body: '可在图层面板中管理模块顺序，发布前先做校验。'
  }

  return {
    version: 2,
    blocks: [primaryBlock, secondaryBlock]
  }
}

function resolvePointSnap(value, targets) {
  let bestValue = value
  let bestDiff = SNAP_THRESHOLD + 1
  let hasMatch = false

  targets.forEach((target) => {
    const diff = Math.abs(target - value)
    if (diff <= SNAP_THRESHOLD && diff < bestDiff) {
      bestDiff = diff
      bestValue = target
      hasMatch = true
    }
  })

  return {
    value: hasMatch ? bestValue : value,
    guide: hasMatch ? bestValue : null
  }
}

function resolveAxisSnap(start, span, targets) {
  const anchors = [
    { offset: 0, map: (target) => target },
    { offset: span / 2, map: (target) => target - span / 2 },
    { offset: span, map: (target) => target - span }
  ]

  let best = null
  anchors.forEach((anchor) => {
    targets.forEach((target) => {
      const anchorPos = start + anchor.offset
      const diff = Math.abs(target - anchorPos)
      if (diff > SNAP_THRESHOLD) return
      if (!best || diff < best.diff) {
        best = {
          diff,
          start: anchor.map(target),
          guide: target
        }
      }
    })
  })

  if (!best) {
    return {
      value: start,
      guide: null
    }
  }

  return {
    value: best.start,
    guide: best.guide
  }
}

function collectSnapTargets(blockId) {
  const blocks = getRouteBlocks(currentRoute.value).filter((item) => item.id !== blockId)
  const { width: canvasWidth, height: canvasHeight } = getCanvasBounds()
  const vertical = [0, canvasWidth / 2, canvasWidth]
  const horizontal = [0, canvasHeight / 2, canvasHeight]

  blocks.forEach((block) => {
    vertical.push(block.x, block.x + block.w / 2, block.x + block.w)
    horizontal.push(block.y, block.y + block.h / 2, block.y + block.h)
  })

  return {
    vertical,
    horizontal
  }
}

function computeMovePatch(state, clientX, clientY) {
  const block = getRouteBlocks(currentRoute.value).find((item) => item.id === state.id)
  if (!block) return null

  const dx = clientX - state.startX
  const dy = clientY - state.startY

  let nextX = clamp(Math.round((state.initialX + dx) / SNAP_GRID) * SNAP_GRID, 0, CANVAS_LIMIT)
  let nextY = clamp(Math.round((state.initialY + dy) / SNAP_GRID) * SNAP_GRID, 0, CANVAS_LIMIT)
  const guides = { vertical: [], horizontal: [] }
  const targets = collectSnapTargets(state.id)

  const xSnap = resolveAxisSnap(nextX, block.w, targets.vertical)
  if (xSnap.guide !== null) {
    nextX = clamp(Math.round(xSnap.value), 0, CANVAS_LIMIT)
    guides.vertical.push(xSnap.guide)
  }

  const ySnap = resolveAxisSnap(nextY, block.h, targets.horizontal)
  if (ySnap.guide !== null) {
    nextY = clamp(Math.round(ySnap.value), 0, CANVAS_LIMIT)
    guides.horizontal.push(ySnap.guide)
  }

  return {
    patch: { x: nextX, y: nextY },
    guides
  }
}

function computeResizePatch(state, clientX, clientY) {
  const block = getRouteBlocks(currentRoute.value).find((item) => item.id === state.id)
  if (!block) return null

  const dx = clientX - state.startX
  const dy = clientY - state.startY
  let nextW = state.initialW
  let nextH = state.initialH

  if (state.handle.includes('e')) {
    nextW = state.initialW + dx
  }
  if (state.handle.includes('s')) {
    nextH = state.initialH + dy
  }

  nextW = clamp(Math.round(nextW / SNAP_GRID) * SNAP_GRID, BLOCK_MIN_WIDTH, BLOCK_MAX_WIDTH)
  nextH = clamp(Math.round(nextH / SNAP_GRID) * SNAP_GRID, BLOCK_MIN_HEIGHT, BLOCK_MAX_HEIGHT)

  const guides = { vertical: [], horizontal: [] }
  const targets = collectSnapTargets(state.id)

  if (state.handle.includes('e')) {
    const snapped = resolvePointSnap(block.x + nextW, targets.vertical)
    if (snapped.guide !== null) {
      nextW = clamp(Math.round(snapped.value - block.x), BLOCK_MIN_WIDTH, BLOCK_MAX_WIDTH)
      guides.vertical.push(snapped.guide)
    }
  }

  if (state.handle.includes('s')) {
    const snapped = resolvePointSnap(block.y + nextH, targets.horizontal)
    if (snapped.guide !== null) {
      nextH = clamp(Math.round(snapped.value - block.y), BLOCK_MIN_HEIGHT, BLOCK_MAX_HEIGHT)
      guides.horizontal.push(snapped.guide)
    }
  }

  return {
    patch: { w: nextW, h: nextH },
    guides
  }
}

function setMessage(type, text, duration = 2800) {
  ioMessageType.value = type
  ioMessage.value = text
  if (ioTimer) {
    window.clearTimeout(ioTimer)
  }
  ioTimer = window.setTimeout(() => {
    ioMessage.value = ''
    ioTimer = null
  }, duration)
}

function clearMessage() {
  if (ioTimer) {
    window.clearTimeout(ioTimer)
    ioTimer = null
  }
  ioMessage.value = ''
}

async function syncRoute(nextPath) {
  currentRoute.value = ensureRouteLayout(nextPath)
  validationReport.value = null
  clearMessage()
  await nextTick()
  refreshCanvasMetrics()
}

function formatSnapshotTime(value) {
  if (!value) return '鏈煡鏃堕棿'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)

  return new Intl.DateTimeFormat('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

function formatAuditTime(value) {
  if (!value) return '--:--'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '--:--'
  return new Intl.DateTimeFormat('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date)
}

function appendAudit(action, detail = {}) {
  appendRouteAuditLog(currentRoute.value, action, detail)
}

const AUDIT_ACTION_LABELS = {
  add_block: '新增模块',
  remove_block: '删除模块',
  duplicate_block: '复制模块',
  move_block: '拖拽模块',
  resize_block: '缩放模块',
  nudge_block: '微调位置',
  layer_move: '调整图层',
  bring_front: '置顶模块',
  save_draft: '保存草稿',
  publish: '发布页面',
  validate: '校验草稿',
  revert_draft: '回退草稿',
  rollback_published: '回滚发布',
  export_route: '导出当前页',
  export_all: '导出全站布局',
  export_audit: '导出操作记录',
  import_bundle: '导入布局',
  generate_template: '生成页面模板',
  reset_layout: '重置布局',
  undo: '撤销',
  redo: '重做'
}

function getAuditActionLabel(entry) {
  const action = String(entry?.action || '').trim()
  return AUDIT_ACTION_LABELS[action] || action || '编辑操作'
}

function getAuditDetailText(entry) {
  const detail = entry?.detail && typeof entry.detail === 'object' ? entry.detail : null
  if (!detail) return ''
  const blockId = typeof detail.blockId === 'string' && detail.blockId ? ` #${detail.blockId}` : ''

  if (Number.isFinite(detail.dx) || Number.isFinite(detail.dy)) {
    const dx = Number.isFinite(detail.dx) ? detail.dx : 0
    const dy = Number.isFinite(detail.dy) ? detail.dy : 0
    return `位移 ${dx}, ${dy}${blockId}`
  }
  if (Number.isFinite(detail.dw) || Number.isFinite(detail.dh)) {
    const dw = Number.isFinite(detail.dw) ? detail.dw : 0
    const dh = Number.isFinite(detail.dh) ? detail.dh : 0
    return `尺寸变化 ${dw}, ${dh}${blockId}`
  }
  if (typeof detail.message === 'string' && detail.message.trim()) {
    return detail.message.trim()
  }
  if (typeof detail.route === 'string' && detail.route) {
    return detail.route
  }
  if (typeof detail.summary === 'string' && detail.summary.trim()) {
    return detail.summary.trim()
  }
  return blockId ? `目标${blockId}` : ''
}

function blockStyle(block) {
  return {
    transform: `translate3d(${block.x}px, ${block.y}px, 0)`,
    width: `${block.w}px`,
    minHeight: `${block.h}px`,
    zIndex: block.z,
    color: block.color,
    background: block.bg,
    opacity: block.opacity,
    borderRadius: `${block.radius}px`,
    backdropFilter: block.blur > 0 ? `blur(${block.blur}px) saturate(135%)` : 'none'
  }
}

function applyInteractionPosition(clientX, clientY) {
  const state = interactionState.value
  if (!state) return

  let result = null
  if (state.mode === 'move') {
    result = computeMovePatch(state, clientX, clientY)
  } else if (state.mode === 'resize') {
    result = computeResizePatch(state, clientX, clientY)
  }
  if (!result) return

  patchRouteBlock(currentRoute.value, state.id, result.patch, { persist: false })
  guideLines.value = {
    vertical: result.guides.vertical,
    horizontal: result.guides.horizontal
  }
}

function flushInteractionFrame() {
  interactionRafId = 0
  if (!interactionState.value || !pendingPointer) return
  applyInteractionPosition(pendingPointer.x, pendingPointer.y)
  pendingPointer = null
}

function beginInteraction(mode, event, block, extra = {}) {
  pushUndoSnapshot(currentRoute.value, mode === 'resize' ? '缂╂斁妯″潡' : '鎷栨嫿妯″潡')
  setSelectedRouteBlock(currentRoute.value, block.id)

  interactionState.value = {
    mode,
    id: block.id,
    pointerId: event.pointerId,
    startedAt: Date.now(),
    startX: event.clientX,
    startY: event.clientY,
    initialX: block.x,
    initialY: block.y,
    initialW: block.w,
    initialH: block.h,
    ...extra
  }

  window.addEventListener('pointermove', onInteracting)
  window.addEventListener('pointerup', stopInteraction)
  window.addEventListener('pointercancel', stopInteraction)
  event.preventDefault()
}

function onBlockPointerDown(event, block) {
  if (!isEditorMode.value) return
  if (event.pointerType === 'mouse' && event.button !== 0) return
  beginInteraction('move', event, block)
}

function onResizeHandlePointerDown(event, block, handle) {
  if (!isEditorMode.value) return
  if (event.pointerType === 'mouse' && event.button !== 0) return
  beginInteraction('resize', event, block, { handle })
}

function onInteracting(event) {
  if (!interactionState.value) return
  pendingPointer = { x: event.clientX, y: event.clientY }
  if (interactionRafId) return
  interactionRafId = window.requestAnimationFrame(flushInteractionFrame)
}

function stopInteraction(event) {
  const state = interactionState.value
  if (!state) return
  if (event && event.pointerId && event.pointerId !== state.pointerId) return

  if (interactionRafId) {
    window.cancelAnimationFrame(interactionRafId)
    interactionRafId = 0
  }
  if (pendingPointer) {
    applyInteractionPosition(pendingPointer.x, pendingPointer.y)
    pendingPointer = null
  }

  const currentBlock = getRouteBlocks(currentRoute.value).find((item) => item.id === state.id)
  if (currentBlock) {
    if (state.mode === 'move') {
      const dx = Math.round(currentBlock.x - state.initialX)
      const dy = Math.round(currentBlock.y - state.initialY)
      if (dx !== 0 || dy !== 0) {
        appendAudit('move_block', {
          blockId: state.id,
          dx,
          dy,
          spentMs: Math.max(0, Date.now() - Number(state.startedAt || Date.now()))
        })
      }
    } else if (state.mode === 'resize') {
      const dw = Math.round(currentBlock.w - state.initialW)
      const dh = Math.round(currentBlock.h - state.initialH)
      if (dw !== 0 || dh !== 0) {
        appendAudit('resize_block', {
          blockId: state.id,
          dw,
          dh,
          handle: state.handle || '',
          spentMs: Math.max(0, Date.now() - Number(state.startedAt || Date.now()))
        })
      }
    }
  }

  interactionState.value = null
  guideLines.value = { vertical: [], horizontal: [] }
  window.removeEventListener('pointermove', onInteracting)
  window.removeEventListener('pointerup', stopInteraction)
  window.removeEventListener('pointercancel', stopInteraction)
  persistDraftRouteLayout(currentRoute.value)
}

function selectBlock(blockId) {
  setSelectedRouteBlock(currentRoute.value, blockId)
}

function bringToFront(blockId) {
  pushUndoSnapshot(currentRoute.value, '缃《妯″潡')
  const currentMax = Math.max(...getRouteBlocks(currentRoute.value).map((item) => item.z), 0)
  patchRouteBlock(currentRoute.value, blockId, { z: currentMax + 1 })
  appendAudit('bring_front', { blockId, z: currentMax + 1 })
}

function removeCurrentBlock() {
  if (!selectedBlock.value) return
  const targetId = selectedBlock.value.id
  pushUndoSnapshot(currentRoute.value, '鍒犻櫎妯″潡')
  removeRouteBlock(currentRoute.value, targetId)
  appendAudit('remove_block', { blockId: targetId })
}

function updateSelectedField(field, value) {
  if (!selectedBlock.value) return
  patchRouteBlock(currentRoute.value, selectedBlock.value.id, { [field]: value })
}

function updateSelectedNumberField(field, value, min, max) {
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return
  updateSelectedField(field, clamp(parsed, min, max))
}

function updateTextColor(event) {
  const value = normalizeColorHex(event.target.value, '#ffffff')
  updateSelectedField('color', value)
}

function handleAddBlock() {
  pushUndoSnapshot(currentRoute.value, '鏂板妯″潡')
  const beforeIds = getRouteBlocks(currentRoute.value).map((item) => item.id)
  addRouteTextBlock(currentRoute.value)
  const nextBlock = getRouteBlocks(currentRoute.value).find((item) => !beforeIds.includes(item.id))
  appendAudit('add_block', { blockId: nextBlock?.id || '' })
}

function handleResetLayout() {
  pushUndoSnapshot(currentRoute.value, '重置布局')
  resetRouteLayout(currentRoute.value)
  appendAudit('reset_layout', { route: currentRoute.value })
}

function handleGenerateRouteTemplate() {
  pushUndoSnapshot(currentRoute.value, '生成页面模板')
  const nextLayout = createPageTemplateLayout()
  replaceRouteDraftLayout(currentRoute.value, nextLayout, { persist: true })
  setSelectedRouteBlock(currentRoute.value, nextLayout.blocks[0]?.id || '')
  refreshCanvasMetrics()
  appendAudit('generate_template', {
    route: currentRoute.value,
    blockCount: nextLayout.blocks.length
  })
  setMessage('success', '操作成功。')
}

function handleDuplicateSelected() {
  if (!selectedBlock.value) return
  pushUndoSnapshot(currentRoute.value, '澶嶅埗妯″潡')
  const result = duplicateRouteBlock(currentRoute.value, selectedBlock.value.id)
  if (result.ok) {
    appendAudit('duplicate_block', {
      blockId: result.id || selectedBlock.value.id
    })
  }
  if (!result.ok) {
    setMessage('error', result.message || '操作失败。')
    return
  }
  setMessage('success', '操作成功。')
}

function handleMoveLayer(direction) {
  if (!selectedBlock.value) return
  pushUndoSnapshot(currentRoute.value, direction > 0 ? '鍥惧眰涓婄Щ' : '鍥惧眰涓嬬Щ')
  const result = moveRouteBlockLayer(currentRoute.value, selectedBlock.value.id, direction)
  if (result.ok) {
    appendAudit('layer_move', {
      blockId: selectedBlock.value.id,
      direction: direction > 0 ? 'up' : 'down'
    })
  }
  if (!result.ok) {
    setMessage('error', result.message || '操作失败。')
  }
}

function navigateToEditedRoute(path) {
  const target = ensureRouteLayout(path)
  if (target === currentRoute.value) return
  window.location.assign(target)
}

function nudgeSelectedBlock(dx, dy) {
  if (!selectedBlock.value) return
  const nextX = clamp(Math.round(selectedBlock.value.x + dx), 0, CANVAS_LIMIT)
  const nextY = clamp(Math.round(selectedBlock.value.y + dy), 0, CANVAS_LIMIT)
  const deltaX = nextX - selectedBlock.value.x
  const deltaY = nextY - selectedBlock.value.y
  pushUndoSnapshot(currentRoute.value, '寰皟浣嶇疆')
  patchRouteBlock(currentRoute.value, selectedBlock.value.id, {
    x: nextX,
    y: nextY
  })
  if (deltaX !== 0 || deltaY !== 0) {
    appendAudit('nudge_block', {
      blockId: selectedBlock.value.id,
      dx: deltaX,
      dy: deltaY
    })
  }
}

function isTextEditableTarget(target) {
  if (!target || !(target instanceof HTMLElement)) return false
  if (target.isContentEditable) return true
  const tag = target.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT'
}

function handleBeforeUnload(event) {
  if (!isEditorMode.value) return
  if (!routeStatus.value?.dirty) return
  event.preventDefault()
  event.returnValue = ''
}

function handleEditorHotkeys(event) {
  if (!isEditorMode.value) return
  if (isTextEditableTarget(event.target)) return

  const key = event.key.toLowerCase()
  const withCommand = event.ctrlKey || event.metaKey

  if (withCommand && key === 'z') {
    event.preventDefault()
    if (event.shiftKey) {
      handleRedo()
    } else {
      handleUndo()
    }
    return
  }

  if (withCommand && key === 'y') {
    event.preventDefault()
    handleRedo()
    return
  }

  if (withCommand && key === 'd') {
    event.preventDefault()
    handleDuplicateSelected()
    return
  }

  if (event.altKey && event.key === 'ArrowUp') {
    event.preventDefault()
    handleMoveLayer(1)
    return
  }

  if (event.altKey && event.key === 'ArrowDown') {
    event.preventDefault()
    handleMoveLayer(-1)
    return
  }

  if (selectedBlock.value && (event.key === 'Delete' || event.key === 'Backspace')) {
    event.preventDefault()
    removeCurrentBlock()
    return
  }

  if (selectedBlock.value && event.key.startsWith('Arrow')) {
    event.preventDefault()
    const step = event.shiftKey ? 10 : 1
    if (event.key === 'ArrowLeft') nudgeSelectedBlock(-step, 0)
    if (event.key === 'ArrowRight') nudgeSelectedBlock(step, 0)
    if (event.key === 'ArrowUp') nudgeSelectedBlock(0, -step)
    if (event.key === 'ArrowDown') nudgeSelectedBlock(0, step)
  }
}

function toRouteSlug(path) {
  if (path === '/') return 'root'
  const slug = path.replace(/[^\p{L}\p{N}_-]+/gu, '_').replace(/^_+|_+$/g, '')
  return slug || 'route'
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function handleSaveDraft() {
  const result = saveDraftRoute(currentRoute.value)
  if (result.ok) {
    appendAudit('save_draft', { route: currentRoute.value })
    setMessage('success', '操作成功。')
  }
}

function handlePublishWithDiffPreview() {
  const diff = publishDiffPreview.value
  const previewText = [
    `页面：${diff.route}`,
    `新增模块：${diff.added}`,
    `删除模块：${diff.removed}`,
    `修改模块：${diff.changed}`,
    '',
    '确认发布当前草稿吗？'
  ].join('\n')

  const confirmed = window.confirm(previewText)
  if (!confirmed) return

  handlePublish()
}
function handlePublish() {
  const result = publishDraftRoute(currentRoute.value)
  validationReport.value = result.validation || null
  if (result.ok) {
    appendAudit('publish', {
      route: currentRoute.value,
      warnings: result.validation?.warnings?.length || 0,
      added: publishDiffPreview.value.added,
      removed: publishDiffPreview.value.removed,
      changed: publishDiffPreview.value.changed
    })
    setMessage('success', '发布成功。')
  } else {
    setMessage('error', result.message || '发布失败。', 3800)
  }
}

function handleValidatePublish() {
  const report = validateDraftRoute(currentRoute.value)
  validationReport.value = report
  appendAudit('validate', {
    route: currentRoute.value,
    ok: report.ok,
    errors: report.errors.length,
    warnings: report.warnings.length
  })

  if (!report.ok) {
    setMessage('error', `校验失败：${report.errors.length} 个错误。`, 4200)
    return
  }

  if (report.warnings.length) {
    setMessage('success', `校验通过，另有 ${report.warnings.length} 条提醒。`, 3600)
  } else {
    setMessage('success', '校验通过，可安全发布。')
  }
}

function handleRevertDraft() {
  if (routeStatus.value.dirty) {
    const confirmed = window.confirm('将放弃当前草稿改动，并恢复为已发布版本，是否继续？')
    if (!confirmed) return
  }
  const result = revertRouteDraft(currentRoute.value)
  if (result.ok) {
    appendAudit('revert_draft', { route: currentRoute.value })
    setMessage('success', '草稿已恢复到已发布版本。')
  }
}

function handleRollbackPublished() {
  if (!routeHistory.value.length) {
    setMessage('error', '暂无可回滚快照。')
    return
  }

  const latest = latestHistory.value
  const targetHint = latest ? `（目标：${formatSnapshotTime(latest.at)}）` : ''
  const confirmed = window.confirm(`将回滚已发布版本并同步覆盖草稿 ${targetHint}，是否继续？`)
  if (!confirmed) return

  const result = rollbackPublishedRoute(currentRoute.value)
  if (!result.ok) {
    setMessage('error', result.message || '回滚失败。', 3600)
    return
  }

  validationReport.value = null
  appendAudit('rollback_published', {
    route: currentRoute.value,
    snapshotId: result.snapshot?.id || ''
  })
  const snapshotTime = formatSnapshotTime(result.snapshot?.at)
  setMessage('success', `已回滚到快照：${snapshotTime}。`)
}

function handleExportCurrent() {
  const bundle = getRouteExportBundle(currentRoute.value)
  const filename = `editor-layout-${toRouteSlug(currentRoute.value)}-${Date.now()}.json`
  downloadJson(filename, bundle)
  appendAudit('export_route', { route: currentRoute.value })
  setMessage('success', '操作成功。')
}

function handleExportAll() {
  const bundle = getAllRoutesExportBundle()
  const filename = `editor-layout-all-routes-${Date.now()}.json`
  downloadJson(filename, bundle)
  appendAudit('export_all', {
    routeCount: Object.keys(bundle.routes || {}).length
  })
  setMessage('success', '操作成功。')
}

function handleExportProject() {
  const bundle = getEditorProjectBundle()
  const filename = `editor-project-${Date.now()}.json`
  downloadJson(filename, bundle)
  appendAudit('export_all', {
    routeCount: Object.keys(bundle.layoutBundle?.routes || {}).length,
    auditRouteCount: Object.keys(bundle.auditBundle?.routes || {}).length
  })
  setMessage('success', '编辑工程已导出（含布局与操作记录）。')
}
function handleExportAudit() {
  const bundle = getAllRoutesAuditBundle()
  const filename = `editor-audit-all-routes-${Date.now()}.json`
  downloadJson(filename, bundle)
  appendAudit('export_audit', {
    routeCount: Object.keys(bundle.routes || {}).length
  })
  setMessage('success', '操作成功。')
}

function handleClearAudit() {
  if (!routeAuditLogs.value.length) {
    setMessage('error', '操作失败。')
    return
  }

  const confirmed = window.confirm(
    `将清空当前页面 ${routeAuditLogs.value.length} 条操作记录，此操作不可恢复，是否继续？`
  )
  if (!confirmed) return
  clearRouteAuditLog(currentRoute.value)
  setMessage('success', '操作成功。')
}

function togglePanelCollapsed() {
  panelCollapsed.value = !panelCollapsed.value
}

function togglePerformanceMode() {
  performanceMode.value = !performanceMode.value
  setMessage('success', performanceMode.value ? '已开启性能优先模式。' : '已恢复视觉优先模式。', 1800)
}
function triggerImport() {
  importInputRef.value?.click()
}

async function handleImportFile(event) {
  const file = event.target?.files?.[0]
  if (!file) return

  try {
    const text = await file.text()
    const result = importEditorProjectBundle(text, currentRoute.value)
    if (result.ok) {
      validationReport.value = null
      appendAudit('import_bundle', {
        route: currentRoute.value,
        summary: result.message || 'import ok'
      })
      setMessage('success', result.message || '导入完成。')
      return
    }

    if (result.code === 'IMPORT_CONFLICT') {
      const routes = Array.isArray(result.routes) ? result.routes : []
      const routeText = routes.length ? routes.join('、') : currentRoute.value
      const confirmed = window.confirm(
        `检测到未发布草稿冲突（${routeText}）。\n继续将会覆盖这些草稿，是否强制导入？`
      )
      if (!confirmed) {
        setMessage('error', '已取消导入。')
        return
      }

      const forced = importEditorProjectBundle(text, currentRoute.value, { force: true })
      if (forced.ok) {
        validationReport.value = null
        appendAudit('import_bundle', {
          route: currentRoute.value,
          summary: forced.message || 'force import ok'
        })
        setMessage('success', forced.message || '已强制导入完成。')
      } else {
        setMessage('error', forced.message || '强制导入失败。', 3600)
      }
      return
    }

    setMessage('error', result.message || '导入失败。', 3600)
  } catch (error) {
    setMessage('error', '读取导入文件失败。', 3600)
  } finally {
    event.target.value = ''
  }
}
onMounted(() => {
  initEditorState()
  performanceMode.value = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  syncRoute(route.path)
  window.addEventListener('keydown', handleEditorHotkeys)
  window.addEventListener('resize', refreshCanvasMetrics)
  window.addEventListener('load', refreshCanvasMetrics)
  window.addEventListener('beforeunload', handleBeforeUnload)
})

watch(
  () => route.path,
  async (nextPath) => {
    stopInteraction()
    await syncRoute(nextPath)
  }
)

watch(
  () => orderedBlocks.value.map((block) => `${block.id}:${block.x}:${block.y}:${block.w}:${block.h}`).join('|'),
  () => {
    refreshCanvasMetrics()
  }
)

onBeforeUnmount(() => {
  stopInteraction()
  window.removeEventListener('keydown', handleEditorHotkeys)
  window.removeEventListener('resize', refreshCanvasMetrics)
  window.removeEventListener('load', refreshCanvasMetrics)
  window.removeEventListener('beforeunload', handleBeforeUnload)
  clearMessage()
})
</script>

<template>
  <div
    v-if="showCanvas"
    class="home-editor-canvas"
    :class="{ 'is-editing': isEditorMode, 'is-interacting': isInteracting, 'is-performance': performanceMode }"
    :style="canvasStyle"
    aria-label="页面编辑画布"
  >
    <div class="home-editor-canvas__blocks">
      <div class="home-editor-guides" aria-hidden="true">
        <span
          v-for="(x, index) in guideLines.vertical"
          :key="`v-${index}-${x}`"
          class="home-editor-guide home-editor-guide--vertical"
          :style="{ left: `${x}px` }"
        />
        <span
          v-for="(y, index) in guideLines.horizontal"
          :key="`h-${index}-${y}`"
          class="home-editor-guide home-editor-guide--horizontal"
          :style="{ top: `${y}px` }"
        />
      </div>

      <article
        v-for="block in orderedBlocks"
        :key="block.id"
        class="home-editor-block"
        :class="{ 'is-selected': selectedBlockId === block.id }"
        :style="blockStyle(block)"
        @pointerdown="onBlockPointerDown($event, block)"
        @click.stop="selectBlock(block.id)"
        @dblclick.stop="bringToFront(block.id)"
      >
        <p class="home-editor-block__kicker">{{ block.kicker }}</p>
        <h2 class="home-editor-block__title">{{ block.title }}</h2>
        <p class="home-editor-block__body">{{ block.body }}</p>
        <span v-if="isEditorMode" class="home-editor-block__hint">拖拽</span>

        <template v-if="isEditorMode && selectedBlockId === block.id">
          <button
            type="button"
            class="home-editor-resize-handle home-editor-resize-handle--e"
            aria-label="横向缩放"
            @pointerdown.stop.prevent="onResizeHandlePointerDown($event, block, 'e')"
          />
          <button
            type="button"
            class="home-editor-resize-handle home-editor-resize-handle--s"
            aria-label="纵向缩放"
            @pointerdown.stop.prevent="onResizeHandlePointerDown($event, block, 's')"
          />
          <button
            type="button"
            class="home-editor-resize-handle home-editor-resize-handle--se"
            aria-label="自由缩放"
            @pointerdown.stop.prevent="onResizeHandlePointerDown($event, block, 'se')"
          />
        </template>
      </article>
    </div>

    <div v-if="isEditorMode" class="home-editor-toolbar">
      <button type="button" class="home-editor-btn" @click="handleAddBlock">
        新增
      </button>
      <button
        type="button"
        class="home-editor-btn"
        :disabled="!selectedBlock"
        @click="handleDuplicateSelected"
      >
        复制
      </button>
      <button
        type="button"
        class="home-editor-btn"
        :disabled="!selectedBlock"
        @click="removeCurrentBlock"
      >
        删除
      </button>
      <button type="button" class="home-editor-btn" :disabled="!historyStats.undo" @click="handleUndo">
        撤销
      </button>
      <button type="button" class="home-editor-btn" :disabled="!historyStats.redo" @click="handleRedo">
        重做
      </button>
      <button type="button" class="home-editor-btn" @click="handleResetLayout">
        重置
      </button>
    </div>

    <aside v-if="isEditorMode" class="home-editor-panel" :class="{ 'is-collapsed': panelCollapsed, 'is-performance': performanceMode }">
      <h3 class="home-editor-panel__title">页面编辑器</h3>
      <p class="home-editor-panel__route">{{ currentRoute }}</p>
      <div class="home-editor-panel__controls">
        <button type="button" class="home-editor-layer-btn" @click="togglePanelCollapsed">
          {{ panelCollapsed ? '展开面板' : '折叠面板' }}
        </button>
        <button
          type="button"
          class="home-editor-layer-btn"
          :class="{ 'is-active': performanceMode }"
          @click="togglePerformanceMode"
        >
          {{ performanceMode ? '性能优先' : '视觉优先' }}
        </button>
      </div>

      <div class="home-editor-status">
        <span class="home-editor-chip home-editor-chip--draft">草稿</span>
        <span class="home-editor-chip" :class="routeStatus.dirty ? 'is-dirty' : 'is-clean'">
          {{ routeStatus.dirty ? '有未发布改动' : '已与发布版同步' }}
        </span>
        <span class="home-editor-chip home-editor-chip--count">草稿/发布 {{ blockCountSummary }}</span>
        <span class="home-editor-chip home-editor-chip--history">回滚点 {{ routeStatus.historyCount }}</span>
        <span class="home-editor-chip home-editor-chip--history">撤销 {{ historyStats.undo }}/重做 {{ historyStats.redo }}</span>
        <span class="home-editor-chip home-editor-chip--count">Schema v3 / Layout v2 / Project v1</span>
      </div>

      <section class="home-editor-route-tools home-editor-diff-preview">
        <div class="home-editor-layer-panel__head">
          <strong>发布预览</strong>
        </div>
        <p class="home-editor-route-tools__hint">
          +{{ publishDiffPreview.added }} / -{{ publishDiffPreview.removed }} / Δ{{ publishDiffPreview.changed }}
        </p>
      </section>
      <section class="home-editor-route-tools">
        <button type="button" class="home-editor-btn home-editor-btn--full" @click="handleGenerateRouteTemplate">
          生成当前页模板
        </button>
        <p class="home-editor-route-tools__hint">
          当页面还没有模块时，可一键生成标题与说明区块，快速开始编辑。
        </p>
      </section>

      <div class="home-editor-actions">
        <button type="button" class="home-editor-btn" @click="handleSaveDraft">
          保存草稿
        </button>
        <button type="button" class="home-editor-btn" @click="handlePublishWithDiffPreview">
          立即发布
        </button>
        <button type="button" class="home-editor-btn" @click="handleRevertDraft">
          回滚草稿
        </button>
      </div>

      <section class="home-editor-layer-panel">
        <div class="home-editor-layer-panel__head">
          <strong>图层面板</strong>
          <div class="home-editor-layer-panel__actions">
            <button type="button" class="home-editor-layer-btn" :disabled="!selectedBlock" @click="handleMoveLayer(1)">
              上移
            </button>
            <button type="button" class="home-editor-layer-btn" :disabled="!selectedBlock" @click="handleMoveLayer(-1)">
              下移
            </button>
          </div>
        </div>

        <ul class="home-editor-layer-list">
          <li v-for="block in layerBlocks" :key="`layer-${block.id}`">
            <button
              type="button"
              class="home-editor-layer-item"
              :class="{ 'is-active': selectedBlockId === block.id }"
              @click="selectBlock(block.id)"
            >
              <span class="home-editor-layer-item__title">{{ block.title || block.kicker || block.id }}</span>
              <span class="home-editor-layer-item__meta">z{{ block.z }}</span>
            </button>
          </li>
        </ul>
      </section>

      <section class="home-editor-route-list-panel">
        <div class="home-editor-layer-panel__head">
          <strong>已编辑页面（{{ allEditedRoutes.length }}）</strong>
        </div>
        <ul class="home-editor-layer-list">
          <li v-for="path in allEditedRoutes" :key="`route-${path}`">
            <button
              type="button"
              class="home-editor-layer-item"
              :class="{ 'is-active': currentRoute === path }"
              @click="navigateToEditedRoute(path)"
            >
              <span class="home-editor-layer-item__title">{{ path }}</span>
              <span class="home-editor-layer-item__meta">{{ path === currentRoute ? '当前' : '打开' }}</span>
            </button>
          </li>
        </ul>
      </section>

      <div class="home-editor-actions home-editor-actions--secondary">
        <button type="button" class="home-editor-btn" @click="handleValidatePublish">
          校验发布
        </button>
        <button
          type="button"
          class="home-editor-btn"
          :disabled="!routeStatus.historyCount"
          @click="handleRollbackPublished"
        >
          一键回滚
        </button>
      </div>

      <div class="home-editor-actions">
        <button type="button" class="home-editor-btn home-editor-btn--export" @click="handleExportCurrent">
          <span class="home-editor-export-icon" aria-hidden="true" />
          <span>导出当前页</span>
        </button>
        <button type="button" class="home-editor-btn home-editor-btn--export" @click="handleExportAll">
          <span class="home-editor-export-icon" aria-hidden="true" />
          <span>导出全站</span>
        </button>
        <button type="button" class="home-editor-btn home-editor-btn--export" @click="handleExportProject">
          <span class="home-editor-export-icon" aria-hidden="true" />
          <span>导出工程</span>
        </button>
        <button type="button" class="home-editor-btn" @click="triggerImport">
          导入工程/布局
        </button>
      </div>

      <section class="home-editor-audit-panel">
        <div class="home-editor-layer-panel__head">
          <strong>操作记录（{{ routeAuditLogs.length }}）</strong>
          <div class="home-editor-layer-panel__actions">
            <button type="button" class="home-editor-layer-btn" @click="handleExportAudit">
              导出
            </button>
            <button
              type="button"
              class="home-editor-layer-btn"
              :disabled="!routeAuditLogs.length"
              @click="handleClearAudit"
            >
              清空
            </button>
          </div>
        </div>

        <ul v-if="auditPreviewLogs.length" class="home-editor-audit-list">
          <li v-for="item in auditPreviewLogs" :key="item.id" class="home-editor-audit-item">
            <p class="home-editor-audit-item__title">{{ getAuditActionLabel(item) }}</p>
            <p class="home-editor-audit-item__detail">{{ getAuditDetailText(item) || '无补充信息' }}</p>
            <time class="home-editor-audit-item__time">{{ formatAuditTime(item.at) }}</time>
          </li>
        </ul>
        <p v-else class="home-editor-route-tools__hint">当前页面暂无操作记录。</p>
      </section>

      <input
        ref="importInputRef"
        class="home-editor-import-input"
        type="file"
        accept="application/json,.json"
        @change="handleImportFile"
      />

      <p v-if="ioMessage" class="home-editor-message" :class="`is-${ioMessageType}`">
        {{ ioMessage }}
      </p>

      <section v-if="validationReport" class="home-editor-report">
        <div class="home-editor-report__head">
          <span
            class="home-editor-report__badge"
            :class="validationReport.ok ? 'is-pass' : 'is-block'"
          >
            {{ validationReport.ok ? '校验通过' : '校验失败' }}
          </span>
          <span class="home-editor-report__meta">
            错误 {{ validationReport.errors.length }} / 提醒 {{ validationReport.warnings.length }}
          </span>
        </div>

        <ul
          v-if="validationReport.errors.length"
          class="home-editor-report__list home-editor-report__list--error"
        >
          <li v-for="(item, index) in validationReport.errors.slice(0, 6)" :key="`error-${index}`">
            {{ item.message }}
          </li>
        </ul>

        <ul
          v-if="validationReport.warnings.length"
          class="home-editor-report__list home-editor-report__list--warn"
        >
          <li
            v-for="(item, index) in validationReport.warnings.slice(0, 6)"
            :key="`warning-${index}`"
          >
            {{ item.message }}
          </li>
        </ul>

        <p
          v-if="validationReport.errors.length > 6 || validationReport.warnings.length > 6"
          class="home-editor-report__more"
        >
          仅展示前 6 条，请优先处理关键问题。
        </p>
      </section>

      <template v-if="selectedBlock">
        <label class="home-editor-field">
          <span>前缀文案</span>
          <input
            class="home-editor-input"
            type="text"
            :value="selectedBlock.kicker"
            @input="updateSelectedField('kicker', $event.target.value)"
          />
        </label>

        <label class="home-editor-field">
          <span>标题</span>
          <input
            class="home-editor-input"
            type="text"
            :value="selectedBlock.title"
            @input="updateSelectedField('title', $event.target.value)"
          />
        </label>

        <label class="home-editor-field">
          <span>正文</span>
          <textarea
            class="home-editor-input home-editor-input--textarea"
            :value="selectedBlock.body"
            @input="updateSelectedField('body', $event.target.value)"
          />
        </label>

        <div class="home-editor-grid">
          <label class="home-editor-field">
            <span>宽度</span>
            <input
              class="home-editor-range"
              type="range"
              min="180"
              max="1200"
              step="1"
              :value="selectedBlock.w"
              @input="updateSelectedNumberField('w', $event.target.value, 180, 1200)"
            />
          </label>
          <label class="home-editor-field">
            <span>高度</span>
            <input
              class="home-editor-range"
              type="range"
              min="90"
              max="900"
              step="1"
              :value="selectedBlock.h"
              @input="updateSelectedNumberField('h', $event.target.value, 90, 900)"
            />
          </label>
        </div>

        <div class="home-editor-grid">
          <label class="home-editor-field">
            <span>透明度</span>
            <input
              class="home-editor-range"
              type="range"
              min="0.05"
              max="1"
              step="0.01"
              :value="selectedBlock.opacity"
              @input="updateSelectedNumberField('opacity', $event.target.value, 0.05, 1)"
            />
          </label>
          <label class="home-editor-field">
            <span>圆角</span>
            <input
              class="home-editor-range"
              type="range"
              min="0"
              max="60"
              step="1"
              :value="selectedBlock.radius"
              @input="updateSelectedNumberField('radius', $event.target.value, 0, 60)"
            />
          </label>
        </div>

        <div class="home-editor-grid">
          <label class="home-editor-field">
            <span>模糊度</span>
            <input
              class="home-editor-range"
              type="range"
              min="0"
              max="24"
              step="1"
              :value="selectedBlock.blur"
              @input="updateSelectedNumberField('blur', $event.target.value, 0, 24)"
            />
          </label>
          <label class="home-editor-field">
            <span>文字颜色</span>
            <input
              class="home-editor-color"
              type="color"
              :value="normalizeColorHex(selectedBlock.color)"
              @input="updateTextColor"
            />
          </label>
        </div>

        <label class="home-editor-field">
          <span>背景样式</span>
          <input
            class="home-editor-input"
            type="text"
            :value="selectedBlock.bg"
            @input="updateSelectedField('bg', $event.target.value)"
          />
        </label>
      </template>
      <p v-else class="home-editor-empty-hint">
        当前未选中模块。请点击画布中的模块，或先点击“新增”创建模块。
      </p>

      <p class="home-editor-shortcut-hint">
        快捷键：Ctrl/Cmd+Z 撤销，Shift+Ctrl/Cmd+Z 重做，Ctrl/Cmd+D 复制，Delete 删除，方向键微调，Alt+↑/↓ 调整图层。
      </p>
    </aside>
  </div>
</template>







