import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';
import ResponsiveAppContainer from "../responsive-app-container";
import NavBarElement from '../../../components/nav-bar-element';

const NavBar = () => {
    return <nav className={"nav-bar"}>
        <ResponsiveAppContainer>
            <ul className="nav-bar__list">
                <NavBarElement childrenTitle={"Strona domowa"} path={"/"} iconName={'home'} onClick={()=> console.log('click')}/>
                <NavBarElement childrenTitle={"Kategorie przepisów"} path={"/recipe-categories"} iconName={'list'} onClick={()=> console.log('click')}/>
                <li>LOGO</li>
            </ul>
        </ResponsiveAppContainer>
    </nav>

};

export default NavBar;
