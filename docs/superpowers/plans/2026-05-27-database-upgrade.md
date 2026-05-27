# 数据库升级实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将现有 4 表 Prisma schema 升级为 10 表完整数据库，同步更新 shared types 和 service 代码。

**Architecture:** 增量 migration — 先扩展现有表字段，再添加新表，最后更新 service 层适配新字段。所有改动向后兼容，不破坏现有功能。

**Tech Stack:** PostgreSQL, Prisma 6.9, Express 5, TypeScript, Zod

---

## 文件结构

| 操作 | 文件 | 职责 |
|------|------|------|
| Modify | `packages/server/prisma/schema.prisma` | 完整 10 表 schema |
| Modify | `packages/shared/src/types/user.ts` | 新增 RefreshToken/VerifyCode/plan 类型 |
| Modify | `packages/shared/src/types/api.ts` | 新增 snapshot/share/version 相关 API 类型 |
| Modify | `packages/shared/src/types/template.ts` | 新增 industry/isBuiltin/version 字段 |
| Modify | `packages/shared/src/types/resume.ts` | 新增 ResumeSnapshot 类型 |
| Modify | `packages/shared/src/constants/index.ts` | 新增 PLAN_TYPES/EXPORT_STATUSES 等常量 |
| Modify | `packages/server/src/services/auth.service.ts` | 适配 RefreshToken 表 |
| Modify | `packages/server/src/services/resume.service.ts` | 新增 version 乐观锁 + share + snapshot |
| Modify | `packages/server/src/services/export.service.ts` | 适配异步 status 字段 |
| Create | `packages/server/src/services/snapshot.service.ts` | ResumeSnapshot CRUD |
| Create | `packages/server/src/services/file.service.ts` | FileUpload 管理 |
| Modify | `packages/server/src/routes/resume.ts` | 新增 share/snapshot 路由 + version 验证 |
| Modify | `packages/server/src/routes/auth.ts` | 新增 logout 路由 |
| Create | `packages/server/src/routes/share.ts` | 公开分享路由 |
| Modify | `packages/server/src/middleware/validate.ts` | updateSchema 增加 version 字段 |
| Modify | `packages/server/src/app.ts` | 挂载新路由 |
| Create | `packages/server/src/tests/resume.service.test.ts` | resume service 测试 |
| Create | `packages/server/src/tests/auth.service.test.ts` | auth service 测试 |
| Create | `packages/server/src/tests/snapshot.service.test.ts` | snapshot service 测试 |

---

## Task 1: 升级 Prisma Schema

**Files:**
- Modify: `packages/server/prisma/schema.prisma`

- [ ] **Step 1: 替换完整 schema.prisma**

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

  @@unique([provider, providerId])
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

- [ ] **Step 2: 生成 migration**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/server && npx prisma migrate dev --name upgrade_to_10_tables`

Expected: Migration created successfully, Prisma Client regenerated.

If migration fails due to existing data conflicts (Export.fileUrl was `String` non-nullable, now `String?`), the migration should handle this automatically since we're relaxing the constraint.

- [ ] **Step 3: 验证 Prisma Client 类型生成**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/server && npx prisma generate`

Expected: `✔ Generated Prisma Client`

- [ ] **Step 4: Commit**

```bash
git add packages/server/prisma/schema.prisma packages/server/prisma/migrations/
git commit -m "feat(db): upgrade schema from 4 to 10 tables

Add RefreshToken, VerifyCode, ResumeSnapshot, FileUpload, AiSession, AiMessage.
Enhance Resume (version/shareToken/language), Template (industry/isBuiltin), Export (status/options)."
```

---

## Task 2: 更新 Shared Types

**Files:**
- Modify: `packages/shared/src/types/user.ts`
- Modify: `packages/shared/src/types/api.ts`
- Modify: `packages/shared/src/types/template.ts`
- Modify: `packages/shared/src/types/resume.ts`
- Modify: `packages/shared/src/constants/index.ts`

- [ ] **Step 1: 更新 user.ts**

替换完整文件内容：

