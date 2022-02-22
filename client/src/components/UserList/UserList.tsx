import React, {FC} from 'react';
import {
  StyledUserCard,
  StyledUserIcon,
  StyledUserName,
  StyledUserIconVoted,
  StyledUserIconNotVoted,
  StyledUserList,
} from './styled';
import {Emoji} from 'emoji-mart';

export interface UserData {
  userName: string,
  userEmoji: string,
  pickedCard: null | string,
}

export enum UserListState {
  Idle = 'idle',
  Vote = 'vote',
  Voted = 'voted',
}

interface UserListProps {
  listState: UserListState,
  listData: UserData[],
}

const UserList: FC<UserListProps> = ({listState, listData}) => {
  // single user card
  const UserCard:FC<UserData> = (userData) => {
    if (listState === UserListState.Idle) {
      // lobby room - show all users
      return(
        <StyledUserCard>
          <StyledUserIcon>
            <Emoji emoji={userData.userEmoji} size={24}/>
          </StyledUserIcon>
          <StyledUserName>{userData.userName}</StyledUserName>
        </StyledUserCard>
      );
    } else if (listState === UserListState.Vote) {
      // vote process: blur icon if user didn't vote yet, else show green background
      return (
      <StyledUserCard>
        {userData.pickedCard ?
        <StyledUserIconVoted>
          <Emoji emoji={userData.userEmoji} size={24}/>
        </StyledUserIconVoted>
          :
        <StyledUserIconNotVoted>
          <Emoji emoji={userData.userEmoji} size={24}/>
        </StyledUserIconNotVoted>}
        <StyledUserName>{userData.userName}</StyledUserName>
      </StyledUserCard>
      );
    }
    // result page: show users choice.
    return(
      <StyledUserCard>
        {userData.pickedCard ?
          <StyledUserIcon>
            {userData.pickedCard}
          </StyledUserIcon>
          :
          <StyledUserIconNotVoted>
            <Emoji emoji={userData.userEmoji} size={24}/>
          </StyledUserIconNotVoted>}
        <StyledUserName>{userData.userName}</StyledUserName>
      </StyledUserCard>
    );
  }
  // make list of user cards
  const userCards = listData.map(element =>
    <UserCard {...element} key={element.userName}/>
  )
  return (
    <div>
      <div>listState is: {listState}</div>
      <StyledUserList>{userCards}</StyledUserList>
    </div>
  );
}

export default UserList;
