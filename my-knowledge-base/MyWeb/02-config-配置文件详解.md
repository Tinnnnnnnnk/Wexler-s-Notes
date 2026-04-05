# config.mjs 配置文件详解

## 文件概述

**路径**: `D:\Github\Wexler-s-Notes\my-knowledge-base\docs\.vitepress\config.mjs`

**用途**: 这是 VitePress 的核心配置文件，定义了网站的全局配置、导航栏、侧边栏、Markdown 处理等核心功能。

**文件类型**: `.mjs` (ES Module JavaScript)

---

## 文件结构总览

```
config.mjs
├── 导入模块 (第 1-5 行)
├── 路径配置 (第 7-10 行)
├── 忽略列表 (第 12-25 行)
├── 侧边栏生成函数 (第 27-89 行)
│   ├── generateSidebarItems() - 递归扫描子目录
│   └── getRootSidebarGroups() - 扫描根目录
└── VitePress 配置对象 (第 91-134 行)
    ├── 基本配置
    ├── Markdown 配置
    └── 主题配置
```

---

## 导入模块详解

### 第 1-5 行
```javascript
import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
```

**各导入项说明**:

| 导入项 | 来源 | 用途 |
|--------|------|------|
| `defineConfig` | `vitepress` | VitePress 配置函数 |
| `markdownItMathjax3` | `markdown-it-mathjax3` | 数学公式渲染插件 |
| `fs` | Node.js 内置 | 文件系统操作 |
| `path` | Node.js 内置 | 路径处理 |
| `fileURLToPath` | `url` 模块 | 将 URL 转换为文件路径 |

---

## 路径配置详解

### 第 7-10 行
```javascript
// 1. 获取绝对路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DOCS_ROOT = path.resolve(__dirname, '..')
```

**配置说明**:

| 变量 | 值 | 说明 |
|------|-----|------|
| `__filename` | 当前文件的绝对路径 | `config.mjs` 的完整路径 |
| `__dirname` | 当前文件所在目录 | `.vitepress` 目录 |
| `DOCS_ROOT` | `my-knowledge-base/docs/` | 文档根目录 |

**为什么需要 DOCS_ROOT**:
由于 `config.mjs` 在 `.vitepress` 目录中，而文档内容在 `docs` 目录，所以需要向上跳转一级来定位文档根目录。

---

## 忽略列表详解

### 第 12-25 行
```javascript
// 🚫 定义全局忽略列表 (黑名单)
const IGNORED_LIST = [
  '.DS_Store',    // macOS 系统文件
  'images',       // 图片目录
  'public',       // 公共资源目录
  'index.md',     // 首页文件
  '.vitepress',   // VitePress 配置目录
  '.obsidian',    // Obsidian 笔记软件配置
  'Info',         // 信息目录（自定义）
  'jpg',          // JPG 图片目录
  'png',          // PNG 图片目录
  'img',          // 图片目录（另一种命名）
  'assets'        // 资源目录
]
```

**忽略列表的作用**:
这些目录和文件不会显示在自动生成的侧边栏中，通常是：
- 系统文件（`.DS_Store`）
- 静态资源目录（`images`、`public`、`assets`）
- 配置文件目录（`.vitepress`、`.obsidian`）
- 非文档内容目录（`Info`）

---

## 侧边栏生成函数详解

### generateSidebarItems() - 递归扫描子目录

#### 第 28-64 行
```javascript
function generateSidebarItems(dirPath, basePath = '') {
  const fullPath = path.join(DOCS_ROOT, dirPath)
  if (!fs.existsSync(fullPath)) return []

  const files = fs.readdirSync(fullPath)
  // 文件名排序逻辑：按数字前缀排序
  files.sort((a, b) => {
    const numA = parseInt(a.split('-')[0]) || 999
    const numB = parseInt(b.split('-')[0]) || 999
    return numA - numB
  })

  const items = []
  files.forEach(file => {
    if (IGNORED_LIST.includes(file)) return
    const filePath = path.join(fullPath, file)
    try {
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        // 目录：创建嵌套的侧边栏项
        items.push({
          text: file,
          collapsed: false,
          items: generateSidebarItems(path.join(dirPath, file), basePath)
        })
      } else if (file.endsWith('.md')) {
        // Markdown 文件：创建链接
        const fileName = file.replace('.md', '')
        const link = path.join('/', dirPath, fileName).replace(/\\/g, '/')
        items.push({
          text: fileName,
          link: link
        })
      }
    } catch (e) {
      return
    }
  })
  return items
}
```

**函数逻辑分解**:

| 步骤 | 操作 | 说明 |
|------|------|------|
| 1 | `fs.readdirSync(fullPath)` | 读取目录内容 |
| 2 | `files.sort()` | 按数字前缀排序（`01-xxx` 排在 `02-xxx` 前面） |
| 3 | 遍历每个文件 | 检查是否在忽略列表中 |
| 4 | 如果是目录 | 递归调用自身，生成嵌套侧边栏 |
| 5 | 如果是 `.md` 文件 | 生成链接项 |

**排序机制说明**:
```javascript
// "01-算法入门.md" -> parseInt("01") = 1
// "02-数据结构.md" -> parseInt("02") = 2
// "高级主题.md" -> parseInt("高级") = NaN -> 999
```
这样可以确保：
- 带数字前缀的文件按顺序排列
- 不带数字前缀的文件排在最后

---

### getRootSidebarGroups() - 扫描根目录

