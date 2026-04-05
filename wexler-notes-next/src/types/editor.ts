// src/types/editor.ts

export interface Block {
  id: string
  kind: 'text'
  x: number
  y: number
  w: number
  h: number
  z: number
  opacity: number
  radius: number
  blur: number
  bg: string
  color: string
  kicker: string
  title: string
  body: string
}

export interface Layout {
  version: 2
  blocks: Block[]
}

export interface PublishSnapshot {
  id: string
  at: string
  reason: string
  layout: Layout
}

export interface AuditEntry {
  id: string
  at: string
  action: string
  detail: Record<string, unknown>
}

export interface RouteLayout {
  route: string
  draft: Layout
  published: Layout
  publishedHistory: PublishSnapshot[]
}

export interface EditorValidationError {
  code: string
  blockId?: string
  index?: number
  message: string
}

export interface EditorValidationWarning {
  code: string
  blockId?: string
  index?: number
  message: string
}

export interface EditorValidationResult {
  ok: boolean
  route: string
  checkedAt: string
  blockCount: number
  errors: EditorValidationError[]
  warnings: EditorValidationWarning[]
}

export interface EditorGuardState {
  allowEditor: boolean
  locked: boolean
  requiresSecret: boolean
  message: string
  reason: string
  mode: 'allowed' | 'blocked'
  host: string
  allowedHosts: string[]
  isProd: boolean
  unlocked: boolean
}
