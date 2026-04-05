# style.css 全局样式文件详解

## 文件概述

**路径**: `D:\Github\Wexler-s-Notes\my-knowledge-base\docs\.vitepress\theme\style.css`

**用途**: 这是网站的核心样式文件，定义了所有视觉风格，包括颜色系统、背景效果、组件样式、动画等。

**文件大小**: 约 4000+ 行 CSS 代码

---

## 文件结构总览

```
style.css
├── 第 1-66 行：颜色系统定义
│   ├── :root（浅色模式变量）
│   └── .dark（深色模式变量）
├── 第 68-92 行：主题切换动画
├── 第 94-148 行：基础布局和背景
├── 第 150-413 行：导航栏样式
├── 第 422-1111 行：首页背景效果（液态/晶透模式）
├── 第 1112-1499 行：液态舞台和播放器样式
├── 第 1474-1648 行：文档页面样式
├── 第 1682-2417 行：首页自定义区块样式
│   ├── oilhome-intro
│   ├── oilhome-signal
│   ├── oilhome-lab
│   ├── oilhome-route
│   ├── oilhome-grid
│   └── oilhome-footer
├── 第 2080-2143 行：动画关键帧
└── 第 2144-4114+ 行：交互和细节优化
```

---

## 第一部分：颜色系统（第 1-66 行）

### 浅色模式变量 - :root（第 3-40 行）

```css
:root {
  /* ===========================================
     基础颜色变量 - 油画冷色调
     =========================================== */
  
  /* 背景色系 */
  --oil-bg: #d8dee6;         /* 主背景色 - 冰灰蓝 */
  --oil-bg-deep: #ccd4de;    /* 深背景色 */
  --oil-surface: #edf1f6;    /* 表面色 - 用于卡片等 */
  --oil-surface-2: #e5ebf1;   /* 次表面色 */
  
  /* 文字色系 */
  --oil-ink: #1f2a38;        /* 主文字色 - 深墨蓝 */
  --oil-muted: #556272;      /* 次要文字色 - 雾灰蓝 */
  
  /* 强调色系 */
  --oil-accent: #4a6d86;      /* 主强调色 - 雾霾蓝 */
  --oil-accent-2: #6a8aa0;    /* 次强调色 */
  
  /* 边框和阴影 */
  --oil-line: rgba(31, 42, 56, 0.17);    /* 边框颜色 */
  --oil-shadow: 0 16px 34px rgba(16, 24, 35, 0.15);  /* 阴影 */
  
  /* 背景渐变色 - 冷色调油画风 */
  --oil-bg-gradient-1: rgba(106, 138, 160, 0.28);  /* 左上渐变 */
  --oil-bg-gradient-2: rgba(74, 109, 134, 0.22);   /* 右上渐变 */
  --oil-bg-gradient-3: rgba(126, 151, 173, 0.2);    /* 右下渐变 */
  --oil-bg-pattern: rgba(25, 36, 50, 0.035);        /* 背景纹理 */
  
  /* ===========================================
     VitePress 内置变量映射
     =========================================== */
  
  /* 品牌色映射 */
  --vp-c-brand-1: var(--oil-accent);    /* 品牌主色 */
  --vp-c-brand-2: #3f5d74;              /* 品牌深色 */
  --vp-c-brand-3: #334e64;              /* 品牌更深色 */
  
  /* 文字颜色映射 */
  --vp-c-text-1: var(--oil-ink);        /* 主文字 */
  --vp-c-text-2: var(--oil-muted);      /* 次要文字 */
  
  /* 背景颜色映射 */
  --vp-c-bg: var(--oil-bg);             /* 主背景 */
  --vp-c-bg-soft: var(--oil-surface);   /* 软背景 */
  --vp-c-bg-elv: var(--oil-surface);     /* 提升背景 */
  --vp-c-divider: var(--oil-line);      /* 分隔线 */
  
  /* 按钮颜色 */
  --vp-button-brand-bg: var(--oil-accent);       /* 品牌按钮背景 */
  --vp-button-brand-hover-bg: #3f5d74;           /* 品牌按钮悬停背景 */
  --vp-button-brand-text: #edf4f9;               /* 品牌按钮文字 */
  --vp-button-brand-border: transparent;          /* 品牌按钮边框 */
  
  /* 字体设置 */
  --vp-font-family-base: "Avenir Next", "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Noto Sans SC", "Microsoft YaHei", sans-serif;
  --vp-font-family-mono: "JetBrains Mono", "Cascadia Code", "Fira Code",
    "Consolas", monospace;
}
```

