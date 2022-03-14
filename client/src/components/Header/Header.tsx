import React, { FC } from 'react';
import {
  StyledHeaderLayout,
  StyledHeaderLogo,
  StyledHeaderUserIcon,
} from './styled';
import store from '../../stores/store';
import { observer } from 'mobx-react-lite';
import { Emoji } from 'emoji-mart';
import { GameState } from '../../stores/store';

const Header: FC = observer(() => {
  const { userIcon, gameState } = store;
  return (
    <StyledHeaderLayout>
      <StyledHeaderLogo />
      {userIcon && gameState !== GameState.Login && (
        <StyledHeaderUserIcon>
          <Emoji emoji={userIcon} size={24} />
        </StyledHeaderUserIcon>
      )}
    </StyledHeaderLayout>
  );
});

export default Header;
