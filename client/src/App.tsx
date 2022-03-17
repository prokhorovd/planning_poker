import React, { FC } from 'react';
import { StyledApp } from './styled';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import store from './stores/store';

const App: FC = () => {
  return (
    <StyledApp gameState={store.gameState}>
      <Header />
      <Outlet />
    </StyledApp>
  );
};

export default observer(App);
