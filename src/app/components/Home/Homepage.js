import React, { Component } from 'react';

// Import Components
import Footer from '../Footer/Footer';

// Import Styles and Images
import monitor from '../../images/Home/monitor.svg';
// import smartphone from '../../images/Home/smartphone.svg';
import question from '../../images/Home/question.svg';
import delivery from '../../images/Home/delivery-truck.svg';
import logoBg from '../../images/ScoutGather.jpg';


class Home extends Component {
  render() {
    return (
      <div className="Home--Main content--bg">
        <div className="App-Home">
          <img src={logoBg} className="appBg" alt="logo" />
        </div>
        <div className="subTitle--container">
        	<span className="subTitle--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>

        <div className="Home--description">
          <div className="Home--d1">
            <div>
              <div>
                <img src={monitor} className="img-monitor" alt="monitor" />
              </div>
              <span>
                View and Browse Vintage furniture!
              </span>
            </div>
          </div>

          <div className="Home--d2">
            <div>
              <div>
                <img src={question} className="img-question" alt="question" />
              </div>
              <span>
                Ask Questions / Negotiate Price
              </span>
            </div>
          </div>

          <div className="Home--d3">
            <div>
              <div>
                <img src={delivery} className="img-delivery" alt="delivery" />
              </div>
              <span>
                Delivery to you!
              </span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
