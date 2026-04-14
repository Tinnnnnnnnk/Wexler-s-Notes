// src/components/home/scenes/MediaScene.tsx
import styles from './MediaScene.module.css'

const TICKER = ['JAVA ECOSYSTEM', 'SPRING BOOT', 'MYSQL ARCHITECTURE', 'DOCKER CONTAINERS', 'NGINX PROXY', 'VITEPRESS', 'GITHUB ACTIONS', 'OBSIDIAN WORKFLOW']

export default function MediaScene() {
  return (
    <section className={styles.scene}>
      <div className={styles.wrapper}>
        {/* Editorial Header */}
        <header className={styles.hero}>
          <div className={styles.heroMain}>
            <p className={styles.issue}>ISSUE NO. 03 · DIGITAL GARDEN</p>
            <h1 className={styles.title}>Wexler&apos;s<br /><span className={styles.italic}>Notes</span></h1>
            <div className={styles.heroFooter}>
              <p className={styles.tagline}>全栈开发与运维知识库 · 以工程交付为中心的个人技术宇宙</p>
              <div className={styles.ctaGroup}>
                <a href="/docs/面试笔记/MyWeb/构建过程end" className={styles.ctaPrimary}>阅读构建复盘</a>
                <a href="/docs/Sky-Take-Out/00-后端开发知识大本营" className={styles.ctaSecondary}>进入后端主线</a>
              </div>
            </div>
          </div>
        </header>

        {/* Feature Story Section */}
        <div className={styles.contentGrid}>
          <article className={styles.mainFeature}>
            <div className={styles.featureImage}>
              <div className={styles.imageOverlay} />
              <span className={styles.featureBadge}>FEATURE STORY</span>
            </div>
            <div className={styles.featureContent}>
              <p className={styles.date}>APRIL 2026</p>
              <h2>从阿里云迁移腾讯云，<br />重构全自动部署链路</h2>
              <p>深度复盘站点从零到一的架构演进，涵盖云原生迁移、CDN 路径优化与 CI/CD 自动化流水线的完整实践过程。</p>
              <a href="/docs/面试笔记/MyWeb/构建过程end" className={styles.readMore}>
                READ FULL STORY
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </article>

          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>LATEST UPDATES</h3>
            <div className={styles.stack}>
              {[
                { href: '/docs/Code/DS/DFS', cat: 'Algorithm', title: 'DFS/BFS/DP 算法解题模式训练' },
                { href: '/docs/PromptLearning/day1', cat: 'Workflow', title: '基于结构化 Prompt 的 AI 协作流程' },
                { href: '/docs/Resume/简历V3.0', cat: 'Portfolio', title: '个人项目资产与专业简历深度沉淀' },
              ].map((item) => (
                <a key={item.href} href={item.href} className={styles.stackItem}>
                  <p>{item.cat}</p>
                  <h4>{item.title}</h4>
                </a>
              ))}
            </div>
          </aside>
        </div>

        {/* Dynamic Marquee Ticker */}
        <footer className={styles.tickerContainer}>
          <div className={styles.ticker}>
            <div className={styles.tickerTrack}>
              {[...TICKER, ...TICKER].map((tag, i) => (
                <span key={`${tag}-${i}`} className={styles.tickerItem}>{tag}</span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

