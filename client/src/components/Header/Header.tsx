import React, { FC } from 'react';
import {
  StyledHeaderLayout,
  StyledHeaderLogo,
  StyledHeaderUserIcon,
  // StyledHeaderUserIconHidden,
} from './styled';
import store from '../../stores/store';
import { observer } from 'mobx-react-lite';
import { Emoji } from 'emoji-mart';

const Header: FC = observer(() => {
  const { userIcon } = store;
  return (
    <StyledHeaderLayout>
      <StyledHeaderLogo />
      {userIcon && (
        <StyledHeaderUserIcon>
          <Emoji emoji={userIcon} size={24} />
        </StyledHeaderUserIcon>
      )}
    </StyledHeaderLayout>
  );
});

export default Header;
