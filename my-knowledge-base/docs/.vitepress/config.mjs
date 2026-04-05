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
const IGNORED_LIST = [
  '.DS_Store', 
  'images', 
  'public', 
  'index.md', 
  '.vitepress', 
  '.obsidian',
  'Info',
  'jpg',
  'png',
  'img',
  'assets',
  // Next.js 重构阶段文档，不参与 VitePress 构建
  'MyWeb'
]

// 🎸 核心黑魔法 1: 递归扫描子目录
function generateSidebarItems(dirPath, basePath = '') {
  const fullPath = path.join(DOCS_ROOT, dirPath)
  if (!fs.existsSync(fullPath)) return []

  const files = fs.readdirSync(fullPath)
  files.sort((a, b) => {
    const numA = parseInt(a.split('-')[0]) || 999
    const numB = parseInt(b.split('-')[0]) || 999
    return numA - numB
  })

  const items = []
  files.forEach(file => {
    if (IGNORED_LIST.includes(file)) return
    const filePath = path.join(fullPath, file)
    try {
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        items.push({
          text: file,
          collapsed: false,
          items: generateSidebarItems(path.join(dirPath, file), basePath)
        })
      } else if (file.endsWith('.md')) {
        const fileName = file.replace('.md', '')
        const link = path.join('/', dirPath, fileName).replace(/\\/g, '/')
        items.push({
          text: fileName,
          link: link
        })
      }
    } catch (e) {
      return 
    }
  })
  return items
}

// 🎸 核心黑魔法 2: 扫描根目录
function getRootSidebarGroups() {
  const files = fs.readdirSync(DOCS_ROOT)
  files.sort((a, b) => {
    const numA = parseInt(a.split('-')[0]) || 999
    const numB = parseInt(b.split('-')[0]) || 999
    return numA - numB
  })

  const groups = []
  files.forEach(file => {
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
  ignoreDeadLinks: true,
  // 删除了所有重复的 title 和 description
  // 删除了导致 SSR 崩溃的 vite external 错误配置
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
      { text: '🎨 风格实验室', link: '/Style-Lab/00-风格入口' },
    ],

    sidebar: getRootSidebarGroups(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tinnnnnnnnk' }
    ],

    footer: {
      message: 'Powered by VitePress & Kira-Kira Magic',
      copyright: 'Copyright © 2024-present Wexler'
    },
    
    editLink: {
      pattern: 'https://github.com/Tinnnnnnnnk/Wexler-s-Notes/edit/main/my-knowledge-base/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})
