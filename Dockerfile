# ResumeForge —— 多阶段构建，产出最小生产镜像（基于 Next.js standalone 输出）
# 构建: docker build -t resumeforge .
# 运行: docker run -p 3000:3000 resumeforge
# 改端口: docker run -e PORT=8080 -p 8080:8080 resumeforge

# ---- 1) 依赖层（仅装依赖，利用缓存）----
FROM node:20-alpine AS deps
WORKDIR /app
# npm 源：国内服务器默认走 npmmirror 加速，避免连不上官方源导致 npm ci 失败。
# 境外构建可覆盖：docker build --build-arg NPM_REGISTRY=https://registry.npmjs.org .
ARG NPM_REGISTRY=https://registry.npmmirror.com
COPY package.json package-lock.json* ./
RUN npm config set registry "$NPM_REGISTRY" \
 && sed -i "s#https://registry.npmjs.org#${NPM_REGISTRY}#g" package-lock.json \
 && npm ci

# ---- 2) 构建层 ----
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- 3) 运行层（只拷贝 standalone 产物，镜像小）----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# 非 root 用户运行
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# standalone server + 静态资源 + public（缩略图、favicon 等）
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
