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
        aria-label="切换到 Keynote 布局"
      >
        Keynote
      </button>
      <button
        type="button"
        className={`${styles.btn} ${layoutMode === 'dashboard' ? styles.active : ''}`}
        onClick={() => onChange('dashboard')}
        aria-label="切换到 Workbench 布局"
      >
        Workbench
      </button>
      <button
        type="button"
        className={`${styles.btn} ${layoutMode === 'editorial' ? styles.active : ''}`}
        onClick={() => onChange('editorial')}
        aria-label="切换到 Media 布局"
      >
        Media
      </button>
    </div>
  )
}
