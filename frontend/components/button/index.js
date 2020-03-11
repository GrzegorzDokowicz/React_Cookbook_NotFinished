import React from 'react';
import './style.scss';
import Text from "../text";

const Button = ({children, type = "default", onClick}) => {
    const clickButton = () => {
        if(onClick) {
            onClick();
        }
    };

    return <button className={`button button--${type}`} onClick={clickButton}>
        <Text type={type === "icon" ? "title" : "button"}>
            {children}
        </Text>
    </button>;
};


export default Button;