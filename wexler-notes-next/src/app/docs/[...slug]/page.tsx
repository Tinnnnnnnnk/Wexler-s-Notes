// src/app/docs/[...slug]/page.tsx
import fs from 'fs'
import path from 'path'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import type { TOCItem } from '@/types/mdx'
import { serializeMDX } from '@/lib/mdx'
import { buildSidebar } from '@/lib/sidebar'
import { TableOfContents } from '@/components/mdx/TableOfContents'
import MainLayout from '@/components/layout/MainLayout'
import Sidebar from '@/components/layout/Sidebar'
import ReadingEnhancer from '@/components/reading/ReadingEnhancer'
import { MDXComponents } from '@/components/mdx/MDXComponents'
import { parseFrontmatter } from '@/lib/frontmatter'
import { decodeSlugSegment, resolveContentDir } from '@/lib/contentPath'
import styles from './page.module.css'

const CONTENT_DIR = resolveContentDir()

type StaticParam = { slug: string[] }
type SerializedContent = Awaited<ReturnType<typeof serializeMDX>>['content']

interface RenderCacheEntry {
  mtimeMs: number
  content: SerializedContent
  toc: TOCItem[]
}

const renderCache = new Map<string, RenderCacheEntry>()

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function extractTOCFromSource(source: string): TOCItem[] {
  const items: TOCItem[] = []
  const headingRegex = /^#{2,4}\s+(.+?)(?:\s*\{#([\w-]+)\})?\s*$/gm
  let match
  while ((match = headingRegex.exec(source)) !== null) {
    const rawLevel = match[0].match(/^(#+)/)?.[1].length ?? 2
    const text = match[1].trim()
    const id = match[2] ?? slugify(text)
    if (text) {
      items.push({ id, text, level: rawLevel as 2 | 3 | 4 })
    }
  }
  return items
}

function preprocessDocsSource(source: string): string {
  let inCodeBlock = false
  let codeBlockMarker = ''

  function patchOutsideInlineCode(line: string): string {
    const parts = line.split(/(`[^`]*`)/g)
    for (let i = 0; i < parts.length; i += 2) {
      let segment = parts[i]
      segment = segment
        .replace(/<=/g, '&lt;=')
        .replace(/<>/g, '&lt;&gt;')
        .replace(/([A-Za-z0-9_\])])<([A-Za-z0-9_])/g, '$1&lt;$2')
      parts[i] = segment
    }
    return parts.join('')
  }

  const lines = source.split('\n')
  const result: string[] = []

  for (const line of lines) {
    const codeMatch = line.match(/^(\s*)(```+|~~~)\s*/)
    if (codeMatch) {
      if (!inCodeBlock) {
        inCodeBlock = true
        codeBlockMarker = codeMatch[2]
      } else if (line.trim().startsWith(codeBlockMarker)) {
        inCodeBlock = false
        codeBlockMarker = ''
      }
      result.push(line)
      continue
    }

    if (inCodeBlock) {
      result.push(line)
      continue
    }

    let fixed = line
      .replace(/([^<])\/(p|div|span|strong|a|h[1-6])>/gi, '$1</$2>')
      .replace(/<([a-z][a-z0-9-]*)\s+class=/gi, '<$1 className=')

    fixed = fixed.replace(
      /<span\s+className=(["'])math-inline\1>(.*?)<\/span>/gi,
      (_m, quote: '"' | "'", content: string) =>
        `<span className=${quote}math-inline${quote}>${content
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')}</span>`,
    )
    fixed = fixed.replace(
      /<div\s+className=(["'])math-block\1>(.*?)<\/div>/gi,
      (_m, quote: '"' | "'", content: string) =>
        `<div className=${quote}math-block${quote}>${content
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')}</div>`,
    )

    fixed = patchOutsideInlineCode(fixed)
    result.push(fixed)
  }

  return result.join('\n')
}

function resolveDocFilePath(slug: string[]): string | null {
  const base = path.join(CONTENT_DIR, ...slug)
  const candidates = [`${base}.mdx`, `${base}.md`]
  for (const p of candidates) {
    if (fs.existsSync(p) && fs.statSync(p).isFile()) return p
  }
  return null
}

function findFirstDocSlugInDir(dir: string, baseSlug: string[]): string[] | null {
  if (!fs.existsSync(dir)) return null
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('_') && !entry.name.startsWith('.'))
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-Hans-CN'))

  for (const entry of entries) {
    if (entry.isFile() && /\.mdx?$/.test(entry.name)) {
      const name = entry.name.replace(/\.mdx?$/, '')
      return [...baseSlug, name]
    }
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const child = findFirstDocSlugInDir(path.join(dir, entry.name), [...baseSlug, entry.name])
    if (child) return child
  }

  return null
}

function addParamVariants(set: Set<string>, slug: string) {
  const parts = slug.split('/').filter(Boolean)
  if (!parts.length) return

  set.add(parts.join('/'))
  set.add(parts.map((seg) => encodeURIComponent(seg)).join('/'))
}

function scanStaticPaths(dir: string, baseSlug: string, paramsSet: Set<string>): boolean {
  if (!fs.existsSync(dir)) return false
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('_') && !entry.name.startsWith('.'))

  let hasDoc = false

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const nextSlug = baseSlug ? `${baseSlug}/${entry.name}` : entry.name
      const childHasDoc = scanStaticPaths(path.join(dir, entry.name), nextSlug, paramsSet)
      if (childHasDoc) {
        addParamVariants(paramsSet, nextSlug)
        hasDoc = true
      }
      continue
    }

    if (!/\.mdx?$/.test(entry.name)) continue
    const fileSlug = entry.name.replace(/\.mdx?$/, '')
    const slug = baseSlug ? `${baseSlug}/${fileSlug}` : fileSlug
    addParamVariants(paramsSet, slug)
    hasDoc = true
  }

  return hasDoc
}

async function renderDoc(filePath: string): Promise<{ content: SerializedContent; toc: TOCItem[] }> {
  const mtimeMs = fs.statSync(filePath).mtimeMs
  const cached = renderCache.get(filePath)
  if (cached && cached.mtimeMs === mtimeMs) {
    return { content: cached.content, toc: cached.toc }
  }

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { body } = parseFrontmatter(raw)
  const source = preprocessDocsSource(body)
  const toc = extractTOCFromSource(source)
  const result = await serializeMDX(source, MDXComponents)

  renderCache.set(filePath, {
    mtimeMs,
    toc,
    content: result.content,
  })

  return { content: result.content, toc }
}

export async function generateStaticParams(): Promise<StaticParam[]> {
  const paramsSet = new Set<string>()
  scanStaticPaths(CONTENT_DIR, '', paramsSet)
  return Array.from(paramsSet).map((item) => ({ slug: item.split('/') }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string[] }> },
): Promise<Metadata> {
  const { slug } = await params
  const decodedSlug = slug.map(decodeSlugSegment)
  const filePath = resolveDocFilePath(decodedSlug)
  if (!filePath) return {}

  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data } = parseFrontmatter(raw)
    const title = typeof data.title === 'string' && data.title
      ? `${data.title} · Wexler's Notes`
      : "Wexler's Notes"
    const description = typeof data.description === 'string' ? data.description : undefined
    return { title, description }
  } catch {
    return {}
  }
}

export default async function DocsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const decodedSlug = slug.map(decodeSlugSegment)

  let filePath = resolveDocFilePath(decodedSlug)
  if (!filePath) {
    const dirPath = path.join(CONTENT_DIR, ...decodedSlug)
    if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
      const firstDoc = findFirstDocSlugInDir(dirPath, decodedSlug)
      if (firstDoc) {
        const target = firstDoc.map((seg) => encodeURIComponent(seg)).join('/')
        redirect(`/docs/${target}`)
      }
    }
    notFound()
  }

  const sourcePath = filePath as string
  let content: SerializedContent
  let toc: TOCItem[]
  try {
    const rendered = await renderDoc(sourcePath)
    content = rendered.content
    toc = rendered.toc
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`[DocsPage] MDX compile error for ${sourcePath}:`, err)
    notFound()
    return
  }

  const sidebarGroups = buildSidebar()
  const currentPath = `/docs/${decodedSlug.join('/')}`

  return (
    <MainLayout
      sidebar={(
        <Sidebar groups={sidebarGroups} currentPath={currentPath} />
      )}
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
    </MainLayout>
  )
}

