// src/app/docs/[...slug]/page.tsx
import fs from 'fs'
import path from 'path'
import { notFound, redirect } from 'next/navigation'
import type { Metadata } from 'next'
import type { TOCItem } from '@/types/mdx'
import { serializeMDX } from '@/lib/mdx'
import { buildSidebar } from '@/lib/sidebar'
import { TableOfContents } from '@/components/mdx/TableOfContents'
import EnhancedSidebar from '@/components/layout/EnhancedSidebar'
import ResponsiveMainLayout from '@/components/layout/ResponsiveMainLayout'
import ReadingEnhancer from '@/components/reading/ReadingEnhancer'
import EnhancedReadingProgress from '@/components/article/EnhancedReadingProgress'
import ArticleHeader from '@/components/article/ArticleHeader'
import Breadcrumb from '@/components/article/Breadcrumb'
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
  const seenIds = new Map<string, number>()
  const headingRegex = /^#{2,4}\s+(.+?)(?:\s*\{#([\w-]+)\})?\s*$/gm
  let match
  while ((match = headingRegex.exec(source)) !== null) {
    const rawLevel = match[0].match(/^(#+)/)?.[1].length ?? 2
    const text = match[1].trim()
    let id = match[2] ?? slugify(text)
    if (text) {
      // 处理重复 id，确保每个 id 都是唯一的
      if (seenIds.has(id)) {
        const count = seenIds.get(id)! + 1
        seenIds.set(id, count)
        id = `${id}-${count}`
      } else {
        seenIds.set(id, 0)
      }
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

function calculateWordCount(text: string): number {
  // 移除 frontmatter
  const fmRegex = /^---\r?\n[\s\S]*?\r?\n---[\r\n\s]*/
  const content = text.replace(fmRegex, '')
  
  // 移除代码块
  const codeBlockRegex = /```[\s\S]*?```/g
  const textWithoutCode = content.replace(codeBlockRegex, '')
  
  // 移除 Markdown 语法
  const markdownChars = /[#*`~\[\]()>_|!]/g
  const plainText = textWithoutCode.replace(markdownChars, ' ')
  
  // 匹配中文字符（连续的中文算一个词）
  const chineseChars = plainText.match(/[\u4e00-\u9fa5]/g) || []
  
  // 匹配英文单词
  const englishWords = plainText.match(/[a-zA-Z]+/g) || []
  
  // 总字数 = 中文字符数 + 英文单词数
  return chineseChars.length + englishWords.length
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
  let frontmatterData: Record<string, unknown> = {}
  let wordCount = 0

  try {
    // 读取原始文件内容用于计算字数
    const rawContent = fs.readFileSync(sourcePath, 'utf-8')
    const parsed = parseFrontmatter(rawContent)
    frontmatterData = parsed.data
    wordCount = calculateWordCount(rawContent)

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

  // 提取 frontmatter 中的元信息
  const title = typeof frontmatterData.title === 'string' ? frontmatterData.title : ''
  const description = typeof frontmatterData.description === 'string' ? frontmatterData.description : undefined
  const tags = Array.isArray(frontmatterData.tags) ? frontmatterData.tags as string[] : []
  const difficulty = typeof frontmatterData.difficulty === 'string' ? frontmatterData.difficulty : undefined
  const status = typeof frontmatterData.status === 'string' ? frontmatterData.status : undefined
  const date = typeof frontmatterData.date === 'string' ? frontmatterData.date : undefined

  return (
    <ResponsiveMainLayout
      groups={sidebarGroups}
      currentPath={currentPath}
    >
      <div className={styles.docShell}>
        <div className={styles.docMainColumn}>
          <article className={`${styles.article} docArticle`}>
            <div className={styles.docTopMeta}>
              <Breadcrumb />
            </div>

            <ArticleHeader
              title={title}
              description={description}
              tags={tags}
              difficulty={difficulty}
              status={status}
              publishDate={date}
              wordCount={wordCount}
            />

            <div className={`${styles.content} docContent`}>{content}</div>
          </article>
        </div>

        <aside className={`${styles.tocAside} doc-toc-panel`} aria-label="页面目录">
          <TableOfContents items={toc} />
        </aside>
      </div>

      <ReadingEnhancer />
      <EnhancedReadingProgress />
    </ResponsiveMainLayout>
  )
}