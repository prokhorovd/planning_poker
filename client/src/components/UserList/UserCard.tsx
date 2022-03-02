import React, { FC } from 'react';
import {
  StyledUserCard,
  StyledUserIcon,
  StyledUserIconNotVoted,
  StyledUserIconVoted,
  StyledUserName,
} from './styled';
import { Emoji } from 'emoji-mart';
import { UserData, UserListState } from './UserList';

interface Props {
  userData: UserData;
}

export const UserCard: FC<Props> = ({ userData }) => {
  const { listState } = userData;
  if (listState === UserListState.Idle) {
    // lobby room - show all users
    return (
      <StyledUserCard>
        <StyledUserIcon>
          <Emoji emoji={userData.userEmoji} size={24} />
        </StyledUserIcon>
        <StyledUserName>{userData.userName}</StyledUserName>
      </StyledUserCard>
    );
  } else if (listState === UserListState.Vote) {
    // vote process: blur icon if user didn't vote yet, else show green background
    return (
      <StyledUserCard>
        {userData.pickedCard ? (
          <StyledUserIconVoted>
            <Emoji emoji={userData.userEmoji} size={24} />
          </StyledUserIconVoted>
        ) : (
          <StyledUserIconNotVoted>
            <Emoji emoji={userData.userEmoji} size={24} />
          </StyledUserIconNotVoted>
        )}
        <StyledUserName>{userData.userName}</StyledUserName>
      </StyledUserCard>
    );
  }
  // result page: show users choice.
  return (
    <StyledUserCard>
      {userData.pickedCard ? (
        <StyledUserIcon>{userData.pickedCard}</StyledUserIcon>
      ) : (
        <StyledUserIconNotVoted>
          <Emoji emoji={userData.userEmoji} size={24} />
        </StyledUserIconNotVoted>
      )}
      <StyledUserName>{userData.userName}</StyledUserName>
    </StyledUserCard>
  );
};
