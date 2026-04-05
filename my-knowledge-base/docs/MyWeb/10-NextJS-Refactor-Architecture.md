# Wexler's Notes — Next.js 重构架构规格文档

> 本文档是 Next.js 重构的唯一权威参考。AI 助手应严格按照本文档进行代码生成，不允许自行推断或创造未记录的行为。
>
> **实现状态**：主框架搭建完成。组件层、样式迁移、lib/hooks/types/providers 已全部实现，app 路由已就绪，内容迁移脚本和 CI/CD 配置已就绪。

---

## 一、项目现状总览 ✅

### 1.1 项目基本信息

| 项目 | 值 |
|------|-----|
| 框架 | VitePress 1.6.4（Vue 3 Composition API） |
| 内容目录 | `my-knowledge-base/docs/` |
| MD 文件总数 | 88 篇 |
| 主要依赖 | `vitepress@^1.6.4`、`markdown-it-mathjax3` |
| 部署方式 | GitHub Actions → rsync → 服务器 |
| 服务器 | 4核4G |

### 1.2 内容目录结构

```
my-knowledge-base/docs/
├── index.md                    # 首页（VitePress homepage config + <HomeLayoutScenes />）
├── Sky-Take-Out/               # 5 篇 · 后端知识大本营
│   ├── 00-后端开发知识大本营.md
│   ├── 01-Web 前端全栈开发手册.md
│   ├── 02-Java 后端核心与 SpringBoot 实战手册.md
│   ├── 03-数据持久化与 MyBatis 指南.md
│   └── 04-服务器运维与容器化部署手册.md
├── Code/                       # 24 篇 · 算法与代码
│   ├── DS/                    # 数据结构
│   │   ├── BFS.md, DFS.md, Deque.md
│   │   ├── Dynamic Programming.md, StringBuilder.md
│   │   └── 树形DP.md, 分治算法.md, 细节部分.md
│   └── Hot100/                # LeetCode Hot100
│       ├── Backtracking/, Binary-Tree/, Graph-Theory/
│       ├── Prefix-Sum/, Sliding-Window/, Stack/, Two-Pointers/
├── MyWeb/                      # 15 篇 · 站点本身（自文档化）
│   ├── Style-Lab/             # 样式实验室（3 篇）
│   └── [00-09]-*.md            # 逐文件注解
├── 面试笔记/                   # 9 篇 · 面试准备
├── PaiSmart/                   # 19 篇 · PaiSmart 项目
├── PromptLearning/             # 2 篇 · AI 协作
├── Resume/                     # 5 篇 · 简历与规划
├── Info/                       # 2 篇 · 使用指南
├── 图像处理和信息安全/          # 2 篇
├── .vitepress/                # ⚠️ 不迁移内容，仅迁移样式
│   └── theme/
│       ├── index.js
│       ├── style.css
│       ├── components/
│       ├── stores/
│       └── styles/
├── public/
│   ├── images/                # ~60 张图片（< 10MB）
│   └── media/
│       ├── home-bg/          # 首页背景视频/图片
│       └── home-bgm/          # 首页 BGM 音频
└── .obsidian/                 # ⚠️ 不迁移
```

### 1.3 MD 文件语法现状

| 语法类型 | 使用情况 | 迁移处理 |
|----------|----------|---------|
| 标准 frontmatter | 极少（仅 `index.md` 有 `layout: home`） | 直接兼容 |
| `![[嵌入]]` | **0 处** | 不需要处理 |
| `^块引用` | **0 处** | 不需要处理 |
| `%%注释%%` | **0 处** | 不需要处理 |
| Callout `> [!note]` | **~23 处**（Code/、Sky-Take-Out/） | 需 MDX Callout 组件映射 |
| Mermaid ` ```mermaid ``` ` | **1 处** | 需 rehype-mermaid 插件 |
| Dataview `=dv...` | **0 处** | 不需要处理 |
| MathJax `$...$` / `$$...$$` | 有（`markdown-it-mathjax3`） | 需 rehype-katex 或 rehype-mathjax |

---

## 二、重构技术选型 ✅

### 2.1 框架与语言

| 选择 | 值 | 理由 |
|------|------|------|
| Next.js 版本 | **15（App Router）** | 最新稳定版，RSC 支持好，静态生成优化 |
| 语言 | **TypeScript** | 所有组件必须有类型定义 |
| 内容渲染 | **`next-mdx-remote` v5 + `gray-matter`** | 比 Content Collections 灵活，支持 frontmatter 解析 |
| 样式方案 | **CSS Modules + CSS Variables（保留 tokens）** | 直接复用现有 tokens，不引入 Tailwind 学习成本 |
| 搜索 | **Fuse.js（客户端）** | 轻量，无需服务端，88 篇笔记完全够用 |
| 代码高亮 | **`rehype-pretty-code` + Shiki** | 内置行高亮、行号、diff 标记 |
| 数学公式 | **`remark-math` + `rehype-katex`** | MathJax 3 不再维护，katex 是更好选择 |

