import React from "react";
import navbar from './Navbar.module.css';

import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <div>
                <NavLink to='/profile'>Profile </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'>Messages  </NavLink>
            </div>
            <div>
                <a href='/news'>News </a>
            </div>
            <div>
                <a>Music </a>
            </div>
            <div>
                <a>Settings </a>
            </div>
        </nav>
    )
};

export default Navbar;
