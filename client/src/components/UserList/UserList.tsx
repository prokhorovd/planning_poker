import React, { FC } from 'react';
import { StyledUserList } from './styled';
import { UserCard } from './UserCard';
import store, { User } from '../../stores/store';
import { observer } from 'mobx-react-lite';

const UserList: FC = () => {
  const socket = store.socket;
  socket.on('user was updated', (data: { user: User }) => {
    store.updateUser(data.user);
  });
  socket.on('userList was updated', (data: { userList: User[] }) => {
    store.updateRoomUserList(data.userList);
  });
  const userList = store.room!.userList;
  // make list of user cards
  const userCards = userList.map((element: User) => {
    const args = {
      ...element,
    };
    return <UserCard user={args} key={element.userName} />;
  });
  return (
    <div>
      <StyledUserList>{userCards}</StyledUserList>
    </div>
  );
};

export default observer(UserList);
