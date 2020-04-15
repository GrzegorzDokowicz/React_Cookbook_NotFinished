import React from 'react';
import './style.scss';
import {ReactSVG} from 'react-svg';

let idSuffix = 0;

const SVGUniqueID = ({className, src, onLoad}) => {

    const _handleUniqueId = (svg) => {
        idSuffix++;
        return [...svg.querySelectorAll('[id]')].map(element => {
            let currentID = element.getAttribute('id');
            element.setAttribute('id', `${currentID}_${idSuffix}`);
        });
    };

    return <div className='svg__wrapper'>
        <ReactSVG beforeInjection={_handleUniqueId} afterInjection={onLoad} className={className} src={src}/>
    </div>;
};

export default SVGUniqueID;