**颜色系统说明**:

| 变量前缀 | 含义 | 示例值 |
|---------|------|--------|
| `--oil-bg-*` | 背景色系 | `#d8dee6` (冰灰蓝) |
| `--oil-ink` | 墨色/主文字 | `#1f2a38` (深墨蓝) |
| `--oil-muted` | 次要文字 | `#556272` (雾灰蓝) |
| `--oil-accent` | 强调色 | `#4a6d86` (雾霾蓝) |
| `--vp-c-*` | VitePress 映射 | 映射到上述变量 |

---

### 深色模式变量 - .dark（第 42-66 行）

```css
.dark {
  /* 深色模式使用更深的蓝色调 */
  --oil-bg: #0f1620;           /* 深空蓝 - 主背景 */
  --oil-bg-deep: #0a1119;      /* 更深的背景 */
  --oil-surface: #172332;       /* 深色表面 */
  --oil-surface-2: #1c2b3d;     /* 深色次表面 */
  
  /* 文字颜色反转 */
  --oil-ink: #e6edf5;          /* 浅色文字 */
  --oil-muted: #b2c0cf;        /* 次要文字 */
  
  /* 强调色变亮 */
  --oil-accent: #88a8c0;        /* 浅雾霾蓝 */
  --oil-accent-2: #9cb9cd;      /* 次强调色 */
  
  /* 边框和阴影调整 */
  --oil-line: rgba(229, 237, 247, 0.18);
  --oil-shadow: 0 20px 44px rgba(1, 7, 12, 0.46);
  
  /* 背景渐变 - 星空深邃风 */
  --oil-bg-gradient-1: rgba(136, 168, 192, 0.22);
  --oil-bg-gradient-2: rgba(106, 138, 160, 0.18);
  --oil-bg-gradient-3: rgba(76, 108, 130, 0.17);
  --oil-bg-pattern: rgba(224, 235, 246, 0.035);
}
```

---

## 第二部分：主题切换动画（第 68-92 行）

```css
/* =============================================
   主题切换动画 - 从点击位置扩散的渐变效果
   ============================================= */
.theme-transition-overlay {
  position: fixed;         /* 固定定位，覆盖整个视口 */
  inset: 0;               /* 等同于 top/right/bottom/left: 0 */
  z-index: 99999;         /* 最高层级，确保在最上层 */
  pointer-events: none;    /* 不可点击，不阻挡交互 */
  
  /* 径向渐变背景 - 以点击位置为圆心 */
  background: radial-gradient(
    circle at var(--transition-origin-x, 100%) var(--transition-origin-y, 0%),
    var(--oil-bg) 0%,
    transparent 70%
  );
  
  /* 动画：圆形从 0% 扩展到 150% */
  animation: theme-reveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* 动画关键帧 */
@keyframes theme-reveal {
  0% {
    clip-path: circle(0% at var(--transition-origin-x) var(--transition-origin-y));
  }
  100% {
    clip-path: circle(150% at var(--transition-origin-x) var(--transition-origin-y));
  }
}
```

**动画原理**:
1. 使用 `clip-path: circle()` 裁剪出圆形区域
2. 圆形从 0%（不可见）扩展到 150%（完全覆盖）
3. 圆心位置由 `--transition-origin-x/y` CSS 变量控制
4. `cubic-bezier(0.4, 0, 0.2, 1)` 是 Material Design 的标准缓动曲线

---

## 第三部分：基础布局和背景（第 94-148 行）

### body 基础样式（第 94-97 行）

```css
body {
  /* 文字渲染优化 */
  text-rendering: optimizeLegibility;  /* 优化文字渲染 */
  font-feature-settings: "liga" 1, "calt" 1;  /* 启用连字和替代字形 */
}
```

