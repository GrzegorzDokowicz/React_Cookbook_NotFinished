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
                <NavBarElement childrenTitle={"Kategoria"} path={"/recipe-category"} iconName={'concierge-bell'} onClick={()=> console.log('click')}/>
                <NavBarElement childrenTitle={"Przepis"} path={"/recipe/1"} iconName={'utensils'} onClick={()=> console.log('click')}/>




                {/* <li className="nav-bar__element">
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
                </li> */}
            </ul>
        </ResponsiveAppContainer>
    </nav>

};

export default NavBar;
