import React, {FC, useEffect, useRef, useState} from 'react';
import {Button} from '@mui/material';
import {StyledTimerWrapper, StyledClockWrapper} from './styled';

const Timer:FC = () => {
  const [startValue, setStartValue] = useState(60);
  const [timeLeft, setTimeLeft] = useState(startValue);
  const [timerActive, setTimerActive] = useState(false);
  const timerIdRef = useRef<null | ReturnType<typeof setInterval>>(null);

  // Process countdown when timer is active and timeLeft > 0.
  // Stop timer, set counter to startValue and do some action when done.
  useEffect(() => {
    timerIdRef.current = setInterval(() => {
      timerActive && timeLeft > 0 && setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);
    // Clear interval, stop timer, set default timer value when count to zero
    if (timeLeft === 0) {
      clearInterval(timerIdRef.current);
      setTimerActive(false);
      setTimeLeft(startValue);
      console.log('Time is out!')
    } if (!timerActive) {
      // reset timer if stop
      setTimeLeft(startValue);
    }
    // Clear interval when unmount
    // @ts-ignore
    return () => clearInterval(timerIdRef.current);
  }, [timeLeft, timerActive]);

  // display new startTime when new value received
  useEffect(() => {
    setTimeLeft(startValue)
  }, [startValue]);

  // transform seconds to {minutes: n, seconds: n}
  function calculateTime(seconds: number) {
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
  // calculate time left: seconds => {minutes: n, seconds:n}
  const calculatedTime = calculateTime(timeLeft)

  return (
    <StyledTimerWrapper>
      <StyledClockWrapper>{calculatedTime}</StyledClockWrapper>
      <div><Button onClick={() => setTimerActive(!timerActive)}>{timerActive ? 'Stop' : 'Start'}</Button></div>
      <div>
        <Button onClick={() => setStartValue(60)} disabled={timerActive}>Set to 1 min</Button>
        <Button onClick={() => setStartValue(startValue + 30)} disabled={timerActive || startValue === 3570}>+30 sec</Button>
        <Button onClick={() => setStartValue(startValue - 30)} disabled={timerActive ||  startValue === 30}>-30 sec</Button>
      </div>
    </StyledTimerWrapper>
  );
}

export default Timer;
