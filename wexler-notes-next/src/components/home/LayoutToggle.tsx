// src/components/home/LayoutToggle.tsx
'use client'
import styles from './LayoutToggle.module.css'

interface LayoutToggleProps {
  layoutMode: 'minimal' | 'dashboard' | 'editorial'
  onChange: (mode: 'minimal' | 'dashboard' | 'editorial') => void
}

export default function LayoutToggle({ layoutMode, onChange }: LayoutToggleProps) {
  return (
    <div className={styles.toggle}>
      <button
        type="button"
        className={`${styles.btn} ${layoutMode === 'minimal' ? styles.active : ''}`}
        onClick={() => onChange('minimal')}
        aria-label="Keynote 场景"
      >
        Keynote
      </button>
      <button
        type="button"
        className={`${styles.btn} ${layoutMode === 'dashboard' ? styles.active : ''}`}
        onClick={() => onChange('dashboard')}
        aria-label="Workbench 场景"
      >
        Workbench
      </button>
      <button
        type="button"
        className={`${styles.btn} ${layoutMode === 'editorial' ? styles.active : ''}`}
        onClick={() => onChange('editorial')}
        aria-label="Media 场景"
      >
        Media
      </button>
    </div>
  )
}
