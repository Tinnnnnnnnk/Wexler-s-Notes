// src/components/home/scenes/KeynoteScene.tsx
import styles from './KeynoteScene.module.css'

export default function KeynoteScene() {
  return (
    <section className={styles.scene}>
      <div className={styles.container}>
        {/* Main Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>
              <span>WEXLER&apos;S NOTES</span>
              <span className={styles.dot} />
              <span>DIGITAL GARDEN</span>
            </p>
            <h1 className={styles.title}>
              Build Once,<br />
              <span className={styles.highlight}>Compound Forever</span>
            </h1>
            <p className={styles.description}>
              把算法、后端、部署、复盘沉淀成可复用的知识系统。
              这不是碎片的笔记，而是可持续增长的工程资产。
            </p>
            <div className={styles.actions}>
              <a className={styles.btnSolid} href="/docs/Sky-Take-Out/00-后端开发知识大本营">
                <span>进入知识库</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a className={styles.btnGhost} href="https://github.com/Tinnnnnnnnk/Wexler-s-Notes">查看 GitHub</a>
            </div>
          </div>
        </header>

        {/* Feature Grid: Stats + Highlights */}
        <div className={styles.featureGrid}>
          <div className={styles.statsPanel}>
            {[
              { stat: '130+', label: '技术笔记', sub: '持续沉淀中' },
              { stat: 'v3', label: '迭代体系', sub: '架构已稳定' },
              { stat: 'CI/CD', label: '自动部署', sub: '构建即发布' },
              { stat: '24/7', label: '持续可用', sub: '云端同步' },
            ].map((item) => (
              <div key={item.label} className={styles.statItem}>
                <div className={styles.statLine} />
                <strong>{item.stat}</strong>
                <p>{item.label}</p>
                <span>{item.sub}</span>
              </div>
            ))}
          </div>

          <div className={styles.triptych}>
            {[
              { 
                href: '/docs/PromptLearning/day1', 
                cat: 'Prompt System', 
                title: '把 AI 协作流程工程化',
                desc: '定义结构化指令，实现高确定性的产出'
              },
              { 
                href: '/docs/Code/DS/DFS', 
                cat: 'Algorithm', 
                title: '建立可迁移的解题模式',
                desc: '从 LeetCode 到工程实战的底层逻辑'
              },
              { 
                href: '/docs/Info/Software', 
                cat: 'Evolution', 
                title: '持续优化站点性能与交互',
                desc: '探索现代 Web 技术的边界与体验'
              },
            ].map((item) => (
              <a key={item.href} href={item.href} className={styles.card}>
                <div className={styles.cardInfo}>
                  <p>{item.cat}</p>
                  <h3>{item.title}</h3>
                  <span>{item.desc}</span>
                </div>
                <div className={styles.cardArrow}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="7 7 17 7 17 17" />
                    <line x1="7" y1="17" x2="17" y2="7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Rail */}
        <nav className={styles.rail}>
          <span className={styles.railLabel}>快速索引</span>
          <div className={styles.railLinks}>
            {[
              { href: '/docs/Sky-Take-Out/04-服务器运维与容器化部署手册', text: 'Docker / 运维' },
              { href: '/docs/Resume/简历V3.0', text: '简历资产' },
              { href: '/docs/面试笔记/MyWeb/构建过程end', text: '构建复盘' },
              { href: '/docs/Info/Software', text: '站点文档' },
            ].map((item) => (
              <a key={item.href} href={item.href}>{item.text}</a>
            ))}
          </div>
        </nav>
      </div>
    </section>
  )
}

