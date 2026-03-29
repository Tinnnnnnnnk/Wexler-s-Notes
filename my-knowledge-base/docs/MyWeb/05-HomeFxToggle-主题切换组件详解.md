# HomeFxToggle.vue 主题切换组件详解

## 文件概述

**路径**: `D:\Github\Wexler-s-Notes\my-knowledge-base\docs\.vitepress\theme\components\HomeFxToggle.vue`

**用途**: 这是主题切换按钮组件，提供三种视觉模式的切换：常态（Default）、晶透（Glass）、液态（Liquid）。

---

## 组件功能

### 三种模式说明

| 模式 | 英文名 | 类名 | 效果 |
|------|--------|------|------|
| 常态 | Default | `home-default-mode` | 默认的油画冷色调背景 |
| 晶透 | Glass | `home-glass-mode` | 毛玻璃效果，半透明背景 |
| 液态 | Liquid | `home-liquid-mode` | 流动的液态背景 + 背景音乐 |

---

## 代码详解

### 响应式状态（第 5-7 行）

```javascript
const isDark = ref(false)              // 是否为深色模式
const isTransitioning = ref(false)     // 是否正在切换主题（播放动画）
const transitionOrigin = ref({ x: '100%', y: '0%' }) // 动画起点位置
```

### getEventPosition() - 获取点击位置（第 9-17 行）

```javascript
function getEventPosition(event, buttonEl) {
  // 获取按钮元素
  const button = buttonEl ?? event?.currentTarget
  
  // 如果无法获取按钮位置，返回默认值（右上角）
  if (!button?.getBoundingClientRect) return { x: '100%', y: '0%' }

  // 计算点击位置相对于视口的百分比
  const rect = button.getBoundingClientRect()
  const x = `${((rect.left + rect.width / 2) / window.innerWidth) * 100}%`
  const y = `${((rect.top + rect.height / 2) / window.innerHeight) * 100}%`
  return { x, y }
}
```

**用途**: 计算鼠标点击位置，用于主题切换动画的圆心位置。

---

### 模式切换函数（第 19-34 行）

```javascript
// 常态模式 - 只切换视觉效果，不切换深色/浅色模式
function setDefault(event) {
  toggleHomeFxMode('default')
}

// 晶透模式 - 毛玻璃效果
function toggleGlass(event) {
  transitionOrigin.value = getEventPosition(event)
  toggleHomeFxMode('glass')
}

// 液态模式 - 流动背景效果
function toggleLiquid(event) {
  transitionOrigin.value = getEventPosition(event)
  toggleHomeFxMode('liquid')
}
```

---

### 主题切换动画触发（第 46-54 行）

```javascript
// 触发主题切换动画（仅 VitePress 的 VPSwitchAppearance 太阳/月亮开关）
function triggerThemeTransition(event, switchButton) {
  if (isTransitioning.value) return  // 防止重复触发
  isTransitioning.value = true
  transitionOrigin.value = getEventPosition(event, switchButton)
  setTimeout(() => {
    isTransitioning.value = false  // 600ms 后关闭动画
  }, 600)
}
```

---

### 导航栏主题开关事件监听（第 56-62 行）

```javascript
// VitePress 使用 button.VPSwitch.VPSwitchAppearance
// 大屏在 VPNavBarAppearance，小屏在 VPNavBarExtra 菜单里
// 使用捕获阶段委托来处理点击事件
function onAppearanceSwitchClickCapture(e) {
  const switchBtn = e.target.closest?.('button.VPSwitchAppearance')
  if (!switchBtn) return
  if (e.target.closest('.home-fx-switch')) return  // 排除自己的按钮
  triggerThemeTransition(e, switchBtn)
}
```

**技术要点**:
- 使用 `click` 事件的**捕获阶段**（第三个参数 `true`）
- `closest()` 方法查找最近的匹配选择器的祖先元素
- 排除 `.home-fx-switch` 内的点击，避免重复触发

---

### onMounted() - 初始化（第 64-82 行）

```javascript
onMounted(() => {
  initHomeFxState()  // 从 localStorage 恢复主题状态
  
  // 检查当前是否为深色模式
  isDark.value = document.documentElement.classList.contains('dark')
  
  // 监听系统深色模式变化
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', handleSystemDarkModeChange)
  
  // 使用 MutationObserver 监听 class 变化
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        isDark.value = document.documentElement.classList.contains('dark')
      }
    })
  })
  observer.observe(document.documentElement, { attributes: true })

  // 添加导航栏主题开关的点击监听
  document.addEventListener('click', onAppearanceSwitchClickCapture, true)
})
```