---

### Layout 主容器（第 99-116 行）

```css
.Layout {
  position: relative;      /* 相对定位，用于子元素定位 */
  min-height: 100vh;       /* 最小高度为视口高度 */
  
  /* 多层径向渐变背景 + 线性渐变底层 */
  background:
    radial-gradient(circle at 10% -8%, var(--oil-bg-gradient-1), transparent 32%),  /* 左上光晕 */
    radial-gradient(circle at 88% 16%, var(--oil-bg-gradient-2), transparent 30%),   /* 右上光晕 */
    radial-gradient(circle at 72% 86%, var(--oil-bg-gradient-3), transparent 30%),   /* 右下光晕 */
    linear-gradient(180deg, var(--oil-bg) 0%, var(--oil-bg-deep) 100%);               /* 底部渐变 */
    
  /* 平滑过渡效果 */
  transition: background 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 深色模式布局 */
.dark .Layout {
  background:
    radial-gradient(circle at 10% -8%, var(--oil-bg-gradient-1), transparent 36%),
    radial-gradient(circle at 88% 16%, var(--oil-bg-gradient-2), transparent 34%),
    radial-gradient(circle at 72% 86%, var(--oil-bg-gradient-3), transparent 34%),
    linear-gradient(180deg, var(--oil-bg) 0%, var(--oil-bg-deep) 100%);
}
```

---

### 背景纹理层（第 118-137 行）

```css
/* 斜向线条纹理 */
.Layout::before {
  content: "";                    /* 伪元素内容为空 */
  position: fixed;                /* 固定定位 */
  inset: 0;                      /* 覆盖整个视口 */
  pointer-events: none;           /* 不阻挡交互 */
  
  /* 重复线性渐变 - 形成斜向条纹 */
  background:
    repeating-linear-gradient(
      25deg,                      /* 25度倾斜角 */
      var(--oil-bg-pattern) 0 6px,  /* 图案线条 */
      transparent 6px 24px         /* 透明间隙 */
    ),
    repeating-linear-gradient(
      -18deg,                     /* -18度倾斜角（交叉方向） */
      var(--oil-bg-pattern) 0 4px,
      transparent 4px 22px
    );
    
  opacity: 0.35;                 /* 透明度 */
  z-index: 0;                    /* 在内容下方 */
  transition: background 0.4s ease, opacity 0.4s ease;  /* 平滑过渡 */
}

/* 深色模式纹理 */
.dark .Layout::before {
  opacity: 0.25;  /* 深色模式下降低透明度 */
}
```

---

### 内容层级控制（第 143-148 行）

```css
/* 确保内容在背景之上 */
.VPContent,
.VPLocalNav,
.VPFooter {
  position: relative;   /* 相对定位 */
  z-index: 1;          /* 在纹理层之上 */
}
```

---

## 第四部分：导航栏样式（第 150-413 行）

### 导航栏基础样式（第 150-166 行）

```css
.VPNav {
  z-index: 38;                           /* 层级 */
  background: rgba(216, 228, 239, 0.55);  /* 半透明背景 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.65);  /* 底部边框 */
  
  /* 毛玻璃效果 */
  backdrop-filter: blur(14px) saturate(140%);  /* 模糊 + 饱和度 */
  
  /* 多层阴影 */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),  /* 内阴影 - 高光 */
    0 8px 20px rgba(16, 24, 35, 0.06);       /* 外阴影 */
}

/* 深色模式导航栏 */
.dark .VPNav {
  background: rgba(10, 17, 25, 0.55);
  border-bottom-color: rgba(198, 220, 236, 0.25);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 8px 20px rgba(1, 7, 12, 0.2);
}
```

---

### 导航栏标题文字渐变（第 168-184 行）

