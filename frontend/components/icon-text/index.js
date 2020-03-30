import React from 'react';
import './style.scss';
import Text from "../text";
import Icons from "../icons";

const IconText = ({type = "icon", children, icon, vertical = false, size = "normal"}) => {
    const modifier = vertical ? "icon-text--vertical" : '';
    const iconSize = `icon-text__icon--${size}`;

    return <div className={`icon-text ${modifier}`}>
        <div className={`icon-text__icon ${iconSize}`}>
            <Icons name={icon}/>
        </div>
        <Text type={type}>{children}</Text>
    </div>
};

export default IconText;
