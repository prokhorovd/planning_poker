require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const { createServer } = require('http');
const { Server } = require('socket.io');
const httpServer = createServer(app);

console.log(process.env.PORT);
const port = process.env.PORT || 4000;

const {
  createRoom,
  getRoom,
  addUserToRoom,
  getRooms,
} = require('./roomsData.tsx');

// sockets
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});
io.on('connection', (socket) => {
  console.log(`${socket.id} connected`);
  socket.on('disconnect', (reason) => {
    console.log(`${socket.id} was disconnected with reason ${reason}`);
  });
  socket.on('create room', (room) => {
    createRoom(room);
  });
  socket.on('try add user to the room', ({ roomID, user }) => {
    let roomExist = Object.keys(getRooms()).includes(roomID);
    if (!roomExist) {
      const result = null;
      const error = `room with id#${roomID} not exist`;
      io.emit('join room event', { result, error });
    } else {
      addUserToRoom({ roomID, user });
      const result = getRoom(roomID);
      const error = '';
      io.emit('join room event', { result, error });
    }
  });
  socket.on('show all rooms', () => {
    const roomInfo = getRooms();
    console.log(roomInfo);
  });
  socket.on('show room', (roomID) => {
    const roomInfo = getRoom(roomID);
    console.log(roomInfo);
  });
});

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/server', function (req, res) {
  res.send('server is available');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
