# 阶段7：可观测性与A/B实验报告

**项目**: Wexler's Notes (Next.js 全栈知识库)
**子项目**: `wexler-notes-next`
**执行时间**: 2026-04-08
**执行人**: 阶段7执行AI
**报告版本**: v1.0

---

## 1. 执行摘要

本次阶段完成了埋点体系与 A/B 实验框架的建设。新增了 `telemetry` 模块（schema/client/session）和 `experiments` 模块。创建了 `/ops/insights` 可观测性页面用于展示统计信息。新增了 `Observability Experiments Check` CI workflow。**CI workflow 构建成功（Run ID `24131766247`）**，所有校验通过。

---

## 2. 修改文件清单

| 文件 | 操作 | 改了什么 | 为什么 |
|------|------|----------|--------|
| `src/lib/telemetry/schema.ts` | 新增 | 事件类型与字段约束 | 禁止PII采集 |
| `src/lib/telemetry/session.ts` | 新增 | 匿名visitorId/sessionId | 无状态追踪 |
| `src/lib/telemetry/client.ts` | 新增 | track API、队列、批量发送 | 统一埋点 |
| `src/lib/experiments/index.ts` | 新增 | A/B实验框架 | 配置化实验 |
| `public/experiments/experiments.json` | 新增 | 实验配置文件 | Homepage Hero CTA 实验 |
| `src/app/ops/insights/page.tsx` | 新增 | 可观测性页面 | 站内指标展示 |
| `scripts/telemetry-validate.ts` | 新增 | 埋点校验脚本 | 检查PII和schema |
| `scripts/experiments-validate.ts` | 新增 | 实验配置校验 | 校验JSON合法性 |
| `scripts/stage7-self-check.ts` | 新增 | 阶段7自检 | 串联校验 |
| `package.json` | 修改 | 添加 npm scripts | CLI入口 |
| `.github/workflows/observability-experiments-check.yml` | 新增 | CI门禁 | 自动化校验 |

---

## 3. 事件模型与埋点覆盖表

### 已覆盖事件
| 事件名 | 触发场景 | 字段 |
|--------|----------|------|
| `page_view` | 页面加载 | url, referrer, title |
| `fx_mode_switch` | 首页风格切换 | from, to |
| `layout_mode_switch` | 首页布局切换 | from, to |
| `toc_click` | 目录点击 | headingId, headingText |
| `sidebar_search` | 侧边栏搜索 | query, resultsCount |
| `image_lightbox_open` | 图片灯箱打开 | imageSrc |
| `bgm_play` | BGM播放 | trackName |
| `bgm_pause` | BGM暂停 | trackName |
| `bgm_seek` | BGM跳转 | trackName, seekPosition |
| `editor_open` | 编辑器打开 | route |
| `editor_publish` | 编辑器发布 | route |
| `editor_export` | 编辑器导出 | route |
| `editor_rollback` | 编辑器回滚 | route, details |
| `editor_add_block` | 添加模块 | route, blockId |
| `editor_delete_block` | 删除模块 | route, blockId |
| `editor_patch_block` | 修改模块属性 | route, blockId, details |

### 隐私保护
- ✅ 无 email/name/phone/IP 采集
- ✅ 匿名 visitorId/sessionId
- ✅ 数据仅本地缓存，可清除

---

## 4. A/B实验配置与结果

### Homepage Hero CTA 实验
| 配置项 | 值 |
|--------|-----|
| Key | `homepage-hero-cta` |
| Rollout | 50% |
| Start | 2026-04-01 |
| End | 2026-05-01 |
| Variants | control (50%), variant-a (50%) |
| Default | control |
| Conversion | page_view, sidebar_search |

### 分桶机制
- 使用 `visitorId + experimentKey` 哈希
- 稳定分桶（同一用户始终看到同一变体）
- 支持 URL 参数覆盖（仅开发模式）

---

## 5. /ops/insights 页面说明

### 功能
| 模块 | 数据来源 |
|------|----------|
| Build Metadata | `/build-meta.json` |
| Event Statistics | localStorage (wexler.telemetry.local) |
| Experiments | `/experiments/experiments.json` |

### 访问方式
- 开发环境：`http://localhost:3000/ops/insights`
- 生产环境：需在 `NEXT_PUBLIC_TELEMETRY_ENABLED=true` 时访问

---

## 6. CI 结果

### Observability Experiments Check Workflow
| 字段 | 值 |
|------|-----|
| Workflow ID | 257878014 |
| Run ID | **24131766247** |
| Run Link | https://github.com/Tinnnnnnnnk/Wexler-s-Notes/actions/runs/24131766247 |
| Commit SHA | `61d25a4552629c16386f43309a291b1904929b1c` |
| 状态 | **completed** |
| 结论 | **success** |

### CI 步骤明细
| Step | 状态 |
|------|------|
| Checkout | ✓ |
| Setup Node.js | ✓ |
| Install dependencies | ✓ |
| Run Lint | ✓ |
| Telemetry Validation | ✓ |
| Experiments Validation | ✓ |
| Stage 7 Self Check | ✓ |
| Build Next.js | ✓ |
| Upload Build Artifacts | ✓ |

---

## 7. 风险与后续建议

| 优先级 | 风险 | 说明 | 建议 |
|--------|------|------|------|
| **P2** | 无后端分析能力 | 仅本地缓存 | 后续接入分析服务 |
| **P2** | 实验数据需人工统计 | 事件统计在页面上手动查看 | 可导出JSON分析 |
| **P3** | 采样率配置需调优 | 当前全量采集 | 流量大时可降低采样率 |

---

## 8. 阶段结论

### 是否进入阶段8：`可以`

**理由**：
1. ✅ **Telemetry 可用**：schema/client/session 全套实现，无PII
2. ✅ **A/B实验框架**：配置化、可开关、可控流量、稳定分桶
3. ✅ **可观测性页面**：`/ops/insights` 展示核心状态
4. ✅ **CI门禁通过**：Observability workflow Run ID 24131766247 success
5. ✅ **自检通过**：lint 0 errors + 所有校验 PASSED

---

## 附录：新增命令清单

```bash
# 埋点与实验命令
npm --prefix wexler-notes-next run telemetry:validate    # 校验埋点schema
npm --prefix wexler-notes-next run experiments:validate # 校验实验配置
npm --prefix wexler-notes-next run stage7:self-check   # 阶段7自检

# 直接使用 tsx
cd wexler-notes-next
npx tsx scripts/telemetry-validate.ts
npx tsx scripts/experiments-validate.ts
npx tsx scripts/stage7-self-check.ts
```

---

**报告生成时间**: 2026-04-08
**CI 验证链接**: https://github.com/Tinnnnnnnnk/Wexler-s-Notes/actions/runs/24131766247
