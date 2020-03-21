import React from 'react';
import {gsap, Power4, Back} from 'gsap'

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
            title: 'Kategorie przepisów',
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

    _handleEvent = (event) => {
        const target = event.target.closest('.nav-bar__element');
        const clickedElementId = parseInt(target.getAttribute('data-id'));

        switch (event.type) {
            case 'mousedown':
                gsap.to(target, {duration: 0.2, scale: 0.8, ease: Power4.easeOut});
                break;
            case 'mouseup':
                gsap.to(target, {duration: 0.2, scale: 1, ease: Back.easeOut.config(6)});
                break;
            case 'click':
                this.setState(prevState => ({
                    ...prevState,
                    isActive: clickedElementId
                }));
                break;

        }
    }

    prepareElements = () => {
        const elementsArray = this.elements.map((element, index) => <NavBarElement
            key={index} dataId={index}
            className={this.state.isActive === index ? 'nav-bar__element nav-bar__element--active' : 'nav-bar__element nav-bar__element--disabled'}
            title={element.title} path={element.path}
            iconName={element.iconName} onClick={this._handleEvent}/>);
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

