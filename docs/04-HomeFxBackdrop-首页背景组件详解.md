# HomeFxBackdrop.vue 首页背景效果组件详解

## 文件概述

**路径**: `D:\Github\Wexler-s-Notes\my-knowledge-base\docs\.vitepress\theme\components\HomeFxBackdrop.vue`

**用途**: 这是首页的背景效果组件，负责渲染背景视频/图片、液态气泡动画效果，以及背景音乐播放器。

---

## 组件结构总览

```
HomeFxBackdrop.vue
├── <script setup> - 逻辑部分
│   ├── 静态配置常量
│   ├── 响应式状态
│   ├── 计算属性
│   ├── 方法函数
│   └── 生命周期钩子
├── <template> - 模板部分
│   ├── 背景层 (home-fx-layer)
│   ├── 液态舞台区 (home-liquid-stage)
│   └── 音频播放器 (audio)
└── <style> - 样式部分（在 style.css 中）
```

---

## 静态配置常量（第 10-17 行）

```javascript
// Place custom backgrounds in: my-knowledge-base/docs/public/media/home-bg/
// Place custom BGM in: my-knowledge-base/docs/public/media/home-bgm/
const IMAGE_SRC = ''                                      // 自定义背景图片路径（为空表示使用视频）
const VIDEO_SRC = '/media/home-bg/Bg1.mp4'               // 背景视频路径
const LIQUID_BGM_SRC = '/media/home-bgm/liquid-bgm.flac' // 背景音乐路径
const LIQUID_BGM_TITLE = '60% Reverie'                    // 音乐标题
const LIQUID_BGM_ARTIST = 'ZZ-STUDIO x HOYO-MiX'        // 音乐艺术家
const LIQUID_HERO_LABEL = 'Digital Garden'               // Hero 标签
const LIQUID_HERO_TITLE = "Wexler's Notes"              // Hero 标题
const LIQUID_HERO_SUBTITLE = '\u5168\u6808\u5f00\u53d1\u4e0e\u8fd0\u7ef4\u77e5\u8bc6\u5e93' // "全栈开发与运维知识库"
```

**配置说明**:

| 常量 | 值 | 说明 |
|------|-----|------|
| `IMAGE_SRC` | `''` | 自定义背景图片，留空则使用视频 |
| `VIDEO_SRC` | `'/media/home-bg/Bg1.mp4'` | 背景视频路径 |
| `LIQUID_BGM_SRC` | `'/media/home-bgm/liquid-bgm.flac'` | 背景音乐路径 |
| `LIQUID_BGM_TITLE` | `'60% Reverie'` | 音乐显示标题 |
| `LIQUID_BGM_ARTIST` | `'ZZ-STUDIO x HOYO-MiX'` | 音乐艺术家 |

---

## 响应式状态（第 19-26 行）

```javascript
const bgmRef = ref(null)                    // 音频元素的引用
const isPlaying = ref(false)                // 是否正在播放
const currentTime = ref(0)                  // 当前播放时间
const duration = ref(0)                     // 音频总时长
const isSeeking = ref(false)                // 是否正在拖动进度条
const volume = ref(0.45)                    // 音量（0-1）
const isMiniPlayer = ref(false)             // 是否为迷你播放器模式
const isVolumePanelVisible = ref(false)     // 音量面板是否可见
```

**状态说明**:

| 状态 | 类型 | 初始值 | 用途 |
|------|------|--------|------|
| `bgmRef` | `Ref<HTMLAudioElement>` | `null` | 绑定 `<audio>` 元素 |
| `isPlaying` | `Ref<boolean>` | `false` | 控制播放/暂停图标显示 |
| `currentTime` | `Ref<number>` | `0` | 当前播放位置（秒） |
| `duration` | `Ref<number>` | `0` | 音频总时长（秒） |
| `isSeeking` | `Ref<boolean>` | `false` | 防止拖动时更新 currentTime |
| `volume` | `Ref<number>` | `0.45` | 音量级别（45%） |
| `isMiniPlayer` | `Ref<boolean>` | `false` | 迷你播放器模式 |
| `isVolumePanelVisible` | `Ref<boolean>` | `false` | 音量控制面板显示 |

