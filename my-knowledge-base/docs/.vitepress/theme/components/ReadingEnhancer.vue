<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const STORAGE_KEY = 'wexler.chapterSpotlight.position'
const COLLAPSE_KEY = 'wexler.chapterSpotlight.collapsed'

const progress = ref(0)
const navItems = ref([])
const activeId = ref('')
const isDocPage = ref(false)
const isWideScreen = ref(false)
const chapterPanel = ref(null)
const chapterPosition = ref(null)
const isDragging = ref(false)
const isCollapsed = ref(false)

let dragOffsetX = 0
let dragOffsetY = 0

let headingNodes = []
let rafId = 0
let routeTimer = null

const showProgress = computed(() => isDocPage.value)
const showChapterNav = computed(
  () => isDocPage.value && isWideScreen.value && navItems.value.length > 0
)
const chapterStyle = computed(() => {
  if (!chapterPosition.value) return null
  return {
    left: `${chapterPosition.value.left}px`,
    top: `${chapterPosition.value.top}px`
  }
})

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function shortText(value) {
  const text = (value || '').replace(/\s+/g, ' ').trim()
  if (text.length <= 24) return text
  return `${text.slice(0, 24)}...`
}

function saveChapterPosition() {
  if (!chapterPosition.value) return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chapterPosition.value))
  } catch (error) {
    // Ignore storage errors (private mode or quota).
  }
}

function loadChapterPosition() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    const parsed = JSON.parse(raw)
    if (
      typeof parsed?.left === 'number' &&
      Number.isFinite(parsed.left) &&
      typeof parsed?.top === 'number' &&
      Number.isFinite(parsed.top)
    ) {
      chapterPosition.value = { left: parsed.left, top: parsed.top }
    }
  } catch (error) {
    chapterPosition.value = null
  }
}

function saveCollapseState() {
  try {
    localStorage.setItem(COLLAPSE_KEY, isCollapsed.value ? '1' : '0')
  } catch (error) {
    // Ignore storage errors.
  }
}

function loadCollapseState() {
  try {
    isCollapsed.value = localStorage.getItem(COLLAPSE_KEY) === '1'
  } catch (error) {
    isCollapsed.value = false
  }
}

function getPanelSize() {
  const width = chapterPanel.value?.offsetWidth || 216
  const height = chapterPanel.value?.offsetHeight || 300
  return { width, height }
}

function clampPosition(left, top) {
  const { width, height } = getPanelSize()
  const margin = 10
  const minLeft = margin
  const maxLeft = Math.max(minLeft, window.innerWidth - width - margin)
  const minTop = margin
  const maxTop = Math.max(minTop, window.innerHeight - height - margin)
  return {
    left: clamp(left, minLeft, maxLeft),
    top: clamp(top, minTop, maxTop)
  }
}

function ensureChapterPosition() {
  nextTick(() => {
    if (!showChapterNav.value) return
    const panel = chapterPanel.value
    if (!panel) return

    if (chapterPosition.value) {
      chapterPosition.value = clampPosition(
        chapterPosition.value.left,
        chapterPosition.value.top
      )
      return
    }

    const rect = panel.getBoundingClientRect()
    chapterPosition.value = clampPosition(rect.left, rect.top)
  })
}

function setWideScreen() {
  isWideScreen.value = window.matchMedia('(min-width: 1280px)').matches
  if (chapterPosition.value) {
    chapterPosition.value = clampPosition(
      chapterPosition.value.left,
      chapterPosition.value.top
    )
  }
}

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value
  saveCollapseState()
  ensureChapterPosition()
}

function stopDragging() {
  if (!isDragging.value) return
  isDragging.value = false
  window.removeEventListener('pointermove', handleDragMove)
  window.removeEventListener('pointerup', stopDragging)
  window.removeEventListener('pointercancel', stopDragging)
  saveChapterPosition()
}

function handleDragMove(event) {
  if (!isDragging.value) return
  chapterPosition.value = clampPosition(
    event.clientX - dragOffsetX,
    event.clientY - dragOffsetY
  )
}

function startDragging(event) {
  if (event.button !== 0) return
  ensureChapterPosition()

  const panel = chapterPanel.value
  if (!panel) return

  const rect = panel.getBoundingClientRect()
  const currentPosition = chapterPosition.value || { left: rect.left, top: rect.top }
  dragOffsetX = event.clientX - currentPosition.left
  dragOffsetY = event.clientY - currentPosition.top
  isDragging.value = true

  window.addEventListener('pointermove', handleDragMove)
  window.addEventListener('pointerup', stopDragging)
  window.addEventListener('pointercancel', stopDragging)
  event.preventDefault()
}

