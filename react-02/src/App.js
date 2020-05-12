import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LogosData, MyLogo } from './components/MyLogo'
import Game from './components/TicTacToe'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      logos: LogosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedLogos = prevState.logos.map(logo => {
        if (logo.id === id) {
          logo.clicked = true
        } else {
          logo.clicked = false
        }
        return logo
      })
      return {
        logos: updatedLogos
      }
    })
  }

  render() {
    const logoItems = this.state.logos.map(logo => <MyLogo key={logo.id} logo={logo} handleChange={this.handleChange} />)
    return (
      <div className="App">
        {logoItems}
        <Game />
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