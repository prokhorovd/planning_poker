import React, { FC } from 'react';
import { Link as StyledLink } from '@mui/material';
import { Link } from 'react-router-dom';
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
import { nanoid } from 'nanoid';

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
          onClick={() => store.setGameState(GameState.Vote)}
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
            store.setCurrentUser(null, false, null);
            store.setCurrentUserEmoji('');
            store.resetRoom();
          }}
        >
          Create the new room
        </Link>
        {`gamestate is: ${store.gameState}`}
        <button
          onClick={() =>
            store.addUserToRoom(roomId, {
              userName: nanoid(4),
              userEmoji: 'santa',
              pickedCard: Math.floor(Math.random() * (37 - 1)) + 1,
              userSocket: 'oAWp_wVa4fhiFHQIAAAD',
            })
          }
        >
          add user
        </button>
        <button
          onClick={() => {
            socket.emit('show all rooms');
          }}
        >
          show room info
        </button>
        <button
          onClick={() => {
            socket.emit('show room', roomId);
          }}
        >
          show this room info
        </button>
        <div>current user: {store.currentUser.userName}</div>
      </div>
    </StyledLobby>
  );
});

export default Lobby;
