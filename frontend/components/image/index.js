import React from 'react';
import './style.scss';

const Image = ({src, type = "image", attrs}) => {
    const backgroundStyles = {
        backgroundImage: `url(${src})`
    };
    const backgroundClass = 'image__background-image';
    const className = (attrs ? attrs : []).map(attr => `${backgroundClass}--${attr}`).join(' ');

    const getObject = () => {
        switch(type) {
            case 'background':
                return <div className={`${backgroundClass} ${className}`} style={backgroundStyles}>
                </div>;
            case 'image':
            default:
                return <img className="image__image" src={src} alt={"Image not found"}/>;
        }
    };

    return <div className="image">
        {getObject()}
    </div>
};

export default Image;
