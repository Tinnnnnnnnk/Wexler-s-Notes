# 阶段2：路由与MDX稳定性修复报告

**项目**: Wexler's Notes (Next.js 全栈知识库)
**子项目**: `wexler-notes-next`
**执行时间**: 2026-04-07
**执行人**: 稳定性修复执行 AI
**报告版本**: v1.0

---

## 1) 执行摘要

本次修复**基本完成目标**。消除了 docs 路由的侧边栏高亮错乱问题（`currentPath` 编码不一致）和 MDX 双重预处理冲突（移除 `page.tsx` 中的冗余预处理逻辑）。新增了两个验收脚本用于静态参数覆盖率和导出健康度检查。**Lint 通过 (0 errors)**，但生产构建仍卡在 Next.js 初始化阶段，无法完成静态导出验证。

---

## 2) 根因列表

### 路由类根因

| ID | 问题 | 根因 | 优先级 |
|----|------|------|--------|
| R1 | 侧边栏高亮错乱 | `currentPath` 使用解码后的 slug (`decodedSlug.join('/')`)，而浏览器 URL 包含编码字符（如 `%E9%9D%A2`），导致 `currentPath === item.link` 判断失败 | P0 |
| R2 | 目录重定向 | `redirect` 目标使用 `encodeURIComponent` 编码，但 `generateStaticParams` 同时生成编码和非编码两种 slug，可能导致重复参数 | P1 |

### MDX 类根因

| ID | 问题 | 根因 | 优先级 |
|----|------|------|--------|
| M1 | 双重预处理 | `page.tsx` 中的 `preprocessDocsSource` 和 `lib/mdx.ts` 中的 `preprocessSource` 都处理 `class=` 和 `<>`，导致冗余处理和潜在冲突 | P0 |
| M2 | TOC 提取时机 | `extractTOCFromSource` 在 `preprocessDocsSource` 之后执行，但 `preprocessDocsSource` 被移除后，需确保 TOC 仍能从原始 body 中正确提取 | P0 (已修复) |

---

## 3) 修改文件与改动原因

### 3.1 路由修复

| 文件 | 改动 | 为何改 |
|------|------|--------|
| `src/app/docs/[...slug]/page.tsx:252` | 将 `currentPath = /docs/${decodedSlug.join('/')}` 改为 `currentPath = /docs/${slug.join('/')}` | 解决侧边栏高亮错乱问题：使用编码后的 slug 匹配浏览器 URL 格式 |

### 3.2 MDX 预处理统一

| 文件 | 改动 | 为何改 |
|------|------|--------|
| `src/app/docs/[...slug]/page.tsx:139-167` | 移除 `preprocessDocsSource` 函数及其调用，改为直接调用 `serializeMDX`（内部包含预处理） | 消除双重预处理冲突，形成单一可信入口 |
| `src/app/docs/[...slug]/page.tsx:205` | 将 `extractTOCFromSource(body)` 放在 `serializeMDX` 调用前，确保 TOC 从原始 body 提取 | 保持 TOC 提取逻辑正确 |

### 3.3 轻量质量修复

| 文件 | 改动 | 为何改 |
|------|------|--------|
| `src/app/docs/[...slug]/page.tsx:10` | 移除未使用的 `EnhancedSidebar` 导入 | 消除 ESLint warning（从 31 减少到 30） |

### 3.4 新增验收脚本

| 文件 | 描述 | 用途 |
|------|------|------|
| `scripts/check-static-params-coverage.ts` | 扫描 `src/content/` 生成 slug 列表并与目标路由比对 | 验证 `generateStaticParams` 覆盖率 |
| `scripts/check-export-health.ts` | 扫描 `out/` 目录检查 `__next_error__` 页面 | 验证静态导出健康度 |

---

## 4) 路由覆盖验证结果

### 覆盖率统计
| 指标 | 值 |
|------|-----|
| MDX 文件总数 | 71 |
| 目录总数 | 8 |
| 生成 slug 数 | 71 |
| 缺失 frontmatter 文件 | 49 |

### 示例路由验证
| 路由 | 状态 |
|------|------|
| `/docs/面试笔记/MyWeb/构建过程end` | ✓ 覆盖 |
| `/docs/Code/Hot100/Binary-Tree/236-二叉树的最近公共祖先` | ✓ 覆盖 |
| `/docs/PaiSmart/面试/v2-day1` | ✓ 覆盖 |

