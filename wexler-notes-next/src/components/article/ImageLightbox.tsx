// src/components/article/ImageLightbox.tsx
// 图片灯箱组件 - 支持点击放大、拖拽、缩放

'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import styles from './ImageLightbox.module.css'

interface ImageLightboxProps {
  src: string
  alt?: string
  caption?: string
  onClose?: () => void
}

export default function ImageLightbox({ src, alt = '', caption, onClose }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const posStartRef = useRef({ x: 0, y: 0 })

  const handleOpen = useCallback(() => {
    setIsOpen(true)
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setLoaded(false)
    if (onClose) onClose()
  }, [onClose])

  const handleZoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + 0.5, 4))
  }, [])

  const handleZoomOut = useCallback(() => {
    setZoom((prev) => {
      const next = Math.max(prev - 0.5, 0.5)
      if (next < 1) {
        setPosition({ x: 0, y: 0 })
      }
      return next
    })
  }, [])

  const handleReset = useCallback(() => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  // 键盘事件
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          handleClose()
          break
        case '+':
        case '=':
          handleZoomIn()
          break
        case '-':
          handleZoomOut()
          break
        case '0':
          handleReset()
          break
        case 'ArrowLeft':
          setPosition((prev) => ({ ...prev, x: prev.x + 50 }))
          break
        case 'ArrowRight':
          setPosition((prev) => ({ ...prev, x: prev.x - 50 }))
          break
        case 'ArrowUp':
          setPosition((prev) => ({ ...prev, y: prev.y + 50 }))
          break
        case 'ArrowDown':
          setPosition((prev) => ({ ...prev, y: prev.y - 50 }))
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleClose, handleZoomIn, handleZoomOut, handleReset])

  // 拖拽开始
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return
    e.preventDefault()
    setIsDragging(true)
    dragStartRef.current = { x: e.clientX, y: e.clientY }
    posStartRef.current = { ...position }
  }

  // 拖拽中
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return
      const dx = e.clientX - dragStartRef.current.x
      const dy = e.clientY - dragStartRef.current.y
      setPosition({
        x: posStartRef.current.x + dx,
        y: posStartRef.current.y + dy,
      })
    },
    [isDragging]
  )

  // 拖拽结束
  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  // 滚轮缩放
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.2 : 0.2
    setZoom((prev) => Math.max(0.5, Math.min(prev + delta, 4)))
  }, [])

  return (
    <>
      {/* 原图容器 */}
      <div
        ref={containerRef}
        className={styles.imageWrapper}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
      >
        <img
          src={src}
          alt={alt}
          className={styles.image}
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
        <div className={`${styles.zoomHint} ${loaded ? styles.visible : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
            <path d="M11 8v6M8 11h6"/>
          </svg>
          <span>点击放大</span>
        </div>
      </div>

      {/* 灯箱 */}
      {isOpen && (
        <div className={styles.lightbox} onClick={handleClose}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {/* 控制栏 */}
            <div className={styles.controls}>
              <div className={styles.zoomLevel}>{Math.round(zoom * 100)}%</div>
              <div className={styles.controlBtns}>
                <button onClick={handleZoomOut} title="缩小 (-)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                    <path d="M8 11h6"/>
                  </svg>
                </button>
                <button onClick={handleReset} title="重置 (0)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                  </svg>
                </button>
                <button onClick={handleZoomIn} title="放大 (+)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6"/>
                  </svg>
                </button>
                <span className={styles.divider} />
                <button onClick={handleClose} title="关闭 (Esc)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* 图片区域 */}
            <div
              className={`${styles.imageContainer} ${isDragging ? styles.dragging : ''}`}
              onMouseDown={handleMouseDown}
              onWheel={handleWheel}
            >
              <img
                src={src}
                alt={alt}
                className={styles.lightboxImage}
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                }}
                draggable={false}
              />
            </div>

            {/* 标题 */}
            {caption && <p className={styles.caption}>{caption}</p>}
          </div>
        </div>
      )}
    </>
  )
}