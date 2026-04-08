// src/components/editor/EditorToolbar.tsx
'use client'
import { useRef } from 'react'
import styles from './EditorToolbar.module.css'

interface EditorToolbarProps {
  canUndo: boolean
  canRedo: boolean
  onAdd: () => void
  onDuplicate: () => void
  onDelete: () => void
  onUndo: () => void
  onRedo: () => void
  onReset: () => void
  onExport: () => void
  onImport: (json: unknown) => void
  onPublish: () => void
  hasUnpublishedChanges?: boolean
}

export default function EditorToolbar({
  canUndo,
  onAdd,
  onDelete,
  onUndo,
  onRedo,
  onReset,
  onExport,
  onImport,
  onPublish,
}: EditorToolbarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImportClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const text = ev.target?.result as string
        const parsed = JSON.parse(text)
        onImport(parsed)
        alert('导入成功！')
      } catch {
        alert('导入失败：JSON 格式错误')
      }
    }
    reader.readAsText(file)

    // 重置 input 以便再次选择相同文件
    e.target.value = ''
  }
  return (
    <div className={styles.toolbar}>
      <button type="button" className={styles.btn} onClick={onAdd} title="添加模块">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
      <button type="button" className={styles.btn} onClick={onDelete} title="删除选中模块">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>

      <div className={styles.sep} />

      <button type="button" className={styles.btn} onClick={onUndo} disabled={!canUndo} title="撤销 (Ctrl+Z)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>
      </button>
      <button type="button" className={styles.btn} onClick={onRedo} title="重做 (Ctrl+Shift+Z)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/></svg>
      </button>

      <div className={styles.sep} />

      <button type="button" className={styles.btn} onClick={onReset} title="重置布局">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4"/></svg>
      </button>

      <div className={styles.sep} />

      <button type="button" className={styles.btn} onClick={onExport} title="导出 JSON">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </button>

      <button type="button" className={styles.btn} onClick={handleImportClick} title="导入 JSON">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
      </button>

      <div className={styles.sep} />

      <button type="button" className={`${styles.btn} ${styles.publishBtn}`} onClick={onPublish} title="发布">
        发布
      </button>

      {/* 隐藏的文件输入框 */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  )
}
