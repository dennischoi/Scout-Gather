import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { 
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem 
} from 'react-bootstrap';

// Import Components
import Home from '../Home/Homepage';
import Featured from '../Featured/Featured';

// Import Styles and Images
import logo from '../../images/logo.svg';



class Header extends Component {
  render() {
    return (
      <div className="header--main">
      <Router>
        <Navbar inverse collapseOnSelect>
            <div>
              <Navbar.Header>
                
                <Navbar.Brand>
                  <div className="header-icon">
                    <Link to="/"><img src={logo} className="header-logo" alt="logo" /><a>Scout & Gather</a></Link>
                  </div>
                  
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                	<NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
                  <NavItem eventKey={2}><Link to="/featured">Featured</Link></NavItem>
                  {/*<NavItem eventKey={2} href="">Link</NavItem>*/}
                  <NavDropdown eventKey={3} title="Coming Soon" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Sale</MenuItem>
                    <MenuItem eventKey={3.2}>Hot</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Designer</MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">Test</NavItem>
                 
                </Nav>
              </Navbar.Collapse>
              <Route exact path="/" component={Home} />
              <Route path="/featured" component={Featured} />
            </div>
        </Navbar>
      </Router>
      </div>
    );
  }
}

export default Header;
