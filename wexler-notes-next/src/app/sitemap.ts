// src/app/sitemap.ts
import fs from 'fs'
import path from 'path'
import { buildSidebar } from '@/lib/sidebar'
import { resolveContentDir } from '@/lib/contentPath'

export const dynamic = 'force-static'

const CONTENT_DIR = resolveContentDir()
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wexler.dev'

interface SitemapEntry {
  url: string
  lastModified: string
}

function gatherMdxFiles(dir: string, baseSlug: string = ''): string[] {
  if (!fs.existsSync(dir)) return []
  const results: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue
    if (entry.isDirectory()) {
      const slug = baseSlug ? `${baseSlug}/${entry.name}` : entry.name
      results.push(...gatherMdxFiles(path.join(dir, entry.name), slug))
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
      const slug = baseSlug
        ? `${baseSlug}/${entry.name.replace(/\.mdx?$/, '')}`
        : entry.name.replace(/\.mdx?$/, '')
      results.push(slug)
    }
  }
  return results
}

export default function sitemap(): SitemapEntry[] {
  const groups = buildSidebar()
  const entries: SitemapEntry[] = [
    { url: SITE_URL, lastModified: new Date().toISOString() },
  ]

  for (const group of groups) {
    for (const item of group.items) {
      if (item.link) {
        entries.push({ url: `${SITE_URL}${item.link}`, lastModified: new Date().toISOString() })
      }
      if (item.items) {
        for (const child of item.items) {
          if (child.link) {
            entries.push({ url: `${SITE_URL}${child.link}`, lastModified: new Date().toISOString() })
          }
        }
      }
    }
  }

  return entries
}
