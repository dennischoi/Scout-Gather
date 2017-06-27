import React, { Component } from 'react';

// Import Components
import Chairs from '../Chairs/Chairs';


// Import Styles and Images
import featureImg1 from '../../images/valex_chair.jpg';
import featureImg2 from '../../images/valex_desk.jpg';
import featureImg3 from '../../images/valex_drawer.jpg';

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
          <div className="subTitle--container">
            <span className="subTitle--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
        </div>
        <section className="Featured">
          <div className="featuredItems">
            <div>
              <h3>Lorem Ipsum</h3>
              <img src={featureImg1} className="featuredImages" alt="items" />
              <div className="featuredDetails"> 
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.
                </span>
              </div>
            </div>
          </div>

          <div className="featuredItems">
            <div>
              <h3>Lorem Ipsum</h3>
              <img src={featureImg2} className="featuredImages" alt="items" />
              <div className="featuredDetails">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.
                </span>
              </div>
            </div>
          </div>

          <div className="featuredItems">
            <div>
              <h3>Lorem Ipsum</h3>
              <img src={featureImg3} className="featuredImages" alt="items" />
              <div className="featuredDetails">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.
                </span>
              </div>
            </div>
          </div>
        </section>

        <Chairs />

      </div>
    );
  }
}

export default Featured;
