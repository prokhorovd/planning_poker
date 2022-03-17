import React, { FC } from 'react';
import store, { GameState, UserData } from '../../stores/store';
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
  store.setGameState(GameState.Idle);
  store.roomData[roomId].userList.map((user: UserData) => {
    store.pickCard(roomId, user.userName, null);
  });
}

const Result: FC<Props> = ({ roomID }) => {
  const userList = store.roomData[roomID].userList;
  let totalScore = 0;
  let votedUsers = 0;
  userList.map((element: UserData) => {
    if (Number(element.pickedCard)) {
      totalScore += Number(element.pickedCard);
      votedUsers += 1;
    }
  });
  return (
    <StyledResult>
      <p>
        <b>{votedUsers}</b> users voted. Avg:{' '}
        <b>{(totalScore / votedUsers).toFixed(2)}</b>
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
