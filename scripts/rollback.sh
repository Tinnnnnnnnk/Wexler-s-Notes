#!/usr/bin/env bash
# =============================================================================
# rollback.sh — Rollback from Next.js back to VitePress (main branch)
#
# Usage:
#   ./scripts/rollback.sh [--skip-confirm]
#
# What it does:
#   1. Check that we are on feat/next-cutover and main is clean
#   2. Run `git stash` to save any uncommitted work on feat/next-cutover
#   3. Switch to main branch
#   4. Checkout the rollback tag: rollback/next-v0.1.0
#   5. Push main to origin to restore the server
#   6. Print instructions for manual rsync restore if needed
#
# Prerequisites:
#   - The rollback tag must exist (created in Phase 0)
#   - GitHub Secrets must still include the old SERVER_* variables
#
# Estimated downtime: ~2–5 minutes (build + rsync)
# =============================================================================

set -euo pipefail

SKIP_CONFIRM=false
if [[ "${1:-}" == "--skip-confirm" ]]; then
  SKIP_CONFIRM=true
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$REPO_ROOT"

echo "=========================================="
echo "  Rollback: Next.js → VitePress (main)"
echo "=========================================="
echo ""

# --- Pre-flight checks ---
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$CURRENT_BRANCH" != "feat/next-cutover" ]]; then
  echo "❌  Must be on feat/next-cutover to rollback. Currently on: $CURRENT_BRANCH"
  echo "    Run: git checkout feat/next-cutover"
  exit 1
fi

# Check rollback tag exists
if ! git rev-parse "rollback/next-v0.1.0" >/dev/null 2>&1; then
  echo "❌  Rollback tag rollback/next-v0.1.0 not found."
  echo "    It should have been created in Phase 0."
  exit 1
fi

# Check main is clean
if ! git diff --stat main --name-only | grep -q . 2>/dev/null; then
  echo "ℹ️   main is clean (no uncommitted changes)."
else
  echo "ℹ️   main has uncommitted changes — they will be preserved."
fi

if ! $SKIP_CONFIRM; then
  echo ""
  echo "⚠️  This will:"
  echo "   1. Stash any uncommitted changes on feat/next-cutover"
  echo "   2. Switch to main branch"
  echo "   3. Checkout rollback/next-v0.1.0 tag (VitePress baseline)"
  echo "   4. Trigger deploy.yml workflow to restore VitePress site"
  echo ""
  read -rp "Continue with rollback? (yes/no): " CONFIRM
  if [[ "$CONFIRM" != "yes" ]]; then
    echo "Aborted."
    exit 0
  fi
fi

# --- Step 1: Stash feat/next-cutover work ---
echo ""
echo "→ Stashing uncommitted work on feat/next-cutover..."
if git diff --quiet && git diff --cached --quiet; then
  echo "  Nothing to stash."
else
  git stash push -m "WIP: rollback stash $(date +%Y-%m-%dT%H:%M:%S)"
fi

# --- Step 2: Switch to main and checkout rollback tag ---
echo ""
echo "→ Switching to main and restoring rollback tag..."
git checkout main
git checkout "rollback/next-v0.1.0"

# --- Step 3: Trigger old VitePress deploy ---
echo ""
echo "→ Main branch restored. Trigger deploy.yml to restore server:"
echo ""
echo "   Option A — via GitHub web UI:"
echo "     1. Go to https://github.com/Tinnnnnnnnk/Wexler-s-Notes/actions"
echo "     2. Click 'Deploy [DEPRECATED]' → Run workflow → Run workflow"
echo ""
echo "   Option B — via gh CLI:"
echo "     gh workflow run deploy.yml"
echo ""
echo "   Option C — via direct rsync (if you have SSH access):"
echo "     rsync -avzr --delete my-knowledge-base/docs/.vitepress/dist/ \\"
echo "       \$DEPLOY_USER@\$DEPLOY_HOST:\$DEPLOY_PATH"
echo ""

echo "=========================================="
echo "  Rollback preparation complete."
echo "=========================================="
echo ""
echo "To return to Next.js development:"
echo "  git checkout feat/next-cutover"
echo "  git stash pop   # if you stashed work above"
echo ""
