import React, {FC} from 'react';
import {CardData} from './decks';
import { StyledCardItem, StyledCardItemActive } from './styled';
import { Emoji } from 'emoji-mart';

const Card:FC<CardData> = (cardData) => {
  const {setActiveCard, value, type, active} = cardData;
  if (setActiveCard !== undefined && active) {
    return (
      <StyledCardItemActive onClick={() => setActiveCard(value)}>
        {type === 'emoji' && <Emoji emoji={value.toString()} size={28}/>}
        {type === 'number' && value}
      </StyledCardItemActive>
    );
  } else if (setActiveCard !== undefined) {
    return (
      <StyledCardItem onClick={() => setActiveCard(value)}>
        {type === 'emoji' && <Emoji emoji={value.toString()} size={28}/>}
        {type === 'number' && value}
      </StyledCardItem>
    );
  }
  return (<div>Something went wrong in card component</div>);
}

export default Card;