```typescript
export type AuthProvider = 'local' | 'wechat' | 'google';
export type PlanType = 'free' | 'pro' | 'premium';

export interface User {
  id: string;
  email?: string;
  phone?: string;
  name?: string;
  avatar?: string;
  provider: AuthProvider;
  plan: PlanType;
  planExpiry?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
```

- [ ] **Step 2: 更新 template.ts**

替换完整文件内容：

```typescript
export type TemplateCategory = 'business' | 'creative' | 'minimal' | 'tech';

export interface Template {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category: TemplateCategory;
  industry?: string;
  html: string;
  css: string;
  schema: import('./resume').TemplateSchema;
  thumbnail: string;
  isPremium: boolean;
  isBuiltin: boolean;
  downloads: number;
  version: string;
}
```

- [ ] **Step 3: 更新 resume.ts — 新增 ResumeSnapshot 类型**

在文件末尾追加：

```typescript
export interface ResumeSnapshot {
  id: string;
  resumeId: string;
  data: ResumeData;
  source: 'auto' | 'manual' | 'ai' | 'export';
  label?: string;
  createdAt: string;
}
```

- [ ] **Step 4: 更新 api.ts — 新增 API 类型**

在 `UpdateResumeRequest` 中新增 `version` 字段，新增 snapshot 和 share 相关类型。在文件末尾追加：

```typescript
// 在 UpdateResumeRequest 接口中增加 version
export interface UpdateResumeRequest {
  title?: string;
  templateId?: string;
  data?: Partial<ResumeData>;
  sectionOrder?: string[];
  version: number;  // 乐观锁必传
}

// 在 ResumeResponse 接口中增加新字段
export interface ResumeResponse {
  id: string;
  title: string;
  templateId: string;
  data: ResumeData;
  sectionOrder: string[];
  language: string;
  isPublic: boolean;
  shareToken?: string;
  version: number;
  createdAt: string;
  updatedAt: string;
}

// 新增类型
export interface CreateSnapshotRequest {
  label?: string;
}

export interface SnapshotResponse {
  id: string;
  resumeId: string;
  data: ResumeData;
  source: string;
  label?: string;
  createdAt: string;
}

export interface ShareResumeRequest {
  isPublic: boolean;
}

export interface ShareResumeResponse {
  isPublic: boolean;
  shareToken: string | null;
  shareUrl: string;
}

export interface ConflictResponse {
  success: false;
  code: 'VERSION_CONFLICT';
  message: string;
  serverVersion: number;
  serverData: ResumeData;
}
```

- [ ] **Step 5: 更新 constants/index.ts — 新增常量**

在文件末尾追加：

```typescript
export const PLAN_TYPES = ['free', 'pro', 'premium'] as const;
export const EXPORT_STATUSES = ['pending', 'processing', 'done', 'failed'] as const;
export const AI_SESSION_TYPES = ['rewrite', 'polish', 'translate', 'jd-match'] as const;
export const SNAPSHOT_SOURCES = ['auto', 'manual', 'ai', 'export'] as const;
export const SUPPORTED_LANGUAGES = ['zh', 'en', 'ja'] as const;
export const DEVICES = ['web', 'h5', 'miniapp', 'app'] as const;
```

- [ ] **Step 6: 验证 shared 包编译**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/shared && npx tsc --noEmit`

Expected: No errors.

- [ ] **Step 7: Commit**

```bash
git add packages/shared/src/
git commit -m "feat(shared): add types and constants for 10-table schema

