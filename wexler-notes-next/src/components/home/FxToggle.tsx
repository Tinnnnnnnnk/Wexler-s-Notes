// src/components/home/FxToggle.tsx
'use client'

import { type CSSProperties, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { FxMode } from '@/types/uiMode'
import styles from './FxToggle.module.css'

interface FxToggleProps {
  fxMode: FxMode
  onChange: (mode: FxMode) => void
}

export default function FxToggle({ fxMode, onChange }: FxToggleProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [origin, setOrigin] = useState({ x: '100%', y: '0%' })
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [])

  const triggerTransition = useCallback((event?: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof document === 'undefined') return
    if (document.documentElement.classList.contains('home-fx-performance-safe')) return

    const button = event?.currentTarget
    if (button) {
      const rect = button.getBoundingClientRect()
      setOrigin({
        x: `${((rect.left + rect.width / 2) / window.innerWidth) * 100}%`,
        y: `${((rect.top + rect.height / 2) / window.innerHeight) * 100}%`,
      })
    }
    setIsTransitioning(true)
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setIsTransitioning(false)
      timerRef.current = null
    }, 520)
  }, [])

  const applyMode = useCallback((mode: FxMode, event: React.MouseEvent<HTMLButtonElement>) => {
    triggerTransition(event)
    onChange(mode)
  }, [onChange, triggerTransition])

  // 快捷切换：仅保留 default/glass/liquid 三个按钮，新增四种通过风格展厅选择
  return (
    <>
      <div className={styles.group}>
        <button
          type="button"
          className={`${styles.toggle} ${fxMode === 'default' ? styles.activeDefault : ''}`}
          onClick={(event) => applyMode('default', event)}
          title="常态模式（关闭特效背景）"
          aria-label="切换到常态模式"
        >
          <span className={`${styles.icon} ${styles.iconDefault}`} />
          常态
        </button>
        <button
          type="button"
          className={`${styles.toggle} ${fxMode === 'glass' ? styles.activeGlass : ''}`}
          onClick={(event) => applyMode('glass', event)}
          title="晶透模式（玻璃背景）"
          aria-label="切换到晶透模式"
        >
          <span className={`${styles.icon} ${styles.iconGlass}`} />
          晶透
        </button>
        <button
          type="button"
          className={`${styles.toggle} ${fxMode === 'liquid' ? styles.activeLiquid : ''}`}
          onClick={(event) => applyMode('liquid', event)}
          title="液态模式（动态背景 + BGM）"
          aria-label="切换到液态模式"
        >
          <span className={`${styles.icon} ${styles.iconLiquid}`} />
          液态
        </button>
      </div>

      {isTransitioning && typeof document !== 'undefined' && createPortal(
        <div
          className={styles.transitionOverlay}
          style={
            {
              '--transition-origin-x': origin.x,
              '--transition-origin-y': origin.y,
            } as CSSProperties
          }
        />,
        document.body,
      )}
    </>
  )
}
