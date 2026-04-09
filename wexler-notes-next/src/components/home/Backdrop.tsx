// src/components/home/Backdrop.tsx
'use client'

import { useEffect, useMemo, useState } from 'react'
import styles from './Backdrop.module.css'
import type { FxMode } from '@/types/uiMode'

interface BackdropProps {
  fxMode: FxMode
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
  const [lowFps, setLowFps] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  const isActive = fxMode === 'glass' || fxMode === 'liquid'
  const isLiquidActive = fxMode === 'liquid'
  const imageSrc = IMAGE_CANDIDATES[0]
  const videoSrc = useMemo(
    () => VIDEO_CANDIDATES[Math.min(videoIndex, VIDEO_CANDIDATES.length - 1)],
    [videoIndex],
  )
  const shouldUseVideo = !videoFailed
  const shouldShowAura = isLiquidActive && perfMode !== 'safe' && !site

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
      setLowFps(false)
      setVideoReady(false)
    }
  }, [isActive])

  useEffect(() => {
    setVideoReady(false)
  }, [videoSrc, shouldUseVideo, isActive])

  useEffect(() => {
    if (!isLiquidActive || perfMode === 'safe' || !shouldUseVideo) {
      setLowFps(false)
      return
    }

    let rafId = 0
    let lastTs = 0
    let frameCount = 0
    let frameTimeSum = 0
    const startedAt = performance.now()

    const probe = (ts: number) => {
      if (lastTs > 0) {
        frameTimeSum += ts - lastTs
        frameCount += 1
      }
      lastTs = ts

      if (ts - startedAt >= 1800) {
        const avgFrameTime = frameCount > 0 ? frameTimeSum / frameCount : 16.7
        setLowFps(avgFrameTime > 20)
        return
      }

      rafId = requestAnimationFrame(probe)
    }

    rafId = requestAnimationFrame(probe)
    return () => cancelAnimationFrame(rafId)
  }, [isLiquidActive, perfMode, shouldUseVideo, videoSrc])

  if (!isActive) return null

  return (
    <div
      className={[
        styles.backdrop,
        isLiquidActive ? styles.liquid : '',
        site ? styles.site : '',
        lowFps ? styles.lowFps : '',
        visible ? styles.visible : styles.hidden,
        perfMode === 'safe' ? styles.perfSafe : '',
      ].join(' ')}
      aria-hidden="true"
      style={{ '--home-fx-image': `url("${imageSrc}")` } as React.CSSProperties}
    >
      {shouldUseVideo ? (
        <video
          className={`${styles.video} ${videoReady ? styles.videoReady : styles.videoPending}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          src={videoSrc}
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
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
      {shouldShowAura && <div className={styles.aura} />}
    </div>
  )
}
