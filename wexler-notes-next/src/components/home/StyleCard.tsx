// src/components/home/StyleCard.tsx
'use client'

import type { StylePreset } from '@/lib/theme/stylePresets'
import styles from './StyleCard.module.css'

interface StyleCardProps {
  preset: StylePreset
  isActive: boolean
  onApply: (id: StylePreset['id']) => void
}

export default function StyleCard({ preset, isActive, onApply }: StyleCardProps) {
  return (
    <article
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      aria-label={`${preset.labelZh} ${preset.labelEn} 风格${isActive ? '（当前使用）' : ''}`}
      data-style-id={preset.id}
    >
      {/* 视觉预览区 */}
      <div className={`${styles.preview} ${styles[`preview-${preset.previewType}`]}`}>
        <PreviewCanvas preset={preset} />
        {isActive && (
          <div className={styles.activeBadge} aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            当前风格
          </div>
        )}
      </div>

      {/* 信息区 */}
      <div className={styles.info}>
        <div className={styles.name}>
          <span className={styles.nameZh}>{preset.labelZh}</span>
          <span className={styles.nameEn}>{preset.labelEn}</span>
        </div>
        <p className={styles.tagline}>{preset.tagline}</p>

        <div className={styles.tags}>
          {preset.hasVideo && <span className={styles.tag}>视频</span>}
          {preset.hasBgm && <span className={styles.tag}>BGM</span>}
          <span className={`${styles.tag} ${styles[`tag-${preset.category}`]}`}>
            {categoryLabel(preset.category)}
          </span>
        </div>
      </div>

      {/* 操作区 */}
      <button
        type="button"
        className={`${styles.applyBtn} ${isActive ? styles.applyBtnActive : ''}`}
        onClick={() => onApply(preset.id)}
        aria-pressed={isActive}
        disabled={isActive}
      >
        {isActive ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            已应用
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            应用此风格
          </>
        )}
      </button>
    </article>
  )
}

function categoryLabel(cat: string): string {
  const map: Record<string, string> = {
    classic: '经典',
    ambient: '氛围',
    creative: '创意',
    entertainment: '娱乐',
    tech: '科技',
  }
  return map[cat] || cat
}

/** 根据 previewType 渲染不同的视觉预览 Canvas */
function PreviewCanvas({ preset }: { preset: StylePreset }) {
  switch (preset.previewType) {
    case 'neon':
      return <NeonCanvas preset={preset} />
    case 'rgb-flow':
      return <RgbFlowCanvas preset={preset} />
    case 'anime':
      return <AnimeCanvas preset={preset} />
    case 'stream':
      return <StreamCanvas preset={preset} />
    default:
      return <GradientCanvas preset={preset} />
  }
}

function GradientCanvas({ preset }: { preset: StylePreset }) {
  return (
    <div
      className={styles.canvasGrad}
      style={{
        background: `linear-gradient(135deg, ${preset.accentColor} 0%, ${preset.secondaryColor} 100%)`,
      }}
    />
  )
}

function NeonCanvas({ preset }: { preset: StylePreset }) {
  return (
    <div className={styles.canvasNeon}>
      <div className={styles.neonLine1} style={{ background: preset.accentColor }} />
      <div className={styles.neonLine2} style={{ background: preset.secondaryColor }} />
      <div className={styles.neonGlow1} style={{ boxShadow: `0 0 30px ${preset.accentColor}` }} />
      <div className={styles.neonGlow2} style={{ boxShadow: `0 0 30px ${preset.secondaryColor}` }} />
    </div>
  )
}

function RgbFlowCanvas({ preset }: { preset: StylePreset }) {
  return (
    <div className={styles.canvasRgb}>
      <div className={styles.rgbStrip1} style={{ background: preset.accentColor }} />
      <div className={styles.rgbStrip2} style={{ background: preset.secondaryColor }} />
      <div className={styles.rgbStrip3} style={{ background: '#06b6d4' }} />
    </div>
  )
}

function AnimeCanvas({ preset }: { preset: StylePreset }) {
  return (
    <div className={styles.canvasAnime}>
      <div className={styles.animeCircle1} style={{ background: preset.accentColor }} />
      <div className={styles.animeCircle2} style={{ background: preset.secondaryColor }} />
      <div className={styles.animeStar1} />
      <div className={styles.animeStar2} />
    </div>
  )
}

function StreamCanvas({ preset }: { preset: StylePreset }) {
  return (
    <div className={styles.canvasStream}>
      {[0.3, 0.55, 0.8, 0.95, 1.1, 1.25].map((w, i) => (
        <div
          key={i}
          className={styles.streamCard}
          style={{
            width: `${w * 40}px`,
            opacity: 0.6 + i * 0.06,
            background: i % 2 === 0 ? preset.accentColor : preset.secondaryColor,
          }}
        />
      ))}
    </div>
  )
}
