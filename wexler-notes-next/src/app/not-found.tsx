// src/app/not-found.tsx
import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <p className={styles.code}>404</p>
        <h1 className={styles.heading}>Page Not Found</h1>
        <p className={styles.body}>
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <Link href="/" className={styles.backLink}>
          ← 返回首页
        </Link>
      </div>
    </div>
  )
}