### 2.2 目标目录结构

```
wexler-notes-next/                      # 与 wexler-notes 平级
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # 根布局（html/body/ThemeProvider）
│   │   ├── page.tsx                   # 首页（Keynote / Workbench / Media 三场景）
│   │   ├── page.module.css
│   │   ├── globals.css                # 全局样式入口
│   │   │
│   │   ├── docs/
│   │   │   └── [...slug]/
│   │   │       ├── page.tsx           # 文档页（MDX 渲染 + 侧边栏 + 阅读增强）
│   │   │       └── page.module.css
│   │   │
│   │   ├── api/
│   │   │   └── search/
│   │   │       └── route.ts           # 搜索 API（未来可选）
│   │   │
│   │   ├── not-found.tsx
│   │   └── sitemap.ts
│   │
│   ├── content/                       # MDX 内容（从 docs/ 复制，过滤 .vitepress/.obsidian）
│   │   ├── index.mdx                  # 首页（替代 index.md）
│   │   ├── sky-take-out/
│   │   │   ├── _meta.json            # 该目录的侧边栏配置（title/order）
│   │   │   ├── 00-后端开发知识大本营.mdx
│   │   │   └── ...
│   │   ├── code/
│   │   │   ├── ds/
│   │   │   └── hot100/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── MainLayout.tsx        # 主布局（Navbar + Sidebar + Content + Footer）
│   │   │   ├── MainLayout.module.css
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Sidebar.module.css
│   │   │   ├── Sidebar.module.css
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── HomePage.tsx          # 首页容器（三场景切换 + 背景层）
│   │   │   ├── scenes/
│   │   │   │   ├── KeynoteScene.tsx  # 场景 A：发布会风
│   │   │   │   ├── WorkbenchScene.tsx # 场景 B：工作台风
│   │   │   │   └── MediaScene.tsx    # 场景 C：媒体流风
│   │   │   ├── HomePage.module.css
│   │   │   ├── Backdrop.tsx          # 背景视频层 + FPS 探测（HomeFxBackdrop）
│   │   │   ├── Backdrop.module.css
│   │   │   ├── FxToggle.tsx         # 常态/晶透/液态三按钮 + 过渡动画
│   │   │   ├── FxToggle.module.css
│   │   │   ├── LayoutToggle.tsx      # Keynote/Workbench/Media 切换
│   │   │   └── BgmPlayer.tsx        # 液态 BGM 播放器
│   │   │
│   │   ├── editor/
│   │   │   ├── PageEditor.tsx       # 可视化画布（EditableHomeCanvas 重写）
│   │   │   ├── PageEditor.module.css
│   │   │   ├── EditorToolbar.tsx     # 工具栏（新增/复制/删除/撤销/重做）
│   │   │   ├── EditorPanel.tsx       # 右侧属性面板（图层/草稿/发布/导出）
│   │   │   └── EditorToggle.tsx      # 编辑器锁定/解锁按钮
│   │   │
│   │   ├── reading/
│   │   │   ├── ReadingEnhancer.tsx   # 进度条 + 章节导航 + 回到顶部
│   │   │   └── ReadingEnhancer.module.css
│   │   │
│   │   ├── command/
│   │   │   ├── CommandPalette.tsx    # Ctrl+K 命令面板
│   │   │   └── CommandPalette.module.css
│   │   │
│   │   └── mdx/
│   │       ├── MDXComponents.tsx     # MDX 组件映射表
│   │       ├── Callout.tsx          # > [!note] / > [!tip] 等
│   │       ├── Callout.module.css
│   │       ├── CodeBlock.tsx         # 代码块（rehype-pretty-code 输出）
│   │       └── TableOfContents.tsx    # H2/H3 目录（侧边栏用）
│   │
│   ├── hooks/
│   │   ├── useUiMode.ts             # 三轴状态（fx + layout + perf）
│   │   ├── useUiMode.module.css     # CSS class 同步逻辑
│   │   ├── useEditor.ts              # 画布编辑器所有状态 + localStorage
│   │   ├── useReadingTrail.ts        # 阅读轨迹（CommandPalette 用）
│   │   └── useReadingProgress.ts     # 阅读进度计算
│   │
│   ├── lib/
│   │   ├── mdx.ts                   # MDX 序列化（next-mdx-remote/rsc）
│   │   ├── toc.ts                   # 从 MDX 提取 H2/H3 目录
│   │   ├── sidebar.ts                # 文件系统扫描 + frontmatter 读取 → 侧边栏结构
│   │   └── editor/                  # 编辑器数据层（与 hooks/useEditor.ts 配合）
│   │       ├── blockSchema.ts       # Block 类型 + normalizeBlock + validateLayout
│   │       ├── history.ts           # undo/redo stack
│   │       ├── export.ts            # JSON bundle 导出/导入
│   │       └── storage.ts           # localStorage CRUD（SSR 安全）
│   │
│   └── types/
│       ├── mdx.ts                   # MDXFrontmatter, TOCItem
│       ├── sidebar.ts               # SidebarGroup, SidebarItem
│       ├── editor.ts                # Block, Layout, PublishSnapshot, AuditEntry
│       └── uiMode.ts                # FxMode, LayoutMode, PerfMode, UiModeState
│
├── public/                          # 复制自 docs/public/
│   ├── images/
│   └── media/
│       ├── home-bg/
│       └── home-bgm/
│
├── styles/
│   ├── tokens.css                   # 来自 theme/styles/tokens.css（不变）
│   ├── layers.css                   # 来自 theme/styles/layers.css（不变）
│   ├── base.css                     # 来自 theme/styles/base.css（迁移）
│   ├── home-lab.css                # 来自 theme/styles/home-lab.css（拆分迁移）
│   ├── effects.css                  # 来自 theme/styles/effects.css（不变）
│   └── editor.css                  # 来自 theme/styles/editor.css（拆分迁移）
│
├── scripts/
│   └── migrate-docs.ts              # 一键脚本：将 docs/ 复制并转换为 MDX
│
├── next.config.ts
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml               # GitHub Actions：构建 + rsync 部署
```

