// src/components/reading/ReadingEnhancer.tsx
'use client'

import { useReadingProgress } from '@/hooks/useReadingProgress'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './ReadingEnhancer.module.css'

interface Heading {
  id: string
  level: 'h2' | 'h3'
  text: string
}

const POSITION_KEY = 'wexler.chapterSpotlight.position'
const COLLAPSE_KEY = 'wexler.chapterSpotlight.collapsed'

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v))
}

function shorten(text: string): string {
  const value = (text || '').replace(/\s+/g, ' ').trim()
  if (value.length <= 24) return value
  return `${value.slice(0, 24)}...`
}

export default function ReadingEnhancer() {
  const pathname = usePathname()
  const { progress, showBackToTop, scrollToTop } = useReadingProgress()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState('')
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [position, setPosition] = useState<{ left: number; top: number } | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isWideScreen, setIsWideScreen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)
  const latestPosRef = useRef<{ left: number; top: number } | null>(null)

  const showNav = isWideScreen && headings.length > 0

  useEffect(() => {
    latestPosRef.current = position
  }, [position])

  useEffect(() => {
    try {
      const rawPos = localStorage.getItem(POSITION_KEY)
      const rawCollapsed = localStorage.getItem(COLLAPSE_KEY)
      if (rawPos) {
        const parsed = JSON.parse(rawPos)
        if (
          typeof parsed?.left === 'number' &&
          Number.isFinite(parsed.left) &&
          typeof parsed?.top === 'number' &&
          Number.isFinite(parsed.top)
        ) {
          setPosition({ left: parsed.left, top: parsed.top })
        }
      }
      setIsCollapsed(rawCollapsed === '1')
    } catch {
      // ignore storage errors
    }
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1280px)')
    setIsWideScreen(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsWideScreen(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const collect = () => {
      const nodes = document.querySelectorAll('.docContent h2[id], .docContent h3[id]')
      const next = Array.from(nodes).map((node) => ({
        id: node.id,
        level: node.tagName.toLowerCase() as 'h2' | 'h3',
        text: shorten(node.textContent || ''),
      }))
      setHeadings(next)
      setActiveId(next[0]?.id ?? '')
    }
    const timer = window.setTimeout(collect, 60)
    return () => window.clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    if (!showNav || position !== null || !panelRef.current) return
    const rect = panelRef.current.getBoundingClientRect()
    const next = {
      left: clamp(rect.left, 10, window.innerWidth - 226),
      top: clamp(rect.top, 10, window.innerHeight - 320),
    }
    setPosition(next)
  }, [showNav, position])

  useEffect(() => {
    const handler = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0
        if (!headings.length) return
        const marker = window.scrollY + 140
        let current = headings[0]
        for (const heading of headings) {
          const node = document.getElementById(heading.id)
          if (node && node.offsetTop <= marker) current = heading
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
    if (!latestPosRef.current) return

    const startX = e.clientX
    const startY = e.clientY
    const startPos = latestPosRef.current

    const onMove = (ev: PointerEvent) => {
      const next = {
        left: clamp(startPos.left + (ev.clientX - startX), 10, window.innerWidth - 226),
        top: clamp(startPos.top + (ev.clientY - startY), 10, window.innerHeight - 320),
      }
      latestPosRef.current = next
      setPosition(next)
    }

    const onUp = () => {
      setIsDragging(false)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      const latest = latestPosRef.current
      if (!latest) return
      try {
        localStorage.setItem(POSITION_KEY, JSON.stringify(latest))
      } catch {
        // ignore storage errors
      }
    }

    setIsDragging(true)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
  }, [])

  const toggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev
      try {
        localStorage.setItem(COLLAPSE_KEY, next ? '1' : '0')
      } catch {
        // ignore storage errors
      }
      return next
    })
  }

  return (
    <>
      <div className={styles.progress} aria-hidden="true">
        <span className={styles.progressBar} style={{ transform: `scaleX(${progress})` }} />
      </div>

      {showBackToTop && (
        <button className={styles.backTop} onClick={() => scrollToTop()} aria-label="回到顶部">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}

      {showNav && position !== null && (
        <aside
          ref={panelRef}
          className={`${styles.spotlight} ${isDragging ? styles.dragging : ''} ${isCollapsed ? styles.collapsed : ''}`}
          style={{ left: position.left, top: position.top }}
          aria-label="章节导航"
          onPointerDown={onPointerDown}
        >
          <div className={styles.dragHandle}>
            <p className={styles.spotlightTitle}>章节导航</p>
            <button
              type="button"
              className={`${styles.toggleBtn} ${isCollapsed ? styles.toggleCollapsed : ''}`}
              aria-label={isCollapsed ? '展开章节导航' : '收起章节导航'}
              onPointerDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation()
                toggleCollapse()
              }}
            />
          </div>
          {!isCollapsed && (
            <div className={styles.spotlightBody}>
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={`${styles.navLink} ${heading.level === 'h3' ? styles.navLinkH3 : ''} ${heading.id === activeId ? styles.navLinkActive : ''}`}
                >
                  {heading.text}
                </a>
              ))}
            </div>
          )}
        </aside>
      )}
    </>
  )
}
