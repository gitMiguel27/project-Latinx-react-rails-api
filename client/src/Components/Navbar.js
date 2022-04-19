import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar">
            <div className= "navlinksContainer">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/artistpage">Artist Page</NavLink>
                <NavLink to="/feed">Feed</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;