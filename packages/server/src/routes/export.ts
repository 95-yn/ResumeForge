import { Router } from 'express';
import { requireAuth } from '../middleware/auth';
import * as exportService from '../services/export.service';

export const exportRouter = Router();
exportRouter.use(requireAuth);

exportRouter.post('/:resumeId/export/pdf', async (req, res, next) => {
  try {
    const { buffer, fileSize } = await exportService.exportPdf(req.params.resumeId, req.userId!, req.body);
    res.set({ 'Content-Type': 'application/pdf', 'Content-Disposition': 'attachment; filename="resume.pdf"', 'Content-Length': fileSize.toString() });
    res.send(buffer);
  } catch (err) { next(err); }
});
