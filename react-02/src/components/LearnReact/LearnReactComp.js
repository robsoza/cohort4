import React from 'react';
import logo from '../../logo.svg';

export default function LearnReactComp() {
    return (
        <div className="App-header">
            <h1>Javascript</h1>
            <fieldset>
                <legend>React</legend>
                <img src={logo} className="App-logo" alt="logo" />
                <div><a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a></div>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
              </p>
            </fieldset>
        </div>
    );
}