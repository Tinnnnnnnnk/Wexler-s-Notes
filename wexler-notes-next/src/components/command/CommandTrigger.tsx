// CommandTrigger — thin wrapper exposing only the trigger button
// The full CommandPalette lives in CommandPalette.tsx; this component
// exists so Navbar can reference a small, isolated trigger without
// pulling in the entire palette state tree.
'use client'
import { useState } from 'react'
import CommandPalette from './CommandPalette'
import styles from './CommandPalette.module.css'

export default function CommandTrigger() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(true)}
        aria-label="打开快捷面板"
      >
        <span className={styles.triggerIcon} />
        <span className={styles.triggerText}>快捷面板</span>
        <span className={styles.hotkey}>Ctrl+K</span>
      </button>
      {isOpen && (
        <CommandPalette onClose={() => setIsOpen(false)} />
      )}
    </>
  )
}
