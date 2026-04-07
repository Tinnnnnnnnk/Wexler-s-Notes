// src/components/mdx/Image.tsx
'use client'

import { useCallback, useEffect, useState } from 'react'
import styles from './Image.module.css'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
}

interface LightboxState {
  visible: boolean
  index: number
}

export function Image({ src, alt = '', ...props }: ImageProps) {
  const [lb, setLb] = useState<LightboxState>({ visible: false, index: 0 })
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const imgs = Array.from(
      document.querySelectorAll<HTMLImageElement>('.docContent img[data-lightbox]'),
    ).map((img) => img.src)
    if (src) setImages(imgs)
  }, [src])

  const openLightbox = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    const index = images.indexOf(src)
    setLb({ visible: true, index: Math.max(0, index) })
  }, [images, src])

  const closeLightbox = useCallback(() => {
    setLb((prev) => ({ ...prev, visible: false }))
  }, [])

  const prevImage = useCallback(() => {
    if (!images.length) return
    setLb((prev) => ({ ...prev, index: (prev.index - 1 + images.length) % images.length }))
  }, [images.length])

  const nextImage = useCallback(() => {
    if (!images.length) return
    setLb((prev) => ({ ...prev, index: (prev.index + 1) % images.length }))
  }, [images.length])

  useEffect(() => {
    if (!lb.visible) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [closeLightbox, lb.visible, nextImage, prevImage])

  return (
    <>
      <img
        {...props}
        src={src}
        alt={alt}
        data-lightbox="true"
        onClick={openLightbox}
        style={{ cursor: 'zoom-in', ...props.style }}
        loading="lazy"
      />
      {lb.visible && (
        <div
          className={styles.overlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="图片查看器"
        >
          <img
            className={styles.img}
            src={images[lb.index] ?? src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                className={`${styles.nav} ${styles.prev}`}
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                aria-label="上一张"
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.nav} ${styles.next}`}
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                aria-label="下一张"
              >
                ›
              </button>
            </>
          )}

          <button
            type="button"
            className={styles.close}
            onClick={closeLightbox}
            aria-label="关闭"
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
