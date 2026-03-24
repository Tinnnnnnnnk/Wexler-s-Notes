<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import { homeFxMode, initHomeFxState } from './homeFxState'

const route = useRoute()

// Put your image/video files under: my-knowledge-base/docs/public/media/home-bg/
// Put your BGM files under: my-knowledge-base/docs/public/media/home-bgm/
const IMAGE_SRC = '/media/home-bg/test1.jpg'
const VIDEO_SRC = ''
const LIQUID_BGM_SRC = '/media/home-bgm/liquid-bgm.flac'

const bgmRef = ref(null)

const isHome = computed(() => route.path === '/')
const isGlassActive = computed(() => isHome.value && homeFxMode.value === 'glass')
const isLiquidActive = computed(() => isHome.value && homeFxMode.value === 'liquid')
const isActive = computed(() => isGlassActive.value || isLiquidActive.value)

const layerStyle = computed(() => ({
  '--home-fx-image': `url("${IMAGE_SRC}")`
}))

function syncHtmlClass() {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('home-glass-mode', isGlassActive.value)
  document.documentElement.classList.toggle('home-liquid-mode', isLiquidActive.value)
}

function syncBgm() {
  const audio = bgmRef.value
  if (!audio) return

  if (isLiquidActive.value) {
    audio.volume = 0.45
    const playPromise = audio.play()
    if (playPromise?.catch) {
      playPromise.catch(() => {})
    }
    return
  }

  audio.pause()
  audio.currentTime = 0
}

onMounted(() => {
  initHomeFxState()
  syncHtmlClass()
  syncBgm()
})

watch([isActive, () => route.path], async () => {
  syncHtmlClass()
  await nextTick()
  syncBgm()
})

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('home-glass-mode')
    document.documentElement.classList.remove('home-liquid-mode')
  }
})
</script>

<template>
  <div
    v-if="isActive"
    class="home-fx-layer"
    :class="{ 'is-liquid': isLiquidActive, 'is-glass': isGlassActive }"
    :style="layerStyle"
    aria-hidden="true"
  >
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
    <div v-if="isLiquidActive" class="home-fx-layer__liquid-aura" />
    <span v-if="isLiquidActive" class="home-fx-blob home-fx-blob--one" />
    <span v-if="isLiquidActive" class="home-fx-blob home-fx-blob--two" />
    <span v-if="isLiquidActive" class="home-fx-blob home-fx-blob--three" />
    <audio ref="bgmRef" preload="auto" loop :src="LIQUID_BGM_SRC" />
  </div>
</template>
