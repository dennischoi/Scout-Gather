import React, { Component } from 'react';


// Import Components
import AppLayout from './AppLayout';


// Import Styles and Images

import '../styles/css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>  
          <AppLayout />

        </div>
      </div>
    );
  }
}

export default App;
