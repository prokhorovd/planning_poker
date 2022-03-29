require('dotenv').config();
const path = require('path');
const express = require('express');
import { Express, Request, Response } from 'express';
const app: Express = express();
const { createServer } = require('http');
import { Server, Socket } from 'socket.io';
const httpServer = createServer(app);
import { Store } from './storage';

const port = process.env.PORT || 4000;

const storage = Store.getInstance();

// sockets
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FE_URL,
  },
});
io.on('connection', (socket: Socket) => {
  console.log(`${socket.id} connected`);
  socket.on('disconnect', (reason) => {
    console.log(`${socket.id} was disconnected with reason ${reason}`);
  });
  socket.on('create room', (room) => {
    storage.createRoom(room);
    socket.join(room.roomID);
  });
  socket.on('try add user to the room', ({ roomID, user }) => {
    socket.join(roomID);
    let roomExist = Object.keys(storage.getRooms()).includes(roomID);
    if (!roomExist) {
      const result = null;
      const error = `room with id#${roomID} not exist`;
      io.to(roomID).emit('join room event', { result, error });
    } else {
      storage.addUserToRoom({ roomID, user });
      const result = storage.getRoom(roomID);
      const error = '';
      io.to(roomID).emit('join room event', { result, error });
    }
  });
  socket.on('initiate game start', (roomId) => {
    io.to(roomId).emit('start game');
  });
  socket.on('pick card initiated', (data) => {
    const { roomID, userSocket } = data;
    storage.updateUser(data);
    io.to(roomID).emit('user was updated', {
      user: storage.getUser({ roomID, userSocket }),
    });
  });
  socket.on('init restart game', ({ roomId }) => {
    // reset all pickedCards in room
    storage.resetVotes(roomId);
    io.to(roomId).emit('restart game', {
      userList: storage.getRoom(roomId).userList,
    });
  });
});

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/server', function (req: Request, res: Response) {
  res.send('server is available');
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

httpServer.listen(port, () => {
  console.log(`Planning poker server listening on port ${port}`);
});
