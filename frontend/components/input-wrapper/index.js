import React from 'react';
import './style.scss';
import Text from "../text";

const InputWrapper = ({text, name, children, onClick}) => {
    return <div className="input-wrapper" onClick={onClick}>
        {text ? <div className={'input-wrapper__label'}><Text type={'label'} htmlFor={name}>{text}</Text></div> : ''}
        {children}
    </div>
};

export default InputWrapper;
