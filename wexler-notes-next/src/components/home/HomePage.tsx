// src/components/home/HomePage.tsx
// Homepage container — migrated from HomeLayoutScenes.vue + HomeFxBackdrop.vue
'use client'
import { usePathname } from 'next/navigation'
import { useUiModeContext } from '@/components/providers/UiModeProvider'
import Backdrop from './Backdrop'
import KeynoteScene from './scenes/KeynoteScene'
import WorkbenchScene from './scenes/WorkbenchScene'
import MediaScene from './scenes/MediaScene'
import PageEditor from '@/components/editor/PageEditor'
import ReadingEnhancer from '@/components/reading/ReadingEnhancer'
import CommandPalette from '@/components/command/CommandPalette'
import styles from './HomePage.module.css'

export default function HomePage() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { fxMode, layoutMode, perfMode, toggleFxMode, setLayoutMode } = useUiModeContext()

  if (!isHome) return null

  return (
    <div className={styles.root}>
      <Backdrop fxMode={fxMode} perfMode={perfMode} />

      <div className={styles.content}>
        {/* Scene container */}
        <div className={`${styles.scenes} ${styles.enter}`} key={layoutMode}>
          {layoutMode === 'minimal' && <KeynoteScene />}
          {layoutMode === 'dashboard' && <WorkbenchScene />}
          {layoutMode === 'editorial' && <MediaScene />}
        </div>
      </div>

      {/* Editor canvas (fixed overlay) */}
      <PageEditor route={pathname} />

      {/* Reading tools */}
      <ReadingEnhancer />
      <CommandPalette />
    </div>
  )
}
