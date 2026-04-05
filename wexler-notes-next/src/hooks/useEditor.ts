'use client'
// src/hooks/useEditor.ts
// Full editor state management — migrated from stores/editorState.js

import { useState, useCallback, useEffect, useRef } from 'react'
import type { Block, Layout, PublishSnapshot, AuditEntry, EditorValidationResult } from '@/types/editor'
import {
  normalizeBlock,
  normalizeLayout,
  validateLayout,
  createDefaultLayout,
  generateBlockId,
  createDefaultBlockSeed,
} from '@/lib/editor/blockSchema'
import { pushUndoSnapshot, applyHistorySnapshot, type HistoryStack } from '@/lib/editor/history'
import * as storage from '@/lib/editor/storage'
import * as exportLib from '@/lib/editor/export'

const ROUTE_DRAFT_KEY_PREFIX = 'wexler.editor.layout.route.draft.v2.'
const ROUTE_PUBLISHED_KEY_PREFIX = 'wexler.editor.layout.route.published.v2.'
const ROUTE_PUBLISHED_HISTORY_KEY_PREFIX = 'wexler.editor.layout.route.published.history.v3.'
const ROUTE_AUDIT_KEY_PREFIX = 'wexler.editor.audit.route.v1.'
const EDIT_MODE_KEY = 'wexler.editor.mode'

