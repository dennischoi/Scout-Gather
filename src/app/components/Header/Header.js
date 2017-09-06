import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// Import Components
import Home from '../Home/Homepage';
import Featured from '../Featured/Featured';

// Import Styles and Images
import logo from '../../images/logo.svg';

class Header extends Component {
  render() {
    return (
      <Router>
        <div className="headerMain">
          <div className="navContainer">
            <div className="header-icon">
              <Link to="/"><img src={logo} className="header-logo" alt="logo" /></Link>
            </div>
          </div>
        </div>

        <div className="navLink-container">
          <div className="navLink-table">
            <div>
              <Link to="/chairs"><span className="navLink">Featured</span></Link>
            </div>
          </div>
        </div>

          <Route exact path="/" component={Home} />
          <Route path="/chairs" component={Featured} />

      </Router>

    );
  } // Render
}

export default Header;