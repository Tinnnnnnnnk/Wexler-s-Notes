import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ReadingEnhancer from './components/ReadingEnhancer.vue'
import HomeFxBackdrop from './components/HomeFxBackdrop.vue'
import HomeFxToggle from './components/HomeFxToggle.vue'
import EditableHomeCanvas from './components/EditableHomeCanvas.vue'
import PageEditorToggle from './components/PageEditorToggle.vue'
import DocExperienceEnhancer from './components/DocExperienceEnhancer.vue'
import CommandPalette from './components/CommandPalette.vue'
import HomeLayoutToggle from './components/HomeLayoutToggle.vue'
import HomeLayoutScenes from './components/HomeLayoutScenes.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeLayoutScenes', HomeLayoutScenes)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => [
        h(HomeFxBackdrop),
        h(EditableHomeCanvas),
        h(ReadingEnhancer),
        h(DocExperienceEnhancer),
        h(CommandPalette)
      ],
      'nav-bar-content-after': () => [h(HomeFxToggle), h(HomeLayoutToggle), h(PageEditorToggle)]
    })
  }
}
