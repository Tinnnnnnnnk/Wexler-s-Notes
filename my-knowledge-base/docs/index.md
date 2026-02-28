---
layout: home

hero:
  name: "Wexler's Notes"
  text: "Code. Build. Deploy."
  tagline: 沉淀全栈架构与 DevOps 工程化实践
  actions:
    - theme: brand
      text: 🚀 开始探索
      link: /Sky-Take-Out/00-后端开发知识大本营
    - theme: alt
      text: View on GitHub
      link: https://github.com/你的GitHub用户名/你的仓库名

features:
  - title: ☕ Java 全栈体系
    details: 深入解析 Spring Boot 核心机制、微服务架构演进与企业级高并发实战沉淀。
  - title: 🐋 DevOps 运维之道
    details: 构建基于 Docker 与 GitHub Actions 的 CI/CD 全自动化流水线与 Linux 性能调优。
  - title: ⚡ 算法与数据结构
    details: LeetCode Hot100 题解，双指针、动态规划等核心算法模板抽丝剥茧。
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