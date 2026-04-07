// src/lib/sidebar.ts
// Scans content/ directory and builds sidebar structure

import fs from 'fs'
import path from 'path'
import type { SidebarGroup, SidebarItem } from '@/types/sidebar'
import { parseFrontmatter } from '@/lib/frontmatter'
import { resolveContentDir } from '@/lib/contentPath'

const CONTENT_DIR = resolveContentDir()
const SIDEBAR_CACHE_TTL_MS = 5000

let sidebarCache: { expiresAt: number; groups: SidebarGroup[] } | null = null

function findFirstLeafLink(items: SidebarItem[]): string | undefined {
  for (const item of items) {
    if (item.link) return item.link
    if (item.items?.length) {
      const child = findFirstLeafLink(item.items)
      if (child) return child
    }
  }
  return undefined
}

function scanDir(dir: string, baseSlug: string = ''): SidebarItem[] {
  if (!fs.existsSync(dir)) return []

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const items: SidebarItem[] = []

  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue

    if (entry.isDirectory()) {
      const slug = baseSlug ? `${baseSlug}/${entry.name}` : entry.name
      const children = scanDir(path.join(dir, entry.name), slug)
      const metaPath = path.join(dir, entry.name, '_meta.json')

      let title = entry.name
      if (fs.existsSync(metaPath)) {
        try {
          const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
          if (meta.title) title = meta.title
        } catch {
          // ignore parse errors
        }
      }

      items.push({
        title,
        link: findFirstLeafLink(children),
        items: children,
        collapsed: false,
      })
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      const slug = baseSlug
        ? `${baseSlug}/${entry.name.replace(/\.mdx?$/, '')}`
        : entry.name.replace(/\.mdx?$/, '')
      const filePath = path.join(dir, entry.name)

      let title = slug.split('/').pop() || slug
      try {
        const { data } = parseFrontmatter(fs.readFileSync(filePath, 'utf-8'))
        if (data.title) title = data.title
      } catch {
        // ignore
      }

      items.push({
        title,
        link: `/docs/${slug}`,
      })
    }
  }

  // Sort by numeric prefix (00-, 01-, 02-...)
  items.sort((a, b) => {
    const aKey = a.title.match(/^(\d+)/)?.[1] ?? '999'
    const bKey = b.title.match(/^(\d+)/)?.[1] ?? '999'
    return parseInt(aKey, 10) - parseInt(bKey, 10)
  })

  return items
}

export function buildSidebar(): SidebarGroup[] {
  const now = Date.now()
  if (sidebarCache && sidebarCache.expiresAt > now) {
    return sidebarCache.groups
  }

  if (!fs.existsSync(CONTENT_DIR)) return []

  const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
  const groups: SidebarGroup[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue

    const dir = path.join(CONTENT_DIR, entry.name)
    const items = scanDir(dir, entry.name)

    let text = entry.name
    const metaPath = path.join(dir, '_meta.json')
    if (fs.existsSync(metaPath)) {
      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
        if (meta.title) text = meta.title
      } catch {
        // ignore
      }
    }

    groups.push({ text, items })
  }

  sidebarCache = {
    expiresAt: now + SIDEBAR_CACHE_TTL_MS,
    groups,
  }

  return groups
}
