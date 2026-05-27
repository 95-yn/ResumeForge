import { Router } from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate';
import * as authService from '../services/auth.service';

export const authRouter = Router();

const registerSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string().min(6).optional(),
  name: z.string().optional(),
  device: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
  device: z.string().optional(),
});

const refreshSchema = z.object({ refreshToken: z.string(), device: z.string().optional() });
const logoutSchema = z.object({ refreshToken: z.string() });

authRouter.post('/register', validate(registerSchema), async (req, res, next) => {
  try {
    const { device, ...input } = req.body;
    const result = await authService.register(input, device);
    res.status(201).json({ success: true, data: result });
  } catch (err) { next(err); }
});

authRouter.post('/login', validate(loginSchema), async (req, res, next) => {
  try {
    const { device, ...input } = req.body;
    const result = await authService.login(input, device);
    res.json({ success: true, data: result });
  } catch (err) { next(err); }
});

authRouter.post('/refresh', validate(refreshSchema), async (req, res, next) => {
  try {
    const result = await authService.refreshTokens(req.body.refreshToken, req.body.device);
    res.json({ success: true, data: result });
  } catch (err) { next(err); }
});

authRouter.post('/logout', validate(logoutSchema), async (req, res, next) => {
  try {
    await authService.logout(req.body.refreshToken);
    res.json({ success: true, data: null });
  } catch (err) { next(err); }
});
