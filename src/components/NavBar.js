import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class NavBar extends Component {
    render() {
      return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <CartWidget />
        </nav>

        )
    };
}

export default NavBar;
