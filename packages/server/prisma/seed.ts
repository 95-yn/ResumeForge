import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();
const templatesDir = join(__dirname, '../../../templates');

const templates = [
  { slug: 'classic', dir: 'classic', category: 'classic' },
  { slug: 'modern', dir: 'modern', category: 'modern' },
  { slug: 'minimal', dir: 'minimal', category: 'minimal' },
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
