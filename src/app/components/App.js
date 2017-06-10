import React, { Component } from 'react';

// Import Components
import Header from './Header/Header';

// Import Styles and Images
import logo from '../images/logo.svg';
import '../styles/css/App.css';
import '../styles/css/Header/Header.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
