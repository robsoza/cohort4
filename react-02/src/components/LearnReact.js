import React from 'react';
import logo from '../logo.svg';

function LearnReact() {
    return (
        <div className="App-header">
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h1>LEARN REACT</h1>
              </a>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>

        </div>
    );
}

export default LearnReact;