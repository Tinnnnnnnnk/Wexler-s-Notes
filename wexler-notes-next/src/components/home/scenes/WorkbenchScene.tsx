// src/components/home/scenes/WorkbenchScene.tsx
'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import styles from './WorkbenchScene.module.css'

interface MatrixCardProps {
  href: string
  title: string
  code: string
  desc: string
}

function GlowCard({ href, title, code, desc }: MatrixCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)
  const rafRef = useRef<number>(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Performance optimization: Avoid triggering React re-renders on mousemove
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.setProperty('--mouse-x', `${x}px`)
        cardRef.current.style.setProperty('--mouse-y', `${y}px`)
      }
    })
  }

  return (
    <Link 
      ref={cardRef}
      href={href} 
      className={styles.matrixCard}
      onMouseMove={handleMouseMove}
      prefetch={true}
    >
      <div className={styles.matrixHeader}>
        <h3>{title}</h3>
        <span className={styles.matrixCode}>{code}</span>
      </div>
      <p>{desc}</p>
      <div className={styles.matrixFooter}>
        <span className={styles.matrixLink}>ACCESS MODULE</span>
      </div>
    </Link>
  )
}

export default function WorkbenchScene() {
  return (
    <section className={styles.scene}>
      <div className={styles.container}>
        {/* Sidebar Navigation */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <div className={styles.statusDot} />
            <p className={styles.label}>System Core</p>
          </div>
          <h2 className={styles.sidebarTitle}>工程控制台</h2>
          <nav className={styles.menu}>
            {[
              { href: '/docs/Sky-Take-Out/00-后端开发知识大本营', text: '后端主线', id: 'BE' },
              { href: '/docs/Code/DS/DFS', text: '算法主线', id: 'AL' },
              { href: '/docs/PromptLearning/day1', text: 'Prompt 主线', id: 'AI' },
              { href: '/docs/Info/Software', text: '站点主线', id: 'OS' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className={styles.menuItem} prefetch={true}>
                <span className={styles.menuId}>{item.id}</span>
                <span className={styles.menuText}>{item.text}</span>
              </Link>
            ))}
          </nav>
          <div className={styles.sidebarFooter}>
            <p className={styles.footerLabel}>Current Objective</p>
            <strong className={styles.footerText}>学习、编码、部署、复盘形成闭环系统</strong>
          </div>
        </aside>

        {/* Main Dashboard */}
        <main className={styles.dashboard}>
          <header className={styles.header}>
            <div className={styles.headerInfo}>
              <p className={styles.subtitle}>Engineering Dashboard v3.0</p>
              <h1 className={styles.mainTitle}>把知识组织成<span className={styles.accent}>可执行系统</span></h1>
            </div>
            <Link href="/docs/面试笔记/MyWeb/构建过程end" className={styles.logBtn} prefetch={true}>
              <span>查看改造日志</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          </header>

          <div className={styles.kpiGrid}>
            {[
              { label: 'Deployment Pipeline', value: 'Stable', status: 'optimal', desc: 'GitHub Actions + Rsync' },
              { label: 'Knowledge Base', value: '130+', status: 'active', desc: 'Obsidian Sync active' },
              { label: 'Technology Stack', value: 'Fullstack', status: 'ready', desc: 'Java / Next.js / DevOps' },
            ].map((item) => (
              <div key={item.label} className={styles.kpiCard}>
                <div className={styles.kpiHeader}>
                  <span className={styles.kpiLabel}>{item.label}</span>
                  <div className={`${styles.kpiStatus} ${styles[item.status]}`} />
                </div>
                <strong className={styles.kpiValue}>{item.value}</strong>
                <p className={styles.kpiDesc}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.matrix}>
            {[
              { href: '/docs/Sky-Take-Out/01-Web 前端全栈开发手册', title: '前端协作', code: 'FE-01', desc: '页面样式、组件扩展与交互体验优化。' },
              { href: '/docs/Sky-Take-Out/02-Java 后端核心与 SpringBoot 实战手册', title: 'Java 后端', code: 'BE-02', desc: '接口服务、业务抽象与稳定性治理。' },
              { href: '/docs/Sky-Take-Out/03-数据持久化与 MyBatis 指南', title: '数据层', code: 'DB-03', desc: 'MyBatis、SQL 设计与一致性实践。' },
              { href: '/docs/Sky-Take-Out/04-服务器运维与容器化部署手册', title: '部署运维', code: 'OPS-04', desc: '容器化、Nginx 与服务器迁移实操。' },
            ].map((item) => (
              <GlowCard key={item.href} {...item} />
            ))}
          </div>
        </main>
      </div>
    </section>
  )
}

