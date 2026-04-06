# Wexler's Notes — Next.js 架构升级执行总手册（可直接交付 AI 执行）

> 目标读者：你本人 + 外部 AI 执行者  
> 文档定位：不是概念文档，而是“可按步骤执行、可验收、可回滚”的工程手册  
> 核心约束：**必须保留现有 Obsidian -> GitHub -> 服务器 的稳定更新链路**

---

## 0. 执行摘要（先看这个）

你当前仓库已经出现了 Next.js 子项目（`wexler-notes-next`），但生产主链路仍是 VitePress。  
这说明你现在是“**双轨并存**”，不是“**已完成切流**”。

本手册采用的策略是：

1. **双轨并行迁移**（先修好 Next，再切流）
2. **零停机切换**（先在新路径验证，再改主路径）
3. **可逆部署**（任意一步都能回退到 VitePress）
4. **阶段验收**（每阶段必须可量化通过）

---

## 1. 当前基线（必须统一认知）

### 1.1 当前生产链路（稳定）

- 内容源：`my-knowledge-base/docs/**/*.md`（你通过 Obsidian 编辑）
- 构建器：VitePress
- CI：根目录 `.github/workflows/deploy.yml`
- 部署方式：构建后 rsync 到服务器静态目录
- 线上状态：可用且稳定

### 1.2 当前 Next 资产（已有但未接管）

- 子项目目录：`wexler-notes-next/`
- `next.config.ts` 已存在
- `src/app` 路由已存在（App Router）
- `scripts/migrate-docs.ts` 已存在（将旧 docs 迁移到 `src/content`）
- 子目录下有自己的 workflow：`wexler-notes-next/.github/workflows/deploy.yml`

### 1.3 当前已知阻塞（先修）

在切流前先保证 Next 可以稳定 `build`，你当前至少有以下阻塞：

1. 组件引用缺失：`@/components/command/CommandTrigger` 不存在（Navbar 仍引用）
2. CSS 语法错误：`CommandPalette.module.css` 第一行使用了 `//` 注释
3. CI 生效路径问题：GitHub 只读取仓库根 `.github/workflows`，子目录 workflow 不会自动接管主部署

---

## 2. 架构目标定义（升级后要达到什么）

## 2.1 功能目标

1. 保留 Obsidian 写作流程不变
2. Markdown 内容可以自动渲染为 Next 页面
3. 首页主题、布局切换、编辑模式等能力迁移到 Next
4. 部署后可稳定访问，且支持一键回滚

## 2.2 工程目标

1. 构建可重复（CI 每次可稳定通过）
2. 部署可追踪（版本、变更、日志可查）
3. 代码可维护（避免把 Next 写成“VitePress 兼容层屎山”）
4. 性能可观测（LCP、CLS、JS 体积、构建时长有基线）

## 2.3 非目标（本次不做）

1. 不强制上完整 Headless CMS
2. 不做用户登录/权限系统
3. 不做多租户后台
4. 不引入 Redis / ES 等重型组件（除非你后续明确需要）

---

## 3. 目标技术路线（必须先定）

## 3.1 推荐路线：先静态导出，再按需升级 SSR

对于你当前“个人知识库 + 4核4G 服务器 + 重视稳定”的场景，推荐：

1. **第一阶段：Next 静态导出（SSG）**
   - 优点：和你当前 VitePress 的部署模型接近
   - 优点：资源占用低、回滚简单、迁移风险最低
2. **第二阶段：只在必要页面引入 SSR/动态能力**
   - 比如未来要用户系统、服务端鉴权、在线编辑落库时再做

## 3.2 不推荐一步到位全 SSR 的原因

1. 迁移复杂度陡增
2. 线上故障面变大（Node 进程、PM2、反向代理、健康检查）
3. 你当前核心诉求是“保持写作链路稳定”，不是先做复杂后端平台

---

## 4. 升级后架构蓝图

```text
Obsidian(本地) 
  -> Git Push
  -> GitHub(main)
  -> GitHub Actions(Next Build)
  -> 产物 rsync 到服务器
  -> Nginx 提供站点
```

如果第二阶段改 SSR：

```text
Obsidian -> GitHub -> Actions -> 上传代码/镜像
-> 服务器 Next(Node) + Nginx 反代
```

---

## 5. 仓库与目录策略（避免后续混乱）