```css
.VPNavBarTitle .title {
  font-weight: 700;                    /* 字重 */
  letter-spacing: 0.02em;             /* 字间距 */
  
  /* 渐变文字效果 */
  background: linear-gradient(135deg, var(--oil-ink) 0%, var(--oil-accent) 100%);
  background-clip: text;              /* 背景裁剪到文字 */
  -webkit-background-clip: text;     /* Safari 兼容 */
  -webkit-text-fill-color: transparent;  /* 文字透明，显示背景 */
  
  /* 高光阴影 */
  filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.8));
}

/* 深色模式标题 */
.dark .VPNavBarTitle .title {
  background: linear-gradient(135deg, #e6edf5 0%, #b2c0cf 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));
}
```

---

### 主题切换按钮样式（第 186-300 行）

```css
/* 按钮容器 */
.home-fx-switch {
  margin-left: 10px;               /* 与左侧内容间距 */
  display: inline-flex;            /* 弹性盒布局 */
  align-items: center;             /* 垂直居中 */
  gap: 7px;                       /* 按钮间距 */
}

/* 按钮基础样式 */
.home-fx-toggle {
  position: relative;              /* 相对定位 */
  display: inline-flex;            /* 行内弹性 */
  align-items: center;             /* 垂直居中 */
  gap: 7px;                        /* 图标与文字间距 */
  
  border: 1px solid rgba(174, 203, 225, 0.5);  /* 边框 */
  border-radius: 999px;            /* 圆形边框 */
  padding: 6px 10px;               /* 内边距 */
  
  /* 渐变背景 + 阴影 */
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.56) 0%, rgba(222, 237, 249, 0.4) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.64), 0 10px 16px rgba(16, 24, 35, 0.12);
  
  color: var(--vp-c-text-1);       /* 文字颜色 */
  cursor: pointer;                  /* 鼠标样式 */
  font-size: 0.78rem;              /* 字号 */
  font-weight: 700;                /* 字重 */
  letter-spacing: 0.02em;           /* 字间距 */
  
  /* 悬停效果 */
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.home-fx-toggle:hover {
  transform: translateY(-1px);      /* 悬停时上移 */
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 12px 18px rgba(16, 24, 35, 0.16);
}

/* 按钮图标 */
.home-fx-toggle__icon {
  width: 14px;                     /* 宽度 */
  height: 14px;                    /* 高度 */
  border-radius: 50%;              /* 圆形 */
  display: inline-block;           /* 行内块 */
  
  /* 渐变背景 */
  background: linear-gradient(135deg, #9fc4dd 0%, #5d88a7 100%);
  
  position: relative;               /* 相对定位 */
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.52);  /* 内边框 */
}

/* 图标上的高光点 */
.home-fx-toggle__icon::after {
  content: "";
  position: absolute;
  right: 2px;
  top: 2px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.86);  /* 高光 */
}

/* 液态模式按钮图标 - 水滴形状 */
.home-fx-toggle--liquid .home-fx-toggle__icon {
  border-radius: 44% 56% 58% 42% / 45% 55% 45% 55%;  /* 复杂圆角实现水滴形状 */
  background: linear-gradient(135deg, #bbe3ff 0%, #6fa4ce 48%, #6f8ad1 100%);
}

/* 常态模式按钮图标 - 圆角矩形 */
.home-fx-toggle--default .home-fx-toggle__icon {
  border-radius: 4px;              /* 圆角矩形 */
  background: linear-gradient(135deg, #bfd2df 0%, #7f9db4 100%);
}

/* 激活状态 */
.home-fx-toggle.is-active {
  border-color: rgba(166, 203, 226, 0.75);
  background: linear-gradient(145deg, rgba(219, 237, 250, 0.62) 0%, rgba(178, 213, 238, 0.45) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.76), 0 12px 18px rgba(16, 24, 35, 0.16);
}

/* 激活状态下的小圆点指示器 */
.home-fx-toggle.is-active::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  transform: translateX(-50%);
  background: currentColor;        /* 使用当前文字颜色 */
  opacity: 0.88;
}
```

---

## 第五部分：首页背景效果（第 422-1111 行）

### 背景层基础（第 422-454 行）

