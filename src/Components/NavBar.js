import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import '../App.css';

class NavBar extends Component {
  render(){
    return(
      <div>
        <Navbar className="navbar">
          <Nav className="nav">
            <NavItem id="navitem">HOME GALLERY</NavItem>
            <NavItem id="navitem">PACKAGES</NavItem>
            <NavItem id="navitem">ARTIST BEHIND MY LOGO</NavItem>
            <NavItem id="navitem">JUST ME & MY TRIPOD</NavItem>
            <NavItem id="navitem">MY INSTAGRAM</NavItem>
            <NavItem id="navitem">ABOUT</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem id="navheader">DANIELLE QUINTO</NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
