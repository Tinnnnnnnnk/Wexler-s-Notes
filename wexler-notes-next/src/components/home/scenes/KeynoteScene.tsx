// src/components/home/scenes/KeynoteScene.tsx
'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import styles from './KeynoteScene.module.css'

interface TiltCardProps {
  href: string
  cat: string
  title: string
  desc: string
}

function TiltCard({ href, cat, title, desc }: TiltCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const rafRef = useRef<number>(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    // Performance optimization: Avoid triggering React re-renders on mousemove
    const rotateX = ((y - centerY) / centerY) * -5 // Max 5 deg
    const rotateY = ((x - centerX) / centerX) * 5
    
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        cardRef.current.style.transition = 'none'
        cardRef.current.style.zIndex = '10'
      }
    })
  }

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafRef.current)
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
      cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
      cardRef.current.style.zIndex = '1'
    }
  }

  return (
    <Link 
      ref={cardRef}
      href={href} 
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      prefetch={true}
    >
      <div className={styles.cardInfo}>
        <p>{cat}</p>
        <h3>{title}</h3>
        <span>{desc}</span>
      </div>
      <div className={styles.cardArrow}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="7 7 17 7 17 17" />
          <line x1="7" y1="17" x2="17" y2="7" />
        </svg>
      </div>
    </Link>
  )
}

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
              <Link className={styles.btnSolid} href="/docs/Sky-Take-Out/00-后端开发知识大本营" prefetch={true}>
                <span>进入知识库</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
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
              <TiltCard key={item.href} {...item} />
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
              <Link key={item.href} href={item.href} prefetch={true}>{item.text}</Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  )
}