---

## 三、Vue → React 转换对照表 ✅

### 3.1 基础转换规则

| Vue（`<script setup>`） | React（TypeScript） |
|--------------------------|---------------------|
| `import { ref, computed, watch } from 'vue'` | `import { useState, useEffect, useMemo, useCallback } from 'react'` |
| `const foo = ref(0)` | `const [foo, setFoo] = useState(0)` |
| `const bar = computed(() => ...)` | `const bar = useMemo(() => ..., [deps])` |
| `watch(x, (val) => ...)` | `useEffect(() => { ... }, [x])` |
| `watchEffect(() => ...)` | `useEffect(() => { ... }, [])` |
| `onMounted(() => {...})` | `useEffect(() => {...}, [])` |
| `onBeforeUnmount(() => {...})` | `useEffect(() => { return () => {...} }, [])` |
| `defineProps<{ foo: string }>()` | `function Comp({ foo }: { foo: string })` |
| `$refs.div` | `const divRef = useRef<HTMLDivElement>(null)` |
| `@click` / `@scroll` | `onClick` / `onScroll` |
| `v-if="condition"` | `{condition && <Comp/>}` |
| `v-show="condition"` | `<div style={{ display: condition ? 'block' : 'none' }}>` |
| `v-for="item in list"` | `{list.map((item, i) => <Comp key={item.id} />)}` |
| `$emit('event', payload)` | `onEvent: (payload: T) => void`（父组件传回调） |
| `provide()` / `inject()` | React Context |
| `Teleport to="body"` | `import { createPortal } from 'react-dom'` |
| Vue Router `useRoute()` | `useParams()` / `usePathname()`（Next.js 内置） |
| Vue Router `useRouter()` | `import { useRouter } from 'next/navigation'` |
| Pinia store | React Context + `useReducer` 或 Zustand |

### 3.2 具体组件转换说明

#### `HomeFxBackdrop.vue` → `components/home/Backdrop.tsx`

```tsx
// 转换要点：
// 1. ref -> useRef（用于 audio/div DOM 引用）
// 2. 所有 onMounted 合并到一个 useEffect
// 3. 所有 watch 转为各自的 useEffect
// 4. FPS probe -> useEffect + requestAnimationFrame
// 5. localStorage -> 移到 useUiMode hook 或 useEffect
// 6. setTimeout -> setTimeout + useEffect cleanup
// 7. classList.toggle -> Context 推送 + CSS class 注入
// 8. template 中的 v-if -> { condition && JSX }
// 9. template 中的 :class -> className={cx(classes.xxx, { [classes.active]: condition })}
// 10. Teleport -> createPortal
// 11. props emit -> onEvent callbacks
```

