// src/components/layout/MainLayout.tsx
import styles from './MainLayout.module.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

interface MainLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
}

export default function MainLayout({ children, sidebar }: MainLayoutProps) {
  return (
    <div className={`${styles.root} main-layout`}>
      <Navbar />
      <div className={`${styles.body} main-layout-body`}>
        {sidebar && <aside className={`${styles.sidebar} main-sidebar`}>{sidebar}</aside>}
        <main className={`${styles.main} main-content`}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
