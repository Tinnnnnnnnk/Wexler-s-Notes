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

---

## 16. 执行前置约束（外部 AI 必须遵守）

## 16.1 不可破坏约束

1. 不得破坏现有 `main` 的 VitePress 生产链路，除非进入 Phase 6 且通过全部前置验收。
2. 不得修改 `my-knowledge-base/docs` 的内容事实源语义（可修格式，不可改业务内容含义）。
3. 不得使用破坏性 Git 指令：
   - `git reset --hard`
   - `git checkout -- <file>`
   - 强制推送覆盖他人提交
4. 不得将工作流长期维持为“双主链路同发版”状态。

## 16.2 执行日志约束

每个 Phase 结束时必须输出固定 6 项：

1. 修改文件清单（绝对路径）
2. 运行命令清单
3. 构建结果（成功/失败 + 关键日志）
4. 验收项结果（通过/不通过）
5. 风险项与剩余问题
6. 回滚点（Tag/Commit/目录快照位置）

## 16.3 提交约束

提交信息统一格式：

```text
feat(next-cutover): <phase-id> <summary>
```

示例：

```text
feat(next-cutover): P1 fix next build blockers
```

---

## 17. 环境矩阵与 Secrets 规范

## 17.1 运行环境矩阵

| 环境 | 操作系统 | 作用 | 必要组件 |
|---|---|---|---|
| 本地开发机 | Windows + PowerShell | 开发、调试、迁移脚本执行 | Node 20/22、Git |
| CI Runner | Ubuntu Latest | 自动构建与部署 | Node、rsync、ssh |
| 生产服务器 | Ubuntu 22.04 | 托管站点 | Nginx（静态）或 Node+Nginx（SSR） |

## 17.2 Secrets 命名规范（建议统一）

| Secret 名称 | 用途 | 示例格式 |
|---|---|---|
| `DEPLOY_HOST` | 服务器 IP/域名 | `150.158.xxx.xxx` |
| `DEPLOY_USER` | 部署用户 | `ubuntu` |
| `DEPLOY_PORT` | SSH 端口 | `22` |
| `DEPLOY_SSH_KEY` | 私钥全文 | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `DEPLOY_HOST_KEY` | known_hosts 指纹 | `150.158... ssh-ed25519 AAAA...` |
| `DEPLOY_PATH` | 部署目录 | `/var/www/wexler-next` |
| `NEXT_PUBLIC_SITE_URL` | 站点 URL | `https://example.com` |

## 17.3 环境变量使用原则

1. 前端可见变量一律 `NEXT_PUBLIC_*`。
2. 私密变量仅在 CI/服务器注入，不写死到仓库。
3. 所有变量必须在文档里维护“用途 + 示例 + 默认值”。

---

## 18. 详细任务卡（Task Card，可直接派发给 AI）

> 每张任务卡都包含：输入、操作、输出、验收、失败回滚

## T0 — 冻结基线

### 输入

- 当前 `main` 可用
- 当前服务器站点可访问

### 操作

```bash
git checkout main
git pull origin main
git tag vitepress-stable-$(date +%Y%m%d)-before-next-cutover
git push origin --tags
```

服务器备份（示例）：

```bash
sudo mkdir -p /opt/backup/wexler
sudo tar -czf /opt/backup/wexler/vitepress-$(date +%F-%H%M).tar.gz /var/www/wexler-notes
```

### 输出

- Git Tag
- 服务器备份 tar 包

### 验收

- tag 可在远端看到
- tar 包存在且可解压

### 回滚

- 切回 `main` + 使用备份目录恢复

---

## T1 — 建立迁移分支

### 操作

```bash
git checkout -b feat/next-cutover
git push -u origin feat/next-cutover
```

### 验收

- 远端分支存在

---

## T2 — 修复 Next 构建阻塞

### 输入

- `wexler-notes-next` 当前存在构建错误

### 操作要求

1. 修复 `CommandTrigger` 缺失引用问题（改引用或补组件）。
2. 修复 CSS 非法注释（`//` -> `/* */`）。
3. 修复所有阻断型 TS/构建错误。

本地验证命令：

```bash
cd wexler-notes-next
npm ci
npm run migrate
npm run build
npm run build
npm run build
```

### 验收

- 连续 3 次构建通过
- 无阻断错误

### 回滚

- 回退至 T1 commit

---

## T3 — 内容迁移脚本强化

### 输入

- `scripts/migrate-docs.ts` 可运行

### 操作要求

1. 增加迁移统计 JSON 报告（成功、失败、告警、耗时）。
2. 增加图片路径标准化策略：
   - Obsidian 附件路径
   - 相对路径
   - `/images` 公共路径
3. 迁移脚本支持幂等覆盖。

验证命令：

