/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: false,
  typescript: { ignoreBuildErrors: false },
  // 构建优化：对图标库做按需打包（tree-shaking），缩小编辑器首屏 JS。
  experimental: {
    optimizePackageImports: ['@ant-design/icons'],
  },
};
