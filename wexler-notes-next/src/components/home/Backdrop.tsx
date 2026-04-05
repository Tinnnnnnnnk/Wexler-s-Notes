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
  const [isPlaying, setIsPlaying] = useState(false)
  const rafRef = useRef(0)
  const timerRef = useRef(0)
  const fpsCheckedRef = useRef(false)

  const isActive = fxMode === 'glass' || fxMode === 'liquid'
  const isLiquidActive = fxMode === 'liquid'
  const isLiquidPlayerOnly = fxMode === 'liquid'
  const shouldUseVideo = Boolean(VIDEO_SRC) && perfMode !== 'safe'

  function stopFpsProbe() {
    if (rafRef.current) { window.cancelAnimationFrame(rafRef.current); rafRef.current = 0 }
    if (timerRef.current) { window.clearTimeout(timerRef.current); timerRef.current = 0 }
  }

  useEffect(() => {
    if (isActive) {
      stopFpsProbe()
      if (!fpsCheckedRef.current) {
        fpsCheckedRef.current = true
        const start = performance.now()
        let frames = 0
        const probe = (now: number) => {
          frames += 1
          const elapsed = now - start
          if (elapsed >= 1800) {
            const fps = (frames * 1000) / elapsed
            if (fps < 44) {
              // perfMode would be set to 'safe' by parent via useUiMode
            }
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
    }

    return () => stopFpsProbe()
  }, [isActive, perfMode])

  return (
    <>
      {isActive && (
        <div
          className={`${styles.backdrop} ${isLiquidActive ? styles.liquid : ''}`}
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
            />
          ) : (
            <div className={styles.image} />
          )}
          {isLiquidActive && <div className={styles.aura} />}
        </div>
      )}

      {isLiquidPlayerOnly && <BgmPlayer />}
    </>
  )
}
