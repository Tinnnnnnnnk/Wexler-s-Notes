<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vitepress'
import { initEditorState, isEditorMode, toggleEditorMode } from './editorState'

const route = useRoute()
const isHome = computed(() => route.path === '/')

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
    :title="isHome ? 'Page editor mode' : 'Page editor mode (Home fully supported in current version)'"
    @click="toggleEditorMode"
  >
    <span class="page-editor-toggle__icon" aria-hidden="true" />
    <span class="page-editor-toggle__state" />
  </button>
</template>
