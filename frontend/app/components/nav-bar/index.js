import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';
import ResponsiveAppContainer from "../responsive-app-container";

const NavBar = () => {
    return <nav className={"nav-bar"}>
        <ResponsiveAppContainer>
            <ul className="nav-bar__list">
                <li className="nav-bar__element">
                    <Link to="/">Main page</Link>
                </li>
                <li className="nav-bar__element">
                    <Link to="/recipe-categories">Kategorie przepisow</Link>
                </li>
                <li className="nav-bar__element">
                    <Link to="/recipe-category/1">Kategoria</Link>
                </li>
                <li className="nav-bar__element">
                    <Link to="/recipe/1">Przepis</Link>
                </li>
            </ul>
        </ResponsiveAppContainer>
    </nav>

};

export default NavBar;
