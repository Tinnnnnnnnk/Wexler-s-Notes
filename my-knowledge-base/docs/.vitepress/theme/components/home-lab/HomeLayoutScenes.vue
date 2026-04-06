<script setup>
import { computed, onMounted } from 'vue'
import { fxMode, layoutMode, initUiModeState } from '../../stores/uiModeState'

const activeMode = computed(() => layoutMode.value)
const isLiquid = computed(() => fxMode.value === 'liquid')

onMounted(() => {
  initUiModeState()
})
</script>

<template>
  <div class="home-lab">
    <section
      v-if="!isLiquid"
      class="home-scene home-scene--apple"
      :class="{ 'is-active': activeMode === 'minimal' }"
      :style="{ display: activeMode === 'minimal' ? 'block' : 'none' }"
    >
      <header class="scene-apple__hero">
        <p class="scene-apple__eyebrow">WEXLER'S NOTES · DIGITAL GARDEN</p>
        <h1>Build Once, Compound Forever</h1>
        <p>
          把算法、后端、部署、复盘沉淀成可复用知识系统。
          这不是临时笔记，而是可持续增长的工程资产。
        </p>
        <div class="scene-apple__actions">
          <a class="scene-btn scene-btn--solid" href="/Sky-Take-Out/00-后端开发知识大本营">进入知识库</a>
          <a class="scene-btn scene-btn--ghost" href="https://github.com/Tinnnnnnnnk/Wexler-s-Notes">查看 GitHub</a>
        </div>
      </header>

      <div class="scene-apple__band">
        <article>
          <strong>130+</strong>
          <span>技术笔记</span>
        </article>
        <article>
          <strong>v3</strong>
          <span>迭代体系</span>
        </article>
        <article>
          <strong>CI</strong>
          <span>自动部署</span>
        </article>
        <article>
          <strong>24/7</strong>
          <span>可访问</span>
        </article>
      </div>

      <div class="scene-apple__triptych">
        <a href="/PromptLearning/day1">
          <p>Prompt 系统</p>
          <h3>把 AI 协作流程工程化</h3>
        </a>
        <a href="/Code/DS/DFS">
          <p>算法训练</p>
          <h3>建立可迁移的解题模式</h3>
        </a>
        <a href="/网站修改指南">
          <p>站点演进</p>
          <h3>持续优化 UI、性能与交互</h3>
        </a>
      </div>

      <div class="scene-apple__rail">
        <a href="/Sky-Take-Out/04-服务器运维与容器化部署手册">Docker / 运维</a>
        <a href="/Resume/简历V3.0">简历资产</a>
        <a href="/面试笔记/MyWeb/构建过程end">构建复盘</a>
        <a href="/网站修改指南">站点文档</a>
      </div>
    </section>

    <section
      v-if="!isLiquid"
      class="home-scene home-scene--dashboard"
      :class="{ 'is-active': activeMode === 'dashboard' }"
      :style="{ display: activeMode === 'dashboard' ? 'block' : 'none' }"
    >
      <div class="scene-dash__layout">
        <aside class="scene-dash__side">
          <p class="scene-dash__label">Workspace</p>
          <h2>工程控制台</h2>
          <ul class="scene-dash__menu">
            <li><a href="/Sky-Take-Out/00-后端开发知识大本营">后端主线</a></li>
            <li><a href="/Code/DS/DFS">算法主线</a></li>
            <li><a href="/PromptLearning/day1">Prompt 主线</a></li>
            <li><a href="/网站修改指南">站点主线</a></li>
          </ul>
          <div class="scene-dash__hint">
            <p>目标</p>
            <strong>学习、编码、部署、复盘同一套闭环</strong>
          </div>
        </aside>

        <main class="scene-dash__main">
          <header class="scene-dash__hero">
            <p>Engineering Dashboard</p>
            <h1>把知识组织成可执行系统</h1>
            <a href="/面试笔记/MyWeb/构建过程end">查看最新改造记录</a>
          </header>

          <section class="scene-dash__kpi">
            <article>
              <span>Pipeline</span>
              <strong>Stable</strong>
              <p>GitHub Actions + rsync 部署链路</p>
            </article>
            <article>
              <span>Docs</span>
              <strong>Growing</strong>
              <p>Obsidian -> Git -> Web 持续同步</p>
            </article>
            <article>
              <span>Focus</span>
              <strong>Backend</strong>
              <p>Java / SpringBoot / MySQL 实战优先</p>
            </article>
          </section>

          <section class="scene-dash__matrix">
            <a href="/Sky-Take-Out/01-Web 前端全栈开发手册">
              <h3>前端协作</h3>
              <p>页面样式、组件扩展与用户体验优化。</p>
            </a>
            <a href="/Sky-Take-Out/02-Java 后端核心与 SpringBoot 实战手册">
              <h3>Java 后端</h3>
              <p>接口、服务层、业务抽象与稳定性治理。</p>
            </a>
            <a href="/Sky-Take-Out/03-数据持久化与 MyBatis 指南">
              <h3>数据层</h3>
              <p>MyBatis、SQL 设计、数据一致性实践。</p>
            </a>
            <a href="/Sky-Take-Out/04-服务器运维与容器化部署手册">
              <h3>部署运维</h3>
              <p>容器化、Nginx 与服务器迁移实操。</p>
            </a>
          </section>
        </main>
      </div>
    </section>

    <section
      v-if="!isLiquid"
      class="home-scene home-scene--media"
      :class="{ 'is-active': activeMode === 'editorial' }"
      :style="{ display: activeMode === 'editorial' ? 'block' : 'none' }"
    >
      <header class="scene-media__hero">
        <p class="scene-media__tag">DIGITAL GARDEN</p>
        <h1>Wexler's Notes</h1>
        <p>全栈开发与运维知识库 · 以工程交付为中心的个人技术宇宙</p>
        <div class="scene-media__cta">
          <a href="/面试笔记/MyWeb/构建过程end">阅读构建过程</a>
          <a href="/Sky-Take-Out/00-后端开发知识大本营">进入后端主线</a>
        </div>
      </header>

      <div class="scene-media__body">
        <article class="scene-media__feature">
          <p class="scene-media__eyebrow">Feature Story</p>
          <h2>从阿里云迁移腾讯云，重构自动部署链路</h2>
          <p>完成服务器迁移、资源路径优化、部署方式切换，站点逐步从“可用”进入“可持续演进”阶段。</p>
          <a href="/面试笔记/MyWeb/构建过程end">查看完整复盘</a>
        </article>

        <aside class="scene-media__stack">
          <a href="/Code/DS/DFS">
            <p>Algorithm</p>
            <h3>DFS/BFS/DP 训练专题</h3>
          </a>
          <a href="/PromptLearning/day1">
            <p>Workflow</p>
            <h3>AI 协作 Prompt 流程</h3>
          </a>
          <a href="/Resume/简历V3.0">
            <p>Portfolio</p>
            <h3>项目与简历资产沉淀</h3>
          </a>
        </aside>
      </div>

      <footer class="scene-media__ticker">
        <span>Java</span>
        <span>SpringBoot</span>
        <span>MySQL</span>
        <span>Docker</span>
        <span>Nginx</span>
        <span>VitePress</span>
        <span>GitHub Actions</span>
        <span>Obsidian</span>
      </footer>
    </section>
  </div>
</template>
