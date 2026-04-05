// src/components/home/scenes/KeynoteScene.tsx
// Scene A: Apple/Keynote style — migrated from HomeLayoutScenes.vue
import styles from './KeynoteScene.module.css'

export default function KeynoteScene() {
  return (
    <section className={styles.scene}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>WEXLER&apos;S NOTES · DIGITAL GARDEN</p>
        <h1>Build Once, Compound Forever</h1>
        <p>
          把算法、后端、部署、复盘沉淀成可复用知识系统。
          这不是临时笔记，而是可持续增长的工程资产。
        </p>
        <div className={styles.actions}>
          <a className={styles.btnSolid} href="/docs/sky-take-out/00-后端开发知识大本营">进入知识库</a>
          <a className={styles.btnGhost} href="https://github.com/Tinnnnnnnnk/Wexler-s-Notes">查看 GitHub</a>
        </div>
      </header>

      <div className={styles.band}>
        {[
          { stat: '130+', label: '技术笔记' },
          { stat: 'v3', label: '迭代体系' },
          { stat: 'CI', label: '自动部署' },
          { stat: '24/7', label: '可访问' },
        ].map((item) => (
          <article key={item.label}>
            <strong>{item.stat}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>

      <div className={styles.triptych}>
        {[
          { href: '/docs/prompt-learning/day1', cat: 'Prompt 系统', title: '把 AI 协作流程工程化' },
          { href: '/docs/code/ds/dfs', cat: '算法训练', title: '建立可迁移的解题模式' },
          { href: '/docs/myweb/网站修改指南', cat: '站点演进', title: '持续优化 UI、性能与交互' },
        ].map((item) => (
          <a key={item.href} href={item.href}>
            <p>{item.cat}</p>
            <h3>{item.title}</h3>
          </a>
        ))}
      </div>

      <div className={styles.rail}>
        {[
          { href: '/docs/sky-take-out/04-服务器运维与容器化部署手册', text: 'Docker / 运维' },
          { href: '/docs/resume/简历V3.0', text: '简历资产' },
          { href: '/docs/面试笔记/myweb/构建过程end', text: '构建复盘' },
          { href: '/docs/myweb/00-文档目录', text: '站点文档' },
        ].map((item) => (
          <a key={item.href} href={item.href}>{item.text}</a>
        ))}
      </div>
    </section>
  )
}
