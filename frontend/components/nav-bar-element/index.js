import React from 'react';
import './style.scss';
import Text from "../text";
import {Link} from 'react-router-dom';
import IconText from '../icon-text';

class NavBarElement extends React.Component {
    constructor(props, {childrenTitle, path, iconName, onClick}) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    render() {
        return <li className="nav-bar__element" onClick={this.props.onClick}>
            <Link to={this.props.path}> <IconText icon={this.props.iconName} children={this.props.childrenTitle} vertical={true}/></Link>
        </li>
    }
}

export default NavBarElement;
