import React, {FC, useState} from 'react';
import { StyledCardField } from './styled';
import { CardData } from './decks';
import Card from './Card';

interface Props {
  deck: CardData[],
}

const Cards:FC<Props> = (props) => {
  const [activeCard, setActiveCard] = useState<null|string|number>(null)
  const selectCard: (cardName: string | number) => void = (cardName) => {
    setActiveCard(cardName);
  }
  const calculatedDeck = props.deck.map(element => {
    if (element.value === activeCard) {
      return (
        <Card {...element} key={element.value} setActiveCard={selectCard} active={true}/>
      );
    }
    return (
      <Card {...element} key={element.value} setActiveCard={selectCard}/>
    );
  })
  return (
    <StyledCardField>
      {calculatedDeck}
      <div>active card is {activeCard ? activeCard : 'not set'}</div>
    </StyledCardField>
  );
}

export default Cards;
