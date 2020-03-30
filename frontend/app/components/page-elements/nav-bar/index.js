import React from 'react';
import {gsap, Power4, Back} from 'gsap';

import ResponsiveAppContainer from 'AppComponents/containers/responsive-app-container';
import NavBarElement from 'AppComponents/page-elements/nav-bar-element';

import './style.scss';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemIndex: 0
        };

        this.indicator = React.createRef();

        this.elements = [{
            title: 'Strona Domowa',
            path: '/',
            iconName: 'home',
            ref: React.createRef()
        }, {
            title: 'Kategorie przepisów',
            path: '/recipe-categories',
            iconName: 'list',
            ref: React.createRef()
        }];

    }

    componentDidMount() {
        this._getIndicatorPosition(this.state.activeItemIndex);
        window.addEventListener('resize', () => this._setIndicatorPosition(this.state.activeItemIndex));
        //Todo change timeout to other function. It have to take care about indicator after render.
        setTimeout(() => {
            gsap.set(this.indicator.current, {duration: 0.2, x: this._getIndicatorPosition(this.state.activeItemIndex)});
        }, 50);
    }



    //get current indicator position
    _getIndicatorPosition(index) {
        const {width: indicatorWidth} = this.indicator.current.getBoundingClientRect();
        const {width: itemWidth, x: itemX} = this.elements[index].ref.current.getBoundingClientRect();

        // change state
        this.setState(prevState => ({
            ...prevState,
            activeItemIndex: index
        }));

        return itemX + itemWidth / 2 - indicatorWidth / 2;
    }

    //set indicator position
    _setIndicatorPosition(index) {
        gsap.to(this.indicator.current, {duration: 0.2, x: this._getIndicatorPosition(index)});
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

    prepareElements() {
        return this.elements.map((element, index) =>
            <li key={index}
                ref={element.ref}
                className={'nav-bar__element'}>
                <NavBarElement
                    title={element.title}
                    path={element.path}
                    iconName={element.iconName}
                    onClick={this._handleEvent(index)}
                />
            </li>
        );
    }

    render() {
        return <nav className={'nav-bar'}>
            <ResponsiveAppContainer>
                <span ref={this.indicator} className={'nav-bar__indicator'}/>
                <ul className="nav-bar__list">
                    <li className={'nav-bar__element'}>LOGO</li>
                    {this.prepareElements()}
                </ul>
            </ResponsiveAppContainer>
        </nav>;
    }
}


export default NavBar;

