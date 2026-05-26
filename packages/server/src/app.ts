import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/error-handler';
import { authRouter } from './routes/auth';
import { resumeRouter } from './routes/resume';
import { exportRouter } from './routes/export';
import { templateRouter } from './routes/template';

export const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/resumes', resumeRouter);
app.use('/api/resumes', exportRouter);
app.use('/api/templates', templateRouter);

app.use(errorHandler);
