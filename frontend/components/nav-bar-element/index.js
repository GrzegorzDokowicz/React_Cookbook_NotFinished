import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import IconText from '../icon-text';

class NavBarElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false
        };
    }

    render() {
        return <li className="nav-bar__element" onClick={this.props.onClick}>
            <Link to={this.props.path}>
                <IconText icon={this.props.iconName} vertical={true}>
                    {this.props.childrenTitle}
                </IconText>
            </Link>
        </li>
    }
}

export default NavBarElement;
