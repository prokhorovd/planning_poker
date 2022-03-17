import { action, makeAutoObservable, observable } from 'mobx';

export enum GameState {
  Login = 'login',
  Idle = 'idle',
  Vote = 'vote',
  Voted = 'voted',
}

export interface UserData {
  userName: string;
  userEmoji: string;
  pickedCard: string | null | number;
  isAdmin: boolean;
}

interface RoomParameters {
  id: string;
  roomName: string;
  adminName: string;
  adminAvatar: string;
}

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  userIcon: null | string = null;

  @action
  setUserIcon(emoji: string | null) {
    this.userIcon = emoji;
  }

  @observable
  gameState: GameState = GameState.Login;

  @action
  setGameState(state: GameState) {
    this.gameState = state;
  }

  @observable
  userName: string = '';

  @action
  setUserName(name: string) {
    this.userName = name;
  }

  @observable
  roomName: string = '';

  @action
  setRoomName(name: string) {
    this.roomName = name;
  }

  @observable
  roomID: number | null = null;

  @action
  setRoomID(roomID: number) {
    this.roomID = roomID;
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
          isAdmin: true,
        },
        {
          userName: 'User2',
          userEmoji: 'smiley',
          pickedCard: null,
          isAdmin: false,
        },
      ],
    },
  };
  @action
  createRoom(roomParameters: RoomParameters) {
    const { id, roomName, adminName, adminAvatar } = roomParameters;
    this.roomData[id] = {
      roomID: id,
      roomName,
      userList: [
        {
          userName: adminName,
          userEmoji: adminAvatar,
          pickedCard: null,
          isAdmin: true,
        },
      ],
    };
  }
  @action
  addUserToRoom(roomId: string, userData: UserData) {
    this.roomData[roomId].userList.push(userData);
  }
  @action
  pickCard(
    roomId: string,
    userName: string,
    pickedCard: string | number | null,
  ) {
    this.roomData[roomId].userList[0].pickedCard = pickedCard;
  }
}

const store = new Store();
export default store;
