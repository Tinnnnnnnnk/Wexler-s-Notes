# Phase 8: Cleanup Checklist — Post-Migration VitePress Removal

## Overview
After the Next.js cutover is confirmed stable (minimum 48h, 3+ successful deploys),
execute this checklist to permanently remove VitePress artifacts and old build
outputs from the repository.

> **DANGER**: These steps are destructive. Ensure:
> - [ ] Next.js site is live and verified at `https://wexler.dev`
> - [ ] All CI/CD pipelines for `feat/next-cutover` are passing
> - [ ] You have a backup tag / snapshot of the current state
> - [ ] At least 2 reviewers have signed off on this PR

---

## Step 1 — Remove VitePress Build Output

```bash
# Remove the compiled VitePress dist (already not in git, just in case)
rm -rf my-knowledge-base/docs/.vitepress/dist/

# Remove old images that are now in the Next.js public folder
# (check first — some images may have been moved already)
ls my-knowledge-base/images/
# If empty: rm -rf my-knowledge-base/images/
```

## Step 2 — Remove VitePress Dependencies

```bash
# Remove from root package.json (or edit manually)
# 1. Remove "vitepress" from devDependencies
# 2. Remove "markdown-it-mathjax3" from dependencies
# 3. Remove scripts: docs:dev, docs:build, docs:preview

# Then run:
npm install
```

Or edit `package.json`:
```diff
  "devDependencies": {
-   "vitepress": "^1.6.4"
  },
  "dependencies": {
-   "markdown-it-mathjax3": "^4.3.2"
  }
```

## Step 3 — Remove VitePress Config

```bash
# Remove .vitepress directory
rm -rf my-knowledge-base/.vitepress/
```

## Step 4 — Remove Obsidian Config (Optional, Repository Cleanup)

```bash
# Remove Obsidian vault config (not needed for build)
rm -rf my-knowledge-base/.obsidian/
```

## Step 5 — Remove Legacy Build Scripts

```bash
# Check what scripts exist
ls scripts/

# Remove old batch files if not used
rm -f my-knowledge-base/AutoDeploy.bat
rm -f my-knowledge-base/plink.exe
rm -f my-knowledge-base/pscp.exe
# (δ备份.base may be a backup — check before removing)
```

## Step 6 — Remove Deprecated GitHub Workflow

```bash
# Remove the deprecated VitePress deploy workflow
rm -f .github/workflows/deploy.yml
```

## Step 7 — Update README

Add a badge/status to the README indicating the current state.

## Step 8 — Prune Stale Git Objects (After PR Merge)

```bash
# After merging feat/next-cutover into main:
git checkout main
git pull origin main
git branch -d feat/next-cutover   # local
git push origin --delete feat/next-cutover  # remote

# Optional: garbage collect loose objects
git gc --prune=now --aggressive
```

## Step 9 — Final Verification

- [ ] `npm run docs:dev` no longer works (VitePress removed)
- [ ] `wexler-notes-next/` contains the full Next.js application
- [ ] `.github/workflows/deploy-next.yml` is the only active workflow
- [ ] `.github/workflows/deploy.yml` is deleted
- [ ] `my-knowledge-base/` contains only source Markdown + migrated `docs/` static assets

---

## Rollback Plan (if Phase 8 causes issues)

If Phase 8 cleanup causes problems, restore from the rollback tag:

```bash
git checkout rollback/next-v0.1.0
git checkout main
git checkout rollback/next-v0.1.0 -- .
git commit -m "chore: emergency rollback to Phase 7 baseline"
git push origin main
```

This restores the repository to the state just before Phase 8 cleanup.

---

*Last updated: Phase 7 completion date*
