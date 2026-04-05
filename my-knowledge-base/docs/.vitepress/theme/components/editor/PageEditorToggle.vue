<script setup>
import { computed, onMounted } from 'vue'
import {
  editorGuardState,
  getEditorGuardStatus,
  initEditorState,
  isEditorMode,
  lockEditorAccess,
  toggleEditorMode,
  unlockEditorAccess
} from '../../stores/editorState'

onMounted(() => {
  initEditorState()
})

const guard = computed(() => editorGuardState.value)
const isLocked = computed(() => guard.value.locked === true)
const isBlocked = computed(() => !guard.value.allowEditor && !guard.value.locked)
const canShowLockButton = computed(() => guard.value.requiresSecret && guard.value.unlocked)

const toggleTitle = computed(() => {
  if (isBlocked.value) return guard.value.message || '当前环境不可用'
  if (isLocked.value) return '输入口令解锁编辑模式'
  return isEditorMode.value ? '关闭编辑模式' : '开启编辑模式'
})

const toggleAriaLabel = computed(() => {
  if (isBlocked.value) return '页面编辑模式不可用'
  if (isLocked.value) return '输入口令解锁页面编辑模式'
  return isEditorMode.value ? '关闭页面编辑模式' : '开启页面编辑模式'
})

function handleToggleClick() {
  const status = getEditorGuardStatus()
  if (!status.allowEditor && status.locked) {
    const secret = window.prompt('请输入编辑模式口令')
    if (secret === null) return
    const unlockResult = unlockEditorAccess(secret)
    if (!unlockResult.ok) {
      window.alert(unlockResult.message || '口令错误')
      return
    }
  }

  const result = toggleEditorMode()
  if (result && !result.ok) {
    window.alert(result.message || '当前环境不可开启编辑模式')
  }
}

function handleLockClick() {
  lockEditorAccess()
}
</script>

<template>
  <div class="page-editor-toggle-group">
    <button
      type="button"
      class="page-editor-toggle"
      :class="{
        'is-active': isEditorMode,
        'is-locked': isLocked,
        'is-disabled': isBlocked
      }"
      :disabled="isBlocked"
      :aria-label="toggleAriaLabel"
      :title="toggleTitle"
      @click="handleToggleClick"
    >
      <span class="page-editor-toggle__icon" aria-hidden="true" />
      <span class="page-editor-toggle__state" />
    </button>

    <button
      v-if="canShowLockButton"
      type="button"
      class="page-editor-lock"
      aria-label="锁定页面编辑模式"
      title="锁定编辑模式"
      @click="handleLockClick"
    >
      <span class="page-editor-lock__icon" aria-hidden="true" />
    </button>
  </div>
</template>
