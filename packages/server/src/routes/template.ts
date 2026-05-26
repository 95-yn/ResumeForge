import { Router } from 'express';
import * as templateService from '../services/template.service';

export const templateRouter = Router();

templateRouter.get('/', async (req, res, next) => { try { const category = req.query.category as string | undefined; const templates = await templateService.listTemplates(category); res.json({ success: true, data: templates }); } catch (err) { next(err); } });
templateRouter.get('/:id', async (req, res, next) => { try { const template = await templateService.getTemplate(req.params.id); res.json({ success: true, data: template }); } catch (err) { next(err); } });
