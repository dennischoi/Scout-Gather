import React, { Component } from 'react';

// Import Components

// Import Styles and Images


class Footer extends Component {
  render() {
    return (
      <div className="footerMain">
        <section className="footerContainer">
        	<div className="footerItems footerLocation">
        		<h3>Scout & Gather</h3>
                <div>
                    <span>Lorem Ipsum 123, Lorem IP</span>
                </div>
        	</div>
        	<div className="footerItems">
        		<h3>Media</h3>
                <div className="media__container">
                    <div className="media__icon">
                        <div>
                        img here
                        </div>
                    </div>
                    <span>Instagram</span>
                </div>
                <div className="media__container">
                    <div className="media__icon">
                        <div>
                        img here
                        </div>
                    </div>
                    <span>Facebook</span>
                </div>
        	</div>
            
        	<div className="footerItems">
        		
        	</div>

        	<div className="footerItems">
        		<h3>Contact Us</h3>
                <div>
                    <span>Phone Number ---</span>
                </div>
        	</div>
        </section>
      </div>
    );
  } // Render
}

export default Footer;