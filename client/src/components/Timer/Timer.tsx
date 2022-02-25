import React, {FC, useEffect, useRef, useState} from 'react';
import {Button} from '@mui/material';
import {StyledClockWrapper, StyledTimerWrapper} from './styled';

const START_TIME = 4;

const Timer:FC = () => {
  const [timeLeft, setTimeLeft] = useState(START_TIME);
  const timerIdRef = useRef<null | ReturnType<typeof setInterval>>(null);
  const startHandler = () => {
    if (!timerIdRef.current) {
      setTimeLeft(START_TIME);
      timerIdRef.current = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1)
      }, 1000)
    }
  }
  const stopHandler = () => {
    if (!!timerIdRef.current) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = null;
      console.log('Timer have stopped!');
    }
  }
  useEffect(() => {
    if (timeLeft === 0) {
      stopHandler();
    }
  }, [timeLeft]);

  function convertTime(seconds: number) {
    const result = {minutes: '00', seconds: '00'}
    result.minutes = Math.floor(seconds / 60).toString();
    if (result.minutes.length === 1) {
      result.minutes = '0' + result.minutes
    }
    result.seconds = (seconds % 60).toString();
    if (result.seconds.length === 1) {
      result.seconds = '0' + result.seconds
    }
    return `${result.minutes} : ${result.seconds}`;
  }
  return (
    <StyledTimerWrapper>
      <StyledClockWrapper>{convertTime(timeLeft)}</StyledClockWrapper>
      <Button onClick={startHandler} >start</Button>
      <Button onClick={stopHandler} >stop</Button>
    </StyledTimerWrapper>
  );
}

export default Timer;
