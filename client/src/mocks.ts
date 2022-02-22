import {UserData, UserListState} from './components/UserList/UserList';

// temp data for UserList component testing purposes
export const dataForUserListComponent: UserData[] = [
  {
    userName: 'User1',
    userEmoji: 'santa',
    pickedCard: null,
  },
  {
    userName: 'User2',
    userEmoji: 'coffee',
    pickedCard: null,
  },
  {
    userName: 'User3',
    userEmoji: 'smiley',
    pickedCard: '3',
  },
  {
    userName: 'User4',
    userEmoji: 'smiley',
    pickedCard: null,
  },
  {
    userName: 'User5',
    userEmoji: 'smiley',
    pickedCard: '5',
  },
]

export const stateForUserListComponent = UserListState.Idle; // possible values: Idle, Vote, Voted
