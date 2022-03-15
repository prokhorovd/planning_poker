import React, { FC } from 'react';
import { defineBackgroundColor, StyledApp } from './styled';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import store from './stores/store';

const App: FC = observer(() => {
  return (
    <StyledApp style={{ background: defineBackgroundColor(store.gameState) }}>
      <Header />
      <Outlet />
    </StyledApp>
  );
});

export default App;
