// src/types/mdx.ts
export interface MDXFrontmatter {
  title?: string
  description?: string
  date?: string
  tags?: string[]
  [key: string]: unknown
}

export interface TOCItem {
  id: string
  text: string
  level: 2 | 3 | 4
  children?: TOCItem[]
}

export interface ReadingSnapshot {
  path: string
  title: string
  excerpt: string
  progress: number
  scrollY: number
  headingId: string
  updatedAt: number
}
