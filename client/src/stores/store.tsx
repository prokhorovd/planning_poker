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
  admin: boolean;
}

interface RoomParameters {
  id: string;
  roomName: string;
  userName: string;
  userEmoji: string;
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
    admin: false,
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

  @observable
  roomData: any = {
    sdUGShS_2p: {
      roomID: 'sdUGShS_2p',
      roomName: 'TestRoom',
      userList: [
        {
          userName: 'Admin',
          userEmoji: 'santa',
          pickedCard: null,
          admin: true,
        },
        {
          userName: 'User2',
          userEmoji: 'smiley',
          pickedCard: null,
          admin: false,
        },
      ],
    },
  };
  @action
  createRoom(roomParameters: RoomParameters) {
    const { id, roomName, userName, userEmoji } = roomParameters;
    this.roomData[id] = {
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
  addUserToRoom(roomId: string, user: User) {
    this.roomData[roomId].userList.push(user);
  }
  @action
  pickCard(
    roomId: string,
    userName: string | null,
    pickedCard: string | number | null,
  ) {
    this.roomData[roomId].userList.map((user: User) => {
      if (user.userName === userName) {
        // find user in userList array
        const index = this.roomData[roomId].userList.indexOf(user);
        // register user vote
        this.roomData[roomId].userList[index].pickedCard = pickedCard;
      }
    });
  }
}

const store = new Store();
export default store;
