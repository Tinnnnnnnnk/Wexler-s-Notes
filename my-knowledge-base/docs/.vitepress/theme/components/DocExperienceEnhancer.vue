<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const route = useRoute()
const { page } = useData()

const DOC_META_ID = 'doc-meta-strip'
const CODE_ENHANCED_ATTR = 'data-docxp-code-enhanced'
const LIGHTBOX_TARGET_CLASS = 'doc-lightbox-target'

const isDocPage = ref(false)
const lightboxOpen = ref(false)
const lightboxItems = ref([])
const lightboxIndex = ref(0)

let routeTimer = null
let postTimer = null

const activeLightboxItem = computed(() => lightboxItems.value[lightboxIndex.value] || null)
const hasMultipleImages = computed(() => lightboxItems.value.length > 1)

const LANGUAGE_LABELS = {
  js: 'JavaScript',
  javascript: 'JavaScript',
  ts: 'TypeScript',
  typescript: 'TypeScript',
  vue: 'Vue',
  html: 'HTML',
  css: 'CSS',
  scss: 'SCSS',
  less: 'Less',
  bash: 'Bash',
  sh: 'Shell',
  shell: 'Shell',
  powershell: 'PowerShell',
  yaml: 'YAML',
  yml: 'YAML',
  json: 'JSON',
  java: 'Java',
  sql: 'SQL',
  md: 'Markdown',
  markdown: 'Markdown',
  text: 'Text',
  txt: 'Text',
  xml: 'XML',
  go: 'Go',
  c: 'C',
  cpp: 'C++',
  csharp: 'C#',
  cs: 'C#',
  python: 'Python',
  py: 'Python',
  rust: 'Rust',
  php: 'PHP'
}

function formatDateString(value) {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date)
}

function readLastUpdatedText() {
  const pageValue = page.value || {}
  const pageLastUpdated = pageValue.lastUpdated
  if (typeof pageLastUpdated === 'number') {
    const text = formatDateString(pageLastUpdated)
    if (text) return text
  }
  if (typeof pageLastUpdated === 'string') {
    const text = formatDateString(pageLastUpdated)
    if (text) return text
  }

  const domLastUpdated = document.querySelector('.VPLastUpdated time')?.getAttribute('datetime')
  const domText = formatDateString(domLastUpdated)
  if (domText) return domText

  return ''
}

function countReadableTokens(text) {
  if (typeof text !== 'string' || !text.trim()) {
    return 0
  }

  const compact = text.replace(/\s+/g, ' ').trim()
  const cjkMatches = compact.match(/[\u3400-\u9FFF]/g) || []
  const latinMatches = compact.match(/[A-Za-z0-9_]+/g) || []
  return cjkMatches.length + latinMatches.length
}

function formatTokenCount(count) {
  if (count >= 10000) {
    return `${(count / 10000).toFixed(1)}w`
  }
  return String(count)
}

function estimateReadMinutes(tokens) {
  const base = Math.max(1, Math.ceil(tokens / 320))
  return base
}

function upsertMetaStrip(docRoot) {
  const firstHeading = docRoot.querySelector('h1')
  if (!firstHeading) return

  const textNodes = Array.from(
    docRoot.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, th, summary, blockquote')
  ).filter((node) => !node.closest(`#${DOC_META_ID}`))
  const articleText = textNodes.map((node) => node.textContent || '').join(' ')
  const tokens = countReadableTokens(articleText)
  const minutes = estimateReadMinutes(tokens)
  const updatedAt = readLastUpdatedText()

  let strip = docRoot.querySelector(`#${DOC_META_ID}`)
  if (!strip) {
    strip = document.createElement('div')
    strip.id = DOC_META_ID
    strip.className = 'doc-meta-strip'
    firstHeading.insertAdjacentElement('afterend', strip)
  }

  const updatedText = updatedAt || '无更新时间'
  strip.innerHTML = `
    <span class="doc-meta-chip">
      <strong>${minutes}</strong>
      <em>分钟阅读</em>
    </span>
    <span class="doc-meta-chip">
      <strong>${formatTokenCount(tokens)}</strong>
      <em>字数统计</em>
    </span>
    <span class="doc-meta-chip">
      <strong>${updatedText}</strong>
      <em>最近更新</em>
    </span>
  `
}

