// src/components/home/Backdrop.tsx
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import styles from './Backdrop.module.css'

interface BackdropProps {
  fxMode: 'default' | 'glass' | 'liquid'
  perfMode: 'normal' | 'safe'
  /** 文档站等非首页：更轻的遮罩，液态下更突出视频 */
  site?: boolean
}

const IMAGE_CANDIDATES = [
  '/media/home-bg/test1.jpg',
  '/images/hero-abstract.jpg',
]

const VIDEO_CANDIDATES = [
  '/media/home-bg/楼梯不变云动视频.mp4',
  '/media/home-bg/Bg1.mp4',
]

export default function Backdrop({ fxMode, perfMode, site = false }: BackdropProps) {
  const [visible, setVisible] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [videoIndex, setVideoIndex] = useState(0)
  const rafRef = useRef(0)
  const timerRef = useRef(0)
  const fpsCheckedRef = useRef(false)

  const isActive = fxMode === 'glass' || fxMode === 'liquid'
  const isLiquidActive = fxMode === 'liquid'
  const imageSrc = IMAGE_CANDIDATES[0]
  const videoSrc = useMemo(
    () => VIDEO_CANDIDATES[Math.min(videoIndex, VIDEO_CANDIDATES.length - 1)],
    [videoIndex],
  )
  const shouldUseVideo = perfMode !== 'safe' && !videoFailed

  useEffect(() => {
    if (isActive) {
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    }
    setVisible(false)
  }, [isActive])

  useEffect(() => {
    if (!isActive) {
      setVideoFailed(false)
      setVideoIndex(0)
    }
  }, [isActive])

  useEffect(() => {
    if (!isActive) {
      stopFpsProbe()
      fpsCheckedRef.current = false
      return
    }

    if (fpsCheckedRef.current) return
    fpsCheckedRef.current = true
    const start = performance.now()

    const probe = (now: number) => {
      const elapsed = now - start
      if (elapsed >= 1800) {
        stopFpsProbe()
        return
      }
      rafRef.current = window.requestAnimationFrame(probe)
    }

    timerRef.current = window.setTimeout(() => stopFpsProbe(), 2600)
    rafRef.current = window.requestAnimationFrame(probe)
    return () => stopFpsProbe()
  }, [isActive])

  function stopFpsProbe() {
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current)
      rafRef.current = 0
    }
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
      timerRef.current = 0
    }
  }

  if (!isActive) return null

  return (
    <div
      className={[
        styles.backdrop,
        isLiquidActive ? styles.liquid : '',
        site ? styles.site : '',
        visible ? styles.visible : styles.hidden,
        perfMode === 'safe' ? styles.perfSafe : '',
      ].join(' ')}
      aria-hidden="true"
      style={{ '--home-fx-image': `url("${imageSrc}")` } as React.CSSProperties}
    >
      {shouldUseVideo ? (
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          src={videoSrc}
          onError={() => {
            setVideoIndex((prev) => {
              const next = prev + 1
              if (next >= VIDEO_CANDIDATES.length) {
                setVideoFailed(true)
                return prev
              }
              return next
            })
          }}
        />
      ) : (
        <div className={styles.image} />
      )}
      {isLiquidActive && <div className={styles.aura} />}
    </div>
  )
}
