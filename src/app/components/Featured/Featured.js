import React, { Component } from 'react';

// Import Components
import FeaturedChairs from '../Chairs/FeaturedChairs';
import FeaturedDesks from '../Desks/FeaturedDesks';
import FeaturedTables from '../Tables/FeaturedTables';
import FeaturedMisc from '../Misc/FeaturedMisc';



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
      <div className="content--bg">
        <div>
          
        </div>
        <section className="Featured">

          <FeaturedChairs />

          <FeaturedDesks />

          <FeaturedTables />

          <FeaturedMisc />
          
        </section>

      </div>
    );
  }
}

export default Featured;
