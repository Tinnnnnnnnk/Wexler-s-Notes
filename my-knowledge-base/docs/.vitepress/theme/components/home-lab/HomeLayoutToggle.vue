<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import { layoutMode, initUiModeState, setLayoutMode, syncAllClasses } from '../stores/uiModeState'

const route = useRoute()

const isHome = computed(() => route.path === '/')

function applyMode(mode) {
  setLayoutMode(mode)
}

watch(
  [() => route.path],
  () => {
    syncAllClasses()
  },
  { immediate: true }
)

onMounted(() => {
  initUiModeState()
})
</script>

<template>
  <div class="home-layout-switch" role="group" aria-label="Home layout switch">
    <button
      type="button"
      class="home-layout-toggle home-layout-toggle--minimal"
      :class="{ 'is-active': layoutMode === 'minimal' }"
      aria-label="Switch to Keynote layout"
      title="Keynote / 发布会"
      @click="applyMode('minimal')"
    >
      <span class="home-layout-toggle__dot" />
      <span class="home-layout-toggle__text">Keynote</span>
    </button>

    <button
      type="button"
      class="home-layout-toggle home-layout-toggle--dashboard"
      :class="{ 'is-active': layoutMode === 'dashboard' }"
      aria-label="Switch to Workbench layout"
      title="Workbench / 工作台"
      @click="applyMode('dashboard')"
    >
      <span class="home-layout-toggle__dot" />
      <span class="home-layout-toggle__text">Workbench</span>
    </button>

    <button
      type="button"
      class="home-layout-toggle home-layout-toggle--editorial"
      :class="{ 'is-active': layoutMode === 'editorial' }"
      aria-label="Switch to Media layout"
      title="Media / 媒体流"
      @click="applyMode('editorial')"
    >
      <span class="home-layout-toggle__dot" />
      <span class="home-layout-toggle__text">Media</span>
    </button>
  </div>
</template>
