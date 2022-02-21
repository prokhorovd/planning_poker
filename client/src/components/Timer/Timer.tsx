import React, {FC, useEffect, useState} from 'react';
import {Button} from '@mui/material';
import {TimerWrapper, ClockWrapper} from './styled';

const Timer:FC = () => {
  const [startValue, setStartValue] = useState(60);
  const [timeLeft, setTimeLeft] = useState(startValue);
  const [timerActive, setTimerActive] = useState(false);

  // Process countdown when timer is active and timeLeft > 0.
  // Stop timer, set counter to startValue and do some action when done.
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
       setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (!timerActive) {
      setTimeLeft(startValue);
    } if(timeLeft === 0 && timerActive) {
      setTimerActive(false)
      // TODO do something as time is out
      console.log('Time is out!')
    }
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
    return result;
  }
  // calculate time left: seconds => {minutes: n, seconds:n}
  const calculatedTime = calculateTime(timeLeft)

  return (
    <TimerWrapper>
      <ClockWrapper>{`${calculatedTime.minutes} : ${calculatedTime.seconds}`}</ClockWrapper>
      <div><Button onClick={() => setTimerActive(!timerActive)}>{timerActive ? 'Stop' : 'Start'}</Button></div>
      <div>
        <Button onClick={() => setStartValue(60)} disabled={timerActive}>Set to 1 min</Button>
        <Button onClick={() => setStartValue(startValue + 30)} disabled={timerActive || startValue === 3570}>+30 sec</Button>
        <Button onClick={() => setStartValue(startValue - 30)} disabled={timerActive ||  startValue === 30}>-30 sec</Button>
      </div>
    </TimerWrapper>
  );
}

export default Timer;
