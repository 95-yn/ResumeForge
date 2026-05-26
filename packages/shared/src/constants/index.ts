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
    summary: '5 年前端开发经验，精通 React、TypeScript、Node.js 技术栈。主导过多个大型 B2B SaaS 产品的前端架构设计与性能优化，擅长从 0 到 1 搭建前端工程化体系。',
  },
  experience: [
    {
      company: '字节跳动',
      position: '高级前端工程师',
      startDate: '2022-03',
      endDate: '至今',
      highlights: [
        '主导电商平台前端重构，页面加载速度提升 40%，转化率提升 15%',
        '搭建组件库和工程化体系，团队开发效率提升 30%',
        '负责前端团队 Code Review，推动代码质量和最佳实践落地',
      ],
    },
    {
      company: '阿里巴巴',
      position: '前端工程师',
      startDate: '2019-07',
      endDate: '2022-02',
      highlights: [
        '参与钉钉工作台模块开发，日活用户超 500 万',
        '设计并实现可视化搭建平台，支持非技术人员自助配置页面',
      ],
    },
  ],
  education: [
    {
      institution: '浙江大学',
      area: '计算机科学与技术',
      studyType: '本科',
      startDate: '2015-09',
      endDate: '2019-06',
    },
  ],
  skills: [
    { name: 'React', level: '精通' },
    { name: 'TypeScript', level: '精通' },
    { name: 'Node.js', level: '掌握' },
    { name: 'Vue.js', level: '掌握' },
    { name: 'Python', level: '熟悉' },
    { name: 'Docker', level: '熟悉' },
  ],
  projects: [
    {
      name: '企业级组件库 ProUI',
      role: '技术负责人',
      description: '从零搭建服务于内部 20+ 项目的 React 组件库，包含 60+ 组件，覆盖表单、数据展示、布局等场景。',
      highlights: [
        '基于 Monorepo 架构，支持按需加载和 Tree Shaking',
        '编写完善的文档站点和单元测试，覆盖率达 90%',
      ],
    },
  ],
};