```css
/* 全站背景效果层 */
.home-fx-layer {
  position: fixed;           /* 固定定位 */
  inset: 0;                 /* 覆盖整个视口 */
  z-index: 0;               /* 在最底层 */
  pointer-events: none;      /* 不阻挡交互 */
  overflow: hidden;          /* 隐藏溢出 */
  contain: paint;           /* 优化渲染性能 */
}

/* 视频或图片背景 */
.home-fx-layer__image,
.home-fx-layer__video {
  width: 100%;
  height: 100%;
  object-fit: cover;         /* 覆盖整个区域 */
}

.home-fx-layer__image {
  /* 使用 CSS 变量设置背景图 */
  background-image: var(--home-fx-image);
  background-size: cover;
  background-position: center;
  transform: scale(1.05);   /* 略微放大 */
  animation: homeFxDrift 18s ease-in-out infinite alternate;  /* 缓慢漂移动画 */
}

/* 半透明遮罩层 */
.home-fx-layer::after {
  content: "";
  position: absolute;
  inset: 0;
  
  /* 渐变遮罩 + 光点 */
  background:
    linear-gradient(180deg, rgba(22, 31, 42, 0.42) 0%, rgba(22, 31, 42, 0.3) 50%, rgba(22, 31, 42, 0.46) 100%),
    radial-gradient(circle at 20% 18%, rgba(164, 190, 210, 0.2), transparent 40%);
}

/* 液态模式的特殊遮罩 */
.home-fx-layer.is-liquid::after {
  background:
    linear-gradient(180deg, rgba(16, 22, 31, 0.12) 0%, rgba(16, 22, 31, 0.2) 100%),
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.15), transparent 40%),
    radial-gradient(circle at 80% 15%, rgba(200, 230, 255, 0.12), transparent 38%);
  mix-blend-mode: screen;   /* 混合模式 */
}
```

---

### 液态特效气泡（第 463-510 行）

```css
/* 液态光晕层 */
.home-fx-layer__liquid-aura {
  position: absolute;
  inset: 0;
  
  /* 斜向条纹图案 */
  background: repeating-linear-gradient(
    -22deg,
    rgba(255, 255, 255, 0.06) 0 4px,
    transparent 4px 12px
  );
  
  opacity: 0.3;
  mix-blend-mode: screen;
}

/* 三个液态气泡 */
.home-fx-blob {
  position: absolute;
  border-radius: 50%;              /* 圆形 */
  filter: blur(3px);               /* 模糊效果 */
  pointer-events: none;              /* 不阻挡交互 */
  mix-blend-mode: screen;           /* 混合模式 */
  opacity: 0.35;                   /* 透明度 */
  animation: homeFxBlobFloat 14s ease-in-out infinite;  /* 漂浮动画 */
}

/* 气泡 1 - 左上角 */
.home-fx-blob--one {
  width: 280px;
  height: 280px;
  top: -56px;
  left: -78px;
  background: radial-gradient(circle, rgba(200, 235, 255, 0.5) 0%, rgba(180, 220, 255, 0.2) 50%, rgba(200, 235, 255, 0) 70%);
}

/* 气泡 2 - 右上角 */
.home-fx-blob--two {
  width: 320px;
  height: 320px;
  right: -104px;
  top: 18%;
  animation-delay: -4s;             /* 延迟启动 */
  background: radial-gradient(circle, rgba(220, 245, 255, 0.45) 0%, rgba(200, 235, 255, 0.15) 50%, rgba(220, 245, 255, 0) 72%);
}

/* 气泡 3 - 底部中央 */
.home-fx-blob--three {
  width: 260px;
  height: 260px;
  left: 40%;
  bottom: -96px;
  animation-delay: -8s;             /* 延迟启动 */
  background: radial-gradient(circle, rgba(230, 248, 255, 0.4) 0%, rgba(210, 240, 255, 0.12) 50%, rgba(230, 248, 255, 0) 72%);
}
```

---

### 晶透模式样式（第 512-622 行）