New types: ResumeSnapshot, PlanType, ShareResumeRequest/Response, ConflictResponse.
Updated: User (plan), Template (industry/isBuiltin/version), UpdateResumeRequest (version), ResumeResponse.
New constants: PLAN_TYPES, EXPORT_STATUSES, AI_SESSION_TYPES, SNAPSHOT_SOURCES, DEVICES."
```

---

## Task 3: 升级 Auth Service — RefreshToken 表存储

**Files:**
- Modify: `packages/server/src/services/auth.service.ts`
- Modify: `packages/server/src/routes/auth.ts`
- Create: `packages/server/src/tests/auth.service.test.ts`

- [ ] **Step 1: 编写 auth service 测试**

Create `packages/server/src/tests/auth.service.test.ts`:

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { prisma } from '../server';

vi.mock('../server', () => ({
  prisma: {
    user: { findUnique: vi.fn(), create: vi.fn() },
    refreshToken: { create: vi.fn(), findUnique: vi.fn(), delete: vi.fn(), deleteMany: vi.fn() },
  },
}));

vi.mock('../config/index', () => ({
  config: {
    JWT_SECRET: 'test-secret-at-least-16',
    JWT_REFRESH_SECRET: 'test-refresh-secret-16',
  },
}));

describe('auth.service', () => {
  beforeEach(() => { vi.clearAllMocks(); });

  it('should be importable', async () => {
    const mod = await import('../services/auth.service');
    expect(mod.register).toBeDefined();
    expect(mod.login).toBeDefined();
    expect(mod.refreshTokens).toBeDefined();
    expect(mod.logout).toBeDefined();
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/server && npx vitest run src/tests/auth.service.test.ts`

Expected: FAIL — `logout` is not exported.

- [ ] **Step 3: 重写 auth.service.ts**

替换 `packages/server/src/services/auth.service.ts` 完整内容：

```typescript
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { prisma } from '../server';
import { config } from '../config/index';
import { AppError } from '../middleware/error-handler';
import type { User } from '@prisma/client';

function generateAccessToken(userId: string) {
  return jwt.sign({ sub: userId }, config.JWT_SECRET, { expiresIn: '2h' });
}

function hashToken(token: string) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function sanitizeUser(user: User) {
  return {
    id: user.id,
    email: user.email,
    phone: user.phone,
    name: user.name,
    avatar: user.avatar,
    provider: user.provider,
    plan: user.plan,
    planExpiry: user.planExpiry?.toISOString() ?? null,
  };
}

export async function register(input: { email?: string; phone?: string; password?: string; name?: string }, device?: string) {
  if (!input.email && !input.phone) {
    throw new AppError(400, '邮箱或手机号必须提供一个', 'MISSING_CREDENTIAL');
  }
  if (input.email) {
    const exists = await prisma.user.findUnique({ where: { email: input.email } });
    if (exists) throw new AppError(409, '该邮箱已注册', 'EMAIL_EXISTS');
  }
  const hashedPassword = input.password ? await bcrypt.hash(input.password, 12) : undefined;
  const user = await prisma.user.create({
    data: { email: input.email, phone: input.phone, password: hashedPassword, name: input.name, provider: 'local' },
  });
  const tokens = await createTokenPair(user.id, device);
  return { user: sanitizeUser(user), tokens };
}

export async function login(input: { email?: string; phone?: string; password?: string }, device?: string) {
  const user = input.email
    ? await prisma.user.findUnique({ where: { email: input.email } })
    : input.phone
      ? await prisma.user.findUnique({ where: { phone: input.phone } })
      : null;
  if (!user) throw new AppError(401, '用户不存在', 'USER_NOT_FOUND');
  if (user.password && input.password) {
    const valid = await bcrypt.compare(input.password, user.password);
    if (!valid) throw new AppError(401, '密码错误', 'INVALID_PASSWORD');
  } else {
    throw new AppError(401, '认证方式不匹配', 'AUTH_MISMATCH');
  }
  const tokens = await createTokenPair(user.id, device);
  return { user: sanitizeUser(user), tokens };
}

export async function refreshTokens(refreshToken: string, device?: string) {
  const tokenHash = hashToken(refreshToken);
  const stored = await prisma.refreshToken.findUnique({ where: { token: tokenHash } });
  if (!stored || stored.expiresAt < new Date()) {
    if (stored) await prisma.refreshToken.delete({ where: { id: stored.id } });
    throw new AppError(401, 'Token 无效或已过期', 'INVALID_TOKEN');
  }
  const user = await prisma.user.findUnique({ where: { id: stored.userId } });
  if (!user) throw new AppError(401, '用户不存在', 'USER_NOT_FOUND');
  await prisma.refreshToken.delete({ where: { id: stored.id } });
  const tokens = await createTokenPair(user.id, device ?? stored.device);
  return { user: sanitizeUser(user), tokens };
}

export async function logout(refreshToken: string) {
  const tokenHash = hashToken(refreshToken);
  await prisma.refreshToken.deleteMany({ where: { token: tokenHash } });
}

async function createTokenPair(userId: string, device?: string) {
  const accessToken = generateAccessToken(userId);
  const rawRefreshToken = crypto.randomBytes(40).toString('hex');
  const tokenHash = hashToken(rawRefreshToken);
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  await prisma.refreshToken.create({
    data: { userId, token: tokenHash, device: device ?? null, expiresAt },
  });
  return { accessToken, refreshToken: rawRefreshToken };
}
```

