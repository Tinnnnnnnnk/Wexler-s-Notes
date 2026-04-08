// src/components/editor/EditorToggle.tsx
'use client'
import { useEffect, useState } from 'react'
import styles from './EditorToggle.module.css'
import { useEditor } from '@/hooks/useEditor'

export default function EditorToggle({ route }: { route?: string }) {
  const [isEnabled, setIsEnabled] = useState(false)
  const normalizedRoute = route || '/'
  const { isEditorMode, toggleEditor } = useEditor(normalizedRoute)

  useEffect(() => {
    // 读取环境变量 NEXT_PUBLIC_EDITOR_ENABLED，默认为 false
    const enabled = process.env.NEXT_PUBLIC_EDITOR_ENABLED === 'true'
    setIsEnabled(enabled)
  }, [])

  // 如果未启用编辑器，则不显示按钮
  if (!isEnabled) return null

  return (
    <button
      type="button"
      className={`${styles.toggle} ${isEditorMode ? styles.active : ''}`}
      onClick={toggleEditor}
      aria-label={isEditorMode ? '关闭编辑器' : '开启编辑器'}
      title={isEditorMode ? '关闭编辑器' : '开启编辑器'}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
      {isEditorMode ? '退出编辑' : '编辑'}
    </button>
  )
}
