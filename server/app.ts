import dotenv from 'dotenv';
dotenv.config();
// path import
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// express and types
import express from 'express';
import { Express, Request, Response } from 'express';
const app: Express = express();
// create httpServer and connect socket.io
import http from 'http';
const { createServer } = http;
import { Server, Socket } from 'socket.io';
const httpServer = createServer(app);
import { Store } from './storage';

const port = process.env.PORT || 4000;

const storage = Store.getInstance();

// socket.io
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FE_URL,
  },
});
io.on('connection', (socket: Socket) => {
  console.log(`${socket.id} connected`);
  socket.on('disconnect', (reason) => {
    const roomID = storage.findRoomBySocketId(socket.id);
    if (!roomID) {
      console.log(
        `${socket.id} was not registered in any room and disconnected with reason ${reason}`,
      );
      return;
    }
    const disconnectedUser = storage.getUser({ roomID, userSocket: socket.id });
    if (!!disconnectedUser?.admin) {
      // if user was admin - kick all users
      io.to(roomID).emit('admin has left the room');
      storage.kickAllUsers(roomID);
      storage.tryDeleteRoom(roomID);
      return;
    }
    // if not - delete user and notify client side
    storage.deleteUser({ roomID, userSocket: socket.id });
    io.to(roomID).emit('userList was updated', {
      userList: storage.getRoom(roomID).userList,
    });
    // if it was last user in room - room will be deleted
    storage.tryDeleteRoom(roomID);
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

// dev-prod path correction
let pathToDist: string;
if (process.env.DEV) {
  pathToDist = '..';
} else {
  pathToDist = '../..';
}

app.use(express.static(path.join(__dirname, pathToDist, 'client', 'build')));

app.get('/server', function (req: Request, res: Response) {
  res.send('Server is up and running');
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(
    path.join(__dirname, pathToDist, 'client', 'build', 'index.html'),
  );
});

httpServer.listen(port, () => {
  console.log(`Planning poker server listening on port ${port}`);
});
