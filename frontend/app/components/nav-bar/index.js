import React from 'react';

import './style.scss';
import ResponsiveAppContainer from "../responsive-app-container";
import NavBarElement from '../../../components/nav-bar-element';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: null
        };

        this.elements = [{
            title: 'Strona Domowa',
            path: '/',
            iconName: 'home'
        }, {
            title: 'Kategorie przepisów"',
            path: '/recipe-categories',
            iconName: 'list'
        }, {
            title: 'Kategoria',
            path: '/recipe-category/1',
            iconName: 'concierge-bell'
        }, {
            title: 'Przepis',
            path: '/recipe/1',
            iconName: 'utensils'
        }
        ]
    };

    componentDidMount() {
        this.setState(prevState => ({
            ...prevState,
            isActive: 0
        }))
    }

    _handleClick = (event) => {
        const clickedElementId = parseInt(event.target.closest('.nav-bar__element').getAttribute('data-id'));
        this.setState(prevState =>({
            ...prevState,
            isActive: clickedElementId
        }))

    }

    prepareElements = () => {
        const elementsArray = this.elements.map((element, index) => <NavBarElement
            key={index} dataId={index}
            className={this.state.isActive === index ? 'nav-bar__element nav-bar__element--active' : 'nav-bar__element nav-bar__element--disabled'}
            title={element.title} path={element.path}
            iconName={element.iconName} onClick={this._handleClick}/>);
       // console.log(this.state.isActive);
        return elementsArray;
    };

//<div className={'nav-bar__logo'}>LOGO</div>

    render() {
        return <nav className={"nav-bar"}>

            <ResponsiveAppContainer>
                <ul className="nav-bar__list">
                    {this.prepareElements()}
                </ul>
            </ResponsiveAppContainer>
        </nav>
    }
};


export default NavBar;