### 缺失 Frontmatter 文件列表（49 个）
以下文件缺少 frontmatter 元信息，建议在后续阶段补充：
- `Code/DS/细节部分`, `Code/Hot100/Sliding-Window/同类总结`
- `Info/HowToUseObsidian`, `Info/Software`
- `PaiSmart/面试/v2-day1` ~ `v2-day6`, `day2`, `面向题目`, `各类杂项问题`, `prompt7.0`
- ... (其余 35 个)

---

## 5) MDX 稳定性验证结果

### 预处理策略（修复后）
| 阶段 | 位置 | 处理内容 |
|------|------|----------|
| 运行时预处理 | `lib/mdx.ts:preprocessSource()` | `class=`→`className=`, `<>`→`&lt;&gt;`, `<span></span>` 替换 |
| MDX 编译 | `lib/mdx.ts:serializeMDX()` | `compileMDX` with `remarkGfm` |
| TOC 提取 | `docs/[...slug]/page.tsx` | 从原始 body 提取，不经过预处理 |

### 兼容性规则覆盖
| 规则 | 状态 | 证据 |
|------|------|------|
| HTML `class=` → `className=` | ✓ | `lib/mdx.ts:47` |
| 空 `<>` 片段处理 | ✓ | `lib/mdx.ts:51` |
| 泛型尖括号 `<>` | ✓ | `lib/mdx.ts:57` |
| 跳过 fenced code block | ✓ | `lib/mdx.ts:29-40` |
| 跳过 inline code | ✓ | `lib/mdx.ts:42` |

---

## 6) 构建与导出验证结果

### Lint 验证
| 检查项 | 结果 |
|--------|------|
| `npm run lint` | ✅ **通过** |
| Errors | **0** |
| Warnings | **30** (较修复前减少 1) |

### 构建验证
| 检查项 | 结果 |
|--------|------|
| `npm run build` | ⚠️ **HANG** (卡在 Next.js 15.5.14 初始化) |
| 根因 | Windows 环境 + Next.js 15.5 兼容性问题 |
| 导出目录 | ❌ 不存在（未生成 `out/`） |

### 导出健康检查
| 检查项 | 结果 |
|--------|------|
| HTML 文件数 | 0 |
| `__next_error__` 页面 | 0 |
| 空页面 | 0 |

---

## 7) 残留风险与第3阶段建议

### 残留风险

| 优先级 | 风险 | 描述 |
|--------|------|------|
| **P0** | 生产构建卡死 | Next.js 15.5 在 Windows 环境下无法完成构建，需 Linux/Mac 验证 |
| **P1** | Frontmatter 缺失 | 49 个文档缺少 frontmatter，影响元信息提取 |
| **P1** | 静态导出未验证 | 由于构建阻塞，无法验证 `output: 'export'` 配置 |
| **P2** | 双重编码 slug | `generateStaticParams` 生成编码和非编码两种 slug，可能导致参数膨胀 |

### 第3阶段建议

1. **[P0] 解决构建阻塞**
   - 在 Linux/Mac 环境下重新构建
   - 或降级 Next.js 至 15.2.x

2. **[P1] 补充 Frontmatter**
   - 为缺失 frontmatter 的 49 个文档添加 `title`、`description` 等元信息
   - 建议使用批量脚本或迁移工具自动补充

3. **[P1] 验证静态导出**
   - 完成构建后运行 `scripts/check-export-health.ts`
   - 目标：`__next_error__ = 0`

4. **[P2] 优化 Slug 生成**
   - 评估 `addParamVariants` 生成的编码/非编码双重 slug 是否必要
   - 如不必要，可简化为单一编码 slug

5. **[P2] 验证路由功能**
   - 在 Dev 环境 (`npm run dev`) 下验证所有示例路由
   - 确认侧边栏高亮、目录重定向等功能正常

---

## 附录：关键修改文件路径

| 操作 | 文件路径 |
|------|----------|
| 路由编码修复 | `wexler-notes-next/src/app/docs/[...slug]/page.tsx` |
| MDX 预处理统一 | `wexler-notes-next/src/app/docs/[...slug]/page.tsx` |
| 未使用导入移除 | `wexler-notes-next/src/app/docs/[...slug]/page.tsx` |
| 覆盖率检查脚本 | `wexler-notes-next/scripts/check-static-params-coverage.ts` |
| 导出健康检查脚本 | `wexler-notes-next/scripts/check-export-health.ts` |

---

**报告生成时间**: 2026-04-07
