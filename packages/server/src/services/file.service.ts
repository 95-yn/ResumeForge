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