#### `EditableHomeCanvas.vue` → `components/editor/PageEditor.tsx`

```tsx
// 转换要点：
// 1. 1659 行 → 拆分为多个组件 + hooks
//    - useEditorSnap.ts    : computeMovePatch, computeResizePatch, snap math
//    - useEditorHistory.ts : pushUndoSnapshot, applyHistorySnapshot
//    - useEditorExport.ts  : 所有 export/import JSON 函数
//    - EditorToolbar.tsx   : 工具栏按钮
//    - EditorPanel.tsx      : 右侧属性面板
//    - PageEditor.tsx       : 主组件，仅负责布局 + 状态协调
// 2. pointer 事件完全保留（onPointerDown/Move/Up）
// 3. RAF throttle -> useCallback + useRef 保留 rafId
// 4. 所有 localStorage -> useEditor hook 封装
// 5. route.path -> useParams() 或 usePathname()
// 6. template -> JSX + CSS Modules
// 7. watch -> useEffect with deps array
// 8. v-model -> value + onChange pattern
```

#### `CommandPalette.vue` → `components/command/CommandPalette.tsx`

```tsx
// 转换要点：
// 1. v-model -> useState
// 2. scroll 监听 -> useEffect + passive scroll listener
// 3. keyboard 监听 -> useEffect + useCallback
// 4. Teleport -> createPortal
// 5. localStorage trail -> useReadingTrail hook
// 6. navigation -> useRouter from next/navigation
// 7. reading trail 状态 -> 拆出 useReadingTrail hook
```

#### `ReadingEnhancer.vue` → `components/reading/ReadingEnhancer.tsx`

```tsx
// 转换要点：
// 1. scroll 监听 -> useEffect + passive listener
// 2. pointer drag -> onPointerDown/Move/Up in React
// 3. localStorage -> 组件本地 useState + useEffect
// 4. route change -> useParams/usePathname
```

---

## 四、状态管理架构 ✅

### 4.1 `stores/uiModeState.js` → React Context

```typescript
// src/types/uiMode.ts
export type FxMode = 'default' | 'glass' | 'liquid'
export type LayoutMode = 'minimal' | 'dashboard' | 'editorial'
export type PerfMode = 'normal' | 'safe'

export interface UiModeState {
  fxMode: FxMode
  layoutMode: LayoutMode
  perfMode: PerfMode
  isHome: boolean
  isSkyTakeOut: boolean
}

export interface UiModeActions {
  setFxMode: (mode: FxMode) => void
  toggleFxMode: (target: 'glass' | 'liquid') => void
  setLayoutMode: (mode: LayoutMode) => void
  setPerfMode: (mode: PerfMode) => void
  evaluatePerfProfile: () => boolean
}

// src/hooks/useUiMode.ts
// 在 context 内部管理 HTML class 同步（唯一的 class writer）
// FX_CLASSES: { default: 'home-default-mode', glass: 'home-glass-mode', liquid: 'home-liquid-mode' }
// LAYOUT_CLASSES: { minimal: 'home-layout-minimal', ... }
// 导出: UiModeContext + useUiMode() + UiModeProvider
```

### 4.2 `stores/editorState.js` → React Context + localStorage

```typescript
// src/types/editor.ts
export interface Block {
  id: string
  kind: 'text'
  x: number; y: number; w: number; h: number; z: number
  opacity: number; radius: number; blur: number
  bg: string; color: string
  kicker: string; title: string; body: string
}

export interface Layout {
  version: 2
  blocks: Block[]
}

export interface RouteLayout {
  route: string
  draft: Layout
  published: Layout
  publishedHistory: PublishSnapshot[]
}

export interface PublishSnapshot {
  id: string; at: string; reason: string; layout: Layout
}

export interface AuditEntry {
  id: string; at: string; action: string; detail: Record<string, unknown>
}

// src/lib/editor/storage.ts
// SSR 安全的 localStorage 封装
// getItem / setItem / removeItem（typeof window === 'undefined' 返回 null）
```

### 4.3 阅读轨迹 → 独立 Hook

```typescript
// src/hooks/useReadingTrail.ts
// localStorage key: 'wexler.readingTrail.v1'
// captureSnapshot(): { path, title, excerpt, progress, scrollY, headingId, updatedAt }
// upsertTrailSnapshot(snapshot): deduplicate + slice(0, 18)
// restoreSnapshotPosition(snapshot): scrollIntoView 或 scrollTo
```

---

## 五、CSS 迁移方案 ✅

### 5.1 CSS Modules 命名对照

所有现有的 CSS 类名直接保留，在 `.module.css` 文件中使用：

