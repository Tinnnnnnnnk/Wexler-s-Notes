# MD 图片接入与服务器可见指南（Next 架构）

> 目标：解决“Obsidian 本地能看到图片，但网站/服务器看不到”的问题。  
> 适用项目：`D:\Github\Wexler-s-Notes`

---

## 1. 根因先讲清楚

你现在的 Next 项目在部署前会执行迁移脚本：

- 脚本：`wexler-notes-next/scripts/migrate-docs.ts`
- 文档来源目录：`my-knowledge-base/docs`
- 公开静态资源来源目录：`my-knowledge-base/docs/public/images`、`my-knowledge-base/docs/public/media`
- 迁移目标目录：`wexler-notes-next/public/images`、`wexler-notes-next/public/media`

这意味着：

1. 图片不在 `my-knowledge-base/docs/public/images`（或 `public/media`）里，部署时通常不会被带上。  
2. MD 里写的是本地路径、Obsidian 私有路径、或 `![[xxx.png]]` 这类写法，网页端可能无法解析。  
3. 只改了 MD 但没把图片文件一起提交 Git，也会导致服务器缺图。

---

## 2. 标准做法（推荐）

### 2.1 图片放置位置

请把图片放在：

- `my-knowledge-base/docs/public/images/...`

例如：

- `my-knowledge-base/docs/public/images/hot100/three-sum-flow.png`

大体积动图/视频建议放：

- `my-knowledge-base/docs/public/media/...`

---

### 2.2 MD 中图片引用写法（必须）

请使用标准 Markdown 路径，推荐“站点绝对路径”：

```md
![三数之和思路图](/images/hot100/three-sum-flow.png)
```

不要使用这类高风险写法：

- `![[Pasted image 2026xxxx.png]]`（Obsidian wiki 链接）
- `![xx](C:\Users\...)`（本地绝对路径）
- `![xx](../attachments/xxx.png)`（若目录不在 public 下，线上易丢）

---

## 3. Obsidian 建议配置（避免每次手动搬图）

在 Obsidian 中设置：

1. `设置 -> Files and links`
2. `Default location for new attachments` 选择 `In the folder specified below`
3. `Attachment folder path` 填写：
   - `public/images/obsidian`

前提：你的 Obsidian 仓库根目录建议就是 `my-knowledge-base/docs`。  
这样粘贴图片后会自动进 `docs/public/images/obsidian`，部署时可直接带上。

---

## 4. 本地验证流程（每次改完笔记后）

在仓库根目录执行：

```powershell
cd D:\Github\Wexler-s-Notes
npm run next:migrate
npm run next:dev
```

然后验证两件事：

1. 文档页图片是否显示。  
2. 直接访问图片 URL 是否 200：

```text
http://localhost:3000/images/hot100/three-sum-flow.png
```

如果 URL 能打开，说明资源链路是通的。

---

## 5. 提交与部署注意事项

推送前请确认：

1. `git status` 里同时出现了：
   - 你的 `.md/.mdx` 文件
   - 对应图片文件（`.png/.jpg/.webp/...`）
2. 图片没有被 `.gitignore` 忽略。
3. 推送后 GitHub Actions 的 `Deploy Next` 成功（不是只看安全检查 workflow）。

---

## 6. 服务器端验证（部署后）

部署成功后，直接访问线上图片 URL：

```text
https://你的域名/images/hot100/three-sum-flow.png
```

若能打开但页面不显示，通常是页面缓存问题，先：

- `Ctrl + F5`
- 或无痕窗口验证

---

## 7. 常见错误与修复

### 错误 A：本地 Obsidian 能看，网站看不到

原因：图片不在 `docs/public/images` 下，或 MD 用了本地/私有路径。  
修复：移动图片到 `docs/public/images`，改为 `![... ](/images/...)`。

### 错误 B：本地 Next 看不到最新笔记图片，但服务器有

原因：本地只跑了 `dev`，没先跑 `migrate`。  
修复：先 `npm run next:migrate` 再 `npm run next:dev`。

### 错误 C：部署后部分图片 404

原因：图片未提交到 Git，或路径大小写不一致。  
修复：检查 `git status`、GitHub 仓库实际文件名、MD 引用路径大小写。

---

## 8. 可直接复用的模板

```md
## 示例：三数之和图解

![三数之和双指针流程](/images/hot100/three-sum-flow.png)

> 图说明：固定 i，left/right 收缩，注意去重。
```

---

如果你后续希望，我可以再给你一份“批量检查文档图片链接有效性”的命令清单（不改代码版）。
