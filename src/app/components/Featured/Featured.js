import React, { Component } from 'react';

// Import Components
// import chairEg from '../images/Valex_homebg.jpg';

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
      <section className="Featured">
        <div>
          {this.state.featured}
        </div>
      </section>
    );
  }
}

export default Featured;
