import React, { Component } from 'react';

// Import Components


// Import Styles and Images
import chairImg1 from '../../images/sg_chair_1.jpg';
import chairImg2 from '../../images/sg_chair_2.jpg';
import chairImg3 from '../../images/sg_drawer_1.jpg';

class ChairsUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
      <section className="ChairsUpdate">
        <div className="chairItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={chairImg1} className="chairImages" alt="items" />
            <div className="chairDetails"> 
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>

        <div className="chairItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={chairImg2} className="chairImages" alt="items" />
            <div className="chairDetails">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>

        <div className="chairItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={chairImg3} className="chairImages" alt="items" />
            <div className="chairDetails">
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
    );
  }
}

export default ChairsUpdate;
