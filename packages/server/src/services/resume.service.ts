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