**初始化任务**:
1. 从 localStorage 恢复用户选择的主题模式
2. 检查并同步深色模式状态
3. 监听系统深色模式偏好变化
4. 监听 DOM class 属性变化
5. 添加导航栏主题开关的点击监听

---

## 模板结构

```vue
<template>
  <!-- 主题切换按钮组 -->
  <div class="home-fx-switch">
    <!-- 常态模式按钮 -->
    <button
      type="button"
      class="home-fx-toggle home-fx-toggle--default"
      :class="{ 'is-active': homeFxMode === 'default' }"
      aria-label="Switch to default mode"
      title="Default mode"
      @click="setDefault"
    >
      <span class="home-fx-toggle__icon" />
      <span class="home-fx-toggle__text">常态</span>
    </button>

    <!-- 晶透模式按钮 -->
    <button
      type="button"
      class="home-fx-toggle"
      :class="{ 'is-active': homeFxMode === 'glass' }"
      aria-label="Switch to glass mode"
      title="Glass mode"
      @click="toggleGlass"
    >
      <span class="home-fx-toggle__icon" />
      <span class="home-fx-toggle__text">晶透</span>
    </button>

    <!-- 液态模式按钮 -->
    <button
      type="button"
      class="home-fx-toggle home-fx-toggle--liquid"
      :class="{ 'is-active': homeFxMode === 'liquid' }"
      aria-label="Switch to liquid mode"
      title="Liquid mode"
      @click="toggleLiquid"
    >
      <span class="home-fx-toggle__icon" />
      <span class="home-fx-toggle__text">液态</span>
    </button>
  </div>
  
  <!-- 主题切换动画层 -->
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
```

### 按钮结构说明

| 元素 | 类名 | 说明 |
|------|------|------|
| 容器 | `.home-fx-switch` | 按钮组容器 |
| 按钮 | `.home-fx-toggle` | 单个切换按钮基础样式 |
| 图标 | `.home-fx-toggle__icon` | 按钮内的图标 |
| 文字 | `.home-fx-toggle__text` | 按钮文字 |
| 激活态 | `.is-active` | 当前激活的按钮 |

### 按钮变体

| 变体 | 类名 | 图标形状 |
|------|------|----------|
| 常态 | `.home-fx-toggle--default` | 圆形 |
| 晶透 | `.home-fx-toggle` | 圆形 |
| 液态 | `.home-fx-toggle--liquid` | 水滴形状 |

### Teleport 动画层

```vue
<Teleport to="body">
  <div v-if="isTransitioning" class="theme-transition-overlay" />
</Teleport>
```

**作用**: 
- 将动画层传送到 `<body>` 元素下（确保在所有内容之上）
- `v-if="isTransitioning"`: 只在切换动画时显示
- `transitionOrigin`: 控制动画的圆心位置

---

## 主题切换动画原理

### CSS 动画实现

```css
.theme-transition-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;           /* 最高层级 */
  pointer-events: none;     /* 不可点击 */
  background: radial-gradient(
    circle at var(--transition-origin-x) var(--transition-origin-y),
    var(--oil-bg) 0%,
    transparent 70%
  );
  animation: theme-reveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes theme-reveal {
  0% {
    clip-path: circle(0% at var(--transition-origin-x) var(--transition-origin-y));
  }
  100% {
    clip-path: circle(150% at var(--transition-origin-x) var(--transition-origin-y));
  }
}
```

### 动画流程

1. 用户点击按钮
2. `toggleHomeFxMode()` 更新 `homeFxMode` 状态并保存到 localStorage
3. `HomeFxBackdrop.vue` 中的 `watch` 监听到变化，切换 CSS 类名
4. `triggerThemeTransition()` 触发动画
5. 动画层从圆心向外扩散，覆盖整个屏幕
6. 600ms 后动画结束，切换完成

---

## 相关文件

| 文件 | 用途 |
|------|------|
| `homeFxState.js` | 主题状态管理（状态定义、读写 localStorage） |
| `HomeFxBackdrop.vue` | 响应主题状态变化，切换背景效果 |
| `style.css` | 定义按钮和动画样式 |
