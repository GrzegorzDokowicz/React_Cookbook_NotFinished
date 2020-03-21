import React from 'react';
import './style.scss';
import Text from "../text";
import Icons from "../icons";

const IconText = ({type = "icon", children, icon, vertical = false, size = "normal"}) => {
    const modifier = vertical ? "icon-text--vertical" : ''
    let iconSize ='';
    switch (size) {
        case "big":
            iconSize = "icon-text__icon--big";
            break;
        case "small":
            iconSize = "icon--text__icon-small";
            break;
        default:
            iconSize = 'icon--text__icon-normal'
    }

    return <div className={`icon-text ${modifier}`}>
        <div className={`icon-text__icon ${iconSize}`}>
            <Icons name={icon}/>
        </div>
        <Text type={type}>{children}</Text>
    </div>
};

export default IconText;
