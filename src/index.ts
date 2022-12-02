import net from 'net';

const socketServer = net.createServer(socket => {
    console.log(socket.address());
    socket.end("Hello world!");
})

socketServer.listen(5909);
