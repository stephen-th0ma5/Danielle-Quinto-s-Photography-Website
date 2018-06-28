import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css';

class NavBar extends Component {
  render(){
    return(
      <div>
        <Navbar className="navbar">
          <Nav className="nav">
            <NavItem><Link to="/" id="navitem">HOME GALLERY</Link></NavItem>
            <NavItem><Link to="/packages" id="navitem">PACKAGES</Link></NavItem>
            <NavItem><Link to="/theartistbehindmylogo" id="navitem">ARTIST BEHIND MY LOGO</Link></NavItem>
            <NavItem><Link to="justmeandmytripod" id="navitem">JUST ME & MY TRIPOD</Link></NavItem>
            <NavItem><Link to="about" id="navitem">ABOUT</Link></NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem id="navheader" href="/">D a n i e l l e &nbsp; Q u i n t o</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