| 原文件 | 原类名示例 | 迁移后 |
|--------|-----------|--------|
| `base.css` | `.Layout`, `.VPNav`, `.VPDoc .vp-doc h1` | `Layout.module.css` → `.layout`, `.navBar` |
| `home-lab.css` | `.home-fx-toggle`, `.home-scene--apple` | `HomePage.module.css` → `.fxToggle`, `.sceneApple` |
| `editor.css` | `.home-editor-canvas`, `.chapter-spotlight` | `EditorPanel.module.css` → `.canvas`, `.chapterSpotlight` |

**BEM 命名转换规则：**
- `.home-fx-toggle--liquid` → `.fxToggleLiquid`
- `.home-scene--apple` → `.sceneApple`
- `.scene-apple__hero` → `.sceneAppleHero`
- `.home-liquid-player__transport` → `.liquidPlayerTransport`

### 5.2 tokens.css 直接复用

`src/styles/tokens.css` 完整复制，不做任何修改。所有 CSS Variables 保留 `--oil-*` 前缀。

### 5.3 dark mode 处理

Next.js App Router 推荐方案：

```tsx
// src/app/layout.tsx
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

```tsx
// src/components/providers/ThemeProvider.tsx
// 1. 在 mount 时读取 localStorage['theme'] 或 prefers-color-scheme
// 2. 在 <html> 上设置 classList.toggle('dark', isDark)
// 3. 监听 system preference 变化
// 4. 监听 VitePress 的 dark mode 按钮（如果有自定义实现）
```

---

## 六、路由与内容加载 ✅

### 6.1 路由映射

| VitePress 路由 | Next.js App Router |
|-----------------|-------------------|
| `/` | `app/page.tsx` |
| `/Sky-Take-Out/00-后端开发知识大本营` | `app/docs/sky-take-out/00-后端开发知识大本营/page.tsx` |
| `/Code/DS/DFS` | `app/docs/code/ds/dfs/page.tsx` |
| `/MyWeb/00-文档目录` | `app/docs/myweb/00-文档目录/page.tsx`（注意：中文路由需 URL 编码） |

**中文字符路由处理**：Next.js App Router 支持中文字符作为 slug，但更推荐使用 slugify 方案：

```typescript
// src/lib/slugify.ts
export function toSlug(text: string): string {
  return text
    .replace(/\.mdx?$/, '')           // 移除扩展名
    .normalize('NFKC')                  // Unicode 规范化
    .replace(/[^\p{L}\p{N}\s-]/gu, '') // 移除特殊字符
    .replace(/\s+/g, '-')             // 空格变连字符
}
```

### 6.2 动态路由 `[...slug]`

```typescript
// src/app/docs/[...slug]/page.tsx
// generateStaticParams(): 扫描 content/ 所有 MDX 文件，生成所有 slug 组合
// MDX 渲染用 next-mdx-remote/rsc
// frontmatter 用 gray-matter 读取
// TOC 用 src/lib/toc.ts 提取
```

### 6.3 Sidebar 自动生成

```typescript
// src/lib/sidebar.ts
// scanContentDir(dir: string): SidebarGroup[]
// 1. fs.readdirSync(dir)
// 2. 对每个 .mdx/.md 文件读取 frontmatter 的 title
// 3. 按文件名数字前缀排序（00-, 01-, 02-...）
// 4. 忽略 _meta.json 中的 exclude 字段
// 5. 返回 SidebarGroup[] 结构（与 VitePress sidebar 格式兼容）
```

---

## 七、构建与部署 ✅

### 7.1 GitHub Actions 工作流

```yaml
# .github/workflows/deploy.yml
name: Build & Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci
      - run: npm run build
        env:
          NODE_OPTIONS: '--max-old-space-size=3072'

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: next-build
          path: .next/
          retention-days: 1

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Download artifact
        uses: actions/download-artifact@v4
        with:
          name: next-build
          path: .next/

      - name: Deploy to server
        run: |
          # rsync 到服务器，部署 .next/ 输出
          # 服务器上只运行: next start
```

### 7.2 服务器部署脚本

```bash
#!/bin/bash
# deploy.sh（在服务器上执行）
cd /var/www/wexler-notes
git pull origin main
npm ci --production
NODE_OPTIONS="--max-old-space-size=384" next start -p 3000
```

---

## 八、Obsidian 写作流程保留 ✅

### 8.1 内容复制脚本

```typescript
// scripts/migrate-docs.ts
// 将 my-knowledge-base/docs/ 下的 .md 文件复制到 src/content/
// 转换逻辑：
// 1. 跳过 .vitepress/、.obsidian/、public/
// 2. .md -> .mdx（仅改扩展名，内容不变）
// 3. 处理 frontmatter（确保有 --- 包裹）
// 4. Callout 语法转换：> [!note] -> <Callout type="note">
//    > [!warning] -> <Callout type="warning">
// 5. 输出迁移报告（转换了多少文件，有什么需要手动处理的）
```

### 8.2 保留的 Git 工作流

```
Obsidian 编辑笔记（本地 Vault）
       ↓
