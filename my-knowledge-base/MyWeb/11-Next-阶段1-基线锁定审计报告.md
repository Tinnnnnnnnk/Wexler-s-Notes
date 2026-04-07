# 第1阶段：基线锁定审计报告

**项目**: Wexler's Notes (Next.js 全栈知识库)
**子项目**: `wexler-notes-next`
**审计时间**: 2026-04-07
**审计人**: 只读验收审计 AI
**版本基准**: v1.0.0

---

## 1. 审计范围与方法

**范围**：
- 核心路由与文档渲染链路（`src/app/page.tsx`、`src/app/docs/[...slug]/page.tsx`）
- 首页风格系统（FxMode: default/glass/liquid, LayoutMode: minimal/dashboard/editorial）
- 文档阅读增强功能（进度条、章节导航、回顶）
- MDX 兼容链路（迁移脚本、运行时预处理）
- 资源约定（背景、BGM 目录）
- 构建与代码质量

**方法**：
- 只读扫描：静态代码审查、目录结构检查
- 构建验证：执行 `npm run build`（记录结果）
- 交叉验证：对比源码结构与目标基线

---

## 2. 环境与命令记录

| 项目 | 详情 |
|------|------|
| **根目录** | `D:\Github\Wexler-s-Notes` |
| **子项目入口** | `D:\Github\Wexler-s-Notes\wexler-notes-next` |
| **Node 版本** | v22.x (via nvm/系统) |
| **包管理器** | npm |
| **运行命令** | `npm run dev` / `npm run build` |
| **迁移命令** | `npm run migrate` |
| **检查命令** | `npm run lint` |

**Lint 执行结果**：
```
Error: `next lint` is deprecated.
Reason: ESLint is not installed.
Status: BLOCKED
```
**证据**: `wexler-notes-next/package.json` scripts 定义了 `lint`，但依赖项中缺少 `eslint`。

**Build 执行结果**：
```
Status: HANGING (进程卡在 Next.js 编译初始化阶段)
Reason: 未完成验证，疑似环境问题或构建配置缺陷
Duration: > 5 分钟无输出
```
**证据**: `npm run build` 输出仅显示 `▲ Next.js 15.5.14`，之后无进展。

---

## 3. 已完成（符合预期）

### 3.1 项目结构与双工程脚本
- [x] 根目录 `package.json` 存在并定义了 `next:dev`、`next:build`、`next:migrate` 快捷命令
- [x] 子项目 `package.json` 包含完整依赖（next 15.3.0, react 19, next-mdx-remote 5.0.0 等）
- [x] 目录结构清晰（`src/app`, `src/components`, `src/lib`, `src/content`, `public`）

**证据**:
- `package.json:1-11`
- `wexler-notes-next/package.json:1-35`

### 3.2 路由与静态生成
- [x] `generateStaticParams` 已实现，支持 slug 数组
- [x] slug 解码逻辑存在（`decodeSlugSegment` in `src/lib/contentPath`）
- [x] 中文路径、含空格路径通过 `encodeURIComponent` 兼容

**证据**:
- `src/app/docs/[...slug]/page.tsx:246-250`
- `src/app/docs/[...slug]/page.tsx:164-170` (addParamVariants)
- `src/app/docs/[...slug]/page.tsx:279-288` (redirect/fallback)

### 3.3 MDX 兼容链路
- [x] 迁移脚本 `scripts/migrate-docs.ts` 包含 `fixMdxCompatibility` 函数
- [x] 独立修复脚本 `scripts/fix-existing-mdx.ts` 存在
- [x] 运行时预处理 `preprocessDocsSource` 已接入文档渲染链路
- [x] 核心修复逻辑：
  - `class` -> `className`（JSX 兼容性）
  - `<>` 空标签 -> `<span></span>`
  - 大括号转义
  - 数学公式处理（`$...$`, `$$...$$`）

**证据**:
- `scripts/migrate-docs.ts:44-84`
- `scripts/fix-existing-mdx.ts:23-76`
- `src/app/docs/[...slug]/page.tsx:67-130` (preprocessDocsSource)

### 3.4 首页风格系统（FxMode）
- [x] 状态管理 `UiModeProvider` 完整实现了 FxMode（default/glass/liquid）
- [x] 风格状态持久化（localStorage: `wexler.homeFx.mode`）
- [x] DOM class 切换（`home-default-mode`, `home-glass-mode`, `home-liquid-mode`）
- [x] 风格切换 UI `FxToggle` 组件存在并支持三种模式

**证据**:
- `src/components/providers/UiModeProvider.tsx:8-15` (FX_CLASSES)
- `src/components/providers/UiModeProvider.tsx:113-117` (setFxMode)
- `src/components/home/FxToggle.tsx:54-86`

### 3.5 布局模式切换（LayoutMode）
- [x] `UiModeProvider` 实现了 LayoutMode（minimal/dashboard/editorial）
- [x] 三种布局场景组件存在：`KeynoteScene`、`WorkbenchScene`、`MediaScene`
- [x] `LayoutToggle` 组件存在

