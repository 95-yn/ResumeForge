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
    data: { email: input.email, phone: input.phone, password: hashedPassword, name: input.name, provider: 'local' },
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