Obsidian Git 插件推送 → GitHub
       ↓
GitHub Actions 触发：
  1. npm ci
  2. npm run migrate   # 执行 scripts/migrate-docs.ts
  3. npm run build    # next build
       ↓
  rsync .next/ → 服务器
       ↓
服务器：next start
```

---

## 九、组件实现规格 ✅

### 9.1 首页三场景组件

#### `KeynoteScene.tsx`

对应 `HomeLayoutScenes.vue` 中的 `.home-scyle--apple`：

```tsx
// 包含的子区块：
// - scene-apple__hero    → sceneAppleHero
//   - eyebrow: "WEXLER'S NOTES · DIGITAL GARDEN"
//   - h1: "Build Once, Compound Forever"
//   - body: "把算法、后端、部署、复盘沉淀成可复用知识系统..."
//   - actions: 进入知识库 / 查看 GitHub
// - scene-apple__band     → sceneAppleBand（4 栏统计）
// - scene-apple__triptych → sceneAppleTriptych（3 列卡片）
// - scene-apple__rail    → sceneAppleRail（底部横向链接）
```

#### `WorkbenchScene.tsx`

对应 `.home-scene--dashboard`：

```tsx
// - scene-dash__layout    → sceneDashLayout（grid: aside + main）
// - scene-dash__side      → sceneDashSide
// - scene-dash__main      → sceneDashMain
//   - scene-dash__hero    → sceneDashHero
//   - scene-dash__kpi     → sceneDashKpi（3 栏）
//   - scene-dash__matrix   → sceneDashMatrix（2x2 网格）
```

#### `MediaScene.tsx`

对应 `.home-scene--media`：

```tsx
// - scene-media__hero     → sceneMediaHero
// - scene-media__body     → sceneMediaBody（grid: feature + stack）
// - scene-media__ticker   → sceneMediaTicker（横向滚动标签）
```

### 9.2 BGM 播放器规格

对应 `HomeFxBackdrop.vue` 中的液态播放器部分：

```tsx
// LIQUID_BGM_SRC    = '/media/home-bgm/liquid-bgm.flac'
// LIQUID_BGM_TITLE  = '60% Reverie'
// LIQUID_BGM_ARTIST = 'ZZ-STUDIO x HOYO-MiX'
// LIQUID_HERO_LABEL = 'Digital Garden'
// LIQUID_HERO_TITLE = "Wexler's Notes"
// LIQUID_HERO_SUBTITLE = '全栈开发与运维知识库'

// 播放器状态：
// - isPlaying, currentTime, duration, volume
// - isMiniPlayer, isVolumePanelVisible
// - 播放/暂停/±10s 快进快退
// - 时间轴拖拽
// - 音量控制（范围 0-100）
// - 迷你模式（收起歌词，只留运输控件）
```

### 9.3 可视化编辑器 Block Schema

```typescript
// src/types/editor.ts
interface Block {
  id: string                           // 'block-${Date.now()}-${random}'
  kind: 'text'                         // 当前唯一类型
  x: number                            // 0-5000
  y: number                            // 0-5000
  w: number                            // 180-1200（最小/最大宽度）
  h: number                            // 90-900（最小/最大高度）
  z: number                            // 图层顺序
  opacity: number                      // 0.05-1
  radius: number                       // 0-60
  blur: number                          // 0-24（backdrop-filter blur px）
  bg: string                           // CSS background 值，如 'rgba(16, 28, 40, 0.34)'
  color: string                        // CSS color 值，如 '#f3f7fc'
  kicker: string                       // 前缀标签
  title: string                        // 标题
  body: string                         // 正文
}

