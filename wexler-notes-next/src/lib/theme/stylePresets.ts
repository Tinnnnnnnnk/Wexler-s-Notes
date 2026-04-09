// src/lib/theme/stylePresets.ts
// 首页风格预设配置中心 —— 所有风格元数据的唯一来源

import type { FxMode } from '@/types/uiMode'

/** 风格唯一标识 */
export type StylePresetId = FxMode

/** 风格视觉分类 */
export type StyleCategory = 'classic' | 'ambient' | 'creative' | 'entertainment'

/** 单个风格的完整元数据 */
export interface StylePreset {
  /** 唯一 ID */
  id: FxMode
  /** 中文名称 */
  labelZh: string
  /** 英文名称 */
  labelEn: string
  /** 一句话描述 */
  tagline: string
  /** 风格分类 */
  category: StyleCategory
  /** 是否使用视频背景（液态/晶透依赖视频） */
  hasVideo: boolean
  /** 是否启用 BGM（仅液态有 BGM） */
  hasBgm: boolean
  /** 是否需要 GPU 合成层（液滴/光晕等） */
  hasGpuLayer: boolean
  /** 视觉预览背景类型 */
  previewType: 'gradient' | 'neon' | 'rgb-flow' | 'anime' | 'stream' | 'solid'
  /** 预览主色调（用于生成 CSS 变量） */
  accentColor: string
  /** 次要色 */
  secondaryColor: string
  /** 暗色主色调 */
  darkAccentColor: string
  /** 暗色次要色 */
  darkSecondaryColor: string
}

/** 7 种风格完整预设 */
export const STYLE_PRESETS: Record<FxMode, StylePreset> = {
  default: {
    id: 'default',
    labelZh: '常态',
    labelEn: 'Default',
    tagline: '纯净留白，回归阅读本质',
    category: 'classic',
    hasVideo: false,
    hasBgm: false,
    hasGpuLayer: false,
    previewType: 'solid',
    accentColor: '#5d88a7',
    secondaryColor: '#c8d8e4',
    darkAccentColor: '#8baec8',
    darkSecondaryColor: '#2a3a4a',
  },
  glass: {
    id: 'glass',
    labelZh: '晶透',
    labelEn: 'Glass',
    tagline: '磨砂玻璃，通透层次感',
    category: 'ambient',
    hasVideo: true,
    hasBgm: false,
    hasGpuLayer: false,
    previewType: 'gradient',
    accentColor: '#8bb8d4',
    secondaryColor: '#d8e8f0',
    darkAccentColor: '#6a9ab8',
    darkSecondaryColor: '#1a2a38',
  },
  liquid: {
    id: 'liquid',
    labelZh: '液态',
    labelEn: 'Liquid',
    tagline: '流动背景与背景音乐，沉浸氛围',
    category: 'ambient',
    hasVideo: true,
    hasBgm: true,
    hasGpuLayer: true,
    previewType: 'gradient',
    accentColor: '#6fa4ce',
    secondaryColor: '#c0ddf0',
    darkAccentColor: '#5a8ab0',
    darkSecondaryColor: '#1a2a3a',
  },
  cyberpunk: {
    id: 'cyberpunk',
    labelZh: '赛博朋克',
    labelEn: 'Cyberpunk',
    tagline: '霓虹暗夜，高对比的科技感',
    category: 'creative',
    hasVideo: false,
    hasBgm: false,
    hasGpuLayer: false,
    previewType: 'neon',
    accentColor: '#ff2d78',
    secondaryColor: '#00f0ff',
    darkAccentColor: '#ff2d78',
    darkSecondaryColor: '#00f0ff',
  },
  rgb: {
    id: 'rgb',
    labelZh: 'RGB',
    labelEn: 'RGB Flow',
    tagline: '流光渐变边框，点亮视觉焦点',
    category: 'creative',
    hasVideo: false,
    hasBgm: false,
    hasGpuLayer: false,
    previewType: 'rgb-flow',
    accentColor: '#a855f7',
    secondaryColor: '#06b6d4',
    darkAccentColor: '#c084fc',
    darkSecondaryColor: '#22d3ee',
  },
  anime: {
    id: 'anime',
    labelZh: '动漫',
    labelEn: 'Anime',
    tagline: '干净明亮，日系插画感',
    category: 'entertainment',
    hasVideo: false,
    hasBgm: false,
    hasGpuLayer: false,
    previewType: 'anime',
    accentColor: '#f472b6',
    secondaryColor: '#a78bfa',
    darkAccentColor: '#f0abfc',
    darkSecondaryColor: '#c4b5fd',
  },
  stream: {
    id: 'stream',
    labelZh: '流媒体',
    labelEn: 'Stream',
    tagline: '层次卡片，横向内容节奏',
    category: 'entertainment',
    hasVideo: false,
    hasBgm: false,
    hasGpuLayer: false,
    previewType: 'stream',
    accentColor: '#f97316',
    secondaryColor: '#facc15',
    darkAccentColor: '#fb923c',
    darkSecondaryColor: '#fde047',
  },
}

/** 所有风格 ID 列表（有序） */
export const ALL_STYLE_IDS: FxMode[] = ['default', 'liquid', 'glass', 'cyberpunk', 'rgb', 'anime', 'stream']

/** 风格切换时 DOM 需清理的副作用 key */
export const FX_CLASSES: Record<FxMode, string> = {
  default: 'home-default-mode',
  glass: 'home-glass-mode',
  liquid: 'home-liquid-mode',
  cyberpunk: 'home-cyberpunk-mode',
  rgb: 'home-rgb-mode',
  anime: 'home-anime-mode',
  stream: 'home-stream-mode',
}

/**
 * 获取给定风格在当前是否为"高性能安全模式"应降级。
 * 规则：新增4风格默认无视频，仅 cyberpunk 需要 GPU 合成。
 */
export function needsGpuLayer(mode: FxMode): boolean {
  return mode === 'liquid'
}
