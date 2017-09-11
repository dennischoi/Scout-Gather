import React, { Component } from 'react';


// Import Components
import Header from './Header/Header';


// Import Styles and Images



class AppLayout extends Component {
  render() {
    return (
      <div className="AppLayout">
        <div>  
          <Header />
          
        </div>
      </div>
    );
  }
}

export default AppLayout;
