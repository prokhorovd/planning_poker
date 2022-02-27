import React from 'react';
import { StyledApp } from './styled';
import Header from './components/Header/Header';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <StyledApp>
      <Header />
      <Outlet />
    </StyledApp>
  );
}

export default App;
