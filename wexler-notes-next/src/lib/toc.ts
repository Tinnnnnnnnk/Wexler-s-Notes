// src/lib/toc.ts
// Extracts H2/H3/H4 headings from MDX content for TOC

import type { TOCItem } from '@/types/mdx'

export function extractTOC(htmlContent: string): TOCItem[] {
  const items: TOCItem[] = []
  const headingRegex = /<h([234])[^>]*id="([^"]+)"[^>]*>(.*?)<\/h[234]>/gi
  let match

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = parseInt(match[1], 10) as 2 | 3 | 4
    const id = match[2]
    // Strip HTML tags from heading text
    const text = match[3].replace(/<[^>]+>/g, '').trim()
    if (text) {
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
