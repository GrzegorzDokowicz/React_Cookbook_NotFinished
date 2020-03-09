import React from 'react';
import './style.scss';
import Text from "../text";
import Icons from "../icons";

const IconText = ({type = "icon", children, icon}) => {
    return <div className="icon-text">
        <div className="icon-text__icon">
            <Icons name={icon}/>
        </div>
        <Text type={type}>{children}</Text>
    </div>
};

export default IconText;
