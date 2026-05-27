import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();
const templatesDir = join(__dirname, '../../../templates');

const templates = [
  // Business (10)
  { slug: 'classic', dir: 'classic', category: 'business' },
  { slug: 'professional', dir: 'professional', category: 'business' },
  { slug: 'executive', dir: 'executive', category: 'business' },
  { slug: 'corporate', dir: 'corporate', category: 'business' },
  { slug: 'banking', dir: 'banking', category: 'business' },
  { slug: 'consulting', dir: 'consulting', category: 'business' },
  { slug: 'sales', dir: 'sales', category: 'business' },
  { slug: 'hr', dir: 'hr', category: 'business' },
  { slug: 'manager', dir: 'manager', category: 'business' },
  { slug: 'legal', dir: 'legal', category: 'business' },
  // Creative (10)
  { slug: 'modern', dir: 'modern', category: 'creative' },
  { slug: 'fresh', dir: 'fresh', category: 'creative' },
  { slug: 'creative', dir: 'creative', category: 'creative' },
  { slug: 'designer', dir: 'designer', category: 'creative' },
  { slug: 'photographer', dir: 'photographer', category: 'creative' },
  { slug: 'writer', dir: 'writer', category: 'creative' },
  { slug: 'marketing', dir: 'marketing', category: 'creative' },
  { slug: 'media', dir: 'media', category: 'creative' },
  { slug: 'artist', dir: 'artist', category: 'creative' },
  { slug: 'architect', dir: 'architect', category: 'creative' },
  // Minimal (10)
  { slug: 'minimal', dir: 'minimal', category: 'minimal' },
  { slug: 'elegant', dir: 'elegant', category: 'minimal' },
  { slug: 'clean', dir: 'clean', category: 'minimal' },
  { slug: 'swiss', dir: 'swiss', category: 'minimal' },
  { slug: 'nordic', dir: 'nordic', category: 'minimal' },
  { slug: 'japanese', dir: 'japanese', category: 'minimal' },
  { slug: 'paper', dir: 'paper', category: 'minimal' },
  { slug: 'mono', dir: 'mono', category: 'minimal' },
  { slug: 'line', dir: 'line', category: 'minimal' },
  { slug: 'space', dir: 'space', category: 'minimal' },
  // Tech (10)
  { slug: 'tech', dir: 'tech', category: 'tech' },
  { slug: 'developer', dir: 'developer', category: 'tech' },
  { slug: 'github', dir: 'github', category: 'tech' },
  { slug: 'terminal', dir: 'terminal', category: 'tech' },
  { slug: 'vscode', dir: 'vscode', category: 'tech' },
  { slug: 'data', dir: 'data', category: 'tech' },
  { slug: 'devops', dir: 'devops', category: 'tech' },
  { slug: 'mobile', dir: 'mobile', category: 'tech' },
  { slug: 'fullstack', dir: 'fullstack', category: 'tech' },
  { slug: 'ai', dir: 'ai', category: 'tech' },
  // Campus (5)
  { slug: 'campus-general', dir: 'campus-general', category: 'campus' },
  { slug: 'campus-tech', dir: 'campus-tech', category: 'campus' },
  { slug: 'campus-finance', dir: 'campus-finance', category: 'campus' },
  { slug: 'campus-design', dir: 'campus-design', category: 'campus' },
  { slug: 'campus-intern', dir: 'campus-intern', category: 'campus' },
  // IT互联网职能
  { slug: 'it-frontend', dir: 'it-frontend', category: 'profession' },
  { slug: 'it-backend', dir: 'it-backend', category: 'profession' },
  { slug: 'it-fullstack', dir: 'it-fullstack', category: 'profession' },
  // 金融财会职能
  { slug: 'finance-analyst', dir: 'finance-analyst', category: 'profession' },
  { slug: 'finance-accounting', dir: 'finance-accounting', category: 'profession' },
  { slug: 'finance-banking', dir: 'finance-banking', category: 'profession' },
  // 设计创意职能
  { slug: 'design-ui', dir: 'design-ui', category: 'profession' },
  { slug: 'design-graphic', dir: 'design-graphic', category: 'profession' },
  { slug: 'design-video', dir: 'design-video', category: 'profession' },
  // 教育学术职能
  { slug: 'edu-teacher', dir: 'edu-teacher', category: 'profession' },
  { slug: 'edu-professor', dir: 'edu-professor', category: 'profession' },
  { slug: 'edu-trainer', dir: 'edu-trainer', category: 'profession' },
  // 市场营销职能
  { slug: 'mkt-digital', dir: 'mkt-digital', category: 'profession' },
  { slug: 'mkt-brand', dir: 'mkt-brand', category: 'profession' },
  { slug: 'mkt-content', dir: 'mkt-content', category: 'profession' },
  // 医疗健康职能
  { slug: 'med-doctor', dir: 'med-doctor', category: 'profession' },
  { slug: 'med-nurse', dir: 'med-nurse', category: 'profession' },
  { slug: 'med-pharma', dir: 'med-pharma', category: 'profession' },
  // 产品运营职能
  { slug: 'pm-product', dir: 'pm-product', category: 'profession' },
  { slug: 'pm-operation', dir: 'pm-operation', category: 'profession' },
  { slug: 'pm-growth', dir: 'pm-growth', category: 'profession' },
  // 人力行政职能
  { slug: 'hr-recruiter', dir: 'hr-recruiter', category: 'profession' },
  { slug: 'hr-training', dir: 'hr-training', category: 'profession' },
  { slug: 'hr-admin', dir: 'hr-admin', category: 'profession' },
  // 法律合规职能
  { slug: 'legal-lawyer', dir: 'legal-lawyer', category: 'profession' },
  { slug: 'legal-compliance', dir: 'legal-compliance', category: 'profession' },
  { slug: 'legal-ip', dir: 'legal-ip', category: 'profession' },
];

async function main() {
  for (const t of templates) {
    const dir = join(templatesDir, t.dir);
    const html = readFileSync(join(dir, 'template.html'), 'utf-8');
    const css = readFileSync(join(dir, 'style.css'), 'utf-8');
    const schema = JSON.parse(readFileSync(join(dir, 'schema.json'), 'utf-8'));
    await prisma.template.upsert({
      where: { slug: t.slug },
      update: { html, css, schema, name: schema.name, category: t.category },
      create: { slug: t.slug, name: schema.name, category: t.category, html, css, schema },
    });
    console.log(`Seeded template: ${t.slug}`);
  }
}

main().then(() => prisma.$disconnect()).catch((e) => { console.error(e); prisma.$disconnect(); process.exit(1); });
