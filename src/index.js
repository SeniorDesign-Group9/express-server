import dotenv from 'dotenv';
import initWebServer from './services/webServer.js';

(async function main() {
  // Load environment variables
  dotenv.config();
  const httpServer = await initWebServer();

  httpServer.listen(process.env.PORT | 5000);
}());
