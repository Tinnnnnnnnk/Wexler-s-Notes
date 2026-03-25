<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vitepress'
import { homeFxMode, initHomeFxState, setHomeFxMode, toggleHomeFxMode } from './homeFxState'

const route = useRoute()
const isHome = computed(() => route.path === '/')
const isSkyTakeOut = computed(() => route.path.startsWith('/Sky-Take-Out/'))
const showToggle = computed(() => isHome.value || isSkyTakeOut.value)

function setDefault() {
  setHomeFxMode('default')
}

function toggleGlass() {
  toggleHomeFxMode('glass')
}

function toggleLiquid() {
  toggleHomeFxMode('liquid')
}

onMounted(() => {
  initHomeFxState()
})
</script>

<template>
  <div v-if="showToggle" class="home-fx-switch">
    <button
      type="button"
      class="home-fx-toggle home-fx-toggle--default"
      :class="{ 'is-active': homeFxMode === 'default' }"
      aria-label="Switch to default mode"
      title="Default mode"
      @click="setDefault"
    >
      <span class="home-fx-toggle__icon" />
      <span class="home-fx-toggle__text">&#24120;&#24577;</span>
    </button>

    <button
      type="button"
      class="home-fx-toggle"
      :class="{ 'is-active': homeFxMode === 'glass' }"
      aria-label="Switch to glass mode"
      title="Glass mode"
      @click="toggleGlass"
    >
      <span class="home-fx-toggle__icon" />
      <span class="home-fx-toggle__text">&#26230;&#36879;</span>
    </button>

    <button
      type="button"
      class="home-fx-toggle home-fx-toggle--liquid"
      :class="{ 'is-active': homeFxMode === 'liquid' }"
      aria-label="Switch to liquid mode"
      title="Liquid mode"
      @click="toggleLiquid"
    >
      <span class="home-fx-toggle__icon" />
      <span class="home-fx-toggle__text">&#28082;&#24577;</span>
    </button>
  </div>
</template>
