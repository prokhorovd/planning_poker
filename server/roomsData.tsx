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

function addUserToRoom({ roomID, user }) {
  rooms[roomID].userList.push(user);
}

module.exports = { createRoom, getRooms, getRoom, addUserToRoom };
