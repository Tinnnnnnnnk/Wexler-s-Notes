<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vitepress'
import { homeFxMode, initHomeFxState, toggleHomeFxMode } from './homeFxState'

const route = useRoute()
const isHome = computed(() => route.path === '/')

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
  <div v-if="isHome" class="home-fx-switch">
    <button
      type="button"
      class="home-fx-toggle"
      :class="{ 'is-active': homeFxMode === 'glass' }"
      aria-label="切换晶透玻璃样式"
      @click="toggleGlass"
    >
      <span class="home-fx-toggle__icon" />
      <span class="home-fx-toggle__text">晶透</span>
    </button>
    <button
      type="button"
      class="home-fx-toggle home-fx-toggle--liquid"
      :class="{ 'is-active': homeFxMode === 'liquid' }"
      aria-label="切换液态玻璃样式"
      @click="toggleLiquid"
    >
      <span class="home-fx-toggle__icon" />
      <span class="home-fx-toggle__text">液态</span>
    </button>
  </div>
</template>
