import React, { FC } from 'react';
import { StyledUserList } from './styled';
import { UserCard } from './UserCard';

export interface UserData {
  userName: string;
  userEmoji: string;
  pickedCard: null | string;
  listState?: UserListState;
}

export enum UserListState {
  Idle = 'idle',
  Vote = 'vote',
  Voted = 'voted',
}

interface UserListProps {
  listState: UserListState;
  listData: UserData[];
}

const UserList: FC<UserListProps> = ({ listState, listData }) => {
  // make list of user cards
  const userCards = listData.map((element) => {
    const args = {
      ...element,
      listState: listState,
    };
    return <UserCard userData={args} key={element.userName} />;
  });
  return (
    <div>
      <div>listState is: {listState}</div>
      <StyledUserList>{userCards}</StyledUserList>
    </div>
  );
};

export default UserList;
