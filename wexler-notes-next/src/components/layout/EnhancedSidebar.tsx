'use client'

import { useState, useMemo, useCallback, useRef, useEffect, type KeyboardEvent, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import styles from './EnhancedSidebar.module.css'
import type { SidebarGroup, SidebarItem } from '@/types/sidebar'

interface EnhancedSidebarProps {
  groups: SidebarGroup[]
  currentPath?: string
}

interface FlatItem {
  title: string
  link: string
  depth: number
  groupIndex: number
}

const SIDEBAR_SCROLL_STORAGE_KEY = 'wexler.sidebar.nav.scrollTop'

function flattenItems(items: SidebarItem[], depth = 0, groupIndex = 0): FlatItem[] {
  const result: FlatItem[] = []
  for (const item of items) {
    if (item.link) {
      result.push({ title: item.title, link: item.link, depth, groupIndex })
    }
    if (item.items?.length) {
      result.push(...flattenItems(item.items, depth + 1, groupIndex))
    }
  }
  return result
}

export default function EnhancedSidebar({ groups, currentPath = '' }: EnhancedSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [collapsedGroups, setCollapsedGroups] = useState<Set<number>>(new Set())
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const navRef = useRef<HTMLElement | null>(null)
  const persistRafRef = useRef<number | null>(null)

  const flatItems = useMemo(() => {
    const items: FlatItem[] = []
    groups.forEach((group, groupIndex) => {
      items.push(...flattenItems(group.items, 0, groupIndex))
    })
    return items
  }, [groups])

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return null
    const query = searchQuery.toLowerCase()
    return flatItems.filter((item) => item.title.toLowerCase().includes(query))
  }, [flatItems, searchQuery])

  const persistNavScroll = useCallback(() => {
    if (typeof window === 'undefined' || !navRef.current) return
    try {
      window.sessionStorage.setItem(SIDEBAR_SCROLL_STORAGE_KEY, String(navRef.current.scrollTop || 0))
    } catch {
      // ignore storage errors
    }
  }, [])

  const handleNavScroll = useCallback(() => {
    if (typeof window === 'undefined') return
    if (persistRafRef.current !== null) return
    persistRafRef.current = window.requestAnimationFrame(() => {
      persistRafRef.current = null
      persistNavScroll()
    })
  }, [persistNavScroll])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (searchQuery) return

    const restore = () => {
      if (!navRef.current) return
      try {
        const raw = window.sessionStorage.getItem(SIDEBAR_SCROLL_STORAGE_KEY)
        const scrollTop = Number(raw)
        if (Number.isFinite(scrollTop) && scrollTop > 0) {
          navRef.current.scrollTop = scrollTop
        }
      } catch {
        // ignore storage errors
      }
    }

    const raf1 = window.requestAnimationFrame(() => {
      restore()
      window.requestAnimationFrame(restore)
    })

    return () => {
      window.cancelAnimationFrame(raf1)
    }
  }, [pathname, currentPath, searchQuery])

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && persistRafRef.current !== null) {
        window.cancelAnimationFrame(persistRafRef.current)
      }
      persistNavScroll()
    }
  }, [persistNavScroll])

  const toggleGroup = useCallback((groupIndex: number) => {
    setCollapsedGroups((prev) => {
      const next = new Set(prev)
      if (next.has(groupIndex)) {
        next.delete(groupIndex)
      } else {
        next.add(groupIndex)
      }
      return next
    })
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const items = filteredItems || flatItems
      if (!items.length) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setActiveIndex((prev) => Math.min(prev + 1, items.length - 1))
          break
        case 'ArrowUp':
          e.preventDefault()
          setActiveIndex((prev) => Math.max(prev - 1, 0))
          break
        case 'Enter':
          e.preventDefault()
          if (activeIndex >= 0 && items[activeIndex]) {
            persistNavScroll()
            router.push(items[activeIndex].link)
          }
          break
        case 'Escape':
          setSearchQuery('')
          setIsSearchFocused(false)
          setActiveIndex(-1)
          break
      }
    },
    [filteredItems, flatItems, activeIndex, persistNavScroll, router],
  )

  function renderItems(items: SidebarItem[], depth = 0): ReactNode {
    return (
      <ul className={depth === 0 ? styles.list : styles.sublist}>
        {items.map((item, index) => {
          const isActive = currentPath === item.link
          const hasChildren = Boolean(item.items?.length)

          return (
            <li key={`${item.title}-${index}`} className={styles.item}>
              {item.link ? (
                <Link
                  href={item.link}
                  className={`${styles.link} ${depth > 0 ? styles.sublink : ''} ${isActive ? styles.active : ''}`}
                  onClick={persistNavScroll}
                >
                  <span className={styles.linkText}>{item.title}</span>
                  {hasChildren && (
                    <svg
                      className={styles.hasChildrenIcon}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  )}
                </Link>
              ) : (
                <span className={`${styles.link} ${styles.muted} ${depth > 0 ? styles.sublink : ''}`}>{item.title}</span>
              )}
              {hasChildren && renderItems(item.items!, depth + 1)}
            </li>
          )
        })}
      </ul>
    )
  }

  function renderGroup(group: SidebarGroup, groupIndex: number) {
    const isCollapsed = collapsedGroups.has(groupIndex)
    return (
      <div key={groupIndex} className={styles.group}>
        <button
          className={`${styles.groupTitle} ${isCollapsed ? styles.collapsed : ''}`}
          onClick={() => toggleGroup(groupIndex)}
          aria-expanded={!isCollapsed}
        >
          <span className={styles.groupTitleText}>{group.text}</span>
          <svg
            className={styles.chevron}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div className={`${styles.groupContent} ${isCollapsed ? styles.hidden : ''}`}>{renderItems(group.items, 0)}</div>
      </div>
    )
  }

  return (
    <div className={styles.sidebar}>
      <div className={`${styles.searchWrapper} ${isSearchFocused ? styles.searchFocused : ''}`}>
        <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="搜索文档..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          onKeyDown={handleKeyDown}
        />
        {searchQuery && (
          <button className={styles.clearBtn} onClick={() => setSearchQuery('')} aria-label="清除搜索">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {filteredItems && (
        <div className={styles.searchResults}>
          <p className={styles.searchResultsCount}>找到 {filteredItems.length} 个结果</p>
          <ul className={styles.searchList}>
            {filteredItems.map((item, index) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className={`${styles.searchItem} ${index === activeIndex ? styles.searchItemActive : ''}`}
                  onClick={persistNavScroll}
                >
                  <span className={styles.searchItemDepth}>{Array(item.depth + 1).fill('·').join('')}</span>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!searchQuery && (
        <nav ref={navRef} className={styles.nav} onScroll={handleNavScroll}>
          {groups.map((group, index) => renderGroup(group, index))}
        </nav>
      )}

      <div className={styles.shortcuts}>
        <span className={styles.shortcut}>
          <kbd>↑</kbd><kbd>↓</kbd> 导航
        </span>
        <span className={styles.shortcut}>
          <kbd>Enter</kbd> 打开
        </span>
        <span className={styles.shortcut}>
          <kbd>Esc</kbd> 清除
        </span>
      </div>
    </div>
  )
}
