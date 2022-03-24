import React, { FC } from 'react';
import {
  StyledUserCard,
  StyledUserIcon,
  StyledUserIconNotVoted,
  StyledUserIconVoted,
  StyledUserName,
} from './styled';
import { Emoji } from 'emoji-mart';
import store, { GameState, User } from '../../stores/store';
import { observer } from 'mobx-react-lite';

interface Props {
  user: User;
}

export const UserCard: FC<Props> = observer(({ user }) => {
  let { userEmoji } = user;
  if (!userEmoji) userEmoji = 'santa';
  switch (store.gameState) {
    case GameState.Idle:
      // show userEmoji
      return (
        <StyledUserCard>
          <StyledUserIcon>
            <Emoji emoji={userEmoji} size={24} />
          </StyledUserIcon>
          <StyledUserName>{user.userName}</StyledUserName>
        </StyledUserCard>
      );
    case GameState.Vote:
      // highlight userEmoji if user have voted
      return (
        <StyledUserCard>
          {user.pickedCard ? (
            <StyledUserIconVoted>
              <Emoji emoji={userEmoji} size={24} />
            </StyledUserIconVoted>
          ) : (
            <StyledUserIconNotVoted>
              <Emoji emoji={userEmoji} size={24} />
            </StyledUserIconNotVoted>
          )}
          <StyledUserName>{user.userName}</StyledUserName>
        </StyledUserCard>
      );
    default:
      // show emoji-card picked by user or user emoji if user hasn't voted
      if (isNaN(Number(user.pickedCard))) {
        return (
          <StyledUserCard>
            {user.pickedCard ? (
              <StyledUserIcon>
                <Emoji emoji={String(user.pickedCard)} size={24} />
              </StyledUserIcon>
            ) : (
              <StyledUserIconNotVoted>
                <Emoji emoji={userEmoji} size={24} />
              </StyledUserIconNotVoted>
            )}
            <StyledUserName>{user.userName}</StyledUserName>
          </StyledUserCard>
        );
      }
      // show number card picked by user or user-emoji if user hasn't voted;
      return (
        <StyledUserCard>
          {user.pickedCard ? (
            <StyledUserIcon>{user.pickedCard}</StyledUserIcon>
          ) : (
            <StyledUserIconNotVoted>
              <Emoji emoji={userEmoji} size={24} />
            </StyledUserIconNotVoted>
          )}
          <StyledUserName>{user.userName}</StyledUserName>
        </StyledUserCard>
      );
  }
});
