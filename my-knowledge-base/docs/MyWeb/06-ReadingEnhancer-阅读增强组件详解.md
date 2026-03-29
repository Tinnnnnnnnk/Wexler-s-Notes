# ReadingEnhancer.vue 阅读增强组件详解

## 文件概述

**路径**: `D:\Github\Wexler-s-Notes\my-knowledge-base\docs\.vitepress\theme\components\ReadingEnhancer.vue`

**用途**: 这是阅读增强组件，提供阅读进度条、章节导航面板、回到顶部按钮等功能，提升长文档的阅读体验。

---

## 组件功能

| 功能 | 说明 |
|------|------|
| 阅读进度条 | 显示当前页面阅读进度 |
| 章节导航 | 显示页面内的 H2/H3 标题，可点击跳转 |
| 回到顶部 | 滚动回页面顶部 |

---

## 静态常量（第 6-7 行）

```javascript
const STORAGE_KEY = 'wexler.chapterSpotlight.position'     // 章节导航位置存储键
const COLLAPSE_KEY = 'wexler.chapterSpotlight.collapsed'  // 章节导航折叠状态存储键
```

**作用**: 使用 localStorage 保存用户的位置和折叠偏好，提供持久化的用户体验。

---

## 响应式状态（第 9-26 行）

```javascript
const progress = ref(0)              // 阅读进度（0-1）
const showBackToTop = ref(false)     // 是否显示回到顶部按钮
const isBackToTopAnimating = ref(false) // 回到顶部按钮是否在动画中
const navItems = ref([])             // 章节导航项列表
const activeId = ref('')            // 当前激活的章节 ID
const isDocPage = ref(false)         // 是否为文档页面
const isWideScreen = ref(false)      // 是否为宽屏（≥1280px）
const chapterPanel = ref(null)       // 章节导航面板元素引用
const chapterPosition = ref(null)    // 章节导航面板位置
const isDragging = ref(false)        // 是否正在拖拽
const isCollapsed = ref(false)       // 章节导航是否折叠
```

**状态说明**:

| 状态 | 类型 | 初始值 | 用途 |
|------|------|--------|------|
| `progress` | `Ref<number>` | `0` | 0-1 之间的小数，表示阅读进度 |
| `showBackToTop` | `Ref<boolean>` | `false` | 滚动超过 400px 时显示 |
| `chapterPosition` | `Ref<object>` | `null` | 面板位置 `{ left, top }` |
| `isCollapsed` | `Ref<boolean>` | `false` | 面板是否折叠 |

---

## 计算属性（第 28-38 行）

```javascript
// 是否显示进度条
const showProgress = computed(() => isDocPage.value)

// 是否显示章节导航（文档页 + 宽屏 + 有标题）
const showChapterNav = computed(
  () => isDocPage.value && isWideScreen.value && navItems.value.length > 0
)

// 章节导航面板样式
const chapterStyle = computed(() => {
  if (!chapterPosition.value) return null
  return {
    left: `${chapterPosition.value.left}px`,
    top: `${chapterPosition.value.top}px`
  }
})
```

---

## 核心方法

### scrollToTop() - 回到顶部（第 44-51 行）

```javascript
function scrollToTop(smooth = true) {
  if (isBackToTopAnimating.value) return  // 防止重复触发
  isBackToTopAnimating.value = true
  window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'instant' })
  setTimeout(() => {
    isBackToTopAnimating.value = false
  }, 600)
}
```

**功能**: 平滑或立即滚动到页面顶部。

---

### saveChapterPosition() / loadChapterPosition() - 位置持久化（第 59-84 行）

```javascript
// 保存位置到 localStorage
function saveChapterPosition() {
  if (!chapterPosition.value) return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chapterPosition.value))
  } catch (error) {
    // 忽略存储错误（隐私模式或配额不足）
  }
}

// 从 localStorage 加载位置
function loadChapterPosition() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    const parsed = JSON.parse(raw)
    // 验证数据有效性
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
```

---

### clampPosition() - 边界限制（第 108-119 行）

```javascript
function clampPosition(left, top) {
  const { width, height } = getPanelSize()  // 获取面板尺寸
  const margin = 10
  
  // 计算边界值
  const minLeft = margin
  const maxLeft = Math.max(minLeft, window.innerWidth - width - margin)
  const minTop = margin
  const maxTop = Math.max(minTop, window.innerHeight - height - margin)
  
  // 限制在边界内
  return {
    left: clamp(left, minLeft, maxLeft),
    top: clamp(top, minTop, maxTop)
  }
}
```

