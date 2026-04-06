// src/app/page.tsx
'use client'
import { UiModeProvider } from '@/components/providers/UiModeProvider'
import HomePage from '@/components/home/HomePage'

export default function Home() {
  return (
    <UiModeProvider isHome={true}>
      <HomePage />
    </UiModeProvider>
  )
}
