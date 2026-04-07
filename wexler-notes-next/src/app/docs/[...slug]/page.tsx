// src/app/docs/[...slug]/page.tsx
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
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
import styles from './page.module.css'

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content')

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

export async function generateStaticParams() {
  const params: { slug: string[] }[] = []

  function scanDir(dir: string, baseSlug = '') {
    if (!fs.existsSync(dir)) return
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue
      if (entry.isDirectory()) {
        scanDir(
          path.join(dir, entry.name),
          baseSlug ? `${baseSlug}/${entry.name}` : entry.name,
        )
      } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
        const slug = baseSlug
          ? `${baseSlug}/${entry.name.replace(/\.mdx?$/, '')}`
          : entry.name.replace(/\.mdx?$/, '')
        // NOTE: slug parts (directory/file names) are stored as raw unencoded strings.
        // When Next.js passes slug in URL, it gets URL-encoded (e.g. "鍥惧儚澶勭悊" -> "%E5%9B%BE%E5%83%8F").
        // We decode here in DocsPage using decodeURIComponent, so generateStaticParams
        // must match with raw unencoded strings.
        params.push({ slug: slug.split('/') })
      }
    }
  }

  scanDir(CONTENT_DIR)
  return params
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string[] }> },
): Promise<Metadata> {
  const { slug } = await params
  // URL slug is URL-encoded, must decode before filesystem access
  const filePath = path.join(CONTENT_DIR, ...slug.map(s => decodeURIComponent(s))) + '.mdx'
  if (!fs.existsSync(filePath)) return {}

  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data } = parseFrontmatter(raw)
    const title = typeof data.title === 'string' && data.title
      ? `${data.title} 鈥?Wexler's Notes`
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
  // URL slug is URL-encoded by Next.js routing, decode before filesystem access.
  // Example: "/docs/图像处理和信息安全/Week4" -> slug=["图像处理和信息安全","Week4"]
  const filePath = path.join(CONTENT_DIR, ...slug.map(s => decodeURIComponent(s))) + '.mdx'

  if (!fs.existsSync(filePath)) notFound()

  let raw: string
  try {
    raw = fs.readFileSync(filePath, 'utf-8')
  } catch {
    notFound()
    return
  }

  const { body } = parseFrontmatter(raw)
  const source = preprocessDocsSource(body)
  const toc = extractTOCFromSource(source)

  let content
  try {
    const result = await serializeMDX(source, MDXComponents)
    content = result.content
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`[DocsPage] MDX compile error for ${filePath}:`, err)
    notFound()
    return
  }

  const sidebarGroups = buildSidebar()
  const currentPath = `/docs/${slug.join('/')}`

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
    </MainLayout>
  )
}