---

## 计算属性（第 28-42 行）

```javascript
// 当前页面是否是首页
const isHome = computed(() => route.path === '/')

// 当前页面是否是 Sky-Take-Out 项目页
const isSkyTakeOut = computed(() => route.path.startsWith('/Sky-Take-Out/'))

// 是否显示晶透或液态背景层
const isGlassActive = computed(() => homeFxMode.value === 'glass')
const isLiquidActive = computed(() => homeFxMode.value === 'liquid')
const isActive = computed(() => isGlassActive.value || isLiquidActive.value)

// 是否显示首页液态舞台（背景 + 音乐播放器）
const isLiquidHomeStage = computed(() => isHome.value && homeFxMode.value === 'liquid')

// 是否显示背景音乐
const isLiquidHomeBgm = computed(() => isHome.value && homeFxMode.value === 'liquid')

// 是否静音
const isMuted = computed(() => volume.value <= 0.001)

// 音量百分比
const volumePercent = computed(() => Math.round(volume.value * 100))
```

**计算属性逻辑**:

```
路由变化 ──┬── '/' ──────── isHome = true
          │
          ├── '/Sky-Take-Out/*' ─ isSkyTakeOut = true
          │
          └── 其他 ─────────── isHome = false, isSkyTakeOut = false

主题模式 ──┬── 'default' ── isGlassActive = false, isLiquidActive = false
          │
          ├── 'glass' ────── isGlassActive = true
          │
          └── 'liquid' ───── isLiquidActive = true

显示条件 ──┬── 背景层: isActive (isGlassActive || isLiquidActive)
          │
          ├── 液态舞台: isLiquidHomeStage (isHome && liquid)
          │
          └── 背景音乐: isLiquidHomeBgm (isHome && liquid)
```

---

## 核心方法函数

### syncHtmlClass() - 同步 HTML 类名（第 48-62 行）

```javascript
function syncHtmlClass() {
  if (typeof document === 'undefined') return

  const mode = homeFxMode.value
  const sky = isSkyTakeOut.value

  // 切换首页模式类名
  document.documentElement.classList.toggle('home-default-mode', isHome.value && mode === 'default')
  document.documentElement.classList.toggle('home-glass-mode', mode === 'glass')
  document.documentElement.classList.toggle('home-liquid-mode', mode === 'liquid')

  // 切换 Sky-Take-Out 页面模式类名
  document.documentElement.classList.toggle('sky-default-mode', sky && mode === 'default')
  document.documentElement.classList.toggle('sky-glass-mode', sky && mode === 'glass')
  document.documentElement.classList.toggle('sky-liquid-mode', sky && mode === 'liquid')
}
```

**作用**: 在 `<html>` 元素上添加/移除 CSS 类名，用于触发不同的样式效果。

---

### formatDuration() - 格式化时间（第 64-69 行）

```javascript
function formatDuration(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}
```

**示例**:
- `65` → `"01:05"`
- `3661` → `"61:01"`
- `null` → `"00:00"`

---

### setVolume() - 设置音量（第 75-83 行）

```javascript
function setVolume(nextValue) {
  const resolved = clamp(Number.isFinite(nextValue) ? nextValue : volume.value, 0, 1)
  volume.value = resolved

  const audio = bgmRef.value
  if (!audio) return
  audio.volume = resolved
  audio.muted = resolved <= 0.001
}
```

**逻辑**:
1. 确保音量值在 0-1 范围内
2. 更新响应式状态
3. 如果音频元素存在，同时更新其音量和静音状态

---

### togglePlay() - 切换播放/暂停（第 112-125 行）

