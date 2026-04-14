// src/components/home/StyleLabPage.tsx
'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import { useUiModeContext } from '@/components/providers/UiModeProvider'
import { useTheme } from '@/components/providers/ThemeProvider'
import { ALL_STYLE_IDS, STYLE_PRESETS } from '@/lib/theme/stylePresets'
import type { FxMode } from '@/types/uiMode'
import StyleCard from './StyleCard'
import styles from './StyleLabPage.module.css'

export default function StyleLabPage() {
  const { fxMode, setFxMode } = useUiModeContext()
  const { isDark, toggle: toggleTheme } = useTheme()

  const handleApply = useCallback(
    (id: FxMode) => {
      setFxMode(id)
    },
    [setFxMode],
  )

  const activeCount = 1

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <Link href="/" className={styles.backBtn} aria-label="返回首页">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>
            <div className={styles.headerTitle}>
              <h1 className={styles.title}>风格展厅</h1>
              <span className={styles.subtitle}>Style Lab</span>
            </div>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.hint}>选择一种风格，即刻生效</p>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={isDark ? '切换到亮色模式' : '切换到暗色模式'}
            >
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <div className={styles.statsBar} role="status" aria-live="polite">
        <div className={styles.statItem}>
          <span className={styles.statNum}>{ALL_STYLE_IDS.length}</span>
          <span className={styles.statLabel}>种风格</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statNum}>{activeCount}</span>
          <span className={styles.statLabel}>当前应用</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={`${styles.statIndicator} ${styles[`indicator-${fxMode}`]}`} />
          <span className={styles.statLabel}>
            {STYLE_PRESETS[fxMode]?.labelZh ?? fxMode}
          </span>
        </div>
      </div>

      {/* Card grid */}
      <main className={styles.main}>
        <section aria-label="风格卡片列表">
          <div className={styles.grid}>
            {ALL_STYLE_IDS.map((id) => (
              <StyleCard
                key={id}
                preset={STYLE_PRESETS[id]}
                isActive={id === fxMode}
                onApply={handleApply}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer tip */}
      <footer className={styles.footer}>
        <p className={styles.footerTip}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          风格选择已自动保存，刷新页面后保持不变
        </p>
      </footer>
    </div>
  )
}
