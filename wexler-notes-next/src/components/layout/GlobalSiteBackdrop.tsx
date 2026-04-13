'use client'

import { usePathname } from 'next/navigation'
import Backdrop from '@/components/home/Backdrop'
import StyleFxLayer from '@/components/home/StyleFxLayer'
import { useUiModeContext } from '@/components/providers/UiModeProvider'

/**
 * Render global background effects on non-home pages.
 * Home page has its own dedicated Backdrop and StyleFxLayer in HomePage.
 */
export default function GlobalSiteBackdrop() {
  const pathname = usePathname()
  const { fxMode, perfMode } = useUiModeContext()

  // Skip rendering on home page as it has its own logic
  if (pathname === '/') return null
  
  // Skip on API routes
  if (pathname.startsWith('/api')) return null

  return (
    <>
      <Backdrop fxMode={fxMode} perfMode={perfMode} site />
      <StyleFxLayer fxMode={fxMode} perfMode={perfMode} />
    </>
  )
}
