import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import ResponsiveAppContainer from "../../components/responsive-app-container";
import Image from '../../../components/image';
import Text from '../../../components/text';
import Button from '../../../components/button';

class Main extends React.Component {
    render() {
        return <ResponsiveAppContainer>
            <div className={'landing-page'}>
                <div className="landing-page__titles">
                    <Text type={'subheader'} children={"All you need"} color={''}/>
                    <Text type={'header'} children={"is Cookbook"} color={''}/>
                    <div className={'buttons-section'}><Button children={'Get started'} style={['filed-hover']}/></div>

                </div>
                <div className="landing-page__background-wrapper">
                    <Image src={'../../../../public/landing_page_img.jpg'}
                           type={'background'} attrs={['cover', 'no-repeat']}/>
                </div>
            </div>
        </ResponsiveAppContainer>
    }
}

const MainComponent = connect()(Main);

export default MainComponent;
