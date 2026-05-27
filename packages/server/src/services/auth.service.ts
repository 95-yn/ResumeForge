import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { prisma } from '../server';
import { config } from '../config/index';
import { AppError } from '../middleware/error-handler';
import type { User } from '@prisma/client';

function generateAccessToken(userId: string) {
  return jwt.sign({ sub: userId }, config.JWT_SECRET, { expiresIn: '2h' });
}

function hashToken(token: string) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

function sanitizeUser(user: User) {
  return {
    id: user.id,
    email: user.email,
    phone: user.phone,
    name: user.name,
    avatar: user.avatar,
    provider: user.provider,
    plan: user.plan,
    planExpiry: user.planExpiry?.toISOString() ?? null,
  };
}

export async function register(input: { email?: string; phone?: string; password?: string; name?: string }, device?: string) {
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
  const tokens = await createTokenPair(user.id, device);
  return { user: sanitizeUser(user), tokens };
}

export async function login(input: { email?: string; phone?: string; password?: string }, device?: string) {
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
  const tokens = await createTokenPair(user.id, device);
  return { user: sanitizeUser(user), tokens };
}

export async function refreshTokens(refreshToken: string, device?: string) {
  const tokenHash = hashToken(refreshToken);
  const stored = await prisma.refreshToken.findUnique({ where: { token: tokenHash } });
  if (!stored || stored.expiresAt < new Date()) {
    if (stored) await prisma.refreshToken.delete({ where: { id: stored.id } });
    throw new AppError(401, 'Token 无效或已过期', 'INVALID_TOKEN');
  }
  const user = await prisma.user.findUnique({ where: { id: stored.userId } });
  if (!user) throw new AppError(401, '用户不存在', 'USER_NOT_FOUND');
  await prisma.refreshToken.delete({ where: { id: stored.id } });
  const tokens = await createTokenPair(user.id, device ?? stored.device);
  return { user: sanitizeUser(user), tokens };
}

export async function logout(refreshToken: string) {
  const tokenHash = hashToken(refreshToken);
  await prisma.refreshToken.deleteMany({ where: { token: tokenHash } });
}

async function createTokenPair(userId: string, device?: string | null) {
  const accessToken = generateAccessToken(userId);
  const rawRefreshToken = crypto.randomBytes(40).toString('hex');
  const tokenHash = hashToken(rawRefreshToken);
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  await prisma.refreshToken.create({
    data: { userId, token: tokenHash, device: device ?? null, expiresAt },
  });
  return { accessToken, refreshToken: rawRefreshToken };
}
