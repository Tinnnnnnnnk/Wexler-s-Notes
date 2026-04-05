// src/components/editor/EditorPanel.tsx
// Right-side property panel for selected block — migrated from EditableHomeCanvas.vue
'use client'
import type { Block, EditorValidationResult } from '@/types/editor'
import styles from './EditorPanel.module.css'

interface EditorPanelProps {
  selectedBlockId: string
  blocks: Block[]
  validation: EditorValidationResult | null
  onPatch: (patch: Partial<Block>) => void
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  )
}

export default function EditorPanel({ selectedBlockId, blocks, validation, onPatch }: EditorPanelProps) {
  const selected = blocks.find((b) => b.id === selectedBlockId)

  if (!selectedBlockId) {
    return (
      <div className={styles.panel}>
        <p className={styles.hint}>点击画布上的模块以编辑属性</p>
      </div>
    )
  }

  return (
    <div className={styles.panel}>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>文本内容</p>
        <Field label="前缀标签">
          <input
            className={styles.input}
            value={selected?.kicker ?? ''}
            onChange={(e) => onPatch({ kicker: e.target.value })}
            placeholder="Module"
          />
        </Field>
        <Field label="标题">
          <input
            className={styles.input}
            value={selected?.title ?? ''}
            onChange={(e) => onPatch({ title: e.target.value })}
            placeholder="Untitled"
          />
        </Field>
        <Field label="正文">
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            value={selected?.body ?? ''}
            onChange={(e) => onPatch({ body: e.target.value })}
            placeholder="Editable content block"
            rows={4}
          />
        </Field>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionTitle}>尺寸与透明度</p>
        <div className={styles.row}>
          <Field label="宽度">
            <input
              type="range" min={180} max={1200} step={12}
              className={styles.slider}
              value={selected?.w ?? 420}
              onChange={(e) => onPatch({ w: Number(e.target.value) })}
            />
            <span className={styles.value}>{selected?.w}px</span>
          </Field>
          <Field label="高度">
            <input
              type="range" min={90} max={900} step={12}
              className={styles.slider}
              value={selected?.h ?? 180}
              onChange={(e) => onPatch({ h: Number(e.target.value) })}
            />
            <span className={styles.value}>{selected?.h}px</span>
          </Field>
        </div>
        <Field label="透明度">
          <input
            type="range" min={0.05} max={1} step={0.05}
            className={styles.slider}
            value={selected?.opacity ?? 0.9}
            onChange={(e) => onPatch({ opacity: Number(e.target.value) })}
          />
          <span className={styles.value}>{Math.round((selected?.opacity ?? 0.9) * 100)}%</span>
        </Field>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionTitle}>外观样式</p>
        <div className={styles.row}>
          <Field label="圆角">
            <input
              type="range" min={0} max={60} step={2}
              className={styles.slider}
              value={selected?.radius ?? 16}
              onChange={(e) => onPatch({ radius: Number(e.target.value) })}
            />
            <span className={styles.value}>{selected?.radius}px</span>
          </Field>
          <Field label="模糊">
            <input
              type="range" min={0} max={24} step={1}
              className={styles.slider}
              value={selected?.blur ?? 0}
              onChange={(e) => onPatch({ blur: Number(e.target.value) })}
            />
            <span className={styles.value}>{selected?.blur}px</span>
          </Field>
        </div>
        <Field label="背景色">
          <input
            type="color"
            className={styles.colorInput}
            value="#10203a"
            onChange={(e) => onPatch({ bg: e.target.value })}
          />
        </Field>
        <Field label="文字色">
          <input
            type="color"
            className={styles.colorInput}
            value="#f3f7fc"
            onChange={(e) => onPatch({ color: e.target.value })}
          />
        </Field>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionTitle}>图层列表</p>
        <div className={styles.layerList}>
          {[...blocks].sort((a, b) => b.z - a.z).map((block) => (
            <button
              key={block.id}
              type="button"
              className={`${styles.layerItem} ${block.id === selectedBlockId ? styles.layerActive : ''}`}
              onClick={() => {}}
            >
              {block.title || block.kicker || block.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
