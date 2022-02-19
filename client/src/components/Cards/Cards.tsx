import React, {useState} from 'react';
import { CardItem, CardField, CardItemActive } from './styled';
import { Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'

function Cards() {
  const [activeCard, setActiveCard]= useState(null)
  function Card(props: {cardContent: string | JSX.Element, id: string}) {
    const makeActive = (event: any) => {
      setActiveCard(event.target.id)
      // action when card is picked
      console.log(`${ activeCard } is active now`)
    }
    if (props.id === activeCard) {
      return (
        <CardItemActive id={props.id} onClick={(event) => makeActive(event)} >{props.cardContent}</CardItemActive>
      )
    }
    return(
      <CardItem id={props.id} onClick={(event) => makeActive(event)} >{props.cardContent}</CardItem>
    );
  }
  const cardsList = ['1', '2', '3', '5', '8', '13', '21', '34', '?', <Emoji emoji={'coffee'} size={28}/>];
  const cardItems = cardsList.map((element) =>
    <Card
      cardContent={element}
      id={typeof element === 'string' ? element : element.props.emoji}
      key={typeof element === 'string' ? element : element.props.emoji} />
  );
  return (
    <CardField>{cardItems}</CardField>
  );
}

export default Cards;
