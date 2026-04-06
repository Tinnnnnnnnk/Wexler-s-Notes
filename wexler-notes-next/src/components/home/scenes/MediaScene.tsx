// src/components/home/scenes/MediaScene.tsx
// Scene C: Editorial/Media style — migrated from HomeLayoutScenes.vue
import styles from './MediaScene.module.css'

const TICKER = ['Java', 'SpringBoot', 'MySQL', 'Docker', 'Nginx', 'VitePress', 'GitHub Actions', 'Obsidian']

export default function MediaScene() {
  return (
    <section className={styles.scene}>
      <header className={styles.hero}>
        <p className={styles.tag}>DIGITAL GARDEN</p>
        <h1>Wexler&apos;s Notes</h1>
        <p>全栈开发与运维知识库 · 以工程交付为中心的个人技术宇宙</p>
        <div className={styles.cta}>
          <a href="/docs/面试笔记/MyWeb/构建过程end">阅读构建过程</a>
          <a href="/docs/Sky-Take-Out/00-后端开发知识大本营">进入后端主线</a>
        </div>
      </header>

      <div className={styles.body}>
        <article className={styles.feature}>
          <p className={styles.eyebrow}>Feature Story</p>
          <h2>从阿里云迁移腾讯云，重构自动部署链路</h2>
          <p>完成服务器迁移、资源路径优化、部署方式切换，站点逐步从&quot;可用&quot;进入&quot;可持续演进&quot;阶段。</p>
          <a href="/docs/面试笔记/MyWeb/构建过程end">查看完整复盘</a>
        </article>

        <aside className={styles.stack}>
          {[
            { href: '/docs/Code/DS/DFS', cat: 'Algorithm', title: 'DFS/BFS/DP 训练专题' },
            { href: '/docs/PromptLearning/day1', cat: 'Workflow', title: 'AI 协作 Prompt 流程' },
            { href: '/docs/Resume/简历V3.0', cat: 'Portfolio', title: '项目与简历资产沉淀' },
          ].map((item) => (
            <a key={item.href} href={item.href}>
              <p>{item.cat}</p>
              <h3>{item.title}</h3>
            </a>
          ))}
        </aside>
      </div>

      <footer className={styles.ticker}>
        {TICKER.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </footer>
    </section>
  )
}
