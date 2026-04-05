# CHANGELOG-UI

> UI 层架构变更日志。每次发布前更新此文件。

---

## [Unreleased] — 架构重构版

### Phase 1 — 目录与状态重构

**目录结构**
- 所有 `.vue` 组件按职责分入 `components/core/`、`components/home-lab/`、`components/editor/`
- 所有状态文件统一迁移到 `stores/`
- `theme/index.js` 改为纯装配层，不再承载业务逻辑

**状态管理**
- 新建 `stores/uiModeState.js`：FX 模式（default/glass/liquid）、布局模式（minimal/dashboard/editorial）、性能模式（normal/safe）三合一单点写入
- `document.documentElement.classList` 的写入权仅归 `uiModeState.js`，其他组件只读状态
- 路由路径统一由 `setRoutePath()` 注入 store，确保 layout class 作用域正确

**受影响文件**
- `components/home-lab/HomeFxBackdrop.vue`：接入 `uiModeState`，移除本地 `performanceSafe` ref
- `components/home-lab/HomeFxToggle.vue`：接入 `uiModeState`，移除本地 MutationObserver class 同步
- `components/home-lab/HomeLayoutToggle.vue`：移除本地 `syncHtmlClass()`，改用 `syncAllClasses()`
- `components/home-lab/HomeLayoutScenes.vue`：接入 `uiModeState`
- `components/core/CommandPalette.vue`：接入 `uiModeState`
- `components/editor/EditableHomeCanvas.vue`：import 路径更新
- `components/editor/PageEditorToggle.vue`：import 路径更新

### Phase 2 — CSS 分层重构

- `style.css`：从 8116 行缩减为 15 行纯 import 聚合
- 新增 `styles/tokens.css`（127 行）：全部 CSS 变量
- 新增 `styles/layers.css`（13 行）：7 个 z-index token
- 新增 `styles/base.css`（945 行）：全局 Layout/VPNav/VPDoc 基础样式
- 新增 `styles/home-lab.css`（2405 行）：首页 `.home-lab*` 全部规则
- 新增 `styles/effects.css`（144 行）：主题过渡动画 + 进场 keyframes
- 新增 `styles/editor.css`（1637 行）：编辑器 + 命令面板 + 阅读增强 + 灯箱

### Phase 3 — 层级冲突治理

- `styles/layers.css` 定义 7 个层级 token：`--z-bg` / `--z-content` / `--z-nav` / `--z-overlay` / `--z-editor` / `--z-modal` / `--z-transition`
- `styles/effects.css`：主题切换动画 overlay 改用 `--z-transition`
- `styles/editor.css`：章节导航面板改用 `--z-nav`
- `styles/home-lab.css`：多处背景层改用 `--z-bg`
- `styles/base.css`：基础 Layout 背景改用 `--z-bg`

### Phase 4 — 性能治理

- `components/core/ReadingEnhancer.vue`：合并 `resize` 的两个独立 listener 为单一被动监听，统一经 RAF 节流
- `components/editor/EditableHomeCanvas.vue`：为 `resize` 添加 RAF 节流（`onResizeThrottled`），避免频繁触发 `refreshCanvasMetrics`
- `components/home-lab/HomeFxToggle.vue`：保留 `MutationObserver`（监听系统 `dark` class，与 FX 模式状态解耦，独立合理）

---

## 早期版本

暂无记录（请在架构重构完成前补充）