function normalizeRoute(routeInput: string): string {
  const raw = routeInput?.trim() ? routeInput.trim() : '/'
  const route = raw.split(/[?#]/)[0] || '/'
  if (route === '/') return '/'
  return route.startsWith('/') ? route : `/${route}`
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}

export interface UseEditorReturn {
  isEditorMode: boolean
  blocks: Block[]
  selectedBlockId: string
  historyStack: HistoryStack
  validation: EditorValidationResult | null
  toggleEditor: () => void
  addBlock: () => void
  removeBlock: (id: string) => void
  selectBlock: (id: string) => void
  patchBlock: (id: string, patch: Partial<Block>) => void
  undo: () => void
  redo: () => void
  publish: () => boolean
  revert: () => void
  exportBundle: () => void
  resetLayout: () => void
}

export function useEditor(route: string): UseEditorReturn {
  const normalizedRoute = normalizeRoute(route)
  const [isEditorMode, setIsEditorMode] = useState(false)
  const [blocks, setBlocks] = useState<Block[]>([])
  const [selectedBlockId, setSelectedBlockId] = useState('')
  const [historyStack, setHistoryStack] = useState<HistoryStack>({ past: [], future: [] })
  const [validation, setValidation] = useState<EditorValidationResult | null>(null)
  const initializedRef = useRef(false)

  // Load layout from localStorage
  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true

    const draftKey = `${ROUTE_DRAFT_KEY_PREFIX}${encodeURIComponent(normalizedRoute)}`
    const draftRaw = storage.getItem(draftKey)
    let draft: Layout | null = null

    if (draftRaw) {
      try {
        draft = normalizeLayout(normalizedRoute, JSON.parse(draftRaw))
      } catch {
        draft = null
      }
    }

    if (!draft) {
      draft = createDefaultLayout(normalizedRoute)
    }

    setBlocks(draft.blocks)
    if (draft.blocks.length > 0) {
      setSelectedBlockId(draft.blocks[0].id)
    }

    const savedMode = storage.getItem(EDIT_MODE_KEY)
    setIsEditorMode(savedMode === '1')
    setValidation(validateLayout(normalizedRoute, draft))
  }, [normalizedRoute])

  // Persist draft on blocks change
  useEffect(() => {
    if (!initializedRef.current) return
    const draft: Layout = { version: 2, blocks }
    const key = `${ROUTE_DRAFT_KEY_PREFIX}${encodeURIComponent(normalizedRoute)}`
    storage.setItem(key, JSON.stringify(draft))
    setValidation(validateLayout(normalizedRoute, draft))
  }, [blocks, normalizedRoute])

  const toggleEditor = useCallback(() => {
    setIsEditorMode((prev) => {
      const next = !prev
      storage.setItem(EDIT_MODE_KEY, next ? '1' : '0')
      return next
    })
  }, [])

  const addBlock = useCallback(() => {
    setBlocks((prev) => {
      const newBlocks = [
        ...prev,
        { ...createDefaultBlockSeed(), id: generateBlockId(), z: 12 + prev.length },
      ]
      setSelectedBlockId(newBlocks[newBlocks.length - 1].id)
      return newBlocks
    })
  }, [])

  const removeBlock = useCallback((id: string) => {
    setBlocks((prev) => {
      const next = prev.filter((b) => b.id !== id)
      if (selectedBlockId === id) {
        setSelectedBlockId(next[0]?.id ?? '')
      }
      return next
    })
  }, [selectedBlockId])

  const selectBlock = useCallback((id: string) => {
    setSelectedBlockId(id)
  }, [])

  const patchBlock = useCallback((id: string, patch: Partial<Block>) => {
    setBlocks((prev) => {
      const next = prev.map((b) =>
        b.id === id ? normalizeBlock({ ...b, ...patch }, prev.indexOf(b)) : b
      )
      // Push to undo history
      const currentLayout: Layout = { version: 2, blocks: prev }
      setHistoryStack((stack) => pushUndoSnapshot(stack, currentLayout))
      return next
    })
  }, [])

  const undo = useCallback(() => {
    const currentLayout: Layout = { version: 2, blocks }
    const result = applyHistorySnapshot(historyStack)
    if (result.layout) {
      setBlocks(result.layout.blocks)
      setHistoryStack(result.stack)
    }
  }, [blocks, historyStack])

  const publish = useCallback((): boolean => {
    const layout = normalizeLayout(normalizedRoute, { version: 2, blocks })
    const val = validateLayout(normalizedRoute, layout)
    if (!val.ok) {
      setValidation(val)
      return false
    }

    const publishedKey = `${ROUTE_PUBLISHED_KEY_PREFIX}${encodeURIComponent(normalizedRoute)}`
    const historyKey = `${ROUTE_PUBLISHED_HISTORY_KEY_PREFIX}${encodeURIComponent(normalizedRoute)}`
    const historyRaw = storage.getItem(historyKey)
    let history: PublishSnapshot[] = []
    if (historyRaw) {
      try { history = JSON.parse(historyRaw) } catch { history = [] }
    }

    const snapshot: PublishSnapshot = {
      id: `snap-${Date.now()}`,
      at: new Date().toISOString(),
      reason: 'publish',
      layout: { version: 2, blocks },
    }
    history = [snapshot, ...history].slice(0, 12)
    storage.setItem(publishedKey, JSON.stringify({ version: 2, blocks }))
    storage.setItem(historyKey, JSON.stringify(history))
    return true
  }, [normalizedRoute, blocks])

  const revert = useCallback(() => {
    const publishedKey = `${ROUTE_PUBLISHED_KEY_PREFIX}${encodeURIComponent(normalizedRoute)}`
    const raw = storage.getItem(publishedKey)
    if (raw) {
      try {
        const layout = normalizeLayout(normalizedRoute, JSON.parse(raw))
        setBlocks(layout.blocks)
      } catch {
        // ignore
      }
    }
  }, [normalizedRoute])

  const exportBundle = useCallback(() => {
    const bundle = exportLib.exportLayoutBundle({
      route: normalizedRoute,
      draft: { version: 2, blocks },
      published: { version: 2, blocks },
      publishedHistory: [],
    })
    exportLib.downloadJson(bundle, `layout-${normalizedRoute.replace(/\//g, '-')}.json`)
  }, [normalizedRoute, blocks])

  const resetLayout = useCallback(() => {
    const layout = createDefaultLayout(normalizedRoute)
    setBlocks(layout.blocks)
    setSelectedBlockId(layout.blocks[0]?.id ?? '')
  }, [normalizedRoute])

  return {
    isEditorMode,
    blocks,
    selectedBlockId,
    historyStack,
    validation,
    toggleEditor,
    addBlock,
    removeBlock,
    selectBlock,
    patchBlock,
    undo,
    redo: () => {}, // redo not yet implemented
    publish,
    revert,
    exportBundle,
    resetLayout,
  }
}
