import React from 'react';
import './App.css';
import { ThemeContext, themes } from './components/Theme/ThemeContextComp';
import { LogosData, NavbarComp } from './components/Navbar/NavbarComp';
import FooterComp from './components/Footer/FooterComp';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      logos: LogosData,
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedLogos = prevState.logos.map(logo => {
        if (logo.id === id) {
          logo.className = "Active-logo";
        } else {
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
      <ThemeContext.Provider value={this.state}>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div className="App" style={{ backgroundColor: theme.background }}>
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
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    );
  }
}

export default App;