- [ ] **Step 4: 更新 auth 路由 — 增加 logout + device 参数**

替换 `packages/server/src/routes/auth.ts` 完整内容：

```typescript
import { Router } from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate';
import * as authService from '../services/auth.service';

export const authRouter = Router();

const registerSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string().min(6).optional(),
  name: z.string().optional(),
  device: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
  device: z.string().optional(),
});

const refreshSchema = z.object({ refreshToken: z.string(), device: z.string().optional() });
const logoutSchema = z.object({ refreshToken: z.string() });

authRouter.post('/register', validate(registerSchema), async (req, res, next) => {
  try {
    const { device, ...input } = req.body;
    const result = await authService.register(input, device);
    res.status(201).json({ success: true, data: result });
  } catch (err) { next(err); }
});

authRouter.post('/login', validate(loginSchema), async (req, res, next) => {
  try {
    const { device, ...input } = req.body;
    const result = await authService.login(input, device);
    res.json({ success: true, data: result });
  } catch (err) { next(err); }
});

authRouter.post('/refresh', validate(refreshSchema), async (req, res, next) => {
  try {
    const result = await authService.refreshTokens(req.body.refreshToken, req.body.device);
    res.json({ success: true, data: result });
  } catch (err) { next(err); }
});

authRouter.post('/logout', validate(logoutSchema), async (req, res, next) => {
  try {
    await authService.logout(req.body.refreshToken);
    res.json({ success: true, data: null });
  } catch (err) { next(err); }
});
```

- [ ] **Step 5: 运行测试**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/server && npx vitest run src/tests/auth.service.test.ts`

Expected: PASS

- [ ] **Step 6: Commit**

```bash
git add packages/server/src/services/auth.service.ts packages/server/src/routes/auth.ts packages/server/src/tests/auth.service.test.ts
git commit -m "feat(auth): store refresh tokens in DB, add logout endpoint

Refresh tokens now stored as SHA-256 hashes in RefreshToken table.
Each device gets its own token, old tokens rotated on refresh.
New POST /api/auth/logout endpoint."
```

---

## Task 4: 升级 Resume Service — 乐观锁 + 分享 + 快照

**Files:**
- Modify: `packages/server/src/services/resume.service.ts`
- Create: `packages/server/src/services/snapshot.service.ts`
- Modify: `packages/server/src/routes/resume.ts`
- Create: `packages/server/src/routes/share.ts`
- Modify: `packages/server/src/app.ts`
- Create: `packages/server/src/tests/resume.service.test.ts`

- [ ] **Step 1: 编写 resume service 测试**

Create `packages/server/src/tests/resume.service.test.ts`:

```typescript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { prisma } from '../server';

vi.mock('../server', () => ({
  prisma: {
    resume: { findUnique: vi.fn(), findMany: vi.fn(), create: vi.fn(), update: vi.fn(), delete: vi.fn() },
    resumeSnapshot: { create: vi.fn() },
    $transaction: vi.fn((fn: Function) => fn(prisma)),
  },
}));

