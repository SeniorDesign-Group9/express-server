import { createServer } from 'net';
import logger from './globals.js';

const socketServer = createServer((socket) => {
  // 'connection' listener.
  logger.info('client connected');
  socket.on('end', () => {
    console.log('client disconnected');
  });
  socket.write('hello\r\n');
});

socketServer.listen(5909);
