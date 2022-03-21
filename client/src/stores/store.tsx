import { action, makeAutoObservable, observable } from 'mobx';

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
  admin?: boolean;
}

interface RoomParameters {
  id: string;
  roomName: string;
  userName: string;
  userEmoji: string;
}

interface Room {
  roomID: string;
  roomName: string;
  userList: User[];
}

class Store {
  constructor() {
    makeAutoObservable(this);
  }

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
    pickedCard: null,
  };
  @action
  setCurrentUser(name: string, admin: boolean) {
    this.currentUser.userName = name;
    this.currentUser.admin = admin;
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
    const { id, roomName, userName, userEmoji } = roomParameters;
    this.room = {
      roomID: id,
      roomName,
      userList: [
        {
          userName,
          userEmoji,
          pickedCard: null,
          admin: true,
        },
      ],
    };
  }
  @action
  resetRoom() {
    this.room = null;
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
