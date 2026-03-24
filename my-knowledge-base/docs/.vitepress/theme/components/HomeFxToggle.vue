<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vitepress'
import { homeFxEnabled, initHomeFxState, toggleHomeFxEnabled } from './homeFxState'

const route = useRoute()
const isHome = computed(() => route.path === '/')

function handleToggle() {
  toggleHomeFxEnabled()
}

onMounted(() => {
  initHomeFxState()
})
</script>

<template>
  <button
    v-if="isHome"
    type="button"
    class="home-fx-toggle"
    :class="{ 'is-active': homeFxEnabled }"
    :aria-label="homeFxEnabled ? '切换到默认主页样式' : '切换到玻璃动态主页样式'"
    @click="handleToggle"
  >
    <span class="home-fx-toggle__icon" />
    <span class="home-fx-toggle__text">形态</span>
  </button>
</template>
