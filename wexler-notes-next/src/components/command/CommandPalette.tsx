// src/components/command/CommandPalette.tsx
// Ctrl+K command palette — migrated from CommandPalette.vue
'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useReadingTrail } from '@/hooks/useReadingTrail'
import styles from './CommandPalette.module.css'

const KIND_LABELS: Record<string, string> = {
  continue: '继续',
  heading: '章节',
  recent: '最近',
  action: '操作',
}

interface PaletteItem {
  id: string
  kind: string
  title: string
  meta: string
  keywords?: string
  headingId?: string
  snapshot?: { path: string; title: string; progress: number; updatedAt: number; headingId?: string }
  action?: string
}

interface CommandPaletteProps {
  onClose?: () => void
  /** 为 true 时首屏即打开（仅在被父组件「按需挂载」时使用，例如 CommandTrigger） */
  defaultOpen?: boolean
}

function formatPercent(value: number): string {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100)
  return `${pct}%`
}

function formatTime(ts: number): string {
  const date = new Date(ts)
  return new Intl.DateTimeFormat('zh-CN', {
    month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
  }).format(date)
}

export default function CommandPalette({ onClose, defaultOpen = false }: CommandPaletteProps) {
  const router = useRouter()
  const { trail, upsertSnapshot, restorePosition } = useReadingTrail()
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [items, setItems] = useState<PaletteItem[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const [headingItems, setHeadingItems] = useState<Array<{ id: string; title: string; level: string }>>([])

  const continueSnapshot = trail[0] ?? null
  const recentSnapshots = trail.slice(1, 10)

  const buildItems = useCallback((): PaletteItem[] => {
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

    headingItems.forEach((h) => {
      result.push({
        id: `heading-${h.id}`,
        kind: 'heading',
        title: h.title,
        meta: `当前页章节 · ${h.level.toUpperCase()}`,
        headingId: h.id,
      })
    })

    recentSnapshots.forEach((s) => {
      result.push({
        id: `recent-${s.path}`,
        kind: 'recent',
        title: s.title,
        meta: `${s.path} · ${formatPercent(s.progress)} · ${formatTime(s.updatedAt)}`,
        snapshot: s,
      })
    })

    result.push(
      { id: 'action-open-search', kind: 'action', title: '打开站内搜索', meta: '调用搜索面板', action: 'open-search' },
      { id: 'action-scroll-top', kind: 'action', title: '返回页面顶部', meta: '当前页快速回到开头', action: 'scroll-top' },
      { id: 'action-mode-default', kind: 'action', title: '风格切换：常态', meta: '恢复基础样式', action: 'mode-default' },
      { id: 'action-mode-glass', kind: 'action', title: '风格切换：晶透', meta: '玻璃质感样式', action: 'mode-glass' },
      { id: 'action-mode-liquid', kind: 'action', title: '风格切换：液态', meta: '液态视觉样式', action: 'mode-liquid' },
    )

    return result
  }, [continueSnapshot, recentSnapshots, headingItems])

  useEffect(() => {
    setItems(buildItems())
  }, [buildItems])

  const filteredItems = query.trim()
    ? items.filter((item) =>
        `${item.title} ${item.meta} ${item.keywords || ''}`.toLowerCase().includes(query.toLowerCase())
      )
    : items

  useEffect(() => {
    setActiveIndex(0)
  }, [filteredItems.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ctrl/Cmd+K 由 CommandTrigger 统一处理，避免与父级 open 状态打架
      if (!isOpen) return
      if (e.key === 'Escape') { e.preventDefault(); setIsOpen(false); onClose?.() }
      if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex((i) => (i + 1) % Math.max(1, filteredItems.length)) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex((i) => (i - 1 + filteredItems.length) % Math.max(1, filteredItems.length)) }
      if (e.key === 'Enter') { e.preventDefault(); executeItem(filteredItems[activeIndex]) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, activeIndex, onClose])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 10)
      const nodes = document.querySelectorAll('h2[id], h3[id], h4[id]')
      setHeadingItems(
        Array.from(nodes).slice(0, 18).map((n) => ({
          id: n.id,
          title: (n.textContent || n.id).slice(0, 64),
          level: n.tagName.toLowerCase(),
        }))
      )
    }
  }, [isOpen])

  function executeItem(item?: PaletteItem) {
    if (!item) return
    setIsOpen(false)
    onClose?.()
    if (item.kind === 'continue' || item.kind === 'recent') {
      if (item.snapshot?.path) {
        router.push(item.snapshot.path)
        setTimeout(() => {
          if (item.snapshot?.headingId) {
            restorePosition(item.snapshot as Parameters<typeof restorePosition>[0])
          }
        }, 300)
      }
    } else if (item.kind === 'heading' && item.headingId) {
      const node = document.getElementById(item.headingId)
      node?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (item.action === 'scroll-top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (item.action?.startsWith('mode-')) {
      const mode = item.action.replace('mode-', '')
      document.documentElement.classList.remove('home-default-mode', 'home-glass-mode', 'home-liquid-mode')
      document.documentElement.classList.add(`home-${mode}-mode`)
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={() => { setIsOpen(false); onClose?.() }}>
      <section className={styles.palette} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <div className={styles.searchWrap}>
            <span className={styles.searchIcon} />
            <input
              ref={inputRef}
              className={styles.searchInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="输入关键词：页面、章节、风格、搜索..."
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <p className={styles.hint}>↑/↓ 选择 · Enter 执行 · Esc 关闭</p>
        </header>

        {filteredItems.length > 0 ? (
          <ul className={styles.list}>
            {filteredItems.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`${styles.item} ${i === activeIndex ? styles.itemActive : ''}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => executeItem(item)}
                >
                  <span className={styles.badge}>{KIND_LABELS[item.kind] || '操作'}</span>
                  <span className={styles.itemText}>
                    <strong className={styles.itemTitle}>{item.title}</strong>
                    <small className={styles.itemMeta}>{item.meta}</small>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            {query.trim() ? '没有匹配结果，试试输入"章节""液态""搜索"等关键词。' : '当前没有可执行项。'}
          </p>
        )}
      </section>
    </div>
  )
}