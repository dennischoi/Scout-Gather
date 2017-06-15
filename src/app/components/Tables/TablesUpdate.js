import React, { Component } from 'react';

// Import Components


// Import Styles and Images
import tableImg1 from '../../images/valex_table.jpg';
import tableImg2 from '../../images/valex_desk.jpg';
import tableImg3 from '../../images/valex_drawer.jpg';

class TablesUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    return (
      <section className="TablesUpdate">
        <div className="tableItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={tableImg1} className="tableImages" alt="items" />
            <div className="tableDetails"> 
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>

        <div className="tableItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={tableImg2} className="tableImages" alt="items" />
            <div className="tableDetails">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </div>

        <div className="tableItems">
          <div>
            <h3>Lorem Ipsum</h3>
            <img src={tableImg3} className="tableImages" alt="items" />
            <div className="tableDetails">
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

export default TablesUpdate;
