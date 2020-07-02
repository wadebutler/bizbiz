import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>BizBiz <span>Share</span></h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/name">Name</NavLink>
                <NavLink to="/animal">Animal</NavLink>
            </nav>
        </header>
    )
}

export default Header;