// SNAP_GRID = 12px（拖拽吸附网格）
// SNAP_THRESHOLD = 8px（吸附阈值）
// MAX_HISTORY_STEPS = 50（undo 栈深度）
// CANVAS_LIMIT = 5000px（画布最大宽高）
```

### 9.4 FPS 探测规格

对应 `HomeFxBackdrop.vue` 的 `runFpsProbe()`：

```typescript
// 在 Backdrop 组件 useEffect 中实现：
// - 运行 1800ms
// - 期间统计帧数，计算 fps = frames * 1000 / elapsed
// - 如果 fps < 44 → setPerfMode('safe')
// - stopFpsProbe cleanup on unmount / mode change
```

---

## 十、CSS 动画保留清单 ✅

| 动画名称 | 关键帧 | 迁移位置 |
|---------|--------|---------|
| `theme-reveal` | `clip-path: circle(0→150%)` | `tokens.css` |
| `revealOil` | `opacity+translateY(20px→0)` | `effects.css` |
| `oilFloat` | `rotate(-1.4deg→-0.7deg)` + `translateY(0→-8px)` | `effects.css` |
| `homeFxDrift` | `scale(1.05→1.09→1.07)` + `translate` | `effects.css` |
| `homeFxBlobFloat` | `translate + scale` | `effects.css` |
| `home-scene-enter` | `opacity+translateY+scale` | `effects.css` |
| 主题切换圆形扩散 | `.theme-transition-overlay` + CSS `--transition-origin-x/y` | `effects.css` |
| `.back-to-top` transition | Vue `<Transition name="back-to-top">` | React: CSS class toggle + CSS transition |

---

## 十一、已知技术债 ✅

> 以下技术债已在本次重构中处理或记录。

| # | 问题 | 状态 | 处理方式 |
|---|------|------|---------|
| 1 | `DocExperienceEnhancer` 被 import 但无文件 | ✅ 已处理 | 该 import 已在 React 组件中移除 |
| 2 | FX classes 有两个 writer（uiModeState + HomeFxBackdrop） | ✅ 已统一 | 统一为 `useUiMode` hook 唯一写者 |
| 3 | 重复调用 `initUiModeState()`（每个组件 mount 时） | ✅ 已处理 | 移至 `layout.tsx` 一次初始化 |
| 4 | `HomeFxToggle` 和 `HomeFxBackdrop` 各自维护 dark mode 状态 | ✅ 已合并 | 合并到 `ThemeProvider` |
| 5 | `collectStoredRoutes()` O(n) 遍历所有 localStorage | ⏳ 未处理 | 计划建立索引 Map |
| 6 | `EditableHomeCanvas.vue` 1659 行无拆分 | ✅ 已拆分 | 拆为多个 hooks + 子组件（`PageEditor`、`EditorToolbar`、`EditorPanel`、`EditorToggle`） |
| 7 | `HomeLayoutScenes` 场景内容硬编码 | ✅ 已迁移 | 迁移为 React 组件固定内容，后续可扩展为 frontmatter 配置 |
| 8 | CSS 中 `.scene-apple__triptych` / `.scene-apple__rail` 无定义 | ✅ 已清理 | 未迁移到 CSS Modules 中（原文无定义） |
| 9 | `home-liquid-intro-card` CSS 有规则但 markup 被移除 | ⏳ 未处理 | 需后续评估是否恢复 |
| 10 | `editorState.js` 用 `hasOwnProperty` 而非 `Object.hasOwn()` | ✅ 已处理 | TypeScript 重写中使用 `Object.hasOwn()` |
| 11 | 无 TypeScript | ✅ 已处理 | 全程 TypeScript 重写，所有文件已类型化 |

---

## 十二、重构验收标准

1. **内容一致性**：88 篇 MD 文件全部可访问，路径映射正确
2. **视觉一致性**：首页三场景布局与 VitePress 版本 1:1 对齐
3. **FX 模式切换**：常态/晶透/液态三种模式切换流畅
4. **BGM 播放器**：液态模式 BGM 播放、暂停、音量控制正常
5. **编辑器**：Block 拖拽、缩放、属性修改、undo/redo、发布/导出正常
6. **命令面板**：Ctrl+K 面板正常打开、搜索、导航、快照恢复正常
7. **阅读增强**：进度条、章节导航、回到顶部正常
8. **Dark mode**：深色/浅色模式切换正常
9. **构建成功**：`npm run build` 无错误
10. **CI/CD**：`GitHub Actions` 构建成功并部署到服务器
11. **Obsidian 流程**：现有 `docs/` 推送 → GitHub → 自动构建 → 服务器生效

---

*文档版本：v1.1 — 主框架完成*
*最后更新：2026-04-05*
*维护者：Wexler's Notes AI 助手*

---

## 附录：实现进度详情

> 以下列出所有已实现文件的路径（相对于 `wexler-notes-next/`）。

### A.1 项目配置

| 文件 | 状态 |
|------|------|
| `package.json` | ✅ |
| `tsconfig.json` | ✅ |
| `next.config.ts` | ✅ |
| `.vscode/settings.json` | ✅ |

### A.2 类型定义 `src/types/`

| 文件 | 状态 |
|------|------|
| `src/types/mdx.ts` | ✅ |
| `src/types/sidebar.ts` | ✅ |
| `src/types/editor.ts` | ✅ |
| `src/types/uiMode.ts` | ✅ |

### A.3 核心库 `src/lib/`

| 文件 | 状态 |
|------|------|
| `src/lib/mdx.ts` | ✅ |
| `src/lib/toc.ts` | ✅ |
| `src/lib/sidebar.ts` | ✅ |
| `src/lib/slugify.ts` | ✅ |
| `src/lib/editor/blockSchema.ts` | ✅ |
| `src/lib/editor/history.ts` | ✅ |
| `src/lib/editor/export.ts` | ✅ |
| `src/lib/editor/storage.ts` | ✅ |

### A.4 React Hooks `src/hooks/`

| 文件 | 状态 |
|------|------|
| `src/hooks/useUiMode.ts` | ✅ |
| `src/hooks/useReadingTrail.ts` | ✅ |
| `src/hooks/useReadingProgress.ts` | ✅ |
| `src/hooks/useEditor.ts` | ✅ |

### A.5 Providers & App 入口

| 文件 | 状态 |
|------|------|
| `src/components/providers/ThemeProvider.tsx` | ✅ |
| `src/app/globals.css` | ✅ |
| `src/app/layout.tsx` | ✅ |
| `src/app/page.tsx` | ✅ |
| `src/app/not-found.tsx` | ✅ |
| `src/app/sitemap.ts` | ✅ |
| `src/app/docs/[...slug]/page.tsx` | ✅ |

### A.6 布局组件 `src/components/layout/`

| 文件 | 状态 |
|------|------|
| `src/components/layout/MainLayout.tsx` + `.module.css` | ✅ |
| `src/components/layout/Navbar.tsx` + `.module.css` | ✅ |
| `src/components/layout/Sidebar.tsx` + `.module.css` | ✅ |
| `src/components/layout/Footer.tsx` + `.module.css` | ✅ |

### A.7 首页组件 `src/components/home/`

| 文件 | 状态 |
|------|------|
| `src/components/home/HomePage.tsx` + `.module.css` | ✅ |
| `src/components/home/FxToggle.tsx` + `.module.css` | ✅ |
| `src/components/home/LayoutToggle.tsx` + `.module.css` | ✅ |
| `src/components/home/Backdrop.tsx` + `.module.css` | ✅ |
| `src/components/home/BgmPlayer.tsx` + `.module.css` | ✅ |
| `src/components/home/scenes/KeynoteScene.tsx` + `.module.css` | ✅ |
| `src/components/home/scenes/WorkbenchScene.tsx` + `.module.css` | ✅ |
| `src/components/home/scenes/MediaScene.tsx` + `.module.css` | ✅ |

### A.8 编辑器组件 `src/components/editor/`

| 文件 | 状态 |
|------|------|
| `src/components/editor/PageEditor.tsx` + `.module.css` | ✅ |
| `src/components/editor/EditorToolbar.tsx` + `.module.css` | ✅ |
| `src/components/editor/EditorPanel.tsx` + `.module.css` | ✅ |
| `src/components/editor/EditorToggle.tsx` + `.module.css` | ✅ |

### A.9 阅读增强 & 命令面板

| 文件 | 状态 |
|------|------|
| `src/components/reading/ReadingEnhancer.tsx` + `.module.css` | ✅ |
| `src/components/command/CommandPalette.tsx` + `.module.css` | ✅ |

### A.10 MDX 组件 `src/components/mdx/`

| 文件 | 状态 |
|------|------|
| `src/components/mdx/MDXComponents.tsx` + `.module.css` | ✅ |
| `src/components/mdx/Callout.tsx` | ✅ |
| `src/components/mdx/CodeBlock.tsx` | ✅ |
| `src/components/mdx/TableOfContents.tsx` + `.module.css` | ✅ |

### A.11 样式文件 `styles/`

| 文件 | 状态 |
|------|------|
| `styles/tokens.css` | ✅ (直接复用) |
| `styles/layers.css` | ✅ (直接复用) |
| `styles/effects.css` | ✅ (直接复用) |
| `styles/base.css` | ✅ (类名迁移) |
| `styles/home-lab.css` | ✅ (类名迁移) |
| `styles/editor.css` | ✅ (类名迁移) |

### A.12 脚本 & CI/CD

| 文件 | 状态 |
|------|------|
| `scripts/migrate-docs.ts` | ✅ |
| `.github/workflows/deploy.yml` | ✅ |
