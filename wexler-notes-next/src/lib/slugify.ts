// src/lib/slugify.ts
// Converts Chinese text to URL-safe slugs

export function toSlug(text: string): string {
  return text
    .replace(/\.mdx?$/, '')       // remove extension
    .normalize('NFKC')              // Unicode normalization
    .replace(/[^\p{L}\p{N}\s-]/gu, '') // remove special chars
    .replace(/\s+/g, '-')          // spaces to hyphens
    .toLowerCase()
}

export function toTitle(text: string): string {
  return text
    .replace(/\.mdx?$/, '')
    .normalize('NFKC')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}
