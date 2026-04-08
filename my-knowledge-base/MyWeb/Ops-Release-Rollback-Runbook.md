# 发布与回滚运行手册

**项目**: Wexler's Notes
**版本**: 1.0.0
**更新日期**: 2026-04-08

---

## 1. 发布前检查清单

在触发发布前，执行以下检查：

```bash
cd wexler-notes-next

# 1. 代码质量
npm run lint
# 预期: 0 errors

# 2. 编辑器配置校验
npm run editor:validate
# 预期: Validation PASSED

# 3. 发布门禁
npm run release:gate
# 预期: 所有检查通过

# 4. 完整质量门禁（含构建）
npm run stage6:self-check
# 预期: All checks passed
```

---

## 2. 发布步骤

### 2.1 自动化发布（通过 CI）

1. **提交代码到 main 分支**
   ```bash
   git add -A
   git commit -m "feat: your change description"
   git push origin main
   ```

2. **等待 CI 通过**
   - 访问: https://github.com/Tinnnnnnnnk/Wexler-s-Notes/actions
   - 确认 `Release Quality Gate` workflow 通过

3. **查看构建产物**
   - 下载 `build-output` artifact
   - 包含 `out/` 目录和 `build-meta.json`

### 2.2 编辑器布局发布

1. **从编辑器导出布局**
   - 在编辑器中点击"导出 JSON"按钮
   - 保存为 `layout-export.json`

2. **应用发布包**
   ```bash
   cd wexler-notes-next
   npm run editor:apply -- --input ../layout-export.json
   ```

3. **提交布局变更**
   ```bash
   git add -A
   git commit -m "editor: apply layout for /"
   git push origin main
   ```

4. **验证 CI 通过**
   - 确认 `Editor Config Check` workflow 通过

---

## 3. 回滚步骤

### 3.1 代码回滚

#### 3.1.1 按 Commit 回滚

```bash
# 查看最近提交
git log --oneline -10

# 回滚到指定 commit
git revert <commit-sha>

# 或创建回滚 commit
git revert HEAD
git push origin main
```

#### 3.1.2 按 Tag 回滚

```bash
# 列出所有 tag
git tag -l

# 回滚到指定 tag
git checkout <tag-name>
git checkout -b rollback-branch
# 修改后提交
git push origin rollback-branch
# 创建 PR 合并到 main
```

### 3.2 编辑器布局回滚

```bash
cd wexler-notes-next

# 1. 查看可用的历史版本
npm run editor:rollback -- --route / --list
# 输出示例:
#   - abc1234
#   - def5678
#   - ...

# 2. 回滚到上一个版本
npm run editor:rollback -- --route /

# 3. 或回滚到指定 commit
npm run editor:rollback -- --route / --commit <commit-sha>

# 4. 提交回滚
git add -A
git commit -m "editor: rollback / to previous version"
git push origin main
```

### 3.3 完全回滚（代码 + 布局）

```bash
# 1. 回滚代码
git revert <commit-sha>

# 2. 回滚布局
cd wexler-notes-next
npm run editor:rollback -- --route /

# 3. 提交
git add -A
git commit -m "rollback: revert code and layout"
git push origin main
```

---

## 4. 故障分级与处理 SLA

| 级别 | 描述 | 响应时间 | 解决时间 |
|------|------|----------|----------|
| P0 | 站点完全不可用 | 15 分钟 | 1 小时 |
| P1 | 核心功能不可用（如文档无法访问） | 1 小时 | 4 小时 |
| P2 | 非核心功能异常（如样式问题） | 4 小时 | 24 小时 |
| P3 | 优化或改进 | 24 小时 | 下一版本 |

### 4.1 紧急回滚流程（P0/P1）

```bash
# 1. 立即回滚代码
git revert HEAD
git push origin main --force

# 2. 通知团队
# 在 Slack/飞书群通知

# 3. 分析问题
# 查看 CI logs: https://github.com/Tinnnnnnnnk/Wexler-s-Notes/actions

# 4. 修复后重新发布
```

---

## 5. 常见故障排查

### 5.1 构建失败

**症状**: CI 中 `next build` 失败

**排查步骤**:
```bash
# 1. 本地复现
cd wexler-notes-next
npm ci
npm run build

# 2. 查看错误日志
# CI workflow logs 中查找 error

# 3. 常见原因:
# - 依赖版本冲突
# - TypeScript 类型错误
# - MDX 文件语法错误
```

**解决方案**:
- 根据错误日志修复代码
- 运行 `npm run lint` 检查代码质量
- 提交修复后重新触发 CI

### 5.2 资源 404

**症状**: 页面中图片/JS/CSS 显示 404

**排查步骤**:
```bash
# 1. 检查导出链接
npm run export:check-links

# 2. 检查资源文件
npm run export:check-assets

# 3. 常见原因:
# - 资源路径错误
# - 文件未包含在 build 中
# - 静态资源目录配置错误
```

**解决方案**:
- 修复资源路径
- 确保资源在 `public/` 目录
- 重新构建并发布

### 5.3 路由 404

**症状**: 访问文档页返回 404

**排查步骤**:
```bash
# 1. 检查 MDX 文件
ls -la src/content/

# 2. 检查 slug 生成
# 查看 build 输出中的静态路由

# 3. 常见原因:
# - MDX 文件 frontmatter 缺失
# - 文件名包含特殊字符
# - 路由配置错误
```

**解决方案**:
- 补充 frontmatter
- 重命名文件去除特殊字符
- 检查 `src/app/docs/[...slug]/page.tsx`

### 5.4 编辑器配置错误

**症状**: `editor:validate` 失败

**排查步骤**:
```bash
# 1. 运行详细校验
npm run editor:validate

# 2. 检查 manifest.json
cat public/editor-layouts/manifest.json

# 3. 常见原因:
# - layout 文件 JSON 格式错误
# - routeKey 与文件名不匹配
# - schemaVersion 不正确
```

**解决方案**:
- 修复 JSON 格式
- 使用 `npm run editor:manifest` 重建 manifest
- 确保 schemaVersion 为 `editor-layout.v1`

---

## 6. 相关文档

- [阶段5报告](./18-Next-阶段5-编辑数据上云与发布协作流报告.md)
- [阶段6报告](./19-Next-阶段6-发布门禁与可观测性报告.md)

---

**最后更新**: 2026-04-08
