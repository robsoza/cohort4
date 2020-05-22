import React from 'react';
import './App.css';
import { LogosData, MyLogoComp } from './components/MyLogoComp';
import FooterComp from './components/FooterComp';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      logos: LogosData,
      className: "MyLogo",
      mypage: LogosData[0].page
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedLogos = prevState.logos.map(logo => {
        if (logo.id === id) {
          logo.active = true;
          logo.className = "Active-logo";
          this.update(logo);
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

  update = (logo) => {
    this.setState({
      mypage: logo.page,
    });
  }

  render() {
    const logoItems = this.state.logos.map(logo => <MyLogoComp key={logo.id} logo={logo} handleChange={this.handleChange} />)

    return (
      <div className="App">
        <div className="navbar">
          {logoItems}
        </div>
        <div className="active-page">
          {this.state.mypage}
        </div>
        <footer>
          <FooterComp />
        </footer>
      </div>
    );
  }
}

export default App;