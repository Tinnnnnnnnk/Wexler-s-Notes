'use client'

import { usePathname } from 'next/navigation'
import { useUiModeContext } from '@/components/providers/UiModeProvider'
import Backdrop from '@/components/home/Backdrop'

/** 首页由 HomePage 自带 Backdrop；其余路由在液态/晶透下共用背景视频 */
export default function GlobalSiteBackdrop() {
  const pathname = usePathname()
  const { fxMode, perfMode } = useUiModeContext()
  if (pathname === '/') return null
  return <Backdrop fxMode={fxMode} perfMode={perfMode} site />
}
