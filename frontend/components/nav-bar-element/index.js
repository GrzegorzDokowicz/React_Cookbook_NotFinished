import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import IconText from '../icon-text';

class NavBarElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <li
            data-id={this.props.dataId}
            className={this.props.className}
            onClick={this.props.onClick}>
            <Link to={this.props.path}>
                <IconText icon={this.props.iconName} vertical={true} size={'big'}>
                    {this.props.title}
                </IconText>
            </Link>
        </li>
    }
}

export default NavBarElement;
