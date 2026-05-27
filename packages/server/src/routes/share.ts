import { Router } from 'express';
import * as resumeService from '../services/resume.service';

export const shareRouter = Router();

shareRouter.get('/:token', async (req, res, next) => {
  try {
    const resume = await resumeService.getResumeByShareToken(req.params.token);
    res.json({ success: true, data: resume });
  } catch (err) { next(err); }
});
