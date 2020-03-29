import React from 'react';
import {connect} from "react-redux";
import {gsap} from 'gsap';
import ResponsiveAppContainer from "../../components/responsive-app-container";
import {getTextData} from '../../data-layer/page/actions';
import './style.scss';

import Text from '../../../components/text';
import Image from '../../../components/image';
import Button from '../../../components/button';

const mapStateToProps = state => ({state: getTextData(state.page.landingPageTextData)});

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.textData = this.props.state.payload;

        this.hamburger = React.createRef();
        this.leftSide = React.createRef();
    };

    componentDidMount() {
        const [wrapper] = this.hamburger.current.children;
        const [image] = wrapper.children;

        const text = this.leftSide.current;

        const hamburgerTimeline = gsap.timeline();
        const textTimeline = gsap.timeline();

        //Hamburger animation
        hamburgerTimeline.set(image, {opacity: 0, x: 1000})
            .to(image, {duration: 2.5, x: 0, opacity: 1});

        //Left-Side animation
        textTimeline.set(text, {opacity: 0})
            .to(text, {duration: 3.5, opacity: 1, delay: 0.5})
    }

    render() {
        return <ResponsiveAppContainer>
            <div className="landing-page">
                <div className="landing-page__section1">
                    <div ref={this.leftSide} className="left-side">
                        <Text children={this.textData.section1.title} type={'title'}/>
                        <Text children={this.textData.section1.textBody} type={'paragraph'}/>
                        <div className="left-side__buttons">
                            <Button children={'Read more'}
                                    style={['filled-hover']}
                                    onClick={() => console.log('clicked read more...')}/>
                        </div>
                    </div>
                    <div className="right-side" ref={this.hamburger}>
                        <Image src={'../../../../public/landing-page-svg.svg'}/>
                    </div>
                </div>
            </div>
        </ResponsiveAppContainer>
    }
}

const MainComponent = connect(mapStateToProps)(Main);

export default MainComponent;
