<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { homeFxMode, initHomeFxState, toggleHomeFxMode } from './homeFxState'

const isDark = ref(false)
const isTransitioning = ref(false)
const transitionOrigin = ref({ x: '100%', y: '0%' })

function getEventPosition(event, buttonEl) {
  const button = buttonEl ?? event?.currentTarget
  if (!button?.getBoundingClientRect) return { x: '100%', y: '0%' }

  const rect = button.getBoundingClientRect()
  const x = `${((rect.left + rect.width / 2) / window.innerWidth) * 100}%`
  const y = `${((rect.top + rect.height / 2) / window.innerHeight) * 100}%`
  return { x, y }
}

// 常态按钮 - 只切换视觉效果，不切换深色/浅色模式
function setDefault(event) {
  toggleHomeFxMode('default')
}

// 晶透按钮
function toggleGlass(event) {
  transitionOrigin.value = getEventPosition(event)
  toggleHomeFxMode('glass')
}

// 液态按钮
function toggleLiquid(event) {
  transitionOrigin.value = getEventPosition(event)
  toggleHomeFxMode('liquid')
}

function handleSystemDarkModeChange(e) {
  if (e.matches && !isDark.value) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else if (!e.matches && isDark.value) {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
}

// 触发主题切换动画（仅 VitePress 的 VPSwitchAppearance 太阳/月亮开关）
function triggerThemeTransition(event, switchButton) {
  if (isTransitioning.value) return
  isTransitioning.value = true
  transitionOrigin.value = getEventPosition(event, switchButton)
  setTimeout(() => {
    isTransitioning.value = false
  }, 600)
}

// VitePress 使用 button.VPSwitch.VPSwitchAppearance，无 VPNavBarThemeSwitch；大屏在 VPNavBarAppearance，小屏在 VPNavBarExtra 菜单里，故用捕获阶段委托
function onAppearanceSwitchClickCapture(e) {
  const switchBtn = e.target.closest?.('button.VPSwitchAppearance')
  if (!switchBtn) return
  if (e.target.closest('.home-fx-switch')) return
  triggerThemeTransition(e, switchBtn)
}

onMounted(() => {
  initHomeFxState()
  
  isDark.value = document.documentElement.classList.contains('dark')
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', handleSystemDarkModeChange)
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        isDark.value = document.documentElement.classList.contains('dark')
      }
    })
  })
  observer.observe(document.documentElement, { attributes: true })

  document.addEventListener('click', onAppearanceSwitchClickCapture, true)
})

onUnmounted(() => {
  document.removeEventListener('click', onAppearanceSwitchClickCapture, true)
})
</script>

<template>
  <div class="home-fx-switch">
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
  
  <Teleport to="body">
    <div 
      v-if="isTransitioning"
      class="theme-transition-overlay"
      :style="{
        '--transition-origin-x': transitionOrigin.x,
        '--transition-origin-y': transitionOrigin.y
      }"
    />
  </Teleport>
</template>
