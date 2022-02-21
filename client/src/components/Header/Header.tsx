import React, {FC} from 'react';
import {HeaderLayout, HeaderLogo, HeaderUserIcon, HeaderUserIconHidden} from './styled';

const Header:FC = () => {
  const showUserIcon = false;
  return (
    <HeaderLayout>
      <HeaderLogo/>
      {showUserIcon ? <HeaderUserIcon>icon</HeaderUserIcon> : <HeaderUserIconHidden/>}
    </HeaderLayout>
  )
}

export default Header;
