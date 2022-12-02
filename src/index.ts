import net from 'net';

const socketServer = net.createServer(socket => {
    socket.end("Hello world!");
})

socketServer.listen(5909);