**证据**:
- `src/components/providers/UiModeProvider.tsx:17-21` (LAYOUT_CLASSES)
- `src/components/home/HomePage.tsx:41-43`
- `src/components/home/LayoutToggle.tsx`

### 3.6 文档阅读增强
- [x] 阅读进度条 `EnhancedReadingProgress` 组件存在并接入
- [x] 回顶功能（`ReadingEnhancer` 中的 `scrollToTop`）
- [x] 章节导航浮层面板（`ReadingEnhancer` 中的 `spotlight`）
- [x] 章节导航拖动（`ReadingEnhancer:124-157`）
- [x] 章节导航折叠（`ReadingEnhancer:159-169`）
- [x] 当前章节高亮（`ReadingEnhancer:211`）
- [x] 左侧边栏 `EnhancedSidebar` / `Sidebar` 组件存在

**证据**:
- `src/components/article/EnhancedReadingProgress.tsx` (进度条)
- `src/components/reading/ReadingEnhancer.tsx:28-223` (全功能)
- `src/components/layout/EnhancedSidebar.tsx` (侧边栏)
- `src/app/docs/[...slug]/page.tsx:359-360` (接入)

### 3.7 资源目录约定
- [x] 背景资源目录 `public/media/home-bg/` 存在（空目录，待填充）
- [x] BGM 目录 `public/media/home-bgm/` 存在（空目录，待填充）

**证据**: 目录扫描结果

---

## 4. 待完成（缺失/阻塞）

### 4.1 ESLint 依赖缺失
- **缺失**: `eslint` 及相关配置
- **影响**: `npm run lint` 无法执行，代码质量检查流程断裂
- **阻塞级别**: P1

**证据**:
- `wexler-notes-next/package.json:27-33` (devDependencies 无 eslint)
- Lint 执行输出: `ESLint must be installed`

### 4.2 BGM 资源缺失
- **缺失**: `public/media/home-bgm/` 目录下无任何音频文件
- **影响**: Liquid 模式下 BGM 播放器无法播放音乐
- **目标路径**: `liquid-bgm.opus/flac/mp3`

**证据**:
- `src/components/home/BgmPlayer.tsx:13-17` (BGM_CANDIDATES)
- 目录扫描结果（`public/media/home-bgm` 空）

### 4.3 背景资源缺失
- **缺失**: `public/media/home-bg/` 目录下无任何资源文件
- **影响**: 首页背景无法显示（取决于 Backdrop 组件实现逻辑）
- **阻塞级别**: P1

**证据**: 目录扫描结果

### 4.4 构建验证超时
- **现象**: `npm run build` 卡在 `Next.js 15.5.14` 初始化阶段超过 5 分钟无输出
- **可能根因**:
  1. 依赖安装不完整（`.next` 缓存残留）
  2. Windows 环境下的构建配置问题
  3. 文档数量过多（70+ MDX 文件）导致编译超时
- **建议**: 需在干净的终端环境中重新执行完整构建

---

## 5. 已完成但与目标不一致

### 5.1 Liquid 模式布局未完全对齐
- **目标**: 液态模式下首页应趋于极简，仅保留站点介绍模块 + BGM 播放器
- **实际**: `LiquidScene.tsx` 仅渲染了 `intro` + `BgmPlayer`，但 `HomePage.tsx` 仍然渲染了 `PageEditor` 和 `ReadingEnhancer`（虽然这两个组件可能不占视觉空间）
- **风险**: 极简模式下不应存在的内容组件（如 PageEditor）仍被加载

**证据**:
- `src/components/home/HomePage.tsx:29-30` (PageEditor 和 ReadingEnhancer 未被条件排除)
- `src/components/home/scenes/LiquidScene.tsx:7-19`

### 5.2 样式目录并存风险
- **现象**: 项目中同时存在 `src/styles/` 和 `styles/` 两个样式目录
- `src/styles/`: base.css, effects.css, design-system.css
- `styles/`: tokens.css, home-lab.css, layers.css, editor.css, base.css, effects.css
- **风险**: 可能造成维护歧义，部分样式文件重复

**证据**: 目录扫描结果
- `wexler-notes-next/src/styles/` (3 files)
- `wexler-notes-next/styles/` (6 files)

### 5.3 BgmPlayer 在 Liquid 模式下样式不透明
- **目标**: BGM 播放器应有轻微卡片感、较高通透度
- **实际**: `LiquidScene.tsx` 使用 `BgmPlayer variant="stage"`
- **未确认**: 需要实际渲染验证是否达到目标"高通透 + 轻微卡片感"

**证据**: `src/components/home/scenes/LiquidScene.tsx:16`

### 5.4 增强侧边栏（EnhancedSidebar）未接入
- **现象**: `ResponsiveMainLayout` 使用的是基础 `Sidebar` 组件，而非 `EnhancedSidebar`
- **影响**: 搜索、分组折叠等增强功能不可用
- **证据等级**: 代码审查

