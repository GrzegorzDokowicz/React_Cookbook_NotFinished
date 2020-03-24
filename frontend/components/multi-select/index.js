import React, {useState} from 'react';
import PropTypes from "prop-types";
import './style.scss';
import Text from "../text";
import AutoFill from "../auto-fill";

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

    return <div className="multi-select">
        <Text type={'label'}>{title}</Text>
        <div className="multi-select__elements">
            {results.map((element, index) => <div key={index} className="multi-select__element">{element}</div>)}
        </div>
        <AutoFill data={data} onSelect={onSelectCallback}/>
    </div>
};


MultiSelect.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    data: PropTypes.array
};

export default MultiSelect;