describe('resume.service', () => {
  beforeEach(() => { vi.clearAllMocks(); });

  it('updateResume should reject version mismatch', async () => {
    const { updateResume } = await import('../services/resume.service');
    vi.mocked(prisma.resume.findUnique).mockResolvedValue({
      id: 'r1', userId: 'u1', version: 3, title: 'test', templateId: 't1',
      data: {}, sectionOrder: [], customCss: null, language: 'zh',
      isPublic: false, shareToken: null, lastDevice: null,
      createdAt: new Date(), updatedAt: new Date(),
    } as any);

    await expect(updateResume('r1', 'u1', { version: 1, data: {} }))
      .rejects.toThrow('VERSION_CONFLICT');
  });

  it('updateResume should accept matching version', async () => {
    const { updateResume } = await import('../services/resume.service');
    const mockResume = {
      id: 'r1', userId: 'u1', version: 3, title: 'test', templateId: 't1',
      data: {}, sectionOrder: [], customCss: null, language: 'zh',
      isPublic: false, shareToken: null, lastDevice: null,
      createdAt: new Date(), updatedAt: new Date(),
    } as any;
    vi.mocked(prisma.resume.findUnique).mockResolvedValue(mockResume);
    vi.mocked(prisma.resume.update).mockResolvedValue({ ...mockResume, version: 4 });

    const result = await updateResume('r1', 'u1', { version: 3, data: { basics: { name: 'test', email: 'a@b.com' } } });
    expect(result.version).toBe(4);
  });
});
```

- [ ] **Step 2: 运行测试确认失败**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/server && npx vitest run src/tests/resume.service.test.ts`

Expected: FAIL — updateResume doesn't accept `version` parameter yet.

- [ ] **Step 3: 重写 resume.service.ts**

替换 `packages/server/src/services/resume.service.ts` 完整内容：

```typescript
import crypto from 'crypto';
import { prisma } from '../server';
import { AppError } from '../middleware/error-handler';
import { DEFAULT_RESUME_DATA, DEFAULT_SECTION_ORDER } from '@resume/shared';

export async function listResumes(userId: string) {
  return prisma.resume.findMany({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
    select: { id: true, title: true, templateId: true, language: true, version: true, updatedAt: true, createdAt: true },
  });
}

export async function getResume(id: string, userId: string) {
  const resume = await prisma.resume.findUnique({ where: { id } });
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');
  return resume;
}

export async function getResumeByShareToken(shareToken: string) {
  const resume = await prisma.resume.findUnique({ where: { shareToken } });
  if (!resume || !resume.isPublic) throw new AppError(404, '简历不存在或未公开', 'RESUME_NOT_FOUND');
  return { id: resume.id, title: resume.title, templateId: resume.templateId, data: resume.data, sectionOrder: resume.sectionOrder, language: resume.language };
}

export async function createResume(userId: string, input: { title?: string; templateId: string; data?: object }) {
  return prisma.resume.create({
    data: {
      userId,
      title: input.title ?? '未命名简历',
      templateId: input.templateId,
      data: input.data ?? DEFAULT_RESUME_DATA,
      sectionOrder: DEFAULT_SECTION_ORDER,
    },
  });
}

interface UpdateInput {
  title?: string;
  templateId?: string;
  data?: object;
  sectionOrder?: string[];
  version: number;
  lastDevice?: string;
}

export async function updateResume(id: string, userId: string, input: UpdateInput) {
  const resume = await prisma.resume.findUnique({ where: { id } });
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');

  if (resume.version !== input.version) {
    throw new AppError(409, '版本冲突，请刷新后重试', 'VERSION_CONFLICT');
  }

  const { version: _v, ...updateData } = input;
  return prisma.resume.update({
    where: { id },
    data: { ...updateData, version: { increment: 1 } },
  });
}

export async function deleteResume(id: string, userId: string) {
  const resume = await prisma.resume.findUnique({ where: { id } });
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');
  await prisma.resume.delete({ where: { id } });
}

export async function duplicateResume(id: string, userId: string) {
  const source = await getResume(id, userId);
  return prisma.resume.create({
    data: {
      userId,
      title: `${source.title} (副本)`,
      templateId: source.templateId,
      data: source.data ?? DEFAULT_RESUME_DATA,
      sectionOrder: source.sectionOrder,
      customCss: source.customCss,
      language: source.language,
    },
  });
}

export async function toggleShare(id: string, userId: string, isPublic: boolean) {
  const resume = await prisma.resume.findUnique({ where: { id } });
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');

  const shareToken = isPublic && !resume.shareToken
    ? crypto.randomBytes(16).toString('base64url')
    : resume.shareToken;

  const updated = await prisma.resume.update({
    where: { id },
    data: { isPublic, shareToken: isPublic ? shareToken : null },
  });
  return { isPublic: updated.isPublic, shareToken: updated.shareToken };
}
```

