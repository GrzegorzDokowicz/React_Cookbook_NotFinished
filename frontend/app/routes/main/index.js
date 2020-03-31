import React from 'react';
import {connect} from 'react-redux';
import {ReactSVG} from 'react-svg'
import {gsap} from 'gsap';

import Text from 'CoreComponents/text';
import Button from 'CoreComponents/button';

import ResponsiveAppContainer from 'AppComponents/containers/responsive-app-container';
import {getTextData} from 'AppDataLayer/page/actions';

import './style.scss';

const mapStateToProps = state => ({state: getTextData(state.page.landingPageTextData)});

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.textData = this.props.state.payload;
        this.leftSide = React.createRef();
    }

    getBurgerElements() {
        const burgerIds = [
            'Burger Top',
            'Lattuce Top',
            'Cheese',
            'Meet',
            'Tomato',
            'Lattuce Bottom'
        ];

        try {
            return burgerIds.map(id => {
                const element = document.getElementById(id);

                if (element) {
                    return element;
                }

                throw new Error()
            });
        } catch ($error) {
            return false;
        }
    }

    getElementsAnimationConfiguration() {
        return [
            {
                object: 'Ground',
                from: {opacity: 0},
                to: {duration: 2.5, opacity: 1}
            },
            {
                object: 'Character',
                from: {x: 1000},
                to: {duration: 2, x: 0}
            },
            {
                object: 'Plant',
                from: {opacity: 0},
                to: {
                    duration: 3,
                    opacity: 1,
                }
            },
            {
                object: 'Burger Bottom',
                from: {opacity: 0},
                to: {duration: 1, opacity: 1}
            }
        ];
    }

    _handleAnimation() {
        const burger = this.getBurgerElements();

        if (burger) {
            const burgerTimeline = gsap.timeline().set(burger, {
                y: -1000,
                opacity: 0,
            });
            this.getElementsAnimationConfiguration().forEach(({object, from, to}) => {
                gsap.timeline().set(object, from).to(object, to);
            });

            burger.reverse().forEach((element, index) => {
                burgerTimeline.to(element, {duration: (1 / (index + 1)), y: 0, opacity: 1});
            });

            //Left-Side animation
            gsap.timeline().set(this.leftSide.current, {opacity: 0}).to(this.leftSide.current, {
                duration: 3.5,
                opacity: 1,
                delay: 0.5
            });
        }
    }

    render() {
        return <ResponsiveAppContainer>
            <div className="landing-page">
                <div ref={this.leftSide} className="landing-page__section-container">
                    <div className="landing-page__section landing-page__section--left" ref={this.leftSide}>
                        <Text type={'title'}>
                            {this.textData.section1.title}
                        </Text>
                        <Text type={'paragraph'}>
                            {this.textData.section1.textBody}
                        </Text>
                        <div className="left-side__buttons">
                            <Button style={['filled-hover']} onClick={() => console.log('clicked read more...')}>
                                Read more
                            </Button>
                        </div>
                    </div>
                    <div className="landing-page__section landing-page__section--right">
                        <ReactSVG src={'Public/landing-page-svg.svg'}
                                  afterInjection={this._handleAnimation.bind(this)}/>
                    </div>
                </div>
            </div>
        </ResponsiveAppContainer>;
    }
}

const MainComponent = connect(mapStateToProps)(Main);

export default MainComponent;
