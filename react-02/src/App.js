import React from 'react';
import logo from './logo.svg';
import './App.css';

import rocket from './svg/rocket.svg';
import target from './svg/target.svg';
import origami from './svg/origami.svg';
import soft from './svg/soft.svg';

function App() {
  return (
    <div className="App">
    <img src={rocket} className="My-logo" alt="logo" />
    <img src={target} className="My-logo" alt="logo" />
    <img src={origami} className="My-logo" alt="logo" />
    <img src={soft} className="My-logo" alt="logo" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;