## 5.1 内容单一事实源（必须遵守）

统一规定：

1. Obsidian 仅写 `my-knowledge-base/docs`
2. Next 的 `src/content` 由脚本生成，不手工长期维护
3. 任何 AI 不得把“内容主写入点”改到 `src/content`

## 5.2 推荐目录形态（迁移完成后）

```text
/
  .github/workflows/
  my-knowledge-base/docs/            # 内容源（Obsidian）
  wexler-notes-next/
    src/app/
    src/components/
    src/content/                     # 迁移产物（由脚本刷新）
    scripts/migrate-docs.ts
```

## 5.3 分支策略

1. `main`：线上稳定分支
2. `feat/next-cutover`：Next 升级主分支
3. 每个阶段可拆 `feat/next-phase-x` 子分支
4. 每阶段通过后再合并，避免“大爆炸提交”

---

## 6. 分阶段执行计划（核心）

> 总原则：每个阶段都要有 “输入 -> 操作 -> 输出 -> 验收 -> 回滚点”

## Phase 0：冻结基线与回滚锚点（0.5 天）

### 目标

为后续切流建立可回退锚点。

### 操作

1. 在 `main` 打标签：`vitepress-stable-YYYYMMDD`
2. 备份服务器当前发布目录（tar.gz）
3. 记录当前线上域名、Nginx 配置、部署路径
4. 记录当前 GitHub Secrets 清单

### 验收

1. 标签可见
2. 备份包可下载
3. 回滚命令演练通过（只演练，不执行切回）

---

## Phase 1：修复 Next 构建阻塞（0.5~1 天）

### 目标

让 `wexler-notes-next` 本地和 CI 都能稳定 `next build`。

### 操作清单

1. 修复缺失组件引用（`CommandTrigger`）
2. 修复 CSS 非法注释（`//` 改 `/* ... */`）
3. 统一 import 路径与文件命名大小写
4. 修复 TS 类型错误和 lint 错误
5. 消除多 lockfile 根路径警告（`outputFileTracingRoot` 或工作区策略）

### 强制命令（本地）

```bash
cd wexler-notes-next
npm ci
npm run migrate
npm run build
```

### 验收

1. 本地 `build` 连续 3 次通过
2. 无阻断型 TypeScript 错误
3. CI 构建日志可完整跑通

---

## Phase 2：内容迁移链路定型（1 天）

### 目标

保证 Obsidian 写完后，Next 能稳定读取与渲染内容。

### 操作清单

1. 强化 `scripts/migrate-docs.ts`：
   - frontmatter 保留
   - callout 转换稳定
   - 图片相对路径转换策略固定
2. 增加“增量迁移”能力（可选，但推荐）
3. 增加迁移报告文件（成功数/失败数/警告）
4. 建立 `migrate + build` 一体化流程

### 图片策略（必须明确）

1. 统一图片根目录规范：`public/images` 或 `public/media`
2. Markdown 图片链接统一转换规则
3. 禁止在文档中继续出现不可解析的本地绝对路径

### 验收

1. 随机抽查 20 篇笔记，标题、段落、代码块、数学公式、图片均可显示
2. 迁移脚本重复运行结果一致（幂等）

---

## Phase 3：文档路由/导航/搜索迁移（1~2 天）

### 目标

在 Next 中达到 VitePress 基础可用体验。

### 操作清单

1. 实现 `docs/[...slug]` 路由
2. 生成侧边栏树（替代 VitePress 自动 sidebar）
3. 标题锚点、目录高亮、阅读进度条迁移
4. 搜索索引生成与前端查询（Fuse.js）
5. 404、sitemap、robots 校验

### 验收

1. 任意旧链接可被映射到新路由（或有明确重定向）
2. 搜索可命中中文标题与正文关键词
3. 站点地图和 404 正常

---

## Phase 4：首页视觉系统迁移（1~2 天）

### 目标

把你当前核心视觉能力迁移到 Next，并保留风格切换。

### 操作清单

1. 迁移三种首页布局模式（Keynote / Workbench / Media）
2. 迁移三种视觉模式（常态 / 晶透 / 液态）
3. 迁移液态背景、BGM 播放器、性能降级策略
4. 明确层级协议（z-index token 化）

### 性能约束

1. 首屏不阻塞（背景视频懒加载）
2. BGM 不自动播放（用户交互触发）
3. 大文件资源采用压缩版本（音频优先处理）

