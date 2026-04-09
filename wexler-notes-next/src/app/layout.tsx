// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { UiModeProvider } from '@/components/providers/UiModeProvider'
import GlobalSiteBackdrop from '@/components/layout/GlobalSiteBackdrop'

export const metadata: Metadata = {
  title: "Wexler's Notes",
  description: '全栈开发与运维知识库 · Digital Garden',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <UiModeProvider>
            <div className="rootLayout">
              <GlobalSiteBackdrop />
              {children}
            </div>
          </UiModeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
