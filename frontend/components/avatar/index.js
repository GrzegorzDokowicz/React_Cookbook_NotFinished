import React from 'react';
import './style.scss';
import Image from '../image';


const Avatar = ({photo, size = 'normal'}) => {
    const componentSize = `avatar--${size}`;

    return <div className={`avatar ${componentSize}`}>
        <Image type={'background'} src={photo} attrs={['cover','circle']}/>
    </div>;
};

export default Avatar;
