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
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');
  return resume;
}

export async function createResume(userId: string, input: { title?: string; templateId: string; data?: object }) {
  return prisma.resume.create({
    data: { userId, title: input.title ?? '未命名简历', templateId: input.templateId, data: input.data ?? DEFAULT_RESUME_DATA, sectionOrder: DEFAULT_SECTION_ORDER },
  });
}

export async function updateResume(id: string, userId: string, input: { title?: string; templateId?: string; data?: object; sectionOrder?: string[] }) {
  const resume = await prisma.resume.findUnique({ where: { id } });
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');
  return prisma.resume.update({ where: { id }, data: input });
}

export async function deleteResume(id: string, userId: string) {
  const resume = await prisma.resume.findUnique({ where: { id } });
  if (!resume || resume.userId !== userId) throw new AppError(404, '简历不存在', 'RESUME_NOT_FOUND');
  await prisma.resume.delete({ where: { id } });
}

export async function duplicateResume(id: string, userId: string) {
  const source = await getResume(id, userId);
  return prisma.resume.create({
    data: { userId, title: `${source.title} (副本)`, templateId: source.templateId, data: source.data ?? DEFAULT_RESUME_DATA, sectionOrder: source.sectionOrder, customCss: source.customCss },
  });
}