function collectHeadings() {
  const docRoot = document.querySelector('.VPDoc .vp-doc')
  if (!docRoot) {
    isDocPage.value = false
    navItems.value = []
    activeId.value = ''
    headingNodes = []
    return
  }

  isDocPage.value = true
  headingNodes = Array.from(docRoot.querySelectorAll('h2[id], h3[id]'))
  navItems.value = headingNodes.map((node) => ({
    id: node.id,
    level: node.tagName.toLowerCase(),
    text: shortText(node.textContent)
  }))
  activeId.value = navItems.value[0]?.id || ''
}

function paintActiveHeading() {
  if (!headingNodes.length) return
  headingNodes.forEach((node) => {
    node.classList.toggle('is-reading', node.id === activeId.value)
  })
}

function updateProgress() {
  const docRoot = document.querySelector('.VPDoc .vp-doc')
  if (!docRoot) {
    progress.value = 0
    return
  }

  const articleStart = docRoot.getBoundingClientRect().top + window.scrollY - 96
  const articleEnd = articleStart + docRoot.offsetHeight - window.innerHeight * 0.7

  if (articleEnd <= articleStart) {
    progress.value = 1
    return
  }

  const ratio = (window.scrollY - articleStart) / (articleEnd - articleStart)
  progress.value = clamp(ratio, 0, 1)
}

function updateActiveHeading() {
  if (!headingNodes.length) {
    activeId.value = ''
    return
  }

  const marker = window.scrollY + 140
  let current = headingNodes[0]
  for (const node of headingNodes) {
    if (node.offsetTop <= marker) {
      current = node
    } else {
      break
    }
  }

  activeId.value = current?.id || ''
}

function handleScrollOrResize() {
  if (rafId) return
  rafId = window.requestAnimationFrame(() => {
    updateProgress()
    updateActiveHeading()
    paintActiveHeading()
    rafId = 0
  })
}

function reinitializeForRoute() {
  nextTick(() => {
    collectHeadings()
    setWideScreen()
    ensureChapterPosition()
    handleScrollOrResize()
  })
}

onMounted(() => {
  loadChapterPosition()
  loadCollapseState()
  reinitializeForRoute()
  window.addEventListener('scroll', handleScrollOrResize, { passive: true })
  window.addEventListener('resize', handleScrollOrResize, { passive: true })
  window.addEventListener('resize', setWideScreen, { passive: true })
})

watch(
  () => route.path,
  () => {
    if (routeTimer) window.clearTimeout(routeTimer)
    routeTimer = window.setTimeout(reinitializeForRoute, 90)
  }
)

watch(showChapterNav, (visible) => {
  if (visible) ensureChapterPosition()
})

onBeforeUnmount(() => {
  if (routeTimer) window.clearTimeout(routeTimer)
  if (rafId) window.cancelAnimationFrame(rafId)
  stopDragging()
  window.removeEventListener('scroll', handleScrollOrResize)
  window.removeEventListener('resize', handleScrollOrResize)
  window.removeEventListener('resize', setWideScreen)
})
</script>

<template>
  <div v-if="showProgress" class="reading-progress" aria-hidden="true">
    <span class="reading-progress__bar" :style="{ transform: `scaleX(${progress})` }" />
  </div>

  <aside
    v-if="showChapterNav"
    ref="chapterPanel"
    class="chapter-spotlight"
    :class="{ 'is-dragging': isDragging, 'is-collapsed': isCollapsed }"
    :style="chapterStyle"
    aria-label="章节导航"
  >
    <div class="chapter-spotlight__drag" @pointerdown="startDragging">
      <p class="chapter-spotlight__title">章节导航</p>
      <button
        class="chapter-spotlight__toggle"
        :class="{ 'is-collapsed': isCollapsed }"
        :aria-label="isCollapsed ? '展开章节导航' : '收起章节导航'"
        type="button"
        @pointerdown.stop
        @click.stop="toggleCollapse"
      />
    </div>
    <div v-show="!isCollapsed" class="chapter-spotlight__body">
      <a
        v-for="item in navItems"
        :key="item.id"
        class="chapter-spotlight__link"
        :class="[`is-${item.level}`, { 'is-active': item.id === activeId }]"
        :href="`#${item.id}`"
      >
        {{ item.text }}
      </a>
    </div>
  </aside>
</template>