- [ ] **Step 4: 创建 snapshot.service.ts**

Create `packages/server/src/services/snapshot.service.ts`:

```typescript
import { prisma } from '../server';
import { AppError } from '../middleware/error-handler';

export async function createSnapshot(resumeId: string, userId: string, source: string, label?: string) {
  const resume = await prisma.resume.findUnique({ where: { id: resumeId } });
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');

  return prisma.resumeSnapshot.create({
    data: { resumeId, data: resume.data ?? {}, source, label },
  });
}

export async function listSnapshots(resumeId: string, userId: string) {
  const resume = await prisma.resume.findUnique({ where: { id: resumeId } });
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');

  return prisma.resumeSnapshot.findMany({
    where: { resumeId },
    orderBy: { createdAt: 'desc' },
    take: 50,
    select: { id: true, source: true, label: true, createdAt: true },
  });
}

export async function getSnapshot(id: string, resumeId: string, userId: string) {
  const resume = await prisma.resume.findUnique({ where: { id: resumeId } });
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');

  const snapshot = await prisma.resumeSnapshot.findUnique({ where: { id } });
  if (!snapshot || snapshot.resumeId !== resumeId) throw new AppError(404, '快照不存在', 'SNAPSHOT_NOT_FOUND');
  return snapshot;
}

export async function restoreSnapshot(id: string, resumeId: string, userId: string) {
  const snapshot = await getSnapshot(id, resumeId, userId);
  return prisma.resume.update({
    where: { id: resumeId },
    data: { data: snapshot.data, version: { increment: 1 } },
  });
}
```

- [ ] **Step 5: 更新 resume 路由**

替换 `packages/server/src/routes/resume.ts` 完整内容：

