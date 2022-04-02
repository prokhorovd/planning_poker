import { action, makeAutoObservable, observable } from 'mobx';
const { io } = require('socket.io-client');

export enum GameState {
  Login = 'login',
  Idle = 'idle',
  Vote = 'vote',
  Voted = 'voted',
}

export interface User {
  userName: string | null;
  userEmoji: string | null;
  pickedCard: string | null | number;
  userSocket: string | null;
  admin?: boolean;
}

interface RoomParameters {
  id: string;
  roomName: string;
  userName: string;
  userEmoji: string;
  userSocket: string;
}

export interface Room {
  roomID: string;
  roomName: string;
  userList: User[];
}

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  socket = io(process.env.BE_URL);

  @observable
  gameState: GameState = GameState.Login;

  @action
  setGameState(state: GameState) {
    this.gameState = state;
  }

  @observable
  currentUser: User = {
    userName: null,
    userEmoji: null,
    userSocket: null,
    pickedCard: null,
  };
  @action
  setCurrentUser(name: string | null, admin: boolean, socket: string | null) {
    this.currentUser.userName = name;
    this.currentUser.admin = admin;
    this.currentUser.userSocket = socket;
  }
  @action
  setCurrentUserEmoji(emoji: string) {
    this.currentUser.userEmoji = emoji;
  }
  @action
  resetCurrentUser() {
    this.currentUser.userName = null;
    this.currentUser.userEmoji = null;
    this.currentUser.admin = false;
  }

  @observable
  room: Room | null = null;
  @action
  createRoom(roomParameters: RoomParameters) {
    const { id, roomName, userName, userEmoji, userSocket } = roomParameters;
    this.room = {
      roomID: id,
      roomName,
      userList: [
        {
          userName,
          userEmoji,
          pickedCard: null,
          admin: true,
          userSocket,
        },
      ],
    };
  }
  @action
  resetRoom() {
    this.room = null;
  }
  @action
  updateRoom(room: Room) {
    this.room = room;
  }
  @action
  updateRoomUserList(userList: User[]) {
    if (this.room) this.room.userList = userList;
  }
  @action
  addUserToRoom(roomId: string, user: User) {
    this.room!.userList.push(user);
  }
  @action
  pickCard(
    roomID: string,
    userSocket: string | null,
    cardName: string | number | null,
  ) {
    this.room!.userList.forEach((user: User) => {
      if (user.userSocket === userSocket) {
        // find user in userList array
        const index = this.room!.userList.indexOf(user);
        // register user vote
        this.room!.userList[index].pickedCard = cardName;
      }
      // alert other users in room
      this.socket.emit('pick card initiated', { roomID, userSocket, cardName });
    });
  }
  @action
  updateUser(user: User) {
    const { userSocket } = user;
    if (!!this.room) {
      const userIndex = this.room.userList.findIndex(
        (user) => user.userSocket === userSocket,
      );
      this.room.userList[userIndex] = user;
    }
  }
}

const store = new Store();
export default store;
