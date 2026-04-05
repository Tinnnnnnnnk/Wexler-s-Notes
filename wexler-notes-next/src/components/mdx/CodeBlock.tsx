// src/components/mdx/CodeBlock.tsx
'use client'
import { useState } from 'react'
import styles from './MDXComponents.module.css'

interface CodeBlockProps {
  children?: React.ReactNode
  className?: string
}

function getCodeContent(node: React.ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  const el = node as { props?: { children?: React.ReactNode } }
  if (el.props) return getCodeContent(el.props.children)
  if (Array.isArray(node)) return node.map(getCodeContent).join('')
  return ''
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const language = className?.replace(/^language-/, '') ?? ''
  const code = getCodeContent(children)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <div className={styles.codeBlock}>
      {language && <span className={styles.codeLang}>{language}</span>}
      <button
        type="button"
        className={`${styles.copyBtn} ${copied ? styles.copySuccess : ''}`}
        onClick={handleCopy}
        aria-label="Copy code"
      >
        {copied ? '✓ Copied!' : 'Copy'}
      </button>
      <pre>{children}</pre>
    </div>
  )
}
