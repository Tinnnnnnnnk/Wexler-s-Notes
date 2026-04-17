// src/app/about/page.tsx
'use client'

import React, { useMemo } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

function pseudoRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

export default function AboutPage() {
  // 使用确定性伪随机，避免在渲染路径调用 Math.random()（React purity）
  const petals = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${pseudoRandom(i * 7 + 1) * 100}%`,
      animationDuration: `${12 + pseudoRandom(i * 7 + 2) * 10}s`,
      animationDelay: `-${pseudoRandom(i * 7 + 3) * 20}s`,
      width: `${8 + pseudoRandom(i * 7 + 4) * 6}px`,
      height: `${8 + pseudoRandom(i * 7 + 5) * 6}px`,
    }))
  }, [])

  return (
    <div className={styles.container}>
      {/* 氛围层：云朵和光斑 */}
      <div className={styles.clouds} aria-hidden="true" />
      
      {/* 粒子层：轻柔漂浮的樱花 */}
      <div className={styles.petals} aria-hidden="true">
        {petals.map(p => (
          <div 
            key={p.id} 
            className={styles.petal} 
            style={{
              left: p.left,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              width: p.width,
              height: p.height
            }} 
          />
        ))}
      </div>

      {/* 顶部简易导航回首页 */}
      <header className={styles.header}>
        <Link href="/" className={styles.backBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          返回首页
        </Link>
      </header>

      <main className={styles.main}>
        {/* 首屏 Hero 区 */}
        <section className={styles.hero}>
          <p className={styles.kicker}>Digital Garden</p>
          <h1 className={styles.title}>Wexler's Space</h1>
          <p className={styles.subtitle}>
            在风吹过的季节里，记录日常与灵感。<br />
            欢迎来到我的小小世界，把喜欢的事慢慢收集起来。
          </p>
          <div className={styles.actions}>
            <Link href="/docs" className={styles.btnPrimary}>
              阅读笔记
            </Link>
            <a href="#projects" className={styles.btnSecondary}>
              了解作品
            </a>
          </div>
        </section>

        {/* 个人简介 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>关于我</h2>
          <div className={styles.card}>
            <p>
              你好！我是一名前端开发者与技术爱好者。喜欢干净利落的代码，也热爱充满呼吸感的设计。
            </p>
            <p>
              在这里，我会分享全栈开发经验、运维踩坑记录以及一些生活中的奇思妙想。我相信技术不仅是工具，也是一种表达美和秩序的方式。
            </p>
            <p>
              闲暇时，我喜欢摄影、阅读轻小说、听日系轻音乐。希望这个小小的地方，能带给你一丝宁静与治愈。
            </p>
          </div>
        </section>

        {/* 作品/项目 */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>个人作品</h2>
          <div className={styles.grid}>
            <div className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Wexler's Notes</h3>
              <p className={styles.projectDesc}>
                具有多种视觉风格切换的全栈知识库。基于 Next.js 与 MDX 构建，支持沉浸式阅读与丰富的组件生态。
              </p>
              <div className={styles.tags}>
                <span className={`${styles.tag} ${styles.tagBlue}`}>Next.js</span>
                <span className={`${styles.tag} ${styles.tagPink}`}>MDX</span>
              </div>
            </div>
            
            <div className={styles.projectCard}>
              <h3 className={styles.projectTitle}>Sky-Take-Out</h3>
              <p className={styles.projectDesc}>
                企业级外卖平台解决方案，包含完整的前后端架构、支付链路与高性能的并发处理实践。
              </p>
              <div className={styles.tags}>
                <span className={`${styles.tag} ${styles.tagPurple}`}>Java</span>
                <span className={`${styles.tag} ${styles.tagYellow}`}>Spring Boot</span>
              </div>
            </div>
          </div>
        </section>

        {/* 兴趣标签 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>日常频道</h2>
          <div className={styles.card} style={{ textAlign: 'center' }}>
            <div className={styles.tags} style={{ justifyContent: 'center', marginTop: 0 }}>
              <span className={`${styles.tag} ${styles.tagBlue}`}>☁️ 蓝天白云收集者</span>
              <span className={`${styles.tag} ${styles.tagPink}`}>🌸 摄影与旅行</span>
              <span className={`${styles.tag} ${styles.tagPurple}`}>📚 知识库搭建</span>
              <span className={`${styles.tag} ${styles.tagYellow}`}>🎧 独立音乐</span>
              <span className={`${styles.tag} ${styles.tagBlue}`}>💻 UI/UX 设计</span>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>联系我</h2>
          <div className={styles.contactGrid}>
            <a href="mailto:example@email.com" className={styles.contactLink}>
              ✉️ 邮件
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.contactLink}>
              👾 GitHub
            </a>
            <a href="#" className={styles.contactLink}>
              📝 RSS
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
