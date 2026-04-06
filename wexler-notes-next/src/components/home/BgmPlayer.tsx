// src/components/home/BgmPlayer.tsx
'use client'
import { useRef, useState, useCallback, useEffect } from 'react'
import styles from './BgmPlayer.module.css'

const BGM_SRC = '/media/home-bgm/liquid-bgm.opus'
const BGM_TITLE = '60% Reverie'
const BGM_ARTIST = 'ZZ-STUDIO x HOYO-MiX'

function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '00:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export default function BgmPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.45)
  const [isMini, setIsMini] = useState(false)
  const [showVolume, setShowVolume] = useState(false)
  const [isSeeking, setIsSeeking] = useState(false)

  const syncState = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    setIsPlaying(!audio.paused && !audio.ended)
    setDuration(Number.isFinite(audio.duration) ? audio.duration : 0)
    if (!isSeeking) {
      setCurrentTime(Number.isFinite(audio.currentTime) ? audio.currentTime : 0)
    }
  }, [isSeeking])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused || audio.ended) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [])

  const seekBy = useCallback((delta: number) => {
    const audio = audioRef.current
    if (!audio) return
    const max = Number.isFinite(audio.duration) ? audio.duration : 0
    const target = Math.min(Math.max((Number.isFinite(audio.currentTime) ? audio.currentTime : 0) + delta, 0), max)
    audio.currentTime = target
    setCurrentTime(target)
  }, [])

  const handleSeekInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value))
    setIsSeeking(true)
  }

  const handleSeekCommit = (e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return
    const target = e.currentTarget as HTMLInputElement
    audio.currentTime = Number(target.value)
    setCurrentTime(audio.currentTime)
    setIsSeeking(false)
  }

  const handleVolumeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value) / 100
    setVolume(v)
    const audio = audioRef.current
    if (audio) {
      audio.volume = v
      audio.muted = v <= 0.001
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    audio.muted = volume <= 0.001
  }, [volume])

  const isMuted = volume <= 0.001
  const volumePct = Math.round(volume * 100)

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.player} ${isMini ? styles.mini : ''}`}>
        <div className={styles.top}>
          <button
            type="button"
            className={styles.miniToggle}
            aria-label={isMini ? '展开播放器' : '最小化播放器'}
            onClick={() => { setIsMini((p) => !p); if (!isMini) setShowVolume(false) }}
          >
            <span className={`${styles.miniIcon} ${isMini ? styles.miniIconMini : ''}`} />
          </button>

          <div className={styles.transport}>
            <button type="button" className={styles.ctrl} aria-label="后退10秒" onClick={() => seekBy(-10)}>
              <span className={styles.seekBack} />
            </button>
            <button type="button" className={`${styles.ctrl} ${styles.ctrlMain}`} aria-label={isPlaying ? '暂停' : '播放'} onClick={togglePlay}>
              {isPlaying ? <span className={styles.pauseIcon} /> : <span className={styles.playIcon} />}
            </button>
            <button type="button" className={styles.ctrl} aria-label="前进10秒" onClick={() => seekBy(10)}>
              <span className={styles.seekForward} />
            </button>
          </div>

          <button
            type="button"
            className={`${styles.volumeToggle} ${showVolume ? styles.volumeActive : ''}`}
            aria-label="音量控制"
            onClick={() => { if (!isMini) setShowVolume((v) => !v) }}
          >
            <span className={`${styles.volumeIcon} ${isMuted ? styles.volumeMuted : ''}`} />
          </button>
        </div>

        {!isMini && (
          <p className={styles.track}>{BGM_TITLE} · {BGM_ARTIST}</p>
        )}

        <div className={styles.timeline}>
          <span className={styles.time}>{formatDuration(currentTime)}</span>
          <input
            className={styles.slider}
            type="range"
            min={0}
            max={Math.max(duration, 0.1)}
            value={currentTime}
            step={0.1}
            aria-label="进度"
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
        src={BGM_SRC}
        onPlay={syncState}
        onPause={syncState}
        onTimeUpdate={syncState}
        onLoadedMetadata={syncState}
        onEnded={syncState}
      />
    </div>
  )
}
