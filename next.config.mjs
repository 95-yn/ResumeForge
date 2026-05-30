/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: false,
  typescript: { ignoreBuildErrors: false },
  // standalone：构建出自带最小依赖的 .next/standalone，用于 Docker 小镜像（node server.js 即可跑）。
  output: 'standalone',
  // 构建优化：对图标库做按需打包（tree-shaking），缩小编辑器首屏 JS。
  experimental: {
    optimizePackageImports: ['@ant-design/icons'],
  },
};
