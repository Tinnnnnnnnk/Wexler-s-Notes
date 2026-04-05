// src/lib/editor/blockSchema.ts
// Block type + normalizeBlock + validateLayout — migrated from stores/editorState.js

import type { Block, Layout, EditorValidationResult, EditorValidationError, EditorValidationWarning } from '@/types/editor'

export const LAYOUT_SCHEMA_VERSION = 2
export const MAX_PUBLISHED_HISTORY = 12
export const MAX_HISTORY_STEPS = 50
export const SNAP_GRID = 12
export const SNAP_THRESHOLD = 8
export const CANVAS_LIMIT = 5000

const DEFAULT_BLOCK = {
  id: 'block-1',
  kind: 'text' as const,
  x: 96,
  y: 140,
  w: 420,
  h: 180,
  z: 10,
  opacity: 0.9,
  radius: 16,
  blur: 12,
  bg: 'rgba(16, 28, 40, 0.3)',
  color: '#f3f7fc',
  kicker: 'Module',
  title: 'Untitled',
  body: 'Editable content block',
}

export function createDefaultBlockSeed(): Block {
  return { ...DEFAULT_BLOCK }
}

export function createDefaultLayout(route: string): Layout {
  if (route === '/') {
    return {
      version: LAYOUT_SCHEMA_VERSION,
      blocks: [
        {
          ...DEFAULT_BLOCK,
          id: 'hero-intro',
          x: 76,
          y: 128,
          w: 560,
          h: 220,
          z: 10,
          opacity: 0.95,
          radius: 18,
          blur: 14,
          bg: 'rgba(16, 28, 40, 0.36)',
          color: '#f3f7fc',
          kicker: 'Digital Garden',
          title: "Wexler's Notes",
          body: '全栈开发与运维知识库',
        },
        {
          ...DEFAULT_BLOCK,
          id: 'quick-link',
          x: 76,
          y: 372,
          w: 360,
          h: 136,
          z: 11,
          opacity: 0.92,
          radius: 16,
          blur: 12,
          bg: 'rgba(12, 20, 30, 0.28)',
          color: '#e6eff8',
          kicker: 'Launch',
          title: 'Core Notes',
          body: '/sky-take-out/00-后端开发知识大本营',
        },
      ],
    }
  }
  return {
    version: LAYOUT_SCHEMA_VERSION,
    blocks: [],
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function toSafeNumber(value: unknown, fallback: number): number {
  const num = Number(value)
  if (!Number.isFinite(num)) return fallback
  return num
}

export function normalizeBlock(raw: Partial<Block> | undefined, index: number): Block {
  const fallback = createDefaultBlockSeed()
  if (!raw) return { ...fallback, id: `block-${index + 1}` }
  return {
    id: typeof raw.id === 'string' && raw.id.trim() ? raw.id : `block-${index + 1}`,
    kind: 'text',
    x: clamp(toSafeNumber(raw.x, fallback.x), 0, CANVAS_LIMIT),
    y: clamp(toSafeNumber(raw.y, fallback.y), 0, CANVAS_LIMIT),
    w: clamp(toSafeNumber(raw.w, fallback.w), 180, 1200),
    h: clamp(toSafeNumber(raw.h, fallback.h), 90, 900),
    z: clamp(toSafeNumber(raw.z, fallback.z), 0, 200),
    opacity: clamp(toSafeNumber(raw.opacity, fallback.opacity), 0.05, 1),
    radius: clamp(toSafeNumber(raw.radius, fallback.radius), 0, 60),
    blur: clamp(toSafeNumber(raw.blur, fallback.blur), 0, 24),
    bg: typeof raw.bg === 'string' && raw.bg.trim() ? raw.bg : fallback.bg,
    color: typeof raw.color === 'string' && raw.color.trim() ? raw.color : fallback.color,
    kicker: typeof raw.kicker === 'string' ? raw.kicker : '',
    title: typeof raw.title === 'string' ? raw.title : '',
    body: typeof raw.body === 'string' ? raw.body : '',
  }
}

export function normalizeLayout(route: string, raw: Partial<Layout> | undefined): Layout {
  const fallback = createDefaultLayout(route)
  if (!raw || typeof raw !== 'object') return fallback

  const blockSource = Array.isArray(raw.blocks)
    ? raw.blocks
    : Array.isArray((raw as { items?: Block[] }).items)
      ? (raw as { items: Block[] }).items
      : Array.isArray((raw as { modules?: Block[] }).modules)
        ? (raw as { modules: Block[] }).modules
        : null

  const blocks = blockSource
    ? blockSource.map((block, i) => normalizeBlock(block, i))
    : fallback.blocks

  return {
    version: LAYOUT_SCHEMA_VERSION,
    blocks,
  }
}

export function validateLayout(route: string, layoutInput: Partial<Layout> | undefined): EditorValidationResult {
  const layout = normalizeLayout(route, layoutInput)
  const errors: EditorValidationError[] = []
  const warnings: EditorValidationWarning[] = []
  const seenIds = new Set<string>()

  if (layout.blocks.length > 80) {
    errors.push({
      code: 'TOO_MANY_BLOCKS',
      message: `模块数量为 ${layout.blocks.length}，超过 80 的上限。`,
    })
  }

  if (!layout.blocks.length) {
    warnings.push({
      code: 'EMPTY_LAYOUT',
      message: '当前页面没有模块，发布后会是空白页面。',
    })
  }

  layout.blocks.forEach((block, index) => {
    const label = `模块 #${index + 1}${block.id ? `（${block.id}）` : ''}`
    const contentLength = `${block.kicker}${block.title}${block.body}`.trim().length

    if (seenIds.has(block.id)) {
      errors.push({
        code: 'DUPLICATE_ID',
        blockId: block.id,
        index,
        message: `${label} 与其他模块使用了重复 ID。`,
      })
    }
    seenIds.add(block.id)

    if (!contentLength) {
      warnings.push({
        code: 'EMPTY_CONTENT',
        blockId: block.id,
        index,
        message: `${label} 没有任何文案内容。`,
      })
    }

    if (block.title.length > 120) {
      warnings.push({
        code: 'TITLE_TOO_LONG',
        blockId: block.id,
        index,
        message: `${label} 标题过长（>120 字）。`,
      })
    }

    if (block.body.length > 2000) {
      warnings.push({
        code: 'BODY_TOO_LONG',
        blockId: block.id,
        index,
        message: `${label} 正文过长（>2000 字），可能影响可读性。`,
      })
    }

    if (block.x + block.w > CANVAS_LIMIT || block.y + block.h > CANVAS_LIMIT) {
      warnings.push({
        code: 'OUT_OF_VIEWPORT',
        blockId: block.id,
        index,
        message: `${label} 可能超出可编辑区域边界。`,
      })
    }
  })

  return {
    ok: errors.length === 0,
    route,
    checkedAt: new Date().toISOString(),
    blockCount: layout.blocks.length,
    errors,
    warnings,
  }
}

export function computeSnapPatch(
  rawX: number,
  rawY: number,
  grid = SNAP_GRID,
  threshold = SNAP_THRESHOLD,
): { x: number; y: number; snapX: boolean; snapY: boolean } {
  const snappedX = Math.round(rawX / grid) * grid
  const snappedY = Math.round(rawY / grid) * grid
  return {
    x: Math.abs(rawX - snappedX) < threshold ? snappedX : rawX,
    y: Math.abs(rawY - snappedY) < threshold ? snappedY : rawY,
    snapX: Math.abs(rawX - snappedX) < threshold,
    snapY: Math.abs(rawY - snappedY) < threshold,
  }
}

export function generateBlockId(): string {
  return `block-${Date.now()}-${Math.floor(Math.random() * 1000)}`
}