### 验收

1. 主题切换无“闪一下消失”类问题
2. 液态模式不卡顿（至少无明显掉帧）
3. 移动端布局可用

---

## Phase 5：编辑模式迁移（1~2 天）

### 目标

在 Next 中恢复“页面元素可视化编辑”能力，且行为可控。

### 操作清单

1. 迁移 block schema（位置、尺寸、透明度、层级、文本）
2. 实现草稿/发布/历史快照/audit
3. 实现导入导出工程包（JSON）
4. 实现生产环境开关与 host 白名单控制

### 数据边界（强约束）

1. 默认仍存 localStorage（与你现有一致）
2. 不在本阶段引入服务端持久化
3. 结构版本号必须可迁移（schema version）

### 验收

1. 新增/拖拽/缩放/删除/撤销/回滚可用
2. 发布后刷新不丢失
3. 生产环境可按环境变量禁用编辑入口

---

## Phase 6：CI/CD 切流（1 天）

### 目标

把生产部署从 VitePress 切换到 Next（先预发、再正式）。

### 操作清单

1. 在仓库根 `.github/workflows` 新增/替换 Next 部署 workflow
2. 不再使用 VitePress 的 `docs:build` 作为主链路
3. 加入迁移脚本步骤：`npm run migrate`
4. 发布路径采用新目录（如 `/var/www/wexler-next`）
5. 支持保留旧站目录并行（便于快速回退）

### Secrets 清单（示例）

1. `DEPLOY_HOST`
2. `DEPLOY_USER`
3. `DEPLOY_PATH`
4. `DEPLOY_SSH_KEY`
5. `DEPLOY_HOST_KEY`
6. （可选）`NODE_ENV`

### 验收

1. Push 到 `main` 后自动部署成功
2. 服务器产物更新且页面可访问
3. 切流后可在 10 分钟内回退到旧站

---

## Phase 7：服务器切换与回滚演练（0.5~1 天）

### 目标

正式切换域名到 Next 站点，并完成回滚演练。

### 操作清单

1. Nginx 指向新发布目录（静态）或新反代 upstream（SSR）
2. 保留旧目录 7 天（最低）
3. 建立健康检查页面（`/health` 或静态检测页）
4. 记录切换时间点与回滚操作人

### 验收

1. 切换后 24 小时无 P1/P2 故障
2. 日志错误率在可接受范围
3. 回滚脚本可执行（演练一次）

---

## Phase 8：收尾与退役（0.5 天）

### 目标

让仓库干净、职责清晰，避免双架构长期并存。

### 操作清单

1. 标记 VitePress 目录为“只读历史”或归档
2. 清理无效脚本和旧 workflow
3. 更新文档入口，说明“生产已迁移 Next”
4. 新增《运维手册》《故障排查手册》

### 验收

1. 新人 30 分钟内能跑通本地开发和部署流程
2. 仓库不存在“两个主链路同时生效”的模糊状态

---

## 7. 关键文件映射表（给 AI 执行时用）

| 旧体系（VitePress） | 新体系（Next） | 迁移说明 |
|---|---|---|
| `my-knowledge-base/docs/.vitepress/config.mjs` | `wexler-notes-next/src/lib/site-config.ts`（建议新建） | 导航、站点元信息迁移 |
| `theme/index.js` | `src/app/layout.tsx` + `src/components/layout/*` | 全局布局插槽迁移 |
| `stores/uiModeState.js` | `src/stores/uiModeStore.ts`（或 Zustand/Context） | 风格状态统一管理 |
| `stores/editorState.js` | `src/stores/editorStore.ts` | 编辑模式状态机迁移 |
| `components/home-lab/*` | `src/components/home/*` | 首页模式与动效迁移 |
| `components/core/*` | `src/components/reading/*`/`command/*` | 阅读增强、命令面板 |
| `style.css` + `styles/*.css` | `src/app/globals.css` + `src/styles/*` | token 与层级规范迁移 |
| `.github/workflows/deploy.yml` | 根目录 Next 版 deploy workflow | 正式切流的关键点 |

---

## 8. CI/CD 目标模板（交付 AI 的最低要求）

> 注意：以下是“规范要求”，不是让你现在手动改。

1. Workflow 必须在仓库根 `.github/workflows/`
2. 包含以下阶段：
   - checkout
   - setup node
   - install
   - migrate docs
   - build
   - deploy (rsync/scp/docker 任选其一)
