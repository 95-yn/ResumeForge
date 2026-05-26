import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { AppError } from './error-handler';

export function validate(schema: z.ZodSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const message = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
      throw new AppError(400, message, 'VALIDATION_ERROR');
    }
    req.body = result.data;
    next();
  };
}