```css
/* 晶透模式下隐藏默认背景 */
html.home-glass-mode .Layout {
  background: transparent;
}

/* 降低纹理透明度 */
html.home-glass-mode .Layout::before {
  opacity: 0.14;
}

/* 晶透模式导航栏 - 更透明 */
html.home-glass-mode .VPNav,
html.sky-glass-mode .VPNav {
  position: fixed;                  /* 固定定位 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 38;
  background: rgba(180, 210, 230, 0.35);  /* 更透明的背景 */
  border-bottom-color: rgba(228, 239, 248, 0.45);
  backdrop-filter: blur(14px) saturate(130%);
}

/* 晶透模式首页卡片 - 毛玻璃效果 */
html.home-glass-mode .VPContent.is-home .oilhome-intro,
html.home-glass-mode .VPContent.is-home .oilhome-signal__item,
html.home-glass-mode .VPContent.is-home .oilhome-lab,
html.home-glass-mode .VPContent.is-home .oilhome-card {
  background: rgba(238, 247, 255, 0.25) !important;  /* 半透明白色 */
  border-color: rgba(242, 249, 255, 0.46) !important;
  box-shadow: 0 14px 24px rgba(8, 16, 23, 0.2) !important;
  backdrop-filter: blur(14px) saturate(130%);  /* 毛玻璃 */
}
```

---

### 液态模式样式（第 648-815 行）

```css
/* 液态模式隐藏默认背景 */
html.home-liquid-mode .Layout {
  background: transparent;
}

html.home-liquid-mode .Layout::before {
  opacity: 0.11;  /* 极低的纹理透明度 */
}

/* 液态模式导航栏 - 高透明 + 光泽边框 */
html.home-liquid-mode .VPNav,
html.sky-liquid-mode .VPNav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 38;
  background: rgba(180, 210, 235, 0.16);  /* 极透明背景 */
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px) saturate(180%);  /* 更强的模糊 */
}

/* 顶部光泽效果 */
html.home-liquid-mode .VPNav::before,
html.sky-liquid-mode .VPNav::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.6) 20%,
    rgba(200, 230, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.6) 80%,
    transparent 100%
  );
  z-index: 10;
}

/* 底部微光效果 */
html.home-liquid-mode .VPNav::after,
html.sky-liquid-mode .VPNav::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 5%;
  right: 5%;
  height: 20px;
  background: radial-gradient(ellipse at center, rgba(180, 210, 235, 0.15) 0%, transparent 70%);
  filter: blur(8px);
  pointer-events: none;
}
```

---

## 第六部分：首页自定义区块样式（第 1682-2417 行）

### oilhome-shell 主容器（第 1682-1686 行）

```css
.oilhome-shell {
  max-width: 1100px;          /* 最大宽度 */
  margin: 36px auto 98px;     /* 居中 + 底部间距 */
  padding: 0 18px 24px;       /* 内边距 */
}
```

---

### oilhome-intro 介绍区域（第 1688-1729 行）

```css
.oilhome-intro {
  position: relative;           /* 相对定位，用于伪元素 */
  border: 1px solid var(--oil-line);
  border-radius: 24px;         /* 圆角 */
  padding: clamp(24px, 4vw, 44px);  /* 响应式内边距 */
  
  /* 渐变背景 */
  background:
    radial-gradient(circle at 8% 14%, rgba(142, 173, 196, 0.2), transparent 34%),  /* 左上光晕 */
    radial-gradient(circle at 84% 16%, rgba(106, 139, 165, 0.18), transparent 34%),  /* 右上光晕 */
    linear-gradient(140deg, rgba(240, 245, 249, 0.96) 0%, rgba(230, 237, 243, 0.97) 100%);  /* 底部渐变 */
    
  box-shadow: var(--oil-shadow);  /* 阴影 */
}

/* 斜向条纹装饰 */
.oilhome-intro::before {
  content: "";
  position: absolute;
  width: 280px;
  height: 280px;
  top: -120px;
  left: -82px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(74, 109, 134, 0.26) 0%, transparent 70%);
  pointer-events: none;
}

/* 小标签文字 */
.oilhome-kicker {
  margin: 0;
  font-size: 0.75rem;
  text-transform: uppercase;     /* 全大写 */
  letter-spacing: 0.16em;        /* 字间距 */
  font-weight: 700;
  color: var(--oil-accent);      /* 强调色 */
}

/* 主标题 */
.oilhome-intro h2 {
  margin: 10px 0 0;
  max-width: 760px;
  font-family: "Palatino Linotype", "Source Han Serif SC", "Songti SC", serif;  /* 衬线字体 */
  font-size: clamp(1.5rem, 2.9vw, 2.3rem);  /* 响应式字号 */
  line-height: 1.31;
}
```

