import { app } from './app';
import { config } from './config/index';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  console.log('Database connected');
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
