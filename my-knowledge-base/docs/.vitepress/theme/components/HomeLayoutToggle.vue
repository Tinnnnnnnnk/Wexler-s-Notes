<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import { homeLayoutMode, initHomeLayoutState, setHomeLayoutMode } from './homeLayoutState'

const route = useRoute()

const HOME_LAYOUT_CLASSES = [
  'home-layout-minimal',
  'home-layout-dashboard',
  'home-layout-editorial'
]

const isHome = computed(() => route.path === '/')

function applyMode(mode) {
  setHomeLayoutMode(mode)
}

function syncHtmlClass() {
  if (typeof document === 'undefined') return

  HOME_LAYOUT_CLASSES.forEach((name) => {
    document.documentElement.classList.remove(name)
  })

  if (!isHome.value) return

  const modeClass = `home-layout-${homeLayoutMode.value}`
  document.documentElement.classList.add(modeClass)
}

watch(
  [() => route.path, () => homeLayoutMode.value],
  () => {
    syncHtmlClass()
  },
  { immediate: true }
)

onMounted(() => {
  initHomeLayoutState()
  syncHtmlClass()
})
</script>

<template>
  <div class="home-layout-switch" role="group" aria-label="Home layout switch">
    <button
      type="button"
      class="home-layout-toggle home-layout-toggle--minimal"
      :class="{ 'is-active': homeLayoutMode === 'minimal' }"
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
      :class="{ 'is-active': homeLayoutMode === 'dashboard' }"
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
      :class="{ 'is-active': homeLayoutMode === 'editorial' }"
      aria-label="Switch to Media layout"
      title="Media / 媒体流"
      @click="applyMode('editorial')"
    >
      <span class="home-layout-toggle__dot" />
      <span class="home-layout-toggle__text">Media</span>
    </button>
  </div>
</template>
