import React from 'react';
import './style.scss';
import Text from "../text";

const Input = ({text, name, onChange, value}) => {
    return <div className="input">
        <div className={'input__label'}>
            <Text type={'label'} htmlFor={name}>{text}</Text>
        </div>
        <input id={name} name={name} className={"input__input"} type="text" onChange={onChange} value={value}/>
    </div>
};

export default Input;
