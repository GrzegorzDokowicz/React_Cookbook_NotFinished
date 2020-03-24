import React from 'react';
import PropTypes from "prop-types";
import './style.scss';
import Text from "../text";

const Select = ({title, value, onChange, data}) => {
    const renderOptions = options => options ? options.map((option, index) =>
        <option key={index} value={option}>{option}</option>) : [];

    return <div className="select">
        <Text type={'label'}>{title}</Text>
        <select className="select__input" onChange={onChange} value={value}>
            {renderOptions(data)}
        </select>
    </div>
};


Select.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    data: PropTypes.string
};

export default Select;
