import React, { FC, useState } from 'react';
import { StyledCardField } from './styled';
import { CardItem } from './decks';
import Card from './Card';
import store from '../../stores/store';

interface Props {
  deck: CardItem[];
  roomID: number;
  userName: string;
}

const Cards: FC<Props> = ({ deck, roomID, userName }) => {
  const [activeCard, setActiveCard] = useState<null | string | number>(null);
  const selectCard: (cardName: string | number) => void = (cardName) => {
    setActiveCard(cardName);
    store.pickCard(roomID, userName, cardName);
  };
  const calculatedDeck = deck.map((element) => {
    const cardOptions = {
      ...element,
      setActiveCard: selectCard,
    };
    if (element.value === activeCard) {
      cardOptions.active = true;
    }
    return <Card data={cardOptions} key={element.value} />;
  });
  return (
    <StyledCardField>
      {calculatedDeck}
      <div>active card is {activeCard ? activeCard : 'not set'}</div>
    </StyledCardField>
  );
};

export default Cards;
