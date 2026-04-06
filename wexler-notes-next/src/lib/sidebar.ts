// src/lib/sidebar.ts
// Scans content/ directory and builds sidebar structure

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { SidebarGroup, SidebarItem } from '@/types/sidebar'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

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
        link: `/docs/${slug}`,
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
        const { data } = matter(fs.readFileSync(filePath, 'utf-8'))
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

  return groups
}
