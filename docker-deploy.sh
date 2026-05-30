#!/usr/bin/env bash
# ResumeForge 一键 Docker 部署
# 用法:
#   ./docker-deploy.sh            # 默认 3000 端口
#   PORT=8080 ./docker-deploy.sh  # 自定义端口
#   ./docker-deploy.sh --logs     # 部署完跟随日志
set -euo pipefail

IMAGE="resumeforge"
CONTAINER="resumeforge"
PORT="${PORT:-3000}"
# 子路径部署前缀。线上挂在 https://www.yyyyn.cn/resume，故默认 /resume。
# 根路径部署：BASE_PATH= ./docker-deploy.sh
BASE_PATH="${BASE_PATH-/resume}"

cd "$(dirname "$0")"

# 0) 前置检查
if ! command -v docker >/dev/null 2>&1; then
  echo "✗ 没找到 docker，请先安装 Docker Desktop / Docker Engine：https://docs.docker.com/get-docker/"
  exit 1
fi
if ! docker info >/dev/null 2>&1; then
  echo "✗ Docker 没在运行，请先启动 Docker 后重试。"
  exit 1
fi

echo "▸ [1/4] 构建镜像 $IMAGE （basePath='${BASE_PATH:-/}'）..."
docker build --build-arg BASE_PATH="$BASE_PATH" -t "$IMAGE" .

echo "▸ [2/4] 停止并删除旧容器（若有）..."
docker rm -f "$CONTAINER" >/dev/null 2>&1 || true

echo "▸ [3/4] 启动新容器（端口 $PORT，自动重启）..."
docker run -d \
  --name "$CONTAINER" \
  --restart unless-stopped \
  -p "${PORT}:${PORT}" \
  -e PORT="$PORT" \
  "$IMAGE" >/dev/null

echo "▸ [4/4] 等待服务就绪 ..."
for i in $(seq 1 30); do
  if curl -fsS "http://localhost:${PORT}${BASE_PATH}/" >/dev/null 2>&1; then
    echo ""
    echo "✓ 部署成功！访问： http://localhost:${PORT}${BASE_PATH}"
    echo "  查看日志： docker logs -f $CONTAINER"
    echo "  停止服务： docker rm -f $CONTAINER"
    [ "${1:-}" = "--logs" ] && docker logs -f "$CONTAINER"
    exit 0
  fi
  sleep 1
done

echo "⚠ 容器已启动，但 30s 内没探测到响应。看日志排查："
echo "  docker logs $CONTAINER"
exit 1
