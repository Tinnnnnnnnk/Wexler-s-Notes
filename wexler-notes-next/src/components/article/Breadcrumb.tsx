// src/components/article/Breadcrumb.tsx
// 面包屑导航组件

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Breadcrumb.module.css'

interface BreadcrumbItem {
  label: string
  href?: string
}

function slugToLabel(slug: string): string {
  // 移除数字前缀 (如 "01-", "1-" 等)
  const cleaned = slug.replace(/^\d+[-_.]?\s*/, '')
  // 将连字符和下划线转换为空格
  const formatted = cleaned.replace(/[-_]/g, ' ')
  // 首字母大写
  return formatted.replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function Breadcrumb() {
  const pathname = usePathname()
  
  // 解析路径
  const pathSegments = pathname.split('/').filter(Boolean)
  
  // 只在 /docs 路径下显示
  if (pathSegments[0] !== 'docs') return null
  
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: '首页', href: '/' },
  ]
  
  // 构建面包屑项
  let currentPath = ''
  for (let i = 1; i < pathSegments.length; i++) {
    const segment = pathSegments[i]
    currentPath += `/${segment}`
    
    const isLast = i === pathSegments.length - 1
    const decodedSegment = decodeURIComponent(segment)
    
    breadcrumbItems.push({
      label: slugToLabel(decodedSegment),
      href: isLast ? undefined : `/docs${currentPath}`,
    })
  }
  
  return (
    <nav className={styles.breadcrumb} aria-label="面包屑导航">
      <ol className={styles.list}>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className={styles.item}>
            {item.href ? (
              <>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
                <span className={styles.separator} aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </>
            ) : (
              <span className={styles.current} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}