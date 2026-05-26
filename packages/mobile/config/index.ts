import { defineConfig } from '@tarojs/cli';

export default defineConfig({
  projectName: 'resume-mobile',
  date: '2026-05-26',
  designWidth: 750,
  deviceRatio: { 640: 2.34 / 2, 750: 1, 375: 2, 828: 1.81 / 2 },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: ['@tarojs/plugin-framework-react'],
  framework: 'react',
  compiler: 'webpack5',
  cache: { enable: false },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules: [],
    devServer: { port: 10086 },
  },
  mini: {
    postcss: {
      pxtransform: { enable: true },
      url: { enable: true, config: { limit: 1024 } },
    },
  },
});
