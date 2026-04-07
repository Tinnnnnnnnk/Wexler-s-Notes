// src/components/layout/Sidebar.tsx
'use client'
import Link from 'next/link'
import styles from './Sidebar.module.css'
import type { SidebarGroup, SidebarItem } from '@/types/sidebar'

interface SidebarProps {
  groups: SidebarGroup[]
  currentPath?: string
}

export default function Sidebar({ groups, currentPath = '' }: SidebarProps) {
  function renderItems(items: SidebarItem[], depth: number = 0) {
    const listClass = depth === 0 ? styles.list : styles.sublist
    return (
      <ul className={listClass}>
        {items.map((item, index) => (
          <li key={`${item.title}-${index}`}>
            {item.link ? (
              <Link
                href={item.link}
                className={`${styles.link} ${depth > 0 ? styles.sublink : ''} ${currentPath === item.link ? styles.active : ''}`}
              >
                {item.title}
              </Link>
            ) : (
              <span className={`${styles.link} ${styles.muted}`}>{item.title}</span>
            )}
            {item.items?.length ? renderItems(item.items, depth + 1) : null}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={styles.sidebar}>
      {groups.map((group, gi) => (
        <div key={gi} className={styles.group}>
          <p className={styles.groupTitle}>{group.text}</p>
          {renderItems(group.items)}
        </div>
      ))}
    </div>
  )
}
