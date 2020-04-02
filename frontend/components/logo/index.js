import React from 'react';
import './style.scss';
import {ReactSVG} from 'react-svg'

const Logo = () => {

    return <div className='logo__wrapper'>
        <ReactSVG className={'logo__element'} src={'Public/logo.svg'} />
    </div>;
};

export default Logo;
