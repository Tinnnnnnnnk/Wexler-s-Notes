<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'
import {
  addHomeTextBlock,
  homeLayout,
  initEditorState,
  isEditorMode,
  orderedHomeBlocks,
  patchHomeBlock,
  persistHomeLayout,
  removeHomeBlock,
  resetHomeLayout,
  selectedHomeBlock,
  selectedHomeBlockId,
  setSelectedHomeBlock
} from './editorState'

const route = useRoute()
const isHome = computed(() => route.path === '/')
const showCanvas = computed(() => isHome.value && isEditorMode.value)

const dragState = ref(null)

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function normalizeColorHex(value, fallback = '#ffffff') {
  if (typeof value !== 'string') return fallback
  const text = value.trim()
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(text) ? text : fallback
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

function onBlockPointerDown(event, block) {
  if (!isEditorMode.value) return
  if (event.button !== 0) return

  setSelectedHomeBlock(block.id)

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
}

function onDragging(event) {
  if (!dragState.value) return
  const dx = event.clientX - dragState.value.startX
  const dy = event.clientY - dragState.value.startY

  patchHomeBlock(
    dragState.value.id,
    {
      x: clamp(Math.round(dragState.value.initialX + dx), 0, 5000),
      y: clamp(Math.round(dragState.value.initialY + dy), 0, 5000)
    },
    { persist: false }
  )
}

function stopDragging(event) {
  if (!dragState.value) return
  if (event && event.pointerId && event.pointerId !== dragState.value.pointerId) return

  dragState.value = null
  window.removeEventListener('pointermove', onDragging)
  window.removeEventListener('pointerup', stopDragging)
  window.removeEventListener('pointercancel', stopDragging)
  persistHomeLayout()
}

function selectBlock(blockId) {
  setSelectedHomeBlock(blockId)
}

function bringToFront(blockId) {
  const currentMax = Math.max(...homeLayout.value.blocks.map((item) => item.z), 0)
  patchHomeBlock(blockId, { z: currentMax + 1 })
}

function removeCurrentBlock() {
  if (!selectedHomeBlock.value) return
  removeHomeBlock(selectedHomeBlock.value.id)
}

function updateSelectedField(field, value) {
  if (!selectedHomeBlock.value) return
  patchHomeBlock(selectedHomeBlock.value.id, { [field]: value })
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

onMounted(() => {
  initEditorState()
})

onBeforeUnmount(() => {
  stopDragging()
})
</script>

<template>
  <div
    v-if="showCanvas"
    class="home-editor-canvas"
    :class="{ 'is-editing': isEditorMode }"
    aria-label="Home editor canvas"
  >
    <div class="home-editor-canvas__blocks">
      <article
        v-for="block in orderedHomeBlocks"
        :key="block.id"
        class="home-editor-block"
        :class="{ 'is-selected': selectedHomeBlockId === block.id }"
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
      <button type="button" class="home-editor-btn" @click="addHomeTextBlock">
        Add
      </button>
      <button
        type="button"
        class="home-editor-btn"
        :disabled="!selectedHomeBlock"
        @click="removeCurrentBlock"
      >
        Delete
      </button>
      <button type="button" class="home-editor-btn" @click="resetHomeLayout">
        Reset
      </button>
    </div>

    <aside v-if="isEditorMode && selectedHomeBlock" class="home-editor-panel">
      <h3 class="home-editor-panel__title">Block Editor</h3>

      <label class="home-editor-field">
        <span>Kicker</span>
        <input
          class="home-editor-input"
          type="text"
          :value="selectedHomeBlock.kicker"
          @input="updateSelectedField('kicker', $event.target.value)"
        />
      </label>

      <label class="home-editor-field">
        <span>Title</span>
        <input
          class="home-editor-input"
          type="text"
          :value="selectedHomeBlock.title"
          @input="updateSelectedField('title', $event.target.value)"
        />
      </label>

      <label class="home-editor-field">
        <span>Body</span>
        <textarea
          class="home-editor-input home-editor-input--textarea"
          :value="selectedHomeBlock.body"
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
            :value="selectedHomeBlock.w"
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
            :value="selectedHomeBlock.h"
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
            :value="selectedHomeBlock.opacity"
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
            :value="selectedHomeBlock.radius"
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
            :value="selectedHomeBlock.blur"
            @input="updateSelectedNumberField('blur', $event.target.value, 0, 24)"
          />
        </label>
        <label class="home-editor-field">
          <span>Text Color</span>
          <input
            class="home-editor-color"
            type="color"
            :value="normalizeColorHex(selectedHomeBlock.color)"
            @input="updateTextColor"
          />
        </label>
      </div>

      <label class="home-editor-field">
        <span>Background</span>
        <input
          class="home-editor-input"
          type="text"
          :value="selectedHomeBlock.bg"
          @input="updateSelectedField('bg', $event.target.value)"
        />
      </label>
    </aside>
  </div>
</template>