function detectLanguage(block) {
  const rawLang =
    block.querySelector('.lang')?.textContent?.trim() ||
    Array.from(block.classList)
      .find((name) => name.startsWith('language-'))
      ?.slice('language-'.length) ||
    'text'

  const normalized = rawLang.toLowerCase()
  return LANGUAGE_LABELS[normalized] || rawLang.toUpperCase()
}

async function copyToClipboard(text) {
  if (!text) return false
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch (error) {
    // fallback below
  }

  try {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    textarea.style.pointerEvents = 'none'
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    const ok = document.execCommand('copy')
    textarea.remove()
    return ok
  } catch (error) {
    return false
  }
}

function enhanceSingleCodeBlock(block) {
  if (!(block instanceof HTMLElement)) return
  if (block.getAttribute(CODE_ENHANCED_ATTR) === '1') return
  block.setAttribute(CODE_ENHANCED_ATTR, '1')

  const lang = detectLanguage(block)
  const langNode = block.querySelector('.lang')
  if (langNode) {
    langNode.textContent = lang
    langNode.setAttribute('title', `语言：${lang}`)
  }

  const actions = document.createElement('div')
  actions.className = 'doc-code-actions'

  const copyBtn = document.createElement('button')
  copyBtn.type = 'button'
  copyBtn.className = 'doc-code-copy'
  copyBtn.textContent = '复制'
  copyBtn.setAttribute('aria-label', '复制代码')

  copyBtn.addEventListener('click', async () => {
    const codeText = block.querySelector('pre code')?.textContent || ''
    const copied = await copyToClipboard(codeText)
    copyBtn.classList.toggle('is-copied', copied)
    copyBtn.textContent = copied ? '已复制' : '复制失败'
    window.setTimeout(() => {
      copyBtn.classList.remove('is-copied')
      copyBtn.textContent = '复制'
    }, 1300)
  })

  actions.appendChild(copyBtn)
  block.appendChild(actions)

  block.addEventListener('click', (event) => {
    const target = event.target
    if (!(target instanceof HTMLElement)) return
    const line = target.closest('.line')
    if (!line || !block.contains(line)) return

    const current = block.querySelector('.line.is-focused')
    if (current && current !== line) {
      current.classList.remove('is-focused')
    }
    line.classList.toggle('is-focused')
  })
}

function enhanceCodeBlocks(docRoot) {
  const blocks = docRoot.querySelectorAll('div[class*="language-"]')
  blocks.forEach((block) => enhanceSingleCodeBlock(block))
}

function refreshLightboxTargets(docRoot) {
  const images = Array.from(docRoot.querySelectorAll('img')).filter((img) => {
    if (!(img instanceof HTMLImageElement)) return false
    if (img.closest('a')) return false
    return Boolean(img.getAttribute('src'))
  })

  lightboxItems.value = images.map((img, index) => {
    const src = img.currentSrc || img.getAttribute('src') || ''
    const alt = img.getAttribute('alt') || `图片 ${index + 1}`

    img.classList.add(LIGHTBOX_TARGET_CLASS)
    img.setAttribute('tabindex', '0')
    img.setAttribute('role', 'button')
    img.setAttribute('aria-label', `预览图片：${alt}`)
    img.setAttribute('data-doc-lightbox-index', String(index))

    return {
      src,
      alt
    }
  })
}

