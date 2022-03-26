import React, { FC } from 'react';
import store, { GameState, User } from '../../stores/store';
import {
  StyledButtonsWrapper,
  StyledRestartButton,
  StyledRestartButtonIcon,
  StyledResult,
  StyledSaveButton,
  StyledSaveButtonIcon,
} from './styled';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';
import { observer } from 'mobx-react-lite';

interface Props {
  roomID: string;
}

function printPage() {
  const element = document.getElementById('root');
  html2pdf(element);
}

function restartGame(roomId: string) {
  const socket = store.socket;
  socket.emit('init restart game', { roomId });
}

const Result: FC<Props> = ({ roomID }) => {
  const socket = store.socket;
  const userList = store.room!.userList;
  let totalScore = 0;
  let votedUsers = 0;
  socket.on('restart game', (data: { userList: User[] }) => {
    const { userList } = data;
    store.updateRoomUserList(userList);
    store.setGameState(GameState.Idle);
  });
  userList.forEach((user: User) => {
    if (Number(user.pickedCard)) {
      totalScore += Number(user.pickedCard);
      votedUsers += 1;
    }
  });
  const averageResult = (totalScore / votedUsers).toFixed(2);
  return (
    <StyledResult>
      <p>
        <b>{votedUsers}</b> users voted. Avg:{' '}
        {isNaN(Number(averageResult)) ? <b>0</b> : <b>{averageResult}</b>}
      </p>
      {store.currentUser.admin && (
        <StyledButtonsWrapper>
          <StyledRestartButton onClick={() => restartGame(roomID)}>
            <StyledRestartButtonIcon />
          </StyledRestartButton>
          <StyledSaveButton onClick={printPage}>
            <StyledSaveButtonIcon />
          </StyledSaveButton>
        </StyledButtonsWrapper>
      )}
    </StyledResult>
  );
};

export default observer(Result);
