# ResumeForge 服务端数据库设计

## 概述

ResumeForge 数据库基于 PostgreSQL + Prisma ORM，采用 **JSON 列存储** 策略：简历内容以 JSON 字段存储于 Resume 表，围绕它扩展关联表支持用户系统、AI、导出、分享等功能。

选择 JSON 列存储的理由：简历是文档型数据，模板 schema 驱动字段结构，不同模板可自定义不同字段。关系型拆表会导致模板灵活性丧失，且现有全部代码已基于此模式。

## 表结构总览

共 10 张表，分 5 个领域：

| 领域 | 表 | 用途 |
|------|-----|------|
| 用户系统 | User, RefreshToken, VerifyCode | 认证、多端登录、验证码 |
| 简历核心 | Resume, ResumeSnapshot | CRUD、版本快照、多端同步 |
| 模板系统 | Template | 内置/用户模板 |
| 导出 & 文件 | Export, FileUpload | 异步导出队列、文件管理 |
| AI 会话 | AiSession, AiMessage | AI 改写/润色/翻译/JD匹配 |

### ER 关系

```
User ─┬─< Resume ─┬─< Export
      │            └─< ResumeSnapshot
      ├─< AiSession ─< AiMessage
      ├─< RefreshToken
      └─< FileUpload

Template (独立，通过 Resume.templateId 软关联)
VerifyCode (独立，无外键)
```

## 1. 用户系统

### User

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String @id @default(cuid()) | 主键 |
| email | String? @unique | 邮箱（可选） |
| phone | String? @unique | 手机号（可选） |
| password | String? | bcrypt hash，OAuth 用户为 null |
| name | String? | 昵称 |
| avatar | String? | 头像 URL |
| provider | String @default("local") | 认证方式：local / wechat / google |
| providerId | String? | 第三方平台 openid |
| plan | String @default("free") | 会员等级：free / pro / premium |
| planExpiry | DateTime? | 会员到期时间 |
| createdAt | DateTime @default(now()) | |
| updatedAt | DateTime @updatedAt | |

**索引：** `@@unique([provider, providerId])` — 同一第三方平台不能重复绑定。

**关联：** resumes, aiSessions, refreshTokens

### RefreshToken

支持多端登录，每个设备独立 token，可单独踢下线。

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String @id @default(cuid()) | 主键 |
| userId | String | 外键 → User |
| token | String @unique | refresh token hash |
| device | String? | 设备标识：web / h5 / miniapp / app |
| expiresAt | DateTime | 过期时间 |
| createdAt | DateTime @default(now()) | |

**索引：** `@@index([userId])`, `@@index([expiresAt])` — 过期清理用。

### VerifyCode

短信/邮箱验证码，独立于用户表（未注册用户也可发送验证码）。

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String @id @default(cuid()) | 主键 |
| target | String | 手机号或邮箱 |
| code | String | 6 位验证码 |
| type | String | 用途：login / register / reset |
| expiresAt | DateTime | 过期时间 |
| used | Boolean @default(false) | 是否已使用 |
| createdAt | DateTime @default(now()) | |

**索引：** `@@index([target, type])`

## 2. 简历核心

### Resume

在现有表基础上增强：多端同步（乐观锁）、分享、语言标记。

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String @id @default(cuid()) | 主键 |
| userId | String | 外键 → User (onDelete: Cascade) |
| title | String @default("未命名简历") | 简历标题 |
| templateId | String | 关联模板 ID 或 slug |
| data | Json @default("{}") | ResumeData 完整 JSON |
| sectionOrder | String[] @default([...]) | section 显示顺序 |
| customCss | String? | 用户自定义 CSS 覆盖 |
| language | String @default("zh") | 简历语言：zh / en / ja ... |
| isPublic | Boolean @default(false) | 是否公开分享 |
| shareToken | String? @unique | 分享链接 token（nanoid 生成） |
| lastDevice | String? | 最后编辑设备标识 |
| version | Int @default(1) | 乐观锁版本号 |
| createdAt | DateTime @default(now()) | |
| updatedAt | DateTime @updatedAt | |

**索引：** `@@index([userId])`, `@@index([shareToken])`

**新增字段说明：**
- `version`：多端同步乐观锁。PATCH 时带 version，服务端 `WHERE version = :v`，不匹配返回 409。
- `shareToken`：nanoid 短 token，`GET /share/:token` 公开访问简历。
- `language`：支持后续 AI 翻译功能标记源语言。
- `lastDevice`：记录最后编辑来源，辅助多端冲突提示。

### ResumeSnapshot