```javascript
function togglePlay() {
  const audio = bgmRef.value
  if (!audio) return

  if (audio.paused || audio.ended) {
    // 播放音频
    const playPromise = audio.play()
    if (playPromise?.catch) {
      playPromise.catch(() => {})
    }
    return
  }

  // 暂停音频
  audio.pause()
}
```

**要点**: `audio.play()` 返回一个 Promise，需要使用 `.catch()` 处理自动播放限制。

---

### seekBy() - 快进/快退（第 161-168 行）

```javascript
function seekBy(deltaSeconds) {
  const audio = bgmRef.value
  if (!audio) return
  const maxDuration = Number.isFinite(audio.duration) ? audio.duration : 0
  const target = clamp((Number.isFinite(audio.currentTime) ? audio.currentTime : 0) + deltaSeconds, 0, maxDuration)
  audio.currentTime = target
  currentTime.value = target
}
```

**示例**:
- `seekBy(10)`: 快进 10 秒
- `seekBy(-10)`: 快退 10 秒

---

## 生命周期钩子

### onMounted()（第 170-176 行）

```javascript
onMounted(async () => {
  initHomeFxState()      // 初始化主题状态（从 localStorage 读取）
  syncHtmlClass()         // 同步 HTML 类名
  setVolume(volume.value) // 设置初始音量
  await nextTick()        // 等待 DOM 更新
  syncBgm()              // 同步背景音乐状态
})
```

**执行顺序**:
1. `initHomeFxState()`: 从 localStorage 恢复主题模式
2. `syncHtmlClass()`: 更新 `<html>` 类名
3. `setVolume()`: 设置音频音量
4. `syncBgm()`: 如果在液态首页模式，则播放音乐

---

### watch()（第 178-182 行）

```javascript
watch([() => homeFxMode.value, () => route.path], async () => {
  syncHtmlClass()  // 主题或路由变化时更新类名
  await nextTick() // 等待 DOM 更新
  syncBgm()       // 更新背景音乐
})
```

**监听变化**:
- `homeFxMode.value`: 主题模式切换
- `route.path`: 页面路由变化

---

### onBeforeUnmount()（第 184-200 行）

```javascript
onBeforeUnmount(() => {
  const audio = bgmRef.value
  if (audio) {
    audio.pause()           // 暂停音频
    audio.currentTime = 0   // 重置播放位置
  }
  isVolumePanelVisible.value = false

  // 移除所有模式类名
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('home-default-mode')
    document.documentElement.classList.remove('home-glass-mode')
    document.documentElement.classList.remove('home-liquid-mode')
    document.documentElement.classList.remove('sky-default-mode')
    document.documentElement.classList.remove('sky-glass-mode')
    document.documentElement.classList.remove('sky-liquid-mode')
  }
})
```

**清理工作**:
1. 暂停并重置背景音乐
2. 隐藏音量面板
3. 移除所有模式相关的 CSS 类名

---

## 模板结构详解

### 背景层（第 204-226 行）

```vue
<div
  v-if="isActive"
  class="home-fx-layer"
  :class="{ 'is-liquid': isLiquidActive, 'is-glass': isGlassActive }"
  aria-hidden="true"
>
  <!-- 视频或图片背景 -->
  <video v-if="VIDEO_SRC" class="home-fx-layer__video" autoplay muted loop playsinline :src="VIDEO_SRC" />
  <div v-else class="home-fx-layer__image" />

  <!-- 液态特效 -->
  <div v-if="isLiquidActive" class="home-fx-layer__liquid-aura" />
  <span v-if="isLiquidActive" class="home-fx-blob home-fx-blob--one" />
  <span v-if="isLiquidActive" class="home-fx-blob home-fx-blob--two" />
  <span v-if="isLiquidActive" class="home-fx-blob home-fx-blob--three" />
</div>
```

