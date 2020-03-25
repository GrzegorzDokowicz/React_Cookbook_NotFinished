import React from 'react';
import {gsap, Power4, Back} from 'gsap'

import './style.scss';
import ResponsiveAppContainer from "../responsive-app-container";
import NavBarElement from '../../../components/nav-bar-element';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indicatorWidth: 0,
            itemWidth: 0,
            itemX: 0,
        };

        this.indicator = React.createRef();
        this.navList = React.createRef();
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

    componentDidMount() {
        this._getIndicatorPosition();
        this._setIndicatorPosition();
        window.addEventListener('resize', this._setIndicatorPosition);
    }



    //get currently active element from list
    _getActiveElement() {
        return Array.from(this.navList.current.children).map((el, index) => {
            return el.classList.contains('nav-bar__link--active') ? index : 0
        }).reduce((prev, current) => {
            return prev + current
        });
    };

    //get current indicator position
    _getIndicatorPosition = () => {
        const {width: indicatorWidth} = this.indicator.current.getBoundingClientRect();
        const {width: itemWidth, x: itemX} = this.navList.current.children[this._getActiveElement()].getBoundingClientRect();

        // change state
        this.setState(prevState => ({
            ...prevState,
            indicatorWidth,
            itemWidth,
            itemX
        }));

        return itemX + itemWidth / 2 - indicatorWidth / 2
    };

    //set indicator position
    _setIndicatorPosition = () => {
        gsap.to(this.indicator.current, {duration: 0.2, x: this._getIndicatorPosition})
    };


    _handleEvent = (event) => {
        if (event.type === 'mousedown') {
            const target = event.target.closest('.nav-bar__element');
            const timeline = gsap.timeline();
            timeline.to(target, {duration: 0.3, y: -5, ease: Power4.easeOut})
                .to(target, {duration: 0.3, y: 0, ease: Back.easeOut.config(1.7)});
        }
        if (event.type === 'click') {
            const target = event.target.closest('.nav-bar__element');
            this._setIndicatorPosition()
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

    render() {
        return <nav className={"nav-bar"}>
            <ResponsiveAppContainer>
                <span ref={this.indicator} className={'nav-bar__indicator'}></span>
                <ul ref={this.navList} className="nav-bar__list">
                    <li className={'nav-bar__element'}>LOGO</li>
                    {this.prepareElements()}
                </ul>
            </ResponsiveAppContainer>
        </nav>
    }
};


export default NavBar;

