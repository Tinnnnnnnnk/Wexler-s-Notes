'use client'

import { usePathname } from 'next/navigation'
import { useUiModeContext } from '@/components/providers/UiModeProvider'
import Backdrop from '@/components/home/Backdrop'

/**
 * P1-C 优化：首页由 HomePage 自带 Backdrop；
 * docs 等其他路由不再加载背景视频，消除首页→文档跳转时的视频加载开销。
 * 这消除了 GlobalSiteBackdrop 在每个 docs 页面渲染时触发 Backdrop 的问题，
 * 显著缩短首页到文档的跳转时间。
 */
export default function GlobalSiteBackdrop() {
  const pathname = usePathname()
  // 仅在首页渲染 Backdrop；docs 等其他路由不再加载背景视频
  if (pathname === '/') return null
  return null
}
