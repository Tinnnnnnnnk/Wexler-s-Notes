// src/components/command/CommandPalette.tsx
// Ctrl+K command palette
'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useReadingTrail } from '@/hooks/useReadingTrail'
import { useUiModeContext } from '@/components/providers/UiModeProvider'
import styles from './CommandPalette.module.css'

const KIND_LABELS: Record<string, string> = {
  continue: '继续',
  heading: '章节',
  recent: '最近',
  action: '操作',
}

interface PaletteItem {
  id: string
  kind: 'continue' | 'heading' | 'recent' | 'action'
  title: string
  meta: string
  headingId?: string
  snapshot?: {
    path: string
    title: string
    progress: number
    updatedAt: number
    headingId?: string
  }
  action?: 'open-search' | 'scroll-top' | 'mode-default' | 'mode-glass' | 'mode-liquid'
}

interface CommandPaletteProps {
  onClose?: () => void
  defaultOpen?: boolean
}

function formatPercent(value: number): string {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100)
  return `${pct}%`
}

function formatTime(ts: number): string {
  const date = new Date(ts)
  return new Intl.DateTimeFormat('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

export default function CommandPalette({ onClose, defaultOpen = false }: CommandPaletteProps) {
  const router = useRouter()
  const { trail, restorePosition } = useReadingTrail()
  const { setFxMode } = useUiModeContext()
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [headingItems, setHeadingItems] = useState<Array<{ id: string; title: string; level: string }>>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const continueSnapshot = trail[0] ?? null
  const recentSnapshots = trail.slice(1, 10)

  const items = useMemo<PaletteItem[]>(() => {
    const result: PaletteItem[] = []

    if (continueSnapshot) {
      result.push({
        id: 'continue-reading',
        kind: 'continue',
        title: `继续阅读：${continueSnapshot.title}`,
        meta: `${continueSnapshot.path} · ${formatPercent(continueSnapshot.progress)} · ${formatTime(continueSnapshot.updatedAt)}`,
        snapshot: continueSnapshot,
      })
    }

    headingItems.forEach((heading) => {
      result.push({
        id: `heading-${heading.id}`,
        kind: 'heading',
        title: heading.title,
        meta: `当前页面章节 · ${heading.level.toUpperCase()}`,
        headingId: heading.id,
      })
    })

    recentSnapshots.forEach((snapshot) => {
      result.push({
        id: `recent-${snapshot.path}`,
        kind: 'recent',
        title: snapshot.title,
        meta: `${snapshot.path} · ${formatPercent(snapshot.progress)} · ${formatTime(snapshot.updatedAt)}`,
        snapshot,
      })
    })

    result.push(
      { id: 'action-open-search', kind: 'action', title: '打开站内搜索', meta: '定位到搜索框并输入关键字', action: 'open-search' },
      { id: 'action-scroll-top', kind: 'action', title: '回到页面顶部', meta: '当前页面快速返回顶部', action: 'scroll-top' },
      { id: 'action-mode-default', kind: 'action', title: '切换风格：常态', meta: '关闭特效背景', action: 'mode-default' },
      { id: 'action-mode-glass', kind: 'action', title: '切换风格：晶透', meta: '启用晶透玻璃背景', action: 'mode-glass' },
      { id: 'action-mode-liquid', kind: 'action', title: '切换风格：液态', meta: '启用液态背景与播放器', action: 'mode-liquid' },
    )

    return result
  }, [continueSnapshot, headingItems, recentSnapshots])

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter((item) => `${item.title} ${item.meta}`.toLowerCase().includes(q))
  }, [items, query])

  useEffect(() => {
    setActiveIndex(0)
  }, [filteredItems.length, query])

  useEffect(() => {
    if (!isOpen) return

    const timer = window.setTimeout(() => inputRef.current?.focus(), 16)
    const nodes = document.querySelectorAll('h2[id], h3[id], h4[id]')
    setHeadingItems(
      Array.from(nodes).slice(0, 18).map((node) => ({
        id: node.id,
        title: (node.textContent || node.id).slice(0, 64),
        level: node.tagName.toLowerCase(),
      })),
    )

    return () => window.clearTimeout(timer)
  }, [isOpen])

  const closePalette = useCallback(() => {
    setIsOpen(false)
    onClose?.()
  }, [onClose])

  const executeItem = useCallback(
    (item?: PaletteItem) => {
      if (!item) return
      closePalette()

      if ((item.kind === 'continue' || item.kind === 'recent') && item.snapshot?.path) {
        const snapshot = item.snapshot
        router.push(snapshot.path)
        window.setTimeout(() => restorePosition(snapshot), 320)
        return
      }

      if (item.kind === 'heading' && item.headingId) {
        const node = document.getElementById(item.headingId)
        node?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      if (!item.action) return

      if (item.action === 'scroll-top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      if (item.action === 'open-search') {
        const searchInput =
          document.querySelector<HTMLInputElement>('input[type="search"]') ||
          document.querySelector<HTMLInputElement>('input[placeholder*="搜索"]') ||
          document.querySelector<HTMLInputElement>('input[placeholder*="search"]')
        if (searchInput) {
          searchInput.focus()
        }
        return
      }

      if (item.action === 'mode-default') setFxMode('default')
      if (item.action === 'mode-glass') setFxMode('glass')
      if (item.action === 'mode-liquid') setFxMode('liquid')
    },
    [closePalette, restorePosition, router, setFxMode],
  )

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closePalette()
        return
      }

      if (!filteredItems.length) return

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((prev) => (prev + 1) % filteredItems.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        executeItem(filteredItems[activeIndex])
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex, closePalette, executeItem, filteredItems, isOpen])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={closePalette}>
      <section className={styles.palette} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon} />
            <input
              ref={inputRef}
              className={styles.searchInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入关键词：页面、章节、风格、搜索…"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <p className={styles.hint}>↑ ↓ 选择 · Enter 执行 · Esc 关闭</p>
        </header>

        {filteredItems.length ? (
          <ul className={styles.list}>
            {filteredItems.map((item, index) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`${styles.item} ${index === activeIndex ? styles.itemActive : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => executeItem(item)}
                >
                  <div className={styles.itemMain}>
                    <span className={styles.badge}>{KIND_LABELS[item.kind]}</span>
                    <span className={styles.itemText}>
                      <strong className={styles.itemTitle}>{item.title}</strong>
                      <small className={styles.itemMeta}>{item.meta}</small>
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            {query.trim()
              ? '没有匹配结果，试试输入“章节”“液态”“搜索”等关键词。'
              : '当前没有可执行项。'}
          </p>
        )}
      </section>
    </div>
  )
}
