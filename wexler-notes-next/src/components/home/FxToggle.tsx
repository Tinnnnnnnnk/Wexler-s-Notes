// src/components/home/FxToggle.tsx
'use client'
import type { FxMode } from '@/types/uiMode'
import styles from './FxToggle.module.css'

interface FxToggleProps {
  fxMode: FxMode
  onToggle: (target: 'glass' | 'liquid') => void
}

export default function FxToggle({ fxMode, onToggle }: FxToggleProps) {
  return (
    <div className={styles.group}>
      <button
        type="button"
        className={`${styles.toggle} ${fxMode === 'default' ? styles.activeDefault : ''}`}
        onClick={() => onToggle('glass')}
        title="常态模式（关闭特效背景）"
        aria-label="切换到常态模式"
      >
        <span className={`${styles.icon} ${styles.iconDefault}`} />
        常态
      </button>
      <button
        type="button"
        className={`${styles.toggle} ${fxMode === 'glass' ? styles.activeGlass : ''}`}
        onClick={() => onToggle('glass')}
        title="晶透模式（静态背景）"
        aria-label="切换到晶透模式"
      >
        <span className={`${styles.icon} ${styles.iconGlass}`} />
        晶透
      </button>
      <button
        type="button"
        className={`${styles.toggle} ${fxMode === 'liquid' ? styles.activeLiquid : ''}`}
        onClick={() => onToggle('liquid')}
        title="液态模式（视频背景 + 背景音乐）"
        aria-label="切换到液态模式"
      >
        <span className={`${styles.icon} ${styles.iconLiquid}`} />
        液态
      </button>
    </div>
  )
}
