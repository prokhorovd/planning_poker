import React, { FC, useState } from 'react';
import { StyledCardField } from './styled';
import { CardItem } from './decks';
import Card from './Card';
import store from '../../stores/store';

interface Props {
  deck: CardItem[];
  roomID: string;
}

const Cards: FC<Props> = ({ deck, roomID }) => {
  const [activeCard, setActiveCard] = useState<null | string | number>(null);
  const { userSocket } = store.currentUser;
  const selectCard: (cardName: string | number) => void = (cardName) => {
    setActiveCard(cardName);
    store.pickCard(roomID, userSocket, cardName);
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
  return <StyledCardField>{calculatedDeck}</StyledCardField>;
};

export default Cards;
