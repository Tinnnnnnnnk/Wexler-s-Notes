'use client'

import { usePathname } from 'next/navigation'
import Backdrop from '@/components/home/Backdrop'
import { useUiModeContext } from '@/components/providers/UiModeProvider'

/**
 * Render backdrop on docs pages for glass/liquid mode.
 * Home page has its own dedicated Backdrop in HomePage.
 */
export default function GlobalSiteBackdrop() {
  const pathname = usePathname()
  const { fxMode, perfMode } = useUiModeContext()

  if (pathname === '/') return null
  if (!pathname.startsWith('/docs')) return null
  if (fxMode === 'default') return null

  return <Backdrop fxMode={fxMode} perfMode={perfMode} site />
}
