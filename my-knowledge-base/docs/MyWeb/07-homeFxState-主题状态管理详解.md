# homeFxState.js 主题状态管理详解

## 文件概述

**路径**: `D:\Github\Wexler-s-Notes\my-knowledge-base\docs\.vitepress\theme\components\homeFxState.js`

**用途**: 这是主题状态管理模块，负责定义和操作三种视觉模式的切换状态，并使用 localStorage 进行持久化存储。

---

## 功能概述

### 三种视觉模式

| 模式 | 键值 | 说明 |
|------|------|------|
| 默认（Default） | `'default'` | 标准油画冷色调背景 |
| 晶透（Glass） | `'glass'` | 毛玻璃效果，半透明设计 |
| 液态（Liquid） | `'liquid'` | 流动液态背景，带背景音乐 |

---

## 代码详解

### 第 1-5 行 - 导入和状态定义

```javascript
import { ref } from 'vue'

// localStorage 存储键名
const STORAGE_KEY = 'wexler.homeFx.mode'

// 响应式状态：当前主题模式
const homeFxMode = ref('default')

// 初始化标记：防止重复初始化
let initialized = false
```

**说明**:
- `ref('vue')`: Vue 3 的响应式引用
- `homeFxMode`: 核心状态变量，存储当前模式
- `initialized`: 确保 `initHomeFxState()` 只执行一次

---

### 第 7-14 行 - 安全读取 localStorage

```javascript
function safeReadStorage() {
  // 服务端渲染时返回默认值
  if (typeof window === 'undefined') return '0'
  
  try {
    return localStorage.getItem(STORAGE_KEY) || '0'
  } catch (error) {
    return '0'  // 隐私模式或存储不可用时返回默认值
  }
}
```

**作用**: 安全地读取 localStorage，处理各种异常情况。

**返回值**:
- `'default'`: 默认模式
- `'glass'`: 晶透模式
- `'liquid'`: 液态模式
- `'0'`: 读取失败或无数据

---

### 第 16-23 行 - 安全写入 localStorage

```javascript
function safeWriteStorage(value) {
  // 服务端渲染时不写入
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch (error) {
    // 忽略存储错误
  }
}
```

**作用**: 安全地写入 localStorage，处理异常情况。

---

### 第 25-30 行 - 初始化状态

```javascript
function initHomeFxState() {
  if (initialized) return  // 防止重复初始化
  
  const savedMode = safeReadStorage()
  
  // 只有有效的模式值才会被应用
  homeFxMode.value = savedMode === 'glass' || savedMode === 'liquid' 
    ? savedMode 
    : 'default'
  
  initialized = true
}
```

**初始化逻辑**:
```
localStorage 值 → 判断 → homeFxMode.value
─────────────────────────────────────────────
'glass'       → true  → 'glass'
'liquid'      → true  → 'liquid'
其他（'default', null, '0', 错误）→ false → 'default'
```

---

### 第 32-35 行 - 设置模式

```javascript
function setHomeFxMode(mode) {
  // 只接受有效的模式值
  homeFxMode.value = mode === 'glass' || mode === 'liquid' 
    ? mode 
    : 'default'
  
  // 同步保存到 localStorage
  safeWriteStorage(homeFxMode.value)
}
```

**作用**: 设置主题模式并持久化保存。

---

### 第 37-43 行 - 切换模式

```javascript
function toggleHomeFxMode(targetMode) {
  // 非有效目标模式时，切换到默认模式
  if (targetMode !== 'glass' && targetMode !== 'liquid') {
    setHomeFxMode('default')
    return
  }
  
  // 相同模式：切换到默认；不同模式：切换到目标模式
  setHomeFxMode(homeFxMode.value === targetMode ? 'default' : targetMode)
}
```

**切换逻辑**:
```
点击按钮     当前位置      结果
──────────────────────────────────
点击"晶透"   默认/液态    → 晶透
点击"晶透"   晶透         → 默认
点击"液态"   默认/晶透    → 液态
点击"液态"   液态         → 默认
点击"默认"   任意         → 默认
```

