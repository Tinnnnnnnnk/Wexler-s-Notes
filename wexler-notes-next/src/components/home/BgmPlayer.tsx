// src/components/home/BgmPlayer.tsx
'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from './BgmPlayer.module.css'

type BgmPlayerVariant = 'floating' | 'stage'

interface BgmPlayerProps {
  variant?: BgmPlayerVariant
}

interface BgmSource {
  src: string
  type: string
}

const BGM_SOURCE_TEMPLATES: BgmSource[] = [
  { src: '/media/home-bgm/liquid-bgm.ogg', type: 'audio/ogg' },
  { src: '/media/home-bgm/liquid-bgm.opus', type: 'audio/ogg; codecs=opus' },
  { src: '/media/home-bgm/liquid-bgm.mp3', type: 'audio/mpeg' },
  { src: '/media/home-bgm/liquid-bgm.flac', type: 'audio/flac' },
]

const BGM_TITLE = '60% Reverie'
const BGM_ARTIST = 'ZZ-STUDIO x HOYO-MiX'

function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

function detectRuntimeBasePath(): string {
  if (typeof window === 'undefined') return ''

  const script = document.querySelector('script[src*="/_next/"]') as HTMLScriptElement | null
  const src = script?.src
  if (!src) return ''

  try {
    const url = new URL(src, window.location.origin)
    const idx = url.pathname.indexOf('/_next/')
    if (idx > 0) {
      return url.pathname.slice(0, idx)
    }
  } catch {
    return ''
  }

  return ''
}

function buildBgmSources(basePath: string): BgmSource[] {
  const prefixed = basePath
    ? BGM_SOURCE_TEMPLATES.map((item) => ({ ...item, src: `${basePath}${item.src}` }))
    : []

  const merged = [...prefixed, ...BGM_SOURCE_TEMPLATES]
  const dedup = new Set<string>()
  const result: BgmSource[] = []

  for (const item of merged) {
    if (dedup.has(item.src)) continue
    dedup.add(item.src)
    result.push(item)
  }

  return result
}

