// src/lib/toc.ts
// Extracts H2/H3/H4 headings from MDX content for TOC

import type { TOCItem } from '@/types/mdx'

export function extractTOC(htmlContent: string): TOCItem[] {
  const items: TOCItem[] = []
  const seenIds = new Map<string, number>()
  const headingRegex = /<h([234])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h[234]>/gi
  let match

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1], 10) as 2 | 3 | 4
    let id = match[2]
    // Strip HTML tags from heading text
    const text = match[3].replace(/<[^>]+>/g, '').trim()
    if (text) {
      // 处理重复 id，确保每个 id 都是唯一的
      if (seenIds.has(id)) {
        const count = seenIds.get(id)! + 1
        seenIds.set(id, count)
        id = `${id}-${count}`
      } else {
        seenIds.set(id, 0)
      }
      items.push({ id, text, level })
    }
  }

  return items
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
}
