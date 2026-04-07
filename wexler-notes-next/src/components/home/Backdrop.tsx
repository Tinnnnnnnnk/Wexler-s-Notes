// src/components/home/Backdrop.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Backdrop.module.css'
import BgmPlayer from './BgmPlayer'

interface BackdropProps {
  fxMode: 'default' | 'glass' | 'liquid'
  perfMode: 'normal' | 'safe'
}

const IMAGE_SRC = '/media/home-bg/test1.jpg'
const VIDEO_SRC = '/media/home-bg/楼梯不变云动视频.mp4'

export default function Backdrop({ fxMode, perfMode }: BackdropProps) {
  const [visible, setVisible] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const rafRef = useRef(0)
  const timerRef = useRef(0)
  const fpsCheckedRef = useRef(false)
  const prevFxMode = useRef<'default' | 'glass' | 'liquid'>(fxMode)

  const isActive = fxMode === 'glass' || fxMode === 'liquid'
  const isLiquidActive = fxMode === 'liquid'
  const shouldUseVideo = Boolean(VIDEO_SRC) && perfMode !== 'safe' && !videoFailed

  // Animate in/out on mode change
  useEffect(() => {
    if (isActive) {
      // Fade in
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    } else {
      // Fade out
      setVisible(false)
    }
  }, [isActive])

  // FPS probe
  useEffect(() => {
    if (isActive) {
      if (!fpsCheckedRef.current) {
        fpsCheckedRef.current = true
        const start = performance.now()
        let frames = 0
        const probe = (now: number) => {
          frames += 1
          const elapsed = now - start
          if (elapsed >= 1800) {
            stopFpsProbe()
            return
          }
          rafRef.current = window.requestAnimationFrame(probe)
        }
        timerRef.current = window.setTimeout(() => stopFpsProbe(), 2600)
        rafRef.current = window.requestAnimationFrame(probe)
      }
    } else {
      stopFpsProbe()
      fpsCheckedRef.current = false
    }
    return () => stopFpsProbe()
  }, [isActive])

  function stopFpsProbe() {
    if (rafRef.current) { window.cancelAnimationFrame(rafRef.current); rafRef.current = 0 }
    if (timerRef.current) { window.clearTimeout(timerRef.current); timerRef.current = 0 }
  }

  // Reset videoFailed when switching to liquid (allow retry)
  useEffect(() => {
    if (fxMode === 'liquid' && prevFxMode.current !== 'liquid') {
      setVideoFailed(false)
    }
    prevFxMode.current = fxMode
  }, [fxMode])

  if (!isActive) return null

  return (
    <>
      <div
        className={[
          styles.backdrop,
          isLiquidActive ? styles.liquid : '',
          visible ? styles.visible : styles.hidden,
          perfMode === 'safe' ? styles.perfSafe : '',
        ].join(' ')}
        aria-hidden="true"
        style={{ '--home-fx-image': `url("${IMAGE_SRC}")` } as React.CSSProperties}
      >
        {shouldUseVideo ? (
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            src={VIDEO_SRC}
            onError={() => setVideoFailed(true)}
          />
        ) : (
          <div className={styles.image} />
        )}
        {isLiquidActive && <div className={styles.aura} />}
      </div>

      {isLiquidActive && <BgmPlayer />}
    </>
  )
}
