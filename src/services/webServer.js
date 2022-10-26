import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import router from '../routes';
import swaggerSpecs from './swagger';

const app = express();

dotenv.config();

async function initWebServer() {
  const httpServer = createServer(app);

  // TODO connect to db

  // Enable cross origin
  app.use(
    cors(),
    express.json(),
    router,
  );

  // Enable swagger
  app.use(
    '/',
    swaggerUi.serve,
  );

  app.get(
    '/',
    swaggerUi.setup(swaggerSpecs(), { explorer: true }),
  );

  return httpServer;
}

export default initWebServer;

export { app };