**作用**: 确保拖拽后的面板位置不会超出视口边界。

---

### collectHeadings() - 收集页面标题（第 192-210 行）

```javascript
function collectHeadings() {
  // 查找文档内容区域
  const docRoot = document.querySelector('.VPDoc .vp-doc')
  if (!docRoot) {
    isDocPage.value = false
    navItems.value = []
    activeId.value = ''
    headingNodes = []
    return
  }

  isDocPage.value = true
  
  // 收集所有 H2 和 H3 标题
  headingNodes = Array.from(docRoot.querySelectorAll('h2[id], h3[id]'))
  
  // 生成导航项列表
  navItems.value = headingNodes.map((node) => ({
    id: node.id,
    level: node.tagName.toLowerCase(),  // 'h2' 或 'h3'
    text: shortText(node.textContent)    // 截断后的文本
  }))
  
  activeId.value = navItems.value[0]?.id || ''
}
```

**关键选择器**: `.VPDoc .vp-doc` 是 VitePress 文档页面的标准结构。

---

### updateProgress() - 更新阅读进度（第 219-236 行）

```javascript
function updateProgress() {
  const docRoot = document.querySelector('.VPDoc .vp-doc')
  if (!docRoot) {
    progress.value = 0
    return
  }

  // 计算文章内容的起止位置
  const articleStart = docRoot.getBoundingClientRect().top + window.scrollY - 96
  const articleEnd = articleStart + docRoot.offsetHeight - window.innerHeight * 0.7

  if (articleEnd <= articleStart) {
    progress.value = 1  // 已滚动到底部
    return
  }

  // 计算进度比例
  const ratio = (window.scrollY - articleStart) / (articleEnd - articleStart)
  progress.value = clamp(ratio, 0, 1)  // 限制在 0-1 之间
}
```

**进度计算逻辑**:
```
progress = (scrollY - articleStart) / (articleEnd - articleStart)

- articleStart: 文章顶部在视口上方 96px 时的滚动位置
- articleEnd: 文章底部在视口 70% 高度时的滚动位置
- scrollY: 当前滚动位置
```

---

### updateActiveHeading() - 更新激活标题（第 238-255 行）

```javascript
function updateActiveHeading() {
  if (!headingNodes.length) {
    activeId.value = ''
    return
  }

  // 标记位置：视口顶部下方 140px
  const marker = window.scrollY + 140
  let current = headingNodes[0]
  
  // 找到当前可见区域的标题
  for (const node of headingNodes) {
    if (node.offsetTop <= marker) {
      current = node
    } else {
      break
    }
  }

  activeId.value = current?.id || ''
}
```

---

### paintActiveHeading() - 高亮激活标题（第 212-217 行）

```javascript
function paintActiveHeading() {
  if (!headingNodes.length) return
  headingNodes.forEach((node) => {
    // 切换 is-reading 类名
    node.classList.toggle('is-reading', node.id === activeId.value)
  })
}
```

**作用**: 在当前可见的标题上添加 `is-reading` 类，实现高亮效果。

---

### 拖拽功能（第 156-190 行）

```javascript
// 停止拖拽
function stopDragging() {
  if (!isDragging.value) return
  isDragging.value = false
  window.removeEventListener('pointermove', handleDragMove)
  window.removeEventListener('pointerup', stopDragging)
  window.removeEventListener('pointercancel', stopDragging)
  saveChapterPosition()  // 保存拖拽后的位置
}

// 处理拖拽移动
function handleDragMove(event) {
  if (!isDragging.value) return
  chapterPosition.value = clampPosition(
    event.clientX - dragOffsetX,
    event.clientY - dragOffsetY
  )
}

// 开始拖拽
function startDragging(event) {
  if (event.button !== 0) return  // 只响应左键点击
  ensureChapterPosition()

  const panel = chapterPanel.value
  if (!panel) return

  const rect = panel.getBoundingClientRect()
  const currentPosition = chapterPosition.value || { left: rect.left, top: rect.top }
  
  // 计算鼠标相对于面板的偏移
  dragOffsetX = event.clientX - currentPosition.left
  dragOffsetY = event.clientY - currentPosition.top
  isDragging.value = true

  // 添加全局事件监听
  window.addEventListener('pointermove', handleDragMove)
  window.addEventListener('pointerup', stopDragging)
  window.addEventListener('pointercancel', stopDragging)
  event.preventDefault()
}
```

**拖拽流程**:
1. `startDragging()`: 记录初始点击位置，启动监听
2. `handleDragMove()`: 实时更新面板位置（限制在边界内）
3. `stopDragging()`: 移除监听，保存位置

