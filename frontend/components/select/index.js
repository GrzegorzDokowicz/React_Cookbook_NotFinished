import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Text from '../text';
import TableList from '../table-list';
import InputWrapper from '../input-wrapper';


const Select = ({title, value, onChange, data, open, name}) => {
    const [isOpen, setOpen] = useState(open);
    const [currentValue, setValue] = useState(value);
    const onClick = title => {
        if (onChange) {
            onChange(title);
        }
        setValue(title);
        setOpen(false);
    };

    return <InputWrapper text={title} name={name}>
        <div className="select">
            <div className={'select__value'} onClick={() => setOpen(!isOpen)}>
                <Text type="small-title">{currentValue}</Text>
            </div>
            <div className="select__values-container">
                <div className={`select__values ${isOpen ? 'select__values--open' : ''}`}>
                    <TableList onClick={onClick} data={data}/>
                </div>
            </div>
        </div>
    </InputWrapper>;

};


Select.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    data: PropTypes.array
};

export default Select;
