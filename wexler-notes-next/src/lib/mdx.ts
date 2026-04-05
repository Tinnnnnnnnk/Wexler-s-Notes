// src/lib/mdx.ts
// MDX serialization using next-mdx-remote/rsc

import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import type { MDXFrontmatter } from '@/types/mdx'

export async function serializeMDX(
  source: string,
  components?: Record<string, React.ComponentType>,
) {
  const { content, frontmatter } = await compileMDX<MDXFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
          rehypeKatex,
          [
            rehypePrettyCode,
            {
              theme: 'github-dark-dimmed',
              keepBackground: false,
            },
          ],
        ],
      },
    },
    components,
  })

  return { content, frontmatter }
}