```bash
cd wexler-notes-next
npm run migrate
npm run migrate
```

### 验收

- 第二次运行结果与第一次一致（无异常新增错误）
- 报告文件存在

---

## T4 — 文档路由与元数据

### 操作要求

1. `src/app/docs/[...slug]/page.tsx` 能渲染所有目标内容。
2. 增加 `generateStaticParams`（若走静态导出）。
3. 增加 `sitemap.ts` 和基础 SEO 元信息。
4. 实现上一页/下一页导航（可选但推荐）。

### 验收

- 随机抽查 30 个路径全部可访问
- 首页、文档页、404 均正常

---

## T5 — 主页视觉迁移（三布局 + 三风格）

### 操作要求

1. 三布局模式完整迁移（Keynote/Workbench/Media）。
2. 三风格模式完整迁移（常态/晶透/液态）。
3. BGM 播放器具备：
   - 播放/暂停
   - 进度条
   - 音量控制
   - 缩放/最小化
4. 性能降级策略：
   - 低配/弱网自动降级动效
   - 视频背景可回落静态图

### 验收

- 切换无闪烁叠层问题
- 液态模式不卡死
- 移动端可用

---

## T6 — 编辑模式迁移

### 操作要求

1. 路由级草稿与发布分离。
2. 发布历史快照支持回滚。
3. 操作审计日志（audit）可导出。
4. 生产开关与 host 白名单可控。

### 验收

- 新增/拖拽/缩放/删除/撤销/重做可用
- 发布后刷新不丢状态
- 生产可通过环境变量禁用编辑模式

---

## T7 — 根目录 CI 切流

### 操作要求

1. 在仓库根 `.github/workflows` 落地 Next 主 workflow。
2. workflow 必须使用 `working-directory: wexler-notes-next`。
3. 禁止继续发布 VitePress 产物到主路径。

### 验收

- Push 到目标分支后，Next 构建部署成功
- 服务器产物正确覆盖

---

## T8 — 预发验证与正式切换

### 操作要求

1. 先部署到新目录（例如 `/var/www/wexler-next`）。
2. 临时域名或路径验证通过后，再切主域名。
3. 切换后观察 24 小时。

### 验收

- 无 P1/P2 故障
- 核心页面访问稳定

---

## T9 — 清理与归档

### 操作要求

1. 标记旧 VitePress 链路为归档状态。
2. 删除失效流程和重复脚本。
3. 产出最终迁移报告。

### 验收

- 仓库主链路唯一且清晰

---

## 19. 命令手册（按执行场景）

## 19.1 本地 Windows（PowerShell）命令

```powershell
# 进入仓库
Set-Location D:\Github\Wexler-s-Notes

# 拉最新
git checkout feat/next-cutover
git pull origin feat/next-cutover

# Next 构建验证
Set-Location .\wexler-notes-next
npm ci
npm run migrate
npm run build
```

## 19.2 服务器 Linux（静态部署）命令

```bash
# 准备目录
sudo mkdir -p /var/www/wexler-next
sudo chown -R ubuntu:ubuntu /var/www/wexler-next

# 验证目录
ls -la /var/www/wexler-next
```

## 19.3 服务器 Linux（SSR 部署，未来可选）

```bash
# 仅当采用 SSR 时
node -v
pm2 -v
```

---

## 20. 根目录 CI 工作流模板（推荐：Next 静态导出）

> 说明：这是“可直接落地”的模板，请按你的 Secrets 名称微调。

```yaml
name: Deploy Next

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: npm
          cache-dependency-path: wexler-notes-next/package-lock.json

      - name: Install deps
        working-directory: wexler-notes-next
        run: npm ci

      - name: Migrate docs
        working-directory: wexler-notes-next
        run: npm run migrate

      - name: Build
        working-directory: wexler-notes-next
        run: npm run build

      - name: Prepare SSH
        run: |
          mkdir -p ~/.ssh
          echo "${{ secrets.DEPLOY_SSH_KEY }}" > ~/.ssh/deploy_key
          chmod 600 ~/.ssh/deploy_key
          echo "${{ secrets.DEPLOY_HOST_KEY }}" > ~/.ssh/known_hosts

      - name: Rsync deploy
        run: |
          rsync -avz --delete \
            -e "ssh -i ~/.ssh/deploy_key -o StrictHostKeyChecking=no -p ${{ secrets.DEPLOY_PORT }}" \
            wexler-notes-next/out/ \
            ${{ secrets.DEPLOY_USER }}@${{ secrets.DEPLOY_HOST }}:${{ secrets.DEPLOY_PATH }}
```

---

