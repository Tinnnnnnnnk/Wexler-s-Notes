---
layout: home

hero:
  name: "Wexler's Notes"
  text: "构建你的数字第二大脑"
  tagline: "Backend / Linux / Docker / Algorithm"
  image:
    src: /images/logo.jpg
    alt: Logo
  actions:
    - theme: brand
      text: "🚀 开始探索"
      link: /Sky-Take-Out/00-后端开发知识大本营
    - theme: alt
      text: "⭐ GitHub 源码"
      link: https://github.com/

features:
  - icon: ☕
    title: "Java 全栈体系"
    details: "从 SSM 到 SpringBoot，再到微服务架构的深度解析与实战沉淀。"
  - icon: 🐳
    title: "DevOps 运维之道"
    details: "Linux 内核调优、Docker 容器化部署、Nginx 反向代理配置手册。"
  - icon: ⚡
    title: "算法与数据结构"
    details: "LeetCode Hot100 题解，滑动窗口、双指针等核心算法模板总结。"
---
<div class="tech-stack">
  <h2>🛠️ Tech Stack & Tools</h2>
  <div class="logos">
    <div class="logo-item">☕ Java</div>
    <div class="logo-item">🍃 SpringBoot</div>
    <div class="logo-item">🐳 Docker</div>
    <div class="logo-item">🐧 Linux</div>
    <div class="logo-item">🐬 MySQL</div>
    <div class="logo-item">⚡ VitePress</div>
    <div class="logo-item">🐈 GitHub</div>
    <div class="logo-item">🚀 Nginx</div>
  </div>
</div>

<style>
.tech-stack {
  margin-top: 60px;
  text-align: center;
  padding: 0 20px;
}
.tech-stack h2 {
  font-weight: 600;
  margin-bottom: 30px;
  border: none; /* 去掉默认下划线 */
}
.logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}
.logo-item {
  background: var(--vp-c-bg-alt);
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  font-weight: 600;
  transition: all 0.3s;
  cursor: default;
}
/* 鼠标放上去发光 */
.logo-item:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 15px rgba(100, 108, 255, 0.2);
  color: var(--vp-c-brand-1);
}
</style>