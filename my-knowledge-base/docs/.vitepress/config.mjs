import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 1. 获取绝对路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DOCS_ROOT = path.resolve(__dirname, '..')

// 🚫 定义全局忽略列表 (黑名单)
// 只要文件夹名字出现在这里，不管是根目录还是子目录，统统跳过！
const IGNORED_LIST = [
  '.DS_Store', 
  'images', 
  'public', 
  'index.md', 
  '.vitepress', 
  '.obsidian',
  'Info',      // 你之前的 Info 文件夹
  'jpg',       // 👈 新增：你的图片文件夹
  'png',       // 预防性新增
  'img',       // 预防性新增
  'assets'     // 预防性新增
]

// 🎸 核心黑魔法 1: 递归扫描子目录 (生成 items)
function generateSidebarItems(dirPath, basePath = '') {
  const fullPath = path.join(DOCS_ROOT, dirPath)
  
  // 容错：如果文件夹被删了或者路径不对，直接返回空
  if (!fs.existsSync(fullPath)) return []

  const files = fs.readdirSync(fullPath)

  // 排序：数字优先
  files.sort((a, b) => {
    const numA = parseInt(a.split('-')[0]) || 999
    const numB = parseInt(b.split('-')[0]) || 999
    return numA - numB
  })

  const items = []

  files.forEach(file => {
    // 🛑 检查是否在黑名单里
    if (IGNORED_LIST.includes(file)) return

    const filePath = path.join(fullPath, file)
    
    // 容错：有些系统文件可能没有权限读，try-catch 一下更稳健
    try {
      const stat = fs.statSync(filePath)
      
      // 如果是文件夹 -> 递归
      if (stat.isDirectory()) {
        items.push({
          text: file,
          collapsed: false,
          items: generateSidebarItems(path.join(dirPath, file), basePath)
        })
      } 
      // 如果是 Markdown 文件 -> 生成链接
      else if (file.endsWith('.md')) {
        const fileName = file.replace('.md', '')
        const link = path.join('/', dirPath, fileName).replace(/\\/g, '/')
        items.push({
          text: fileName,
          link: link
        })
      }
    } catch (e) {
      // 遇到读不到的文件直接跳过
      return 
    }
  })

  return items
}

// 🎸 核心黑魔法 2: 扫描根目录 (生成大分组)
function getRootSidebarGroups() {
  const files = fs.readdirSync(DOCS_ROOT)

  files.sort((a, b) => {
    const numA = parseInt(a.split('-')[0]) || 999
    const numB = parseInt(b.split('-')[0]) || 999
    return numA - numB
  })

  const groups = []

  files.forEach(file => {
    // 🛑 根目录也要检查黑名单 (比如 .vitepress, images)
    // 另外：以 . 开头的文件 (如 .git) 也跳过
    if (file.startsWith('.') || IGNORED_LIST.includes(file)) return

    const filePath = path.join(DOCS_ROOT, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      groups.push({
        text: file, 
        collapsed: false,
        items: generateSidebarItems(file)
      })
    }
  })

  return groups
}

// --- 配置开始 ---
export default defineConfig({
  // 🚫 开启这个，不再检查死链 (针对你之前的报错)
  ignoreDeadLinks: true,
  vite: {
    build: {
      rollupOptions: {
        // 把所有图片格式都标记为“外部依赖”，强行阻止 Rollup 报错
        external: [/\.png$/i, /\.jpe?g$/i, /\.gif$/i, /\.svg$/i, /\.webp$/i]
      }
    }
  },

  title: "Wexler's Notes",
  description: "全栈开发与运维知识库",
  lastUpdated: true,
  cleanUrls: true,
  title: "Wexler's Notes",
  description: "全栈开发与运维知识库",
  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    config: (md) => {
      md.use(markdownItMathjax3)
    },
    lineNumbers: true
  },

  themeConfig: {
    search: { provider: 'local' },
    logo: '/images/logo.jpg', 
    
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📚 核心知识库', link: '/Sky-Take-Out/00-后端开发知识大本营' },
    ],

    // 全自动侧边栏
    sidebar: getRootSidebarGroups(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的GitHub用户名' }
    ],

    footer: {
      message: 'Powered by VitePress & Kira-Kira Magic',
      copyright: 'Copyright © 2024-present Wexler'
    },
    
    editLink: {
      pattern: 'https://github.com/你的GitHub用户名/你的仓库名/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})