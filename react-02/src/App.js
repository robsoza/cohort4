import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Logos, MyLogo } from './components/myLogo'

class App extends React.Component {
  constructor() {
    super()
    this.state = { myState: "false" };
  }

  onPushMe = () => {
    this.setState({ myState: true })
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
        <MyLogo src={Logos[0].src} className="My-logo" alt="logo" onClick={this.onPushMe} />
        <MyLogo src={Logos[1].src} className="My-logo" alt="logo" onClick={this.onPushMe} />
        <MyLogo src={Logos[2].src} className="My-logo" alt="logo" onClick={this.onPushMe} />
        <MyLogo src={Logos[3].src} className="My-logo" alt="logo" onClick={this.onPushMe} />
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
}
export default App;