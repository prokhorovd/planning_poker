import React from 'react';

export enum CardType {
  Number = 'number',
  Emoji = 'emoji'
}

export interface CardData {
  value: number | string,
  type: CardType,
  active?: boolean,
  setActiveCard?: (cardName: string | number) => void,
}

export const fibonacciDeck: CardData[] = [
  {
    value: 1,
    type: CardType.Number,
  },
  {
    value: 2,
    type: CardType.Number,
  },
  {
    value: 3,
    type: CardType.Number,
  },
  {
    value: 5,
    type: CardType.Number,
  },
  {
    value: 8,
    type: CardType.Number,
  },
  {
    value: 13,
    type: CardType.Number,
  },
  {
    value: 21,
    type: CardType.Number,
  },
  {
    value: 34,
    type: CardType.Number,
  },
  {
    value: 'question',
    type: CardType.Emoji,
  },
  {
    value: 'coffee',
    type: CardType.Emoji,
},
]
