// src/lib/telemetry/schema.ts
// Telemetry event schema - no PII allowed

export type EventName =
  | 'page_view'
  | 'fx_mode_switch'
  | 'layout_mode_switch'
  | 'toc_click'
  | 'sidebar_search'
  | 'image_lightbox_open'
  | 'bgm_play'
  | 'bgm_pause'
  | 'bgm_seek'
  | 'editor_open'
  | 'editor_publish'
  | 'editor_export'
  | 'editor_rollback'
  | 'editor_add_block'
  | 'editor_delete_block'
  | 'editor_patch_block'

export interface BaseEvent {
  event: EventName
  timestamp: string
  visitorId: string
  sessionId: string
  url: string
}

export interface PageViewEvent extends BaseEvent {
  event: 'page_view'
  referrer?: string
  title?: string
}

export interface FxModeSwitchEvent extends BaseEvent {
  event: 'fx_mode_switch'
  from: string
  to: string
}

export interface LayoutModeSwitchEvent extends BaseEvent {
  event: 'layout_mode_switch'
  from: string
  to: string
}

export interface TocClickEvent extends BaseEvent {
  event: 'toc_click'
  headingId: string
  headingText: string
}

export interface SidebarSearchEvent extends BaseEvent {
  event: 'sidebar_search'
  query: string
  resultsCount: number
}

export interface ImageLightboxEvent extends BaseEvent {
  event: 'image_lightbox_open'
  imageSrc: string
}

export interface BgmEvent extends BaseEvent {
  event: 'bgm_play' | 'bgm_pause' | 'bgm_seek'
  trackName?: string
  seekPosition?: number
}

export interface EditorEvent extends BaseEvent {
  event: 'editor_open' | 'editor_publish' | 'editor_export' | 'editor_rollback' | 'editor_add_block' | 'editor_delete_block' | 'editor_patch_block'
  route?: string
  blockId?: string
  details?: string
}

export type TelemetryEvent =
  | PageViewEvent
  | FxModeSwitchEvent
  | LayoutModeSwitchEvent
  | TocClickEvent
  | SidebarSearchEvent
  | ImageLightboxEvent
  | BgmEvent
  | EditorEvent

// Whitelist of allowed event names
export const ALLOWED_EVENTS: EventName[] = [
  'page_view',
  'fx_mode_switch',
  'layout_mode_switch',
  'toc_click',
  'sidebar_search',
  'image_lightbox_open',
  'bgm_play',
  'bgm_pause',
  'bgm_seek',
  'editor_open',
  'editor_publish',
  'editor_export',
  'editor_rollback',
  'editor_add_block',
  'editor_delete_block',
  'editor_patch_block',
]

export function isAllowedEvent(event: string): event is EventName {
  return ALLOWED_EVENTS.includes(event as EventName)
}
