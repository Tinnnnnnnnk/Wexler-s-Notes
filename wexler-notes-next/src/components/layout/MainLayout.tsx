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
    <div className={styles.root}>
      <Navbar />
      <div className={styles.body}>
        {sidebar && <aside className={styles.sidebar}>{sidebar}</aside>}
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
