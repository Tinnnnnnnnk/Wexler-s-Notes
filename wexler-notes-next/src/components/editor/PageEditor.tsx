// src/components/editor/PageEditor.tsx
// Visual page editor canvas — migrated from EditableHomeCanvas.vue (1659 lines → React + hooks)
'use client'
import { useCallback, useRef, useState } from 'react'
import { useEditor } from '@/hooks/useEditor'
import EditorToolbar from './EditorToolbar'
import EditorPanel from './EditorPanel'
import styles from './PageEditor.module.css'

interface PageEditorProps {
  route: string
}

export default function PageEditor({ route }: PageEditorProps) {
  const {
    isEditorMode,
    blocks,
    selectedBlockId,
    validation,
    toggleEditor,
    addBlock,
    removeBlock,
    selectBlock,
    patchBlock,
    undo,
    redo,
    canUndo,
    canRedo,
    publish,
    revert,
    exportBundle,
    resetLayout,
    importBundle,
  } = useEditor(route)

  const dragRef = useRef<{
    blockId: string
    startX: number
    startY: number
    origX: number
    origY: number
    rafId: number
  } | null>(null)

  const handlePointerDown = useCallback((e: React.PointerEvent, blockId: string) => {
    if (!isEditorMode) return
    e.stopPropagation()
    selectBlock(blockId)
    const block = blocks.find((b) => b.id === blockId)
    if (!block) return

    const target = e.currentTarget as HTMLElement
    target.setPointerCapture(e.pointerId)

    dragRef.current = {
      blockId,
      startX: e.clientX,
      startY: e.clientY,
      origX: block.x,
      origY: block.y,
      rafId: 0,
    }

    const onMove = (ev: PointerEvent) => {
      if (!dragRef.current) return
      const dx = ev.clientX - dragRef.current.startX
      const dy = ev.clientY - dragRef.current.startY
      patchBlock(dragRef.current.blockId, {
        x: Math.max(0, dragRef.current.origX + dx),
        y: Math.max(0, dragRef.current.origY + dy),
      })
    }

    const onUp = () => {
      if (dragRef.current?.rafId) cancelAnimationFrame(dragRef.current.rafId)
      target.removeEventListener('pointermove', onMove)
      target.removeEventListener('pointerup', onUp)
      dragRef.current = null
    }

    target.addEventListener('pointermove', onMove)
    target.addEventListener('pointerup', onUp)
  }, [isEditorMode, blocks, selectBlock, patchBlock])

  const handleCanvasClick = useCallback(() => {
    if (!isEditorMode) return
    selectBlock('')
  }, [isEditorMode, selectBlock])

  const handlePublish = useCallback(() => {
    const ok = publish()
    if (!ok) {
      alert('发布校验未通过，请修复错误后重试')
    }
  }, [publish])

  if (!isEditorMode) return null

  return (
    <div className={styles.canvas} onClick={handleCanvasClick}>
      <EditorToolbar
        canUndo={canUndo}
        canRedo={canRedo}
        onAdd={addBlock}
        onDuplicate={() => {}}
        onDelete={() => { if (selectedBlockId) removeBlock(selectedBlockId) }}
        onUndo={undo}
        onRedo={redo}
        onReset={resetLayout}
        onExport={exportBundle}
        onImport={importBundle}
        onPublish={handlePublish}
      />

      <EditorPanel
        selectedBlockId={selectedBlockId}
        blocks={blocks}
        validation={validation}
        onPatch={(patch) => patchBlock(selectedBlockId, patch)}
      />

      {/* Block canvas */}
      {blocks.map((block) => (
        <div
          key={block.id}
          className={`${styles.block} ${block.id === selectedBlockId ? styles.blockSelected : ''}`}
          style={{
            left: block.x,
            top: block.y,
            width: block.w,
            height: block.h,
            zIndex: block.z,
            opacity: block.opacity,
            borderRadius: block.radius,
            backdropFilter: block.blur > 0 ? `blur(${block.blur}px)` : undefined,
            background: block.bg,
            color: block.color,
          }}
          onPointerDown={(e) => handlePointerDown(e, block.id)}
        >
          <div className={styles.blockContent}>
            {block.kicker && <p className={styles.kicker}>{block.kicker}</p>}
            {block.title && <p className={styles.title}>{block.title}</p>}
            {block.body && <p className={styles.body}>{block.body}</p>}
          </div>
          <div className={`${styles.resizeSE} ${styles.resizeHandle}`} />
        </div>
      ))}

      {/* Validation report */}
      {validation && !validation.ok && (
        <div className={styles.validation}>
          {validation.errors.map((err, i) => (
            <p key={i} className={styles.validationError}>{err.message}</p>
          ))}
          {validation.warnings.map((warn, i) => (
            <p key={i} className={styles.validationWarning}>{warn.message}</p>
          ))}
        </div>
      )}
    </div>
  )
}
