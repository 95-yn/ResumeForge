/** @type {import('next').NextConfig} */
// 子路径部署：构建时设 BASE_PATH=/resume，整站路由与 _next 资源自动挂到该前缀下。
// 不设则为根路径（本地 dev 默认）。NEXT_PUBLIC_BASE_PATH 暴露给前端，供 lib/base-path.ts 的 asset() 使用。
const basePath = process.env.BASE_PATH || '';
export default {
  reactStrictMode: false,
  typescript: { ignoreBuildErrors: false },
  // standalone：构建出自带最小依赖的 .next/standalone，用于 Docker 小镜像（node server.js 即可跑）。
  output: 'standalone',
  basePath: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // 构建优化：对图标库做按需打包（tree-shaking），缩小编辑器首屏 JS。
  experimental: {
    optimizePackageImports: ['@ant-design/icons'],
  },
  // 静态资源缓存头：缩略图/二维码 30 天，字体 1 年（不变内容用 immutable）。
  // 这些响应经 nginx 反代会原样透传，回访几乎零流量。（_next/static 已由 Next 默认 immutable）
  async headers() {
    return [
      {
        source: '/thumbnails/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000' }],
      },
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/contact-wechat-qr.:ext(webp|jpg)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000' }],
      },
    ];
  },
};
