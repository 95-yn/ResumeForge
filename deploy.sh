#!/usr/bin/env bash
# ResumeForge 一键部署脚本（自托管生产模式）
# 用法:
#   ./deploy.sh              # 默认端口 3000
#   PORT=8080 ./deploy.sh    # 指定端口
#   ./deploy.sh --build-only # 只构建、不启动（用于 CI / 由进程管理器接管启动）
#
# 这是一个纯前端 Next.js 应用：数据只存浏览器 localStorage，无需数据库/后端。
# 只要部署机器有 Node ≥ 18，本脚本即可完成「装依赖 → 构建 → 起生产服务」。

set -euo pipefail
cd "$(dirname "$0")"

PORT="${PORT:-3000}"
BUILD_ONLY=0
[ "${1:-}" = "--build-only" ] && BUILD_ONLY=1

step() { printf '\n\033[1m▶ %s\033[0m\n' "$1"; }
fail() { printf '\033[31m✗ %s\033[0m\n' "$1" >&2; exit 1; }

step "1/4 检查环境"
command -v node >/dev/null 2>&1 || fail "未找到 Node.js，请先安装 Node ≥ 18"
NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
[ "$NODE_MAJOR" -ge 18 ] || fail "Node 版本需 ≥ 18，当前 $(node -v)"
echo "  Node $(node -v) ✓"

step "2/4 安装依赖"
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

step "3/4 生产构建 (next build)"
npm run build
echo "  构建产物在 .next/ ✓"

if [ "$BUILD_ONLY" -eq 1 ]; then
  printf '\n\033[32m✓ 构建完成（--build-only）。\033[0m 用 `PORT=%s npm run start` 启动，或交给 pm2/systemd。\n' "$PORT"
  exit 0
fi

step "4/4 启动生产服务器 (端口 $PORT)"
printf '  访问: \033[36mhttp://localhost:%s\033[0m  (Ctrl+C 停止)\n' "$PORT"
PORT="$PORT" npm run start
