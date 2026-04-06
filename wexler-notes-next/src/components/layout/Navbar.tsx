// src/components/layout/Navbar.tsx
'use client'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { useUiModeContext } from '@/components/providers/UiModeProvider'
import CommandTrigger from '@/components/command/CommandTrigger'

export default function Navbar() {
  const { fxMode, toggleFxMode, layoutMode, setLayoutMode } = useUiModeContext()

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.title}>
          Wexler&apos;s Notes
        </Link>

        <div className={styles.controls}>
          {/* FxToggle inline */}
          <div className={styles.fxGroup}>
            <button
              type="button"
              className={`${styles.fxBtn} ${fxMode === 'default' ? styles.fxBtnActive : ''}`}
              onClick={() => toggleFxMode('glass')}
              title="常态模式"
            >
              常态
            </button>
            <button
              type="button"
              className={`${styles.fxBtn} ${fxMode === 'glass' ? styles.fxBtnActive : ''}`}
              onClick={() => toggleFxMode('glass')}
              title="晶透模式"
            >
              晶透
            </button>
            <button
              type="button"
              className={`${styles.fxBtn} ${fxMode === 'liquid' ? styles.fxBtnActive : ''}`}
              onClick={() => toggleFxMode('liquid')}
              title="液态模式"
            >
              液态
            </button>
          </div>

          {/* LayoutToggle inline */}
          <div className={styles.layoutGroup}>
            <button
              type="button"
              className={`${styles.layoutBtn} ${layoutMode === 'minimal' ? styles.layoutBtnActive : ''}`}
              onClick={() => setLayoutMode('minimal')}
              title="Keynote"
            >
              K
            </button>
            <button
              type="button"
              className={`${styles.layoutBtn} ${layoutMode === 'dashboard' ? styles.layoutBtnActive : ''}`}
              onClick={() => setLayoutMode('dashboard')}
              title="Workbench"
            >
              W
            </button>
            <button
              type="button"
              className={`${styles.layoutBtn} ${layoutMode === 'editorial' ? styles.layoutBtnActive : ''}`}
              onClick={() => setLayoutMode('editorial')}
              title="Media"
            >
              M
            </button>
          </div>

          <CommandTrigger />
        </div>
      </div>
    </nav>
  )
}