## 21. Nginx 配置模板（静态模式）

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/wexler-next;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|webp|mp4|mp3|flac)$ {
        expires 7d;
        add_header Cache-Control "public, max-age=604800";
    }
}
```

---

## 22. 切流脚本与回滚脚本（模板）

## 22.1 切流脚本（示意）

```bash
#!/usr/bin/env bash
set -euo pipefail

OLD_PATH="/var/www/wexler-notes"
NEW_PATH="/var/www/wexler-next"
BACKUP_PATH="/opt/backup/wexler/switch-$(date +%F-%H%M).tar.gz"

sudo tar -czf "$BACKUP_PATH" "$OLD_PATH"
echo "[OK] backup: $BACKUP_PATH"

# 切换逻辑由 Nginx root 或软链实现（按你的服务器策略改）
sudo nginx -t
sudo systemctl reload nginx
echo "[OK] switched to next site"
```

## 22.2 回滚脚本（示意）

```bash
#!/usr/bin/env bash
set -euo pipefail

echo "[ROLLBACK] switch nginx root back to VitePress path"
sudo nginx -t
sudo systemctl reload nginx
echo "[OK] rollback done"
```

---

## 23. 故障决策树（执行 AI 必须按树排查）

## 23.1 构建失败

1. 先看错误类型：
   - Module not found
   - TS type error
   - CSS syntax error
   - 路由预渲染错误
2. 若是模块缺失：
   - 核对文件存在性
   - 核对路径别名
3. 若是 CSS：
   - 禁用 `//` 注释
   - 检查非法 token
4. 若是动态路由静态导出失败：
   - 核对 `generateStaticParams`

## 23.2 部署失败

1. ssh 认证失败 -> 检查 key/known_hosts
2. rsync 失败 -> 检查目录权限与路径
3. 上传成功但页面异常 -> 检查 Nginx root 与缓存

## 23.3 线上异常

1. 首页白屏 -> 先回滚再排查
2. 资源 404 -> 检查 base path / 输出目录
3. 部分路由 404 -> 检查静态导出路由覆盖

---

## 24. 验收用例库（最小 30 条）

## 24.1 内容渲染用例

1. 普通段落渲染
2. 标题层级（h1-h3）
3. 代码块高亮
4. 数学公式
5. 引用块/Callout
6. 表格
7. 图片（相对路径）
8. 图片（公共路径）
9. 中英文混排
10. 超长文档滚动

## 24.2 交互用例

1. 首页 3 布局切换
2. 首页 3 风格切换
3. 风格状态刷新保持
4. 液态播放器播放/暂停
5. 液态播放器拖动进度
6. 音量滑杆
7. 最小化/展开
8. 阅读进度条
9. 章节高亮
10. 编辑模式开关

## 24.3 发布链路用例

1. Obsidian 修改 md
2. Git push
3. GitHub Actions 成功
4. 服务器目录更新
5. 线上页面更新可见
6. 回滚验证

---

## 25. 交付物标准（给外部 AI 的硬指标）

每个阶段结束后必须提交：

1. 代码变更清单（文件列表）
2. 本地构建日志摘要
3. CI 运行截图或日志链接
4. 服务器验证结果（URL + 状态码）
5. 风险和下一阶段建议

最终必须提交：

1. 《迁移完成报告》
2. 《部署与回滚手册》
3. 《已知问题与后续优化清单》

---

## 26. 一次性交付给外部 AI 的“超详细提示词”

下面文本可直接复制给外部 AI：

```text
你现在是该项目的主执行工程师。请严格按照文档：
my-knowledge-base/MyWeb/11-NextJS-架构升级执行总手册.md
完成 Next 架构升级。

执行原则：
1) 必须保持 Obsidian -> GitHub -> 服务器 的更新链路不变。
2) 采用双轨并行迁移，禁止直接破坏 main 的 VitePress 生产链路。
3) 严格按 Task 卡 T0~T9 执行，每完成一个任务卡必须给出：
   - 变更文件清单
   - 运行命令
   - 构建结果
   - 验收结果
   - 风险与回滚点
4) 未通过当前任务验收，不得进入下一个任务。
5) 禁止使用破坏性 git 操作（reset --hard、强制覆盖等）。
6) CI 工作流必须放在仓库根 .github/workflows。
7) 如果需要取舍，优先保证：构建稳定 > 部署稳定 > 功能完整 > 动效精细。

技术目标：
- Next 项目在 wexler-notes-next
- 保证 npm run migrate && npm run build 可稳定通过
- 完成根目录 CI 切流与服务器发布
- 支持快速回滚
```

---

## 27. 版本化执行建议（防止文档失效）

建议每次执行后维护一个版本变更节：

1. `v1.0`：初始执行手册
2. `v1.1`：补充命令矩阵/回滚脚本
3. `v1.2`：补充故障决策树与验收用例

每次 AI 执行前先读最新版本，避免按旧步骤误操作。

