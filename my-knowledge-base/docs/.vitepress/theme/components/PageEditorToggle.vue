<script setup>
import { onMounted } from 'vue'
import { initEditorState, isEditorMode, toggleEditorMode } from './editorState'

onMounted(() => {
  initEditorState()
})
</script>

<template>
  <button
    type="button"
    class="page-editor-toggle"
    :class="{ 'is-active': isEditorMode }"
    :aria-label="isEditorMode ? 'Disable page editor mode' : 'Enable page editor mode'"
    title="Page editor mode"
    @click="toggleEditorMode"
  >
    <span class="page-editor-toggle__icon" aria-hidden="true" />
    <span class="page-editor-toggle__state" />
  </button>
</template>
