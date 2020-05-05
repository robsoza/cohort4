import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import EvenComponent from './components/EvenComponent';
import OddComponent from './components/OddComponent';

class App extends Component {
  constructor() {
    super()
    this.counter = 21;
    this.state = { myState: "TBD" };
    this.switch = false;
  }

  onPushMe = () => {
    console.log("You pushed me");
    this.counter++;
    console.log(this.counter);
    this.setState({ myState: "now:" + this.counter });
    this.changeSwitch();
  }

  changeSwitch = () => {
    if (this.counter % 2 === 0) {
      this.switch = true;
    } else {
      this.switch = false;
    }
    this.update();
  }

  update = () => {
    this.setState({ state: "state" });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            I am in control of this application and my name is Rob {this.counter} {this.state.myState}
          </h1>
          <button onClick={this.onPushMe}>
            Push Me
          </button>
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
        <MyComponent
          whatToSay="What Ever"
          onPushMe={this.onPushMe}
        />
        {this.switch ? <EvenComponent onPushMe={this.onPushMe} />
          : <OddComponent onPushMe={this.onPushMe} />}
      </div>
    );
  }
}

export default App;