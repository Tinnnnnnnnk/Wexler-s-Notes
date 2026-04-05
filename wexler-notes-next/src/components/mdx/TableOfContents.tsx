// src/components/mdx/TableOfContents.tsx
'use client'
import { useEffect, useState } from 'react'
import type { TOCItem } from '@/types/mdx'
import styles from './TableOfContents.module.css'

interface TableOfContentsProps {
  items: TOCItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (!items.length) return
    const marker = window.scrollY + 160
    let current = items[0]
    for (const item of items) {
      const node = document.getElementById(item.id)
      if (node && node.offsetTop <= marker) current = item
      else break
    }
    setActiveId(current.id)

    const raf = { id: 0 }
    const handler = () => {
      if (raf.id) return
      raf.id = requestAnimationFrame(() => {
        raf.id = 0
        const m = window.scrollY + 160
        let cur = items[0]
        for (const item of items) {
          const node = document.getElementById(item.id)
          if (node && node.offsetTop <= m) cur = item
          else break
        }
        setActiveId(cur.id)
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => {
      if (raf.id) cancelAnimationFrame(raf.id)
      window.removeEventListener('scroll', handler)
    }
  }, [items])

  if (!items.length) return null

  return (
    <nav className={styles.toc} aria-label="Table of contents">
      <p className={styles.tocTitle}>目录</p>
      <ul className={styles.tocList}>
        {items.map((item) => (
          <li
            key={item.id}
            className={`${styles.tocItem} ${item.level === 3 ? styles.tocItemH3 : ''} ${item.level === 4 ? styles.tocItemH4 : ''}`}
          >
            <a
              href={`#${item.id}`}
              className={`${styles.tocLink} ${item.id === activeId ? styles.tocLinkActive : ''}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
