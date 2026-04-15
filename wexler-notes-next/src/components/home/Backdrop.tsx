// src/components/home/Backdrop.tsx
'use client'

import { useEffect, useMemo, useState } from 'react'
import styles from './Backdrop.module.css'
import type { FxMode } from '@/types/uiMode'

const VIDEO_STYLES = new Set<FxMode>([
  'glass',
  'liquid',
  'cyberpunk',
  'cyber-hacker',
  'cyber-corp',
  'cyber-game',
  'future-tech',
  'rgb',
  'anime',
  'haru',
  'mugen',
  'stream',
  'aurora',
  'graphite',
  'sakura',
  'ocean',
  'ember',
])

interface BackdropProps {
  fxMode: FxMode
  perfMode: 'normal' | 'safe'
  /** 文档站等非首页：更轻的遮罩，液态下更突出视频 */
  site?: boolean
}

export default function Backdrop({ fxMode, perfMode, site = false }: BackdropProps) {
  const [visible, setVisible] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [lowFps, setLowFps] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  const isActive = VIDEO_STYLES.has(fxMode)
  const isLiquidActive = fxMode === 'liquid'
  const imageSrc = `/media/home-bg/bg-${fxMode}.jpg`
  const videoSrc = useMemo(() => {
    return `/media/home-bg/bg-${fxMode}.mp4`
  }, [fxMode])
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
      {/* Always render image as placeholder, so when video is loading, it shows the poster instead of black screen */}
      <div className={`${styles.image} ${shouldUseVideo && videoReady ? styles.imageHidden : ''}`} />
      
      {shouldUseVideo && (
        <video
          key={videoSrc}
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
            setVideoFailed(true)
          }}
        />
      )}
      
      {shouldShowAura && <div className={styles.aura} />}
    </div>
  )
}

