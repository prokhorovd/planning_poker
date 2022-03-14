import React, { FC } from 'react';
import { StyledUserList } from './styled';
import { UserCard } from './UserCard';

export interface UserData {
  userName: string;
  userEmoji: string;
  pickedCard: null | string;
}

interface UserListProps {
  listData: UserData[];
}

const UserList: FC<UserListProps> = ({ listData }) => {
  // make list of user cards
  const userCards = listData.map((element) => {
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
