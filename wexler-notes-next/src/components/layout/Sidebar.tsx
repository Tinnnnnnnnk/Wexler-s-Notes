// src/components/layout/Sidebar.tsx
'use client'
import Link from 'next/link'
import styles from './Sidebar.module.css'
import type { SidebarGroup } from '@/types/sidebar'

interface SidebarProps {
  groups: SidebarGroup[]
  currentPath?: string
}

export default function Sidebar({ groups, currentPath = '' }: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      {groups.map((group, gi) => (
        <div key={gi} className={styles.group}>
          <p className={styles.groupTitle}>{group.text}</p>
          <ul className={styles.list}>
            {group.items.map((item, ii) => (
              <li key={ii}>
                {item.link ? (
                  <Link
                    href={item.link}
                    className={`${styles.link} ${currentPath === item.link ? styles.active : ''}`}
                  >
                    {item.title}
                  </Link>
                ) : null}
                {item.items && (
                  <ul className={styles.sublist}>
                    {item.items.map((child, ci) => (
                      <li key={ci}>
                        {child.link && (
                          <Link
                            href={child.link}
                            className={`${styles.link} ${styles.sublink} ${currentPath === child.link ? styles.active : ''}`}
                          >
                            {child.title}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
