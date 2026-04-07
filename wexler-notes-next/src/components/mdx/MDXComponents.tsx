import { Callout } from './Callout'
import { CodeBlock } from './CodeBlock'
import { TableOfContents } from './TableOfContents'
import { Image } from './Image'
import styles from './MDXComponents.module.css'

function CalloutBlockquote({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement> & { 'data-callout'?: string }) {
  const firstChild = Array.isArray(children) ? children[0] : children
  const rawText = typeof firstChild === 'string' ? firstChild : ''
  const typeMatch = rawText.match(/\[!(note|tip|warning|danger)\]/i)
  const calloutType = (typeMatch?.[1]?.toLowerCase() as 'note' | 'tip' | 'warning' | 'danger') ?? 'note'

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

export const MDXComponents = {
  pre: CodeBlock,
  code: ({ children, className, ...rest }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) => (
    <code className={className} {...rest}>
      {children}
    </code>
  ),
  blockquote: CalloutBlockquote as unknown as React.ComponentType,
  table: StyledTable,
  img: Image as unknown as React.ComponentType,
}
