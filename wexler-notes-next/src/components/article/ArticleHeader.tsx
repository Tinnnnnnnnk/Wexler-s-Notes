// src/components/article/ArticleHeader.tsx
// 文章头部组件 - 包含标题、描述、作者信息、发布日期等

'use client'
import { useMemo } from 'react'
import styles from './ArticleHeader.module.css'

interface ArticleHeaderProps {
  title: string
  description?: string
  author?: string
  publishDate?: string
  tags?: string[]
  difficulty?: string
  status?: string
  wordCount: number
}

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateString
  }
}

function formatNumber(num: number): string {
  if (num >= 10000) return (num / 10000).toFixed(1) + 'w'
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k'
  return num.toString()
}

const WORDS_PER_MINUTE = 400

export default function ArticleHeader({
  title,
  description,
  author = 'Wexler',
  publishDate,
  tags = [],
  difficulty,
  status,
  wordCount,
}: ArticleHeaderProps) {
  const readingTime = useMemo(() => {
    return Math.ceil(wordCount / WORDS_PER_MINUTE)
  }, [wordCount])

  return (
    <header className={styles.header}>
      {/* 标题 */}
      <h1 className={styles.title}>{title}</h1>

      {/* 描述 */}
      {description && (
        <p className={styles.description}>{description}</p>
      )}

      {/* 元信息栏 */}
      <div className={styles.metaBar}>
        {/* 作者信息 */}
        <div className={styles.author}>
          <div className={styles.avatar}>
            {author.charAt(0).toUpperCase()}
          </div>
          <span className={styles.authorName}>{author}</span>
        </div>

        <div className={styles.divider} />

        {/* 发布日期 */}
        {publishDate && (
          <div className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/>
              <line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>{formatDate(publishDate)}</span>
          </div>
        )}

        {/* 阅读时间 */}
        <div className={styles.metaItem}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span>{readingTime} 分钟阅读</span>
        </div>

        {/* 字数 */}
        <div className={styles.metaItem}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          <span>{formatNumber(wordCount)} 字</span>
        </div>

        {/* 难度 */}
        {difficulty && (
          <div className={`${styles.metaItem} ${styles[difficulty.toLowerCase()]}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>{difficulty}</span>
          </div>
        )}

        {/* 状态 */}
        {status && (
          <div className={`${styles.statusBadge} ${status.startsWith('已') || status.startsWith('✅') ? styles.statusDone : styles.statusPending}`}>
            {status}
          </div>
        )}
      </div>

      {/* 标签 */}
      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}