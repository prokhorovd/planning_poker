import React, { FC } from 'react';
import {
  StyledHeaderLayout,
  StyledHeaderLogo,
  StyledHeaderUserIcon,
} from './styled';
import store, { GameState } from '../../stores/store';
import { observer } from 'mobx-react-lite';
import { Emoji } from 'emoji-mart';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: FC = observer(() => {
  const navigate = useNavigate();
  const { userEmoji } = store.currentUser;
  const location = useLocation();
  return (
    <StyledHeaderLayout>
      <StyledHeaderLogo
        onClick={() => {
          // click on logo - reset game, current user and room info, navigate to CreateRoomPage
          store.setGameState(GameState.Login);
          store.resetCurrentUser();
          store.resetRoom();
          navigate('/', { replace: true });
        }}
      />
      {userEmoji && location.pathname !== '/' && location.pathname !== '/join' && (
        <StyledHeaderUserIcon>
          <Emoji emoji={userEmoji} size={24} />
        </StyledHeaderUserIcon>
      )}
    </StyledHeaderLayout>
  );
});

export default Header;