3. 部署必须支持 `--delete` 或等价策略（避免服务器旧文件残留）
4. 部署后必须有最小化健康检查（例如请求首页状态码）

---

## 9. 质量门禁（每个 PR 必须过）

### 9.1 编译门禁

1. `npm run build` 必须通过
2. 类型检查通过（若有 `tsc --noEmit`，必须通过）

### 9.2 内容门禁

1. 随机抽查 10 篇笔记渲染
2. 图片、代码块、数学公式至少各抽查 5 条

### 9.3 体验门禁

1. 首页三种布局都能切换
2. 三种风格都能切换且状态可记忆
3. 编辑模式在生产可配置关闭

### 9.4 部署门禁

1. CI 能从空缓存构建成功
2. 服务器部署后可访问
3. 回滚脚本可用

---

## 10. 风险清单与应对

### R1：内容迁移丢失格式

- 表现：callout、数学公式、图片路径异常
- 预防：迁移脚本单测 + 抽样回归
- 回退：内容源始终保留在 `my-knowledge-base/docs`

### R2：线上部署切流失败

- 表现：首页 500/404
- 预防：先部署到新目录并灰度验证
- 回退：Nginx 指回旧目录

### R3：多工作流冲突

- 表现：VitePress 和 Next workflow 同时发布
- 预防：切流当日只保留 1 条主部署 workflow

### R4：性能退化

- 表现：首页卡顿、首屏慢
- 预防：资源压缩 + 动效降级 + 懒加载

---

## 11. 回滚预案（必须提前写好）

## 11.1 回滚触发条件

满足任一即触发回滚：

1. 线上不可访问超过 5 分钟
2. 首页核心交互不可用
3. 部署后严重白屏/脚本错误无法快速修复

## 11.2 回滚动作

1. 服务器切回旧发布目录（VitePress）
2. 重新加载 Nginx
3. 在 GitHub 标记本次发布失败
4. 开启故障复盘单

## 11.3 回滚后动作

1. 冻结新版本部署
2. 收集日志与出错 commit
3. 修复后走预发再切流

---

## 12. 交付给“其他 AI”的执行说明（可直接复制）

下面这段你可以直接给外部 AI：

```text
你是我的执行工程师，请严格按“11-NextJS-架构升级执行总手册”推进。
约束：
1) 保留 Obsidian -> GitHub -> 服务器 的工作流。
2) 采用双轨并行迁移，不得直接破坏当前 VitePress 生产链路。
3) 每个 Phase 完成后必须给出：变更文件清单、构建结果、验收结果、风险与回滚点。
4) 没有通过验收前，不得进入下一 Phase。
5) 不得使用破坏性 git 命令（reset --hard 等）。

优先级：
P1 修构建阻塞 > P2 内容迁移稳定 > P3 路由/导航 > P4 首页与交互 > P5 编辑模式 > P6 CI/CD 切流。
```

---

## 13. 最终验收清单（上线前逐条打勾）

- [ ] Next 本地构建连续 3 次通过
- [ ] CI 构建 + 部署全通过
- [ ] 首页三布局、三风格、播放器可用
- [ ] 编辑模式可用，且生产可禁用
- [ ] 抽查笔记渲染正常（文本/代码/公式/图片）
- [ ] 搜索可用
- [ ] 服务器切流成功
- [ ] 回滚演练成功
- [ ] 运维文档已更新

---

## 14. 建议节奏（现实可执行）

在你当前基础上，推荐节奏：

1. Day 1：P0 + P1
2. Day 2：P2 + P3
3. Day 3：P4
4. Day 4：P5
5. Day 5：P6 + P7 + P8

如果外部 AI 持续在线且你配合测试，可压缩，但不要跳过验收环节。

---

## 15. 你现在马上可以做的 3 件事

1. 先锁定本手册作为唯一执行标准（避免多个 AI 各改一套）
2. 指定一个主分支 `feat/next-cutover` 专做迁移
3. 要求执行 AI 每完成一个 Phase 就提交“验收报告 + 回滚点”

---

> 结论：  
> 你完全可以在保留 Obsidian 同步习惯的前提下，把底层升级到 Next。  
> 真正决定成败的不是“是否能写出代码”，而是“是否按阶段验收 + 可回滚地切流”。

