import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Import Components
import Home from './Home/Homepage';
import Featured from './Featured/Featured';

import Footer from './Footer/Footer';

// Import Styles and Images
import logo from './../images/logo.svg';
import '../styles/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="headerMain">
              <div className="navContainer">
                <div className="header-icon">
                  <Link to="/"><img src={logo} className="header-logo" alt="logo" /></Link>
                </div>
                
                <div className="navLink-container">
                  <div className="navLink-table">
                    <div>
                      <Link to="/chairs"><span className="navLink">Featured</span></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <Route exact path="/" component={Home} />
            <Route path="/chairs" component={Featured} />
          </div>

        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
