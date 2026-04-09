// src/lib/mdx.ts
// MDX serialization using next-mdx-remote/rsc
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { MDXFrontmatter } from '@/types/mdx'
import { slugifyHeading } from '@/lib/heading'

type MdNode = {
  type?: string
  value?: string
  depth?: number
  children?: MdNode[]
  data?: {
    id?: string
    hProperties?: Record<string, unknown>
  }
  alt?: string
  title?: string
}

function extractNodeText(node: MdNode | undefined): string {
  if (!node) return ''

  const t = node.type
  if (t === 'text' || t === 'inlineCode' || t === 'code') {
    return node.value ?? ''
  }
  if (t === 'image') {
    return node.alt ?? node.title ?? ''
  }

  if (!Array.isArray(node.children) || node.children.length === 0) {
    return ''
  }

  return node.children.map((child) => extractNodeText(child)).join('')
}

function walk(node: MdNode | undefined, visit: (node: MdNode) => void): void {
  if (!node) return
  visit(node)
  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      walk(child, visit)
    }
  }
}

function remarkHeadingIds() {
  return (tree: MdNode) => {
    const seen = new Map<string, number>()

    walk(tree, (node) => {
      if (node.type !== 'heading') return
      if (typeof node.depth !== 'number' || node.depth < 2 || node.depth > 4) return

      const text = extractNodeText(node).trim()
      if (!text) return

      let id = slugifyHeading(text)
      if (!id) return

      if (seen.has(id)) {
        const count = seen.get(id)! + 1
        seen.set(id, count)
        id = `${id}-${count}`
      } else {
        seen.set(id, 0)
      }

      node.data ??= {}
      node.data.hProperties ??= {}
      node.data.id = id
      node.data.hProperties.id = id
    })
  }
}

/**
 * Pre-process MDX source to fix HTML-to-JSX compatibility issues.
 */
function preprocessSource(source: string): string {
  let inCodeBlock = false
  let codeBlockMarker = ''

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

    if (!inCodeBlock) {
      let fixed = line

      // Fix 1: class= -> className=
      fixed = fixed.replace(/<([a-z][a-z0-9]*)\s+class=/gi, '<$1 className=')

      // Fix 1.1: escape comparisons in inline math span content
      // Example: <span className="math-inline">0 <= n</span>
      fixed = fixed.replace(
        /<span\s+className=(["'])math-inline\1>([\s\S]*?)<\/span>/gi,
        (_full, quote: string, content: string) => {
          const safe = content
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
          return `<span className=${quote}math-inline${quote}>${safe}</span>`
        },
      )

      // Fix 2: standalone empty fragment
      fixed = fixed.replace(/^(\s*)<>\s*$/, '$1<span></span>')

      // Fix 3: bare empty generic marker
      fixed = fixed.replace(/<>/g, '&lt;&gt;')

      result.push(fixed)
    } else {
      result.push(line)
    }
  }

  return result.join('\n')
}

export async function serializeMDX(
  source: string,
  components?: Record<string, React.ComponentType>,
) {
  try {
    const processed = preprocessSource(source)

    const { content, frontmatter } = await compileMDX<MDXFrontmatter>({
      source: processed,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkHeadingIds],
        },
      },
      components,
    })
    return { content, frontmatter }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[serializeMDX] compileMDX error:', err)
    throw err
  }
}
