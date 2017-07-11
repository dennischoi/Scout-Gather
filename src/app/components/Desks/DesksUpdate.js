import React, { Component } from 'react';

// Import Components


// Import Styles and Images
import deskImg1 from '../../images/sg_desk_1.jpg';
import deskImg2 from '../../images/valex_desk.jpg';
import deskImg3 from '../../images/valex_drawer.jpg';

class DesksUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
      <section className="DesksUpdate">
        <div className="deskItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={deskImg1} className="deskImages" alt="items" />
            <div className="deskDetails"> 
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>

        <div className="deskItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={deskImg2} className="deskImages" alt="items" />
            <div className="deskDetails">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>

        <div className="deskItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={deskImg3} className="deskImages" alt="items" />
            <div className="deskDetails">
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

export default DesksUpdate;
