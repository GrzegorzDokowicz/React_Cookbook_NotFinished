import React from 'react';
import {NavLink} from 'react-router-dom';

import IconText from 'CoreComponents/icon-text';

import './style.scss';


const NavBarElement = ({path,  iconName, title, onClick}) => {
    return <NavLink className={'nav-bar__link'}
        onClick={onClick}
        onMouseDown={onClick}
        onMouseUp={onClick} exact to={path}
        activeClassName={'nav-bar__link--active'}>
        <IconText icon={iconName} vertical={true} size={'big'}>
            {title}
        </IconText>
    </NavLink>;
};

export default NavBarElement;
