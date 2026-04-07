// src/components/home/scenes/LiquidScene.tsx
'use client'

import BgmPlayer from '../BgmPlayer'
import styles from './LiquidScene.module.css'

export default function LiquidScene() {
  return (
    <section className={styles.scene}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Digital Garden</p>
        <h1 className={styles.headline}>Wexler&apos;s Notes</h1>
        <p className={styles.tagline}>全栈开发与运维知识库</p>
      </div>

      <BgmPlayer variant="stage" />
    </section>
  )
}
