// src/lib/mdx.ts
// MDX serialization using next-mdx-remote/rsc
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { MDXFrontmatter } from '@/types/mdx'

/**
 * Pre-process MDX source to fix HTML-to-JSX compatibility issues.
 *
 * Root cause: MDX v3 compiles content as JSX. Raw HTML attributes like `class="..."`
 * are invalid in JSX (must use `className="..."`), and bare `<` in text is treated
 * as the start of JSX elements (e.g. `<Integer>`, `<>` fragments).
 *
 * Approach: transform incompatible patterns BEFORE MDX compilation.
 * This runs for every page — no file modification needed. New MDX uploads
 * are automatically sanitized at runtime.
 *
 * IMPORTANT: Keep this in sync with fixMdxCompatibility() in migrate-docs.ts
 * and fix-existing-mdx.ts.
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

      // Fix 1: class= → className= (JSX attribute requirement)
      // `<span class="...">` → `<span className="...">`
      fixed = fixed.replace(/<([a-z][a-z0-9]*)\s+class=/gi, '<$1 className=')

      // Fix 2: empty <> fragment → <span></span> (prevents JSX parse errors)
      // Only converts standalone <> lines (not `<` in comparison operators)
      fixed = fixed.replace(/^(\s*)<>\s*$/, '$1<span></span>')

      // Fix 3: bare <> in text → escape to prevent JSX parse errors
      // e.g. "use `Deque<XXX> stack = new ArrayDeque<>()`" → `Deque&lt;XXX&gt; stack...`
      // Only escapes <> that are NOT inside a tag or code span
      // We match <> surrounded by non-word chars (comparison operators, type params)
      fixed = fixed.replace(/<>/g, '&lt;&gt;')
      // Restore <> inside inline code (backtick pairs) — those are already safe
      // But if the <> appeared as text content (not in code), we already escaped above

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
    // Pre-process source to fix HTML→JSX compatibility before compilation
    const processed = preprocessSource(source)

    const { content, frontmatter } = await compileMDX<MDXFrontmatter>({
      source: processed,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
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
