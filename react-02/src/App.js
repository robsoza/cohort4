import React from 'react';
import './App.css';
import { LogosData, NavbarComp } from './components/NavbarComp';
import FooterComp from './components/FooterComp';

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
          logo.active = true;
          logo.className = "Active-logo";
        } else {
          logo.active = false
          logo.className = "My-logo";
        }
        return logo
      })
      return {
        logos: updatedLogos
      }
    })
  }

  render() {
    const logoItems = this.state.logos.map(logo => <NavbarComp key={logo.id} logo={logo} handleChange={this.handleChange} />)
    let activeLogo = this.state.logos.find(e => e.className === "Active-logo");

    return (
      <div className="App">
        <div className="navbar">
          {logoItems}
        </div>
        <div className="active-page">
          {activeLogo.page}
        </div>
        <footer>
          <FooterComp />
        </footer>
      </div>
    );
  }
}

export default App;