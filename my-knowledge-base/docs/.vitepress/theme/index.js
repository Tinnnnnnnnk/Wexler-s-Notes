import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ReadingEnhancer from './components/core/ReadingEnhancer.vue'
import HomeFxBackdrop from './components/home-lab/HomeFxBackdrop.vue'
import HomeFxToggle from './components/home-lab/HomeFxToggle.vue'
import EditableHomeCanvas from './components/editor/EditableHomeCanvas.vue'
import PageEditorToggle from './components/editor/PageEditorToggle.vue'
import DocExperienceEnhancer from './components/core/DocExperienceEnhancer.vue'
import CommandPalette from './components/core/CommandPalette.vue'
import HomeLayoutToggle from './components/home-lab/HomeLayoutToggle.vue'
import HomeLayoutScenes from './components/home-lab/HomeLayoutScenes.vue'
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
