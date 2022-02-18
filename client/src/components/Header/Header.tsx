import React from 'react';
import {HeaderLayout, HeaderLogo, HeaderUserIcon, HeaderUserIconHidden} from './styled';

function Header() {
  const showUserIcon = false;
  return (
    <HeaderLayout>
      <HeaderLogo/>
      {showUserIcon ? <HeaderUserIcon>icon</HeaderUserIcon> : <HeaderUserIconHidden/>}
    </HeaderLayout>
  )
}

export default Header;
