import React from 'react';
import { AppWrapper } from './styled';
import Header from './components/Header/Header';
import CreateRoomForm from './components/CreateRoomForm/CreateRoomForm';
import IconPicker from './components/IconPicker/IconPicker';
import Timer from './components/Timer/Timer';
import Cards from './components/Cards/Cards';
import UserList from './components/UserList/UserList';
import { dataForUserListComponent } from './mocks';

function StyledApp() {
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

export default StyledApp;
