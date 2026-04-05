// src/components/home/HomePage.tsx
// Homepage container — migrated from HomeLayoutScenes.vue + HomeFxBackdrop.vue
'use client'
import { usePathname } from 'next/navigation'
import { useUiMode } from '@/hooks/useUiMode'
import Backdrop from './Backdrop'
import KeynoteScene from './scenes/KeynoteScene'
import WorkbenchScene from './scenes/WorkbenchScene'
import MediaScene from './scenes/MediaScene'
import FxToggle from './FxToggle'
import LayoutToggle from './LayoutToggle'
import PageEditor from '@/components/editor/PageEditor'
import ReadingEnhancer from '@/components/reading/ReadingEnhancer'
import CommandPalette from '@/components/command/CommandPalette'
import styles from './HomePage.module.css'

export default function HomePage() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { fxMode, layoutMode, perfMode, toggleFxMode, setLayoutMode } = useUiMode(isHome)

  if (!isHome) return null

  const isLiquid = fxMode === 'liquid'

  return (
    <div className={styles.root}>
      <Backdrop fxMode={fxMode} perfMode={perfMode} />

      <div className={styles.content}>
        {/* Nav controls */}
        <div className={styles.controls}>
          <FxToggle fxMode={fxMode} onToggle={toggleFxMode} />
          <LayoutToggle layoutMode={layoutMode} onChange={setLayoutMode} />
        </div>

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
