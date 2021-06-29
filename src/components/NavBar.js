import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

class NavBar extends Component {
    render() {
      return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
          <Navbar.Brand href="#home">Compu Shooping</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              
              <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Processors</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Motherboard</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Graphics Card</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">PC Components</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Navbar>
                
           

        )
    };
}

export default NavBar;
