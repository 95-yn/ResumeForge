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
