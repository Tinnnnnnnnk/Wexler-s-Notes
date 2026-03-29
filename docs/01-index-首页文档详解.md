# index.md 首页文档详解

## 文件概述

**路径**: `D:\Github\Wexler-s-Notes\my-knowledge-base\docs\index.md`

**用途**: 这是 VitePress 网站的首页文件，定义了网站的主页面布局和内容。它使用 VitePress 的 Frontmatter 配置和自定义 HTML 来创建一个独特的"油画风格"首页。

---

## 文件结构总览

```
index.md
├── Frontmatter 配置区域 (第 1-18 行)
│   ├── layout: home          # 指定使用首页布局
│   ├── hero 配置            # Hero 区域（主横幅）
│   └── actions 配置         # 行动按钮
└── HTML 内容区域 (第 19-146 行)
    ├── oilhome-shell        # 主页容器
    ├── oilhome-intro        # 介绍区域
    ├── oilhome-signal       # 特色卡片区域
    ├── oilhome-lab          # 系统状态区域
    ├── oilhome-route        # 路线图区域
    ├── oilhome-grid         # 知识模块卡片区域
    └── oilhome-footer       # 页脚区域
```

---

## Frontmatter 配置详解

### 第 1-2 行
```yaml
---
layout: home
```
**注释**: `layout: home` 是 VitePress 的特殊配置，指定此页面使用首页布局（Home Layout）。这会启用 Hero 区域、特殊的内容展示方式等首页特性。

---

### 第 4-10 行 - Hero 配置
```yaml
hero:
  name: "Wexler."
  text: "油画肌理，冷色叙事。"
  tagline: "把算法、项目和部署经验沉淀成一份可长期复用的工程作品集。"
  image:
    src: /images/hero-abstract.jpg
    alt: Wexler Oil Style
```

**各配置项说明**:

| 配置项 | 值 | 说明 |
|--------|-----|------|
| `name` | `"Wexler."` | 网站名称，显示在 Hero 区域的显著位置 |
| `text` | `"油画肌理，冷色叙事。"` | 主标语，描述网站风格 |
| `tagline` | `"把算法..."` | 副标语，详细说明网站内容 |
| `image.src` | `/images/hero-abstract.jpg` | Hero 区域右侧的图片路径 |
| `image.alt` | `Wexler Oil Style` | 图片的替代文本（无障碍访问） |

---

### 第 11-17 行 - 行动按钮配置
```yaml
actions:
  - theme: brand
    text: 进入核心内容
    link: /Sky-Take-Out/00-后端开发知识大本营
  - theme: alt
    text: 查看 GitHub
    link: https://github.com/Tinnnnnnnnk/Wexler-s-Notes
```

**各配置项说明**:

| 配置项 | 值 | 说明 |
|--------|-----|------|
| `actions[0].theme` | `brand` | 品牌主题按钮（强调样式） |
| `actions[0].text` | `进入核心内容` | 按钮文字 |
| `actions[0].link` | `/Sky-Take-Out/...` | 内部链接路径 |
| `actions[1].theme` | `alt` | 备用主题按钮（次要样式） |
| `actions[1].text` | `查看 GitHub` | 按钮文字 |
| `actions[1].link` | `https://...` | 外部链接 |

**按钮主题说明**:
- `brand`: 主要行动按钮，使用品牌色背景
- `alt`: 备用按钮，使用透明背景和边框

---

## HTML 内容区域详解

### 第 20 行 - 主容器
```html
<div class="oilhome-shell">
```
**注释**: 主容器类，所有首页内容都包裹在这个容器内。`oilhome-shell` 类名遵循 BEM 命名规范（oilhome 是 block，shell 是 element）。

---

### 第 21-25 行 - 介绍区域
```html
<section class="oilhome-intro reveal-oil">
  <p class="oilhome-kicker">WEXLER NOTES · OIL PAINT EDITION</p>
  <h2>每一页笔记都不只是记录，而是下一次交付的底稿。</h2>
  <p class="oilhome-lead">内容按真实开发顺序组织，强调过程、决策与可复用模式。你看到的是知识，也是一套工作方法的持续迭代。</p>
</section>
```

**各元素说明**:

| 元素 | 类名 | 说明 |
|------|------|------|
| `<section>` | `oilhome-intro` | 介绍区域容器 |
| `<section>` | `reveal-oil` | 入场动画类，添加淡入上移动画 |
| `<p>` | `oilhome-kicker` | 小标签文字，用于标注站点名称和版本 |
| `<h2>` | - | 主要标语，副标题 |
| `<p>` | `oilhome-lead` | 引导性文字，详细说明 |

**`reveal-oil` 动画说明**:
这是一个 CSS 动画类，会在页面加载时触发动画效果，使元素从下方淡入显示。

---

### 第 27-46 行 - 特色卡片区域
```html
<section class="oilhome-signal reveal-oil">
  <article class="oilhome-signal__item">
    <p class="oilhome-kicker">BUILD LOOP</p>
    <h3>Push To Deploy</h3>
    <p>从写作到发布，一次提交串联文档、构建与部署。</p>
    <span>CI/CD · Docker · Nginx</span>
  </article>
  <!-- 重复的 article 块 -->
</section>
```

