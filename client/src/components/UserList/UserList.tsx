import React, { FC } from 'react';
import { StyledUserList } from './styled';
import { UserCard } from './UserCard';
import store, { UserData } from '../../stores/store';

interface UserListProps {
  roomID: number;
}

const UserList: FC<UserListProps> = ({ roomID }) => {
  const userList = store.roomData[roomID].userList;
  // make list of user cards
  const userCards = userList.map((element: UserData) => {
    const args = {
      ...element,
    };
    return <UserCard userData={args} key={element.userName} />;
  });
  return (
    <div>
      <StyledUserList>{userCards}</StyledUserList>
    </div>
  );
};

export default UserList;
