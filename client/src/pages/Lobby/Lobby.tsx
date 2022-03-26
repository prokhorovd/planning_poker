import React, { FC } from 'react';
import { Link as StyledLink } from '@mui/material';
import Timer from '../../components/Timer/Timer';
import store, { GameState, Room } from '../../stores/store';
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
  roomId: string;
}

function copyLink(linkText: string) {
  navigator.clipboard.writeText(linkText);
}

const Lobby: FC<Props> = observer(({ roomId }) => {
  const socket = store.socket;
  const link: string = `https://${window.location.host}/join?roomId=${roomId}`;
  socket.on(
    'join room event',
    (respond: { result: Room | null; error: string }) => {
      const { result } = respond;
      if (result) {
        store.updateRoom(result);
      }
    },
  );
  socket.on('start game', () => {
    store.setGameState(GameState.Vote);
  });
  return (
    <StyledLobby>
      <h1>
        {store.room!.roomName} (#{roomId})
      </h1>
      <StyledDescription>
        Hi, <b>{store.currentUser.userName}</b>. Use this link to invite others:
      </StyledDescription>
      <StyledLink>{link}</StyledLink>
      <button onClick={() => copyLink(link)}>Copy link to clipboard</button>
      <Timer />
      <UserList />
      {/* start game button: change gameState to vote and disappear*/}
      {store.gameState === GameState.Idle && store.currentUser.admin && (
        <StyledStartGameButton
          onClick={() => {
            socket.emit('initiate game start', roomId);
          }}
        >
          <StyledStartGameIcon />
        </StyledStartGameButton>
      )}
      {/* cards block - shows when game started, disappear at the timer end */}
      {store.gameState === GameState.Vote && (
        <Cards deck={fibonacciDeck} roomID={roomId} />
      )}
      {/* result of the game, shows at the timer end */}
      {store.gameState === GameState.Voted && <Result roomID={roomId} />}
    </StyledLobby>
  );
});

export default Lobby;
