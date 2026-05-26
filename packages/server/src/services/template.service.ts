import { prisma } from '../server';
import { AppError } from '../middleware/error-handler';

export async function listTemplates(category?: string) {
  const where = category ? { category } : {};
  return prisma.template.findMany({
    where, orderBy: { downloads: 'desc' },
    select: { id: true, name: true, slug: true, description: true, category: true, thumbnail: true, isPremium: true, downloads: true, schema: true },
  });
}

export async function getTemplate(id: string) {
  // Try by id first, then by slug
  let template = await prisma.template.findUnique({ where: { id } });
  if (!template) {
    template = await prisma.template.findUnique({ where: { slug: id } });
  }
  if (!template) throw new AppError(404, '模板不存在', 'TEMPLATE_NOT_FOUND');
  return template;
}