function openLightbox(index) {
  if (!lightboxItems.value.length) return
  const safeIndex = Math.max(0, Math.min(index, lightboxItems.value.length - 1))
  lightboxIndex.value = safeIndex
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function showPrevImage() {
  if (!hasMultipleImages.value) return
  lightboxIndex.value =
    (lightboxIndex.value - 1 + lightboxItems.value.length) % lightboxItems.value.length
}

function showNextImage() {
  if (!hasMultipleImages.value) return
  lightboxIndex.value = (lightboxIndex.value + 1) % lightboxItems.value.length
}

function handleDocClick(event) {
  if (lightboxOpen.value) return
  const target = event.target
  if (!(target instanceof HTMLElement)) return
  const image = target.closest(`.vp-doc img.${LIGHTBOX_TARGET_CLASS}`)
  if (!image) return

  const index = Number(image.getAttribute('data-doc-lightbox-index'))
  if (!Number.isFinite(index) || index < 0) return
  event.preventDefault()
  openLightbox(index)
}

function handleKeydown(event) {
  if (lightboxOpen.value) {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeLightbox()
      return
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevImage()
      return
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNextImage()
      return
    }
    return
  }

  if (event.key !== 'Enter' && event.key !== ' ') return
  const target = event.target
  if (!(target instanceof HTMLElement)) return
  const image = target.closest(`.vp-doc img.${LIGHTBOX_TARGET_CLASS}`)
  if (!image) return

  const index = Number(image.getAttribute('data-doc-lightbox-index'))
  if (!Number.isFinite(index) || index < 0) return
  event.preventDefault()
  openLightbox(index)
}

function runEnhancement() {
  const docRoot = document.querySelector('.VPDoc .vp-doc')
  if (!(docRoot instanceof HTMLElement)) {
    isDocPage.value = false
    lightboxItems.value = []
    return
  }

  isDocPage.value = true
  upsertMetaStrip(docRoot)
  enhanceCodeBlocks(docRoot)
  refreshLightboxTargets(docRoot)
}

function scheduleEnhancement() {
  if (routeTimer) {
    window.clearTimeout(routeTimer)
    routeTimer = null
  }
  if (postTimer) {
    window.clearTimeout(postTimer)
    postTimer = null
  }

  routeTimer = window.setTimeout(() => {
    runEnhancement()
    postTimer = window.setTimeout(() => {
      runEnhancement()
      postTimer = null
    }, 180)
  }, 90)
}

watch(
  () => route.path,
  () => {
    closeLightbox()
    nextTick(() => scheduleEnhancement())
  }
)

watch(lightboxOpen, (open) => {
  document.documentElement.classList.toggle('has-doc-lightbox', open)
})

onMounted(() => {
  document.addEventListener('click', handleDocClick)
  document.addEventListener('keydown', handleKeydown)
  scheduleEnhancement()
})

onBeforeUnmount(() => {
  if (routeTimer) window.clearTimeout(routeTimer)
  if (postTimer) window.clearTimeout(postTimer)
  document.removeEventListener('click', handleDocClick)
  document.removeEventListener('keydown', handleKeydown)
  document.documentElement.classList.remove('has-doc-lightbox')
})
</script>

<template>
  <Teleport to="body">
    <Transition name="doc-lightbox-fade">
      <div
        v-if="isDocPage && lightboxOpen && activeLightboxItem"
        class="doc-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="图片预览"
        @click.self="closeLightbox"
      >
        <div class="doc-lightbox__panel">
          <button
            type="button"
            class="doc-lightbox__close"
            aria-label="关闭预览"
            @click="closeLightbox"
          >
            ×
          </button>

          <div class="doc-lightbox__frame">
            <img
              class="doc-lightbox__img"
              :src="activeLightboxItem.src"
              :alt="activeLightboxItem.alt"
            >
          </div>

          <p class="doc-lightbox__caption">
            {{ activeLightboxItem.alt }}
            <span v-if="lightboxItems.length > 1" class="doc-lightbox__counter">
              {{ lightboxIndex + 1 }} / {{ lightboxItems.length }}
            </span>
          </p>

          <button
            v-if="hasMultipleImages"
            type="button"
            class="doc-lightbox__nav doc-lightbox__nav--prev"
            aria-label="上一张"
            @click="showPrevImage"
          >
            ‹
          </button>
          <button
            v-if="hasMultipleImages"
            type="button"
            class="doc-lightbox__nav doc-lightbox__nav--next"
            aria-label="下一张"
            @click="showNextImage"
          >
            ›
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
