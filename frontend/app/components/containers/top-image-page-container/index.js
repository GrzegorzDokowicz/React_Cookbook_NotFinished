import React from 'react';

import Image from 'CoreComponents/image';

import ResponsiveAppContainer from '../responsive-app-container';

import './style.scss';

const TopImagePageContainer = ({children, src, imageType = 'full', type = 'medium'}) => {
    return <div className="top-image-page-container">
        <div className={`top-image-page-container__header top-image-page-container__header--${type}`}>
            <Image src={src} type="background" attrs={['no-repeat', imageType]}/>
        </div>
        <div className="top-image-page-container__content">
            <ResponsiveAppContainer>
                {children}
            </ResponsiveAppContainer>
        </div>
    </div>;
};

export default TopImagePageContainer;
