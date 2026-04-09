// src/lib/heading.ts
// Shared heading slug utility for TOC + rendered heading id generation.

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
}
