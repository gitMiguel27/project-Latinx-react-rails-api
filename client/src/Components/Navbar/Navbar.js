import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <div className= "navbar-container">
                <img src="l.png" alt="logo" className="logo"></img>
                <div className= "navbar-links">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/artists">Artists</NavLink>
                <NavLink to="/explore">Explore</NavLink>
                <NavLink to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;