---

## 生命周期钩子

### onMounted()（第 277-284 行）

```javascript
onMounted(() => {
  loadChapterPosition()     // 加载保存的位置
  loadCollapseState()       // 加载折叠状态
  reinitializeForRoute()    // 初始化当前路由的内容
  
  // 添加滚动和调整大小监听
  window.addEventListener('scroll', handleScrollOrResize, { passive: true })
  window.addEventListener('resize', handleScrollOrResize, { passive: true })
  window.addEventListener('resize', setWideScreen, { passive: true })
})
```

---

### watch()（第 286-296 行）

```javascript
// 监听路由变化
watch(
  () => route.path,
  () => {
    if (routeTimer) window.clearTimeout(routeTimer)
    // 延迟 90ms 重新初始化（等待页面内容加载）
    routeTimer = window.setTimeout(reinitializeForRoute, 90)
  }
)

// 监听章节导航显示状态
watch(showChapterNav, (visible) => {
  if (visible) ensureChapterPosition()
})
```

---

## 模板结构

### 阅读进度条（第 309-311 行）

```vue
<div v-if="showProgress" class="reading-progress" aria-hidden="true">
  <span class="reading-progress__bar" :style="{ transform: `scaleX(${progress})` }" />
</div>
```

**CSS 实现**:
```css
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 100;
}

.reading-progress__bar {
  height: 100%;
  background: var(--oil-accent);
  transform-origin: left;
  transform: scaleX(0);  /* 从 0% 到 100% */
  transition: transform 0.1s linear;
}
```

---

### 回到顶部按钮（第 313-324 行）

```vue
<Transition name="back-to-top">
  <button
    v-if="showBackToTop && isDocPage"
    class="back-to-top-btn"
    aria-label="返回顶部"
    @click="scrollToTop()"
  >
    <svg class="back-to-top-icon" viewBox="0 0 24 24">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  </button>
</Transition>
```

---

### 章节导航面板（第 326-356 行）

```vue
<aside
  v-if="showChapterNav"
  ref="chapterPanel"
  class="chapter-spotlight"
  :class="{ 'is-dragging': isDragging, 'is-collapsed': isCollapsed }"
  :style="chapterStyle"
  aria-label="章节导航"
>
  <!-- 拖拽区域 / 标题栏 -->
  <div class="chapter-spotlight__drag" @pointerdown="startDragging">
    <p class="chapter-spotlight__title">章节导航</p>
    <button
      class="chapter-spotlight__toggle"
      :class="{ 'is-collapsed': isCollapsed }"
      @pointerdown.stop
      @click.stop="toggleCollapse"
    />
  </div>
  
  <!-- 章节链接列表 -->
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
```

**元素说明**:

| 元素 | 类名 | 说明 |
|------|------|------|
| 容器 | `.chapter-spotlight` | 整个导航面板 |
| 拖拽区 | `.chapter-spotlight__drag` | 面板头部，可拖拽移动 |
| 标题 | `.chapter-spotlight__title` | "章节导航" 文字 |
| 折叠按钮 | `.chapter-spotlight__toggle` | 展开/折叠按钮 |
| 链接列表 | `.chapter-spotlight__body` | H2/H3 标题链接列表 |
| 链接项 | `.chapter-spotlight__link` | 单个章节链接 |
| 激活态 | `.is-active` | 当前可见的章节 |
| 折叠态 | `.is-collapsed` | 面板折叠状态 |
| 拖拽态 | `.is-dragging` | 正在拖拽状态 |

---

## 修改指南

### 修改显示阈值
- 进度条显示阈值：修改 `handleScrollOrResize()` 中的 `window.scrollY > 400`
- 章节导航宽屏阈值：修改 `setWideScreen()` 中的 `min-width: 1280px`

### 修改章节标题截断长度
在 `shortText()` 函数中修改：
```javascript
function shortText(value) {
  const text = (value || '').replace(/\s+/g, ' ').trim()
  if (text.length <= 30) return text  // 改为 30 字符
  return `${text.slice(0, 30)}...`
}
```

### 修改本地存储键名
修改文件开头的常量：
```javascript
const STORAGE_KEY = 'your-prefix.chapterSpotlight.position'
const COLLAPSE_KEY = 'your-prefix.chapterSpotlight.collapsed'
```

---

## 相关文件

| 文件 | 用途 |
|------|------|
| `style.css` | 定义进度条、导航面板样式 |
| `index.js` | 主题入口，注册此组件 |
