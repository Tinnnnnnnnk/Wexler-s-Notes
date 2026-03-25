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
const LIQUID_HERO_LABEL = 'Digital Garden'
const LIQUID_HERO_TITLE = "Wexler's Notes"
const LIQUID_HERO_SUBTITLE = '\u5168\u6808\u5f00\u53d1\u4e0e\u8fd0\u7ef4\u77e5\u8bc6\u5e93'

const bgmRef = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const isSeeking = ref(false)
const volume = ref(0.45)
const isMiniPlayer = ref(false)
const isVolumePanelVisible = ref(false)

const isHome = computed(() => route.path === '/')
const isSkyTakeOut = computed(() => route.path.startsWith('/Sky-Take-Out/'))

/** 首页 / 知识库 的晶透或液态背景层 */
const isGlassActive = computed(() => (isHome.value || isSkyTakeOut.value) && homeFxMode.value === 'glass')
const isLiquidActive = computed(() => (isHome.value || isSkyTakeOut.value) && homeFxMode.value === 'liquid')
const isActive = computed(() => isGlassActive.value || isLiquidActive.value)

/** 仅首页液态：介绍文案与音乐播放器 */
const isLiquidHomeStage = computed(() => isHome.value && homeFxMode.value === 'liquid')

/** 仅首页液态：背景音乐逻辑与 <audio> */
const isLiquidHomeBgm = computed(() => isHome.value && homeFxMode.value === 'liquid')
const isMuted = computed(() => volume.value <= 0.001)
const volumePercent = computed(() => Math.round(volume.value * 100))

const layerStyle = computed(() => ({
  '--home-fx-image': `url("${IMAGE_SRC}")`
}))

function syncHtmlClass() {
  if (typeof document === 'undefined') return

  const mode = homeFxMode.value
  document.documentElement.classList.toggle('home-default-mode', isHome.value && mode === 'default')
  document.documentElement.classList.toggle('home-glass-mode', isHome.value && mode === 'glass')
  document.documentElement.classList.toggle('home-liquid-mode', isHome.value && mode === 'liquid')

  document.documentElement.classList.toggle('sky-default-mode', isSkyTakeOut.value && mode === 'default')
  document.documentElement.classList.toggle('sky-glass-mode', isSkyTakeOut.value && mode === 'glass')
  document.documentElement.classList.toggle('sky-liquid-mode', isSkyTakeOut.value && mode === 'liquid')
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

  if (isLiquidHomeBgm.value) {
    setVolume(volume.value)
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
  if (isMiniPlayer.value) {
    isVolumePanelVisible.value = false
  }
}

function toggleVolumePanel() {
  if (isMiniPlayer.value) return
  isVolumePanelVisible.value = !isVolumePanelVisible.value
}

function seekBy(deltaSeconds) {
  const audio = bgmRef.value
  if (!audio) return
  const maxDuration = Number.isFinite(audio.duration) ? audio.duration : 0
  const target = clamp((Number.isFinite(audio.currentTime) ? audio.currentTime : 0) + deltaSeconds, 0, maxDuration)
  audio.currentTime = target
  currentTime.value = target
}

onMounted(async () => {
  initHomeFxState()
  syncHtmlClass()
  setVolume(volume.value)
  await nextTick()
  syncBgm()
})

watch([() => homeFxMode.value, () => route.path], async () => {
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
  isVolumePanelVisible.value = false

  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('home-default-mode')
    document.documentElement.classList.remove('home-glass-mode')
    document.documentElement.classList.remove('home-liquid-mode')
    document.documentElement.classList.remove('sky-default-mode')
    document.documentElement.classList.remove('sky-glass-mode')
    document.documentElement.classList.remove('sky-liquid-mode')
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
  </div>

  <div v-if="isLiquidHomeStage" class="home-liquid-stage">
    <section class="home-liquid-intro-card" aria-label="Site introduction">
      <p class="home-liquid-intro-card__kicker">{{ LIQUID_HERO_LABEL }}</p>
      <h1 class="home-liquid-intro-card__title">{{ LIQUID_HERO_TITLE }}</h1>
      <p class="home-liquid-intro-card__lead">{{ LIQUID_HERO_SUBTITLE }}</p>
    </section>

    <div
      class="home-liquid-player"
      :class="{ 'is-mini': isMiniPlayer }"
      role="group"
      aria-label="Background music controls"
    >
      <div class="home-liquid-player__top">
        <button
          type="button"
          class="home-liquid-player__mini-toggle"
          :aria-label="isMiniPlayer ? 'Expand player' : 'Minimize player'"
          @click="toggleMiniPlayer"
        >
          <span class="home-liquid-player__mini-icon" :class="{ 'is-mini': isMiniPlayer }" />
        </button>

        <div class="home-liquid-player__transport">
          <button
            type="button"
            class="home-liquid-player__ctrl"
            aria-label="Back 10 seconds"
            @click="seekBy(-10)"
          >
            <span class="home-liquid-player__ctrl-icon home-liquid-player__ctrl-icon--back" />
          </button>
          <button
            type="button"
            class="home-liquid-player__ctrl home-liquid-player__ctrl--main"
            :aria-label="isPlaying ? 'Pause background music' : 'Play background music'"
            @click="togglePlay"
          >
            <span v-if="isPlaying" class="home-liquid-player__pause-icon" />
            <span v-else class="home-liquid-player__play-icon" />
          </button>
          <button
            type="button"
            class="home-liquid-player__ctrl"
            aria-label="Forward 10 seconds"
            @click="seekBy(10)"
          >
            <span class="home-liquid-player__ctrl-icon home-liquid-player__ctrl-icon--forward" />
          </button>
        </div>

        <button
          type="button"
          class="home-liquid-player__volume-toggle"
          :class="{ 'is-active': isVolumePanelVisible }"
          aria-label="Toggle volume controls"
          @click="toggleVolumePanel"
        >
          <span class="home-liquid-player__volume-icon" :class="{ 'is-muted': isMuted }" aria-hidden="true" />
        </button>
      </div>

      <p v-show="!isMiniPlayer" class="home-liquid-player__track">
        {{ LIQUID_BGM_TITLE }} · {{ LIQUID_BGM_ARTIST }}
      </p>

      <div class="home-liquid-player__timeline">
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

      <div v-show="isVolumePanelVisible && !isMiniPlayer" class="home-liquid-player__volume">
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
  </div>

  <audio
    v-if="isLiquidHomeBgm"
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
</template>
