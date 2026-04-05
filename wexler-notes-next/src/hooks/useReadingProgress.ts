'use client'
// src/hooks/useReadingProgress.ts
// Reading progress calculation — migrated from ReadingEnhancer.vue

import { useState, useEffect, useCallback, useRef } from 'react'

export interface UseReadingProgressReturn {
  progress: number
  showBackToTop: boolean
  scrollToTop: (smooth?: boolean) => void
}

export function useReadingProgress(): UseReadingProgressReturn {
  const [progress, setProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const rafRef = useRef(0)
  const isAnimatingRef = useRef(false)

  const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value))

  const scrollToTop = useCallback((smooth = true) => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'instant' })
    setTimeout(() => {
      isAnimatingRef.current = false
    }, 600)
  }, [])

  const handleScroll = useCallback(() => {
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0

      const articleEl = document.querySelector('.docContent') as HTMLElement | null
      if (!articleEl) {
        setProgress(0)
        setShowBackToTop(window.scrollY > 400)
        return
      }

      const articleStart = articleEl.getBoundingClientRect().top + window.scrollY - 96
      const articleEnd = articleStart + articleEl.offsetHeight - window.innerHeight * 0.7

      if (articleEnd <= articleStart) {
        setProgress(1)
      } else {
        const ratio = (window.scrollY - articleStart) / (articleEnd - articleStart)
        setProgress(clamp(ratio, 0, 1))
      }

      setShowBackToTop(window.scrollY > 400)
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  return { progress, showBackToTop, scrollToTop }
}
