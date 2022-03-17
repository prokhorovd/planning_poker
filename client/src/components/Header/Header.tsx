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
  const { userIcon } = store;
  const location = useLocation();
  return (
    <StyledHeaderLayout>
      <StyledHeaderLogo />
      {userIcon && location.pathname !== '/' && (
        <StyledHeaderUserIcon>
          <Emoji emoji={userIcon} size={24} />
        </StyledHeaderUserIcon>
      )}
    </StyledHeaderLayout>
  );
});

export default Header;
