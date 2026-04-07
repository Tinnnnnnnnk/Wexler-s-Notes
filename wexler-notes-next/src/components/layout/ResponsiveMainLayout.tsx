// src/components/layout/ResponsiveMainLayout.tsx
// 响应式主布局组件

'use client'
import { useState, useEffect } from 'react'
import styles from './ResponsiveMainLayout.module.css'
import Navbar from './Navbar'
import EnhancedSidebar from './EnhancedSidebar'
import Footer from './Footer'
import type { SidebarGroup } from '@/types/sidebar'

interface ResponsiveMainLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
  groups?: SidebarGroup[]
  currentPath?: string
}

export default function ResponsiveMainLayout({
  children,
  sidebar,
  groups,
  currentPath,
}: ResponsiveMainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      if (!mobile) {
        setIsSidebarOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <div className={styles.root}>
      <Navbar onMenuClick={toggleSidebar} />

      <div className={`${styles.body} app-body`}>
        {/* 移动端侧边栏遮罩 */}
        {isSidebarOpen && isMobile && (
          <div className={styles.overlay} onClick={closeSidebar} />
        )}

        {/* 侧边栏 */}
        <aside
          className={`${styles.sidebar} main-sidebar ${isSidebarOpen ? styles.sidebarOpen : ''}`}
        >
          {sidebar || (groups && <EnhancedSidebar groups={groups} currentPath={currentPath} />)}
        </aside>

        {/* 主内容 */}
        <main className={`${styles.main} app-main`}>{children}</main>
      </div>

      <Footer />

      {/* 移动端菜单按钮 */}
      {isMobile && (
        <button
          className={styles.mobileMenuBtn}
          onClick={toggleSidebar}
          aria-label="切换侧边栏"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isSidebarOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      )}
    </div>
  )
}