import React from 'react';
import './style.scss';
import {ReactSVG} from 'react-svg';
import UniqueID from '../unique-id';


const Logo = ({prefix}) => {

    const _handleUniqueId = (svg) => {
        return [...svg.querySelectorAll('[id]')].map(element => {
            let currentID = element.getAttribute('id')
            console.log(currentID, prefix, !!prefix)
            element.setAttribute('id', `${prefix ? `${currentID}--${prefix}` : `${currentID}`}`)
        })
    }

    return <div className='logo__wrapper'>
        <ReactSVG beforeInjection={_handleUniqueId} className={'logo__element'} src={'Public/logo_rhombus.svg'}/>
    </div>;
};

export default Logo;
