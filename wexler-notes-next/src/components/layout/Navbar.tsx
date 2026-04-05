// src/components/layout/Navbar.tsx
'use client'
import Link from 'next/link'
import styles from './Navbar.module.css'
import FxToggle from '@/components/home/FxToggle'
import LayoutToggle from '@/components/home/LayoutToggle'
import EditorToggle from '@/components/editor/EditorToggle'
import CommandTrigger from '@/components/command/CommandTrigger'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.title}>
          Wexler&apos;s Notes
        </Link>

        <div className={styles.controls}>
          <FxToggle />
          <LayoutToggle />
          <EditorToggle />
          <CommandTrigger />
        </div>
      </div>
    </nav>
  )
}