---

### 第 45 行 - 导出

```javascript
export { homeFxMode, initHomeFxState, setHomeFxMode, toggleHomeFxMode }
```

**导出项**:

| 导出项 | 类型 | 用途 |
|--------|------|------|
| `homeFxMode` | `Ref<string>` | 响应式状态，直接读取当前模式 |
| `initHomeFxState` | `Function` | 初始化函数，在组件 mounted 时调用 |
| `setHomeFxMode` | `Function` | 设置指定模式 |
| `toggleHomeFxMode` | `Function` | 切换模式 |

---

## 使用示例

### 在组件中使用

```javascript
import { homeFxMode, initHomeFxState, toggleHomeFxMode } from './homeFxState'

// 初始化（通常在 onMounted 中调用）
onMounted(() => {
  initHomeFxState()
})

// 检查当前模式
console.log(homeFxMode.value)  // 'default', 'glass', 或 'liquid'

// 切换到指定模式
toggleHomeFxMode('glass')

// 或者直接设置
import { setHomeFxMode } from './homeFxState'
setHomeFxMode('liquid')

// 在模板中使用
// <div v-if="homeFxMode === 'liquid'">液态内容</div>
```

---

## 与其他组件的协作

### HomeFxBackdrop.vue
```javascript
// 导入状态
import { homeFxMode, initHomeFxState } from './homeFxState'

// 计算属性：判断是否显示液态效果
const isLiquidActive = computed(() => homeFxMode.value === 'liquid')
const isGlassActive = computed(() => homeFxMode.value === 'glass')

// 监听变化
watch(homeFxMode, () => {
  syncHtmlClass()  // 同步 HTML 类名
})
```

### HomeFxToggle.vue
```javascript
// 导入切换函数
import { homeFxMode, initHomeFxState, toggleHomeFxMode } from './homeFxState'

// 点击按钮时调用
function toggleGlass() {
  toggleHomeFxMode('glass')
}

// 模板中使用
// :class="{ 'is-active': homeFxMode === 'glass' }"
```

### ReadingEnhancer.vue
```javascript
// 此组件不直接使用 homeFxState
// 它通过 HomeFxBackdrop 间接响应主题变化
```

---

## localStorage 数据结构

### 存储键
```
'wexler.homeFx.mode'
```

### 存储值
| 值 | 含义 |
|-----|------|
| `'default'` | 默认模式 |
| `'glass'` | 晶透模式 |
| `'liquid'` | 液态模式 |

### 数据格式
纯字符串，直接存储模式名称。

---

## 错误处理

### 可能失败的场景

| 场景 | 处理方式 |
|------|----------|
| 服务端渲染（SSR） | `window` 不存在时返回默认值，不执行存储操作 |
| 隐私模式（无痕浏览） | `localStorage` 可能抛出异常，被 catch 捕获 |
| 存储配额不足 | 异常被忽略，不影响用户体验 |
| localStorage 被禁用 | 同上，异常被忽略 |

---

## 修改指南

### 修改存储键名
```javascript
const STORAGE_KEY = 'your-prefix.homeFx.mode'
```

### 修改默认模式
```javascript
// 在 initHomeFxState 函数中修改
homeFxMode.value = savedMode === 'glass' || savedMode === 'liquid' 
  ? savedMode 
  : 'glass'  // 改为默认晶透模式
```

### 添加新的模式
1. 在 `homeFxState.js` 中添加新模式的处理逻辑
2. 在 `HomeFxBackdrop.vue` 中添加对应的样式和效果
3. 在 `HomeFxToggle.vue` 中添加新的切换按钮

---

## 相关文件

| 文件 | 用途 |
|------|------|
| `homeFxState.js` | 状态定义和管理 |
| `HomeFxBackdrop.vue` | 响应状态，显示背景效果 |
| `HomeFxToggle.vue` | 操作状态，切换模式 |
| `style.css` | 根据状态类名应用样式 |
