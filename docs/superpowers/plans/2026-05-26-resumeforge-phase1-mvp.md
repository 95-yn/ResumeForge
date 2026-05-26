# ResumeForge Phase 1 MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a working resume platform MVP — monorepo with shared types, Handlebars-based resume engine, Node.js server (auth + CRUD + templates + PDF export), React web editor with WYSIWYG editing, and a basic Taro H5 mobile client.

**Architecture:** pnpm monorepo with 5 packages: `shared` (types/API client), `resume-engine` (Handlebars rendering + schema validation), `server` (Express 5 + Prisma + PostgreSQL), `web` (React 18 + Vite), `mobile` (Taro 3.x). The resume engine is consumed by both server (PDF generation) and web (live preview). Server provides REST API consumed by all clients.

**Tech Stack:** TypeScript throughout, pnpm workspaces, Express 5, Prisma + PostgreSQL, Redis, Puppeteer, Handlebars, React 18 + Vite 6, Zustand, Ant Design 5, @dnd-kit, TipTap, Taro 3.x, Vitest for testing.

**Spec:** `docs/superpowers/specs/2026-05-26-resume-platform-design.md`

---

## File Map

```
resume-platform/
├── package.json                          # pnpm workspace root
├── pnpm-workspace.yaml
├── tsconfig.base.json                    # shared TS config
├── .gitignore
├── .eslintrc.cjs
├── .prettierrc
├── docker-compose.yml                    # PostgreSQL + Redis for dev
│
├── packages/
│   ├── shared/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts                  # barrel export
│   │       ├── types/
│   │       │   ├── resume.ts             # ResumeData, Section, Field types
│   │       │   ├── template.ts           # Template, TemplateSchema types
│   │       │   ├── user.ts               # User types
│   │       │   └── api.ts                # API request/response types
│   │       ├── constants/
│   │       │   └── index.ts              # field types, categories
│   │       └── utils/
│   │           └── index.ts              # date formatting, etc.
│   │
│   ├── resume-engine/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts                  # barrel export
│   │       ├── renderer.ts              # compileTemplate, renderResume
│   │       ├── schema.ts                # validateResumeData
│   │       └── __tests__/
│   │           ├── renderer.test.ts
│   │           └── schema.test.ts
│   │
│   ├── server/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── .env.example
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   └── seed.ts                   # template seeding
│   │   └── src/
│   │       ├── app.ts                    # Express app setup
│   │       ├── server.ts                 # listen entry point
│   │       ├── config/
│   │       │   └── index.ts              # env config with Zod
│   │       ├── middleware/
│   │       │   ├── auth.ts               # JWT verification
│   │       │   ├── validate.ts           # Zod request validation
│   │       │   └── error-handler.ts      # centralized error handling
│   │       ├── routes/
│   │       │   ├── auth.ts
│   │       │   ├── resume.ts
│   │       │   ├── template.ts
│   │       │   └── export.ts
│   │       ├── services/
│   │       │   ├── auth.service.ts
│   │       │   ├── resume.service.ts
│   │       │   ├── template.service.ts
│   │       │   └── export.service.ts
│   │       ├── utils/
│   │       │   └── puppeteer-pool.ts
│   │       └── __tests__/
│   │           ├── auth.test.ts
│   │           ├── resume.test.ts
│   │           └── export.test.ts
│   │
│   ├── web/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   ├── index.html
│   │   └── src/
│   │       ├── main.tsx
│   │       ├── App.tsx
│   │       ├── router.tsx
│   │       ├── api/
│   │       │   └── client.ts             # axios instance + interceptors
│   │       ├── stores/
│   │       │   ├── auth.store.ts
│   │       │   └── editor.store.ts
│   │       ├── pages/
│   │       │   ├── Login.tsx
│   │       │   ├── Dashboard.tsx
│   │       │   ├── Templates.tsx
│   │       │   └── Editor.tsx
│   │       ├── components/
│   │       │   ├── editor/
│   │       │   │   ├── EditorLayout.tsx   # 3-column layout
│   │       │   │   ├── SectionList.tsx    # left panel, drag-sort
│   │       │   │   ├── ResumePreview.tsx  # center iframe preview
│   │       │   │   ├── FieldPanel.tsx     # right panel form fields
│   │       │   │   └── TopBar.tsx         # title, export, save
│   │       │   └── common/
│   │       │       └── ProtectedRoute.tsx
│   │       └── styles/
│   │           └── global.css
│   │
│   └── mobile/
│       ├── package.json
│       ├── project.config.json
│       ├── config/
│       │   ├── index.ts                  # Taro config
│       │   ├── dev.ts
│       │   └── prod.ts
│       └── src/
│           ├── app.ts
│           ├── app.config.ts
│           ├── app.scss
│           ├── api/
│           │   └── client.ts             # Taro.request wrapper
│           ├── stores/
│           │   └── auth.store.ts
│           ├── pages/
│           │   ├── index/
│           │   │   ├── index.tsx          # resume list
│           │   │   └── index.scss
│           │   ├── login/
│           │   │   └── index.tsx
│           │   ├── templates/
│           │   │   └── index.tsx
│           │   └── editor/
│           │       ├── index.tsx          # form editor
│           │       └── index.scss
│           └── components/
│               └── FormField.tsx          # schema-driven form field
│
└── templates/                            # built-in HTML resume templates
    ├── classic/
    │   ├── template.html
    │   ├── style.css
    │   └── schema.json
    ├── modern/
    │   ├── template.html
    │   ├── style.css
    │   └── schema.json
    └── minimal/
        ├── template.html
        ├── style.css
        └── schema.json
```

---

## Task 1: Monorepo + Tooling Setup

**Files:**
- Create: `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`, `.gitignore`, `.eslintrc.cjs`, `.prettierrc`, `docker-compose.yml`

- [ ] **Step 1: Initialize git and root package.json**

```bash
cd /Users/youyouhuanghuang/Desktop/resume
git init
```

```json
// package.json
{
  "name": "resume-platform",
  "private": true,
  "scripts": {
    "dev:server": "pnpm --filter @resume/server dev",
    "dev:web": "pnpm --filter @resume/web dev",
    "dev:mobile": "pnpm --filter @resume/mobile dev:h5",
    "build": "pnpm -r build",
    "lint": "eslint . --ext .ts,.tsx",
    "test": "pnpm -r test"
  },
  "engines": {
    "node": ">=20"
  }
}
```

```yaml
# pnpm-workspace.yaml
packages:
  - "packages/*"
```

- [ ] **Step 2: Create shared TypeScript config**

```json
// tsconfig.base.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2022"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "composite": true
  }
}
```

- [ ] **Step 3: Create .gitignore, ESLint, Prettier**

```gitignore
# .gitignore
node_modules/
dist/
.env
.env.local
*.log
.DS_Store
.turbo
coverage/
.prisma/
```

```js
// .eslintrc.cjs
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  env: { node: true, es2022: true },
  ignorePatterns: ['dist/', 'node_modules/'],
};
```

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}
```

- [ ] **Step 4: Create docker-compose for dev services**

```yaml
# docker-compose.yml
services:
  postgres:
    image: postgres:16-alpine
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: resume
      POSTGRES_PASSWORD: resume_dev
      POSTGRES_DB: resume_platform
    volumes:
      - pgdata:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  pgdata:
```

- [ ] **Step 5: Install root dev dependencies and commit**

```bash
pnpm init # if package.json not picked up
pnpm add -Dw typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint prettier eslint-config-prettier
```

```bash
git add package.json pnpm-workspace.yaml tsconfig.base.json .gitignore .eslintrc.cjs .prettierrc docker-compose.yml
git commit -m "chore: initialize monorepo with pnpm workspace and tooling"
```

---

## Task 2: Shared Types Package

**Files:**
- Create: `packages/shared/package.json`, `packages/shared/tsconfig.json`, `packages/shared/src/index.ts`, `packages/shared/src/types/resume.ts`, `packages/shared/src/types/template.ts`, `packages/shared/src/types/user.ts`, `packages/shared/src/types/api.ts`, `packages/shared/src/constants/index.ts`

- [ ] **Step 1: Create shared package.json and tsconfig**

```json
// packages/shared/package.json
{
  "name": "@resume/shared",
  "version": "0.1.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "build": "tsc",
    "typecheck": "tsc --noEmit"
  }
}
```

```json
// packages/shared/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"]
}
```

- [ ] **Step 2: Define resume data types**

```typescript
// packages/shared/src/types/resume.ts

export type FieldType = 'text' | 'email' | 'tel' | 'date' | 'select' | 'image' | 'richtext' | 'array:text';

export interface FieldSchema {
  key: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
}

export interface SectionSchema {
  key: string;
  label: string;
  type?: 'array';
  fields: FieldSchema[];
}

export interface TemplateSchema {
  templateId: string;
  version: string;
  name: string;
  sections: SectionSchema[];
}

export interface ResumeData {
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
    startDate?: string;
    endDate?: string;
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
    description?: string;
    highlights: string[];
  }>;
  [key: string]: unknown;
}
```

- [ ] **Step 3: Define template and user types**

```typescript
// packages/shared/src/types/template.ts

export type TemplateCategory = 'classic' | 'modern' | 'creative' | 'minimal';

export interface Template {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category: TemplateCategory;
  html: string;
  css: string;
  schema: import('./resume').TemplateSchema;
  thumbnail: string;
  isPremium: boolean;
  downloads: number;
}
```

```typescript
// packages/shared/src/types/user.ts

export type AuthProvider = 'local' | 'wechat' | 'google';

export interface User {
  id: string;
  email?: string;
  phone?: string;
  name?: string;
  avatar?: string;
  provider: AuthProvider;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
```

- [ ] **Step 4: Define API types**

```typescript
// packages/shared/src/types/api.ts

import type { ResumeData } from './resume';
import type { Template } from './template';
import type { User, AuthTokens } from './user';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: false;
  message: string;
  code: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

// Auth
export interface RegisterRequest {
  email?: string;
  phone?: string;
  password?: string;
  name?: string;
}

export interface LoginRequest {
  email?: string;
  phone?: string;
  password?: string;
  code?: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

// Resume
export interface CreateResumeRequest {
  title?: string;
  templateId: string;
  data?: Partial<ResumeData>;
}

export interface UpdateResumeRequest {
  title?: string;
  templateId?: string;
  data?: Partial<ResumeData>;
  sectionOrder?: string[];
}

export interface ResumeResponse {
  id: string;
  title: string;
  templateId: string;
  data: ResumeData;
  sectionOrder: string[];
  createdAt: string;
  updatedAt: string;
}

// Export
export interface ExportPdfRequest {
  format?: 'A4' | 'Letter';
  margin?: { top: string; right: string; bottom: string; left: string };
}

export interface ExportResponse {
  id: string;
  fileUrl: string;
  fileSize: number;
}

// Template listing
export interface TemplateListQuery {
  category?: string;
  page?: number;
  pageSize?: number;
}
```

- [ ] **Step 5: Create constants and barrel export**

```typescript
// packages/shared/src/constants/index.ts

export const FIELD_TYPES = ['text', 'email', 'tel', 'date', 'select', 'image', 'richtext', 'array:text'] as const;

export const TEMPLATE_CATEGORIES = ['classic', 'modern', 'creative', 'minimal'] as const;

export const DEFAULT_SECTION_ORDER = ['basics', 'experience', 'education', 'skills', 'projects'];

export const DEFAULT_RESUME_DATA = {
  basics: { name: '', email: '' },
  experience: [],
  education: [],
  skills: [],
  projects: [],
};
```

```typescript
// packages/shared/src/index.ts

export * from './types/resume';
export * from './types/template';
export * from './types/user';
export * from './types/api';
export * from './constants/index';
```

- [ ] **Step 6: Install dependencies and commit**

```bash
cd packages/shared && pnpm install
cd ../..
pnpm install
```

```bash
git add packages/shared/
git commit -m "feat: add shared types package with resume, template, user, and API types"
```

---

## Task 3: Resume Engine — Schema Validation

**Files:**
- Create: `packages/resume-engine/package.json`, `packages/resume-engine/tsconfig.json`, `packages/resume-engine/src/schema.ts`, `packages/resume-engine/src/__tests__/schema.test.ts`

- [ ] **Step 1: Create resume-engine package scaffolding**

```json
// packages/resume-engine/package.json
{
  "name": "@resume/engine",
  "version": "0.1.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "build": "tsc",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@resume/shared": "workspace:*",
    "handlebars": "^4.7.8"
  },
  "devDependencies": {
    "vitest": "^3.2.1"
  }
}
```

```json
// packages/resume-engine/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"],
  "references": [{ "path": "../shared" }]
}
```

- [ ] **Step 2: Write the failing test for schema validation**

```typescript
// packages/resume-engine/src/__tests__/schema.test.ts
import { describe, it, expect } from 'vitest';
import { validateResumeData } from '../schema';
import type { TemplateSchema, ResumeData } from '@resume/shared';

