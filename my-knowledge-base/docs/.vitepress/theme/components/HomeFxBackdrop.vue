<script setup>
import { computed, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import { homeFxEnabled, initHomeFxState } from './homeFxState'

const route = useRoute()

// Put your image/video files under: my-knowledge-base/docs/public/media/home-bg/
const IMAGE_SRC = '/media/home-bg/test1.jpg'
const VIDEO_SRC = ''

const isHome = computed(() => route.path === '/')
const isActive = computed(() => isHome.value && homeFxEnabled.value)

const layerStyle = computed(() => ({
  '--home-fx-image': `url("${IMAGE_SRC}")`
}))

function syncHtmlClass() {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('home-glass-mode', isActive.value)
}

onMounted(() => {
  initHomeFxState()
  syncHtmlClass()
})

watch([isActive, () => route.path], () => {
  syncHtmlClass()
})

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('home-glass-mode')
  }
})
</script>

<template>
  <div v-if="isActive" class="home-fx-layer" :style="layerStyle" aria-hidden="true">
    <video
      v-if="VIDEO_SRC"
      class="home-fx-layer__video"
      autoplay
      muted
      loop
      playsinline
      :src="VIDEO_SRC"
    />
    <div v-else class="home-fx-layer__image" />
  </div>
</template>
