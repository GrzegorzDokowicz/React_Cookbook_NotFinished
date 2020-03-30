import React, {useState} from 'react';
import PropTypes from "prop-types";
import './style.scss';
import InputWrapper from "../input-wrapper";

const Checkbox = ({title, active, onClick}) => {
    const [isActive, setActive] = useState(active);
    const onClickAction = () => {
        setActive(!isActive);
        onClick(isActive);
    };

    return <InputWrapper text={title}>
        <div className="checkbox">
            <div className={`checkbox__checkbox-input${active ? ' checkbox__checkbox-input--active' : ''}`}
                 onClick={onClickAction}>
            </div>
        </div>
    </InputWrapper>

};

Checkbox.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
};

export default Checkbox;
