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

export const PROFESSION_RESUME_DATA: Record<string, any> = {
  'IT互联网': DEFAULT_RESUME_DATA,
  '通用': DEFAULT_RESUME_DATA,

  '金融财会': {
    basics: {
      name: '李薇',
      title: '高级金融分析师 / CFA',
      email: 'liwei@finance.com',
      phone: '138-1088-8866',
      location: '上海',
      summary: '10 年金融行业经验，CFA 持证人，精通股权研究、财务建模、风险管理。曾供职于中金公司、普华永道、招商银行，参与 20+ 亿元级并购项目尽调与估值，擅长DCF、LBO等复杂财务模型搭建，具备出色的跨部门沟通与客户关系管理能力。',
    },
    experience: [
      {
        company: '招商银行总行',
        position: '高级金融分析师',
        startDate: '2020-06',
        endDate: '至今',
        highlights: [
          '负责零售业务板块行业研究，覆盖消费金融、财富管理两大赛道，为高净值客户提供资产配置建议',
          '独立完成 15 份深度行业研究报告，平均阅读量 5000+，多篇被董事会引用为战略决策依据',
          '主导季度财务分析例会，搭建标准化财务仪表板（Excel VBA + Power BI），效率提升 60%',
          '参与银行理财子公司 QDII 产品设计，管理规模 12 亿元，年化超额收益 2.3%',
        ],
      },
      {
        company: '普华永道（PwC）',
        position: '高级审计顾问',
        startDate: '2016-09',
        endDate: '2020-05',
        highlights: [
          '主导境内外上市公司年报审计项目 30+ 个，包括 A 股、港股、美股三地上市企业',
          '牵头完成某央企海外并购标的尽职调查（标的估值约 18 亿美元），识别关键财税风险 7 项',
          '负责内部审计培训项目，培养初级审计员 20 名，通过率 95%',
          '获 PwC 2019 年度优秀员工奖（全国前 5%）',
        ],
      },
      {
        company: '中国国际金融股份有限公司（中金）',
        position: '研究助理 / 初级分析师',
        startDate: '2013-07',
        endDate: '2016-08',
        highlights: [
          '协助覆盖银行、保险板块，建立财务模型库，维护 40+ 家上市公司财务预测模型',
          '参与 IPO 及再融资项目路演支持，配合完成募集资金超 50 亿元的项目 5 个',
          '撰写宏观经济及行业月报，部分报告被彭博、万得转载',
        ],
      },
    ],
    education: [
      {
        institution: '上海交通大学',
        area: '金融学',
        studyType: '硕士',
        startDate: '2011-09',
        endDate: '2013-06',
      },
      {
        institution: '武汉大学',
        area: '经济学',
        studyType: '本科',
        startDate: '2007-09',
        endDate: '2011-06',
      },
    ],
    skills: [
      { name: 'CFA 持证人', level: '精通' },
      { name: '财务建模（DCF / LBO / M&A）', level: '精通' },
      { name: 'Bloomberg / Wind 数据终端', level: '精通' },
      { name: 'Excel VBA / Power BI', level: '掌握' },
      { name: '会计准则（IFRS / CAS）', level: '掌握' },
      { name: '风险管理与合规', level: '掌握' },
      { name: 'Python 金融数据分析', level: '熟悉' },
      { name: '英语（CFA 考试语言）', level: '精通' },
    ],
    projects: [
      {
        name: '某消费品集团跨境并购尽调项目',
        role: '项目负责人',
        startDate: '2022-03',
        endDate: '2022-09',
        description: '主导对一家欧洲快消品牌的整体并购财务尽调，标的估值约 5 亿欧元，最终并购成功交割。',
        highlights: [
          '独立搭建目标公司 5 年期 DCF + LBO 双模型，敏感性分析覆盖 12 个核心变量',
          '发现目标公司或有负债 3200 万欧元，推动将条款纳入 SPA 对赌协议',
          '项目历时 6 个月，协调法律、税务、业务三方团队 25 人，如期完成交割',
        ],
      },
      {
        name: '零售银行财富管理数字化转型报告',
        role: '主笔分析师',
        startDate: '2023-01',
        endDate: '2023-04',
        description: '受托为招商银行私行部撰写《2023 高净值客户财富管理趋势》深度报告，被内部作为年度战略参考。',
        highlights: [
          '访谈 50+ 名私行客户经理，收集一手数据，形成 8 大核心洞察',
          '报告 80 页，涵盖资产配置模型、数字工具评估、竞品对标三大模块',
          '发布后被行长办公室批示，作为 2024 年私行升级方案的参考依据',
        ],
      },
    ],
  },

  '设计创意': {
    basics: {
      name: '王艺',
      title: '高级 UI/UX 设计师 / 设计总监',
      email: 'wangyi@design.com',
      phone: '137-5566-7788',
      location: '北京',
      summary: '9 年互联网设计经验，历任腾讯、网易、小红书设计师及设计负责人。擅长 0→1 产品设计、设计系统搭建与多端体验一致性。主导多款 DAU 百万级产品的视觉与交互设计，对设计语言、品牌识别与用户研究有深厚积累。',
    },
    experience: [
      {
        company: '小红书',
        position: '设计总监 / 创作者体验负责人',
        startDate: '2021-04',
        endDate: '至今',
        highlights: [
          '主导小红书创作者工作台全面改版，覆盖 Web + iOS + Android 三端，用户满意度从 72 分提升至 88 分',
          '搭建小红书设计系统 REDNOTE DS，包含 200+ 组件、4 套主题，覆盖全平台 50+ 产品线',
          '带领 12 人设计团队，推行设计评审机制与 OKR 考核体系，人效提升 35%',
          '推动设计工具链升级（Figma + 内部 DSM），设计交付效率提升 40%',
          '主持多次 C 端用户可用性测试，关键操作路径缩短平均 2.3 步',
        ],
      },
      {
        company: '网易互娱',
        position: '高级 UI 设计师',
        startDate: '2017-06',
        endDate: '2021-03',
        highlights: [
          '负责《阴阳师》国际版视觉改版，在保留东方美学基因的同时适配欧美审美，海外用户留存率提升 18%',
          '主导游戏内核心活动页 UI 设计，单次活动最高参与 DAU 达 200 万',
          '参与网易游戏设计规范制定，成为集团内 3 个事业部的共享设计标准',
        ],
      },
      {
        company: '腾讯互动娱乐',
        position: 'UI 设计师',
        startDate: '2015-07',
        endDate: '2017-05',
        highlights: [
          '参与微信小游戏平台早期 UI 框架设计，为平台上线奠定视觉基础',
          '负责 3 款轻度休闲游戏的完整 UI 设计，累计用户量超 500 万',
          '获腾讯 2016 年度设计新星奖',
        ],
      },
    ],
    education: [
      {
        institution: '中央美术学院',
        area: '视觉传达设计',
        studyType: '本科',
        startDate: '2011-09',
        endDate: '2015-06',
      },
    ],
    skills: [
      { name: 'Figma / Sketch', level: '精通' },
      { name: 'UI 设计 / 设计系统', level: '精通' },
      { name: '用户研究 / 可用性测试', level: '精通' },
      { name: 'After Effects / Lottie 动效', level: '掌握' },
      { name: 'Principle / Framer 原型', level: '掌握' },
      { name: 'Adobe Illustrator / Photoshop', level: '掌握' },
      { name: 'HTML / CSS（切图协作）', level: '熟悉' },
    ],
    projects: [
      {
        name: 'REDNOTE Design System',
        role: '设计系统负责人',
        startDate: '2022-01',
        endDate: '2023-06',
        description: '从零搭建小红书全平台设计系统，统一 50+ 产品线视觉标准，大幅提升跨团队设计协作效率。',
        highlights: [
          '包含 200+ Figma 组件、4 套明暗/主题色方案，支持设计工程化自动同步',
          '制定 Token 规范，与前端研发联动，实现设计稿→代码 70% 自动映射',
          '系统上线后全公司设计评审周期从 3 天缩短至 1 天',
        ],
      },
      {
        name: '创作者工作台 3.0 改版',
        role: '主设计师',
        startDate: '2023-08',
        endDate: '2024-02',
        description: '针对 1000 万 + 创作者群体，全面重设计创作工具与数据分析中心，提升内容生产效率。',
        highlights: [
          '用户调研 200 名创作者，梳理 30 个痛点，聚焦 8 个高优先级改善场景',
          '新版本上线后，创作者平均发布时长缩短 25%，工具使用率提升 42%',
          '荣获公司 2024 年 Q1 最佳产品改版奖',
        ],
      },
    ],
  },

  '教育学术': {
    basics: {
      name: '陈明',
      title: '高中物理教师 / 教研组长',
      email: 'chenming@edu.com',
      phone: '139-2233-4455',
      location: '北京',
      summary: '15 年高中物理教学经验，清华大学物理系硕士，曾任北京四中骨干教师、新东方在线主讲教师。在传统教学与在线教育领域均有深厚积累，擅长将抽象物理概念可视化，高考辅导成绩突出，多名学生考入清北。',
    },
    experience: [
      {
        company: '新东方在线',
        position: '高中物理主讲教师',
        startDate: '2019-09',
        endDate: '至今',
        highlights: [
          '主讲高考物理全程班，年均服务学生 2 万人，课程好评率 98.2%',
          '独立制作 500+ 节精品视频课，累计播放量突破 800 万次',
          '创新"三步归因法"物理解题方法论，被平台作为高考备考推荐体系向全国推广',
          '带领 5 人教研团队，编写 2024 版《高考物理专题突破》，销量 15 万册',
        ],
      },
      {
        company: '北京四中',
        position: '高中物理教师 / 教研组长',
        startDate: '2012-09',
        endDate: '2019-08',
        highlights: [
          '任教高三物理 7 年，所带班级高考平均分连续 5 年超全市均分 15 分以上',
          '辅导 6 名学生参加全国物理竞赛，其中 3 人获全国一等奖，1 人入选国家集训队',
          '担任教研组长 3 年，主持校本课程《趣味物理实验》开发，获北京市优秀校本课程奖',
          '荣获北京市"紫禁杯"优秀班主任称号（2017年）',
        ],
      },
      {
        company: '清华大学附属中学',
        position: '实习教师',
        startDate: '2010-09',
        endDate: '2012-06',
        highlights: [
          '完成教育实习，获指导教师优秀评级',
          '参与清华附中物理课程改革项目，协助设计探究性实验方案 8 个',
        ],
      },
    ],
    education: [
      {
        institution: '清华大学',
        area: '物理学',
        studyType: '硕士',
        startDate: '2008-09',
        endDate: '2010-06',
      },
      {
        institution: '南京大学',
        area: '物理学',
        studyType: '本科',
        startDate: '2004-09',
        endDate: '2008-06',
      },
    ],
    skills: [
      { name: '高中物理教学', level: '精通' },
      { name: '高考备考策略', level: '精通' },
      { name: '物理竞赛辅导', level: '精通' },
      { name: '课程设计与教研', level: '掌握' },
      { name: '在线直播授课', level: '掌握' },
      { name: 'PPT / Keynote 教学课件', level: '掌握' },
      { name: 'Python 数据分析（教研统计）', level: '熟悉' },
    ],
    projects: [
      {
        name: '2024 版《高考物理专题突破》',
        role: '主编',
        startDate: '2023-03',
        endDate: '2023-11',
        description: '面向高三学生的物理专题精讲教材，涵盖力学、电磁学、热学、光学四大模块，配套视频讲解。',
        highlights: [
          '共 320 页，500 道精选真题与变式题，每题配详细解题过程',
          '与新东方出版联合出版，首印 8 万册，上市 3 个月加印至 15 万册',
          '荣获全国教辅图书博览会"金牌教辅"奖项',
        ],
      },
      {
        name: '高考物理在线直播冲刺班',
        role: '主讲教师',
        startDate: '2024-01',
        endDate: '2024-06',
        description: '针对高三学生的全年冲刺课程，覆盖二轮复习与押题演练，助力学生突破物理瓶颈。',
        highlights: [
          '报名学生 8000 人，完课率 85%（行业均值 60%）',
          '学员平均提分 22 分，其中 20% 学员提分超 40 分',
          '课程 NPS 净推荐值 72，位居平台同类课程第一',
        ],
      },
    ],
  },

  '市场营销': {
    basics: {
      name: '刘畅',
      title: '市场营销总监 / 增长负责人',
      email: 'liuchang@mkt.com',
      phone: '135-7788-9900',
      location: '北京',
      summary: '8 年市场营销经验，历任小米、宝洁、字节跳动市场及增长职能负责人。精通整合营销传播、数字营销与用户增长，擅长在不同规模公司快速建立增长体系。曾主导多个亿元级营销战役，品牌声量与ROI双优。',
    },
    experience: [
      {
        company: '字节跳动',
        position: '市场营销总监 / 抖音生活服务增长负责人',
        startDate: '2020-06',
        endDate: '至今',
        highlights: [
          '统筹抖音生活服务（到餐、到综）C 端营销预算 3 亿元/年，管理 15 人团队',
          '主导"心动外卖节"营销战役，单日 GMV 破 8 亿元，为历史最高记录',
          '搭建 A/B 测试驱动的增长实验平台，月均运行实验 200+ 个，ROI 提升 30%',
          '与抖音算法团队协同，设计内容分发策略，品牌曝光量提升 2.5 倍',
          '负责 KOL/KOC 生态运营，月均合作达人 5000+，带动 GMV 占比 35%',
        ],
      },
      {
        company: '宝洁（P&G）中国',
        position: '高级品牌经理',
        startDate: '2016-07',
        endDate: '2020-05',
        highlights: [
          '负责海飞丝品牌在中国区的年度营销计划，管理媒体预算 1.5 亿元',
          '主导"头屑 OUT 计划"整合营销，线上+线下协同，品牌认知度提升 12 个百分点',
          '与天猫超级品牌日团队联合策划大促活动，单日销售额破 2 亿元，同比增长 60%',
          '获 P&G 2018 年度"金杯奖"（内部最高市场奖项）',
        ],
      },
      {
        company: '小米科技',
        position: '市场专员 / 增长运营',
        startDate: '2014-07',
        endDate: '2016-06',
        highlights: [
          '参与小米手机海外拓展（印度站）的社交媒体运营，Facebook 粉丝从 0 增长至 100 万',
          '策划"米粉节"线上活动，参与用户 200 万，单日销售额 3.5 亿元',
          '负责小米官网落地页优化，转化率提升 28%',
        ],
      },
    ],
    education: [
      {
        institution: '北京大学',
        area: '市场营销',
        studyType: '本科',
        startDate: '2010-09',
        endDate: '2014-06',
      },
    ],
    skills: [
      { name: '整合营销传播（IMC）', level: '精通' },
      { name: '数字营销 / 投放优化', level: '精通' },
      { name: '用户增长（Growth Hacking）', level: '精通' },
      { name: 'KOL / 内容营销', level: '精通' },
      { name: 'A/B 测试 / 数据分析', level: '掌握' },
      { name: 'Google Analytics / 神策数据', level: '掌握' },
      { name: 'SEM / SEO', level: '熟悉' },
      { name: '品牌策略与定位', level: '掌握' },
    ],
    projects: [
      {
        name: '抖音"心动外卖节"2023',
        role: '总负责人',
        startDate: '2023-08',
        endDate: '2023-09',
        description: '抖音生活服务年度最大营销战役，覆盖全国 300+ 城市，整合明星、达人、品牌商家三端资源。',
        highlights: [
          '统筹 1.2 亿元营销预算，协调内外部团队 100+ 人',
          '活动期间 GMV 累计 45 亿元，超目标 25%，品牌搜索量提升 180%',
          '获 2023 年度金鼠标数字营销大奖·整合营销类金奖',
        ],
      },
      {
        name: '海飞丝"头屑 OUT 计划"',
        role: '品牌经理',
        startDate: '2018-03',
        endDate: '2018-12',
        description: 'P&G 海飞丝品牌在中国市场的年度整合营销战役，覆盖电视、数字、线下三大媒介。',
        highlights: [
          '投入媒体预算 8000 万元，协调 4A 广告公司、公关公司、电商团队联合作战',
          '品牌认知度（TOM）提升 12 个百分点，市场份额扩大 1.8%',
          '战役获艾菲奖（Effie Awards）中国区消费品类铜奖',
        ],
      },
    ],
  },

  '医疗健康': {
    basics: {
      name: '赵敏',
      title: '主治医师 / 心血管内科',
      email: 'zhaomin@med.com',
      phone: '136-3344-5566',
      location: '北京',
      summary: '12 年临床医学经验，北京协和医院心内科主治医师，北京大学医学部医学博士。专注冠心病介入治疗与心力衰竭管理，主持国家自然科学基金项目 1 项，发表 SCI 论文 8 篇，擅长疑难危重心脏病的综合诊疗。',
    },
    experience: [
      {
        company: '北京协和医院',
        position: '主治医师 / 心血管内科',
        startDate: '2019-07',
        endDate: '至今',
        highlights: [
          '独立完成冠脉介入手术（PCI）400+ 例，手术成功率 99.2%，主要不良心脏事件发生率低于全国标准',
          '主持心力衰竭多学科协作门诊（MDT），年接诊疑难病例 300+ 人次，患者 6 个月再入院率降低 22%',
          '主持国家自然科学基金青年项目《心肌缺血预处理的分子机制研究》（资助金额 24 万元）',
          '发表 SCI 论文 5 篇，最高影响因子 6.8，担任 Heart 等期刊审稿人',
          '入选北京市卫健委"青年骨干医师培育计划"（2022年）',
        ],
      },
      {
        company: '北京大学第一医院',
        position: '住院医师 / 心内科',
        startDate: '2015-07',
        endDate: '2019-06',
        highlights: [
          '完成住院医师规范化培训，心内科、急诊科、ICU 等 10 个科室轮转',
          '参与心脏起搏器植入及射频消融手术辅助 200+ 例',
          '以第一作者发表中华心血管病杂志论文 2 篇，参与发表 SCI 论文 3 篇',
        ],
      },
      {
        company: '朝阳区中心医院',
        position: '实习医师',
        startDate: '2012-07',
        endDate: '2015-06',
        highlights: [
          '完成本科阶段临床实习，参与内科、外科、妇产科、儿科全科轮转',
          '独立完成住院病历书写 200+ 份，获优秀实习生称号',
        ],
      },
    ],
    education: [
      {
        institution: '北京大学医学部',
        area: '临床医学（心血管方向）',
        studyType: '博士',
        startDate: '2009-09',
        endDate: '2015-06',
      },
    ],
    skills: [
      { name: '冠心病介入治疗（PCI）', level: '精通' },
      { name: '心力衰竭诊疗管理', level: '精通' },
      { name: '心脏电生理 / 射频消融', level: '掌握' },
      { name: '危重症监护（CCU）', level: '掌握' },
      { name: '超声心动图', level: '掌握' },
      { name: 'SCI 学术论文撰写', level: '掌握' },
      { name: 'SPSS / R 统计分析', level: '熟悉' },
    ],
    projects: [
      {
        name: '国家自然科学基金青年项目',
        role: '主持人',
        startDate: '2021-01',
        endDate: '2023-12',
        description: '《心肌缺血预处理对炎症信号通路的调控机制研究》，探索心肌保护的细胞与分子机制。',
        highlights: [
          '资助金额 24 万元，研究成果已发表于 Cardiovascular Research（IF 8.1）',
          '建立心肌缺血再灌注动物模型，完成 200+ 例实验，数据结果可重复性高',
          '项目结题评审获"优秀"等级',
        ],
      },
      {
        name: '心力衰竭 MDT 门诊体系搭建',
        role: '负责人',
        startDate: '2020-06',
        endDate: '2021-06',
        description: '联合心脏康复科、营养科、心理科建立心力衰竭多学科协作诊疗门诊，填补院内空白。',
        highlights: [
          '制定《心力衰竭 MDT 诊疗规范》院内指南，被 5 家联盟医院采纳',
          '门诊运行 2 年，患者平均 NYHA 心功能分级改善 0.8 级',
          '相关工作获北京协和医院 2022 年度医疗质量改善奖',
        ],
      },
    ],
  },

  '产品运营': {
    basics: {
      name: '孙浩',
      title: '高级产品经理 / 产品总监',
      email: 'sunhao@pm.com',
      phone: '137-8899-0011',
      location: '北京',
      summary: '8 年互联网产品经验，历任美团、快手、滴滴产品经理及产品负责人。专注 C 端产品设计与增长，擅长数据驱动决策、用户体验优化与商业化产品策略。主导多款日活千万级产品的核心功能从立项到落地的完整生命周期。',
    },
    experience: [
      {
        company: '滴滴出行',
        position: '产品总监 / 顺风车产品负责人',
        startDate: '2020-09',
        endDate: '至今',
        highlights: [
          '负责顺风车全场景产品规划（合乘、拼单、计划出行），管理 8 人产品团队',
          '主导顺风车复播 2.0 安全体系设计，推动产品在全国 300 城恢复上线',
          '设计"家人实时追踪"功能，用户安全感 NPS 提升 25 分，成为行业标杆',
          '2023 年顺风车 GMV 同比增长 85%，日均订单量突破 200 万',
        ],
      },
      {
        company: '快手科技',
        position: '高级产品经理 / 商业化产品',
        startDate: '2017-04',
        endDate: '2020-08',
        highlights: [
          '主导快手直播礼物体系改版，礼物 ARPU 提升 40%，付费率提升 15%',
          '设计快手电商"边看边买"购物车功能，上线首月带动 GMV 环比增长 230%',
          '构建商业化产品数据看板（基于神策+Tableau），支持日均 500+ 报表查询',
        ],
      },
      {
        company: '美团',
        position: '产品经理 / 外卖用户端',
        startDate: '2015-07',
        endDate: '2017-03',
        highlights: [
          '负责美团外卖订单轨迹地图功能，用户好评率提升 12%，催单客服量减少 35%',
          '推动首页搜索改版，搜索转化率提升 22%，搜索日均 PV 增长 30%',
          '参与美团外卖 App 的 A/B 测试体系建设，月均上线实验 50+ 个',
        ],
      },
    ],
    education: [
      {
        institution: '中国人民大学',
        area: '信息管理与信息系统',
        studyType: '本科',
        startDate: '2011-09',
        endDate: '2015-06',
      },
    ],
    skills: [
      { name: '产品规划与需求分析', level: '精通' },
      { name: '数据驱动决策 / A/B 测试', level: '精通' },
      { name: 'Axure / Figma 原型', level: '精通' },
      { name: '用户研究与体验优化', level: '掌握' },
      { name: '商业化产品策略', level: '掌握' },
      { name: 'SQL / 数据分析', level: '掌握' },
      { name: '敏捷开发 / Scrum', level: '掌握' },
      { name: '竞品分析', level: '熟悉' },
    ],
    projects: [
      {
        name: '顺风车安全 2.0 体系',
        role: '产品负责人',
        startDate: '2021-03',
        endDate: '2022-06',
        description: '全面重设计顺风车安全防护体系，覆盖行前验证、行中追踪、行后评价三大环节。',
        highlights: [
          '主导产品设计，协调算法、工程、法务、政府关系 4 个部门，历时 15 个月',
          '安全事件发生率同比下降 62%，通过监管部门验收，顺利在全国复播',
          '相关功能获交通运输部推广，作为行业安全标准向其他出行平台分享',
        ],
      },
      {
        name: '快手"边看边买"购物车',
        role: '主要产品经理',
        startDate: '2019-03',
        endDate: '2019-09',
        description: '快手直播电商核心基础设施，将商品浏览与直播观看无缝打通，开创短视频直播购物新体验。',
        highlights: [
          '从 0 到 1 完成功能设计，协调前端、后端、推荐算法 3 支团队联合开发',
          '上线首月 GMV 环比增长 230%，付费用户渗透率从 3% 提升至 11%',
          '功能被国内多家直播平台效仿，成为行业标配',
        ],
      },
    ],
  },

  '人力行政': {
    basics: {
      name: '周洁',
      title: '人力资源总监 / HRBP',
      email: 'zhoujie@hr.com',
      phone: '138-4455-6677',
      location: '北京',
      summary: '12 年人力资源管理经验，历任华为、京东、百度 HRBP 及人力资源负责人。专注组织发展、人才管理与文化建设，擅长在业务高速增长期搭建 HR 体系。主导过千人规模组织变革、薪酬体系重建与校园招聘体系建设，深度理解互联网人才生态。',
    },
    experience: [
      {
        company: '百度',
        position: '人力资源总监 / AI 事业部 HRBP',
        startDate: '2019-04',
        endDate: '至今',
        highlights: [
          '负责 AI 事业部 3000 人团队的人力资源管理，服务飞桨、文心一言等核心业务线',
          '主导 AI 人才体系搭建（职级框架、算法岗 JD 库、技术评估题库），关键岗位招聘周期从 45 天降至 28 天',
          '推进绩效管理改革（OKR 到 OKR+ 分级绩效），员工满意度调研提升 15 分',
          '搭建校园招聘"少年班"项目，年均招募优质应届生 200 人，留存率 88%',
          '主导 2022 年降本增效期间的组织优化，在保证士气的前提下完成目标',
        ],
      },
      {
        company: '京东集团',
        position: '高级 HRBP',
        startDate: '2015-06',
        endDate: '2019-03',
        highlights: [
          '服务京东零售核心业务，覆盖 2000 人团队，支持多轮组织架构调整',
          '主导薪酬体系诊断与重建，完成 15 个岗位族的带宽设计，外部竞争力从 P50 提升至 P65',
          '搭建京东"雏鹰计划"管培生体系，年均培养 50 名管理储备人才，晋升率 70%',
        ],
      },
      {
        company: '华为技术有限公司',
        position: '人力资源专员 / 招聘顾问',
        startDate: '2012-07',
        endDate: '2015-05',
        highlights: [
          '负责华为深圳研究院研发岗位社会招聘，年均完成 200+ 个 HC 招募任务',
          '建立技术岗位结构化面试题库，面试通过率提升 30%，试用期淘汰率下降 20%',
          '参与华为全球校园招聘项目，赴 30+ 所顶尖高校开展宣讲及面试',
        ],
      },
    ],
    education: [
      {
        institution: '武汉大学',
        area: '人力资源管理',
        studyType: '本科',
        startDate: '2008-09',
        endDate: '2012-06',
      },
    ],
    skills: [
      { name: 'HRBP 业务伙伴', level: '精通' },
      { name: '招聘体系搭建', level: '精通' },
      { name: '薪酬体系设计', level: '精通' },
      { name: '绩效管理（OKR/KPI）', level: '掌握' },
      { name: '组织发展与变革', level: '掌握' },
      { name: 'MBTI / DISC 测评工具', level: '掌握' },
      { name: 'SAP HR / Workday', level: '熟悉' },
      { name: 'Excel 人力数据分析', level: '掌握' },
    ],
    projects: [
      {
        name: '百度 AI 人才体系搭建',
        role: '项目负责人',
        startDate: '2020-01',
        endDate: '2020-12',
        description: '针对百度飞桨、NLP、CV 等 AI 核心方向，从零搭建一套完整的算法/AI 人才管理体系。',
        highlights: [
          '设计算法工程师 6 级职级框架，明确每级能力要求和晋升标准',
          '建立技术能力评估题库 500+ 题，支持结构化技术面试',
          '体系落地后，AI 核心岗关键人才流失率从 18% 降至 10%',
        ],
      },
      {
        name: '京东薪酬体系诊断与重建',
        role: '主导 HRBP',
        startDate: '2017-03',
        endDate: '2017-11',
        description: '针对京东零售事业群核心岗位薪酬竞争力不足问题，开展全面薪酬诊断与重建项目。',
        highlights: [
          '对标 BAT、京东 20 个核心竞品企业，完成 15 个岗位族薪酬带宽设计',
          '重建后核心岗位市场竞争力从 P50 提升至 P65，关键人才 offer 接受率提升 22%',
          '项目荣获集团 HR 年度最佳实践奖',
        ],
      },
    ],
  },

  '法律合规': {
    basics: {
      name: '吴正',
      title: '资深律师 / 合规管理专家',
      email: 'wuzheng@law.com',
      phone: '139-5566-7788',
      location: '北京',
      summary: '14 年法律实务经验，曾供职于金杜律师事务所、中伦律师事务所及北京市朝阳区人民法院。专注公司并购、资本市场与数据合规领域，参与百亿级并购交易法律顾问工作，精通 GDPR、《个人信息保护法》等合规体系建设，具备丰富的跨境业务法律经验。',
    },
    experience: [
      {
        company: '金杜律师事务所',
        position: '资深合伙人 / 公司并购业务组',
        startDate: '2018-06',
        endDate: '至今',
        highlights: [
          '主导 20+ 亿元以上跨境并购项目法律顾问工作，累计交易规模超 300 亿元',
          '为多家 A 股及港股上市公司提供持续证券合规顾问服务，覆盖信披、股权激励、关联交易等',
          '主持互联网企业数据合规项目 15 个，帮助客户建立符合《数据安全法》《个人信息保护法》的合规体系',
          '担任仲裁员，参与中国国际经济贸易仲裁委员会仲裁案件 8 件',
          '入选 Legal 500 中国 2022、2023 年度 TMT 领域推荐律师',
        ],
      },
      {
        company: '中伦律师事务所',
        position: '律师 / 资本市场业务组',
        startDate: '2013-07',
        endDate: '2018-05',
        highlights: [
          '参与 10+ 家企业 IPO 法律顾问工作（沪深交易所），融资规模合计超 80 亿元',
          '负责上市公司再融资（定增、可转债）项目 8 个，审核通过率 100%',
          '协助客户完成 VIE 架构搭建及境外开曼架构重组 5 个',
          '获中伦律师事务所 2016 年度优秀律师奖',
        ],
      },
      {
        company: '北京市朝阳区人民法院',
        position: '书记员 / 民商事法庭',
        startDate: '2010-07',
        endDate: '2013-06',
        highlights: [
          '参与民商事案件审理 500+ 件，涵盖合同纠纷、股权争议、知识产权案件',
          '独立完成裁定书、调解书起草工作，法律文书准确率 100%',
          '获评 2012 年度法院系统优秀工作人员',
        ],
      },
    ],
    education: [
      {
        institution: '北京大学',
        area: '法律（公司法方向）',
        studyType: '硕士',
        startDate: '2008-09',
        endDate: '2010-06',
      },
      {
        institution: '中国政法大学',
        area: '法学',
        studyType: '本科',
        startDate: '2004-09',
        endDate: '2008-06',
      },
    ],
    skills: [
      { name: '公司并购（M&A）', level: '精通' },
      { name: '资本市场与证券合规', level: '精通' },
      { name: '数据合规（PIPL / GDPR）', level: '精通' },
      { name: '商事仲裁', level: '掌握' },
      { name: 'VIE 架构 / 跨境交易', level: '掌握' },
      { name: '知识产权保护', level: '掌握' },
      { name: '英语法律文书', level: '精通' },
    ],
    projects: [
      {
        name: '某科技独角兽赴美上市法律顾问',
        role: '主办律师',
        startDate: '2021-06',
        endDate: '2022-03',
        description: '担任某估值 80 亿美元 SaaS 企业赴纽交所 IPO 的发行人法律顾问，全程参与 F-1 起草、SEC 问询回复及路演支持。',
        highlights: [
          '主导 F-1 招股书 500 页核心法律章节起草，独立完成风险因素部分（100+ 条）',
          '协助回复 SEC 三轮问询，问题数从 120 条降至 0 条，成功通过注册生效',
          '项目荣获 IFLR 亚太区 2022 年度优秀交易奖',
        ],
      },
      {
        name: '头部互联网企业数据合规体系建设',
        role: '合规顾问',
        startDate: '2022-09',
        endDate: '2023-06',
        description: '为某月活 3 亿用户的互联网平台，建立覆盖全业务线的个人信息保护合规体系。',
        highlights: [
          '完成全集团 50 个业务场景的数据流转图与隐私影响评估（PIA）',
          '起草《隐私政策》《用户授权协议》等核心文件并完成法规对标',
          '体系通过国家网信办专项检查，客户合规风险从"高"降至"低"',
        ],
      },
    ],
  },

  '校招': {
    basics: {
      name: '林晓',
      title: '应届毕业生 | 产品 / 运营 / 数据分析方向',
      email: 'linxiao@student.com',
      phone: '188-0011-2233',
      location: '杭州 / 北京 / 上海（均可）',
      summary: '浙江大学计算机科学与技术专业本科 + 上海交通大学软件工程专业硕士在读（预计 2025 年 6 月毕业）。曾在字节跳动、腾讯各完成一段实习，具备互联网产品、数据分析、运营的综合实践经验。学业成绩优秀（GPA 3.85/4.0），热爱互联网，期待加入有活力的团队继续成长。',
    },
    experience: [
      {
        company: '字节跳动',
        position: '产品经理实习生 / 抖音电商',
        startDate: '2024-07',
        endDate: '2024-12',
        highlights: [
          '负责抖音电商"商家工具箱"需求整理与 PRD 撰写，协调前后端完成 3 个小功能上线',
          '通过数据分析（SQL + GrowingIO）发现商家工具使用断点，提出优化方案并落地，工具渗透率提升 8%',
          '参与竞品分析周报撰写，对比淘宝、拼多多 6 个核心功能模块，输出 20 页深度报告',
          '获字节跳动实习生"优秀实习生"称号（同期 Top 10%）',
        ],
      },
      {
        company: '腾讯',
        position: '运营实习生 / 微信公众号生态',
        startDate: '2023-07',
        endDate: '2023-12',
        highlights: [
          '负责公众号生态运营数据日报，每日监测 30+ 核心指标，识别异常并输出分析报告',
          '协助策划"创作者成长计划"活动，参与创作者 3000 人，活动期间新增粉丝量提升 25%',
          '独立运营 2 个测试公众号，3 个月涨粉 1.2 万，单篇最高阅读 8 万',
        ],
      },
    ],
    education: [
      {
        institution: '上海交通大学',
        area: '软件工程',
        studyType: '硕士（在读）',
        startDate: '2022-09',
        endDate: '2025-06',
      },
      {
        institution: '浙江大学',
        area: '计算机科学与技术',
        studyType: '本科',
        startDate: '2018-09',
        endDate: '2022-06',
      },
    ],
    skills: [
      { name: 'SQL / 数据分析', level: '掌握' },
      { name: 'Python（数据处理）', level: '掌握' },
      { name: 'Axure / Figma 原型', level: '掌握' },
      { name: '需求分析与 PRD 撰写', level: '掌握' },
      { name: '竞品分析', level: '熟悉' },
      { name: 'Excel / Power BI', level: '掌握' },
      { name: '英语（六级 580）', level: '掌握' },
      { name: 'A/B 测试 / 用户调研', level: '熟悉' },
    ],
    projects: [
      {
        name: '基于大语言模型的个性化学习路径推荐系统',
        role: '主要开发者',
        startDate: '2023-09',
        endDate: '2024-04',
        description: '硕士毕业设计，基于 GPT-4 API + RAG 架构，面向计算机专业学生的智能学习规划助手。',
        highlights: [
          '独立完成系统设计、开发与测试，技术栈：Python / FastAPI / Faiss / React',
          '接入 100+ 门在线课程资源，实现个性化推荐精准度 78%（对比协同过滤提升 18%）',
          '部署至学院内网测试，获 50 名学生使用，满意度评分 4.6/5.0',
          '相关论文已投至 AAAI 2025 Workshop',
        ],
      },
      {
        name: '校园二手书交易小程序',
        role: '产品经理 + 前端开发',
        startDate: '2022-03',
        endDate: '2022-09',
        description: '面向浙大学生的微信小程序，解决二手教材流转效率低的问题，同时降低学生购书成本。',
        highlights: [
          '独立完成需求调研、产品设计与前端开发（微信原生小程序 + Node.js 后端）',
          '上线 3 个月内注册用户 5000 人，完成交易 1200 笔，成交总额 3 万元',
          '获浙江大学第十三届"求是杯"创新创业大赛三等奖',
        ],
      },
    ],
  },
};
