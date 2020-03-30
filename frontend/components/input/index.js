import React, {useState} from 'react';
import './style.scss';
import InputWrapper from '../input-wrapper';

const Input = ({text, name, onChange, value}) => {
    const [active, setActive] = useState(false);
    const onClick = () => {
        if (!active) {
            setActive(true);
        }
    };

    return <InputWrapper name={name} text={text} onClick={onClick}>
        <div className="input">
            <input id={name}
                name={name}
                className={`input__input ${active ? 'input__input--filled' : 'input__input--empty'}`}
                type="text"
                onBlur={() => setActive(false)}
                onChange={onChange}
                value={value}/>
        </div>
    </InputWrapper>;
};

export default Input;
