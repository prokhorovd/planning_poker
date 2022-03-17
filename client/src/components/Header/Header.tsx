import React, { FC } from 'react';
import {
  StyledHeaderLayout,
  StyledHeaderLogo,
  StyledHeaderUserIcon,
} from './styled';
import store from '../../stores/store';
import { observer } from 'mobx-react-lite';
import { Emoji } from 'emoji-mart';
import { useLocation } from 'react-router-dom';

const Header: FC = observer(() => {
  const { userEmoji } = store.currentUser;
  const location = useLocation();
  return (
    <StyledHeaderLayout>
      <StyledHeaderLogo />
      {userEmoji && location.pathname !== '/' && location.pathname !== '/join' && (
        <StyledHeaderUserIcon>
          <Emoji emoji={userEmoji} size={24} />
        </StyledHeaderUserIcon>
      )}
    </StyledHeaderLayout>
  );
});

export default Header;
