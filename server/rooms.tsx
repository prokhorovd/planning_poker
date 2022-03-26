const rooms = {};

function createRoom(room) {
  rooms[room.roomID] = room;
}

function getRooms() {
  return rooms;
}

function getRoom(roomID) {
  return rooms[roomID];
}

function getUser({ roomID, userSocket }) {
  return getRoom(roomID).userList.find(
    (user) => user.userSocket === userSocket,
  );
}

function addUserToRoom({ roomID, user }) {
  rooms[roomID].userList.push(user);
}

function updateUser({ roomID, userSocket, cardName }) {
  const roomExist = !!rooms[roomID];
  if (!!roomExist) {
    const userIndex = rooms[roomID].userList.findIndex(
      (element) => element.userSocket === userSocket,
    );
    rooms[roomID].userList[userIndex].pickedCard = cardName;
  }
}

function resetVotes(roomID) {
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
