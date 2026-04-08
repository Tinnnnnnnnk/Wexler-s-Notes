// scripts/editor-utils.ts
// Editor GitOps utility functions - stable routeKey generation and path resolution

import path from 'path'
import fs from 'fs'

export const LAYOUTS_DIR = path.join(process.cwd(), 'public', 'editor-layouts', 'layouts')
export const MANIFEST_PATH = path.join(process.cwd(), 'public', 'editor-layouts', 'manifest.json')
export const SCHEMA_PATH = path.join(process.cwd(), 'editor-schema', 'layout.schema.json')

/**
 * Generate a stable routeKey from route path
 * Rules:
 * - "/" -> "home"
 * - "/docs/xxx" -> "docs-xxx"
 * - Other paths use encodeURIComponent for safe file names
 */
export function generateRouteKey(route: string): string {
  const normalized = route?.trim() || '/'
  const clean = normalized.split(/[?#]/)[0] || '/'

  if (clean === '/') {
    return 'home'
  }

  // Convert path separators and special characters
  const key = clean
    .replace(/^\//, '') // Remove leading slash
    .replace(/\//g, '-') // Replace remaining slashes with dashes
    .replace(/[^a-zA-Z0-9-_]/g, (char) => {
      // Encode special characters
      return `%${char.charCodeAt(0).toString(16).padStart(2, '0')}`
    })

  return key || 'home'
}

/**
 * Reverse routeKey back to route path
 * This is the inverse of generateRouteKey
 */
export function reverseRouteKey(routeKey: string): string {
  if (routeKey === 'home') {
    return '/'
  }

  // Decode special characters and restore slashes
  const decoded = routeKey
    .replace(/%([0-9a-fA-F]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/-/g, '/')

  return '/' + decoded
}

/**
 * Get layout file path for a routeKey
 */
export function getLayoutPath(routeKey: string): string {
  return path.join(LAYOUTS_DIR, `${routeKey}.json`)
}

/**
 * Read manifest.json
 */
export function readManifest(): { version: string; updatedAt: string; layouts: Record<string, { updatedAt: string }> } {
  if (!fs.existsSync(MANIFEST_PATH)) {
    return { version: '1.0.0', updatedAt: '', layouts: {} }
  }
  try {
    return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'))
  } catch {
    return { version: '1.0.0', updatedAt: '', layouts: {} }
  }
}

/**
 * Write manifest.json
 */
export function writeManifest(manifest: { version: string; updatedAt: string; layouts: Record<string, { updatedAt: string }> }): void {
  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true })
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf-8')
}

/**
 * Read layout file
 */
export function readLayout(routeKey: string): unknown | null {
  const filePath = getLayoutPath(routeKey)
  if (!fs.existsSync(filePath)) {
    return null
  }
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  } catch {
    return null
  }
}

/**
 * Write layout file
 */
export function writeLayout(routeKey: string, layout: unknown): void {
  fs.mkdirSync(LAYOUTS_DIR, { recursive: true })
  const filePath = getLayoutPath(routeKey)
  fs.writeFileSync(filePath, JSON.stringify(layout, null, 2), 'utf-8')
}

/**
 * List all layout files
 */
export function listLayouts(): string[] {
  if (!fs.existsSync(LAYOUTS_DIR)) {
    return []
  }
  return fs.readdirSync(LAYOUTS_DIR)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace(/\.json$/, ''))
}