**结构说明**:
- 外层 `<section>` 使用 `oilhome-signal` 类，包含三个卡片
- 每个卡片使用 `<article>` 元素，类名为 `oilhome-signal__item`
- `<span>` 元素用于显示技术标签

**三个卡片内容**:

| 卡片 | kicker | 标题 | 描述 |
|------|--------|------|------|
| 1 | `BUILD LOOP` | `Push To Deploy` | 自动化部署流程 |
| 2 | `LEARNING SYSTEM` | `Problem To Pattern` | 学习与总结系统 |
| 3 | `DELIVERY STYLE` | `Notes As Product` | 交付标准 |

---

### 第 48-70 行 - 系统状态区域
```html
<section class="oilhome-lab reveal-oil">
  <div class="oilhome-lab__head">
    <p class="oilhome-kicker">SYSTEM STATUS</p>
    <h3>把学习、实战与交付连接成同一条工程流水线</h3>
  </div>
  <div class="oilhome-lab__list">
    <article class="oilhome-lab__item">
      <div class="oilhome-lab__title">
        <strong>Deploy Pipeline</strong>
        <span>CI Ready</span>
      </div>
      <p>文档变更可快速进入自动构建与部署链路，降低手工成本。</p>
      <div class="oilhome-lab__meter">
        <span style="--meter: 86%"></span>
      </div>
    </article>
    <!-- 更多 item... -->
  </div>
</section>
```

**进度条实现说明**:
进度条使用 CSS 自定义属性 `--meter` 来控制填充宽度：
```css
.oilhome-lab__meter span {
  width: var(--meter, 70%); /* 默认 70% */
}
```

在 HTML 中通过 `style="--meter: 86%"` 设置具体百分比。

---

### 第 72-107 行 - 路线图区域
```html
<section class="oilhome-route reveal-oil">
  <div class="oilhome-route__head">
    <p class="oilhome-kicker">ROADMAP SNAPSHOT</p>
    <h3>从输入到交付的一条主路径</h3>
  </div>
  <div class="oilhome-route__line">
    <a class="oilhome-route__node" href="/PromptLearning/day1">
      <span>01</span>
      <div>
        <h4>输入层</h4>
        <p>把问题转成可执行 Prompt 与任务切片。</p>
      </div>
    </a>
    <!-- 更多节点... -->
  </div>
</section>
```

**路线图结构**:
1. **输入层** (`/PromptLearning/day1`) - 问题转化为 Prompt
2. **训练层** (`/Code/DS/DFS`) - 算法与数据结构
3. **实战层** (`/Sky-Take-Out/...`) - 真实项目经验
4. **交付层** (`/Resume/简历V3.0`) - 成果展示

---

### 第 109-137 行 - 知识模块卡片区域
```html
<section class="oilhome-grid">
  <a class="oilhome-card oilhome-card--feature reveal-oil" href="/Code/DS/DFS">
    <p class="oilhome-card__tag">基础训练</p>
    <h3>算法与数据结构</h3>
    <p>围绕 BFS/DFS、树形 DP...</p>
    <span class="oilhome-card__meta">Code · DS · Hot100</span>
  </a>
  <!-- 更多卡片... -->
</section>
```

**卡片类型**:
- `oilhome-card--feature`: 特色卡片，占据更大的网格列宽（7 列）
- `oilhome-card`: 普通卡片（5 列）

**响应式网格系统**:
使用 CSS Grid 的 `span` 属性实现响应式布局：
```css
.oilhome-card--feature { grid-column: span 7; }
.oilhome-card { grid-column: span 5; }
```

---

### 第 139-146 行 - 页脚区域
```html
<section class="oilhome-footer reveal-oil">
  <div>
    <p class="oilhome-kicker">WORK PRINCIPLE</p>
    <h3>如果知识不能在真实项目中复用，它就还没有完成沉淀。</h3>
  </div>
  <a class="oilhome-footer__cta" href="/Resume/简历V3.0">查看阶段总结</a>
</section>
```

---

## CSS 类名命名规范

本文件遵循 **BEM（Block Element Modifier）** 命名规范：

| 格式 | 示例 | 说明 |
|------|------|------|
| `block` | `oilhome-shell` | 块级元素 |
| `block__element` | `oilhome-signal__item` | 块的子元素 |
| `block--modifier` | `oilhome-card--feature` | 块的变体 |
| `block__element--modifier` | - | 子元素的变体 |

---

## 修改指南

### 修改 Hero 区域的文字
在 Frontmatter 中修改 `hero` 配置：
```yaml
hero:
  name: "你的名字"
  text: "你的标语"
  tagline: "你的副标语"
```

### 修改背景图片
替换 `my-knowledge-base/docs/public/images/hero-abstract.jpg` 文件。

### 修改特色卡片内容
找到对应的 `<article class="oilhome-signal__item">` 块并编辑内容。

### 修改进度条百分比
修改 `style="--meter: XX%"` 中的数值。

### 修改路线图链接
修改 `<a class="oilhome-route__node">` 的 `href` 属性。

---

## 相关文件

- **样式文件**: `my-knowledge-base/docs/.vitepress/theme/style.css`
  - 定义了所有 `oilhome-*` 类名的样式
- **组件文件**: `my-knowledge-base/docs/.vitepress/theme/components/`
  - `HomeFxBackdrop.vue`: 首页背景效果
  - `ReadingEnhancer.vue`: 阅读增强功能
