import React, {useState} from 'react';
import PropTypes from "prop-types";
import './style.scss';
import AutoFill from "../auto-fill";
import InputWrapper from "../input-wrapper";

const MultiSelect = ({title, values = [], data, onSelect}) => {
    const [results, setResults] = useState(values && values.length > 0 ? values : []);

    const onSelectCallback = (element) => {
        setResults([
            ...results,
            element
        ]);

        if (onSelect) {
            onSelect(results);
        }
    };

    return <InputWrapper text={title}>
        <div className="multi-select">
            <AutoFill data={data} onSelect={onSelectCallback}/>
        </div>
    </InputWrapper>

};


MultiSelect.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    data: PropTypes.array
};

export default MultiSelect;