---

### oilhome-signal 特色卡片区域（第 1731-1786 行）

```css
.oilhome-signal {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));  /* 12列网格 */
  gap: 12px;                      /* 卡片间距 */
}

.oilhome-signal__item {
  grid-column: span 4;            /* 每个卡片占4列 */
  border: 1px solid var(--oil-line);
  border-radius: 16px;
  padding: 14px 14px 13px;
  background: linear-gradient(142deg, rgba(248, 252, 255, 0.74) 0%, rgba(228, 236, 245, 0.7) 100%);
  box-shadow: 0 8px 16px rgba(16, 24, 35, 0.09);
  
  /* 悬停效果 */
  transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
}

.oilhome-signal__item:hover {
  transform: translateY(-3px);    /* 上移 */
  border-color: rgba(74, 109, 134, 0.45);
  box-shadow: 0 13px 20px rgba(16, 24, 35, 0.14);
}

/* 技术标签 */
.oilhome-signal__item span {
  display: inline-flex;
  margin-top: 10px;
  border-radius: 999px;           /* 胶囊形状 */
  padding: 4px 10px;
  font-size: 0.74rem;
  font-weight: 650;
  color: #2d4d62;
  background: rgba(74, 109, 134, 0.13);
}
```

---

### oilhome-lab 系统状态区域（第 1788-1888 行）

```css
.oilhome-lab {
  margin-top: 16px;
  border: 1px solid var(--oil-line);
  border-radius: 18px;
  padding: 16px;
  background:
    radial-gradient(circle at 9% 8%, rgba(106, 138, 160, 0.17), transparent 34%),
    linear-gradient(138deg, rgba(244, 249, 252, 0.9) 0%, rgba(230, 239, 246, 0.92) 100%);
  box-shadow: 0 10px 20px rgba(16, 24, 35, 0.1);
}

.oilhome-lab__list {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));  /* 三列布局 */
  gap: 10px;
}

.oilhome-lab__meter {
  margin-top: 10px;
  height: 8px;
  border-radius: 999px;
  background: rgba(74, 109, 134, 0.12);
  overflow: hidden;               /* 隐藏溢出 */
}

/* 进度条填充 */
.oilhome-lab__meter span {
  display: block;
  width: var(--meter, 70%);      /* CSS 自定义属性控制宽度 */
  height: 100%;
  border-radius: inherit;         /* 继承父元素圆角 */
  background: linear-gradient(90deg, #4a6d86 0%, #6f8fa6 100%);  /* 渐变填充 */
}
```

---

### oilhome-route 路线图区域（第 1886-1968 行）

```css
.oilhome-route {
  margin-top: 16px;
  border: 1px solid var(--oil-line);
  border-radius: 18px;
  padding: 16px;
  background: rgba(239, 246, 251, 0.74);
}

/* 连接线 */
.oilhome-route__line::before {
  content: "";
  position: absolute;
  top: 12px;
  bottom: 12px;
  left: 14px;
  width: 2px;
  background: linear-gradient(180deg, rgba(74, 109, 134, 0.5) 0%, rgba(74, 109, 134, 0.08) 100%);
}

/* 路线节点 */
.oilhome-route__node {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 28px 1fr;  /* 数字 + 内容 */
  align-items: start;
  gap: 10px;
  text-decoration: none;            /* 无下划线 */
  border: 1px solid var(--oil-line);
  border-radius: 12px;
  padding: 10px 11px 10px 10px;
  background: rgba(255, 255, 255, 0.46);
  
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}

.oilhome-route__node:hover {
  transform: translateX(2px);         /* 悬停时右移 */
  border-color: rgba(74, 109, 134, 0.46);
  box-shadow: 0 9px 16px rgba(16, 24, 35, 0.14);
}

/* 步骤数字圆圈 */
.oilhome-route__node > span {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: grid;
  place-items: center;              /* 居中内容 */
  font-size: 0.72rem;
  font-weight: 700;
  color: #edf4f9;
  background: linear-gradient(140deg, #4a6d86 0%, #2f4f65 100%);
}
```

