// src/app/page.tsx
'use client'
import { UiModeProvider } from '@/components/providers/UiModeProvider'
import Navbar from '@/components/layout/Navbar'
import HomePage from '@/components/home/HomePage'

export default function Home() {
  return (
    <UiModeProvider>
      <Navbar />
      <HomePage />
    </UiModeProvider>
  )
}
