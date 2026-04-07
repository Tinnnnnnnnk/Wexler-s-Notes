// src/components/reading/ReadingEnhancer.tsx
// Reading progress + chapter navigation — migrated from ReadingEnhancer.vue
'use client'
import { useReadingProgress } from '@/hooks/useReadingProgress'
import { useState, useEffect, useCallback, useRef } from 'react'
import styles from './ReadingEnhancer.module.css'

interface Heading {
  id: string
  level: string
  text: string
}

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v))
}

export default function ReadingEnhancer() {
  const { progress, showBackToTop, scrollToTop } = useReadingProgress()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState('')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [position, setPosition] = useState<{ left: number; top: number } | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isWideScreen, setIsWideScreen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const dragOffset = useRef({ x: 0, y: 0 })
  const rafRef = useRef(0)

  const showNav = isWideScreen && headings.length > 0

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    setIsWideScreen(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsWideScreen(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const nodes = document.querySelectorAll('.docContent h2[id], .docContent h3[id]')
    setHeadings(
      Array.from(nodes).map((n) => ({
        id: n.id,
        level: n.tagName.toLowerCase(),
        text: (n.textContent || '').slice(0, 24),
      }))
    )
    setActiveId(nodes[0]?.id ?? '')
  }, [])

  useEffect(() => {
    if (!showNav || position !== null) return
    if (panelRef.current) {
      const rect = panelRef.current.getBoundingClientRect()
      const x = clamp(rect.left, 10, window.innerWidth - 226)
      const y = clamp(rect.top, 10, window.innerHeight - 320)
      setPosition({ left: x, top: y })
    }
  }, [showNav, position])

  useEffect(() => {
    const handler = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0
        if (!headings.length) return
        const marker = window.scrollY + 140
        let current = headings[0]
        for (const h of headings) {
          const node = document.getElementById(h.id)
          if (node && node.offsetTop <= marker) current = h
          else break
        }
        setActiveId(current.id)
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', handler)
    }
  }, [headings])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return
    const startX = e.clientX
    const startY = e.clientY
    const startPos = position

    const onMove = (ev: PointerEvent) => {
      if (!startPos) return
      const x = clamp(startPos.left + (ev.clientX - startX), 10, window.innerWidth - 226)
      const y = clamp(startPos.top + (ev.clientY - startY), 10, window.innerHeight - 320)
      setPosition({ left: x, top: y })
    }
    const onUp = () => {
      setIsDragging(false)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      if (position) {
        localStorage.setItem('wexler.chapterSpotlight.position', JSON.stringify(position))
      }
    }

    setIsDragging(true)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
  }, [position])

  const toggleCollapse = () => setIsCollapsed((p) => !p)

  return (
    <>
      {/* Progress bar */}
      <div className={styles.progress} aria-hidden="true">
        <span className={styles.progressBar} style={{ transform: `scaleX(${progress})` }} />
      </div>

      {/* Back to top */}
      {showBackToTop && (
        <button className={styles.backTop} onClick={() => scrollToTop()} aria-label="返回顶部">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}

      {/* Chapter spotlight */}
      {showNav && position !== null && (
        <aside
          ref={panelRef}
          className={`${styles.spotlight} ${isDragging ? styles.dragging : ''} ${isCollapsed ? styles.collapsed : ''}`}
          style={{ left: position.left, top: position.top }}
          aria-label="章节导航"
          onPointerDown={onPointerDown}
        >
          <div className={styles.dragHandle}>
            <button
              type="button"
              className={`${styles.toggleBtn} ${isCollapsed ? styles.toggleCollapsed : ''}`}
              aria-label={isCollapsed ? '展开章节导航' : '收起章节导航'}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => { e.stopPropagation(); toggleCollapse() }}
            />
          </div>
          {!isCollapsed && (
            <div className={styles.spotlightBody}>
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className={`${styles.navLink} ${h.level === 'h3' ? styles.navLinkH3 : ''} ${h.id === activeId ? styles.navLinkActive : ''}`}
                >
                  {h.text}
                </a>
              ))}
            </div>
          )}
        </aside>
      )}
    </>
  )
}
