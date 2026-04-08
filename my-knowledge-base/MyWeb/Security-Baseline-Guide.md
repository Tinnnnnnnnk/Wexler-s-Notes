# 安全基线指南

**项目**: Wexler's Notes
**版本**: 1.0.0
**更新日期**: 2026-04-08

---

## 1. 环境变量安全规范

### 1.1 必须配置的安全变量

| 变量名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `NEXT_PUBLIC_EDITOR_ENABLED` | boolean | `false` | 编辑器开关，生产必须 false |
| `NEXT_PUBLIC_TELEMETRY_ENABLED` | boolean | `false` | 埋点开关，必须显式配置 |
| `NEXT_PUBLIC_TELEMETRY_SAMPLE_RATE` | number | `1` | 采样率 0~1 |
| `NEXT_PUBLIC_TELEMETRY_ENDPOINT` | string | `''` | 上报端点，空为本地缓存 |

### 1.2 生产环境检查清单

```bash
# 检查环境变量
grep -E "NEXT_PUBLIC_(EDITOR|TELEMETRY)" .env.production

# 验证配置
# 1. EDITOR_ENABLED 必须是 false
# 2. TELEMETRY_ENABLED 必须是 true/false（显式）
# 3. TELEMETRY_SAMPLE_RATE 必须在 0~1 之间
# 4. TELEMETRY_ENDPOINT 不能是 localhost
```

### 1.3 禁止事项

- ❌ 禁止在代码中硬编码密钥
- ❌ 禁止在客户端暴露私钥
- ❌ 禁止 `TELEMETRY_ENDPOINT` 指向 localhost（生产）
- ❌ 禁止 `EDITOR_ENABLED` 为 true（生产）

---

## 2. 埋点隐私白名单规范

### 2.1 允许的事件字段

```typescript
const ALLOWED_PROPS = [
  'event',           // 事件名
  'timestamp',       // ISO 时间戳
  'visitorId',       // 匿名 ID
  'sessionId',       // 会话 ID
  'url',            // 页面 URL
  'referrer',       // 来源
  'title',          // 页面标题
  'from', 'to',    // 切换类事件
  'headingId',      // 目录点击
  'query',         // 搜索词
  'resultsCount',   // 结果数
  'metricName',    // Web Vitals 名称
  'value',         // 指标值
  'rating',        // 评级
  'variantKey',    // 实验变体
]
```

### 2.2 禁止的字段

| 字段 | 原因 |
|------|------|
| `email` | 个人邮箱 |
| `phone` | 手机号 |
| `name` | 真实姓名 |
| `address` | 地址 |
| `ip` | IP 地址 |
| `cookie` | 原始 Cookie |
| `userId` | 用户 ID |
| `idcard` | 身份证号 |
| `creditCard` | 信用卡号 |
| `ssn` | 社保号 |

### 2.3 隐私保护措施

- ✅ 所有 visitorId/sessionId 均为随机生成
- ✅ 不采集任何真实个人信息
- ✅ 数据仅本地存储，可手动清除
- ✅ 支持关闭埋点

---

## 3. 依赖漏洞处理策略

### 3.1 漏洞分级

| 级别 | 说明 | SLA |
|------|------|-----|
| Critical | 远程代码执行、数据泄露 | 24 小时内修复 |
| High | 权限提升、拒绝服务 | 72 小时内修复 |
| Medium | 信息泄露、绕过限制 | 1 周内修复 |
| Low | 低风险 | 下一版本修复 |

### 3.2 审计命令

```bash
# 运行依赖审计
cd wexler-notes-next
npm audit

# 生成 JSON 报告
npm audit --json > security/reports/deps-audit.json

# CI 自动阻断
npm run security:deps
```

### 3.3 处理流程

1. **发现漏洞** → 运行 `npm audit`
2. **评估影响** → 查看漏洞详情和修复版本
3. **应用修复** → `npm audit fix` 或手动升级
4. **验证** → 重新运行审计确认修复
5. **提交** → 创建 PR 并通过 CI

---

## 4. 发布与回滚审计要求

### 4.1 发布前检查

```bash
# 1. 校验编辑器布局
npm run editor:validate

# 2. 校验发布包
npm run editor:apply -- --input bundle.json --dry-run

# 3. 运行安全门禁
npm run security:gate

# 4. 本地测试
npm run build && npm run start
```

### 4.2 发布命令

```bash
# 应用布局
npm run editor:apply -- --input layout.json --confirm

# 提交变更
git add -A
git commit -m "editor: apply layout for /"
git push origin main

# 等待 CI 通过
# 访问 GitHub Actions 查看状态
```

### 4.3 回滚命令

```bash
# 列出可回滚点
npm run editor:rollback -- --route / --list

# 回滚到上一版本
npm run editor:rollback -- --route / --confirm

# 回滚到指定版本
npm run editor:rollback -- --route / --commit abc123 --confirm

# 提交回滚
git add -A
git commit -m "editor: rollback / to abc123"
git push origin main
```

### 4.4 审计日志

审计记录保存在 `security/reports/editor-audit.json`

```json
[
  {
    "timestamp": "2026-04-08T...",
    "operation": "apply",
    "route": "/",
    "routeKey": "home",
    "commitSha": "abc1234",
    "user": "user@example.com",
    "success": true
  }
]
```

---

## 5. 应急响应与升级流程

### 5.1 事件分级

| 级别 | 影响 | 响应时间 | 解决时间 |
|------|------|----------|----------|
| P0 | 站点完全不可用 | 15 分钟 | 1 小时 |
| P1 | 核心功能不可用 | 1 小时 | 4 小时 |
| P2 | 非核心功能异常 | 4 小时 | 24 小时 |
| P3 | 优化或改进 | 24 小时 | 下一版本 |

### 5.2 紧急回滚流程

```bash
# 1. 立即回滚代码
git revert HEAD
git push origin main --force

# 2. 通知团队
# 在 Slack/飞书群通知

# 3. 分析问题
# 查看 CI logs

# 4. 修复后重新发布
```

### 5.3 安全漏洞处理

```bash
# 1. 识别漏洞
npm audit

# 2. 评估漏洞
# 查看 https://nvd.nist.gov/vuln/detail/CVE-XXXX-XXXX

# 3. 应用修复
npm audit fix

# 4. 验证
npm audit

# 5. 提交 PR
git add -A
git commit -m "fix: resolve security vulnerability CVE-XXXX-XXXX"
git push origin fix/security-update
```

### 5.4 联系方式

- 安全问题: security@example.com
- 运维支持: ops@example.com

---

**最后更新**: 2026-04-08
