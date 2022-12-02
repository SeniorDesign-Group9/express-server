import net from 'net';

const server = net.createServer((socket) => {
  socket.on('connect', (data: Buffer) => {
    data.toString();
  });
  socket.end(`${new Date()}\n`);
});

server.listen(59090);
