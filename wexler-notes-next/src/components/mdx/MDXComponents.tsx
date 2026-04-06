// MDXComponents.tsx
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import { Callout } from './Callout'
import { CodeBlock } from './CodeBlock'
import { TableOfContents } from './TableOfContents'
import styles from './MDXComponents.module.css'

/**
 * Detects [!type] in the first line of a blockquote to determine callout type.
 * The type is passed as a prop from the migration, but we also peek at the
 * first child text to serve as the title.
 */
function CalloutBlockquote({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement> & { 'data-callout'?: string }) {
  // Migration passes type via data-callout attribute (stripped by the migration
  // regex, but we can detect it from the first text child as fallback)
  const firstChild = Array.isArray(children) ? children[0] : children
  const rawText = typeof firstChild === 'string' ? firstChild : ''
  const typeMatch = rawText.match(/\[!(note|tip|warning|danger)\]/i)
  const calloutType = (typeMatch?.[1]?.toLowerCase() as 'note' | 'tip' | 'warning' | 'danger') ?? 'note'

  // Strip the [!type] marker from the rendered body
  function stripMarker(child: React.ReactNode): React.ReactNode {
    if (typeof child === 'string') {
      return child.replace(/\[!(note|tip|warning|danger)\]\s*/gi, '').trim()
    }
    return child
  }

  const filtered = Array.isArray(children) ? children.map(stripMarker) : stripMarker(children)

  return <Callout type={calloutType}>{filtered}</Callout>
}

function StyledTable({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table} {...props}>
        {children}
      </table>
    </div>
  )
}

export const MDXComponents: MDXComponentsType = {
  pre: CodeBlock,
  code: ({ children, className, ...rest }) => (
    <code className={className} {...rest}>
      {children}
    </code>
  ),
  blockquote: CalloutBlockquote as unknown as MDXComponentsType['blockquote'],
  table: StyledTable,
}

export { Callout, CodeBlock, TableOfContents }
