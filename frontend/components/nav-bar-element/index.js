import React from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';
import IconText from '../icon-text';

class NavBarElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <NavLink className={`nav-bar__link`}
                     onClick={this.props.onClick}
                     onMouseDown={this.props.onClick}
                     onMouseUp={this.props.onClick} exact to={this.props.path}
                     activeClassName={'nav-bar__link--active'}>
                <IconText icon={this.props.iconName} vertical={true} size={'big'}>
                    {this.props.title}
                </IconText>
            </NavLink>
    }
}
export default NavBarElement;
