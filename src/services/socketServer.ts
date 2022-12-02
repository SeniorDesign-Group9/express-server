import net from 'net';

const server = net.createServer((socket) => {
  socket.end('Hello world!');
});

server.listen(59090);
