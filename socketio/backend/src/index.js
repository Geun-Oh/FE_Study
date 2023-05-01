"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var express = require('express');
var socket_io_1 = require("socket.io");
var app = express();
var server = http.createServer(app);
var io = new socket_io_1.Server(server, {
    cors: {
        origin: '*'
    }
});
app.get('/', function (_, res) {
    res.send('hello');
});
var chat = io.of('/chatRoom');
chat.on('connection', function (socket) {
    socket.on('welcome', function (message) {
        socket.join(message.room);
        chat.in(message.room).emit('welcome', message);
    });
    socket.on('message', function (message) {
        chat.in(message.room).emit('message', message);
    });
    socket.on('leave', function (message) {
        socket.leave(message.room);
        chat.in(message.room).emit('leave', message);
    });
});
server.listen(3000, function () {
    console.log('Server is on 3000...');
});
