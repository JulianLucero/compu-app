import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import CartWidget from './CartWidget';

class NavBar extends Component{
    render () {
    return (
        <Navbar bg="Ligth">
            <Navbar.Brand href="#home">CompuShooping</Navbar.Brand>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <CartWidget/>
        </Navbar>
        
    )
};
}

export default NavBar;