export default function BgmPlayer({ variant = 'floating' }: BgmPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.45)
  const [isMini, setIsMini] = useState(false)
  const [showVolume, setShowVolume] = useState(false)
  const [isSeeking, setIsSeeking] = useState(false)
  const [playError, setPlayError] = useState<string | null>(null)
  const [allFailed, setAllFailed] = useState(false)
  const [hasAttemptedPlay, setHasAttemptedPlay] = useState(false)
  const [runtimeBasePath, setRuntimeBasePath] = useState('')

  useEffect(() => {
    setRuntimeBasePath(detectRuntimeBasePath())
  }, [])

  const bgmSources = useMemo(() => buildBgmSources(runtimeBasePath), [runtimeBasePath])

  const syncState = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    setIsPlaying(!audio.paused && !audio.ended)
    setDuration(Number.isFinite(audio.duration) ? audio.duration : 0)
    if (!isSeeking) {
      setCurrentTime(Number.isFinite(audio.currentTime) ? audio.currentTime : 0)
    }
  }, [isSeeking])

  const handleAudioError = useCallback(() => {
    setAllFailed(true)
    setIsPlaying(false)
    if (hasAttemptedPlay) {
      setPlayError('音频文件加载失败，请检查 /media/home-bgm/ 目录是否存在有效音频文件')
    }
  }, [hasAttemptedPlay])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    setHasAttemptedPlay(true)

    if (allFailed) {
      setAllFailed(false)
      setPlayError(null)
      audio.load()
    }

    if (audio.paused || audio.ended) {
      setPlayError(null)
      audio.play().catch((err) => {
        const name = typeof err?.name === 'string' ? err.name : ''
        if (name === 'NotAllowedError') {
          setPlayError('浏览器拦截了自动播放，请手动点击播放按钮')
        } else {
          setPlayError(`播放失败: ${err?.message ?? '未知错误'}`)
        }
        setIsPlaying(false)
      })
    } else {
      audio.pause()
    }
  }, [allFailed])

  const seekBy = useCallback((delta: number) => {
    const audio = audioRef.current
    if (!audio) return
    const maxDuration = Number.isFinite(audio.duration) ? audio.duration : 0
    const next = clamp((Number.isFinite(audio.currentTime) ? audio.currentTime : 0) + delta, 0, maxDuration)
    audio.currentTime = next
    setCurrentTime(next)
  }, [])

  const handleSeekInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value))
    setIsSeeking(true)
  }

  const handleSeekCommit = (
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>,
  ) => {
    const audio = audioRef.current
    if (!audio) return
    const target = e.currentTarget as HTMLInputElement
    audio.currentTime = Number(target.value)
    setCurrentTime(audio.currentTime)
    setIsSeeking(false)
  }

  const handleVolumeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = clamp(Number(e.target.value) / 100, 0, 1)
    setVolume(next)
    const audio = audioRef.current
    if (!audio) return
    audio.volume = next
    audio.muted = next <= 0.001
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    audio.muted = volume <= 0.001
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    return () => {
      if (!audio) return
      audio.pause()
      audio.currentTime = 0
      audio.removeAttribute('src')
      audio.load()
    }
  }, [])

  const isMuted = volume <= 0.001
  const volumePct = Math.round(volume * 100)

  return (
    <div className={`${styles.wrapper} ${variant === 'stage' ? styles.stageWrapper : ''}`}>
      <div className={`${styles.player} ${isMini ? styles.mini : ''} ${variant === 'stage' ? styles.stagePlayer : ''}`}>
        {playError && <p className={styles.errorHint}>{playError}</p>}

        <div className={styles.top}>
          <button
            type="button"
            className={styles.miniToggle}
            aria-label={isMini ? '展开播放器' : '最小化播放器'}
            onClick={() => {
              setIsMini((prev) => !prev)
              if (!isMini) setShowVolume(false)
            }}
          >
            <span className={`${styles.miniIcon} ${isMini ? styles.miniIconMini : ''}`} />
          </button>

          <div className={styles.transport}>
            <button type="button" className={styles.ctrl} aria-label="后退 10 秒" onClick={() => seekBy(-10)}>
              <span className={styles.seekBack} />
            </button>
            <button
              type="button"
              className={`${styles.ctrl} ${styles.ctrlMain} ${allFailed ? styles.ctrlDisabled : ''}`}
              aria-label={isPlaying ? '暂停' : '播放'}
              onClick={togglePlay}
            >
              {isPlaying ? <span className={styles.pauseIcon} /> : <span className={styles.playIcon} />}
            </button>
            <button type="button" className={styles.ctrl} aria-label="前进 10 秒" onClick={() => seekBy(10)}>
              <span className={styles.seekForward} />
            </button>
          </div>

          <button
            type="button"
            className={`${styles.volumeToggle} ${showVolume ? styles.volumeActive : ''}`}
            aria-label="音量控制"
            onClick={() => {
              if (!isMini) setShowVolume((prev) => !prev)
            }}
          >
            <span className={`${styles.volumeIcon} ${isMuted ? styles.volumeMuted : ''}`} />
          </button>
        </div>

        {!isMini && <p className={styles.track}>{BGM_TITLE} · {BGM_ARTIST}</p>}

        <div className={styles.timeline}>
          <span className={styles.time}>{formatDuration(currentTime)}</span>
          <input
            className={styles.slider}
            type="range"
            min={0}
            max={Math.max(duration, 0.1)}
            value={currentTime}
            step={0.1}
            aria-label="播放进度"
            onChange={handleSeekInput}
            onMouseUp={handleSeekCommit}
            onTouchEnd={handleSeekCommit}
          />
          <span className={styles.time}>{formatDuration(duration)}</span>
        </div>

        {showVolume && !isMini && (
          <div className={styles.volumeRow}>
            <span className={`${styles.volumeIcon} ${isMuted ? styles.volumeMuted : ''}`} />
            <input
              className={styles.volumeSlider}
              type="range"
              min={0}
              max={100}
              value={volumePct}
              step={1}
              aria-label="音量"
              onChange={handleVolumeInput}
            />
            <span className={styles.volumeValue}>{volumePct}</span>
          </div>
        )}
      </div>

      <audio
        ref={audioRef}
        preload="metadata"
        loop
        onPlay={syncState}
        onPause={syncState}
        onTimeUpdate={syncState}
        onLoadedMetadata={syncState}
        onCanPlay={() => {
          if (!hasAttemptedPlay) return
          setPlayError(null)
          setAllFailed(false)
        }}
        onEnded={syncState}
        onError={handleAudioError}
      >
        {bgmSources.map((item) => (
          <source key={item.src} src={item.src} type={item.type} />
        ))}
      </audio>
    </div>
  )
}
