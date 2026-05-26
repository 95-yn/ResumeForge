import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/error-handler';
import { authRouter } from './routes/auth';

export const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRouter);

app.use(errorHandler);
