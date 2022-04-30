import React from "react";
import navbar from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <div>
                <a href='/profile'>Profile</a>
            </div>
            <div>
                <a href='/dialogs'>Messages </a>
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