**证据**:
- `src/components/layout/ResponsiveMainLayout.tsx:59` (使用 Sidebar)
- `src/components/layout/Sidebar.tsx` (基础版本，无搜索/折叠)
- `src/components/layout/EnhancedSidebar.tsx` (增强版本，存在于 components 目录但未接入)

---

## 6. 高风险项（P0/P1/P2）

| 优先级 | 项 | 描述 | 预计工时 |
|--------|------|------|----------|
| **P0** | 构建验证 | `npm run build` 超时，无法确认生产构建可用性 | 0.5h |
| **P1** | ESLint 缺失 | `npm run lint` 失效，代码质量流程断裂 | 0.5h |
| **P1** | 背景资源缺失 | `public/media/home-bg/` 空，首页视觉可能不完整 | 待定 |
| **P1** | EnhancedSidebar 未接入 | 搜索、折叠功能不可用 | 0.5h |
| **P2** | BGM 资源缺失 | `public/media/home-bgm/` 空，液态模式音乐播放缺失 | 待定 |
| **P2** | 样式目录并存 | 双重 styles 目录可能导致维护混乱 | 0.5h |
| **P2** | Liquid 模式冗余组件 | PageEditor/ReadingEnhancer 在极简模式下仍被加载 | 0.5h |

---

## 7. 第2阶段执行清单（按优先级）

### Phase 2.1：环境与质量修复（前置）

1. **[P0] 重新执行构建验证**
   - 清理 `.next` 缓存
   - 重新执行 `npm run build`
   - 确认无编译错误
   - **预计工时**: 0.5h

2. **[P1] 安装 ESLint 依赖**
   - 安装 `eslint` 及 `@next/eslint-plugin-next`
   - 创建 `.eslintrc.json`
   - 验证 `npm run lint` 可执行
   - **预计工时**: 0.5h

### Phase 2.2：资源填充

3. **[P1] 填充背景资源**
   - 将目标背景图片/视频放入 `public/media/home-bg/`
   - 验证 Backdrop 组件加载正常
   - **预计工时**: 1h（视资源来源）

4. **[P2] 填充 BGM 资源**
   - 将目标音频放入 `public/media/home-bgm/`
   - 支持格式: `.opus`, `.flac`, `.mp3`
   - **预计工时**: 0.5h（视资源来源）

### Phase 2.3：功能对齐

5. **[P1] 接入 EnhancedSidebar**
   - 将 `ResponsiveMainLayout` 中的 `Sidebar` 替换为 `EnhancedSidebar`
   - 验证搜索、分组折叠功能正常
   - **预计工时**: 0.5h

6. **[P2] 优化 Liquid 模式加载逻辑**
   - 检查 `HomePage.tsx` 中 Liquid 模式分支
   - 移除不必要的组件（PageEditor/ReadingEnhancer）加载
   - **预计工时**: 0.5h

### Phase 2.4：样式治理

7. **[P2] 样式目录整合**
   - 评估 `src/styles/` 和 `styles/` 的使用情况
   - 合并或明确区分职责
   - **预计工时**: 1h

### Phase 2.5：验证测试

8. **[P1] 功能验收测试**
   - 验证三种风格切换（default/glass/liquid）
   - 验证三种布局切换（minimal/dashboard/editorial）
   - 验证 BGM 播放（播放/暂停/进度/音量/最小化）
   - 验证文档阅读（进度条/章节导航/拖动/折叠）
   - **预计工时**: 1h

---

## 8. 附录：关键证据文件路径与行号

| 功能 | 文件路径 | 关键行号 |
|------|----------|----------|
| 首页入口 | `src/app/page.tsx` | 1-13 |
| 文档路由 | `src/app/docs/[...slug]/page.tsx` | 246-250, 279-288, 359-360 |
| 风格系统 | `src/components/providers/UiModeProvider.tsx` | 8-15, 60-68, 84-151 |
| FxToggle | `src/components/home/FxToggle.tsx` | 54-86 |
| LayoutToggle | `src/components/home/LayoutToggle.tsx` | 1-40 |
| LiquidScene | `src/components/home/scenes/LiquidScene.tsx` | 1-19 |
| BgmPlayer | `src/components/home/BgmPlayer.tsx` | 13-17, 33-219 |
| ReadingEnhancer | `src/components/reading/ReadingEnhancer.tsx` | 28-223 |
| 进度条 | `src/components/article/EnhancedReadingProgress.tsx` | 1-178 |
| 侧边栏（基础） | `src/components/layout/Sidebar.tsx` | 1-46 |
| 侧边栏（增强） | `src/components/layout/EnhancedSidebar.tsx` | 1-262 |
| 响应式布局 | `src/components/layout/ResponsiveMainLayout.tsx` | 1-93 |
| MDX 预处理 | `src/app/docs/[...slug]/page.tsx` | 67-130 |
| 迁移脚本 | `scripts/migrate-docs.ts` | 44-84 |
| 修复脚本 | `scripts/fix-existing-mdx.ts` | 23-76 |
| 项目配置 | `wexler-notes-next/package.json` | 1-35 |

---

**报告生成时间**: 2026-04-07
**报告版本**: v1.0
