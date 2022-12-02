import express from 'express';
import { createServer } from 'http';
import router from '../routes/index.js';

const app = express();

async function initWebServer() {
  const httpServer = createServer(app);

  // TODO connect to db

  // Enable cross-origin
  app.use(
    express.json(),
    router,
  );

  // Enable swagger
  app.use(
    '/',
  );

  // serve swagger ui
  app.get(
    '/',
  );

  return httpServer;
}

export default initWebServer;

export { app };
