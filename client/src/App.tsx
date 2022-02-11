import React from 'react';
import './App.css';
import Header from './components/Header';
import CreateRoomForm from './components/CreateRoomForm';
import IconPicker from './components/IconPicker';

function App() {
  return (
    <div className="App">
      <Header />
      <IconPicker />
      <CreateRoomForm />
    </div>
  )
}

export default App;
