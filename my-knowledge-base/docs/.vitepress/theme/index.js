import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ReadingEnhancer from './components/ReadingEnhancer.vue'
import './style.css' // 引入刚才写的 CSS

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ReadingEnhancer)
    })
  }
}
