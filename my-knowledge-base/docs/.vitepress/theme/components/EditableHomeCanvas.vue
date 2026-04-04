<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import {
  addRouteTextBlock,
  ensureRouteLayout,
  getOrderedRouteBlocks,
  getRoutePublishedHistory,
  getRouteBlocks,
  getRouteEditStatus,
  getRouteExportBundle,
  getAllRoutesExportBundle,
  getSelectedRouteBlock,
  getSelectedRouteBlockId,
  importEditorBundle,
  initEditorState,
  isEditorMode,
  patchRouteBlock,
  persistDraftRouteLayout,
  publishDraftRoute,
  removeRouteBlock,
  resetRouteLayout,
  rollbackPublishedRoute,
  revertRouteDraft,
  saveDraftRoute,
  setSelectedRouteBlock,
  validateDraftRoute
} from './editorState'

const route = useRoute()
const currentRoute = ref('/')
const dragState = ref(null)
const importInputRef = ref(null)
const ioMessage = ref('')
const ioMessageType = ref('info')
const validationReport = ref(null)

let ioTimer = null
let dragRafId = 0
let pendingPointer = null

const showCanvas = computed(() => isEditorMode.value)
const isDragging = computed(() => Boolean(dragState.value))
const orderedBlocks = computed(() => getOrderedRouteBlocks(currentRoute.value))
const selectedBlockId = computed(() => getSelectedRouteBlockId(currentRoute.value))
const selectedBlock = computed(() => getSelectedRouteBlock(currentRoute.value))
const routeStatus = computed(() => getRouteEditStatus(currentRoute.value))
const routeHistory = computed(() => getRoutePublishedHistory(currentRoute.value))
const latestHistory = computed(() => routeHistory.value[0] || null)
const blockCountSummary = computed(
  () => `${routeStatus.value.blockCount}/${routeStatus.value.publishedBlockCount}`
)

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function normalizeColorHex(value, fallback = '#ffffff') {
  if (typeof value !== 'string') return fallback
  const text = value.trim()
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(text) ? text : fallback
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

function syncRoute(nextPath) {
  currentRoute.value = ensureRouteLayout(nextPath)
  validationReport.value = null
  clearMessage()
}

function formatSnapshotTime(value) {
  if (!value) return '未知时间'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value)

  return new Intl.DateTimeFormat('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
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

function applyDragPosition(clientX, clientY) {
  if (!dragState.value) return
  const dx = clientX - dragState.value.startX
  const dy = clientY - dragState.value.startY

  patchRouteBlock(
    currentRoute.value,
    dragState.value.id,
    {
      x: clamp(Math.round(dragState.value.initialX + dx), 0, 5000),
      y: clamp(Math.round(dragState.value.initialY + dy), 0, 5000)
    },
    { persist: false }
  )
}

function flushDragFrame() {
  dragRafId = 0
  if (!dragState.value || !pendingPointer) return
  applyDragPosition(pendingPointer.x, pendingPointer.y)
  pendingPointer = null
}

function onBlockPointerDown(event, block) {
  if (!isEditorMode.value) return
  if (event.pointerType === 'mouse' && event.button !== 0) return

  setSelectedRouteBlock(currentRoute.value, block.id)

  dragState.value = {
    id: block.id,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    initialX: block.x,
    initialY: block.y
  }

  window.addEventListener('pointermove', onDragging)
  window.addEventListener('pointerup', stopDragging)
  window.addEventListener('pointercancel', stopDragging)
  event.preventDefault()
}

function onDragging(event) {
  if (!dragState.value) return
  pendingPointer = { x: event.clientX, y: event.clientY }
  if (dragRafId) return
  dragRafId = window.requestAnimationFrame(flushDragFrame)
}

function stopDragging(event) {
  if (!dragState.value) return
  if (event && event.pointerId && event.pointerId !== dragState.value.pointerId) return

  if (dragRafId) {
    window.cancelAnimationFrame(dragRafId)
    dragRafId = 0
  }
  if (pendingPointer) {
    applyDragPosition(pendingPointer.x, pendingPointer.y)
    pendingPointer = null
  }

  dragState.value = null
  window.removeEventListener('pointermove', onDragging)
  window.removeEventListener('pointerup', stopDragging)
  window.removeEventListener('pointercancel', stopDragging)
  persistDraftRouteLayout(currentRoute.value)
}

function selectBlock(blockId) {
  setSelectedRouteBlock(currentRoute.value, blockId)
}

function bringToFront(blockId) {
  const currentMax = Math.max(...getRouteBlocks(currentRoute.value).map((item) => item.z), 0)
  patchRouteBlock(currentRoute.value, blockId, { z: currentMax + 1 })
}

function removeCurrentBlock() {
  if (!selectedBlock.value) return
  removeRouteBlock(currentRoute.value, selectedBlock.value.id)
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
    setMessage('success', '草稿已保存。')
  }
}

function handlePublish() {
  const result = publishDraftRoute(currentRoute.value)
  validationReport.value = result.validation || null
  if (result.ok) {
    const warningCount = result.validation?.warnings?.length || 0
    const warningHint = warningCount ? `，含 ${warningCount} 条提醒` : ''
    setMessage('success', `当前页面布局已发布${warningHint}。`)
  } else {
    setMessage('error', result.message || '发布失败，请先修复校验问题。', 3800)
  }
}

function handleValidatePublish() {
  const report = validateDraftRoute(currentRoute.value)
  validationReport.value = report

  if (!report.ok) {
    setMessage('error', `发布校验失败：${report.errors.length} 个错误。`, 4200)
    return
  }

  const warningCount = report.warnings.length
  if (warningCount) {
    setMessage('success', `校验通过，另有 ${warningCount} 条提醒。`, 3600)
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
  const confirmed = window.confirm(`将回滚已发布版本并同步覆盖草稿${targetHint}，是否继续？`)
  if (!confirmed) return

  const result = rollbackPublishedRoute(currentRoute.value)
  if (!result.ok) {
    setMessage('error', result.message || '回滚失败。', 3600)
    return
  }

  validationReport.value = null
  const snapshotTime = formatSnapshotTime(result.snapshot?.at)
  setMessage('success', `已回滚到快照：${snapshotTime}。`)
}

function handleExportCurrent() {
  const bundle = getRouteExportBundle(currentRoute.value)
  const filename = `editor-layout-${toRouteSlug(currentRoute.value)}-${Date.now()}.json`
  downloadJson(filename, bundle)
  setMessage('success', '当前页面布局已导出。')
}

function handleExportAll() {
  const bundle = getAllRoutesExportBundle()
  const filename = `editor-layout-all-routes-${Date.now()}.json`
  downloadJson(filename, bundle)
  setMessage('success', '全站页面布局已导出。')
}

function triggerImport() {
  importInputRef.value?.click()
}

async function handleImportFile(event) {
  const file = event.target?.files?.[0]
  if (!file) return

  try {
    const text = await file.text()
    const result = importEditorBundle(text, currentRoute.value)
    if (result.ok) {
      validationReport.value = null
      setMessage('success', result.message || '导入完成。')
    } else {
      setMessage('error', result.message || '导入失败。', 3600)
    }
  } catch (error) {
    setMessage('error', '读取导入文件失败。', 3600)
  } finally {
    event.target.value = ''
  }
}

onMounted(() => {
  initEditorState()
  syncRoute(route.path)
})

watch(
  () => route.path,
  (nextPath) => {
    stopDragging()
    syncRoute(nextPath)
  }
)

onBeforeUnmount(() => {
  stopDragging()
  clearMessage()
})
</script>

<template>
  <div
    v-if="showCanvas"
    class="home-editor-canvas"
    :class="{ 'is-editing': isEditorMode, 'is-dragging': isDragging }"
    aria-label="页面编辑画布"
  >
    <div class="home-editor-canvas__blocks">
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
      </article>
    </div>

    <div v-if="isEditorMode" class="home-editor-toolbar">
      <button type="button" class="home-editor-btn" @click="addRouteTextBlock(currentRoute)">
        新增
      </button>
      <button
        type="button"
        class="home-editor-btn"
        :disabled="!selectedBlock"
        @click="removeCurrentBlock"
      >
        删除
      </button>
      <button type="button" class="home-editor-btn" @click="resetRouteLayout(currentRoute)">
        重置
      </button>
    </div>

    <aside v-if="isEditorMode" class="home-editor-panel">
      <h3 class="home-editor-panel__title">页面编辑器</h3>
      <p class="home-editor-panel__route">{{ currentRoute }}</p>

      <div class="home-editor-status">
        <span class="home-editor-chip home-editor-chip--draft">草稿</span>
        <span class="home-editor-chip" :class="routeStatus.dirty ? 'is-dirty' : 'is-clean'">
          {{ routeStatus.dirty ? '有未发布改动' : '已与发布版同步' }}
        </span>
        <span class="home-editor-chip home-editor-chip--count">草稿/发布 {{ blockCountSummary }}</span>
        <span class="home-editor-chip home-editor-chip--history">回滚点 {{ routeStatus.historyCount }}</span>
      </div>

      <div class="home-editor-actions">
        <button type="button" class="home-editor-btn" @click="handleSaveDraft">
          保存草稿
        </button>
        <button type="button" class="home-editor-btn" @click="handlePublish">
          立即发布
        </button>
        <button type="button" class="home-editor-btn" @click="handleRevertDraft">
          回滚草稿
        </button>
      </div>

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
        <button type="button" class="home-editor-btn" @click="triggerImport">
          导入 JSON
        </button>
      </div>

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
          仅展示前 6 条，请先优先处理关键问题。
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
    </aside>
  </div>
</template>
