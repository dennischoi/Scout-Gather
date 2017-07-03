import React, { Component } from 'react';

// Import Components


// Import Styles and Images
import miscImg1 from '../../images/valex_chair.jpg';
import miscImg2 from '../../images/valex_desk.jpg';
import miscImg3 from '../../images/valex_drawer.jpg';

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
