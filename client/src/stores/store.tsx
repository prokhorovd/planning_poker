import { action, makeAutoObservable, observable } from 'mobx';
import { BaseEmoji } from 'emoji-mart';

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
}

const store = new Store();
export default store;
