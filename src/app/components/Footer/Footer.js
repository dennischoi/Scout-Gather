import React, { Component } from 'react';

// Import Components

// Import Styles and Images
import facebook from '../../images/Footer/facebook-logo-button.svg';
import instagram from '../../images/Footer/instagram-logo.svg';
import twitter from '../../images/Footer/twitter-logo-button.svg';
import map from '../../images/Footer/maplocate.svg';

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
                <div className="media__box">
                    <div className="media__container">
                        <a href="https://www.instagram.com/scout.gather/" className="media__anchor" rel="noopener" target="_blank" onclick="var otherWindow = window.open(); otherWindow.opener = null; otherWindow.location = href; return false;">
                            <div className="media__icon">
                                <div>
                                    <img src={instagram} className="footer__instagram" alt="instagram" />
                                </div>
                            </div>
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div className="media__container">
                        <a href="https://www.instagram.com/scout.gather/" className="media__anchor" rel="noopener" target="_blank" onclick="var otherWindow = window.open(); otherWindow.opener = null; otherWindow.location = href; return false;">
                            <div className="media__icon">
                                <div>
                                    <img src={facebook} className="footer__facebook" alt="facebook" />
                                </div>
                            </div>
                            <span>Facebook</span>
                        </a>
                    </div>
                    <div className="media__container">
                        <a href="https://www.instagram.com/scout.gather/" className="media__anchor" rel="noopener" target="_blank" onclick="var otherWindow = window.open(); otherWindow.opener = null; otherWindow.location = href; return false;">
                            <div className="media__icon">
                                <div>
                                    <img src={twitter} className="footer__twitter" alt="twitter" />
                                </div>
                            </div>
                            <span>Twitter</span>
                        </a>
                    </div>
                </div>
        	</div>
            
        	<div className="footerItems">
        		
        	</div>

        	<div className="footerItems">
        		<h3>Contact Us</h3>
                <div className="contact__container">
                    <div className="contact__icon">
                        <div>
                            <img src={map} className="footer__map" alt="map" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>777 whereever lucky ave. Lucky, ON. S7S 7S7</span>
                        </div>
                        <div>
                            <span>###-###-####</span>
                        </div>
                    </div>
                </div>
        	</div>
        </section>
      </div>
    );
  } // Render
}

export default Footer;