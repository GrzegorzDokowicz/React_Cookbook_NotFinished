import React from 'react';
import {gsap, Power4, Back} from 'gsap'

import './style.scss';
import ResponsiveAppContainer from "../responsive-app-container";
import NavBarElement from '../../../components/nav-bar-element';

class NavBar extends React.Component {
    constructor(props) {
        super(props);


        this.elements = [{
            title: 'Strona Domowa',
            path: '/',
            iconName: 'home'
        }, {
            title: 'Kategorie przepisów',
            path: '/recipe-categories',
            iconName: 'list'
        }];
    }

    _handleEvent = (event) => {
        if (event.type === 'mousedown') {
            const target = event.target.closest('.nav-bar__element');
            const timeline = gsap.timeline();
            timeline.to(target, {duration: 0.3, y: -5, ease: Power4.easeOut})
                .to(target, {duration: 0.3, y: 0, ease: Back.easeOut.config(1.7)});
        }
    };

    prepareElements = () => {
        const elementsArray = this.elements.map((element, index) => <NavBarElement
            key={index}
            className={'nav-bar__element'}
            title={element.title} path={element.path}
            iconName={element.iconName} onClick={this._handleEvent}
        />);
        return elementsArray;
    };

//<div className={'nav-bar__logo'}>LOGO</div>

    render() {
        return <nav className={"nav-bar"}>

            <ResponsiveAppContainer>
                <ul className="nav-bar__list">
                    <li className={'nav-bar__element'}>LOGO</li>
                    {this.prepareElements()}
                </ul>
            </ResponsiveAppContainer>
        </nav>
    }
};


export default NavBar;

