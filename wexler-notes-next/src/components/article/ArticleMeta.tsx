// src/components/article/ArticleMeta.tsx
// 文章元信息组件 - 显示字数、阅读时间、发布日期、标签等

'use client'
import { useMemo } from 'react'
import styles from './ArticleMeta.module.css'

interface ArticleMetaProps {
  wordCount: number
  publishDate?: string
  tags?: string[]
  difficulty?: string
  status?: string
  author?: string
}

const WORDS_PER_MINUTE = 400 // 默认识读速度

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) return '今天'
    if (diffDays === 1) return '昨天'
    if (diffDays < 7) return `${diffDays} 天前`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} 周前`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} 个月前`
    
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateString
  }
}

function formatNumber(num: number): string {
  if (num >= 10000) {
    return (num / 10000).toFixed(1) + 'w'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'
  }
  return num.toString()
}

export function ArticleMeta({
  wordCount,
  publishDate,
  tags = [],
  difficulty,
  status,
  author = 'Wexler',
}: ArticleMetaProps) {
  const readingTime = useMemo(() => {
    const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE)
    return minutes < 1 ? '< 1' : minutes.toString()
  }, [wordCount])

  const metaItems = [
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      label: '字数',
      value: formatNumber(wordCount),
      title: `约 ${wordCount} 字`,
    },
    {
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      label: '阅读',
      value: `${readingTime} 分钟`,
      title: `预计阅读 ${readingTime} 分钟`,
    },
    ...(publishDate
      ? [
          {
            icon: (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            ),
            label: '发布',
            value: formatDate(publishDate),
            title: publishDate,
          },
        ]
      : []),
    ...(difficulty
      ? [
          {
            icon: (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ),
            label: '难度',
            value: difficulty,
            title: `难度: ${difficulty}`,
          },
        ]
      : []),
    ...(status
      ? [
          {
            icon: (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            ),
            label: '状态',
            value: status,
            title: status,
          },
        ]
      : []),
  ]

  return (
    <div className={styles.meta}>
      <div className={styles.metaItems}>
        {metaItems.map((item, index) => (
          <div
            key={index}
            className={styles.metaItem}
            title={item.title}
          >
            <span className={styles.metaIcon}>{item.icon}</span>
            <span className={styles.metaLabel}>{item.label}</span>
            <span className={styles.metaValue}>{item.value}</span>
          </div>
        ))}
      </div>

      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.slice(0, 5).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
          {tags.length > 5 && (
            <span className={styles.tagMore}>+{tags.length - 5}</span>
          )}
        </div>
      )}
    </div>
  )
}

export default ArticleMeta