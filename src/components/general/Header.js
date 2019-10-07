import React from 'react';
import { NavLink } from "react-router-dom";
import Menu from './Menu';

const Header = () => (
    <div className="Header">
        <NavLink to="/">
            <img src="/images/logo.png" alt="Nu Revolution" className="logo" />
        </NavLink>
        <Menu/>
    </div>
)

export default Header