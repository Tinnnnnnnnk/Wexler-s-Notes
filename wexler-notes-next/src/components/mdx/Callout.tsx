// src/components/mdx/Callout.tsx
import styles from './MDXComponents.module.css'

const CALLOUT_ICONS: Record<string, string> = {
  note: 'ℹ',
  tip: '💡',
  warning: '⚠',
  danger: '⛔',
}

const CALLOUT_LABELS: Record<string, string> = {
  note: 'Note',
  tip: 'Tip',
  warning: 'Warning',
  danger: 'Danger',
}

const CALLOUT_CSS: Record<string, string> = {
  note: styles.calloutNote,
  tip: styles.calloutTip,
  warning: styles.calloutWarning,
  danger: styles.calloutDanger,
}

interface CalloutProps {
  type?: 'note' | 'tip' | 'warning' | 'danger'
  title?: string
  children: React.ReactNode
}

export function Callout({ type = 'note', title, children }: CalloutProps) {
  const label = title ?? CALLOUT_LABELS[type] ?? 'Note'
  const icon = CALLOUT_ICONS[type] ?? 'ℹ'

  return (
    <div className={`${styles.callout} ${CALLOUT_CSS[type] ?? styles.calloutNote}`}>
      <p className={styles.calloutTitle}>
        <span>{icon}</span>
        <span>{label}</span>
      </p>
      <div className={styles.calloutBody}>{children}</div>
    </div>
  )
}
