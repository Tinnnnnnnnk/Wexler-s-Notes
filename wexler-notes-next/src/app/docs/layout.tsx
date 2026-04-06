import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '文档中心 — Wexler\'s Notes',
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
