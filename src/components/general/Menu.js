import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './menu.css'

class Menu extends Component {
    state = {
        MenuVisible: false
    }
    openMenu = () => {
        this.setState({MenuVisible: !this.state.MenuVisible});
    }
    render() {
        return(
            <React.Fragment>
                <button id="menu-toggle" onClick={this.openMenu}>
                    <div id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="cross">
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <ul className={this.state.MenuVisible ? 'Menu open' : 'Menu'}>
                    <li>
                        <div className="search icon"></div>
                    </li>
                    <li>Events</li>
                    <li>
                        <NavLink to="/demodays">Demo Days</NavLink>
                    </li>
                    <li>Tutorials</li>
                    <li><NavLink to="/our-company">Find a Distribuitor</NavLink></li>
                    <li>
                    <a href="http://nurevolutionshop.com/" target="_blank" rel="noopener noreferrer">Shop</a>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Menu;