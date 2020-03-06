import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return <ul className="page-header__list">
        <li className="page-header__list-element">
            <Link to="/">Main page</Link>
        </li>
        <li className="page-header__list-element">
            <Link to="/recipe-categories">Przepis</Link>
        </li>
        <li className="page-header__list-element">
            <Link to="/recipe-category/1">Kategorie przepisow</Link>
        </li>
    </ul>
};

export default NavBar;
