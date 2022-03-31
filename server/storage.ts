import {
  Room,
  Rooms,
  addUserToRoomProps,
  getUserProps,
  updateUserProps,
  deleteUserProps,
} from './types';

export class Store {
  private static _instance: Store = new Store();
  private _rooms: Rooms = {};

  constructor() {
    if (Store._instance) {
      throw new Error(
        'Error: Instantiation failed: Use Store.getInstance() instead of new.',
      );
    }
    Store._instance = this;
  }
  // getter
  public static getInstance(): Store {
    return Store._instance;
  }
  // public methods

  public tryDeleteRoom(roomID: string) {
    // if there's no users in room - delete it
    if (this._rooms[roomID].userList.length === 0) delete this._rooms[roomID];
  }

  public findRoomBySocketId(userSocket: string) {
    const rooms = this.getRooms();
    const roomsNames = Object.keys(rooms);
    for (let i = 0; i < roomsNames.length; i++) {
      if (
        rooms[roomsNames[i]].userList.find(
          (user) => user.userSocket === userSocket,
        ) !== undefined
      ) {
        return roomsNames[i];
      }
    }
    return null;
  }

  public createRoom(room: Room) {
    this._rooms[room.roomID] = room;
  }

  public getRooms() {
    return this._rooms;
  }

  public getRoom(roomID: string) {
    return this._rooms[roomID];
  }

  public getUser({ roomID, userSocket }: getUserProps) {
    return this.getRoom(roomID).userList.find(
      (user) => user.userSocket === userSocket,
    );
  }

  public addUserToRoom({ roomID, user }: addUserToRoomProps) {
    this._rooms[roomID].userList.push(user);
  }

  public deleteUser({ roomID, userSocket }: deleteUserProps) {
    const roomExist = !!this._rooms[roomID];
    if (!!roomExist) {
      const userIndex = this._rooms[roomID].userList.findIndex(
        (user) => user.userSocket === userSocket,
      );
      this._rooms[roomID].userList.splice(userIndex, 1);
    }
  }

  public kickAllUsers(roomID: string) {
    this._rooms[roomID].userList = [];
  }

  public updateUser({ roomID, userSocket, cardName }: updateUserProps) {
    const roomExist = !!this._rooms[roomID];
    if (!!roomExist) {
      const userIndex = this._rooms[roomID].userList.findIndex(
        (user) => user.userSocket === userSocket,
      );
      this._rooms[roomID].userList[userIndex].pickedCard = cardName;
    }
  }

  public resetVotes(roomID: string) {
    const roomExist = !!this._rooms[roomID];
    if (!!roomExist) {
      this._rooms[roomID].userList.forEach((user) => (user.pickedCard = null));
    }
  }
}
