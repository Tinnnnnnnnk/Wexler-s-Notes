// src/app/page.tsx
'use client'
import { useUiMode } from '@/hooks/useUiMode'
import HomePage from '@/components/home/HomePage'

export default function Home() {
  useUiMode(true)
  return <HomePage />
}
