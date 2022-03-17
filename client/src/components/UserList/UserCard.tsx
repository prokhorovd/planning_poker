import React, { FC } from 'react';
import {
  StyledUserCard,
  StyledUserIcon,
  StyledUserIconNotVoted,
  StyledUserIconVoted,
  StyledUserName,
} from './styled';
import { Emoji } from 'emoji-mart';
import store, { GameState, UserData } from '../../stores/store';
import { observer } from 'mobx-react-lite';

interface Props {
  userData: UserData;
}

export const UserCard: FC<Props> = observer(({ userData }) => {
  let { userEmoji } = userData;
  if (!userEmoji) userEmoji = 'santa';
  switch (store.gameState) {
    case GameState.Idle:
      // show userEmoji
      return (
        <StyledUserCard>
          <StyledUserIcon>
            <Emoji emoji={userEmoji} size={24} />
          </StyledUserIcon>
          <StyledUserName>{userData.userName}</StyledUserName>
        </StyledUserCard>
      );
    case GameState.Vote:
      // highlight userEmoji if user have voted
      return (
        <StyledUserCard>
          {userData.pickedCard ? (
            <StyledUserIconVoted>
              <Emoji emoji={userEmoji} size={24} />
            </StyledUserIconVoted>
          ) : (
            <StyledUserIconNotVoted>
              <Emoji emoji={userEmoji} size={24} />
            </StyledUserIconNotVoted>
          )}
          <StyledUserName>{userData.userName}</StyledUserName>
        </StyledUserCard>
      );
    default:
      // show picked card or emoji if user hasn't voted;
      return (
        <StyledUserCard>
          {userData.pickedCard ? (
            <StyledUserIcon>{userData.pickedCard}</StyledUserIcon>
          ) : (
            <StyledUserIconNotVoted>
              <Emoji emoji={userEmoji} size={24} />
            </StyledUserIconNotVoted>
          )}
          <StyledUserName>{userData.userName}</StyledUserName>
        </StyledUserCard>
      );
  }
});
