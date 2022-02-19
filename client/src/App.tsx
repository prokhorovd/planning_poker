import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import CreateRoomForm from './components/CreateRoomForm/CreateRoomForm';
import IconPicker from './components/IconPicker/IconPicker';
import Timer from './components/Timer/Timer';
import Cards from './components/Cards/Cards';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #FAFAFA;
  font-size: calc(10px + 1vmin);
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <IconPicker />
      <CreateRoomForm />
      <Timer/>
      <Cards />
    </AppWrapper>
  );
}

export default App;
