// src/components/home/FxToggle.tsx
'use client'
import styles from './FxToggle.module.css'

interface FxToggleProps {
  fxMode: 'default' | 'glass' | 'liquid'
  onToggle: (target: 'glass' | 'liquid') => void
}

export default function FxToggle({ fxMode, onToggle }: FxToggleProps) {
  return (
    <div className={styles.group}>
      <button
        type="button"
        className={`${styles.toggle} ${fxMode === 'default' ? styles.activeDefault : ''}`}
        onClick={() => onToggle('default' as unknown as 'glass')}
        title="常态模式"
        aria-label="切换到常态模式"
      >
        <span className={`${styles.icon} ${styles.iconDefault}`} />
        常态
      </button>
      <button
        type="button"
        className={`${styles.toggle} ${fxMode === 'glass' ? styles.activeGlass : ''}`}
        onClick={() => onToggle('glass')}
        title="晶透模式"
        aria-label="切换到晶透模式"
      >
        <span className={`${styles.icon} ${styles.iconGlass}`} />
        晶透
      </button>
      <button
        type="button"
        className={`${styles.toggle} ${fxMode === 'liquid' ? styles.activeLiquid : ''}`}
        onClick={() => onToggle('liquid')}
        title="液态模式"
        aria-label="切换到液态模式"
      >
        <span className={`${styles.icon} ${styles.iconLiquid}`} />
        液态
      </button>
    </div>
  )
}