**显示条件**: `isActive = isGlassActive || isLiquidActive`

**液态特效元素**:
- `.home-fx-layer__liquid-aura`: 液态光晕层
- `.home-fx-blob--one/two/three`: 三个液态气泡动画

---

### 液态舞台区（第 228-325 行）

```vue
<div v-if="isLiquidHomeStage" class="home-liquid-stage">
  <!-- 介绍卡片 -->
  <section class="home-liquid-intro-card" aria-label="Site introduction">
    <p class="home-liquid-intro-card__kicker">{{ LIQUID_HERO_LABEL }}</p>
    <h1 class="home-liquid-intro-card__title">{{ LIQUID_HERO_TITLE }}</h1>
    <p class="home-liquid-intro-card__lead">{{ LIQUID_HERO_SUBTITLE }}</p>
  </section>

  <!-- 音乐播放器 -->
  <div class="home-liquid-player" :class="{ 'is-mini': isMiniPlayer }">
    <!-- 控制按钮区域 -->
    <div class="home-liquid-player__top">
      <!-- 迷你模式切换 -->
      <button @click="toggleMiniPlayer">...</button>
      <!-- 播放控制 -->
      <div class="home-liquid-player__transport">
        <button @click="seekBy(-10)">后退</button>
        <button @click="togglePlay">{{ isPlaying ? '暂停' : '播放' }}</button>
        <button @click="seekBy(10)">前进</button>
      </div>
      <!-- 音量控制 -->
      <button @click="toggleVolumePanel">音量</button>
    </div>

    <!-- 曲目信息 -->
    <p class="home-liquid-player__track">
      {{ LIQUID_BGM_TITLE }} · {{ LIQUID_BGM_ARTIST }}
    </p>

    <!-- 进度条 -->
    <div class="home-liquid-player__timeline">
      <span>{{ formatDuration(currentTime) }}</span>
      <input type="range" :value="currentTime" @input="handleSeekInput" @change="handleSeekCommit" />
      <span>{{ formatDuration(duration) }}</span>
    </div>

    <!-- 音量滑块 -->
    <div v-show="isVolumePanelVisible && !isMiniPlayer" class="home-liquid-player__volume">
      <!-- 音量控制 UI -->
    </div>
  </div>
</div>
```

---

### 音频元素（第 327-338 行）

```vue
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
```

**属性说明**:

| 属性 | 值 | 说明 |
|------|-----|------|
| `v-if="isLiquidHomeBgm"` | 条件渲染 | 只在首页液态模式下显示 |
| `ref="bgmRef"` | 元素引用 | 绑定到 bgmRef 响应式变量 |
| `preload="metadata"` | 预加载策略 | 只预加载元数据（时长等） |
| `loop` | 循环播放 | 音乐循环播放 |
| `@timeupdate` | 事件监听 | 播放进度更新时同步状态 |

---

## 修改指南

### 修改背景视频
1. 将新的视频文件放入 `docs/public/media/home-bg/` 目录
2. 修改 `VIDEO_SRC` 常量指向新文件

### 修改背景音乐
1. 将新的音频文件放入 `docs/public/media/home-bgm/` 目录
2. 修改 `LIQUID_BGM_SRC` 常量指向新文件
3. 更新 `LIQUID_BGM_TITLE` 和 `LIQUID_BGM_ARTIST`

### 修改首页介绍文字
修改以下常量：
- `LIQUID_HERO_LABEL`: 标签文字
- `LIQUID_HERO_TITLE`: 标题
- `LIQUID_HERO_SUBTITLE`: 副标题

### 修改默认音量
修改 `volume` 初始值：
```javascript
const volume = ref(0.7)  // 改为 70%
```

---

## 相关文件

| 文件 | 用途 |
|------|------|
| `homeFxState.js` | 主题状态管理 |
| `HomeFxToggle.vue` | 主题切换按钮 |
| `style.css` | 样式定义 |
