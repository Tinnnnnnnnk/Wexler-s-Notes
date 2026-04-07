// CommandTrigger - thin wrapper exposing only the trigger button
'use client'

import { useEffect, useState } from 'react'
import CommandPalette from './CommandPalette'
import styles from './CommandPalette.module.css'

export default function CommandTrigger() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

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
      {isOpen && <CommandPalette defaultOpen onClose={() => setIsOpen(false)} />}
    </>
  )
}