---

### oilhome-grid 知识模块卡片区域（第 1970-2041 行）

```css
.oilhome-grid {
  margin-top: 20px;
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(12, minmax(0, 1fr));  /* 12列网格 */
}

.oilhome-card {
  grid-column: span 5;             /* 普通卡片占5列 */
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--oil-line);
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.62) 0%, rgba(228, 236, 244, 0.72) 100%);
  padding: 20px 18px 18px;
  box-shadow: 0 8px 18px rgba(16, 24, 35, 0.11);
  
  transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
}

/* 特色卡片 - 占7列（更大） */
.oilhome-card--feature {
  grid-column: span 7;
}

.oilhome-card:hover {
  transform: translateY(-4px);     /* 上移 */
  border-color: rgba(74, 109, 134, 0.46);
  box-shadow: 0 14px 24px rgba(16, 24, 35, 0.16);
}

/* 卡片标签 */
.oilhome-card__tag {
  margin: 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-weight: 700;
  color: var(--oil-accent);
}

/* 元数据标签 */
.oilhome-card__meta {
  display: inline-flex;
  margin-top: 14px;
  padding: 6px 11px;
  border-radius: 999px;             /* 胶囊形状 */
  background: rgba(74, 109, 134, 0.14);
  color: #2f4f65;
  font-size: 0.81rem;
  font-weight: 650;
}
```

---

## 第七部分：动画关键帧（第 2080-2143 行）

```css
/* 页面加载入场动画 - 淡入上移 */
.reveal-oil {
  opacity: 0;
  transform: translateY(20px);     /* 初始状态：下方 + 透明 */
  animation: revealOil 0.72s cubic-bezier(0.2, 0.8, 0.24, 1) forwards;
}

@keyframes revealOil {
  to {
    opacity: 1;
    transform: translateY(0);       /* 最终状态：原位 + 可见 */
  }
}

/* 卡片交错动画延迟 */
.oilhome-grid .oilhome-card:nth-child(1) { animation-delay: 0.08s; }
.oilhome-grid .oilhome-card:nth-child(2) { animation-delay: 0.14s; }
.oilhome-grid .oilhome-card:nth-child(3) { animation-delay: 0.2s; }
.oilhome-grid .oilhome-card:nth-child(4) { animation-delay: 0.26s; }

/* Hero 图片浮动动画 */
@keyframes oilFloat {
  0%, 100% {
    transform: rotate(-1.4deg) translateY(0);
  }
  50% {
    transform: rotate(-0.7deg) translateY(-8px);
  }
}

/* 背景图片漂移动画 */
@keyframes homeFxDrift {
  0% {
    transform: scale(1.05) translate3d(0, 0, 0);
  }
  50% {
    transform: scale(1.09) translate3d(-1.2%, -1.2%, 0);
  }
  100% {
    transform: scale(1.07) translate3d(1.2%, 0.9%, 0);
  }
}

/* 液态气泡漂浮动画 */
@keyframes homeFxBlobFloat {
  0%, 100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(2.6%, -2.2%, 0) scale(1.06);
  }
}
```

---

## 常见修改指南

### 修改主色调
在 `:root` 中修改 `--oil-accent` 值：
```css
:root {
  --oil-accent: #你想要的颜色;
}
```

### 修改背景效果
修改 `.Layout` 的 `background` 属性。

### 修改动画速度
调整 `animation-duration` 或 `transition-duration` 的值。

### 添加新的 CSS 变量
在 `:root` 中添加，使用 `--custom-*` 前缀命名。

---

## 相关文件

| 文件 | 用途 |
|------|------|
| `index.js` | 主题入口，导入此样式文件 |
| `HomeFxBackdrop.vue` | 首页背景效果组件 |
| `HomeFxToggle.vue` | 主题切换按钮组件 |
| `ReadingEnhancer.vue` | 阅读增强组件 |
