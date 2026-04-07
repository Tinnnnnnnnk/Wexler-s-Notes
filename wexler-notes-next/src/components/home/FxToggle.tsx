// src/components/home/FxToggle.tsx
'use client'

import type { FxMode } from '@/types/uiMode'
import styles from './FxToggle.module.css'

interface FxToggleProps {
  fxMode: FxMode
  onChange: (mode: FxMode) => void
}

export default function FxToggle({ fxMode, onChange }: FxToggleProps) {
  return (
    <div className={styles.group}>
      <button
        type="button"
        className={`${styles.toggle} ${fxMode === 'default' ? styles.activeDefault : ''}`}
        onClick={() => onChange('default')}
        title="常态模式（关闭特效背景）"
        aria-label="切换到常态模式"
      >
        <span className={`${styles.icon} ${styles.iconDefault}`} />
        常态
      </button>
      <button
        type="button"
        className={`${styles.toggle} ${fxMode === 'glass' ? styles.activeGlass : ''}`}
        onClick={() => onChange('glass')}
        title="晶透模式（玻璃背景）"
        aria-label="切换到晶透模式"
      >
        <span className={`${styles.icon} ${styles.iconGlass}`} />
        晶透
      </button>
      <button
        type="button"
        className={`${styles.toggle} ${fxMode === 'liquid' ? styles.activeLiquid : ''}`}
        onClick={() => onChange('liquid')}
        title="液态模式（动态背景 + BGM）"
        aria-label="切换到液态模式"
      >
        <span className={`${styles.icon} ${styles.iconLiquid}`} />
        液态
      </button>
    </div>
  )
}
