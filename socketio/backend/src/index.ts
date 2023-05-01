const http = require('http');
const express = require('express');
import { Server } from 'socket.io';
import { Message } from "./model/message.model";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

app.get('/', (_: any, res: any) => {
    res.send('hello')
})

const chat = io.of('/chatRoom');

chat.on('connection', (socket) => {
    socket.on('welcome', (message: Message) => {
        socket.join(message.room);
        chat.in(message.room).emit('welcome', message);
    });

    socket.on('message', (message: Message) => {
        chat.in(message.room).emit('message', message);
    });

    socket.on('leave', (message: Message) => {
        socket.leave(message.room);
        chat.in(message.room).emit('leave', message);
    })
})

server.listen(3000, () => {
    console.log('Server is on 3000...')
})