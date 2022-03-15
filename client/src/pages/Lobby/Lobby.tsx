import React, { FC } from 'react';
import { Link as StyledLink } from '@mui/material';
import { Link } from 'react-router-dom';
import Timer from '../../components/Timer/Timer';
import store, { GameState } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import UserList from '../../components/UserList/UserList';
import {
  StyledDescription,
  StyledLobby,
  StyledStartGameButton,
  StyledStartGameIcon,
} from './styled';
import Cards from '../../components/Cards/Cards';
import { fibonacciDeck } from '../../components/Cards/decks';
import Result from '../../components/Result/Result';

interface Props {
  roomId: number;
}

function copyLink(linkText: string) {
  navigator.clipboard.writeText(linkText);
}

const Lobby: FC<Props> = observer(({ roomId }) => {
  const link: string = `${window.location.host}/join?id=${roomId}`;
  return (
    <StyledLobby>
      <h1>
        {store.roomData[roomId].roomName} (#{roomId})
      </h1>
      <StyledDescription>
        {/*Temporary set to admin name, should depend on who visiting page*/}
        Hi, <b>{store.roomData[roomId].userList[0].userName}</b>. Use this link
        to invite others:
      </StyledDescription>
      <StyledLink>{link}</StyledLink>
      <button onClick={() => copyLink(link)}>Copy link to clipboard</button>
      <Timer />
      <UserList roomID={roomId} />
      {/* start game button: change gameState to vote and disappear*/}
      {/*should be visible to admin only*/}
      {store.gameState === GameState.Idle && (
        <StyledStartGameButton
          onClick={() => store.setGameState(GameState.Vote)}
        >
          <StyledStartGameIcon />
        </StyledStartGameButton>
      )}
      {/* cards block - shows when game started, disappear at the timer end */}
      {/*Username temporary set to admin name, should depend on who visiting page*/}
      {store.gameState === GameState.Vote && (
        <Cards
          deck={fibonacciDeck}
          roomID={roomId}
          userName={store.roomData[roomId].userList[0].userName}
        />
      )}
      {/* result of the game, shows at the timer end */}
      {store.gameState === GameState.Voted && <Result roomID={roomId} />}

      {/*// delete development block below before prod*/}
      <div
        style={{
          marginTop: '80px',
          display: 'flex',
          flexDirection: 'column',
          color: 'gray',
        }}
      >
        <p>development:</p>
        <Link
          to="/"
          onClick={() => {
            store.setGameState(GameState.Login);
            store.setUserIcon(null);
          }}
        >
          Create the new room
        </Link>
        {`gamestate is: ${store.gameState}`}
      </div>
    </StyledLobby>
  );
});

export default Lobby;
