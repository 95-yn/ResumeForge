import { Router } from 'express';
import { requireAuth } from '../middleware/auth';
import * as exportService from '../services/export.service';

export const exportRouter = Router();

exportRouter.post('/:resumeId/export/pdf', requireAuth, async (req, res, next) => {
  try {
    const { buffer, fileSize } = await exportService.exportPdf(req.params.resumeId, req.userId!, req.body);
    res.set({ 'Content-Type': 'application/pdf', 'Content-Disposition': 'attachment; filename="resume.pdf"', 'Content-Length': fileSize.toString() });
    res.send(buffer);
  } catch (err) { next(err); }
});

export const guestExportRouter = Router();

guestExportRouter.post('/guest/export/pdf', async (req, res, next) => {
  try {
    const { templateSlug, data, options } = req.body;
    if (!templateSlug || !data) { res.status(400).json({ success: false, message: '缺少 templateSlug 或 data' }); return; }
    const { buffer, fileSize } = await exportService.exportPdfDirect({ templateSlug, data }, options ?? {});
    res.set({ 'Content-Type': 'application/pdf', 'Content-Disposition': 'attachment; filename="resume.pdf"', 'Content-Length': fileSize.toString() });
    res.send(buffer);
  } catch (err) { next(err); }
});
