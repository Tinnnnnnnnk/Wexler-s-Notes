// src/components/mdx/MDXComponents.tsx
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import { Callout } from './Callout'
import { CodeBlock } from './CodeBlock'
import { TableOfContents } from './TableOfContents'
import styles from './MDXComponents.module.css'

function parseCalloutType(text: string): 'note' | 'tip' | 'warning' | 'danger' {
  const match = text.match(/\[!(note|tip|warning|danger)\]/i)
  return (match?.[1]?.toLowerCase() as 'note' | 'tip' | 'warning' | 'danger') ?? 'note'
}

function CalloutBlockquote({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
  const firstChild = Array.isArray(children) ? children[0] : children
  const text = typeof firstChild === 'string' ? firstChild : ''
  const type = parseCalloutType(text)

  const filtered = Array.isArray(children)
    ? children.map((child) => {
        if (typeof child === 'string') return child.replace(/\[!(note|tip|warning|danger)\]/gi, '').trim()
        return child
      })
    : children

  return (
    <Callout type={type}>
      {filtered}
    </Callout>
  )
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
  blockquote: CalloutBlockquote,
  table: StyledTable,
}

export { Callout, CodeBlock, TableOfContents }
