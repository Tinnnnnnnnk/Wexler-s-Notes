// src/components/home/HomePage.tsx
'use client'

import { usePathname } from 'next/navigation'
import { useUiModeContext } from '@/components/providers/UiModeProvider'
import Backdrop from './Backdrop'
import KeynoteScene from './scenes/KeynoteScene'
import WorkbenchScene from './scenes/WorkbenchScene'
import MediaScene from './scenes/MediaScene'
import LiquidScene from './scenes/LiquidScene'
import PageEditor from '@/components/editor/PageEditor'
import ReadingEnhancer from '@/components/reading/ReadingEnhancer'
import styles from './HomePage.module.css'

export default function HomePage() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { fxMode, layoutMode, perfMode } = useUiModeContext()

  if (!isHome) return null

  if (fxMode === 'liquid') {
    return (
      <div className={styles.root}>
        <Backdrop fxMode={fxMode} perfMode={perfMode} />
        <div className={styles.content}>
          <LiquidScene />
        </div>
        <PageEditor route={pathname} />
        <ReadingEnhancer />
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <Backdrop fxMode={fxMode} perfMode={perfMode} />

      <div className={styles.content}>
        <div className={`${styles.scenes} ${styles.enter}`} key={layoutMode}>
          {layoutMode === 'minimal' && <KeynoteScene />}
          {layoutMode === 'dashboard' && <WorkbenchScene />}
          {layoutMode === 'editorial' && <MediaScene />}
        </div>
      </div>

      <PageEditor route={pathname} />
      <ReadingEnhancer />
    </div>
  )
}
