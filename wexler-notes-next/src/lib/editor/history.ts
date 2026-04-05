// src/lib/editor/history.ts
// Undo/redo stack — migrated from EditableHomeCanvas.vue

import type { Layout } from '@/types/editor'

const MAX_HISTORY_STEPS = 50

export interface HistoryStack {
  past: Layout[]
  future: Layout[]
}

export function createHistoryStack(): HistoryStack {
  return { past: [], future: [] }
}

export function pushUndoSnapshot(
  stack: HistoryStack,
  currentLayout: Layout,
): HistoryStack {
  return {
    past: [...stack.past, deepClone(currentLayout)].slice(-MAX_HISTORY_STEPS),
    future: [],
  }
}

export function applyHistorySnapshot(
  stack: HistoryStack,
): { stack: HistoryStack; layout: Layout | null } {
  if (!stack.past.length) return { stack, layout: null }
  const previous = stack.past[stack.past.length - 1]
  return {
    stack: {
      past: stack.past.slice(0, -1),
      future: [],
    },
    layout: previous,
  }
}

export function pushRedoSnapshot(
  stack: HistoryStack,
  currentLayout: Layout,
): HistoryStack {
  if (!stack.future.length) return stack
  return {
    past: [...stack.past, deepClone(currentLayout)].slice(-MAX_HISTORY_STEPS),
    future: stack.future.slice(0, -1),
  }
}

function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}
