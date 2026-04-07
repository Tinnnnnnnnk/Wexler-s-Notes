// src/lib/contentPath.ts
import fs from 'fs'
import path from 'path'

function firstExistingPath(candidates: string[]): string | null {
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

export function resolveContentDir(): string {
  const candidates = [
    path.join(process.cwd(), 'src', 'content'),
    path.join(process.cwd(), 'wexler-notes-next', 'src', 'content'),
  ]
  return firstExistingPath(candidates) ?? candidates[0]
}

export function decodeSlugSegment(seg: string): string {
  try {
    return decodeURIComponent(seg)
  } catch {
    return seg
  }
}

