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
  'cyber-hacker',
  'cyber-corp',
  'cyber-game',
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
]

function particleStyle(index: number, spread = 8): CSSProperties {
  return { '--i': index, '--spread': spread } as CSSProperties
}

export default function StyleFxLayer({ fxMode, perfMode }: StyleFxLayerProps) {
  if (!ENHANCED_MODES.includes(fxMode)) return null

  const safe = perfMode === 'safe'
  const petalCount = safe ? 8 : 16
  const bubbleCount = safe ? 8 : 15
  const emberCount = safe ? 8 : 15
  const stripeCount = safe ? 3 : 5

  return (
    <div className={`${styles.layer} ${safe ? styles.safe : ''}`} data-mode={fxMode} aria-hidden="true">
      {(fxMode === 'aurora' || fxMode === 'ocean') && (
        <>
          {fxMode === 'aurora' && <span className={styles.auroraStars} />}
          {fxMode === 'ocean' && <span className={styles.oceanGodRays} />}
          <span className={`${styles.ribbon} ${styles.ribbonA}`} />
          <span className={`${styles.ribbon} ${styles.ribbonB}`} />
          {fxMode === 'aurora' && !safe && <span className={`${styles.ribbon} ${styles.ribbonC}`} />}
          {fxMode === 'aurora' && !safe && <span className={`${styles.ribbon} ${styles.ribbonD}`} />}
        </>
      )}

      {fxMode === 'cyberpunk' && (
        <>
          <span className={styles.cyberGrid} />
          <span className={styles.scanline} />
          <span className={`${styles.beam} ${styles.beamA}`} />
          {!safe && <span className={`${styles.beam} ${styles.beamB}`} />}
          {!safe && <span className={`${styles.beam} ${styles.beamC}`} />}
          <span className={styles.sweep} />
          <span className={styles.glitchOverlay} />
          <span className={styles.vignetteOverlay} />
          <div className={styles.particleField}>
            {Array.from({ length: safe ? 5 : 25 }).map((_, idx) => (
              <span key={`data-${idx}`} className={styles.dataSpark} style={particleStyle(idx, safe ? 5 : 25)} />
            ))}
            {!safe && Array.from({ length: 8 }).map((_, idx) => (
              <span key={`digitalRain-${idx}`} className={styles.digitalRain} style={particleStyle(idx, 8)} />
            ))}
          </div>
        </>
      )}

      {fxMode === 'cyber-hacker' && (
        <>
          <span className={styles.hackerGrid} />
          <span className={styles.hackerScanline} />
          <span className={styles.vignetteOverlay} />
          <div className={styles.particleField}>
            {!safe && Array.from({ length: 15 }).map((_, idx) => (
              <span key={`digitalRainHacker-${idx}`} className={styles.hackerDigitalRain} style={particleStyle(idx, 15)} />
            ))}
            {Array.from({ length: safe ? 5 : 15 }).map((_, idx) => (
              <span key={`hackerData-${idx}`} className={styles.hackerDataSpark} style={particleStyle(idx, safe ? 5 : 15)} />
            ))}
          </div>
        </>
      )}

      {fxMode === 'cyber-corp' && (
        <>
          <span className={styles.corpBgLayer} />
          <span className={styles.corpGrid} />
          <span className={styles.corpDataStream} />
          <span className={styles.corpDataStream} style={{ left: '75%', animationDelay: '-4s' }} />
          <span className={styles.corpPulse} />
          <span className={styles.corpScanline} />
          <div className={styles.particleField}>
            {Array.from({ length: safe ? 8 : 20 }).map((_, idx) => (
              <span key={`corpNode-${idx}`} className={styles.corpDataNode} style={particleStyle(idx, safe ? 8 : 20)} />
            ))}
            {!safe && Array.from({ length: 15 }).map((_, idx) => (
              <span key={`corpLine-${idx}`} className={styles.corpNetworkLine} style={particleStyle(idx, 15)} />
            ))}
          </div>
        </>
      )}

      {fxMode === 'cyber-game' && (
        <>
          <span className={styles.gameGrid} />
          <span className={styles.gameGlitch} />
          <span className={styles.gameVignette} />
          <div className={styles.particleField}>
            {Array.from({ length: safe ? 6 : 15 }).map((_, idx) => (
              <span key={`gameSpark-${idx}`} className={styles.gameSpark} style={particleStyle(idx, safe ? 6 : 15)} />
            ))}
            {!safe && Array.from({ length: 2 }).map((_, idx) => (
              <span key={`gameSlash-${idx}`} className={styles.gameSlash} style={particleStyle(idx, 2)} />
            ))}
          </div>
        </>
      )}

      {fxMode === 'future-tech' && (
        <>
          <span className={styles.futureTechBg} />
          <span className={styles.futureTechGrid} />
          <div className={styles.futureTechRings}>
            <div className={styles.futureTechRing} style={{ animationDuration: '20s', transform: 'rotateX(70deg) rotateY(10deg)' }} />
            <div className={styles.futureTechRing} style={{ animationDuration: '25s', animationDirection: 'reverse', transform: 'rotateX(70deg) rotateY(-10deg) scale(1.5)' }} />
          </div>
          <span className={styles.futureTechScanline} />
          <div className={styles.particleField}>
            {Array.from({ length: safe ? 10 : 25 }).map((_, idx) => (
              <span key={`futureTechHex-${idx}`} className={styles.futureTechHexagon} style={particleStyle(idx, safe ? 10 : 25)} />
            ))}
            {!safe && Array.from({ length: 6 }).map((_, idx) => (
              <span key={`futureTechBeam-${idx}`} className={styles.futureTechBeam} style={particleStyle(idx, 6)} />
            ))}
          </div>
        </>
      )}

      {fxMode === 'rgb' && (
        <>
          <span className={styles.rgbBackground} />
          <span className={styles.rgbSpectrumWave} />
          {Array.from({ length: stripeCount * 3 }).map((_, idx) => (
            <span key={`rgb-${idx}`} className={styles.rgbStrip} style={particleStyle(idx, stripeCount * 3)} />
          ))}
          <span className={styles.rgbHalo} />
          <span className={styles.rgbBorderGlow} />
          <div className={styles.particleField}>
            {Array.from({ length: safe ? 6 : 18 }).map((_, idx) => (
              <span key={`laser-${idx}`} className={styles.rgbLaser} style={particleStyle(idx, safe ? 6 : 18)} />
            ))}
            {!safe && Array.from({ length: 10 }).map((_, idx) => (
              <span key={`rgbPulse-${idx}`} className={styles.rgbPulseOrb} style={particleStyle(idx, 10)} />
            ))}
          </div>
        </>
      )}

      {fxMode === 'haru' && (
        <>
          <span className={styles.haruSky} />
          <span className={styles.haruSunbeam} />
          <span className={styles.haruCloudsA} />
          <span className={styles.haruCloudsB} />
          <div className={styles.particleField}>
            {Array.from({ length: petalCount }).map((_, idx) => (
              <span key={`haruPetal-${idx}`} className={styles.petal} style={particleStyle(idx, petalCount)} />
            ))}
            {Array.from({ length: safe ? 3 : 6 }).map((_, idx) => (
              <span key={`haruLight-${idx}`} className={styles.haruLight} style={particleStyle(idx, safe ? 3 : 6)} />
            ))}
          </div>
        </>
      )}

      {fxMode === 'mugen' && (
        <>
          <span className={styles.mugenOrbA} />
          <span className={styles.mugenOrbB} />
          <span className={styles.mugenOrbC} />
          <span className={styles.mugenGlassRay} />
          <span className={styles.mugenRipple} />
          <div className={styles.particleField}>
            {Array.from({ length: safe ? 10 : 20 }).map((_, idx) => (
              <span key={`mugenStar-${idx}`} className={styles.mugenStar} style={particleStyle(idx, safe ? 10 : 20)} />
            ))}
            {Array.from({ length: safe ? 8 : 16 }).map((_, idx) => (
              <span key={`mugenDust-${idx}`} className={styles.mugenDust} style={particleStyle(idx, safe ? 8 : 16)} />
            ))}
          </div>
        </>
      )}

      {(fxMode === 'anime' || fxMode === 'sakura') && (
        <>
          {fxMode === 'anime' && <span className={styles.animeSunburst} />}
          {fxMode === 'sakura' && <span className={styles.sakuraMoon} />}
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
          <span className={styles.streamGrid} />
          <span className={styles.streamGlow} />
          <span className={styles.streamSweep} />
          <span className={styles.streamSweep2} />
          <span className={styles.streamTrack} />
          <span className={styles.streamTrack2} />
          <span className={styles.streamSpot} />
          <div className={styles.particleField}>
            {Array.from({ length: safe ? 5 : 10 }).map((_, idx) => (
              <span key={`streamData-${idx}`} className={styles.streamFloatingData} style={particleStyle(idx, safe ? 5 : 10)} />
            ))}
          </div>
        </>
      )}

      {fxMode === 'graphite' && (
        <>
          <span className={styles.graphiteGrid} />
          <span className={styles.graphiteSheen} />
          <span className={styles.graphiteReticle} />
          <span className={styles.graphiteBlueprintLines} />
          <span className={styles.graphiteScanline} />
        </>
      )}

      {fxMode === 'ocean' && (
        <>
          <span className={styles.oceanWaveA} />
          <span className={styles.oceanWaveB} />
          <div className={styles.particleField}>
            {Array.from({ length: bubbleCount }).map((_, idx) => (
              <span key={`bubble-${idx}`} className={styles.bubble} style={particleStyle(idx, bubbleCount)} />
            ))}
          </div>
        </>
      )}

      {fxMode === 'ember' && (
        <>
          <span className={styles.heatHaze} />
          <span className={styles.emberGlow} />
          <div className={styles.particleField}>
            {Array.from({ length: emberCount }).map((_, idx) => (
              <span key={`ember-${idx}`} className={styles.ember} style={particleStyle(idx, emberCount)} />
            ))}
            {Array.from({ length: safe ? 3 : 6 }).map((_, idx) => (
              <span key={`emberSpark-${idx}`} className={styles.emberSpark} style={particleStyle(idx, safe ? 3 : 6)} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
