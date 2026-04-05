<script setup>
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
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
  }
)

onMounted(() => {
  initHomeLayoutState()
  syncHtmlClass()
})

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  HOME_LAYOUT_CLASSES.forEach((name) => {
    document.documentElement.classList.remove(name)
  })
})
</script>

<template>
  <div class="home-layout-switch">
    <button
      type="button"
      class="home-layout-toggle home-layout-toggle--minimal"
      :class="{ 'is-active': homeLayoutMode === 'minimal' }"
      aria-label="切换首页布局为极简"
      title="首页布局：极简"
      @click="applyMode('minimal')"
    >
      <span class="home-layout-toggle__dot" />
      <span class="home-layout-toggle__text">极简</span>
    </button>

    <button
      type="button"
      class="home-layout-toggle home-layout-toggle--dashboard"
      :class="{ 'is-active': homeLayoutMode === 'dashboard' }"
      aria-label="切换首页布局为仪表"
      title="首页布局：仪表"
      @click="applyMode('dashboard')"
    >
      <span class="home-layout-toggle__dot" />
      <span class="home-layout-toggle__text">仪表</span>
    </button>

    <button
      type="button"
      class="home-layout-toggle home-layout-toggle--editorial"
      :class="{ 'is-active': homeLayoutMode === 'editorial' }"
      aria-label="切换首页布局为杂志"
      title="首页布局：杂志"
      @click="applyMode('editorial')"
    >
      <span class="home-layout-toggle__dot" />
      <span class="home-layout-toggle__text">杂志</span>
    </button>
  </div>
</template>
