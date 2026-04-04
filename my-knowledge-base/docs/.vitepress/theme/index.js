import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ReadingEnhancer from './components/ReadingEnhancer.vue'
import HomeFxBackdrop from './components/HomeFxBackdrop.vue'
import HomeFxToggle from './components/HomeFxToggle.vue'
import EditableHomeCanvas from './components/EditableHomeCanvas.vue'
import PageEditorToggle from './components/PageEditorToggle.vue'
import './style.css' // 引入刚才写的 CSS

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => [h(HomeFxBackdrop), h(EditableHomeCanvas), h(ReadingEnhancer)],
      'nav-bar-content-after': () => [h(HomeFxToggle), h(PageEditorToggle)]
    })
  }
}
