import React from 'react';
import { StyledApp } from './styled';
import Header from './components/Header/Header';
// import CreateRoomForm from './components/CreateRoomForm/CreateRoomForm';
// import IconPicker from './components/IconPicker/IconPicker';
// import Timer from './components/Timer/Timer';
import Cards from './components/Cards/Cards';
import {fibonacciDeck} from './components/Cards/decks';
import UserList from './components/UserList/UserList';
import { dataForUserListComponent, stateForUserListComponent } from './mocks';

function App() {
  return (
    <StyledApp>
      <Header />
      {/*<IconPicker />*/}
      {/*<CreateRoomForm />*/}
      {/* listState can be: idle/vote/voted, description in component */}
      <UserList listState={stateForUserListComponent} listData={dataForUserListComponent}/>
      {/*<Timer/>*/}
      <Cards deck={fibonacciDeck}/>
    </StyledApp>
  );
}

export default App;
