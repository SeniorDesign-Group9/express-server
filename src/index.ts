import initWebServer from './services/webServer';

(async function main() {
  const httpServer = await initWebServer();

  httpServer.listen(process.env.PORT || 5000);
}());
