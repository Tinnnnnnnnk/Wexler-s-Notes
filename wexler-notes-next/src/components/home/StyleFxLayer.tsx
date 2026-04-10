'use client'

import type { CSSProperties } from 'react'
import type { FxMode } from '@/types/uiMode'
import styles from './StyleFxLayer.module.css'

interface StyleFxLayerProps {
  fxMode: FxMode
  perfMode: 'normal' | 'safe'
}

const ENHANCED_MODES: FxMode[] = [
  'cyberpunk',
  'rgb',
  'anime',
  'stream',
  'aurora',
  'graphite',
  'sakura',
  'ocean',
  'ember',
]

function particleStyle(index: number, spread = 8): CSSProperties {
  return { '--i': index, '--spread': spread } as CSSProperties
}

export default function StyleFxLayer({ fxMode, perfMode }: StyleFxLayerProps) {
  if (!ENHANCED_MODES.includes(fxMode)) return null

  const safe = perfMode === 'safe'
  const petalCount = safe ? 4 : 8
  const bubbleCount = safe ? 4 : 8
  const emberCount = safe ? 5 : 10
  const stripeCount = safe ? 3 : 5

  return (
    <div className={`${styles.layer} ${safe ? styles.safe : ''}`} data-mode={fxMode} aria-hidden="true">
      {(fxMode === 'aurora' || fxMode === 'ocean') && (
        <>
          <span className={`${styles.ribbon} ${styles.ribbonA}`} />
          <span className={`${styles.ribbon} ${styles.ribbonB}`} />
          {fxMode === 'aurora' && !safe && <span className={`${styles.ribbon} ${styles.ribbonC}`} />}
        </>
      )}

      {fxMode === 'cyberpunk' && (
        <>
          <span className={styles.scanline} />
          <span className={`${styles.beam} ${styles.beamA}`} />
          {!safe && <span className={`${styles.beam} ${styles.beamB}`} />}
          <span className={styles.sweep} />
        </>
      )}

      {fxMode === 'rgb' && (
        <>
          {Array.from({ length: stripeCount }).map((_, idx) => (
            <span key={`rgb-${idx}`} className={styles.rgbStrip} style={particleStyle(idx, stripeCount)} />
          ))}
          <span className={styles.rgbHalo} />
        </>
      )}

      {(fxMode === 'anime' || fxMode === 'sakura') && (
        <>
          <span className={styles.lineOverlay} />
          <div className={styles.particleField}>
            {Array.from({ length: petalCount }).map((_, idx) => (
              <span key={`petal-${idx}`} className={styles.petal} style={particleStyle(idx, petalCount)} />
            ))}
          </div>
        </>
      )}

      {fxMode === 'stream' && (
        <>
          <span className={styles.streamGlow} />
          <span className={styles.streamSweep} />
          <span className={styles.streamSweep2} />
        </>
      )}

      {fxMode === 'graphite' && (
        <>
          <span className={styles.graphiteGrid} />
          <span className={styles.graphiteSheen} />
        </>
      )}

      {fxMode === 'ocean' && (
        <div className={styles.particleField}>
          {Array.from({ length: bubbleCount }).map((_, idx) => (
            <span key={`bubble-${idx}`} className={styles.bubble} style={particleStyle(idx, bubbleCount)} />
          ))}
        </div>
      )}

      {fxMode === 'ember' && (
        <div className={styles.particleField}>
          {Array.from({ length: emberCount }).map((_, idx) => (
            <span key={`ember-${idx}`} className={styles.ember} style={particleStyle(idx, emberCount)} />
          ))}
        </div>
      )}
    </div>
  )
}
