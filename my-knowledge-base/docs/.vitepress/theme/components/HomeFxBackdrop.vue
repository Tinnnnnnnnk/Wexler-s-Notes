<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import { homeFxMode, initHomeFxState } from './homeFxState'

const route = useRoute()

// Place custom backgrounds in: my-knowledge-base/docs/public/media/home-bg/
// Place custom BGM in: my-knowledge-base/docs/public/media/home-bgm/
const IMAGE_SRC = '/media/home-bg/test1.jpg'
const VIDEO_SRC = ''
const LIQUID_BGM_SRC = '/media/home-bgm/liquid-bgm.flac'
const LIQUID_BGM_TITLE = '60% Reverie'
const LIQUID_BGM_ARTIST = 'ZZ-STUDIO x HOYO-MiX'

const bgmRef = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const isSeeking = ref(false)
const volume = ref(0.45)
const isMiniPlayer = ref(false)

const isHome = computed(() => route.path === '/')
const isGlassActive = computed(() => isHome.value && homeFxMode.value === 'glass')
const isLiquidActive = computed(() => isHome.value && homeFxMode.value === 'liquid')
const isActive = computed(() => isGlassActive.value || isLiquidActive.value)
const isMuted = computed(() => volume.value <= 0.001)
const volumePercent = computed(() => Math.round(volume.value * 100))

const layerStyle = computed(() => ({
  '--home-fx-image': `url("${IMAGE_SRC}")`
}))

function syncHtmlClass() {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('home-glass-mode', isGlassActive.value)
  document.documentElement.classList.toggle('home-liquid-mode', isLiquidActive.value)
}

function formatDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function setVolume(nextValue) {
  const resolved = clamp(Number.isFinite(nextValue) ? nextValue : volume.value, 0, 1)
  volume.value = resolved

  const audio = bgmRef.value
  if (!audio) return
  audio.volume = resolved
  audio.muted = resolved <= 0.001
}

function syncPlaybackState() {
  const audio = bgmRef.value
  if (!audio) return

  isPlaying.value = !audio.paused && !audio.ended
  duration.value = Number.isFinite(audio.duration) ? audio.duration : 0

  if (!isSeeking.value) {
    currentTime.value = Number.isFinite(audio.currentTime) ? audio.currentTime : 0
  }
}

function syncBgm() {
  const audio = bgmRef.value
  if (!audio) return

  if (isLiquidActive.value) {
    setVolume(volume.value)
    const playPromise = audio.play()
    if (playPromise?.catch) {
      playPromise.catch(() => {
        // Browser blocked autoplay; user can press play.
      })
    }
    syncPlaybackState()
    return
  }

  audio.pause()
  audio.currentTime = 0
  syncPlaybackState()
}

function togglePlay() {
  const audio = bgmRef.value
  if (!audio) return

  if (audio.paused || audio.ended) {
    const playPromise = audio.play()
    if (playPromise?.catch) {
      playPromise.catch(() => {})
    }
    return
  }

  audio.pause()
}

function handleSeekInput(event) {
  const value = Number(event.target.value)
  currentTime.value = Number.isFinite(value) ? value : 0
  isSeeking.value = true
}

function handleSeekCommit(event) {
  const audio = bgmRef.value
  if (!audio) return

  const value = Number(event.target.value)
  audio.currentTime = Number.isFinite(value) ? value : 0
  currentTime.value = audio.currentTime
  isSeeking.value = false
}

function handleVolumeInput(event) {
  const value = Number(event.target.value)
  const percent = Number.isFinite(value) ? value : volumePercent.value
  setVolume(percent / 100)
}

function toggleMiniPlayer() {
  isMiniPlayer.value = !isMiniPlayer.value
}

onMounted(async () => {
  initHomeFxState()
  syncHtmlClass()
  setVolume(volume.value)
  await nextTick()
  syncBgm()
})

watch([isActive, () => route.path], async () => {
  syncHtmlClass()
  await nextTick()
  syncBgm()
})

onBeforeUnmount(() => {
  const audio = bgmRef.value
  if (audio) {
    audio.pause()
    audio.currentTime = 0
  }

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

  <div
    v-if="isLiquidActive"
    class="home-liquid-player"
    :class="{ 'is-mini': isMiniPlayer }"
    role="group"
    aria-label="Background music controls"
  >
    <div class="home-liquid-player__head">
      <div class="home-liquid-player__meta">
        <span class="home-liquid-player__orb" aria-hidden="true" />
        <div>
          <p class="home-liquid-player__title">{{ LIQUID_BGM_TITLE }}</p>
          <p class="home-liquid-player__artist">{{ LIQUID_BGM_ARTIST }}</p>
        </div>
      </div>
      <div class="home-liquid-player__actions">
        <button
          type="button"
          class="home-liquid-player__mini-toggle"
          :aria-label="isMiniPlayer ? 'Expand player' : 'Minimize player'"
          @click="toggleMiniPlayer"
        >
          <span class="home-liquid-player__mini-icon" :class="{ 'is-mini': isMiniPlayer }" />
        </button>
        <button
          type="button"
          class="home-liquid-player__play"
          :aria-label="isPlaying ? 'Pause background music' : 'Play background music'"
          @click="togglePlay"
        >
          <span v-if="isPlaying" class="home-liquid-player__pause-icon" />
          <span v-else class="home-liquid-player__play-icon" />
        </button>
      </div>
    </div>

    <div v-show="!isMiniPlayer" class="home-liquid-player__timeline">
      <span class="home-liquid-player__time">{{ formatDuration(currentTime) }}</span>
      <input
        class="home-liquid-player__slider"
        type="range"
        min="0"
        :max="Math.max(duration, 0.1)"
        :value="currentTime"
        step="0.1"
        aria-label="Seek background music"
        @input="handleSeekInput"
        @change="handleSeekCommit"
      />
      <span class="home-liquid-player__time">{{ formatDuration(duration) }}</span>
    </div>

    <div v-show="!isMiniPlayer" class="home-liquid-player__volume">
      <span class="home-liquid-player__volume-icon" :class="{ 'is-muted': isMuted }" aria-hidden="true" />
      <input
        class="home-liquid-player__volume-slider"
        type="range"
        min="0"
        max="100"
        :value="volumePercent"
        step="1"
        aria-label="Background music volume"
        @input="handleVolumeInput"
      />
      <span class="home-liquid-player__volume-value">{{ volumePercent }}</span>
    </div>
  </div>

  <audio
    v-if="isActive"
    ref="bgmRef"
    preload="metadata"
    loop
    :src="LIQUID_BGM_SRC"
    @play="syncPlaybackState"
    @pause="syncPlaybackState"
    @timeupdate="syncPlaybackState"
    @loadedmetadata="syncPlaybackState"
    @ended="syncPlaybackState"
  />
  </div>
</template>
