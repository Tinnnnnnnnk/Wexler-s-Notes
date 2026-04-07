// src/components/article/EnhancedReadingProgress.tsx
// 增强型阅读进度条组件

'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './EnhancedReadingProgress.module.css'

interface ReadingProgressState {
  progress: number // 0-100
  chapter: string
  chapterProgress: number // 当前章节进度
  totalChapters: number
  currentChapterIndex: number
}

export default function EnhancedReadingProgress() {
  const [state, setState] = useState<ReadingProgressState>({
    progress: 0,
    chapter: '',
    chapterProgress: 0,
    totalChapters: 0,
    currentChapterIndex: 0,
  })
  const [showTooltip, setShowTooltip] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const rafRef = useRef(0)
  const lastUpdateRef = useRef(0)

  const updateProgress = useCallback(() => {
    const now = Date.now()
    if (now - lastUpdateRef.current < 50) return // 节流
    lastUpdateRef.current = now

    const articleEl = document.querySelector('.docContent') as HTMLElement | null
    if (!articleEl) {
      setState((prev) => ({ ...prev, progress: 0 }))
      return
    }

    const articleTop = articleEl.getBoundingClientRect().top + window.scrollY
    const articleHeight = articleEl.offsetHeight
    const windowHeight = window.innerHeight
    const scrollY = window.scrollY

    // 计算整体进度
    const startPoint = articleTop - windowHeight * 0.3
    const endPoint = articleTop + articleHeight - windowHeight * 0.7
    const totalScrollable = endPoint - startPoint
    const currentScroll = scrollY - startPoint
    const progress = Math.max(0, Math.min(100, (currentScroll / totalScrollable) * 100))

    // 收集章节信息
    const headings = Array.from(
      articleEl.querySelectorAll('h2[id], h3[id]')
    ) as HTMLElement[]

    const totalChapters = headings.length
    let currentChapterIndex = 0
    let chapter = '引言'
    let chapterProgress = 0

    if (headings.length > 0) {
      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i]
        const nextHeading = headings[i + 1]
        const headingTop = heading.getBoundingClientRect().top + window.scrollY

        if (scrollY >= headingTop - 100) {
          currentChapterIndex = i
          chapter = heading.textContent || `章节 ${i + 1}`

          if (nextHeading) {
            const nextTop = nextHeading.getBoundingClientRect().top + window.scrollY
            const chapterScrollable = nextTop - headingTop
            const chapterScrolled = scrollY - headingTop
            chapterProgress = Math.max(0, Math.min(100, (chapterScrolled / chapterScrollable) * 100))
          } else {
            const chapterScrollable = endPoint - headingTop
            const chapterScrolled = scrollY - headingTop
            chapterProgress = Math.max(0, Math.min(100, (chapterScrolled / chapterScrollable) * 100))
          }
        }
      }
    }

    setState({
      progress,
      chapter,
      chapterProgress,
      totalChapters,
      currentChapterIndex,
    })

    setIsVisible(scrollY > 200)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0
        updateProgress()
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    updateProgress()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [updateProgress])

  const scrollToTop = useCallback((smooth = true) => {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'instant' })
  }, [])

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const percentage = clickX / rect.width
      const targetScroll = percentage * document.body.scrollHeight
      window.scrollTo({ top: targetScroll * 0.8, behavior: 'smooth' })
    },
    []
  )

  return (
    <>
      {/* 顶部进度条 */}
      <div
        className={`${styles.progressBar} ${isVisible ? styles.visible : ''}`}
        onClick={handleProgressClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        role="progressbar"
        aria-valuenow={Math.round(state.progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="阅读进度"
      >
        <div
          className={styles.progressFill}
          style={{ transform: `scaleX(${state.progress / 100})` }}
        >
          <div className={styles.progressGlow} />
        </div>

        {/* 进度提示 */}
        {showTooltip && (
          <div className={styles.tooltip}>
            <span className={styles.tooltipProgress}>{Math.round(state.progress)}%</span>
            {state.chapter && (
              <>
                <span className={styles.tooltipDivider}>|</span>
                <span className={styles.tooltipChapter}>{state.chapter}</span>
              </>
            )}
          </div>
        )}

        {/* 百分比标签 */}
        <span className={styles.percentageLabel}>
          {Math.round(state.progress)}%
        </span>
      </div>

      {/* 底部迷你进度 */}
      <div className={`${styles.miniProgress} ${isVisible ? styles.miniVisible : ''}`}>
        <div className={styles.miniProgressFill} style={{ width: `${state.progress}%` }} />
      </div>
    </>
  )
}