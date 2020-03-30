import React from 'react';
import './style.scss';
import Text from "../text";

const Button = ({children, type = "default", onClick, style, color="primary"}) => {

    const clickButton = (event) => {
        event.preventDefault();
        if (onClick) {
            onClick(event);
        }
    };

    const buttonClassName = 'button';
    const className = (style ? style : []).map(attr => `${buttonClassName}--${attr}`).join(' ');

    return <button className={`button button--${type} ${className}`} onClick={clickButton}>
        <Text type={type === "icon" ? "icon-description" : "button"} color={color}>
            {children}
        </Text>
    </button>;
};


export default Button;
