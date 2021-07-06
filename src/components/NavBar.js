import React, { Component } from 'react';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import {NavLink,Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <header className="shadow-lg text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link 
                    to="/" 
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" 
                >
                    {/* <span className="ml-3 text-xl">CoderStore</span> */}
                    
                </Link>
               
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">                   
                                
                    <NavLink 
                        to="/" 
                        className="mr-5 hover:text-gray-900"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="/products" 
                        className="mr-5 hover:text-gray-900"
                    >
                        Products
                    </NavLink>

                    <NavLink 
                        to="/about" 
                        className="mr-5 hover:text-gray-900"
                    >
                        About
                    </NavLink>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    <CartWidget/>
                </button>
            </div>
        </header>
    </div>
  );
};

export default NavBar;

{/*
class NavBar extends Component {
    render() {
      return (
        <nav >
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
*/}