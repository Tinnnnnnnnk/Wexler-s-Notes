// src/components/home/scenes/LiquidScene.tsx
// Scene for liquid fxMode — minimal site intro + rail, text floats over video background
'use client'
import styles from './LiquidScene.module.css'

export default function LiquidScene() {
  return (
    <section className={styles.scene}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>WEXLER&apos;S NOTES · DIGITAL GARDEN</p>
        <h1 className={styles.headline}>Build Once, Compound Forever</h1>
        <p className={styles.tagline}>
          把算法、后端、部署、复盘沉淀成可复用知识系统。
          这不是临时笔记，而是可持续增长的工程资产。
        </p>
      </div>

      <div className={styles.rail}>
        {[
          { href: '/docs/Sky-Take-Out/00-后端开发知识大本营', text: '后端知识库' },
          { href: '/docs/Code/DS/DFS', text: '算法训练' },
          { href: '/docs/PromptLearning/day1', text: 'Prompt 工程' },
          { href: '/docs/Info/Software', text: '站点演进' },
        ].map((item) => (
          <a key={item.href} href={item.href} className={styles.railLink}>
            {item.text}
          </a>
        ))}
      </div>
    </section>
  )
}
