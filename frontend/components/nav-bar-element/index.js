import React from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';
import IconText from '../icon-text';

class NavBarElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li className={'nav-bar__element'}>
            <NavLink exact to={this.props.path}
                     className={this.props.className}
                     activeClassName={'nav-bar__link--active'}
                     onClick={this.props.onClick}
                     onMouseDown={this.props.onClick}
                     onMouseUp={this.props.onClick}>
                <IconText icon={this.props.iconName} vertical={true} size={'big'}>
                    {this.props.title}
                </IconText>
            </NavLink>
        </li>
    }
}

export default NavBarElement;
