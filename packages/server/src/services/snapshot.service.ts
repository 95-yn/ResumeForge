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
    data: { data: snapshot.data ?? undefined, version: { increment: 1 } },
  });
}
