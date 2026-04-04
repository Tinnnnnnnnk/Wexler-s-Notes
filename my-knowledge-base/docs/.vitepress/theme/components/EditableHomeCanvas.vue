<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import {
  addRouteTextBlock,
  ensureRouteLayout,
  getOrderedRouteBlocks,
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
  revertRouteDraft,
  saveDraftRoute,
  setSelectedRouteBlock
} from './editorState'

const route = useRoute()
const currentRoute = ref('/')
const dragState = ref(null)
const importInputRef = ref(null)
const ioMessage = ref('')
const ioMessageType = ref('info')

let ioTimer = null
let dragRafId = 0
let pendingPointer = null

const showCanvas = computed(() => isEditorMode.value)
const isDragging = computed(() => Boolean(dragState.value))
const orderedBlocks = computed(() => getOrderedRouteBlocks(currentRoute.value))
const selectedBlockId = computed(() => getSelectedRouteBlockId(currentRoute.value))
const selectedBlock = computed(() => getSelectedRouteBlock(currentRoute.value))
const routeStatus = computed(() => getRouteEditStatus(currentRoute.value))
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
  clearMessage()
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
    setMessage('success', 'Draft saved.')
  }
}

function handlePublish() {
  const result = publishDraftRoute(currentRoute.value)
  if (result.ok) {
    setMessage('success', 'Published current route layout.')
  }
}

function handleRevertDraft() {
  if (routeStatus.value.dirty) {
    const confirmed = window.confirm('Discard current draft changes and restore published layout?')
    if (!confirmed) return
  }
  const result = revertRouteDraft(currentRoute.value)
  if (result.ok) {
    setMessage('success', 'Draft restored from published version.')
  }
}

function handleExportCurrent() {
  const bundle = getRouteExportBundle(currentRoute.value)
  const filename = `editor-layout-${toRouteSlug(currentRoute.value)}-${Date.now()}.json`
  downloadJson(filename, bundle)
  setMessage('success', 'Current route layout exported.')
}

function handleExportAll() {
  const bundle = getAllRoutesExportBundle()
  const filename = `editor-layout-all-routes-${Date.now()}.json`
  downloadJson(filename, bundle)
  setMessage('success', 'All route layouts exported.')
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
      setMessage('success', result.message || 'Import completed.')
    } else {
      setMessage('error', result.message || 'Import failed.', 3600)
    }
  } catch (error) {
    setMessage('error', 'Failed to read import file.', 3600)
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
    aria-label="Page editor canvas"
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
        <span v-if="isEditorMode" class="home-editor-block__hint">drag</span>
      </article>
    </div>

    <div v-if="isEditorMode" class="home-editor-toolbar">
      <button type="button" class="home-editor-btn" @click="addRouteTextBlock(currentRoute)">
        Add
      </button>
      <button
        type="button"
        class="home-editor-btn"
        :disabled="!selectedBlock"
        @click="removeCurrentBlock"
      >
        Delete
      </button>
      <button type="button" class="home-editor-btn" @click="resetRouteLayout(currentRoute)">
        Reset
      </button>
    </div>

    <aside v-if="isEditorMode" class="home-editor-panel">
      <h3 class="home-editor-panel__title">Block Editor</h3>
      <p class="home-editor-panel__route">{{ currentRoute }}</p>

      <div class="home-editor-status">
        <span class="home-editor-chip home-editor-chip--draft">Draft</span>
        <span class="home-editor-chip" :class="routeStatus.dirty ? 'is-dirty' : 'is-clean'">
          {{ routeStatus.dirty ? 'Unpublished Changes' : 'Synced With Published' }}
        </span>
        <span class="home-editor-chip home-editor-chip--count">D/P {{ blockCountSummary }}</span>
      </div>

      <div class="home-editor-actions">
        <button type="button" class="home-editor-btn" @click="handleSaveDraft">
          Save Draft
        </button>
        <button type="button" class="home-editor-btn" @click="handlePublish">
          Publish
        </button>
        <button type="button" class="home-editor-btn" @click="handleRevertDraft">
          Revert
        </button>
      </div>

      <div class="home-editor-actions">
        <button type="button" class="home-editor-btn" @click="handleExportCurrent">
          Export Route
        </button>
        <button type="button" class="home-editor-btn" @click="handleExportAll">
          Export All
        </button>
        <button type="button" class="home-editor-btn" @click="triggerImport">
          Import JSON
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

      <template v-if="selectedBlock">
        <label class="home-editor-field">
          <span>Kicker</span>
          <input
            class="home-editor-input"
            type="text"
            :value="selectedBlock.kicker"
            @input="updateSelectedField('kicker', $event.target.value)"
          />
        </label>

        <label class="home-editor-field">
          <span>Title</span>
          <input
            class="home-editor-input"
            type="text"
            :value="selectedBlock.title"
            @input="updateSelectedField('title', $event.target.value)"
          />
        </label>

        <label class="home-editor-field">
          <span>Body</span>
          <textarea
            class="home-editor-input home-editor-input--textarea"
            :value="selectedBlock.body"
            @input="updateSelectedField('body', $event.target.value)"
          />
        </label>

        <div class="home-editor-grid">
          <label class="home-editor-field">
            <span>Width</span>
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
            <span>Height</span>
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
            <span>Opacity</span>
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
            <span>Radius</span>
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
            <span>Blur</span>
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
            <span>Text Color</span>
            <input
              class="home-editor-color"
              type="color"
              :value="normalizeColorHex(selectedBlock.color)"
              @input="updateTextColor"
            />
          </label>
        </div>

        <label class="home-editor-field">
          <span>Background</span>
          <input
            class="home-editor-input"
            type="text"
            :value="selectedBlock.bg"
            @input="updateSelectedField('bg', $event.target.value)"
          />
        </label>
      </template>
      <p v-else class="home-editor-empty-hint">
        No block selected. Click a block on canvas, or press Add to create one.
      </p>
    </aside>
  </div>
</template>