简历历史版本快照。AI 改写前自动存、导出时自动存、用户可手动存。

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String @id @default(cuid()) | 主键 |
| resumeId | String | 外键 → Resume (onDelete: Cascade) |
| data | Json | 快照时的完整 ResumeData |
| source | String | 触发来源：auto / manual / ai / export |
| label | String? | 用户标注，如 "投腾讯版" |
| createdAt | DateTime @default(now()) | |

**索引：** `@@index([resumeId, createdAt])`

## 3. 模板系统

### Template

在现有表基础上增加职能分类、内置标记、版本号。

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String @id @default(cuid()) | 主键 |
| name | String | 模板名称 |
| slug | String @unique | URL 友好标识 |
| description | String? | 描述 |
| category | String | 风格分类：business / creative / minimal / tech |
| industry | String? | 职能分类：it / finance / design / edu / marketing ... |
| html | String | Handlebars 模板内容 |
| css | String | 样式 |
| schema | Json | TemplateSchema JSON |
| thumbnail | String @default("") | 缩略图 URL |
| isPremium | Boolean @default(false) | 是否付费模板 |
| isBuiltin | Boolean @default(true) | 内置 vs 用户上传 |
| authorId | String? | 用户上传时的作者 ID |
| downloads | Int @default(0) | 下载/使用次数 |
| version | String @default("1.0.0") | 模板版本 |
| createdAt | DateTime @default(now()) | |
| updatedAt | DateTime @updatedAt | |

**索引：** `@@index([category])`, `@@index([industry])`

## 4. 导出 & 文件

### Export

增加异步状态跟踪，支持 BullMQ 队列。

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String @id @default(cuid()) | 主键 |
| resumeId | String | 外键 → Resume (onDelete: Cascade) |
| format | String | 导出格式：pdf / png / html |
| status | String @default("pending") | 状态：pending / processing / done / failed |
| fileUrl | String? | 生成后的文件 URL |
| fileSize | Int? | 文件大小（字节） |
| options | Json? | 导出选项，如 `{ format: "A4", margin: {...} }` |
| error | String? | 失败原因 |
| createdAt | DateTime @default(now()) | |

**索引：** `@@index([resumeId])`, `@@index([status])`

### FileUpload

统一文件管理，追踪头像上传等用户文件。

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String @id @default(cuid()) | 主键 |
| userId | String | 上传用户 |
| key | String @unique | OSS object key |
| url | String | 完整访问 URL |
| mimeType | String | MIME 类型 |
| size | Int | 文件大小（字节） |
| purpose | String | 用途：avatar / resume-attachment |
| createdAt | DateTime @default(now()) | |

**索引：** `@@index([userId])`

## 5. AI 会话（Phase 2）

### AiSession

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String @id @default(cuid()) | 主键 |
| userId | String | 外键 → User (onDelete: Cascade) |
| resumeId | String? | 关联简历（JD 匹配等不需要） |
| type | String | 类型：rewrite / polish / translate / jd-match |
| status | String @default("active") | 状态：active / completed / cancelled |
| context | Json? | 附加上下文（如 JD 原文） |
| createdAt | DateTime @default(now()) | |
| updatedAt | DateTime @updatedAt | |

**索引：** `@@index([userId])`, `@@index([resumeId])`

### AiMessage

| 字段 | 类型 | 说明 |
|------|------|------|
| id | String @id @default(cuid()) | 主键 |
| sessionId | String | 外键 → AiSession (onDelete: Cascade) |
| role | String | 角色：user / assistant / system |
| content | String | 消息内容 |
| metadata | Json? | token 用量、模型版本等 |
| createdAt | DateTime @default(now()) | |

**索引：** `@@index([sessionId, createdAt])`

## 6. Resume.data JSON 格式

写入 `Resume.data` 列的 JSON 结构，与前端 `ResumeData` 类型一致：

```typescript
interface ResumeData {
  basics: {
    name: string;
    title?: string;
    email: string;
    phone?: string;
    location?: string;
    avatar?: string;
    summary?: string;
  };
  experience: Array<{
    company: string;
    position: string;
    startDate?: string;   // ISO date: "2024-01"
    endDate?: string;     // ISO date 或 "至今"
    highlights: string[];
  }>;
  education: Array<{
    institution: string;
    area?: string;
    studyType?: string;
    startDate?: string;
    endDate?: string;
  }>;
  skills: Array<{
    name: string;
    level?: string;
  }>;
  projects: Array<{
    name: string;
    role?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    highlights: string[];
  }>;
  [key: string]: unknown; // 模板自定义 section 扩展
}
```