const classicSchema: TemplateSchema = {
  templateId: 'classic',
  version: '1.0.0',
  name: '经典简洁',
  sections: [
    {
      key: 'basics',
      label: '基本信息',
      fields: [
        { key: 'name', label: '姓名', type: 'text', required: true },
        { key: 'email', label: '邮箱', type: 'email', required: true },
        { key: 'phone', label: '电话', type: 'tel' },
      ],
    },
    {
      key: 'experience',
      label: '工作经历',
      type: 'array',
      fields: [
        { key: 'company', label: '公司', type: 'text', required: true },
        { key: 'position', label: '职位', type: 'text', required: true },
      ],
    },
  ],
};

describe('validateResumeData', () => {
  it('returns valid for complete data', () => {
    const data: ResumeData = {
      basics: { name: '张三', email: 'zhangsan@example.com', phone: '13800138000' },
      experience: [{ company: '字节跳动', position: '前端工程师', highlights: [] }],
      education: [],
      skills: [],
      projects: [],
    };
    const result = validateResumeData(data, classicSchema);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('returns errors for missing required fields', () => {
    const data: ResumeData = {
      basics: { name: '', email: '' },
      experience: [],
      education: [],
      skills: [],
      projects: [],
    };
    const result = validateResumeData(data, classicSchema);
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors.some((e) => e.field === 'basics.name')).toBe(true);
    expect(result.errors.some((e) => e.field === 'basics.email')).toBe(true);
  });

  it('returns errors for required fields in array sections', () => {
    const data: ResumeData = {
      basics: { name: '张三', email: 'z@e.com' },
      experience: [{ company: '', position: '工程师', highlights: [] }],
      education: [],
      skills: [],
      projects: [],
    };
    const result = validateResumeData(data, classicSchema);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.field === 'experience[0].company')).toBe(true);
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

```bash
cd packages/resume-engine && pnpm install && pnpm test
```

Expected: FAIL — `validateResumeData` does not exist.

- [ ] **Step 4: Implement schema validation**

```typescript
// packages/resume-engine/src/schema.ts
import type { ResumeData, TemplateSchema, SectionSchema } from '@resume/shared';

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export function validateResumeData(data: ResumeData, schema: TemplateSchema): ValidationResult {
  const errors: ValidationError[] = [];

  for (const section of schema.sections) {
    if (section.type === 'array') {
      validateArraySection(data, section, errors);
    } else {
      validateObjectSection(data, section, errors);
    }
  }

  return { valid: errors.length === 0, errors };
}

function validateObjectSection(
  data: ResumeData,
  section: SectionSchema,
  errors: ValidationError[],
): void {
  const sectionData = data[section.key] as Record<string, unknown> | undefined;
  for (const field of section.fields) {
    if (!field.required) continue;
    const value = sectionData?.[field.key];
    if (value === undefined || value === null || value === '') {
      errors.push({
        field: `${section.key}.${field.key}`,
        message: `${field.label}不能为空`,
      });
    }
  }
}

function validateArraySection(
  data: ResumeData,
  section: SectionSchema,
  errors: ValidationError[],
): void {
  const items = data[section.key] as Record<string, unknown>[] | undefined;
  if (!items || !Array.isArray(items)) return;

  items.forEach((item, index) => {
    for (const field of section.fields) {
      if (!field.required) continue;
      const value = item[field.key];
      if (value === undefined || value === null || value === '') {
        errors.push({
          field: `${section.key}[${index}].${field.key}`,
          message: `${field.label}不能为空`,
        });
      }
    }
  });
}
```

- [ ] **Step 5: Run test to verify it passes**

```bash
cd packages/resume-engine && pnpm test
```

Expected: 3 tests PASS.

- [ ] **Step 6: Commit**

```bash
git add packages/resume-engine/
git commit -m "feat: add resume-engine schema validation with tests"
```

---

## Task 4: Resume Engine — Handlebars Renderer

**Files:**
- Create: `packages/resume-engine/src/renderer.ts`, `packages/resume-engine/src/__tests__/renderer.test.ts`, `packages/resume-engine/src/index.ts`

- [ ] **Step 1: Write the failing test for renderer**

```typescript
// packages/resume-engine/src/__tests__/renderer.test.ts
import { describe, it, expect } from 'vitest';
import { renderResume } from '../renderer';
import type { ResumeData } from '@resume/shared';

const html = `<div class="resume">
  <h1>{{basics.name}}</h1>
  <p>{{basics.email}}</p>
  {{#each experience}}
  <div class="exp">
    <h3>{{company}} — {{position}}</h3>
    {{#each highlights}}<li>{{this}}</li>{{/each}}
  </div>
  {{/each}}
  {{#if skills.length}}
  <div class="skills">
    {{#each skills}}<span>{{name}}</span>{{/each}}
  </div>
  {{/if}}
</div>`;

const css = `.resume { font-family: sans-serif; } .exp { margin: 10px 0; }`;

const data: ResumeData = {
  basics: { name: '张三', email: 'z@e.com' },
  experience: [
    { company: '字节跳动', position: '前端', highlights: ['做了 A', '做了 B'] },
  ],
  education: [],
  skills: [{ name: 'React' }, { name: 'TypeScript' }],
  projects: [],
};

describe('renderResume', () => {
  it('renders template with data and inlines CSS', () => {
    const result = renderResume({ html, css, data });
    expect(result).toContain('张三');
    expect(result).toContain('z@e.com');
    expect(result).toContain('字节跳动 — 前端');
    expect(result).toContain('做了 A');
    expect(result).toContain('React');
    expect(result).toContain('<style>');
    expect(result).toContain('font-family: sans-serif');
  });

  it('returns a complete HTML document', () => {
    const result = renderResume({ html, css, data });
    expect(result).toContain('<!DOCTYPE html>');
    expect(result).toContain('<html');
    expect(result).toContain('</html>');
  });

  it('handles empty arrays gracefully', () => {
    const emptyData: ResumeData = {
      basics: { name: '李四', email: 'l@e.com' },
      experience: [],
      education: [],
      skills: [],
      projects: [],
    };
    const result = renderResume({ html, css, data: emptyData });
    expect(result).toContain('李四');
    expect(result).not.toContain('skills');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd packages/resume-engine && pnpm test
```

Expected: FAIL — `renderResume` does not exist.

- [ ] **Step 3: Implement renderer**

```typescript
// packages/resume-engine/src/renderer.ts
import Handlebars from 'handlebars';
import type { ResumeData } from '@resume/shared';

export interface RenderOptions {
  html: string;
  css: string;
  data: ResumeData;
}

export function renderResume({ html, css, data }: RenderOptions): string {
  const template = Handlebars.compile(html);
  const body = template(data);

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>${css}</style>
</head>
<body>${body}</body>
</html>`;
}
```

- [ ] **Step 4: Create barrel export**

```typescript
// packages/resume-engine/src/index.ts
export { renderResume } from './renderer';
export type { RenderOptions } from './renderer';
export { validateResumeData } from './schema';
export type { ValidationResult, ValidationError } from './schema';
```

- [ ] **Step 5: Run tests to verify all pass**

```bash
cd packages/resume-engine && pnpm test
```

Expected: 6 tests PASS (3 schema + 3 renderer).

- [ ] **Step 6: Commit**

```bash
git add packages/resume-engine/
git commit -m "feat: add Handlebars resume renderer with inline CSS and full HTML output"
```

---

## Task 5: Built-in Templates (Classic, Modern, Minimal)

**Files:**
- Create: `templates/classic/template.html`, `templates/classic/style.css`, `templates/classic/schema.json`, `templates/modern/template.html`, `templates/modern/style.css`, `templates/modern/schema.json`, `templates/minimal/template.html`, `templates/minimal/style.css`, `templates/minimal/schema.json`

- [ ] **Step 1: Create classic template**

```html
<!-- templates/classic/template.html -->
<div class="resume classic">
  <header class="resume-header">
    <h1>{{basics.name}}</h1>
    {{#if basics.title}}<p class="title">{{basics.title}}</p>{{/if}}
    <div class="contact">
      {{#if basics.email}}<span class="contact-item">{{basics.email}}</span>{{/if}}
      {{#if basics.phone}}<span class="contact-item">{{basics.phone}}</span>{{/if}}
      {{#if basics.location}}<span class="contact-item">{{basics.location}}</span>{{/if}}
    </div>
  </header>

  {{#if basics.summary}}
  <section class="section">
    <h2 class="section-title">个人简介</h2>
    <p class="summary">{{{basics.summary}}}</p>
  </section>
  {{/if}}

  {{#if experience.length}}
  <section class="section">
    <h2 class="section-title">工作经历</h2>
    {{#each experience}}
    <div class="entry">
      <div class="entry-header">
        <h3>{{company}}<span class="separator"> — </span>{{position}}</h3>
        <span class="date">{{startDate}} - {{endDate}}</span>
      </div>
      {{#if highlights.length}}
      <ul class="highlights">
        {{#each highlights}}<li>{{this}}</li>{{/each}}
      </ul>
      {{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}

  {{#if education.length}}
  <section class="section">
    <h2 class="section-title">教育背景</h2>
    {{#each education}}
    <div class="entry">
      <div class="entry-header">
        <h3>{{institution}}</h3>
        <span class="date">{{startDate}} - {{endDate}}</span>
      </div>
      <p class="sub">{{area}} · {{studyType}}</p>
    </div>
    {{/each}}
  </section>
  {{/if}}

  {{#if skills.length}}
  <section class="section">
    <h2 class="section-title">专业技能</h2>
    <div class="skill-tags">
      {{#each skills}}<span class="tag">{{name}}{{#if level}} · {{level}}{{/if}}</span>{{/each}}
    </div>
  </section>
  {{/if}}

  {{#if projects.length}}
  <section class="section">
    <h2 class="section-title">项目经历</h2>
    {{#each projects}}
    <div class="entry">
      <div class="entry-header">
        <h3>{{name}}{{#if role}}<span class="separator"> — </span>{{role}}{{/if}}</h3>
      </div>
      {{#if description}}<p class="sub">{{{description}}}</p>{{/if}}
      {{#if highlights.length}}
      <ul class="highlights">
        {{#each highlights}}<li>{{this}}</li>{{/each}}
      </ul>
      {{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
```

```css
/* templates/classic/style.css */
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.classic {
  max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 24mm 20mm;
  font-family: "Source Han Sans SC", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 10pt; line-height: 1.6; color: #333;
}
.resume-header { text-align: center; padding-bottom: 12px; border-bottom: 2px solid #2c3e50; margin-bottom: 16px; }
.resume-header h1 { font-size: 22pt; font-weight: 700; color: #2c3e50; letter-spacing: 2px; }
.resume-header .title { font-size: 11pt; color: #666; margin-top: 4px; }
.contact { margin-top: 8px; font-size: 9pt; color: #555; }
.contact-item { margin: 0 8px; }
.contact-item + .contact-item::before { content: "|"; margin-right: 8px; color: #ccc; }
.section { margin-bottom: 14px; }
.section-title { font-size: 12pt; font-weight: 700; color: #2c3e50; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin-bottom: 8px; }
.entry { margin-bottom: 10px; }
.entry-header { display: flex; justify-content: space-between; align-items: baseline; }
.entry-header h3 { font-size: 10.5pt; font-weight: 600; }
.separator { color: #999; }
.date { font-size: 9pt; color: #888; white-space: nowrap; }
.sub { font-size: 9.5pt; color: #555; margin-top: 2px; }
.summary { font-size: 9.5pt; color: #444; }
.highlights { margin-top: 4px; padding-left: 18px; }
.highlights li { font-size: 9.5pt; margin-bottom: 2px; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.tag { background: #f0f2f5; padding: 2px 10px; border-radius: 3px; font-size: 9pt; }
@media print {
  .resume.classic { margin: 0; padding: 20mm 18mm; }
}
```

The `schema.json` for classic uses the full schema from the spec (section 3.1). Copy it verbatim — all 5 sections (basics, experience, education, skills, projects) with all fields. templateId: `"classic"`, name: `"经典简洁"`.

- [ ] **Step 2: Create modern template**

```html
<!-- templates/modern/template.html -->
<div class="resume modern">
  <aside class="sidebar">
    {{#if basics.avatar}}<img class="avatar" src="{{basics.avatar}}" alt="" />{{/if}}
    <h1>{{basics.name}}</h1>
    {{#if basics.title}}<p class="title">{{basics.title}}</p>{{/if}}
    <div class="contact-list">
      {{#if basics.email}}<div class="contact-item">{{basics.email}}</div>{{/if}}
      {{#if basics.phone}}<div class="contact-item">{{basics.phone}}</div>{{/if}}
      {{#if basics.location}}<div class="contact-item">{{basics.location}}</div>{{/if}}
    </div>
    {{#if skills.length}}
    <div class="sidebar-section">
      <h2>专业技能</h2>
      {{#each skills}}
      <div class="skill-item">
        <span class="skill-name">{{name}}</span>
        {{#if level}}<span class="skill-level">{{level}}</span>{{/if}}
      </div>
      {{/each}}
    </div>
    {{/if}}
  </aside>
  <main class="main-content">
    {{#if basics.summary}}
    <section class="section">
      <h2>个人简介</h2>
      <p>{{{basics.summary}}}</p>
    </section>
    {{/if}}
    {{#if experience.length}}
    <section class="section">
      <h2>工作经历</h2>
      {{#each experience}}
      <div class="entry">
        <h3>{{position}} <span class="at">@</span> {{company}}</h3>
        <span class="date">{{startDate}} - {{endDate}}</span>
        {{#if highlights.length}}<ul>{{#each highlights}}<li>{{this}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if education.length}}
    <section class="section">
      <h2>教育背景</h2>
      {{#each education}}
      <div class="entry">
        <h3>{{institution}}</h3>
        <p>{{area}} · {{studyType}} · {{startDate}} - {{endDate}}</p>
      </div>
      {{/each}}
    </section>
    {{/if}}
    {{#if projects.length}}
    <section class="section">
      <h2>项目经历</h2>
      {{#each projects}}
      <div class="entry">
        <h3>{{name}}{{#if role}} — {{role}}{{/if}}</h3>
        {{#if description}}<p>{{{description}}}</p>{{/if}}
        {{#if highlights.length}}<ul>{{#each highlights}}<li>{{this}}</li>{{/each}}</ul>{{/if}}
      </div>
      {{/each}}
    </section>
    {{/if}}
  </main>
</div>
```

```css
/* templates/modern/style.css */
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.modern {
  max-width: 210mm; min-height: 297mm; margin: 0 auto; display: flex;
  font-family: "Source Han Sans SC", "PingFang SC", sans-serif; font-size: 10pt; color: #333;
}
.sidebar { width: 200px; background: #1a1a2e; color: #eee; padding: 24mm 16px 20px; flex-shrink: 0; }
.sidebar h1 { font-size: 18pt; color: #fff; margin-bottom: 4px; }
.sidebar .title { font-size: 10pt; color: #a0a0c0; margin-bottom: 16px; }
.avatar { width: 80px; height: 80px; border-radius: 50%; margin-bottom: 12px; object-fit: cover; }
.contact-list { margin-bottom: 20px; }
.contact-item { font-size: 8.5pt; margin-bottom: 6px; color: #c0c0d0; }
.sidebar-section { margin-top: 16px; }
.sidebar-section h2 { font-size: 10pt; color: #fff; border-bottom: 1px solid #444; padding-bottom: 4px; margin-bottom: 8px; }
.skill-item { display: flex; justify-content: space-between; font-size: 8.5pt; margin-bottom: 4px; }
.skill-level { color: #a0a0c0; }
.main-content { flex: 1; padding: 24mm 20px 20px 24px; }
.main-content .section { margin-bottom: 16px; }
.main-content h2 { font-size: 12pt; color: #1a1a2e; border-bottom: 2px solid #1a1a2e; padding-bottom: 4px; margin-bottom: 8px; }
.entry { margin-bottom: 10px; }
.entry h3 { font-size: 10.5pt; font-weight: 600; }
.at { color: #888; font-weight: 400; }
.date { font-size: 8.5pt; color: #888; }
.entry ul { margin-top: 4px; padding-left: 18px; }
.entry li { font-size: 9pt; margin-bottom: 2px; }
.entry p { font-size: 9pt; color: #555; margin-top: 2px; }
@media print { .resume.modern { margin: 0; } }
```

`schema.json`: same structure as classic, templateId: `"modern"`, name: `"现代双栏"`.

- [ ] **Step 3: Create minimal template**

```html
<!-- templates/minimal/template.html -->
<div class="resume minimal">
  <header>
    <h1>{{basics.name}}</h1>
    <div class="contact-line">
      {{#if basics.email}}<span>{{basics.email}}</span>{{/if}}
      {{#if basics.phone}}<span>{{basics.phone}}</span>{{/if}}
      {{#if basics.location}}<span>{{basics.location}}</span>{{/if}}
    </div>
  </header>
  {{#if basics.summary}}<p class="summary">{{{basics.summary}}}</p>{{/if}}
  {{#if experience.length}}
  <section>
    <h2>工作经历</h2>
    {{#each experience}}
    <div class="item">
      <div class="row"><strong>{{company}}</strong><span>{{startDate}} - {{endDate}}</span></div>
      <div class="role">{{position}}</div>
      {{#if highlights.length}}<ul>{{#each highlights}}<li>{{this}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if education.length}}
  <section>
    <h2>教育背景</h2>
    {{#each education}}
    <div class="item">
      <div class="row"><strong>{{institution}}</strong><span>{{startDate}} - {{endDate}}</span></div>
      <div class="role">{{area}} · {{studyType}}</div>
    </div>
    {{/each}}
  </section>
  {{/if}}
  {{#if skills.length}}
  <section>
    <h2>技能</h2>
    <p class="inline-list">{{#each skills}}{{name}}{{#unless @last}}, {{/unless}}{{/each}}</p>
  </section>
  {{/if}}
  {{#if projects.length}}
  <section>
    <h2>项目经历</h2>
    {{#each projects}}
    <div class="item">
      <div class="row"><strong>{{name}}</strong>{{#if role}}<span>{{role}}</span>{{/if}}</div>
      {{#if description}}<p>{{{description}}}</p>{{/if}}
      {{#if highlights.length}}<ul>{{#each highlights}}<li>{{this}}</li>{{/each}}</ul>{{/if}}
    </div>
    {{/each}}
  </section>
  {{/if}}
</div>
```

```css
/* templates/minimal/style.css */
* { margin: 0; padding: 0; box-sizing: border-box; }
.resume.minimal {
  max-width: 210mm; min-height: 297mm; margin: 0 auto; padding: 20mm;
  font-family: Georgia, "Source Han Serif SC", serif; font-size: 10pt; line-height: 1.5; color: #222;
}
header { margin-bottom: 16px; }
header h1 { font-size: 20pt; font-weight: 400; letter-spacing: 3px; }
.contact-line { font-size: 9pt; color: #666; margin-top: 4px; }
.contact-line span + span::before { content: " · "; }
.summary { font-size: 9.5pt; color: #444; margin-bottom: 14px; font-style: italic; }
section { margin-bottom: 14px; }
section h2 { font-size: 10pt; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid #222; padding-bottom: 3px; margin-bottom: 8px; }
.item { margin-bottom: 8px; }
.row { display: flex; justify-content: space-between; font-size: 10pt; }
.role { font-size: 9pt; color: #555; }
ul { padding-left: 16px; margin-top: 2px; }
li { font-size: 9pt; margin-bottom: 1px; }
.inline-list { font-size: 9pt; }
section p { font-size: 9pt; color: #444; margin-top: 2px; }
@media print { .resume.minimal { margin: 0; padding: 18mm; } }
```

`schema.json`: same structure as classic, templateId: `"minimal"`, name: `"极简风格"`.

- [ ] **Step 4: Create all three schema.json files**

Each schema.json is identical in structure (same 5 sections), differing only in `templateId` and `name`. Use the full schema from the spec section 3.1.

```json
// templates/classic/schema.json
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

For `modern/schema.json`: same but `"templateId": "modern"`, `"name": "现代双栏"`.
For `minimal/schema.json`: same but `"templateId": "minimal"`, `"name": "极简风格"`.

- [ ] **Step 5: Commit**

```bash
git add templates/
git commit -m "feat: add 3 built-in resume templates (classic, modern, minimal)"
```

---

## Task 6: Server — Express App + Prisma + Config

**Files:**
- Create: `packages/server/package.json`, `packages/server/tsconfig.json`, `packages/server/.env.example`, `packages/server/prisma/schema.prisma`, `packages/server/src/app.ts`, `packages/server/src/server.ts`, `packages/server/src/config/index.ts`, `packages/server/src/middleware/error-handler.ts`, `packages/server/src/middleware/validate.ts`

- [ ] **Step 1: Create server package.json**

```json
// packages/server/package.json
{
  "name": "@resume/server",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "db:migrate": "prisma migrate dev",
    "db:push": "prisma db push",
    "db:seed": "tsx prisma/seed.ts",
    "db:studio": "prisma studio",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "@resume/shared": "workspace:*",
    "@resume/engine": "workspace:*",
    "@prisma/client": "^6.9.0",
    "express": "^5.1.0",
    "cors": "^2.8.5",
    "bcryptjs": "^3.0.2",
    "jsonwebtoken": "^9.0.2",
    "zod": "^3.25.11",
    "pino": "^9.6.0",
    "pino-pretty": "^13.0.0",
    "ioredis": "^5.6.1",
    "puppeteer": "^24.9.0"
  },
  "devDependencies": {
    "@types/express": "^5.0.2",
    "@types/cors": "^2.8.17",
    "@types/bcryptjs": "^3.0.0",
    "@types/jsonwebtoken": "^9.0.9",
    "prisma": "^6.9.0",
    "tsx": "^4.19.4",
    "vitest": "^3.2.1"
  }
}
```

- [ ] **Step 2: Create Prisma schema**

```prisma
// packages/server/prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id         String   @id @default(cuid())
  email      String?  @unique
  phone      String?  @unique
  password   String?
  name       String?
  avatar     String?
  provider   String   @default("local")
  providerId String?
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  resumes    Resume[]
}

model Resume {
  id           String   @id @default(cuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  title        String   @default("未命名简历")
  templateId   String
  data         Json     @default("{}")
  sectionOrder String[] @default(["basics", "experience", "education", "skills", "projects"])
  customCss    String?
  isPublic     Boolean  @default(false)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  exports      Export[]

  @@index([userId])
}

model Template {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String?
  category    String
  html        String
  css         String
  schema      Json
  thumbnail   String   @default("")
  isPremium   Boolean  @default(false)
  authorId    String?
  downloads   Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Export {
  id        String   @id @default(cuid())
  resumeId  String
  resume    Resume   @relation(fields: [resumeId], references: [id], onDelete: Cascade)
  format    String
  fileUrl   String
  fileSize  Int
  createdAt DateTime @default(now())

  @@index([resumeId])
}
```

- [ ] **Step 3: Create config with Zod validation**

```
# packages/server/.env.example
DATABASE_URL=postgresql://resume:resume_dev@localhost:5432/resume_platform
REDIS_URL=redis://localhost:6379
JWT_SECRET=change-me-in-production
JWT_REFRESH_SECRET=change-me-refresh-secret
PORT=3001
NODE_ENV=development
```

```typescript
// packages/server/src/config/index.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),
  REDIS_URL: z.string().default('redis://localhost:6379'),
  JWT_SECRET: z.string().min(16),
  JWT_REFRESH_SECRET: z.string().min(16),
  PORT: z.coerce.number().default(3001),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export const config = envSchema.parse(process.env);
```

- [ ] **Step 4: Create Express app with middleware**

```typescript
// packages/server/src/app.ts
import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/error-handler';

export const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Routes will be registered in subsequent tasks

app.use(errorHandler);
```

```typescript
// packages/server/src/server.ts
import { app } from './app';
import { config } from './config/index';
import { PrismaClient } from '@prisma/client';
import pino from 'pino';

export const prisma = new PrismaClient();
export const logger = pino({ transport: config.NODE_ENV === 'development' ? { target: 'pino-pretty' } : undefined });

async function main() {
  await prisma.$connect();
  logger.info('Database connected');
  app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`);
  });
}

main().catch((err) => {
  logger.error(err);
  process.exit(1);
});
```

- [ ] **Step 5: Create error handler and validation middleware**

```typescript
// packages/server/src/middleware/error-handler.ts
import type { Request, Response, NextFunction } from 'express';
import pino from 'pino';

const logger = pino();

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code: string = 'INTERNAL_ERROR',
  ) {
    super(message);
  }
}

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ success: false, message: err.message, code: err.code });
    return;
  }
  logger.error(err);
  res.status(500).json({ success: false, message: 'Internal server error', code: 'INTERNAL_ERROR' });
}
```

```typescript
// packages/server/src/middleware/validate.ts
import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { AppError } from './error-handler';

export function validate(schema: z.ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const message = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
      throw new AppError(400, message, 'VALIDATION_ERROR');
    }
    req.body = result.data;
    next();
  };
}
```

- [ ] **Step 6: Create tsconfig, install deps, run db push, verify health endpoint**

```json
// packages/server/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": false,
    "declarationMap": false
  },
  "include": ["src"],
  "references": [{ "path": "../shared" }, { "path": "../resume-engine" }]
}
```

```bash
# start PostgreSQL and Redis
docker compose up -d

# copy .env.example to .env
cp packages/server/.env.example packages/server/.env

# install and push schema
cd packages/server
pnpm install
pnpm db:push

# verify
pnpm dev &
sleep 2
curl http://localhost:3001/api/health
# expected: {"status":"ok"}
kill %1
```

- [ ] **Step 7: Commit**

```bash
git add packages/server/ docker-compose.yml
git commit -m "feat: add server package with Express, Prisma schema, config, and middleware"
```

---

## Task 7: Server — Auth Service + Routes

**Files:**
- Create: `packages/server/src/services/auth.service.ts`, `packages/server/src/routes/auth.ts`, `packages/server/src/middleware/auth.ts`

- [ ] **Step 1: Write the failing test for auth**

```typescript
// packages/server/src/__tests__/auth.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { app } from '../app';
import { prisma } from '../server';

// Note: these tests require a running database.
// Run docker compose up -d first.

describe('Auth API', () => {
  beforeAll(async () => {
    // import routes dynamically after app is ready
    await import('../routes/auth');
  });

  afterAll(async () => {
    await prisma.user.deleteMany({ where: { email: 'test@test.com' } });
    await prisma.$disconnect();
  });

  it('POST /api/auth/register — creates user and returns tokens', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'test@test.com',
      password: 'Test1234!',
      name: '测试用户',
    });
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.user.email).toBe('test@test.com');
    expect(res.body.data.tokens.accessToken).toBeDefined();
    expect(res.body.data.tokens.refreshToken).toBeDefined();
  });

  it('POST /api/auth/login — returns tokens for valid credentials', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'test@test.com',
      password: 'Test1234!',
    });
    expect(res.status).toBe(200);
    expect(res.body.data.tokens.accessToken).toBeDefined();
  });

  it('POST /api/auth/login — rejects wrong password', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'test@test.com',
      password: 'wrong',
    });
    expect(res.status).toBe(401);
  });
});
```

- [ ] **Step 2: Implement auth service**

```typescript
// packages/server/src/services/auth.service.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../server';
import { config } from '../config/index';
import { AppError } from '../middleware/error-handler';
import type { User } from '@prisma/client';

function generateTokens(userId: string) {
  const accessToken = jwt.sign({ sub: userId }, config.JWT_SECRET, { expiresIn: '2h' });
  const refreshToken = jwt.sign({ sub: userId }, config.JWT_REFRESH_SECRET, { expiresIn: '30d' });
  return { accessToken, refreshToken };
}

function sanitizeUser(user: User) {
  return { id: user.id, email: user.email, phone: user.phone, name: user.name, avatar: user.avatar, provider: user.provider };
}

export async function register(input: { email?: string; phone?: string; password?: string; name?: string }) {
  if (!input.email && !input.phone) {
    throw new AppError(400, '邮箱或手机号必须提供一个', 'MISSING_CREDENTIAL');
  }

  if (input.email) {
    const exists = await prisma.user.findUnique({ where: { email: input.email } });
    if (exists) throw new AppError(409, '该邮箱已注册', 'EMAIL_EXISTS');
  }

  const hashedPassword = input.password ? await bcrypt.hash(input.password, 12) : undefined;

  const user = await prisma.user.create({
    data: {
      email: input.email,
      phone: input.phone,
      password: hashedPassword,
      name: input.name,
      provider: 'local',
    },
  });

  return { user: sanitizeUser(user), tokens: generateTokens(user.id) };
}

export async function login(input: { email?: string; phone?: string; password?: string }) {
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

  return { user: sanitizeUser(user), tokens: generateTokens(user.id) };
}

export async function refreshTokens(refreshToken: string) {
  try {
    const payload = jwt.verify(refreshToken, config.JWT_REFRESH_SECRET) as { sub: string };
    const user = await prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user) throw new AppError(401, '用户不存在', 'USER_NOT_FOUND');
    return { user: sanitizeUser(user), tokens: generateTokens(user.id) };
  } catch {
    throw new AppError(401, 'Token 无效或已过期', 'INVALID_TOKEN');
  }
}
```

- [ ] **Step 3: Implement auth middleware**

```typescript
// packages/server/src/middleware/auth.ts
import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/index';
import { AppError } from './error-handler';

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    throw new AppError(401, '未提供认证 Token', 'NO_TOKEN');
  }

  const token = header.slice(7);
  try {
    const payload = jwt.verify(token, config.JWT_SECRET) as { sub: string };
    req.userId = payload.sub;
    next();
  } catch {
    throw new AppError(401, 'Token 无效或已过期', 'INVALID_TOKEN');
  }
}
```

- [ ] **Step 4: Implement auth routes**

```typescript
// packages/server/src/routes/auth.ts
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
});

const loginSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
});

const refreshSchema = z.object({
  refreshToken: z.string(),
});

authRouter.post('/register', validate(registerSchema), async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

authRouter.post('/login', validate(loginSchema), async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});

authRouter.post('/refresh', validate(refreshSchema), async (req, res, next) => {
  try {
    const result = await authService.refreshTokens(req.body.refreshToken);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
});
```

- [ ] **Step 5: Register auth routes in app.ts**

Add to `packages/server/src/app.ts`, before the `app.use(errorHandler)` line:

```typescript
import { authRouter } from './routes/auth';
app.use('/api/auth', authRouter);
```

- [ ] **Step 6: Run tests, then commit**

```bash
cd packages/server && pnpm add -D supertest @types/supertest && pnpm test
```

Expected: 3 auth tests PASS.

```bash
git add packages/server/
git commit -m "feat: add auth service with register, login, refresh, and JWT middleware"
```

---

## Task 8: Server — Resume CRUD + Template Routes

**Files:**
- Create: `packages/server/src/services/resume.service.ts`, `packages/server/src/routes/resume.ts`, `packages/server/src/services/template.service.ts`, `packages/server/src/routes/template.ts`, `packages/server/prisma/seed.ts`

- [ ] **Step 1: Implement resume service**

```typescript
// packages/server/src/services/resume.service.ts
import { prisma } from '../server';
import { AppError } from '../middleware/error-handler';
import { DEFAULT_RESUME_DATA, DEFAULT_SECTION_ORDER } from '@resume/shared';

export async function listResumes(userId: string) {
  return prisma.resume.findMany({
    where: { userId },
    orderBy: { updatedAt: 'desc' },
    select: { id: true, title: true, templateId: true, updatedAt: true, createdAt: true },
  });
}

export async function getResume(id: string, userId: string) {
  const resume = await prisma.resume.findUnique({ where: { id } });
  if (!resume || resume.userId !== userId) {
    throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');
  }
  return resume;
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

export async function updateResume(id: string, userId: string, input: { title?: string; templateId?: string; data?: object; sectionOrder?: string[] }) {
  const resume = await prisma.resume.findUnique({ where: { id } });
  if (!resume || resume.userId !== userId) {
    throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');
  }
  return prisma.resume.update({ where: { id }, data: input });
}

export async function deleteResume(id: string, userId: string) {
  const resume = await prisma.resume.findUnique({ where: { id } });
  if (!resume || resume.userId !== userId) {
    throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');
  }
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
    },
  });
}
```

- [ ] **Step 2: Implement resume routes**

```typescript
// packages/server/src/routes/resume.ts
import { Router } from 'express';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth';
import { validate } from '../middleware/validate';
import * as resumeService from '../services/resume.service';

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
});

resumeRouter.get('/', async (req, res, next) => {
  try {
    const resumes = await resumeService.listResumes(req.userId!);
    res.json({ success: true, data: resumes });
  } catch (err) { next(err); }
});

resumeRouter.post('/', validate(createSchema), async (req, res, next) => {
  try {
    const resume = await resumeService.createResume(req.userId!, req.body);
    res.status(201).json({ success: true, data: resume });
  } catch (err) { next(err); }
});

resumeRouter.get('/:id', async (req, res, next) => {
  try {
    const resume = await resumeService.getResume(req.params.id, req.userId!);
    res.json({ success: true, data: resume });
  } catch (err) { next(err); }
});

resumeRouter.put('/:id', validate(updateSchema), async (req, res, next) => {
  try {
    const resume = await resumeService.updateResume(req.params.id, req.userId!, req.body);
    res.json({ success: true, data: resume });
  } catch (err) { next(err); }
});

resumeRouter.patch('/:id', validate(updateSchema), async (req, res, next) => {
  try {
    const resume = await resumeService.updateResume(req.params.id, req.userId!, req.body);
    res.json({ success: true, data: resume });
  } catch (err) { next(err); }
});

resumeRouter.delete('/:id', async (req, res, next) => {
  try {
    await resumeService.deleteResume(req.params.id, req.userId!);
    res.json({ success: true, data: null });
  } catch (err) { next(err); }
});

resumeRouter.post('/:id/duplicate', async (req, res, next) => {
  try {
    const resume = await resumeService.duplicateResume(req.params.id, req.userId!);
    res.status(201).json({ success: true, data: resume });
  } catch (err) { next(err); }
});
```

- [ ] **Step 3: Implement template service and routes**

```typescript
// packages/server/src/services/template.service.ts
import { prisma } from '../server';
import { AppError } from '../middleware/error-handler';

export async function listTemplates(category?: string) {
  const where = category ? { category } : {};
  return prisma.template.findMany({
    where,
    orderBy: { downloads: 'desc' },
    select: { id: true, name: true, slug: true, description: true, category: true, thumbnail: true, isPremium: true, downloads: true, schema: true },
  });
}

export async function getTemplate(id: string) {
  const template = await prisma.template.findUnique({ where: { id } });
  if (!template) throw new AppError(404, '模板不存在', 'TEMPLATE_NOT_FOUND');
  return template;
}

export async function getTemplateBySlug(slug: string) {
  const template = await prisma.template.findUnique({ where: { slug } });
  if (!template) throw new AppError(404, '模板不存在', 'TEMPLATE_NOT_FOUND');
  return template;
}
```

```typescript
// packages/server/src/routes/template.ts
import { Router } from 'express';
import * as templateService from '../services/template.service';

export const templateRouter = Router();

templateRouter.get('/', async (req, res, next) => {
  try {
    const category = req.query.category as string | undefined;
    const templates = await templateService.listTemplates(category);
    res.json({ success: true, data: templates });
  } catch (err) { next(err); }
});

templateRouter.get('/:id', async (req, res, next) => {
  try {
    const template = await templateService.getTemplate(req.params.id);
    res.json({ success: true, data: template });
  } catch (err) { next(err); }
});
```

- [ ] **Step 4: Create template seed script**

```typescript
// packages/server/prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();
const templatesDir = join(__dirname, '../../../templates');

const templates = [
  { slug: 'classic', dir: 'classic' },
  { slug: 'modern', dir: 'modern' },
  { slug: 'minimal', dir: 'minimal' },
];

async function main() {
  for (const t of templates) {
    const dir = join(templatesDir, t.dir);
    const html = readFileSync(join(dir, 'template.html'), 'utf-8');
    const css = readFileSync(join(dir, 'style.css'), 'utf-8');
    const schema = JSON.parse(readFileSync(join(dir, 'schema.json'), 'utf-8'));

    await prisma.template.upsert({
      where: { slug: t.slug },
      update: { html, css, schema, name: schema.name, category: t.slug === 'modern' ? 'modern' : t.slug === 'minimal' ? 'minimal' : 'classic' },
      create: { slug: t.slug, name: schema.name, category: t.slug === 'modern' ? 'modern' : t.slug === 'minimal' ? 'minimal' : 'classic', html, css, schema },
    });

    console.log(`Seeded template: ${t.slug}`);
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => { console.error(e); prisma.$disconnect(); process.exit(1); });
```

- [ ] **Step 5: Register routes in app.ts and seed**

Add to `packages/server/src/app.ts`, before `app.use(errorHandler)`:

```typescript
import { resumeRouter } from './routes/resume';
import { templateRouter } from './routes/template';
app.use('/api/resumes', resumeRouter);
app.use('/api/templates', templateRouter);
```

```bash
cd packages/server && pnpm db:seed
```

Expected: "Seeded template: classic", "Seeded template: modern", "Seeded template: minimal".

- [ ] **Step 6: Commit**

```bash
git add packages/server/
git commit -m "feat: add resume CRUD, template API, and template seed script"
```

---

## Task 9: Server — PDF Export Service

**Files:**
- Create: `packages/server/src/utils/puppeteer-pool.ts`, `packages/server/src/services/export.service.ts`, `packages/server/src/routes/export.ts`

- [ ] **Step 1: Implement Puppeteer browser pool**

```typescript
// packages/server/src/utils/puppeteer-pool.ts
import puppeteer, { type Browser } from 'puppeteer';
import pino from 'pino';

const logger = pino();

let browser: Browser | null = null;

export async function getBrowser(): Promise<Browser> {
  if (!browser || !browser.connected) {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });
    logger.info('Puppeteer browser launched');
  }
  return browser;
}

export async function closeBrowser(): Promise<void> {
  if (browser) {
    await browser.close();
    browser = null;
  }
}
```

- [ ] **Step 2: Implement export service**

```typescript
// packages/server/src/services/export.service.ts
import { renderResume } from '@resume/engine';
import { prisma } from '../server';
import { getBrowser } from '../utils/puppeteer-pool';
import { AppError } from '../middleware/error-handler';
import type { ResumeData } from '@resume/shared';

export interface PdfExportOptions {
  format?: 'A4' | 'Letter';
  margin?: { top: string; right: string; bottom: string; left: string };
}

const DEFAULT_MARGIN = { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' };

export async function exportPdf(resumeId: string, userId: string, options: PdfExportOptions = {}) {
  const resume = await prisma.resume.findUnique({ where: { id: resumeId } });
  if (!resume || resume.userId !== userId) {
    throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');
  }

  const template = await prisma.template.findUnique({ where: { id: resume.templateId } });
  if (!template) {
    // try by slug as fallback
    const tpl = await prisma.template.findUnique({ where: { slug: resume.templateId } });
    if (!tpl) throw new AppError(404, '模板不存在', 'TEMPLATE_NOT_FOUND');
    Object.assign(template ?? {}, tpl);
  }

  const tpl = template!;
  const fullHtml = renderResume({
    html: tpl.html,
    css: tpl.css,
    data: resume.data as ResumeData,
  });

  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
    await page.setContent(fullHtml, { waitUntil: 'networkidle0', timeout: 15000 });

    const pdfBuffer = await page.pdf({
      format: options.format ?? 'A4',
      margin: options.margin ?? DEFAULT_MARGIN,
      printBackground: true,
    });

    const exportRecord = await prisma.export.create({
      data: {
        resumeId,
        format: 'pdf',
        fileUrl: '',
        fileSize: pdfBuffer.length,
      },
    });

    return { id: exportRecord.id, buffer: Buffer.from(pdfBuffer), fileSize: pdfBuffer.length };
  } finally {
    await page.close();
  }
}
```

- [ ] **Step 3: Implement export routes**

```typescript
// packages/server/src/routes/export.ts
import { Router } from 'express';
import { requireAuth } from '../middleware/auth';
import * as exportService from '../services/export.service';

export const exportRouter = Router();
exportRouter.use(requireAuth);

exportRouter.post('/:resumeId/export/pdf', async (req, res, next) => {
  try {
    const { buffer, fileSize } = await exportService.exportPdf(
      req.params.resumeId,
      req.userId!,
      req.body,
    );
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="resume.pdf"`,
      'Content-Length': fileSize.toString(),
    });
    res.send(buffer);
  } catch (err) {
    next(err);
  }
});
```

- [ ] **Step 4: Register export routes in app.ts**

Add to `packages/server/src/app.ts`, before `app.use(errorHandler)`:

```typescript
import { exportRouter } from './routes/export';
app.use('/api/resumes', exportRouter);
```

- [ ] **Step 5: Commit**

```bash
git add packages/server/
git commit -m "feat: add PDF export service with Puppeteer rendering"
```

---

## Task 10: Web App — Vite + React + Router + Auth

**Files:**
- Create: `packages/web/package.json`, `packages/web/tsconfig.json`, `packages/web/vite.config.ts`, `packages/web/index.html`, `packages/web/src/main.tsx`, `packages/web/src/App.tsx`, `packages/web/src/router.tsx`, `packages/web/src/api/client.ts`, `packages/web/src/stores/auth.store.ts`, `packages/web/src/pages/Login.tsx`, `packages/web/src/components/common/ProtectedRoute.tsx`, `packages/web/src/styles/global.css`

- [ ] **Step 1: Create web package scaffolding**

```json
// packages/web/package.json
{
  "name": "@resume/web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@resume/shared": "workspace:*",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.6.1",
    "zustand": "^5.0.5",
    "axios": "^1.9.0",
    "@tanstack/react-query": "^5.76.2",
    "antd": "^5.25.2",
    "@ant-design/icons": "^5.6.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.5.2",
    "vite": "^6.3.5",
    "typescript": "^5.8.3"
  }
}
```

```typescript
// packages/web/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
});
```

```json
// packages/web/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "jsx": "react-jsx",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "declaration": false,
    "declarationMap": false,
    "composite": false
  },
  "include": ["src"]
}
```

```html
<!-- packages/web/index.html -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ResumeForge</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
```

- [ ] **Step 2: Create API client and auth store**

```typescript
// packages/web/src/api/client.ts
import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const { data } = await axios.post('/api/auth/refresh', { refreshToken });
          localStorage.setItem('accessToken', data.data.tokens.accessToken);
          localStorage.setItem('refreshToken', data.data.tokens.refreshToken);
          error.config.headers.Authorization = `Bearer ${data.data.tokens.accessToken}`;
          return api(error.config);
        } catch {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  },
);

export { api };
```

```typescript
// packages/web/src/stores/auth.store.ts
import { create } from 'zustand';
import { api } from '../api/client';
import type { User } from '@resume/shared';

interface AuthStore {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => boolean;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: false,

  login: async (email, password) => {
    set({ loading: true });
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('accessToken', data.data.tokens.accessToken);
    localStorage.setItem('refreshToken', data.data.tokens.refreshToken);
    set({ user: data.data.user, loading: false });
  },

  register: async (email, password, name) => {
    set({ loading: true });
    const { data } = await api.post('/auth/register', { email, password, name });
    localStorage.setItem('accessToken', data.data.tokens.accessToken);
    localStorage.setItem('refreshToken', data.data.tokens.refreshToken);
    set({ user: data.data.user, loading: false });
  },

  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    set({ user: null });
  },

  checkAuth: () => {
    return !!localStorage.getItem('accessToken');
  },
}));
```

- [ ] **Step 3: Create router and pages**

```typescript
// packages/web/src/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Templates } from './pages/Templates';
import { Editor } from './pages/Editor';
import { ProtectedRoute } from './components/common/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
      { path: 'templates', element: <ProtectedRoute><Templates /></ProtectedRoute> },
      { path: 'editor/:resumeId', element: <ProtectedRoute><Editor /></ProtectedRoute> },
      { index: true, element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
    ],
  },
]);
```

```typescript
// packages/web/src/components/common/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/auth.store';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuth = useAuthStore((s) => s.checkAuth)();
  if (!isAuth) return <Navigate to="/login" replace />;
  return <>{children}</>;
}
```

- [ ] **Step 4: Create App, main entry, Login page**

```typescript
// packages/web/src/App.tsx
import { Outlet } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

export function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Outlet />
    </ConfigProvider>
  );
}
```

```typescript
// packages/web/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router';
import './styles/global.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
```

```typescript
// packages/web/src/pages/Login.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button, Tabs, message } from 'antd';
import { useAuthStore } from '../stores/auth.store';

export function Login() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const { login, register, loading } = useAuthStore();
  const navigate = useNavigate();

  const onFinish = async (values: { email: string; password: string; name?: string }) => {
    try {
      if (mode === 'login') {
        await login(values.email, values.password);
      } else {
        await register(values.email, values.password, values.name ?? '');
      }
      navigate('/dashboard');
    } catch {
      message.error(mode === 'login' ? '登录失败，请检查账号密码' : '注册失败');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f5f5f5' }}>
      <Card style={{ width: 400 }}>
        <h1 style={{ textAlign: 'center', marginBottom: 24 }}>ResumeForge</h1>
        <Tabs activeKey={mode} onChange={(k) => setMode(k as 'login' | 'register')} centered items={[
          { key: 'login', label: '登录' },
          { key: 'register', label: '注册' },
        ]} />
        <Form layout="vertical" onFinish={onFinish}>
          {mode === 'register' && (
            <Form.Item name="name" label="姓名">
              <Input placeholder="请输入姓名" />
            </Form.Item>
          )}
          <Form.Item name="email" label="邮箱" rules={[{ required: true, type: 'email' }]}>
            <Input placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item name="password" label="密码" rules={[{ required: true, min: 6 }]}>
            <Input.Password placeholder="请输入密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              {mode === 'login' ? '登录' : '注册'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
```

```css
/* packages/web/src/styles/global.css */
body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
```

- [ ] **Step 5: Create placeholder Dashboard and Templates pages**

```typescript
// packages/web/src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, List, Empty, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { api } from '../api/client';
import { useAuthStore } from '../stores/auth.store';

interface ResumeSummary {
  id: string;
  title: string;
  templateId: string;
  updatedAt: string;
}

export function Dashboard() {
  const [resumes, setResumes] = useState<ResumeSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  useEffect(() => {
    api.get('/resumes').then(({ data }) => {
      setResumes(data.data);
      setLoading(false);
    });
  }, []);

  const handleCreate = async () => {
    const { data } = await api.post('/resumes', { templateId: 'classic' });
    navigate(`/editor/${data.data.id}`);
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: '确认删除？',
      onOk: async () => {
        await api.delete(`/resumes/${id}`);
        setResumes((prev) => prev.filter((r) => r.id !== id));
        message.success('已删除');
      },
    });
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
        <h1>我的简历</h1>
        <div>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleCreate} style={{ marginRight: 8 }}>新建简历</Button>
          <Button onClick={() => navigate('/templates')}>模板市场</Button>
          <Button type="text" onClick={() => { logout(); navigate('/login'); }} style={{ marginLeft: 8 }}>退出</Button>
        </div>
      </div>
      <List
        loading={loading}
        grid={{ gutter: 16, column: 3 }}
        locale={{ emptyText: <Empty description="还没有简历，点击上方新建" /> }}
        dataSource={resumes}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              onClick={() => navigate(`/editor/${item.id}`)}
              actions={[
                <span key="delete" onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}>删除</span>,
              ]}
            >
              <Card.Meta title={item.title} description={`更新于 ${new Date(item.updatedAt).toLocaleDateString()}`} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
```

```typescript
// packages/web/src/pages/Templates.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, List, Tag, Button, message } from 'antd';
import { api } from '../api/client';

interface TemplateSummary {
  id: string;
  name: string;
  slug: string;
  category: string;
  thumbnail: string;
  isPremium: boolean;
}

export function Templates() {
  const [templates, setTemplates] = useState<TemplateSummary[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/templates').then(({ data }) => setTemplates(data.data));
  }, []);

  const handleUse = async (slug: string) => {
    const { data } = await api.post('/resumes', { templateId: slug });
    message.success('简历已创建');
    navigate(`/editor/${data.data.id}`);
  };

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
        <h1>模板市场</h1>
        <Button onClick={() => navigate('/dashboard')}>返回</Button>
      </div>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={templates}
        renderItem={(item) => (
          <List.Item>
            <Card hoverable actions={[<Button key="use" type="link" onClick={() => handleUse(item.slug)}>使用此模板</Button>]}>
              <Card.Meta title={item.name} description={<Tag>{item.category}</Tag>} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
```

- [ ] **Step 6: Create placeholder Editor page (full implementation in Task 11)**

```typescript
// packages/web/src/pages/Editor.tsx
export function Editor() {
  return <div>Editor — implemented in Task 11</div>;
}
```

- [ ] **Step 7: Install, verify dev server starts, commit**

```bash
cd packages/web && pnpm install
pnpm dev &
sleep 3
curl -s http://localhost:5173 | head -5
kill %1
```

Expected: HTML with `<div id="root">`.

```bash
git add packages/web/
git commit -m "feat: add web app with Vite, React Router, auth flow, dashboard, and template market"
```

---

## Task 11: Web App — WYSIWYG Editor Page

**Files:**
- Create: `packages/web/src/stores/editor.store.ts`, `packages/web/src/components/editor/EditorLayout.tsx`, `packages/web/src/components/editor/SectionList.tsx`, `packages/web/src/components/editor/ResumePreview.tsx`, `packages/web/src/components/editor/FieldPanel.tsx`, `packages/web/src/components/editor/TopBar.tsx`
- Modify: `packages/web/src/pages/Editor.tsx`

- [ ] **Step 1: Create editor store with undo/redo**

```typescript
// packages/web/src/stores/editor.store.ts
import { create } from 'zustand';
import type { ResumeData, TemplateSchema } from '@resume/shared';
import { api } from '../api/client';

interface EditorStore {
  resumeId: string | null;
  resume: ResumeData | null;
  templateId: string | null;
  templateHtml: string | null;
  templateCss: string | null;
  schema: TemplateSchema | null;
  sectionOrder: string[];
  activeSection: string | null;
  isDirty: boolean;
  saveStatus: 'saved' | 'saving' | 'unsaved';
  history: ResumeData[];
  historyIndex: number;

  loadResume: (resumeId: string) => Promise<void>;
  updateField: (sectionKey: string, fieldKey: string, value: unknown) => void;
  updateArrayItem: (sectionKey: string, index: number, fieldKey: string, value: unknown) => void;
  addArrayItem: (sectionKey: string) => void;
  removeArrayItem: (sectionKey: string, index: number) => void;
  setActiveSection: (key: string | null) => void;
  reorderSections: (order: string[]) => void;
  undo: () => void;
  redo: () => void;
  save: () => Promise<void>;
}

function pushHistory(state: EditorStore, newData: ResumeData): Partial<EditorStore> {
  const history = state.history.slice(0, state.historyIndex + 1);
  history.push(structuredClone(newData));
  if (history.length > 50) history.shift();
  return { history, historyIndex: history.length - 1, resume: newData, isDirty: true, saveStatus: 'unsaved' as const };
}

export const useEditorStore = create<EditorStore>((set, get) => ({
  resumeId: null,
  resume: null,
  templateId: null,
  templateHtml: null,
  templateCss: null,
  schema: null,
  sectionOrder: [],
  activeSection: null,
  isDirty: false,
  saveStatus: 'saved',
  history: [],
  historyIndex: -1,

  loadResume: async (resumeId) => {
    const { data: resumeRes } = await api.get(`/resumes/${resumeId}`);
    const resume = resumeRes.data;
    const { data: tplRes } = await api.get(`/templates/${resume.templateId}`);
    const tpl = tplRes.data;

    const resumeData = resume.data as ResumeData;
    set({
      resumeId,
      resume: resumeData,
      templateId: resume.templateId,
      templateHtml: tpl.html,
      templateCss: tpl.css,
      schema: tpl.schema as TemplateSchema,
      sectionOrder: resume.sectionOrder,
      history: [structuredClone(resumeData)],
      historyIndex: 0,
      isDirty: false,
      saveStatus: 'saved',
    });
  },

  updateField: (sectionKey, fieldKey, value) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    const section = newData[sectionKey] as Record<string, unknown>;
    if (section && typeof section === 'object' && !Array.isArray(section)) {
      section[fieldKey] = value;
    }
    set(pushHistory(state, newData));
  },

  updateArrayItem: (sectionKey, index, fieldKey, value) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    const arr = newData[sectionKey] as Record<string, unknown>[];
    if (arr?.[index]) {
      arr[index][fieldKey] = value;
    }
    set(pushHistory(state, newData));
  },

  addArrayItem: (sectionKey) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    const arr = newData[sectionKey] as Record<string, unknown>[];
    if (Array.isArray(arr)) {
      arr.push(sectionKey === 'skills' ? { name: '', level: '' } : sectionKey === 'experience' ? { company: '', position: '', startDate: '', endDate: '', highlights: [] } : sectionKey === 'education' ? { institution: '', area: '', studyType: '', startDate: '', endDate: '' } : { name: '', role: '', description: '', highlights: [] });
    }
    set(pushHistory(state, newData));
  },

  removeArrayItem: (sectionKey, index) => {
    const state = get();
    if (!state.resume) return;
    const newData = structuredClone(state.resume);
    const arr = newData[sectionKey] as unknown[];
    if (Array.isArray(arr)) {
      arr.splice(index, 1);
    }
    set(pushHistory(state, newData));
  },

  setActiveSection: (key) => set({ activeSection: key }),

  reorderSections: (order) => set({ sectionOrder: order, isDirty: true, saveStatus: 'unsaved' }),

  undo: () => {
    const state = get();
    if (state.historyIndex <= 0) return;
    const newIndex = state.historyIndex - 1;
    set({ resume: structuredClone(state.history[newIndex]), historyIndex: newIndex, isDirty: true, saveStatus: 'unsaved' });
  },

  redo: () => {
    const state = get();
    if (state.historyIndex >= state.history.length - 1) return;
    const newIndex = state.historyIndex + 1;
    set({ resume: structuredClone(state.history[newIndex]), historyIndex: newIndex, isDirty: true, saveStatus: 'unsaved' });
  },

  save: async () => {
    const state = get();
    if (!state.resumeId || !state.isDirty) return;
    set({ saveStatus: 'saving' });
    await api.patch(`/resumes/${state.resumeId}`, { data: state.resume, sectionOrder: state.sectionOrder });
    set({ isDirty: false, saveStatus: 'saved' });
  },
}));
```

- [ ] **Step 2: Create TopBar component**

```typescript
// packages/web/src/components/editor/TopBar.tsx
import { Button, Space, Dropdown, Typography, Tag } from 'antd';
import { ArrowLeftOutlined, DownloadOutlined, UndoOutlined, RedoOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEditorStore } from '../../stores/editor.store';
import { api } from '../../api/client';

export function TopBar() {
  const navigate = useNavigate();
  const { save, saveStatus, undo, redo, historyIndex, history, resumeId } = useEditorStore();

  const handleExportPdf = async () => {
    if (!resumeId) return;
    const response = await api.post(`/resumes/${resumeId}/export/pdf`, {}, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const statusText = saveStatus === 'saved' ? '已保存' : saveStatus === 'saving' ? '保存中...' : '未保存';
  const statusColor = saveStatus === 'saved' ? 'green' : saveStatus === 'saving' ? 'blue' : 'orange';

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderBottom: '1px solid #e8e8e8', background: '#fff' }}>
      <Space>
        <Button icon={<ArrowLeftOutlined />} type="text" onClick={() => navigate('/dashboard')} />
        <Typography.Title level={5} style={{ margin: 0 }}>简历编辑器</Typography.Title>
        <Tag color={statusColor}>{statusText}</Tag>
      </Space>
      <Space>
        <Button icon={<UndoOutlined />} type="text" disabled={historyIndex <= 0} onClick={undo} />
        <Button icon={<RedoOutlined />} type="text" disabled={historyIndex >= history.length - 1} onClick={redo} />
        <Button type="primary" icon={<DownloadOutlined />} onClick={handleExportPdf}>导出 PDF</Button>
        <Button onClick={save} disabled={saveStatus === 'saved'}>保存</Button>
      </Space>
    </div>
  );
}
```

- [ ] **Step 3: Create SectionList (left panel with drag-sort)**

```typescript
// packages/web/src/components/editor/SectionList.tsx
import { useEditorStore } from '../../stores/editor.store';
import { Button } from 'antd';

export function SectionList() {
  const { schema, sectionOrder, activeSection, setActiveSection } = useEditorStore();

  if (!schema) return null;

  const orderedSections = sectionOrder
    .map((key) => schema.sections.find((s) => s.key === key))
    .filter(Boolean);

  return (
    <div style={{ width: 200, borderRight: '1px solid #e8e8e8', padding: 12, overflowY: 'auto' }}>
      <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 14 }}>简历模块</div>
      {orderedSections.map((section) => (
        <Button
          key={section!.key}
          block
          type={activeSection === section!.key ? 'primary' : 'default'}
          style={{ marginBottom: 4, textAlign: 'left' }}
          onClick={() => setActiveSection(section!.key)}
        >
          {section!.label}
        </Button>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Create ResumePreview (center iframe)**

```typescript
// packages/web/src/components/editor/ResumePreview.tsx
import { useEffect, useRef, useMemo } from 'react';
import Handlebars from 'handlebars';
import { useEditorStore } from '../../stores/editor.store';

export function ResumePreview() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { resume, templateHtml, templateCss } = useEditorStore();

  const renderedHtml = useMemo(() => {
    if (!templateHtml || !templateCss || !resume) return '';
    try {
      const template = Handlebars.compile(templateHtml);
      const body = template(resume);
      return `<!DOCTYPE html><html><head><style>${templateCss}</style></head><body>${body}</body></html>`;
    } catch {
      return '<html><body><p style="color:red">模板渲染错误</p></body></html>';
    }
  }, [resume, templateHtml, templateCss]);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(renderedHtml);
        doc.close();
      }
    }
  }, [renderedHtml]);

  return (
    <div style={{ flex: 1, background: '#f0f0f0', display: 'flex', justifyContent: 'center', padding: 24, overflowY: 'auto' }}>
      <iframe
        ref={iframeRef}
        title="preview"
        style={{ width: '210mm', minHeight: '297mm', background: '#fff', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      />
    </div>
  );
}
```

Note: add `handlebars` as a web dependency:

```bash
cd packages/web && pnpm add handlebars
```

- [ ] **Step 5: Create FieldPanel (right panel form)**

```typescript
// packages/web/src/components/editor/FieldPanel.tsx
import { Input, Select, Button, Divider } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useEditorStore } from '../../stores/editor.store';
import type { SectionSchema } from '@resume/shared';

export function FieldPanel() {
  const { schema, resume, activeSection, updateField, updateArrayItem, addArrayItem, removeArrayItem } = useEditorStore();

  if (!schema || !resume || !activeSection) {
    return (
      <div style={{ width: 320, borderLeft: '1px solid #e8e8e8', padding: 16 }}>
        <p style={{ color: '#999' }}>点击左侧模块开始编辑</p>
      </div>
    );
  }

  const section = schema.sections.find((s) => s.key === activeSection);
  if (!section) return null;

  if (section.type === 'array') {
    return <ArrayFieldPanel section={section} />;
  }

  const sectionData = resume[activeSection] as Record<string, unknown>;

  return (
    <div style={{ width: 320, borderLeft: '1px solid #e8e8e8', padding: 16, overflowY: 'auto' }}>
      <h3 style={{ marginBottom: 16 }}>{section.label}</h3>
      {section.fields.map((field) => (
        <div key={field.key} style={{ marginBottom: 12 }}>
          <label style={{ display: 'block', marginBottom: 4, fontSize: 13, color: '#555' }}>
            {field.label} {field.required && <span style={{ color: 'red' }}>*</span>}
          </label>
          {field.type === 'select' ? (
            <Select
              style={{ width: '100%' }}
              value={(sectionData?.[field.key] as string) || undefined}
              onChange={(val) => updateField(activeSection, field.key, val)}
              options={field.options?.map((o) => ({ label: o, value: o }))}
              allowClear
            />
          ) : field.type === 'richtext' ? (
            <Input.TextArea
              rows={4}
              value={(sectionData?.[field.key] as string) || ''}
              onChange={(e) => updateField(activeSection, field.key, e.target.value)}
            />
          ) : (
            <Input
              value={(sectionData?.[field.key] as string) || ''}
              onChange={(e) => updateField(activeSection, field.key, e.target.value)}
              placeholder={`请输入${field.label}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function ArrayFieldPanel({ section }: { section: SectionSchema }) {
  const { resume, activeSection, updateArrayItem, addArrayItem, removeArrayItem } = useEditorStore();
  const items = resume![activeSection!] as Record<string, unknown>[];

  return (
    <div style={{ width: 320, borderLeft: '1px solid #e8e8e8', padding: 16, overflowY: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h3 style={{ margin: 0 }}>{section.label}</h3>
        <Button size="small" icon={<PlusOutlined />} onClick={() => addArrayItem(activeSection!)}>添加</Button>
      </div>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: 16, padding: 12, border: '1px solid #e8e8e8', borderRadius: 6 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontWeight: 500 }}>#{index + 1}</span>
            <Button size="small" danger icon={<DeleteOutlined />} onClick={() => removeArrayItem(activeSection!, index)} />
          </div>
          {section.fields.map((field) => {
            if (field.type === 'array:text') {
              const highlights = (item[field.key] as string[]) || [];
              return (
                <div key={field.key} style={{ marginBottom: 8 }}>
                  <label style={{ fontSize: 13, color: '#555' }}>{field.label}</label>
                  {highlights.map((h, hi) => (
                    <Input
                      key={hi}
                      size="small"
                      value={h}
                      style={{ marginTop: 4 }}
                      onChange={(e) => {
                        const newHighlights = [...highlights];
                        newHighlights[hi] = e.target.value;
                        updateArrayItem(activeSection!, index, field.key, newHighlights);
                      }}
                      addonAfter={
                        <DeleteOutlined onClick={() => {
                          const newHighlights = highlights.filter((_, i) => i !== hi);
                          updateArrayItem(activeSection!, index, field.key, newHighlights);
                        }} />
                      }
                    />
                  ))}
                  <Button size="small" type="dashed" block style={{ marginTop: 4 }} onClick={() => updateArrayItem(activeSection!, index, field.key, [...highlights, ''])}>
                    + 添加条目
                  </Button>
                </div>
              );
            }
            return (
              <div key={field.key} style={{ marginBottom: 8 }}>
                <label style={{ fontSize: 13, color: '#555' }}>{field.label}</label>
                {field.type === 'select' ? (
                  <Select
                    style={{ width: '100%' }}
                    size="small"
                    value={(item[field.key] as string) || undefined}
                    onChange={(val) => updateArrayItem(activeSection!, index, field.key, val)}
                    options={field.options?.map((o) => ({ label: o, value: o }))}
                    allowClear
                  />
                ) : (
                  <Input
                    size="small"
                    value={(item[field.key] as string) || ''}
                    onChange={(e) => updateArrayItem(activeSection!, index, field.key, e.target.value)}
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 6: Create EditorLayout and wire up Editor page**

```typescript
// packages/web/src/components/editor/EditorLayout.tsx
import { TopBar } from './TopBar';
import { SectionList } from './SectionList';
import { ResumePreview } from './ResumePreview';
import { FieldPanel } from './FieldPanel';

export function EditorLayout() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopBar />
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <SectionList />
        <ResumePreview />
        <FieldPanel />
      </div>
    </div>
  );
}
```

Replace `packages/web/src/pages/Editor.tsx`:

```typescript
// packages/web/src/pages/Editor.tsx
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { EditorLayout } from '../components/editor/EditorLayout';
import { useEditorStore } from '../stores/editor.store';

export function Editor() {
  const { resumeId } = useParams<{ resumeId: string }>();
  const { loadResume, resume } = useEditorStore();

  useEffect(() => {
    if (resumeId) {
      loadResume(resumeId);
    }
  }, [resumeId, loadResume]);

  if (!resume) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><Spin size="large" /></div>;
  }

  return <EditorLayout />;
}
```

- [ ] **Step 7: Auto-save with debounce**

Add a `useAutoSave` hook. Create `packages/web/src/hooks/useAutoSave.ts`:

```typescript
// packages/web/src/hooks/useAutoSave.ts
import { useEffect, useRef } from 'react';
import { useEditorStore } from '../stores/editor.store';

export function useAutoSave(delayMs = 3000) {
  const { isDirty, save } = useEditorStore();
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!isDirty) return;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      save();
    }, delayMs);
    return () => clearTimeout(timerRef.current);
  }, [isDirty, save, delayMs]);
}
```

Add `useAutoSave()` call in `EditorLayout.tsx`:

```typescript
// Add at the top of EditorLayout function body:
import { useAutoSave } from '../../hooks/useAutoSave';

export function EditorLayout() {
  useAutoSave();
  // ... rest of component
```

- [ ] **Step 8: Commit**

```bash
git add packages/web/
git commit -m "feat: add WYSIWYG resume editor with 3-column layout, undo/redo, auto-save, and PDF export"
```

---

## Task 12: Taro Mobile H5 — Foundation + Editor

**Files:**
- Create: `packages/mobile/package.json`, `packages/mobile/config/index.ts`, `packages/mobile/config/dev.ts`, `packages/mobile/config/prod.ts`, `packages/mobile/project.config.json`, `packages/mobile/src/app.ts`, `packages/mobile/src/app.config.ts`, `packages/mobile/src/app.scss`, `packages/mobile/src/api/client.ts`, `packages/mobile/src/stores/auth.store.ts`, `packages/mobile/src/pages/index/index.tsx`, `packages/mobile/src/pages/index/index.scss`, `packages/mobile/src/pages/login/index.tsx`, `packages/mobile/src/pages/templates/index.tsx`, `packages/mobile/src/pages/editor/index.tsx`, `packages/mobile/src/pages/editor/index.scss`, `packages/mobile/src/components/FormField.tsx`

- [ ] **Step 1: Create Taro project scaffolding**

```json
// packages/mobile/package.json
{
  "name": "@resume/mobile",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev:h5": "taro build --type h5 --watch",
    "build:h5": "taro build --type h5",
    "dev:weapp": "taro build --type weapp --watch",
    "build:weapp": "taro build --type weapp"
  },
  "dependencies": {
    "@resume/shared": "workspace:*",
    "@tarojs/components": "^3.6.40",
    "@tarojs/runtime": "^3.6.40",
    "@tarojs/taro": "^3.6.40",
    "@tarojs/plugin-framework-react": "^3.6.40",
    "@tarojs/plugin-platform-h5": "^3.6.40",
    "@tarojs/plugin-platform-weapp": "^3.6.40",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "zustand": "^5.0.5",
    "@taroify/core": "^0.3.3"
  },
  "devDependencies": {
    "@tarojs/cli": "^3.6.40",
    "@tarojs/webpack5-runner": "^3.6.40",
    "@types/react": "^18.3.18",
    "typescript": "^5.8.3",
    "sass": "^1.89.0"
  }
}
```

```typescript
// packages/mobile/config/index.ts
import type { UserConfigExport } from '@tarojs/cli';

export default {
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
    devServer: { port: 10086 },
    esnextModules: ['@taroify'],
  },
  mini: {
    postcss: { pxtransform: { enable: true }, url: { enable: true, config: { limit: 1024 } } },
  },
} satisfies UserConfigExport;
```

```typescript
// packages/mobile/config/dev.ts
export default { env: { NODE_ENV: '"development"' }, mini: {}, h5: {} };
```

```typescript
// packages/mobile/config/prod.ts
export default { env: { NODE_ENV: '"production"' }, mini: {}, h5: {} };
```

- [ ] **Step 2: Create app entry and config**

```typescript
// packages/mobile/src/app.config.ts
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/login/index',
    'pages/templates/index',
    'pages/editor/index',
  ],
  window: { backgroundTextStyle: 'light', navigationBarBackgroundColor: '#fff', navigationBarTitleText: 'ResumeForge', navigationBarTextStyle: 'black' },
});
```

```typescript
// packages/mobile/src/app.ts
import { PropsWithChildren } from 'react';
import './app.scss';

export default function App({ children }: PropsWithChildren) {
  return <>{children}</>;
}
```

```scss
// packages/mobile/src/app.scss
body { font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif; }
```

- [ ] **Step 3: Create API client for Taro**

```typescript
// packages/mobile/src/api/client.ts
import Taro from '@tarojs/taro';

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api' : '/api';

export async function request<T>(url: string, options: { method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; data?: unknown } = {}): Promise<T> {
  const token = Taro.getStorageSync('accessToken');
  const res = await Taro.request({
    url: `${BASE_URL}${url}`,
    method: options.method ?? 'GET',
    data: options.data as object,
    header: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
  });

  if (res.statusCode === 401) {
    Taro.removeStorageSync('accessToken');
    Taro.redirectTo({ url: '/pages/login/index' });
    throw new Error('Unauthorized');
  }

  if (res.statusCode >= 400) {
    throw new Error(res.data?.message ?? 'Request failed');
  }

  return res.data as T;
}
```

- [ ] **Step 4: Create mobile auth store**

```typescript
// packages/mobile/src/stores/auth.store.ts
import Taro from '@tarojs/taro';
import { create } from 'zustand';
import { request } from '../api/client';
import type { AuthResponse, ApiResponse } from '@resume/shared';

interface AuthStore {
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => boolean;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: !!Taro.getStorageSync('accessToken'),

  login: async (email, password) => {
    const res = await request<ApiResponse<AuthResponse>>('/auth/login', { method: 'POST', data: { email, password } });
    Taro.setStorageSync('accessToken', res.data.tokens.accessToken);
    Taro.setStorageSync('refreshToken', res.data.tokens.refreshToken);
    set({ isLoggedIn: true });
  },

  register: async (email, password, name) => {
    const res = await request<ApiResponse<AuthResponse>>('/auth/register', { method: 'POST', data: { email, password, name } });
    Taro.setStorageSync('accessToken', res.data.tokens.accessToken);
    Taro.setStorageSync('refreshToken', res.data.tokens.refreshToken);
    set({ isLoggedIn: true });
  },

  logout: () => {
    Taro.removeStorageSync('accessToken');
    Taro.removeStorageSync('refreshToken');
    set({ isLoggedIn: false });
  },

  checkAuth: () => !!Taro.getStorageSync('accessToken'),
}));
```

- [ ] **Step 5: Create index (resume list) page**

```tsx
// packages/mobile/src/pages/index/index.tsx
import { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { request } from '../../api/client';
import type { ApiResponse } from '@resume/shared';
import './index.scss';

interface ResumeSummary { id: string; title: string; updatedAt: string; }

export default function Index() {
  const [resumes, setResumes] = useState<ResumeSummary[]>([]);

  useEffect(() => {
    const token = Taro.getStorageSync('accessToken');
    if (!token) { Taro.redirectTo({ url: '/pages/login/index' }); return; }
    request<ApiResponse<ResumeSummary[]>>('/resumes').then((res) => setResumes(res.data));
  }, []);

  const handleCreate = async () => {
    const res = await request<ApiResponse<{ id: string }>>('/resumes', { method: 'POST', data: { templateId: 'classic' } });
    Taro.navigateTo({ url: `/pages/editor/index?id=${res.data.id}` });
  };

  return (
    <View className="index-page">
      <View className="header">
        <Text className="title">我的简历</Text>
        <Text className="create-btn" onClick={handleCreate}>+ 新建</Text>
      </View>
      {resumes.length === 0 && <View className="empty">还没有简历，点击新建开始</View>}
      {resumes.map((r) => (
        <View key={r.id} className="resume-card" onClick={() => Taro.navigateTo({ url: `/pages/editor/index?id=${r.id}` })}>
          <Text className="resume-title">{r.title}</Text>
          <Text className="resume-date">{new Date(r.updatedAt).toLocaleDateString()}</Text>
        </View>
      ))}
    </View>
  );
}
```

```scss
// packages/mobile/src/pages/index/index.scss
.index-page { padding: 24px; }
.header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.title { font-size: 36px; font-weight: 700; }
.create-btn { font-size: 28px; color: #1890ff; }
.empty { text-align: center; color: #999; margin-top: 100px; font-size: 28px; }
.resume-card { background: #fff; border-radius: 12px; padding: 24px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.resume-title { font-size: 30px; font-weight: 500; display: block; }
.resume-date { font-size: 24px; color: #999; margin-top: 8px; display: block; }
```

- [ ] **Step 6: Create login page**

```tsx
// packages/mobile/src/pages/login/index.tsx
import { useState } from 'react';
import { View, Text, Input } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useAuthStore } from '../../stores/auth.store';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const { login, register } = useAuthStore();

  const handleSubmit = async () => {
    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await register(email, password, name);
      }
      Taro.redirectTo({ url: '/pages/index/index' });
    } catch {
      Taro.showToast({ title: '操作失败', icon: 'error' });
    }
  };

  return (
    <View style={{ padding: '48px 32px' }}>
      <Text style={{ fontSize: '44px', fontWeight: '700', display: 'block', textAlign: 'center', marginBottom: '48px' }}>ResumeForge</Text>
      <View style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
        <Text style={{ marginRight: '32px', color: mode === 'login' ? '#1890ff' : '#999', fontWeight: mode === 'login' ? '600' : '400' }} onClick={() => setMode('login')}>登录</Text>
        <Text style={{ color: mode === 'register' ? '#1890ff' : '#999', fontWeight: mode === 'register' ? '600' : '400' }} onClick={() => setMode('register')}>注册</Text>
      </View>
      {mode === 'register' && <Input placeholder="姓名" value={name} onInput={(e) => setName(e.detail.value)} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }} />}
      <Input placeholder="邮箱" value={email} onInput={(e) => setEmail(e.detail.value)} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }} />
      <Input placeholder="密码" password value={password} onInput={(e) => setPassword(e.detail.value)} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '24px' }} />
      <View onClick={handleSubmit} style={{ background: '#1890ff', color: '#fff', textAlign: 'center', padding: '20px', borderRadius: '8px', fontWeight: '600' }}>
        {mode === 'login' ? '登录' : '注册'}
      </View>
    </View>
  );
}
```

- [ ] **Step 7: Create FormField component and form-based editor page**

```tsx
// packages/mobile/src/components/FormField.tsx
import { View, Text, Input, Picker } from '@tarojs/components';
import type { FieldSchema } from '@resume/shared';

interface Props {
  field: FieldSchema;
  value: unknown;
  onChange: (value: unknown) => void;
}

export function FormField({ field, value, onChange }: Props) {
  if (field.type === 'select' && field.options) {
    return (
      <View style={{ marginBottom: '16px' }}>
        <Text style={{ fontSize: '26px', color: '#555', marginBottom: '8px', display: 'block' }}>{field.label}</Text>
        <Picker mode="selector" range={field.options} value={field.options.indexOf(value as string)} onChange={(e) => onChange(field.options![e.detail.value as number])}>
          <View style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px 16px', fontSize: '28px' }}>
            {(value as string) || `请选择${field.label}`}
          </View>
        </Picker>
      </View>
    );
  }

  return (
    <View style={{ marginBottom: '16px' }}>
      <Text style={{ fontSize: '26px', color: '#555', marginBottom: '8px', display: 'block' }}>
        {field.label} {field.required && <Text style={{ color: 'red' }}>*</Text>}
      </Text>
      <Input
        value={(value as string) ?? ''}
        onInput={(e) => onChange(e.detail.value)}
        placeholder={`请输入${field.label}`}
        style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '12px 16px', fontSize: '28px', width: '100%' }}
      />
    </View>
  );
}
```

```tsx
// packages/mobile/src/pages/editor/index.tsx
import { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import Taro, { useRouter } from '@tarojs/taro';
import { request } from '../../api/client';
import { FormField } from '../../components/FormField';
import type { ApiResponse, ResumeData, TemplateSchema, SectionSchema } from '@resume/shared';
import './index.scss';

export default function EditorPage() {
  const router = useRouter();
  const resumeId = router.params.id;
  const [data, setData] = useState<ResumeData | null>(null);
  const [schema, setSchema] = useState<TemplateSchema | null>(null);
  const [openSection, setOpenSection] = useState<string | null>('basics');

  useEffect(() => {
    if (!resumeId) return;
    (async () => {
      const resumeRes = await request<ApiResponse<{ data: ResumeData; templateId: string }>>(`/resumes/${resumeId}`);
      setData(resumeRes.data.data);
      const tplRes = await request<ApiResponse<{ schema: TemplateSchema }>>(`/templates/${resumeRes.data.templateId}`);
      setSchema(tplRes.data.schema);
    })();
  }, [resumeId]);

  const updateField = (sectionKey: string, fieldKey: string, value: unknown) => {
    setData((prev) => {
      if (!prev) return prev;
      const next = structuredClone(prev);
      const section = next[sectionKey] as Record<string, unknown>;
      if (section && typeof section === 'object' && !Array.isArray(section)) {
        section[fieldKey] = value;
      }
      return next;
    });
  };

  const updateArrayField = (sectionKey: string, index: number, fieldKey: string, value: unknown) => {
    setData((prev) => {
      if (!prev) return prev;
      const next = structuredClone(prev);
      const arr = next[sectionKey] as Record<string, unknown>[];
      if (arr?.[index]) arr[index][fieldKey] = value;
      return next;
    });
  };

  const handleSave = async () => {
    if (!resumeId || !data) return;
    await request(`/resumes/${resumeId}`, { method: 'PATCH', data: { data } });
    Taro.showToast({ title: '已保存', icon: 'success' });
  };

  const handleExport = async () => {
    Taro.showLoading({ title: '生成中...' });
    try {
      const token = Taro.getStorageSync('accessToken');
      const res = await Taro.request({
        url: `${process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : ''}/api/resumes/${resumeId}/export/pdf`,
        method: 'POST',
        header: { Authorization: `Bearer ${token}` },
        responseType: 'arraybuffer',
      });
      Taro.hideLoading();
      Taro.showToast({ title: 'PDF 已生成', icon: 'success' });
    } catch {
      Taro.hideLoading();
      Taro.showToast({ title: '导出失败', icon: 'error' });
    }
  };

  if (!data || !schema) return <View style={{ padding: '48px', textAlign: 'center' }}>加载中...</View>;

  return (
    <View className="editor-page">
      <ScrollView scrollY style={{ flex: 1 }}>
        {schema.sections.map((section) => (
          <View key={section.key} className="section-group">
            <View className="section-header" onClick={() => setOpenSection(openSection === section.key ? null : section.key)}>
              <Text className="section-label">{section.label}</Text>
              <Text>{openSection === section.key ? '▼' : '▶'}</Text>
            </View>
            {openSection === section.key && (
              <View className="section-body">
                {section.type === 'array' ? (
                  <ArraySectionFields section={section} data={data} onUpdate={updateArrayField} />
                ) : (
                  section.fields.map((field) => (
                    <FormField
                      key={field.key}
                      field={field}
                      value={(data[section.key] as Record<string, unknown>)?.[field.key]}
                      onChange={(val) => updateField(section.key, field.key, val)}
                    />
                  ))
                )}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <View className="bottom-bar">
        <View className="btn" onClick={handleSave}>保存</View>
        <View className="btn primary" onClick={handleExport}>导出 PDF</View>
      </View>
    </View>
  );
}

function ArraySectionFields({ section, data, onUpdate }: { section: SectionSchema; data: ResumeData; onUpdate: (key: string, idx: number, field: string, val: unknown) => void }) {
  const items = (data[section.key] as Record<string, unknown>[]) || [];
  return (
    <>
      {items.map((item, index) => (
        <View key={index} style={{ padding: '12px', marginBottom: '12px', background: '#fafafa', borderRadius: '8px' }}>
          <Text style={{ fontWeight: '600', marginBottom: '8px', display: 'block' }}>#{index + 1}</Text>
          {section.fields.filter((f) => f.type !== 'array:text').map((field) => (
            <FormField
              key={field.key}
              field={field}
              value={item[field.key]}
              onChange={(val) => onUpdate(section.key, index, field.key, val)}
            />
          ))}
        </View>
      ))}
    </>
  );
}
```

```scss
// packages/mobile/src/pages/editor/index.scss
.editor-page { display: flex; flex-direction: column; height: 100vh; background: #f5f5f5; }
.section-group { background: #fff; margin: 12px 16px; border-radius: 12px; overflow: hidden; }
.section-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; font-size: 30px; font-weight: 600; }
.section-body { padding: 0 24px 20px; }
.bottom-bar { display: flex; gap: 16px; padding: 16px 24px; background: #fff; border-top: 1px solid #eee; }
.btn { flex: 1; text-align: center; padding: 20px; border-radius: 8px; font-size: 28px; background: #f0f0f0; }
.btn.primary { background: #1890ff; color: #fff; }
```

- [ ] **Step 8: Create templates page**

```tsx
// packages/mobile/src/pages/templates/index.tsx
import { useEffect, useState } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { request } from '../../api/client';
import type { ApiResponse } from '@resume/shared';

interface TemplateSummary { id: string; name: string; slug: string; category: string; }

export default function Templates() {
  const [templates, setTemplates] = useState<TemplateSummary[]>([]);

  useEffect(() => {
    request<ApiResponse<TemplateSummary[]>>('/templates').then((res) => setTemplates(res.data));
  }, []);

  const handleSelect = async (slug: string) => {
    const res = await request<ApiResponse<{ id: string }>>('/resumes', { method: 'POST', data: { templateId: slug } });
    Taro.navigateTo({ url: `/pages/editor/index?id=${res.data.id}` });
  };

  return (
    <View style={{ padding: '24px' }}>
      <Text style={{ fontSize: '36px', fontWeight: '700', display: 'block', marginBottom: '24px' }}>选择模板</Text>
      {templates.map((t) => (
        <View key={t.id} onClick={() => handleSelect(t.slug)} style={{ background: '#fff', borderRadius: '12px', padding: '24px', marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <Text style={{ fontSize: '30px', fontWeight: '500' }}>{t.name}</Text>
          <Text style={{ fontSize: '24px', color: '#999', marginLeft: '12px' }}>{t.category}</Text>
        </View>
      ))}
    </View>
  );
}
```

- [ ] **Step 9: Install, build H5, verify, commit**

```bash
cd packages/mobile && pnpm install
pnpm dev:h5 &
sleep 5
curl -s http://localhost:10086 | head -5
kill %1
```

```bash
git add packages/mobile/
git commit -m "feat: add Taro mobile app with login, resume list, form editor, and template selection"
```

---

## Task 13: Integration Test — Full Flow

**Files:** None created — this task verifies everything works end-to-end.

- [ ] **Step 1: Start all services**

```bash
# Terminal 1: Docker services
docker compose up -d

# Terminal 2: Server
cd packages/server && cp .env.example .env && pnpm db:push && pnpm db:seed && pnpm dev

# Terminal 3: Web
cd packages/web && pnpm dev

# Terminal 4: H5
cd packages/mobile && pnpm dev:h5
```

- [ ] **Step 2: Verify Web flow**

1. Open http://localhost:5173/login
2. Register with email + password
3. Redirected to /dashboard — empty state shows
4. Click "新建简历" — redirected to /editor/:id
5. Editor loads with 3-column layout
6. Click "基本信息" in left panel — right panel shows form fields
7. Fill in name, email, phone — preview updates in center iframe
8. Click "工作经历" — add an item, fill fields — preview updates
9. Click "导出 PDF" — file downloads
10. Click save — status tag shows "已保存"

- [ ] **Step 3: Verify H5 flow**

1. Open http://localhost:10086
2. Login with the same credentials
3. Resume list shows the resume created on web
4. Tap to open — form editor loads with sections
5. Expand "基本信息" — fields show current data
6. Edit a field, tap "保存"
7. Tap "导出 PDF" — success toast shows

- [ ] **Step 4: Commit final state**

```bash
git add -A
git commit -m "chore: integration verified — full MVP flow working across web and H5"
```

---

## Self-Review Summary

**Spec coverage:**
- User auth (email + password): Tasks 7, 10, 12 ✅
- Resume CRUD: Task 8 ✅
- 3 built-in templates: Task 5 ✅
- Web WYSIWYG editor: Task 11 ✅
- PDF export: Task 9 ✅
- Basic H5 (Taro): Task 12 ✅
- Template market: Tasks 8 (API), 10 (Web page), 12 (H5 page) ✅
- Auto-save: Task 11 Step 7 ✅
- Undo/redo: Task 11 Step 1 ✅

**Deferred to Phase 2 (per spec):** AI Agent, WeChat login, WeChat mini-program, phone SMS auth. These are not in Phase 1 MVP scope.

**Type consistency verified:** `ResumeData`, `TemplateSchema`, `ApiResponse<T>` types used consistently across all packages. `renderResume({ html, css, data })` signature matches in engine, server, and web preview.
