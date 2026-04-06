// src/app/docs/[...slug]/page.tsx
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import matter from 'gray-matter'
import type { TOCItem } from '@/types/mdx'
import { serializeMDX } from '@/lib/mdx'
import { buildSidebar } from '@/lib/sidebar'
import { MDXComponents } from '@/components/mdx/MDXComponents'
import { TableOfContents } from '@/components/mdx/TableOfContents'
import MainLayout from '@/components/layout/MainLayout'
import Sidebar from '@/components/layout/Sidebar'
import ReadingEnhancer from '@/components/reading/ReadingEnhancer'
import CommandPalette from '@/components/command/CommandPalette'
import styles from './page.module.css'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

function extractTOCFromSource(source: string): TOCItem[] {
  const items: TOCItem[] = []
  const headingRegex = /^#{2,4}\s+(.+?)(?:\s*\{#([\w-]+)\})?\s*$/gm
  let match
  while ((match = headingRegex.exec(source)) !== null) {
    const rawLevel = match[0].match(/^(#+)/)?.[1].length ?? 2
    const text = match[1].trim()
    const id = match[2] ?? text
      .toLowerCase()
      .normalize('NFKC')
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '')
    if (text) {
      items.push({ id, text, level: rawLevel as 2 | 3 | 4 })
    }
  }
  return items
}

export async function generateStaticParams() {
  const params: { slug: string[] }[] = []

  function scanDir(dir: string, baseSlug: string = '') {
    if (!fs.existsSync(dir)) return
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue
      if (entry.isDirectory()) {
        scanDir(path.join(dir, entry.name), baseSlug ? `${baseSlug}/${entry.name}` : entry.name)
      } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
        const slug = baseSlug
          ? `${baseSlug}/${entry.name.replace(/\.mdx?$/, '')}`
          : entry.name.replace(/\.mdx?$/, '')
        params.push({ slug: slug.split('/') })
      }
    }
  }

  scanDir(CONTENT_DIR)
  return params
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string[] }> }
): Promise<Metadata> {
  const { slug } = await params
  const filePath = path.join(CONTENT_DIR, ...slug) + '.mdx'
  if (!fs.existsSync(filePath)) return {}
  const source = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(source)
  return {
    title: data.title ? `${data.title} — Wexler's Notes` : "Wexler's Notes",
    description: data.description,
  }
}

export default async function DocsPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const filePath = path.join(CONTENT_DIR, ...slug) + '.mdx'

  if (!fs.existsSync(filePath)) notFound()

  const source = fs.readFileSync(filePath, 'utf-8')
  const toc = extractTOCFromSource(source)
  const { content } = await serializeMDX(source, MDXComponents as Record<string, React.ComponentType>)
  const sidebarGroups = buildSidebar()
  const currentPath = `/${slug.join('/')}`

  return (
    <MainLayout
      sidebar={
        <Sidebar groups={sidebarGroups} currentPath={currentPath} />
      }
    >
      <div className={styles.wrapper}>
        <article className={`${styles.article} docContent`}>
          {content}
        </article>
        <aside className={styles.tocAside}>
          <TableOfContents items={toc} />
        </aside>
      </div>
      <ReadingEnhancer />
      <CommandPalette />
    </MainLayout>
  )
}