此接口由 `packages/shared/src/types/resume.ts` 定义，前后端共享。模板通过 `TemplateSchema.sections` 声明期望哪些 section 和字段，前端 editor 据此渲染表单，但 `data` JSON 的实际结构不受约束——允许模板定义额外的自定义 section。

## 7. 多端同步策略

采用 **乐观锁 + Last-Write-Wins**：

1. 每次 `PATCH /api/resumes/:id` 请求体携带 `version` 字段
2. 服务端执行 `UPDATE ... WHERE id = :id AND version = :version`
3. 匹配成功 → 更新，version + 1，返回新版本
4. 不匹配 → 返回 `409 Conflict`，响应体包含服务端当前数据
5. 客户端收到 409 后拉取最新版，提示用户 "其他设备已修改，是否覆盖"
6. 自动保存间隔 3 秒（debounce），减少冲突概率

不引入 CRDT 或 OT 的理由：简历编辑不是多人协作场景，单用户多端编辑概率低，乐观锁足够。

## 8. 分阶段实施

| 阶段 | 新增表 | 说明 |
|------|--------|------|
| Phase 1 MVP | User, Resume, Template, Export | 当前已有，需增强字段 |
| Phase 1.5 | RefreshToken, VerifyCode, ResumeSnapshot, FileUpload | 多端登录 + 版本快照 + 文件管理 |
| Phase 2 | AiSession, AiMessage | AI 功能上线时 |

现有 4 张表的迁移方式：Prisma migration 增量添加新字段和新表，不破坏现有数据。

## 9. Prisma Schema（完整）

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ─── 用户系统 ───

model User {
  id         String   @id @default(cuid())
  email      String?  @unique
  phone      String?  @unique
  password   String?
  name       String?
  avatar     String?
  provider   String   @default("local")
  providerId String?
  plan       String   @default("free")
  planExpiry DateTime?
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt

  resumes       Resume[]
  aiSessions    AiSession[]
  refreshTokens RefreshToken[]

  @@unique([provider, providerId]) // PostgreSQL: NULL providerId 不触发唯一冲突，local 用户安全
}

model RefreshToken {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  token     String   @unique
  device    String?
  expiresAt DateTime
  createdAt DateTime @default(now())

  @@index([userId])
  @@index([expiresAt])
}

model VerifyCode {
  id        String   @id @default(cuid())
  target    String
  code      String
  type      String
  expiresAt DateTime
  used      Boolean  @default(false)
  createdAt DateTime @default(now())

  @@index([target, type])
}

// ─── 简历核心 ───

model Resume {
  id           String   @id @default(cuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  title        String   @default("未命名简历")
  templateId   String
  data         Json     @default("{}")
  sectionOrder String[] @default(["basics", "experience", "education", "skills", "projects"])
  customCss    String?
  language     String   @default("zh")
  isPublic     Boolean  @default(false)
  shareToken   String?  @unique
  lastDevice   String?
  version      Int      @default(1)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  exports   Export[]
  snapshots ResumeSnapshot[]

  @@index([userId])
  @@index([shareToken])
}

model ResumeSnapshot {
  id        String   @id @default(cuid())
  resumeId  String
  resume    Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  data      Json
  source    String
  label     String?
  createdAt DateTime @default(now())

  @@index([resumeId, createdAt])
}

// ─── 模板系统 ───

model Template {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String?
  category    String
  industry    String?
  html        String
  css         String
  schema      Json
  thumbnail   String   @default("")
  isPremium   Boolean  @default(false)
  isBuiltin   Boolean  @default(true)
  authorId    String?
  downloads   Int      @default(0)
  version     String   @default("1.0.0")
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([category])
  @@index([industry])
}

// ─── 导出 & 文件 ───

model Export {
  id        String   @id @default(cuid())
  resumeId  String
  resume    Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  format    String
  status    String   @default("pending")
  fileUrl   String?
  fileSize  Int?
  options   Json?
  error     String?
  createdAt DateTime @default(now())

  @@index([resumeId])
  @@index([status])
}

model FileUpload {
  id        String   @id @default(cuid())
  userId    String
  key       String   @unique
  url       String
  mimeType  String
  size      Int
  purpose   String
  createdAt DateTime @default(now())

  @@index([userId])
}

// ─── AI 会话 (Phase 2) ───

model AiSession {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  resumeId  String?
  type      String
  status    String   @default("active")
  context   Json?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  messages AiMessage[]

  @@index([userId])
  @@index([resumeId])
}

model AiMessage {
  id        String   @id @default(cuid())
  sessionId String
  session   AiSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  role      String
  content   String
  metadata  Json?
  createdAt DateTime @default(now())

  @@index([sessionId, createdAt])
}
```
