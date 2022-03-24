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

const ENDPOINT = 'http://localhost:4000';

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  socket = io(ENDPOINT);

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
    roomId: string,
    userName: string | null,
    pickedCard: string | number | null,
  ) {
    this.room!.userList.forEach((user: User) => {
      if (user.userName === userName) {
        // find user in userList array
        const index = this.room!.userList.indexOf(user);
        // register user vote
        this.room!.userList[index].pickedCard = pickedCard;
      }
    });
  }
}

const store = new Store();
export default store;
