import React, { Component } from 'react';


// Import Components
import Header from './Header/Header';


// Import Styles and Images

import '../styles/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>  
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
