import React from 'react';
import {gsap, Power4, Back} from 'gsap';

import ResponsiveAppContainer from 'AppComponents/containers/responsive-app-container';
import NavBarElement from 'AppComponents/page-elements/nav-bar-element';

import './style.scss';
import Logo from '../../../../components/logo';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemIndex: 1
        };

        this.indicator = React.createRef();

        this.leftElements = [{
            id: 1,
            title: 'Strona Domowa',
            path: '/',
            iconName: 'home',
            ref: React.createRef()
        }, {
            id: 2,
            title: 'Kategorie przepisów',
            path: '/recipe-categories',
            iconName: 'list',
            ref: React.createRef()
        }];

        this.rightElements = [{
            id: 3,
            title: 'Zaloguj',
            path: '/login',
            iconName: 'user',
            ref: React.createRef()
        }];

        this.elements = [
            ...this.rightElements,
            ...this.leftElements
        ];
    }

    componentDidMount() {
        this._getIndicatorPosition(this.state.activeItemIndex);
        window.addEventListener('resize', () => this._setIndicatorPosition(this.state.activeItemIndex));
        //Todo change timeout to other function. It have to take care about indicator after render.
        setTimeout(() => {
            gsap.set(this.indicator.current, {
                duration: 0.2,
                x: this._getIndicatorPosition(this.state.activeItemIndex)
            });
        }, 50);
    }

    getElementById(id) {
        return this.elements.find(element => element.id === id);
    }

    //get current indicator position
    _getIndicatorPosition(index) {
        if (this.indicator && this.indicator.current) {
            const currentElement = this.getElementById(index);

            if (currentElement) {
                const {width: indicatorWidth} = this.indicator.current.getBoundingClientRect();
                const {width: itemWidth, x: itemX} = currentElement.ref.current.getBoundingClientRect();

                // change state
                this.setState(prevState => ({
                    ...prevState,
                    activeItemIndex: index
                }));

                return itemX + itemWidth / 2 - indicatorWidth / 2;
            }
        }

        return 0;
    }

    //set indicator position
    _setIndicatorPosition(index) {
        gsap.to(this.indicator.current, {duration: 0.5, x: this._getIndicatorPosition(index)});
    }


    _handleEvent(index) {
        return (event) => {
            if (event.type === 'mousedown') {
                const target = event.target.closest('.nav-bar__element');
                const timeline = gsap.timeline();
                timeline.to(target, {duration: 0.3, y: -5, ease: Power4.easeOut})
                    .to(target, {duration: 0.3, y: 0, ease: Back.easeOut.config(1.7)});
            }
            if (event.type === 'click') {
                this._setIndicatorPosition(index);
            }
        };
    }

    prepareElements(elements) {
        return elements.map((element, index) =>
            <li key={index}
                ref={element.ref}
                className={'nav-bar__element'}>
                <NavBarElement
                    title={element.title}
                    path={element.path}
                    iconName={element.iconName}
                    onClick={this._handleEvent(element.id)}
                />
            </li>
        );
    }

    render() {
        return <nav className={'nav-bar'}>
            <ResponsiveAppContainer>
                <span ref={this.indicator} className={'nav-bar__indicator'}/>
                <div className="nav-bar__list-container">
                    <ul className="nav-bar__list">
                        {this.prepareElements(this.leftElements)}
                    </ul>
                    <div className="nav-bar__logo-container">
                        &nbsp;
                        <div className="nav-bar__logo">
                            <Logo/>
                        </div>
                    </div>
                    <ul className="nav-bar__list nav-bar__list--right">
                        {this.prepareElements(this.rightElements)}
                    </ul>
                </div>
            </ResponsiveAppContainer>
        </nav>;
    }
}


export default NavBar;

