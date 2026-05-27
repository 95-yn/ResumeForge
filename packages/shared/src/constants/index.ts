export const FIELD_TYPES = ['text', 'email', 'tel', 'date', 'select', 'image', 'richtext', 'array:text'] as const;
export const TEMPLATE_CATEGORIES = ['business', 'creative', 'minimal', 'tech'] as const;
export const DEFAULT_SECTION_ORDER = ['basics', 'experience', 'education', 'skills', 'projects'];
export const DEFAULT_RESUME_DATA = {
  basics: {
    name: '张三',
    title: '高级前端工程师',
    email: 'zhangsan@example.com',
    phone: '138-0013-8000',
    location: '北京',
    summary: '8 年前端开发经验，精通 React、TypeScript、Node.js 技术栈。曾在字节跳动、阿里巴巴担任核心前端工程师，主导多个千万级用户产品的架构设计与性能优化。擅长从 0 到 1 搭建前端工程化体系，带领 10 人团队完成多次技术升级。开源社区活跃贡献者，GitHub 3000+ Stars。',
  },
  experience: [
    {
      company: '字节跳动',
      position: '高级前端工程师 / 前端 Tech Lead',
      startDate: '2021-03',
      endDate: '至今',
      highlights: [
        '主导电商平台前端架构从 jQuery 到 React 18 的全面重构，首屏加载时间从 3.2s 降至 0.8s，转化率提升 23%',
        '搭建前端 Monorepo 工程化体系（Turborepo + pnpm），统一 15 个子项目的构建、测试和发布流程',
        '设计并实现微前端方案（Module Federation），支撑 5 个业务团队独立开发和部署',
        '建立前端性能监控体系（Web Vitals + 自研 SDK），LCP P75 从 2.5s 优化至 1.2s',
        '负责 10 人前端团队的技术方向、Code Review 和人才培养，团队 A/B 绩效占比 80%',
      ],
    },
    {
      company: '阿里巴巴',
      position: '前端工程师（P6）',
      startDate: '2018-07',
      endDate: '2021-02',
      highlights: [
        '参与钉钉工作台核心模块开发，日活用户超 500 万，负责消息流、审批流等高频场景',
        '设计并实现可视化低代码搭建平台，非技术人员可自助配置运营页面，月均产出 200+ 页面',
        '主导 Hybrid 容器性能优化项目，WebView 首屏渲染提速 40%，离线包命中率从 60% 提升至 95%',
        '获得 2020 年度技术突破奖，产出 3 项内部技术专利',
      ],
    },
    {
      company: '美团',
      position: '前端开发工程师',
      startDate: '2016-07',
      endDate: '2018-06',
      highlights: [
        '负责美团外卖商家端 Web 管理后台开发，服务 600 万+ 商家',
        '使用 Vue.js + Element UI 重构遗留系统，代码量减少 40%，维护成本大幅降低',
        '参与前端基础设施建设：组件库、脚手架、自动化测试框架',
      ],
    },
  ],
  education: [
    {
      institution: '浙江大学',
      area: '计算机科学与技术',
      studyType: '本科',
      startDate: '2012-09',
      endDate: '2016-06',
    },
  ],
  skills: [
    { name: 'React / Next.js', level: '精通' },
    { name: 'TypeScript', level: '精通' },
    { name: 'Vue.js / Nuxt', level: '精通' },
    { name: 'Node.js / Express', level: '掌握' },
    { name: 'Webpack / Vite / Turborepo', level: '掌握' },
    { name: 'Docker / CI/CD', level: '掌握' },
    { name: 'MySQL / Redis / MongoDB', level: '熟悉' },
    { name: 'Python / Go', level: '熟悉' },
  ],
  projects: [
    {
      name: '企业级组件库 ProUI',
      role: '技术负责人',
      startDate: '2022-01',
      endDate: '2023-06',
      description: '从零搭建服务于内部 20+ 项目的 React 组件库，包含 80+ 组件，覆盖表单、数据展示、布局、图表等场景。',
      highlights: [
        '基于 Monorepo + Changesets 架构，支持按需加载、Tree Shaking 和自动化版本发布',
        '编写完善的 Storybook 文档站点和单元测试（Vitest），组件覆盖率达 92%',
        '在公司内部推广使用，覆盖 300+ 开发者，月均 npm 下载量 50K+',
      ],
    },
    {
      name: '实时协作白板 LiveBoard',
      role: '前端架构师',
      startDate: '2023-03',
      endDate: '2024-01',
      description: '基于 CRDT 的实时协作白板工具，支持多人同时编辑、画布无限缩放、富文本和图形混排。',
      highlights: [
        '设计 CRDT 数据同步方案（Yjs），实现毫秒级多端同步，支持 50 人同时在线编辑',
        '使用 Canvas 2D + OffscreenCanvas 实现高性能渲染引擎，60fps 稳定运行',
        '产品上线 3 个月内获得 10 万注册用户，DAU 2 万',
      ],
    },
  ],
};

export const PLAN_TYPES = ['free', 'pro', 'premium'] as const;
export const EXPORT_STATUSES = ['pending', 'processing', 'done', 'failed'] as const;
export const AI_SESSION_TYPES = ['rewrite', 'polish', 'translate', 'jd-match'] as const;
export const SNAPSHOT_SOURCES = ['auto', 'manual', 'ai', 'export'] as const;
export const SUPPORTED_LANGUAGES = ['zh', 'en', 'ja'] as const;
export const DEVICES = ['web', 'h5', 'miniapp', 'app'] as const;
