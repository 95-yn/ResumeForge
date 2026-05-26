import { Router } from 'express';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth';
import { validate } from '../middleware/validate';
import * as resumeService from '../services/resume.service';

export const resumeRouter = Router();
resumeRouter.use(requireAuth);

const createSchema = z.object({ title: z.string().optional(), templateId: z.string(), data: z.record(z.unknown()).optional() });
const updateSchema = z.object({ title: z.string().optional(), templateId: z.string().optional(), data: z.record(z.unknown()).optional(), sectionOrder: z.array(z.string()).optional() });

resumeRouter.get('/', async (req, res, next) => { try { const resumes = await resumeService.listResumes(req.userId!); res.json({ success: true, data: resumes }); } catch (err) { next(err); } });
resumeRouter.post('/', validate(createSchema), async (req, res, next) => { try { const resume = await resumeService.createResume(req.userId!, req.body); res.status(201).json({ success: true, data: resume }); } catch (err) { next(err); } });
resumeRouter.get('/:id', async (req, res, next) => { try { const resume = await resumeService.getResume(req.params.id, req.userId!); res.json({ success: true, data: resume }); } catch (err) { next(err); } });
resumeRouter.put('/:id', validate(updateSchema), async (req, res, next) => { try { const resume = await resumeService.updateResume(req.params.id, req.userId!, req.body); res.json({ success: true, data: resume }); } catch (err) { next(err); } });
resumeRouter.patch('/:id', validate(updateSchema), async (req, res, next) => { try { const resume = await resumeService.updateResume(req.params.id, req.userId!, req.body); res.json({ success: true, data: resume }); } catch (err) { next(err); } });
resumeRouter.delete('/:id', async (req, res, next) => { try { await resumeService.deleteResume(req.params.id, req.userId!); res.json({ success: true, data: null }); } catch (err) { next(err); } });
resumeRouter.post('/:id/duplicate', async (req, res, next) => { try { const resume = await resumeService.duplicateResume(req.params.id, req.userId!); res.status(201).json({ success: true, data: resume }); } catch (err) { next(err); } });
