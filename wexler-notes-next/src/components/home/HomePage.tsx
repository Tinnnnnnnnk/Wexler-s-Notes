// src/components/home/HomePage.tsx
'use client'

import { usePathname } from 'next/navigation'
import { useUiModeContext } from '@/components/providers/UiModeProvider'
import Backdrop from './Backdrop'
import StyleFxLayer from './StyleFxLayer'
import KeynoteScene from './scenes/KeynoteScene'
import WorkbenchScene from './scenes/WorkbenchScene'
import MediaScene from './scenes/MediaScene'
import LiquidScene from './scenes/LiquidScene'
import PageEditor from '@/components/editor/PageEditor'
import ReadingEnhancer from '@/components/reading/ReadingEnhancer'
import type { FxMode } from '@/types/uiMode'
import styles from './HomePage.module.css'

const VIDEO_STYLES = new Set<FxMode>([
  'glass',
  'liquid',
  'cyberpunk',
  'cyber-hacker',
  'cyber-corp',
  'cyber-game',
  'future-tech',
  'rgb',
  'anime',
  'haru',
  'mugen',
  'stream',
  'aurora',
  'graphite',
  'sakura',
  'ocean',
  'ember',
])
const ENHANCED_STYLES = new Set<FxMode>([
  'cyberpunk',
  'cyber-hacker',
  'cyber-corp',
  'cyber-game',
  'future-tech',
  'rgb',
  'anime',
  'haru',
  'mugen',
  'stream',
  'aurora',
  'graphite',
  'sakura',
  'ocean',
  'ember',
])

const ROOT_MODE_CLASS: Partial<Record<FxMode, string>> = {
  cyberpunk: styles.modeCyberpunk,
  'cyber-hacker': styles.modeCyberHacker,
  'cyber-corp': styles.modeCyberCorp,
  'cyber-game': styles.modeCyberGame,
  'future-tech': styles.modeFutureTech,
  rgb: styles.modeRgb,
  anime: styles.modeAnime,
  haru: styles.modeHaru,
  mugen: styles.modeMugen,
  stream: styles.modeStream,
  aurora: styles.modeAurora,
  graphite: styles.modeGraphite,
  sakura: styles.modeSakura,
  ocean: styles.modeOcean,
  ember: styles.modeEmber,
}

const FRAME_MODE_CLASS: Partial<Record<FxMode, string>> = {
  cyberpunk: styles.frameCyberpunk,
  'cyber-hacker': styles.frameCyberHacker,
  'cyber-corp': styles.frameCyberCorp,
  'cyber-game': styles.frameCyberGame,
  'future-tech': styles.frameFutureTech,
  rgb: styles.frameRgb,
  anime: styles.frameAnime,
  haru: styles.frameHaru,
  mugen: styles.frameMugen,
  stream: styles.frameStream,
  aurora: styles.frameAurora,
  graphite: styles.frameGraphite,
  sakura: styles.frameSakura,
  ocean: styles.frameOcean,
  ember: styles.frameEmber,
}

export default function HomePage() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { fxMode, layoutMode, perfMode } = useUiModeContext()

  if (!isHome) return null

  const shouldShowBackdrop = VIDEO_STYLES.has(fxMode)

  const rootClassName = [styles.root, 'home-root', ROOT_MODE_CLASS[fxMode] ?? ''].filter(Boolean).join(' ')
  const contentClassName = [styles.content, 'home-content'].join(' ')
  const frameClassName = [styles.sceneFrame, FRAME_MODE_CLASS[fxMode] ?? ''].filter(Boolean).join(' ')

  if (fxMode === 'liquid') {
    return (
      <div className={rootClassName}>
        <Backdrop fxMode={fxMode} perfMode={perfMode} />
        <div className={contentClassName}>
          <LiquidScene />
        </div>
      </div>
    )
  }

  return (
    <div className={rootClassName}>
      {shouldShowBackdrop && <Backdrop fxMode={fxMode} perfMode={perfMode} />}
      {ENHANCED_STYLES.has(fxMode) && <StyleFxLayer fxMode={fxMode} perfMode={perfMode} />}

      <div className={contentClassName}>
        <div className={frameClassName}>
          <div className={`${styles.scenes} ${styles.enter}`} key={`${layoutMode}-${fxMode}`}>
            {layoutMode === 'minimal' && <KeynoteScene />}
            {layoutMode === 'dashboard' && <WorkbenchScene />}
            {layoutMode === 'editorial' && <MediaScene />}
          </div>
        </div>
      </div>

      <PageEditor route={pathname} />
      <ReadingEnhancer />
    </div>
  )
}
