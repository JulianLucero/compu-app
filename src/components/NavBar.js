import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap'

class NavBar extends Component{
    render () {
    return (
        <Navbar bg="Ligth">
            <Navbar.Brand href="#home">CompuShooping</Navbar.Brand>
            <Navbar.Brand href="#about">About</Navbar.Brand>
            <Navbar.Brand href="#contact">Contact</Navbar.Brand>
        </Navbar>
    )
}
}

export default NavBar;
