import MainLayout from '@/components/layout/MainLayout'
import Sidebar from '@/components/layout/Sidebar'
import { buildSidebar } from '@/lib/sidebar'

export const metadata = {
  title: '文档中心 — Wexler\'s Notes',
}

export default function DocsIndex() {
  const sidebarGroups = buildSidebar()

  return (
    <MainLayout
      sidebar={<Sidebar groups={sidebarGroups} currentPath="/docs" />}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '1rem',
        textAlign: 'center',
      }}>
        <h1>📚 文档中心</h1>
        <p style={{ color: '#6b7280', maxWidth: '500px' }}>
          从左侧边栏选择分类，开始浏览知识库。
        </p>
      </div>
    </MainLayout>
  )
}
