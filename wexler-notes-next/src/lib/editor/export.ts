// src/lib/editor/export.ts
// JSON bundle export/import — migrated from editorState.js

import type { Layout, PublishSnapshot } from '@/types/editor'

export const EXPORT_SCHEMA = 'wexler.editor.layout.bundle'
export const EXPORT_VERSION = 3
export const AUDIT_SCHEMA = 'wexler.editor.audit.bundle'
export const AUDIT_VERSION = 1
export const PROJECT_SCHEMA = 'wexler.editor.project.bundle'
export const PROJECT_VERSION = 1

export interface LayoutBundle {
  schema: string
  version: number
  exportedAt: string
  meta: { layoutVersion: number; maxPublishedHistory: number }
  scope: 'route' | 'all'
  route?: string
  draft?: Layout
  published?: Layout
  publishedHistory?: PublishSnapshot[]
  routes?: Record<string, { draft: Layout; published: Layout; publishedHistory: PublishSnapshot[] }>
  migratedFrom?: number
}

export interface ProjectBundle {
  schema: string
  version: number
  exportedAt: string
  meta: {
    layoutSchema: string
    layoutVersion: number
    auditSchema: string
    auditVersion: number
  }
  layoutBundle?: LayoutBundle
  auditBundle?: unknown
}

export function exportLayoutBundle(params: {
  route: string
  draft: Layout
  published: Layout
  publishedHistory: PublishSnapshot[]
}): LayoutBundle {
  return {
    schema: EXPORT_SCHEMA,
    version: EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    meta: {
      layoutVersion: 2,
      maxPublishedHistory: 12,
    },
    scope: 'route',
    route: params.route,
    draft: params.draft,
    published: params.published,
    publishedHistory: params.publishedHistory,
  }
}

export function downloadJson(data: unknown, filename: string): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export function parseImportJson(text: string): unknown {
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}
