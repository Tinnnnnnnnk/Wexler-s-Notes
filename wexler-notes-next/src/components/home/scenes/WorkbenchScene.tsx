// src/components/home/scenes/WorkbenchScene.tsx
// Scene B: Dashboard/Workbench style — migrated from HomeLayoutScenes.vue
import styles from './WorkbenchScene.module.css'

export default function WorkbenchScene() {
  return (
    <section className={styles.scene}>
      <div className={styles.layout}>
        <aside className={styles.side}>
          <p className={styles.label}>Workspace</p>
          <h2>工程控制台</h2>
          <ul className={styles.menu}>
            {[
              { href: '/docs/Sky-Take-Out/00-后端开发知识大本营', text: '后端主线' },
              { href: '/docs/Code/DS/DFS', text: '算法主线' },
              { href: '/docs/PromptLearning/day1', text: 'Prompt 主线' },
              { href: '/docs/Info/Software', text: '站点主线' },
            ].map((item) => (
              <li key={item.href}><a href={item.href}>{item.text}</a></li>
            ))}
          </ul>
          <div className={styles.hint}>
            <p>目标</p>
            <strong>学习、编码、部署、复盘同一套闭环</strong>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.hero}>
            <p>Engineering Dashboard</p>
            <h1>把知识组织成可执行系统</h1>
            <a href="/docs/面试笔记/MyWeb/构建过程end">查看最新改造记录</a>
          </div>

          <div className={styles.kpi}>
            {[
              { label: 'Pipeline', value: 'Stable', desc: 'GitHub Actions + rsync 部署链路' },
              { label: 'Docs', value: 'Growing', desc: 'Obsidian -> Git -> Web 持续同步' },
              { label: 'Focus', value: 'Backend', desc: 'Java / SpringBoot / MySQL 实战优先' },
            ].map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <div className={styles.matrix}>
            {[
              { href: '/docs/Sky-Take-Out/01-Web 前端全栈开发手册', title: '前端协作', desc: '页面样式、组件扩展与用户体验优化。' },
              { href: '/docs/Sky-Take-Out/02-Java 后端核心与 SpringBoot 实战手册', title: 'Java 后端', desc: '接口、服务层、业务抽象与稳定性治理。' },
              { href: '/docs/Sky-Take-Out/03-数据持久化与 MyBatis 指南', title: '数据层', desc: 'MyBatis、SQL 设计、数据一致性实践。' },
              { href: '/docs/Sky-Take-Out/04-服务器运维与容器化部署手册', title: '部署运维', desc: '容器化、Nginx 与服务器迁移实操。' },
            ].map((item) => (
              <a key={item.href} href={item.href}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </a>
            ))}
          </div>
        </main>
      </div>
    </section>
  )
}
