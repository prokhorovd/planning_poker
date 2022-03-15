import React, { FC } from 'react';
import { CardItem, CardType } from './decks';
import { StyledCardItem, StyledCardItemActive } from './styled';
import { Emoji } from 'emoji-mart';

interface Props {
  data: CardItem;
}

const Card: FC<Props> = ({ data }) => {
  const { setActiveCard, value, type, active } = data;
  if (setActiveCard !== undefined && active) {
    return (
      <StyledCardItemActive onClick={() => setActiveCard(value)}>
        {type === CardType.Emoji && (
          <Emoji emoji={value.toString()} size={28} />
        )}
        {type === CardType.Number && value}
      </StyledCardItemActive>
    );
  } else if (setActiveCard !== undefined) {
    return (
      <StyledCardItem onClick={() => setActiveCard(value)}>
        {type === CardType.Emoji && (
          <Emoji emoji={value.toString()} size={28} />
        )}
        {type === CardType.Number && value}
      </StyledCardItem>
    );
  }
  return <div>Something went wrong in card component</div>;
};

export default Card;
