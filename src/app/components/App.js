import React, { Component } from 'react';

// Import Components
import Header from './Header/Header';
import Home from './Home/Homepage';
import Featured from './Featured/Featured';
import Footer from './Footer/Footer';

// Import Styles and Images
import logoBg from '../images/ScoutGather.jpg';
import '../styles/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Home">
          <img src={logoBg} className="appBg" alt="logo" />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <Featured />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
