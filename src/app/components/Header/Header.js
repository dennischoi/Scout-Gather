import React, { Component } from 'react';

// Import Components

// Import Styles and Images
import logo from '../../images/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="headerMain">
        <div className="navContainer">
          <div className="header-icon">
            <img src={logo} className="header-logo" alt="logo" />
          </div>

          <div className="navLink-container">
            <div className="navLink-table">
              <div>
                <span className="navLink">Featured</span>
              </div>
            </div>
          </div>
          <div className="navLink-container">
            <div className="navLink-table">
              <div>
                <span className="navLink">Chair</span>
              </div>
            </div>
          </div>
          <div className="navLink-container">
            <div className="navLink-table">
              <div>
                <span className="navLink">Table</span>
              </div>
            </div>
          </div>
          <div className="navLink-container">
            <div className="navLink-table">
              <div>
                <span className="navLink">Desk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } // Render
}

export default Header;