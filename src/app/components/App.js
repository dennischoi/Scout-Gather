import React, { Component } from 'react';

// Import Components
import Header from './Header/Header';
import Footer from './Footer/Footer';

// Import Styles and Images
import logoBg from '../images/Valex_homebg.jpg';
import '../styles/css/App.css';
import '../styles/css/Header/Header.css';
import '../styles/css/Footer/Footer.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Home">
          <img src={logoBg} className="appBg" alt="logo" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