#### 第 67-89 行
```javascript
function getRootSidebarGroups() {
  const files = fs.readdirSync(DOCS_ROOT)
  // 同样按数字前缀排序
  files.sort((a, b) => {
    const numA = parseInt(a.split('-')[0]) || 999
    const numB = parseInt(b.split('-')[0]) || 999
    return numA - numB
  })

  const groups = []
  files.forEach(file => {
    // 跳过隐藏文件和忽略列表中的项
    if (file.startsWith('.') || IGNORED_LIST.includes(file)) return
    const filePath = path.join(DOCS_ROOT, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      // 目录：创建侧边栏分组
      groups.push({
        text: file,
        collapsed: false,
        items: generateSidebarItems(file)  // 递归生成子项
      })
    }
  })
  return groups
}
```

**与 `generateSidebarItems()` 的区别**:

| 方面 | `getRootSidebarGroups()` | `generateSidebarItems()` |
|------|-------------------------|--------------------------|
| 扫描范围 | 只扫描根目录 (`docs/`) | 递归扫描所有子目录 |
| 处理对象 | 只处理目录 | 处理目录和 Markdown 文件 |
| 返回值 | 侧边栏分组数组 | 侧边栏项数组 |

---

## VitePress 配置对象详解

### 第 92-99 行 - 基本配置
```javascript
export default defineConfig({
  ignoreDeadLinks: true,
  title: "Wexler's Notes",
  description: "全栈开发与运维知识库",
  lastUpdated: true,
  cleanUrls: true,
  // ...
})
```

**配置项说明**:

| 配置项 | 值 | 说明 |
|--------|-----|------|
| `ignoreDeadLinks` | `true` | 忽略死链接，不抛出错误 |
| `title` | `"Wexler's Notes"` | 网站标题（显示在浏览器标签） |
| `description` | `"全栈开发与运维知识库"` | SEO 描述信息 |
| `lastUpdated` | `true` | 显示最后更新时间 |
| `cleanUrls` | `true` | 生成干净的 URL（无 `.html` 后缀） |

---

### 第 101-106 行 - Markdown 配置
```javascript
markdown: {
  config: (md) => {
    md.use(markdownItMathjax3)  // 启用数学公式渲染
  },
  lineNumbers: true  // 代码块显示行号
}
```

**Markdown 配置说明**:

| 配置项 | 值 | 说明 |
|--------|-----|------|
| `markdown.config` | 函数 | 自定义 Markdown 解析器配置 |
| `markdown.config.md.use()` | `markdownItMathjax3` | 使用数学公式插件（支持 LaTeX 语法） |
| `markdown.lineNumbers` | `true` | 代码块左侧显示行号 |

---

### 第 108-132 行 - 主题配置

#### 第 109-110 行 - 搜索和 Logo
```javascript
search: { provider: 'local' },
logo: '/images/logo.jpg',
```

**说明**:
- `search.provider: 'local'`: 使用本地搜索（不依赖第三方服务）
- `logo`: 导航栏左侧显示的 Logo 图片

---

#### 第 112-116 行 - 导航栏配置
```javascript
nav: [
  { text: '🏠 首页', link: '/' },
  { text: '📚 核心知识库', link: '/Sky-Take-Out/00-后端开发知识大本营' },
  { text: '🎨 风格实验室', link: '/Style-Lab/00-风格入口' },
],
```

**导航栏结构**:
每个导航项是一个对象：
```javascript
{
  text: '显示文字',  // 导航按钮文字
  link: '/路径'     // 点击后的链接
}
```

---

#### 第 118 行 - 侧边栏配置
```javascript
sidebar: getRootSidebarGroups(),
```

**说明**: 使用自定义函数自动生成侧边栏，而不是手动配置。

---

#### 第 120-122 行 - 社交链接
```javascript
socialLinks: [
  { icon: 'github', link: 'https://github.com/Tinnnnnnnnk' }
],
```

**支持的社交图标**:
- `'github'`
- `'twitter'`
- `'discord'`
- `'facebook'`
- `'linkedin'`
- `'slack'`
- `'instagram'`
- `'youtube'`
- `'mastodon'`

---

#### 第 124-127 行 - 页脚配置
```javascript
footer: {
  message: 'Powered by VitePress & Kira-Kira Magic',
  copyright: 'Copyright © 2024-present Wexler'
}
```

**页脚配置**:
- `message`: 页脚上方的提示文字
- `copyright`: 版权信息

---

#### 第 129-132 行 - 编辑链接
```javascript
editLink: {
  pattern: 'https://github.com/Tinnnnnnnnk/Wexler-s-Notes/edit/main/my-knowledge-base/docs/:path',
  text: '在 GitHub 上编辑此页'
}
```

**编辑链接说明**:
- `pattern`: 编辑页面的 URL 模板，``:path`` 会被实际路径替换
- `text`: 显示的链接文字

---

## 常见修改场景

### 修改网站标题
```javascript
title: "你的网站标题"
```

### 添加导航栏项目
```javascript
nav: [
  { text: '首页', link: '/' },
  { text: '新页面', link: '/新页面/' },
  // 添加下拉菜单：
  {
    text: '下拉菜单',
    items: [
      { text: '子页面1', link: '/子页面1/' },
      { text: '子页面2', link: '/子页面2/' }
    ]
  }
]
```

### 添加忽略的目录
在 `IGNORED_LIST` 数组中添加目录名：
```javascript
const IGNORED_LIST = [
  // ... 其他项
  '你要忽略的目录'
]
```

### 修改文件排序方式
修改排序逻辑：
```javascript
files.sort((a, b) => {
  // 默认：按数字前缀排序
  // 改为：按字母顺序排序
  return a.localeCompare(b)
})
```

---

## 相关文件

- **首页文件**: `docs/index.md`
- **主题入口**: `docs/.vitepress/theme/index.js`
- **样式文件**: `docs/.vitepress/theme/style.css`
