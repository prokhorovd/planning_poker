import { Rooms, Room, addUserToRoomProps, updateUserProps, getUserProps } from './types';

const rooms: Rooms = {};

function createRoom(room: Room) {
  rooms[room.roomID] = room;
}

function getRooms() {
  return rooms;
}

function getRoom(roomID: string) {
  return rooms[roomID];
}

function getUser({ roomID, userSocket }: getUserProps) {
  return getRoom(roomID).userList.find(
    (user) => user.userSocket === userSocket,
  );
}

function addUserToRoom({ roomID, user }: addUserToRoomProps) {
  rooms[roomID].userList.push(user);
}

function updateUser({ roomID, userSocket, cardName }: updateUserProps) {
  const roomExist = !!rooms[roomID];
  if (!!roomExist) {

    const userIndex = rooms[roomID].userList.findIndex(
      (user) => user.userSocket === userSocket,
    );
    rooms[roomID].userList[userIndex].pickedCard = cardName;
  }
}

function resetVotes(roomID: string) {
  const roomExist = !!rooms[roomID];
  if (!!roomExist) {
    rooms[roomID].userList.forEach((user) => (user.pickedCard = null));
  }
}

module.exports = {
  createRoom,
  getRooms,
  getRoom,
  getUser,
  addUserToRoom,
  updateUser,
  resetVotes,
};
