// src/components/editor/EditorToggle.tsx
'use client'
import styles from './EditorToggle.module.css'
import { useEditor } from '@/hooks/useEditor'

export default function EditorToggle() {
  // Note: in production this would read guard state from env
  // For now we just use the local toggle
  const { isEditorMode, toggleEditor } = useEditor('/')

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
      编辑
    </button>
  )
}