```typescript
import { Router } from 'express';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth';
import { validate } from '../middleware/validate';
import * as resumeService from '../services/resume.service';
import * as snapshotService from '../services/snapshot.service';

export const resumeRouter = Router();
resumeRouter.use(requireAuth);

const createSchema = z.object({
  title: z.string().optional(),
  templateId: z.string(),
  data: z.record(z.unknown()).optional(),
});

const updateSchema = z.object({
  title: z.string().optional(),
  templateId: z.string().optional(),
  data: z.record(z.unknown()).optional(),
  sectionOrder: z.array(z.string()).optional(),
  version: z.number().int(),
  lastDevice: z.string().optional(),
});

const shareSchema = z.object({ isPublic: z.boolean() });
const snapshotCreateSchema = z.object({ label: z.string().optional() });

// Resume CRUD
resumeRouter.get('/', async (req, res, next) => {
  try { const resumes = await resumeService.listResumes(req.userId!); res.json({ success: true, data: resumes }); } catch (err) { next(err); }
});

resumeRouter.post('/', validate(createSchema), async (req, res, next) => {
  try { const resume = await resumeService.createResume(req.userId!, req.body); res.status(201).json({ success: true, data: resume }); } catch (err) { next(err); }
});

resumeRouter.get('/:id', async (req, res, next) => {
  try { const resume = await resumeService.getResume(req.params.id, req.userId!); res.json({ success: true, data: resume }); } catch (err) { next(err); }
});

resumeRouter.put('/:id', validate(updateSchema), async (req, res, next) => {
  try { const resume = await resumeService.updateResume(req.params.id, req.userId!, req.body); res.json({ success: true, data: resume }); } catch (err) { next(err); }
});

resumeRouter.patch('/:id', validate(updateSchema), async (req, res, next) => {
  try { const resume = await resumeService.updateResume(req.params.id, req.userId!, req.body); res.json({ success: true, data: resume }); } catch (err) { next(err); }
});

resumeRouter.delete('/:id', async (req, res, next) => {
  try { await resumeService.deleteResume(req.params.id, req.userId!); res.json({ success: true, data: null }); } catch (err) { next(err); }
});

resumeRouter.post('/:id/duplicate', async (req, res, next) => {
  try { const resume = await resumeService.duplicateResume(req.params.id, req.userId!); res.status(201).json({ success: true, data: resume }); } catch (err) { next(err); }
});

// Share
resumeRouter.post('/:id/share', validate(shareSchema), async (req, res, next) => {
  try { const result = await resumeService.toggleShare(req.params.id, req.userId!, req.body.isPublic); res.json({ success: true, data: result }); } catch (err) { next(err); }
});

// Snapshots
resumeRouter.get('/:id/snapshots', async (req, res, next) => {
  try { const snapshots = await snapshotService.listSnapshots(req.params.id, req.userId!); res.json({ success: true, data: snapshots }); } catch (err) { next(err); }
});

resumeRouter.post('/:id/snapshots', validate(snapshotCreateSchema), async (req, res, next) => {
  try { const snapshot = await snapshotService.createSnapshot(req.params.id, req.userId!, 'manual', req.body.label); res.status(201).json({ success: true, data: snapshot }); } catch (err) { next(err); }
});

resumeRouter.get('/:id/snapshots/:snapshotId', async (req, res, next) => {
  try { const snapshot = await snapshotService.getSnapshot(req.params.snapshotId, req.params.id, req.userId!); res.json({ success: true, data: snapshot }); } catch (err) { next(err); }
});

resumeRouter.post('/:id/snapshots/:snapshotId/restore', async (req, res, next) => {
  try { const resume = await snapshotService.restoreSnapshot(req.params.snapshotId, req.params.id, req.userId!); res.json({ success: true, data: resume }); } catch (err) { next(err); }
});
```

- [ ] **Step 6: 创建公开分享路由**

Create `packages/server/src/routes/share.ts`:

```typescript
import { Router } from 'express';
import * as resumeService from '../services/resume.service';

export const shareRouter = Router();

shareRouter.get('/:token', async (req, res, next) => {
  try {
    const resume = await resumeService.getResumeByShareToken(req.params.token);
    res.json({ success: true, data: resume });
  } catch (err) { next(err); }
});
```

- [ ] **Step 7: 更新 app.ts 挂载新路由**

在 `packages/server/src/app.ts` 中添加 share 路由导入和挂载：

在 import 部分添加：
```typescript
import { shareRouter } from './routes/share';
```

在 `app.use('/api/templates', templateRouter);` 之后添加：
```typescript
app.use('/api/share', shareRouter);
```

- [ ] **Step 8: 运行测试**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/server && npx vitest run src/tests/resume.service.test.ts`

Expected: PASS

- [ ] **Step 9: Commit**

```bash
git add packages/server/src/services/resume.service.ts packages/server/src/services/snapshot.service.ts packages/server/src/routes/resume.ts packages/server/src/routes/share.ts packages/server/src/app.ts packages/server/src/tests/resume.service.test.ts
git commit -m "feat(resume): add optimistic locking, share links, and snapshots

updateResume now requires version field, returns 409 on conflict.
New endpoints: POST /:id/share, GET/POST /:id/snapshots, POST /:id/snapshots/:sid/restore.
Public share via GET /api/share/:token."
```

---

## Task 5: 升级 Export Service — 异步状态

**Files:**
- Modify: `packages/server/src/services/export.service.ts`

- [ ] **Step 1: 更新 export.service.ts**

替换 `renderAndExportPdf` 函数中的 Export 创建逻辑：

将 `packages/server/src/services/export.service.ts` 第 43-44 行：
```typescript
      await prisma.export.create({ data: { resumeId, format: 'pdf', fileUrl: '', fileSize: pdfBuffer.length } });
