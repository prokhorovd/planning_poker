import React, { FC, useEffect, useRef, useState } from 'react';
import { StyledClockWrapper, StyledTimerWrapper } from './styled';
import { observer } from 'mobx-react-lite';
import store, { GameState } from '../../stores/store';

const START_TIME = 4;

const Timer: FC = observer(() => {
  const [timeLeft, setTimeLeft] = useState(START_TIME);
  const timerIdRef = useRef<null | ReturnType<typeof setInterval>>(null);
  const startHandler = () => {
    if (!timerIdRef.current) {
      setTimeLeft(START_TIME);
      timerIdRef.current = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    }
  };
  if (store.gameState === GameState.Vote) {
    startHandler();
  }
  const stopHandler = () => {
    if (!!timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
      store.setGameState(GameState.Voted);
      console.log('Timer have stopped!');
    }
  };
  useEffect(() => {
    if (timeLeft === 0) {
      stopHandler();
    }
  }, [timeLeft]);

  function convertTime(seconds: number) {
    const result = { minutes: '00', seconds: '00' };
    result.minutes = Math.floor(seconds / 60).toString();
    if (result.minutes.length === 1) {
      result.minutes = '0' + result.minutes;
    }
    result.seconds = (seconds % 60).toString();
    if (result.seconds.length === 1) {
      result.seconds = '0' + result.seconds;
    }
    return `${result.minutes} : ${result.seconds}`;
  }
  return (
    <StyledTimerWrapper>
      <StyledClockWrapper>{convertTime(timeLeft)}</StyledClockWrapper>
    </StyledTimerWrapper>
  );
});

export default Timer;
