<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'
import { homeFxMode, initHomeFxState, setHomeFxMode } from './homeFxState'

const route = useRoute()
const router = useRouter()
const { page } = useData()

const TRAIL_STORAGE_KEY = 'wexler.readingTrail.v1'
const MAX_RECENT = 18
const CURRENT_HEADING_LIMIT = 18
const RECENT_VISIBLE_LIMIT = 9

const isOpen = ref(false)
const query = ref('')
const activeIndex = ref(0)
const headingItems = ref([])
const trail = ref({ recent: [] })
const inputRef = ref(null)
const isDocPage = ref(false)

let routeTimer = null
let persistTimer = null
let focusTimer = null
let primaryShortcutTimer = null
let lastSnapshotSignature = ''

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function shortText(value, maxLength = 48) {
  const text = String(value || '').replace(/\s+/g, ' ').trim()
  if (!text) return ''
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength)}...`
}

function formatPercent(value) {
  if (!Number.isFinite(value)) return '0%'
  return `${Math.round(clamp(value, 0, 1) * 100)}%`
}

function formatTime(value) {
  if (!Number.isFinite(value)) return '--:--'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '--:--'
  return new Intl.DateTimeFormat('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

function isInputTarget(target) {
  if (!(target instanceof HTMLElement)) return false
  if (target.isContentEditable) return true
  const tag = target.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true
  return Boolean(target.closest('[contenteditable="true"], .home-editor-panel'))
}

function isSearchOverlayOpen() {
  return Boolean(document.querySelector('.VPLocalSearchBox.open, .DocSearch-Container'))
}

function normalizeSnapshot(rawValue) {
  if (!rawValue || typeof rawValue !== 'object') return null
  const path = String(rawValue.path || '').trim()
  if (!path.startsWith('/')) return null

  return {
    path,
    title: shortText(rawValue.title || path, 72),
    excerpt: shortText(rawValue.excerpt || '', 120),
    progress: clamp(Number(rawValue.progress || 0), 0, 1),
    scrollY: Math.max(0, Number(rawValue.scrollY || 0)),
    headingId: String(rawValue.headingId || '').trim(),
    updatedAt: Number(rawValue.updatedAt || Date.now())
  }
}

function getTrailSnapshots() {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(TRAIL_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    const source = Array.isArray(parsed?.recent) ? parsed.recent : []
    return source
      .map((item) => normalizeSnapshot(item))
      .filter(Boolean)
      .slice(0, MAX_RECENT)
  } catch (error) {
    return []
  }
}

function setTrailSnapshots(snapshots) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(TRAIL_STORAGE_KEY, JSON.stringify({
      recent: snapshots.slice(0, MAX_RECENT),
      updatedAt: Date.now()
    }))
  } catch (error) {
    // Ignore storage errors.
  }
}

function loadTrail() {
  trail.value = { recent: getTrailSnapshots() }
}

function collectCurrentHeadings() {
  const docRoot = document.querySelector('.VPDoc .vp-doc')
  if (!(docRoot instanceof HTMLElement)) {
    isDocPage.value = false
    headingItems.value = []
    return
  }

  isDocPage.value = true
  const nodes = Array.from(docRoot.querySelectorAll('h2[id], h3[id], h4[id]'))
  headingItems.value = nodes.slice(0, CURRENT_HEADING_LIMIT).map((node) => {
    const level = node.tagName.toLowerCase()
    return {
      id: node.id,
      title: shortText(node.textContent || node.id, 64),
      level,
      levelLabel: level.toUpperCase()
    }
  })
}

function captureCurrentSnapshot() {
  const docRoot = document.querySelector('.VPDoc .vp-doc')
  if (!(docRoot instanceof HTMLElement)) return null

  const firstHeading = docRoot.querySelector('h1')
  const title = shortText(
    String(page.value?.title || '').trim() || firstHeading?.textContent || route.path,
    72
  )
  const excerpt = shortText(docRoot.querySelector('p')?.textContent || '', 120)

  const headingNodes = Array.from(docRoot.querySelectorAll('h2[id], h3[id], h4[id]'))
  const marker = window.scrollY + 150
  let activeHeadingId = ''
  for (const node of headingNodes) {
    if (node.offsetTop <= marker) {
      activeHeadingId = node.id
    } else {
      break
    }
  }

  const articleStart = docRoot.getBoundingClientRect().top + window.scrollY - 96
  const articleEnd = articleStart + docRoot.offsetHeight - window.innerHeight * 0.72
  const progress =
    articleEnd <= articleStart
      ? 1
      : clamp((window.scrollY - articleStart) / (articleEnd - articleStart), 0, 1)

  return {
    path: route.path,
    title,
    excerpt,
    progress,
    scrollY: Math.round(window.scrollY),
    headingId: activeHeadingId,
    updatedAt: Date.now()
  }
}

function upsertTrailSnapshot(snapshot) {
  if (!snapshot) return

  const signature = [
    snapshot.path,
    Math.round(snapshot.progress * 100),
    snapshot.headingId || '',
    Math.round(snapshot.scrollY / 120)
  ].join('|')

  if (signature === lastSnapshotSignature) return
  lastSnapshotSignature = signature

  const normalized = normalizeSnapshot(snapshot)
  if (!normalized) return

  const existing = trail.value.recent.filter((item) => item.path !== normalized.path)
  const nextRecent = [normalized, ...existing].slice(0, MAX_RECENT)
  trail.value = { recent: nextRecent }
  setTrailSnapshots(nextRecent)
}

function scheduleSnapshotPersist(delay = 220) {
  if (persistTimer) {
    window.clearTimeout(persistTimer)
  }
  persistTimer = window.setTimeout(() => {
    persistTimer = null
    upsertTrailSnapshot(captureCurrentSnapshot())
  }, delay)
}

function restoreSnapshotPosition(snapshot) {
  if (!snapshot) return false

  if (snapshot.headingId) {
    const headingNode = document.getElementById(snapshot.headingId)
    if (headingNode) {
      headingNode.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return true
    }
  }

  if (Number.isFinite(snapshot.scrollY)) {
    window.scrollTo({ top: Math.max(0, snapshot.scrollY), behavior: 'smooth' })
    return true
  }

  return false
}

function navigateWithSnapshot(snapshot) {
  if (!snapshot?.path) return
  const targetPath = snapshot.path

  closePalette()

  if (route.path !== targetPath) {
    router.go(targetPath)
    window.setTimeout(() => restoreSnapshotPosition(snapshot), 220)
    window.setTimeout(() => restoreSnapshotPosition(snapshot), 640)
    return
  }

  restoreSnapshotPosition(snapshot)
}

function jumpToHeading(headingId) {
  if (!headingId) return
  const node = document.getElementById(headingId)
  if (!node) return
  closePalette()
  node.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function openLocalSearch() {
  const trigger = document.querySelector(
    '.VPNavBarSearch .DocSearch-Button, #local-search .DocSearch-Button'
  )
  if (trigger instanceof HTMLElement) {
    trigger.click()
  }
}

function executeAction(action) {
  switch (action) {
    case 'open-search':
      closePalette()
      openLocalSearch()
      return
    case 'scroll-top':
      closePalette()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    case 'mode-default':
      closePalette()
      setHomeFxMode('default')
      return
    case 'mode-glass':
      closePalette()
      setHomeFxMode('glass')
      return
    case 'mode-liquid':
      closePalette()
      setHomeFxMode('liquid')
      return
    default:
      break
  }
}

function getKindLabel(kind) {
  if (kind === 'continue') return '继续'
  if (kind === 'heading') return '章节'
  if (kind === 'recent') return '最近'
  return '操作'
}

const continueSnapshot = computed(() => trail.value.recent[0] || null)

const recentSnapshots = computed(() => {
  return trail.value.recent
    .slice(1)
    .filter((item) => item.path !== route.path)
    .slice(0, RECENT_VISIBLE_LIMIT)
})

const paletteItems = computed(() => {
  const items = []

  if (continueSnapshot.value?.path) {
    items.push({
      id: 'continue-reading',
      kind: 'continue',
      title: `继续阅读：${continueSnapshot.value.title}`,
      meta: `${continueSnapshot.value.path} · ${formatPercent(continueSnapshot.value.progress)} · ${formatTime(continueSnapshot.value.updatedAt)}`,
      keywords: `继续 阅读 ${continueSnapshot.value.title} ${continueSnapshot.value.path}`,
      snapshot: continueSnapshot.value
    })
  }

  headingItems.value.forEach((item) => {
    items.push({
      id: `heading-${item.id}`,
      kind: 'heading',
      title: item.title,
      meta: `当前页章节 · ${item.levelLabel}`,
      keywords: `章节 标题 ${item.title}`,
      headingId: item.id
    })
  })

  recentSnapshots.value.forEach((item) => {
    items.push({
      id: `recent-${item.path}`,
      kind: 'recent',
      title: item.title,
      meta: `${item.path} · ${formatPercent(item.progress)} · ${formatTime(item.updatedAt)}`,
      keywords: `最近 页面 ${item.title} ${item.path}`,
      snapshot: item
    })
  })

  items.push({
    id: 'action-open-search',
    kind: 'action',
    title: '打开站内搜索',
    meta: '调用 VitePress 搜索面板',
    keywords: '搜索 查找 本地搜索',
    action: 'open-search'
  })

  if (isDocPage.value) {
    items.push({
      id: 'action-scroll-top',
      kind: 'action',
      title: '返回页面顶部',
      meta: '当前页快速回到开头',
      keywords: '回到顶部 回顶',
      action: 'scroll-top'
    })
  }

  items.push(
    {
      id: 'action-mode-default',
      kind: 'action',
      title: '风格切换：常态',
      meta: homeFxMode.value === 'default' ? '当前已生效' : '恢复基础样式',
      keywords: '常态 默认 风格',
      action: 'mode-default'
    },
    {
      id: 'action-mode-glass',
      kind: 'action',
      title: '风格切换：晶透',
      meta: homeFxMode.value === 'glass' ? '当前已生效' : '玻璃质感样式',
      keywords: '晶透 玻璃 风格',
      action: 'mode-glass'
    },
    {
      id: 'action-mode-liquid',
      kind: 'action',
      title: '风格切换：液态',
      meta: homeFxMode.value === 'liquid' ? '当前已生效' : '液态视觉样式',
      keywords: '液态 风格',
      action: 'mode-liquid'
    }
  )

  return items
})

const filteredItems = computed(() => {
  const keyword = query.value.trim().toLowerCase()
  if (!keyword) return paletteItems.value
  return paletteItems.value.filter((item) => {
    const bucket = `${item.title} ${item.meta} ${item.keywords || ''}`.toLowerCase()
    return bucket.includes(keyword)
  })
})

const emptyText = computed(() => {
  if (query.value.trim()) {
    return '没有匹配结果，试试输入“章节”“液态”“搜索”等关键词。'
  }
  return '当前没有可执行项。'
})

function syncOpenClass(open) {
  document.documentElement.classList.toggle('has-site-command-palette', open)
}

function openPalette() {
  loadTrail()
  collectCurrentHeadings()
  isOpen.value = true
  query.value = ''
  activeIndex.value = 0
}

function closePalette() {
  isOpen.value = false
}

function executeItem(item) {
  if (!item) return
  if (item.kind === 'continue' || item.kind === 'recent') {
    navigateWithSnapshot(item.snapshot)
    return
  }
  if (item.kind === 'heading') {
    jumpToHeading(item.headingId)
    return
  }
  executeAction(item.action)
}

function moveActive(step) {
  const total = filteredItems.value.length
  if (!total) return
  const next = (activeIndex.value + step + total) % total
  activeIndex.value = next
}

function handleGlobalKeydown(event) {
  const key = String(event.key || '').toLowerCase()
  const hasModifier = event.metaKey || event.ctrlKey
  const isPrimaryOpen = hasModifier && !event.shiftKey && !event.altKey && key === 'k'
  const isFallbackOpen = hasModifier && event.shiftKey && key === 'p'

  if (isPrimaryOpen || isFallbackOpen) {
    if (isInputTarget(event.target)) return

    if (isOpen.value) {
      event.preventDefault()
      closePalette()
      return
    }

    if (isFallbackOpen) {
      event.preventDefault()
      openPalette()
      return
    }

    if (primaryShortcutTimer) {
      window.clearTimeout(primaryShortcutTimer)
    }
    primaryShortcutTimer = window.setTimeout(() => {
      primaryShortcutTimer = null
      if (isSearchOverlayOpen()) return
      openPalette()
    }, 0)
    return
  }

  if (!isOpen.value) return

  if (event.key === 'Escape') {
    event.preventDefault()
    closePalette()
    return
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    moveActive(1)
    return
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    moveActive(-1)
    return
  }

  if (event.key === 'Enter') {
    event.preventDefault()
    executeItem(filteredItems.value[activeIndex.value])
  }
}

function handleScrollOrResize() {
  if (!isDocPage.value) return
  scheduleSnapshotPersist(220)
}

function handleStorage(event) {
  if (event.key !== TRAIL_STORAGE_KEY) return
  loadTrail()
}

watch(
  () => route.path,
  () => {
    if (routeTimer) {
      window.clearTimeout(routeTimer)
    }
    routeTimer = window.setTimeout(() => {
      routeTimer = null
      collectCurrentHeadings()
      scheduleSnapshotPersist(320)
      if (isOpen.value) {
        query.value = ''
        activeIndex.value = 0
      }
    }, 120)
  }
)

watch(isOpen, (open) => {
  syncOpenClass(open)
  if (focusTimer) {
    window.clearTimeout(focusTimer)
    focusTimer = null
  }
  if (!open) return
  focusTimer = window.setTimeout(() => {
    focusTimer = null
    inputRef.value?.focus()
    inputRef.value?.select()
  }, 10)
})

watch(
  () => filteredItems.value.length,
  (length) => {
    if (!length) {
      activeIndex.value = 0
      return
    }
    activeIndex.value = clamp(activeIndex.value, 0, length - 1)
  }
)

onMounted(async () => {
  initHomeFxState()
  loadTrail()
  await nextTick()
  collectCurrentHeadings()
  scheduleSnapshotPersist(360)

  window.addEventListener('scroll', handleScrollOrResize, { passive: true })
  window.addEventListener('resize', handleScrollOrResize, { passive: true })
  window.addEventListener('keydown', handleGlobalKeydown)
  window.addEventListener('storage', handleStorage)
})

onBeforeUnmount(() => {
  if (routeTimer) window.clearTimeout(routeTimer)
  if (persistTimer) window.clearTimeout(persistTimer)
  if (focusTimer) window.clearTimeout(focusTimer)
  if (primaryShortcutTimer) window.clearTimeout(primaryShortcutTimer)
  syncOpenClass(false)

  window.removeEventListener('scroll', handleScrollOrResize)
  window.removeEventListener('resize', handleScrollOrResize)
  window.removeEventListener('keydown', handleGlobalKeydown)
  window.removeEventListener('storage', handleStorage)
})
</script>

<template>
  <button
    type="button"
    class="site-command-trigger"
    aria-label="打开快捷面板"
    title="快捷面板（Ctrl/Cmd+K，备用：Ctrl/Cmd+Shift+P）"
    @click="openPalette"
  >
    <span class="site-command-trigger__icon" aria-hidden="true" />
    <span class="site-command-trigger__text">快捷面板</span>
    <span class="site-command-trigger__hotkey">Ctrl/Cmd + K</span>
  </button>

  <Teleport to="body">
    <Transition name="site-command-palette-fade">
      <div
        v-if="isOpen"
        class="site-command-palette"
        role="dialog"
        aria-modal="true"
        aria-label="快捷命令面板"
        @click.self="closePalette"
      >
        <section class="site-command-palette__panel">
          <header class="site-command-palette__header">
            <div class="site-command-palette__search-wrap">
              <span class="site-command-palette__search-icon" aria-hidden="true" />
              <input
                ref="inputRef"
                v-model="query"
                class="site-command-palette__input"
                type="text"
                autocomplete="off"
                spellcheck="false"
                placeholder="输入关键词：页面、章节、风格、搜索..."
                aria-label="搜索快捷命令"
              >
            </div>
            <p class="site-command-palette__hint">
              ↑/↓ 选择 · Enter 执行 · Esc 关闭
            </p>
          </header>

          <ul v-if="filteredItems.length" class="site-command-palette__list">
            <li v-for="(item, index) in filteredItems" :key="item.id">
              <button
                type="button"
                class="site-command-palette__item"
                :class="{ 'is-active': index === activeIndex }"
                @mouseenter="activeIndex = index"
                @click="executeItem(item)"
              >
                <span class="site-command-palette__item-badge">{{ getKindLabel(item.kind) }}</span>
                <span class="site-command-palette__item-main">
                  <strong class="site-command-palette__item-title">{{ item.title }}</strong>
                  <small class="site-command-palette__item-meta">{{ item.meta }}</small>
                </span>
              </button>
            </li>
          </ul>

          <p v-else class="site-command-palette__empty">{{ emptyText }}</p>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>
