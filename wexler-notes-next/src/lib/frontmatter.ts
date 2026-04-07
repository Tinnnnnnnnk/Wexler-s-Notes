// src/lib/frontmatter.ts
// Standalone frontmatter parser for MDX content
// This module is isolated to prevent any bundling issues during Next.js SSG.

/**
 * Parse frontmatter from raw MDX content.
 *
 * Root cause: gray-matter misidentifies HR "---" inside the document body
 * as the frontmatter closing delimiter.
 *
 * Key fix: strict regex requires "---" to be on its own line at the very
 * start of the file (line 1), with mandatory newlines after both delimiters.
 *
 * @returns {{ data, body }}
 */
export function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const fmRegex = /^---\r?\n([\s\S]*?)\r?\n---[\r\n\s]*/
  const match = raw.match(fmRegex)
  if (!match) {
    return { data: {}, body: raw }
  }
  const yamlContent = match[1]
  const data: Record<string, unknown> = {}
  for (const line of yamlContent.split('\n')) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/)
    if (kv) {
      const key = kv[1].trim()
      let value: unknown = kv[2].trim()
      if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      } else if (typeof value === 'string' && value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1)
      }
      data[key] = value
    }
  }
  const bodyStart = match.index! + match[0].length
  return { data, body: raw.slice(bodyStart) }
}
