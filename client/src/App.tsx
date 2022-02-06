import React from 'react';
import logo from './logo.svg';
import './App.css';
import ServerTest from './components/ServerTest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to react template blank page.
        </p>
        <ServerTest />
      </header>
    </div>
  );
}

export default App;
