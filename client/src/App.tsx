import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import CreateRoomForm from './components/CreateRoomForm/CreateRoomForm';
import IconPicker from './components/IconPicker/IconPicker';
import Timer from './components/Timer/Timer';
import Cards from './components/Cards/Cards';
import {UserData} from './components/UserList/UserList';
import UserList from './components/UserList/UserList';

// temp data for component testing purposes
const dataForUserListComponent: UserData[] = [
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

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #FAFAFA;
  font-size: calc(10px + 1vmin);
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <IconPicker />
      <CreateRoomForm />
      {/* listState can be: idle/vote/voted, description in component */}
      <UserList listState={'idle'} listData={dataForUserListComponent}/>
      <Timer/>
      <Cards />
    </AppWrapper>
  );
}

export default App;
