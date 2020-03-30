import React from 'react';
import './style.scss';
import Text from '../text';

const Button = ({children, type = 'default', onClick}, color='primary') => {
    const clickButton = (event) => {
        event.preventDefault();

        if (onClick) {
            onClick(event);
        }
    };

    return <button className={`button button--${type}`} onClick={clickButton}>
        <Text type={type === 'icon' ? 'title' : 'button'} color={color}>
            {children}
        </Text>
    </button>;
};


export default Button;
