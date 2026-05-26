# ResumeForge — AI 驱动的跨端简历平台设计文档

## 1. 产品概述

### 1.1 定位

一站式 AI 简历平台，用户可基于 HTML 模板可视化编辑简历、一键导出 PDF，也可通过 AI Agent 从零生成或优化简历。覆盖 Web 桌面端、H5 移动端、iOS/Android App、微信小程序。

### 1.2 核心能力

| 能力 | 说明 |
|------|------|
| 模板编辑 | 基于 HTML 模板的 WYSIWYG 编辑器（Web）/ 表单编辑器（移动端/小程序） |
| PDF 导出 | 服务端 Puppeteer 渲染，支持 A4、中文字体、自定义样式 |
| AI Agent | 智能生成简历、优化内容、ATS 关键词匹配、针对 JD 定制 |
| 模板市场 | 内置模板 + 用户可上传/分享模板 |
| 跨端支持 | Web / H5 / 微信小程序 / App 四端统一体验 |

### 1.3 目标用户

- 应届毕业生：需要从零创建简历
- 职场人士：需要针对不同岗位定制简历
- 自由职业者：需要个性化简历展示

---

## 2. 技术架构

### 2.1 整体架构

```
┌──────────────────────────────────────────────────────────┐
│                      客户端 (Clients)                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Web 桌面  │  │  H5 移动  │  │ 微信小程序 │  │   App    │  │
│  │ React+Vite│  │   Taro    │  │   Taro    │  │React Native│ │
│  └─────┬────┘  └─────┬────┘  └─────┬────┘  └─────┬────┘  │
│        │             │             │             │        │
│        └─────────────┴──────┬──────┴─────────────┘        │
│                             │                              │
│                      ┌──────▼──────┐                       │
│                      │  API Gateway │                       │
│                      │   (Nginx)    │                       │
│                      └──────┬──────┘                       │
└─────────────────────────────┼──────────────────────────────┘
                              │
┌─────────────────────────────▼──────────────────────────────┐
│                    服务端 (Node.js)                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │               Express + TypeScript                    │  │
│  ├──────────┬──────────┬──────────┬──────────┬─────────┤  │
│  │ Auth     │ Resume   │ Template │ AI Agent │  Export  │  │
│  │ Service  │ Service  │ Service  │ Service  │ Service  │  │
│  └────┬─────┴────┬─────┴────┬─────┴────┬─────┴────┬────┘  │
│       │          │          │          │          │        │
│  ┌────▼──┐  ┌───▼───┐  ┌───▼──┐  ┌───▼───┐  ┌──▼────┐  │
│  │  JWT  │  │Postgre│  │ Redis │  │Claude/ │  │Puppet-│  │
│  │+OAuth │  │  SQL   │  │ Cache │  │OpenAI  │  │ eer   │  │
│  └───────┘  └───────┘  └──────┘  └───────┘  └───────┘  │
│                                                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              OSS (文件存储: 头像/模板/PDF)              │  │
│  └──────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

### 2.2 跨端策略

核心决策：**Web 桌面端独立 React 应用 + Taro 覆盖 H5/小程序/App**。

原因：简历编辑器是核心体验，Web 端需要完整的 WYSIWYG HTML 编辑能力（contentEditable、拖拽、实时预览），这在小程序/App 中无法实现。移动端采用表单式编辑 + 预览的方式，体验更适合触屏操作。

| 端 | 框架 | 编辑模式 | 说明 |
|----|------|----------|------|
| Web 桌面 | React 18 + Vite | WYSIWYG 可视化编辑 | 完整编辑体验，支持拖拽、实时样式调整 |
| H5 移动 | Taro 3.x (React) | 表单编辑 + 实时预览 | 适配移动端触屏操作 |
| 微信小程序 | Taro 3.x (React) | 表单编辑 + 实时预览 | 受限环境，表单最稳定 |
| App | Taro 3.x (RN) | 表单编辑 + 实时预览 | 共享 Taro 代码，一套逻辑 |

### 2.3 Monorepo 结构

```
resume-platform/
├── package.json              # pnpm workspace root
├── pnpm-workspace.yaml
├── packages/
│   ├── server/               # Node.js 后端
│   │   ├── src/
│   │   │   ├── app.ts
│   │   │   ├── routes/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── middleware/
│   │   │   └── config/
│   │   ├── prisma/           # Prisma schema & migrations
│   │   └── package.json
│   │
│   ├── web/                  # React Web 桌面端
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Editor/   # WYSIWYG 编辑器
│   │   │   │   ├── Preview/  # 简历预览
│   │   │   │   └── common/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── stores/       # Zustand stores
│   │   │   └── styles/
│   │   └── package.json
│   │
│   ├── mobile/               # Taro 跨端 (H5/小程序/App)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── FormEditor/  # 表单式编辑器
│   │   │   │   ├── Preview/     # 简历预览 (Canvas/Image)
│   │   │   │   └── common/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   └── stores/
│   │   └── package.json
│   │
│   ├── shared/               # 跨端共享代码
│   │   ├── src/
│   │   │   ├── types/        # TypeScript 类型定义
│   │   │   ├── api/          # API client (axios 封装)
│   │   │   ├── constants/
│   │   │   ├── utils/
│   │   │   └── templates/    # 模板数据 schema 定义
│   │   └── package.json
│   │
│   └── resume-engine/        # 简历渲染引擎
│       ├── src/
│       │   ├── renderer.ts   # HTML 模板 + 数据 → 渲染输出
│       │   ├── schema.ts     # 模板数据 schema 校验
│       │   └── parser.ts     # 模板解析器
│       └── package.json
│
├── templates/                # 内置 HTML 简历模板
│   ├── classic/
│   │   ├── template.html
│   │   ├── style.css
│   │   ├── schema.json       # 该模板的数据字段定义
│   │   └── thumbnail.png
│   ├── modern/
│   ├── minimal/
│   └── creative/
│
└── docs/
```

---

## 3. 简历模板引擎

### 3.1 模板格式

每个模板由三部分组成：

**template.html** — 使用 Handlebars 语法绑定数据：

```html
<div class="resume" data-template="classic">
  <header class="resume-header">
    <h1>{{basics.name}}</h1>
    <p class="title">{{basics.title}}</p>
    <div class="contact">
      <span>{{basics.email}}</span>
      <span>{{basics.phone}}</span>
      <span>{{basics.location}}</span>
    </div>
  </header>

  <section class="summary">
    <h2>个人简介</h2>
    <p>{{basics.summary}}</p>
  </section>

  {{#each experience}}
  <section class="experience-item">
    <h3>{{company}} — {{position}}</h3>
    <span class="date">{{startDate}} - {{endDate}}</span>
    <ul>
      {{#each highlights}}
      <li>{{this}}</li>
      {{/each}}
    </ul>
  </section>
  {{/each}}

  {{#each education}}
  <section class="education-item">
    <h3>{{institution}}</h3>
    <p>{{area}} · {{studyType}} · {{startDate}} - {{endDate}}</p>
  </section>
  {{/each}}

  {{#if skills.length}}
  <section class="skills">
    <h2>技能</h2>
    <div class="skill-tags">
      {{#each skills}}
      <span class="tag">{{name}}: {{level}}</span>
      {{/each}}
    </div>
  </section>
  {{/if}}
</div>
```

**style.css** — 模板样式，支持 @media print：

```css
.resume { max-width: 210mm; margin: 0 auto; font-family: "Source Han Sans", sans-serif; }
.resume-header { text-align: center; border-bottom: 2px solid #333; }
@media print { .resume { margin: 0; } }
```

**schema.json** — 声明模板可编辑字段及类型：

```json
{
  "templateId": "classic",
  "version": "1.0.0",
  "name": "经典简洁",
  "sections": [
    {
      "key": "basics",
      "label": "基本信息",
      "fields": [
        { "key": "name", "label": "姓名", "type": "text", "required": true },
        { "key": "title", "label": "职位", "type": "text" },
        { "key": "email", "label": "邮箱", "type": "email", "required": true },
        { "key": "phone", "label": "电话", "type": "tel" },
        { "key": "location", "label": "所在城市", "type": "text" },
        { "key": "avatar", "label": "头像", "type": "image" },
        { "key": "summary", "label": "个人简介", "type": "richtext" }
      ]
    },
    {
      "key": "experience",
      "label": "工作经历",
      "type": "array",
      "fields": [
        { "key": "company", "label": "公司", "type": "text", "required": true },
        { "key": "position", "label": "职位", "type": "text", "required": true },
        { "key": "startDate", "label": "开始日期", "type": "date" },
        { "key": "endDate", "label": "结束日期", "type": "date" },
        { "key": "highlights", "label": "工作亮点", "type": "array:text" }
      ]
    },
    {
      "key": "education",
      "label": "教育经历",
      "type": "array",
      "fields": [
        { "key": "institution", "label": "学校", "type": "text", "required": true },
        { "key": "area", "label": "专业", "type": "text" },
        { "key": "studyType", "label": "学历", "type": "select", "options": ["高中", "大专", "本科", "硕士", "博士"] },
        { "key": "startDate", "label": "开始日期", "type": "date" },
        { "key": "endDate", "label": "结束日期", "type": "date" }
      ]
    },
    {
      "key": "skills",
      "label": "技能",
      "type": "array",
      "fields": [
        { "key": "name", "label": "技能名称", "type": "text" },
        { "key": "level", "label": "熟练度", "type": "select", "options": ["了解", "熟悉", "掌握", "精通"] }
      ]
    },
    {
      "key": "projects",
      "label": "项目经历",
      "type": "array",
      "fields": [
        { "key": "name", "label": "项目名称", "type": "text" },
        { "key": "role", "label": "担任角色", "type": "text" },
        { "key": "description", "label": "项目描述", "type": "richtext" },
        { "key": "highlights", "label": "项目亮点", "type": "array:text" }
      ]
    }
  ]
}
```

### 3.2 渲染流程

```
用户数据 (JSON) + 模板 (HTML+CSS) → Handlebars 编译 → 完整 HTML → 预览/PDF
```

`resume-engine` 包负责：
1. 解析模板 HTML 中的 Handlebars 占位符
2. 根据 schema.json 校验用户数据完整性
3. 编译输出完整 HTML（内联 CSS）
4. Web 端：直接渲染到 iframe 中供预览/编辑
5. 服务端：交给 Puppeteer 生成 PDF

### 3.3 Web 端 WYSIWYG 编辑器

Web 端编辑器基于以下设计：

- 左侧面板：模板选择 + 模块排序（拖拽）
- 中间区域：简历实时预览（iframe 渲染，点击区域高亮可编辑字段）
- 右侧面板：选中模块的表单编辑

编辑方式：
1. **点击编辑**：点击预览区域中的文字，右侧面板展开对应字段的编辑表单
2. **直接编辑**：支持对预览区文字 contentEditable 直接修改，同步回数据层
3. **拖拽排序**：左侧模块列表支持拖拽，调整简历板块顺序
4. **实时预览**：数据变更后 debounce 200ms 重新渲染预览

技术选型：
- 编辑状态管理：Zustand
- 拖拽：@dnd-kit/core
- 富文本字段：TipTap (用于简介、项目描述等 richtext 字段)
- 预览渲染：iframe + postMessage 通信

### 3.4 移动端/小程序表单编辑器

- 顶部：缩略预览（server 生成的图片快照）
- 主体：按 section 分组的表单
- 底部：操作栏（保存/预览/导出）

每个 section 折叠展示，点击展开编辑。表单组件根据 schema 中的 field type 自动生成。

### 3.5 模板存储策略

内置模板以文件形式存放在 `templates/` 目录，服务端启动时通过 seed 脚本同步到 Template 数据表。运行时只读数据库，不读文件系统。用户自定义模板直接存入数据库。

```
templates/ (源文件, 开发维护) → seed 脚本 → Template 表 (运行时读取)
```

### 3.6 自动保存

- 编辑器数据变更触发 debounced auto-save（3 秒无操作后保存）
- 保存使用 PATCH /api/resumes/:id，只传变更字段
- 保存状态提示：未保存 → 保存中... → 已保存
- 断网时数据暂存 localStorage，恢复后同步

---

## 4. PDF 导出

### 4.1 方案

采用服务端 Puppeteer 渲染，原因：
- 客户端 html2canvas/jsPDF 方案中文字体渲染差、分页不稳定
- 服务端方案一致性好，输出可控
- 支持 @media print CSS 精确控制打印样式

### 4.2 导出流程

```
客户端请求导出
    ↓
服务端获取用户简历数据 + 模板
    ↓
resume-engine 渲染完整 HTML（内联 CSS + 中文字体）
    ↓
Puppeteer 启动无头浏览器
    ↓
加载 HTML → 等待渲染完成 → page.pdf()
    ↓
PDF 上传 OSS → 返回下载链接
    ↓
客户端下载 PDF
```

### 4.3 PDF 配置

```typescript
interface PdfExportOptions {
  format: 'A4' | 'Letter';
  margin: { top: string; right: string; bottom: string; left: string };
  printBackground: boolean;   // 导出背景色
  scale: number;              // 缩放比例
  landscape: boolean;         // 横向/纵向
}
```

### 4.4 性能优化

- Puppeteer Browser 实例池：预启动 3-5 个浏览器实例，复用 Page
- 导出队列：Bull 队列管理并发，限制同时 5 个导出任务
- 缓存：相同数据 + 模板 hash 的 PDF 缓存 10 分钟
- 超时：单次导出 30s 超时限制

---

## 5. AI Agent 系统

### 5.1 能力矩阵

| 功能 | 输入 | 输出 | 说明 |
|------|------|------|------|
| 从零生成 | 基本信息 + 目标岗位 | 完整简历 JSON | 引导式对话收集信息后一次性生成 |
| 内容优化 | 现有简历 + 优化方向 | 优化后的简历 JSON + diff | STAR 法则重写、量化数据补充 |
| JD 匹配 | 现有简历 + 岗位 JD | 匹配度报告 + 调整建议 | 关键词匹配、缺失技能提示 |
| 翻译 | 现有简历 + 目标语言 | 翻译后的简历 JSON | 中英互译，保持专业术语准确 |

### 5.2 AI Agent 架构

```
用户请求
    ↓
┌─────────────────────────────────┐
│         Agent Orchestrator       │
│  (对话管理 + 意图识别 + 路由)     │
└────────────┬────────────────────┘
             │
    ┌────────┼────────┬────────────┐
    ↓        ↓        ↓            ↓
┌───────┐┌───────┐┌────────┐┌──────────┐
│生成    ││优化    ││JD 匹配 ││  翻译     │
│Agent  ││Agent  ││Agent   ││  Agent   │
└───┬───┘└───┬───┘└───┬────┘└────┬─────┘
    │        │        │          │
    └────────┴────┬───┴──────────┘
                  ↓
         ┌──────────────┐
         │  LLM Provider │
         │ (Claude API)  │
         └──────────────┘
```

### 5.3 生成 Agent 对话流

```
Step 1: 收集基本信息
  Agent: "请告诉我你的姓名、联系方式和所在城市"
  User: 提供基本信息

Step 2: 明确目标
  Agent: "你想应聘什么岗位？可以提供目标公司或 JD 链接"
  User: "前端开发工程师，目标字节跳动"

Step 3: 收集经历
  Agent: "请简单描述你的工作经历（公司、职位、时间、做了什么）"
  User: 提供经历摘要

Step 4: 补充信息
  Agent: 根据目标岗位追问：教育背景、技能、项目细节
  User: 补充

Step 5: 生成简历
  Agent: 基于所有信息 + 目标岗位 + STAR 法则生成完整简历 JSON
  → 自动填充到选中的模板 → 用户可继续编辑
```

### 5.4 Prompt 工程

每个 Agent 使用结构化 System Prompt：

```
你是一个专业的简历顾问。你的任务是帮助用户创建针对 {targetPosition} 岗位的简历。

规则：
1. 使用 STAR 法则（情景-任务-行动-结果）描述工作经历
2. 用数据量化成果（提升 XX%、管理 XX 人团队、处理 XX 量级）
3. 关键词与目标岗位 JD 高度匹配
4. 语言简洁专业，避免冗余
5. 输出格式必须是指定的 JSON Schema

输出 JSON Schema:
{schema}
```

### 5.5 流式输出

AI 生成采用 SSE (Server-Sent Events) 流式输出：
- 生成过程实时展示在编辑器中
- 用户可以随时中断
- 每个 section 生成完毕后立即渲染到预览

---

## 6. 数据模型

### 6.1 核心实体

```prisma
model User {
  id          String   @id @default(cuid())
  email       String?  @unique
  phone       String?  @unique
  name        String?
  avatar      String?
  provider    String   // local | wechat | google
  providerId  String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  resumes     Resume[]
}

model Resume {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  title       String   @default("未命名简历")
  templateId  String
  data        Json     // 简历内容数据，结构遵循模板 schema
  sectionOrder String[] // 模块排列顺序
  customCss   String?  // 用户自定义样式覆盖
  isPublic    Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  exports     Export[]
  aiSessions  AiSession[]

  @@index([userId])
}

model Template {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String?
  category    String   // classic | modern | creative | minimal
  html        String   // 模板 HTML
  css         String   // 模板 CSS
  schema      Json     // 字段定义
  thumbnail   String   // 缩略图 URL
  isPremium   Boolean  @default(false)
  authorId    String?
  downloads   Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Export {
  id          String   @id @default(cuid())
  resumeId    String
  resume      Resume   @relation(fields: [resumeId], references: [id])
  format      String   // pdf | png | html
  fileUrl     String
  fileSize    Int
  createdAt   DateTime @default(now())

  @@index([resumeId])
}

model AiSession {
  id          String   @id @default(cuid())
  resumeId    String
  resume      Resume   @relation(fields: [resumeId], references: [id])
  type        String   // generate | optimize | jd-match | translate
  messages    Json     // 对话历史
  status      String   // active | completed | cancelled
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([resumeId])
}
```

---

## 7. API 设计

### 7.1 RESTful API

**认证**

```
POST   /api/auth/register          # 邮箱/手机注册
POST   /api/auth/login             # 登录
POST   /api/auth/login/wechat      # 微信 OAuth 登录
POST   /api/auth/refresh           # 刷新 token
POST   /api/auth/logout            # 登出
```

**简历 CRUD**

```
GET    /api/resumes                 # 获取用户简历列表
POST   /api/resumes                 # 创建简历
GET    /api/resumes/:id             # 获取简历详情
PUT    /api/resumes/:id             # 更新简历（全量）
PATCH  /api/resumes/:id             # 部分更新简历字段
DELETE /api/resumes/:id             # 删除简历
POST   /api/resumes/:id/duplicate   # 复制简历
```

**模板**

```
GET    /api/templates               # 模板列表 (支持分类筛选)
GET    /api/templates/:id           # 模板详情
GET    /api/templates/:id/preview   # 模板预览 (带示例数据)
```

**导出**

```
POST   /api/resumes/:id/export/pdf  # 导出 PDF
POST   /api/resumes/:id/export/png  # 导出 PNG 图片
POST   /api/resumes/:id/export/html # 导出 HTML
GET    /api/exports/:id/status      # 查询导出状态
GET    /api/exports/:id/download    # 下载导出文件
```

**AI Agent**

```
POST   /api/ai/sessions             # 创建 AI 会话
POST   /api/ai/sessions/:id/message # 发送消息 (SSE 流式响应)
POST   /api/ai/sessions/:id/stop    # 中断生成
GET    /api/ai/sessions/:id         # 获取会话历史
POST   /api/ai/jd-match             # JD 匹配分析
POST   /api/ai/translate            # 简历翻译
```

**用户**

```
GET    /api/user/profile            # 获取用户信息
PUT    /api/user/profile            # 更新用户信息
PUT    /api/user/avatar             # 更新头像
```

### 7.2 实时通信

- PDF 导出进度：SSE `/api/exports/:id/progress`
- AI 生成流式输出：SSE `/api/ai/sessions/:id/stream`

---

## 8. 服务端详细设计

### 8.1 技术栈

| 组件 | 选型 | 说明 |
|------|------|------|
| 框架 | Express 5 + TypeScript | 成熟稳定，生态丰富 |
| ORM | Prisma | 类型安全，迁移方便 |
| 数据库 | PostgreSQL 16 | JSON 字段支持，全文搜索 |
| 缓存 | Redis 7 | 会话、导出缓存、限流 |
| 队列 | BullMQ | PDF 导出任务队列 |
| PDF | Puppeteer | 服务端 HTML→PDF |
| AI | Anthropic Claude SDK | 流式输出，结构化输出 |
| 文件存储 | AWS S3 / 阿里云 OSS | PDF、图片存储 |
| 认证 | JWT (access + refresh) | 双 token 机制 |
| 校验 | Zod | 请求参数校验 |
| 日志 | Pino | 结构化日志 |

### 8.2 目录结构

```
packages/server/src/
├── app.ts                    # Express 应用入口
├── config/
│   ├── index.ts              # 环境变量配置
│   └── database.ts
├── middleware/
│   ├── auth.ts               # JWT 认证
│   ├── validate.ts           # Zod 校验
│   ├── rateLimit.ts          # 限流
│   └── errorHandler.ts       # 统一错误处理
├── routes/
│   ├── auth.ts
│   ├── resume.ts
│   ├── template.ts
│   ├── export.ts
│   ├── ai.ts
│   └── user.ts
├── services/
│   ├── auth.service.ts
│   ├── resume.service.ts
│   ├── template.service.ts
│   ├── export.service.ts     # PDF/PNG/HTML 导出
│   ├── ai/
│   │   ├── orchestrator.ts   # Agent 路由
│   │   ├── generate.agent.ts
│   │   ├── optimize.agent.ts
│   │   ├── jd-match.agent.ts
│   │   ├── translate.agent.ts
│   │   └── prompts/          # System prompts
│   └── storage.service.ts    # OSS 文件操作
├── models/                   # Prisma 生成的类型 + 扩展
├── utils/
│   ├── puppeteer-pool.ts     # 浏览器实例池
│   └── queue.ts              # BullMQ 队列配置
└── types/
```

### 8.3 PDF 导出服务关键实现

```typescript
// export.service.ts 核心逻辑
class ExportService {
  async exportPdf(resumeId: string, options: PdfExportOptions): Promise<string> {
    // 1. 获取简历数据和模板
    // 2. resume-engine 渲染完整 HTML
    // 3. 从浏览器实例池获取 page
    // 4. page.setContent(html) → page.pdf(options)
    // 5. 上传到 OSS
    // 6. 返回下载 URL
  }
}
```

---

## 9. Web 客户端详细设计

### 9.1 技术栈

| 组件 | 选型 | 说明 |
|------|------|------|
| 框架 | React 18 + Vite 6 | 快速开发，HMR |
| 路由 | React Router 7 | SPA 路由 |
| 状态 | Zustand | 轻量，TypeScript 友好 |
| HTTP | Axios + React Query | 缓存、重试、乐观更新 |
| UI 库 | Ant Design 5 | 企业级组件库，中文友好 |
| 拖拽 | @dnd-kit/core | 模块排序 |
| 富文本 | TipTap | richtext 字段编辑 |
| 样式 | CSS Modules + TailwindCSS | 组件级样式隔离 |

### 9.2 页面结构

```
/                           # 首页 (Landing)
/login                      # 登录/注册
/dashboard                  # 我的简历列表
/templates                  # 模板市场
/editor/:resumeId           # 简历编辑器 ⭐ 核心页面
/preview/:resumeId          # 简历预览 (全屏)
/ai/:resumeId               # AI 助手对话页
/settings                   # 个人设置
```

### 9.3 编辑器页面布局

```
┌───────────────────────────────────────────────────────┐
│  TopBar: [← 返回] [简历标题(可编辑)] [模板切换] [AI助手] [导出▾] [保存]  │
├────────┬────────────────────────────┬─────────────────┤
│        │                            │                 │
│ 左侧面板 │      中间预览区域            │    右侧编辑面板   │
│ 240px  │       flex-1               │     320px       │
│        │                            │                 │
│ ┌────┐ │  ┌──────────────────────┐  │  ┌───────────┐  │
│ │基本 │ │  │                      │  │  │ 姓名       │  │
│ │信息 │ │  │    iframe 渲染        │  │  │ [张三    ] │  │
│ ├────┤ │  │    完整简历预览         │  │  │           │  │
│ │工作 │ │  │                      │  │  │ 职位       │  │
│ │经历 │ │  │    点击高亮区域        │  │  │ [前端工程师]│  │
│ ├────┤ │  │    → 右侧面板编辑      │  │  │           │  │
│ │教育 │ │  │                      │  │  │ 邮箱       │  │
│ │背景 │ │  │                      │  │  │ [a@b.com ] │  │
│ ├────┤ │  │                      │  │  │           │  │
│ │技能 │ │  └──────────────────────┘  │  │ ...       │  │
│ ├────┤ │                            │  └───────────┘  │
│ │项目 │ │                            │                 │
│ │经历 │ │                            │                 │
│ └────┘ │                            │                 │
│        │                            │                 │
│ [+模块] │                            │                 │
├────────┴────────────────────────────┴─────────────────┤
│  BottomBar: [缩放 100%] [网格开关] [撤销] [重做]              │
└───────────────────────────────────────────────────────┘
```

### 9.4 核心状态管理

```typescript
// stores/editor.store.ts
interface EditorStore {
  resume: ResumeData | null;
  template: Template | null;
  activeSection: string | null;    // 当前编辑的 section key
  activeField: string | null;      // 当前编辑的 field key
  isDirty: boolean;                // 是否有未保存修改
  history: ResumeData[];           // 撤销历史
  historyIndex: number;

  // Actions
  setResumeData: (data: Partial<ResumeData>) => void;
  updateField: (sectionKey: string, fieldKey: string, value: any) => void;
  reorderSections: (fromIndex: number, toIndex: number) => void;
  undo: () => void;
  redo: () => void;
  save: () => Promise<void>;       // debounced 自动保存
}
```

---

## 10. 移动端 (Taro) 详细设计

### 10.1 技术栈

| 组件 | 选型 | 说明 |
|------|------|------|
| 框架 | Taro 3.x | React 语法，编译到 H5/小程序/RN |
| 状态 | Zustand | 与 Web 端一致 |
| UI | @taroify/core | Taro 专用组件库，Vant 风格 |
| HTTP | Taro.request 封装 | 兼容各端网络请求 |

### 10.2 页面结构

```
/pages/index/index          # 首页 (简历列表 + 快速创建)
/pages/login/index          # 登录
/pages/templates/index      # 模板选择
/pages/editor/index         # 表单编辑器
/pages/preview/index        # 简历预览 (图片模式)
/pages/ai-chat/index        # AI 对话
/pages/profile/index        # 个人中心
```

### 10.3 移动端编辑器

由于小程序/RN 无法使用 contentEditable，采用表单编辑模式：

```
┌─────────────────────┐
│  ← 编辑简历    [预览] │
├─────────────────────┤
│ ┌─────────────────┐ │
│ │  简历缩略预览     │ │
│ │  (服务端生成图片)  │ │
│ │    160px 高      │ │
│ └─────────────────┘ │
├─────────────────────┤
│                     │
│ ▶ 基本信息    [展开] │
│ ┌─────────────────┐ │
│ │ 姓名 [        ] │ │
│ │ 职位 [        ] │ │
│ │ 邮箱 [        ] │ │
│ │ 电话 [        ] │ │
│ │ 城市 [        ] │ │
│ │ 简介 [        ] │ │
│ └─────────────────┘ │
│                     │
│ ▶ 工作经历          │
│ ▶ 教育背景          │
│ ▶ 技能特长          │
│ ▶ 项目经历          │
│                     │
├─────────────────────┤
│  [AI优化]  [保存]  [导出PDF]│
└─────────────────────┘
```

### 10.4 预览方案

小程序不支持 iframe 渲染 HTML，预览方案：
1. 用户编辑数据后，调用服务端 API
2. 服务端渲染 HTML → Puppeteer 截图 → 返回图片 URL
3. 客户端展示图片预览
4. 增加 debounce（1s）+ 缓存，避免频繁请求

H5 端可以使用 iframe 实现实时预览，与 Web 端逻辑复用。

---

## 11. 认证系统

### 11.1 认证方式

| 方式 | Web | H5 | 小程序 | App |
|------|-----|-----|--------|-----|
| 邮箱+密码 | ✅ | ✅ | ❌ | ✅ |
| 手机验证码 | ✅ | ✅ | ✅ | ✅ |
| 微信 OAuth | ✅ | ✅ (公众号) | ✅ (wx.login) | ✅ (开放平台) |
| Google OAuth | ✅ | ✅ | ❌ | ✅ |

### 11.2 Token 策略

- Access Token: JWT, 有效期 2 小时
- Refresh Token: 随机字符串, 存 Redis, 有效期 30 天
- 小程序端: token 存 Taro.setStorageSync
- Web 端: Access Token 存内存, Refresh Token 存 httpOnly cookie

---

## 12. 部署架构

```
┌─────────────────────────────────────────┐
│              CDN (阿里云/Cloudflare)       │
│         静态资源: Web SPA + 图片           │
└────────────────────┬────────────────────┘
                     │
┌────────────────────▼────────────────────┐
│          Nginx (反向代理 + 负载均衡)       │
│   /         → Web SPA 静态文件            │
│   /h5       → H5 静态文件                │
│   /api/*    → Node.js 服务               │
└────────────────────┬────────────────────┘
                     │
        ┌────────────┼────────────┐
        ↓            ↓            ↓
   ┌─────────┐ ┌─────────┐ ┌─────────┐
   │ Node.js │ │ Node.js │ │ Node.js │
   │   #1    │ │   #2    │ │   #3    │
   └────┬────┘ └────┬────┘ └────┬────┘
        │           │           │
        └─────┬─────┴─────┬────┘
              ↓           ↓
        ┌──────────┐ ┌────────┐
        │PostgreSQL│ │ Redis  │
        │  主从     │ │ 集群   │
        └──────────┘ └────────┘
```

### 12.1 容器化

```yaml
# docker-compose.yml 核心服务
services:
  server:
    image: resume-server
    replicas: 3
    environment:
      - DATABASE_URL
      - REDIS_URL
      - CLAUDE_API_KEY
      - OSS_CONFIG
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:16-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
```

---

## 13. 安全设计

| 领域 | 措施 |
|------|------|
| XSS | HTML 模板渲染时 sanitize 用户输入，DOMPurify |
| CSRF | SameSite cookie + CSRF token |
| 注入 | Prisma 参数化查询，Zod 输入校验 |
| 限流 | express-rate-limit: 认证 API 5次/分钟，导出 API 10次/小时 |
| 文件上传 | 限制文件类型/大小，头像 < 2MB，仅允许 jpg/png/webp |
| API 认证 | 所有非公开 API 需 JWT，权限校验用户只能操作自己的数据 |
| 密码 | bcrypt hash, salt rounds 12 |
| 传输 | 全站 HTTPS |

---

## 14. 分期交付计划

### Phase 1: MVP (4 周)

- 用户认证 (邮箱 + 手机)
- 简历 CRUD
- 3 个内置模板 (经典/现代/简约)
- Web 端 WYSIWYG 编辑器
- PDF 导出
- 基础 H5 端 (Taro)

### Phase 2: AI + 多端 (3 周)

- AI 从零生成简历
- AI 内容优化
- 微信小程序适配
- 微信登录
- 模板市场（浏览 + 选用）

### Phase 3: 增强 (3 周)

- JD 匹配分析
- 简历翻译
- App (React Native) 适配
- 更多模板
- 导出 PNG/HTML
- 简历分享（公开链接）

### Phase 4: 商业化 (2 周)

- 付费模板
- 导出次数限制 / 会员制
- 数据统计面板
- 性能优化 + 监控

---

## 15. 非功能需求

| 指标 | 目标 |
|------|------|
| API 响应 | P95 < 200ms (非导出接口) |
| PDF 导出 | P95 < 8s |
| 编辑器首屏 | < 2s (Web), < 3s (H5) |
| 可用性 | 99.9% |
| 并发 | 支持 1000 并发用户 |
| 数据库 | 支持 100 万用户 + 500 万简历 |
