import React, { Component } from 'react';

// Import Components


// Import Styles and Images
import miscImg1 from '../../images/sg_lamp_1.jpg';
import miscImg2 from '../../images/sg_lamp_2.jpg';
import miscImg3 from '../../images/sg_misc_1.jpg';

class MiscUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
      <section className="MiscUpdate">
        <div className="miscItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={miscImg1} className="miscImages" alt="items" />
            <div className="miscDetails"> 
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>

        <div className="miscItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={miscImg2} className="miscImages" alt="items" />
            <div className="miscDetails">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>

        <div className="miscItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={miscImg3} className="miscImages" alt="items" />
            <div className="miscDetails">
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

export default MiscUpdate;
