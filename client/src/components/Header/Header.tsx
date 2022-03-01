import React, { FC } from 'react';
import {
  StyledHeaderLayout,
  StyledHeaderLogo,
  StyledHeaderUserIcon,
  StyledHeaderUserIconHidden,
} from './styled';

const Header: FC = () => {
  const showUserIcon = false;
  return (
    <StyledHeaderLayout>
      <StyledHeaderLogo />
      {showUserIcon ? (
        <StyledHeaderUserIcon>icon</StyledHeaderUserIcon>
      ) : (
        <StyledHeaderUserIconHidden />
      )}
    </StyledHeaderLayout>
  );
};

export default Header;
