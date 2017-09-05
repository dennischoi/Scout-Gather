import React, { Component } from 'react';

// Import Components
import Chairs from '../Chairs/Chairs';
import Desks from '../Desks/Desks';
import Tables from '../Tables/Tables';
import Misc from '../Misc/Misc';


// Import Styles and Images


class Featured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: ['Lorem Ipsum', 'Lorem Ipsum2', 'Lorem Ipsum3']
    };
  }
  render() {
    // const featured = this.state.featured;
    // featured = featured.map(function(item, index) {
    //   return(
    //   )
    // })
    return (
      <div>
        <div>
          
        </div>
        <section className="Featured">

          <Chairs />

          <Desks />

          <Tables />

          <Misc />
          
        </section>

      </div>
    );
  }
}

export default Featured;
