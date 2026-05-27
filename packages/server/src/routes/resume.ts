import { Router } from 'express';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth';
import { validate } from '../middleware/validate';
import * as resumeService from '../services/resume.service';
import * as snapshotService from '../services/snapshot.service';

export const resumeRouter = Router();
resumeRouter.use(requireAuth);

const createSchema = z.object({
  title: z.string().optional(),
  templateId: z.string(),
  data: z.record(z.unknown()).optional(),
});

const updateSchema = z.object({
  title: z.string().optional(),
  templateId: z.string().optional(),
  data: z.record(z.unknown()).optional(),
  sectionOrder: z.array(z.string()).optional(),
  version: z.number().int(),
  lastDevice: z.string().optional(),
});

const shareSchema = z.object({ isPublic: z.boolean() });
const snapshotCreateSchema = z.object({ label: z.string().optional() });

// Resume CRUD
resumeRouter.get('/', async (req, res, next) => {
  try { const resumes = await resumeService.listResumes(req.userId!); res.json({ success: true, data: resumes }); } catch (err) { next(err); }
});

resumeRouter.post('/', validate(createSchema), async (req, res, next) => {
  try { const resume = await resumeService.createResume(req.userId!, req.body); res.status(201).json({ success: true, data: resume }); } catch (err) { next(err); }
});

resumeRouter.get('/:id', async (req, res, next) => {
  try { const resume = await resumeService.getResume(req.params.id, req.userId!); res.json({ success: true, data: resume }); } catch (err) { next(err); }
});

resumeRouter.put('/:id', validate(updateSchema), async (req, res, next) => {
  try { const resume = await resumeService.updateResume(req.params.id as string, req.userId!, req.body); res.json({ success: true, data: resume }); } catch (err) { next(err); }
});

resumeRouter.patch('/:id', validate(updateSchema), async (req, res, next) => {
  try { const resume = await resumeService.updateResume(req.params.id as string, req.userId!, req.body); res.json({ success: true, data: resume }); } catch (err) { next(err); }
});

resumeRouter.delete('/:id', async (req, res, next) => {
  try { await resumeService.deleteResume(req.params.id, req.userId!); res.json({ success: true, data: null }); } catch (err) { next(err); }
});

resumeRouter.post('/:id/duplicate', async (req, res, next) => {
  try { const resume = await resumeService.duplicateResume(req.params.id, req.userId!); res.status(201).json({ success: true, data: resume }); } catch (err) { next(err); }
});

// Share
resumeRouter.post('/:id/share', validate(shareSchema), async (req, res, next) => {
  try { const result = await resumeService.toggleShare(req.params.id as string, req.userId!, req.body.isPublic); res.json({ success: true, data: result }); } catch (err) { next(err); }
});

// Snapshots
resumeRouter.get('/:id/snapshots', async (req, res, next) => {
  try { const snapshots = await snapshotService.listSnapshots(req.params.id, req.userId!); res.json({ success: true, data: snapshots }); } catch (err) { next(err); }
});

resumeRouter.post('/:id/snapshots', validate(snapshotCreateSchema), async (req, res, next) => {
  try { const snapshot = await snapshotService.createSnapshot(req.params.id as string, req.userId!, 'manual', req.body.label); res.status(201).json({ success: true, data: snapshot }); } catch (err) { next(err); }
});

resumeRouter.get('/:id/snapshots/:snapshotId', async (req, res, next) => {
  try { const snapshot = await snapshotService.getSnapshot(req.params.snapshotId, req.params.id, req.userId!); res.json({ success: true, data: snapshot }); } catch (err) { next(err); }
});

resumeRouter.post('/:id/snapshots/:snapshotId/restore', async (req, res, next) => {
  try { const resume = await snapshotService.restoreSnapshot(req.params.snapshotId, req.params.id, req.userId!); res.json({ success: true, data: resume }); } catch (err) { next(err); }
});
