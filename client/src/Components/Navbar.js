import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <div className= "navbar-container">
                <div className= "navbar-links">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/feed">Feed</NavLink>
                <NavLink to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;