import { action, makeAutoObservable, observable } from 'mobx';
import { BaseEmoji } from 'emoji-mart';

export enum GameState {
  Login = 'login',
  Idle = 'idle',
  Vote = 'vote',
  Voted = 'voted',
}

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  userIcon: null | BaseEmoji = null;

  @action
  setUserIcon(emoji: BaseEmoji) {
    this.userIcon = emoji;
  }

  @observable
  gameState: GameState = GameState.Login;

  @action
  setGameState(state: GameState) {
    this.gameState = state;
  }
}

const store = new Store();
export default store;
