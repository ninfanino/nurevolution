import React from 'react';
import { NavLink } from "react-router-dom";
import './menu.css'

const Menu = () => (
    <ul className="Menu">
        <li>
            <div className="search icon"></div>
        </li>
        <li>Events</li>
        <li>
            <NavLink to="/demodays">Demo Days</NavLink>
        </li>
        <li>Tutorials</li>
        <li>Find a Distribuitor</li>
    </ul>
)

export default Menu;