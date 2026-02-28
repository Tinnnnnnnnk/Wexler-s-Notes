---
layout: home

hero:
  name: "Wexler."
  text: "化繁为简，重塑全栈。"
  tagline: "在这里，见证一行代码到云端部署的极客之旅。"
  image:
    src: /images/hero-abstract.jpg # ⚠️ 见下方说明！
    alt: Wexler
  actions:
    - theme: brand
      text: 🚀 开启探索
      link: /Sky-Take-Out/00-后端开发知识大本营
    - theme: alt
      text: View on GitHub
      link: [https://github.com/你的GitHub用户名/你的仓库名](https://github.com/Tinnnnnnnnk/Wexler-s-Notes)
---

<style>
/* 注入一点 Apple 级的 CSS 魔法 */
.vp-doc.container {
  max-width: 900px !important; /* 收窄内容区，增加两侧呼吸感 */
  margin-top: 60px;
}

.apple-section {
  text-align: center;
  padding: 80px 20px;
  margin: 40px 0;
  border-radius: 24px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.4s ease;
}

.apple-section:hover {
  transform: scale(1.02);
}

.apple-title {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.apple-desc {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
}

.tech-tags {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.tech-tag {
  padding: 8px 16px;
  border-radius: 40px; /* Apple 经典的药丸形状 */
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
}
</style>

<div class="vp-doc container">
  
  <div class="apple-section">
    <div class="apple-title">硬核业务，丝滑架构。</div>
    <div class="apple-desc">从底层的数据结构与算法，到基于 Spring Boot 的企业级微服务架构。拒绝纸上谈兵，沉淀每一行真实的业务代码。</div>
    <div class="tech-tags">
      <span class="tech-tag">Java / SpringBoot</span>
      <span class="tech-tag">MySQL / Redis</span>
      <span class="tech-tag">LeetCode Hot100</span>
    </div>
  </div>

  <div class="apple-section">
    <div class="apple-title">全自动化，释放创造力。</div>
    <div class="apple-desc">构建基于 Docker 与 GitHub Actions 的 CI/CD 自动化流水线。把繁琐的运维交给机器，把时间留给灵感。</div>
    <div class="tech-tags">
      <span class="tech-tag">Docker Container</span>
      <span class="tech-tag">CI/CD Pipeline</span>
      <span class="tech-tag">Linux / Nginx</span>
    </div>
  </div>

</div>