```

替换为：
```typescript
      await prisma.export.create({
        data: {
          resumeId,
          format: 'pdf',
          status: 'done',
          fileUrl: '',
          fileSize: pdfBuffer.length,
          options: { format: options.format ?? 'A4', margin: options.margin ?? DEFAULT_MARGIN },
        },
      });
```

- [ ] **Step 2: 验证类型编译**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/server && npx tsc --noEmit`

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add packages/server/src/services/export.service.ts
git commit -m "feat(export): track export status and options in Export record"
```

---

## Task 6: 创建 File Service

**Files:**
- Create: `packages/server/src/services/file.service.ts`

- [ ] **Step 1: 创建 file.service.ts**

Create `packages/server/src/services/file.service.ts`:

```typescript
import { prisma } from '../server';
import { AppError } from '../middleware/error-handler';

export async function createFileRecord(userId: string, input: { key: string; url: string; mimeType: string; size: number; purpose: string }) {
  return prisma.fileUpload.create({
    data: { userId, ...input },
  });
}

export async function listFiles(userId: string, purpose?: string) {
  return prisma.fileUpload.findMany({
    where: { userId, ...(purpose ? { purpose } : {}) },
    orderBy: { createdAt: 'desc' },
  });
}

export async function deleteFile(id: string, userId: string) {
  const file = await prisma.fileUpload.findUnique({ where: { id } });
  if (!file || file.userId !== userId) throw new AppError(404, '文件不存在', 'FILE_NOT_FOUND');
  await prisma.fileUpload.delete({ where: { id } });
  return file;
}
```

- [ ] **Step 2: Commit**

```bash
git add packages/server/src/services/file.service.ts
git commit -m "feat(file): add FileUpload service for tracking uploaded files"
```

---

## Task 7: 更新前端 Editor Store 适配 version 字段

**Files:**
- Modify: `packages/web/src/stores/editor.store.ts`

- [ ] **Step 1: 在 EditorStore interface 中添加 version 状态**

在 `editor.store.ts` 的 store state 中添加 `version` 字段（在 `sectionOrder` 附近）：

```typescript
version: number;
```

初始值设为 `1`。

- [ ] **Step 2: 更新 loadResume — 读取 version**

在 `loadResume` 方法中，从 API 响应读取 `version` 并存入 state：

```typescript
version: data.version ?? 1,
```

- [ ] **Step 3: 更新 save 方法 — 发送 version**

在 `save` 方法的 cloud 模式分支中，PATCH 请求体需要包含 `version`：

```typescript
const res = await api.patch(`/resumes/${get().resumeId}`, {
  data: get().resume,
  sectionOrder: get().sectionOrder,
  version: get().version,
});
set({ version: res.data.data.version, isDirty: false, saveStatus: 'saved' });
```

如果收到 409 状态码，应提示用户版本冲突。

- [ ] **Step 4: 验证编译**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/web && npx tsc --noEmit`

Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add packages/web/src/stores/editor.store.ts
git commit -m "feat(editor): send version on save for optimistic locking

Reads version from API response, sends it on PATCH, updates after save."
```

---

## Task 8: 全局验证 & 清理

**Files:**
- All modified files

- [ ] **Step 1: TypeScript 全量编译检查**

Run: `cd /Users/youyouhuanghuang/Desktop/resume && npx tsc --build --force`

Expected: No errors. Fix any type mismatches.

- [ ] **Step 2: 运行全部测试**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/server && npx vitest run`

Expected: All tests pass.

- [ ] **Step 3: 启动开发服务器验证**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/server && npx tsx src/server.ts`

Expected: "Database connected" + "Server running on port 3001"

Hit health check:
Run: `curl http://localhost:3001/api/health`
Expected: `{"status":"ok"}`

- [ ] **Step 4: 验证 Prisma Studio**

Run: `cd /Users/youyouhuanghuang/Desktop/resume/packages/server && npx prisma studio`

Expected: Prisma Studio opens in browser showing all 10 tables.

- [ ] **Step 5: Final commit (if any fixes needed)**

```bash
git add -A
git commit -m "fix: resolve type and compilation issues from DB upgrade"
```
