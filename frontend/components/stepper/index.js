import React from 'react';
import PropTypes from "prop-types";
import './style.scss';

const Stepper = ({textArray = []}) => {
    const singleStep = (number) => <div key={number} className={'stepper stepper__step'}>{number}</div>;
    let stepperComponent = [];
    textArray.forEach((element, index) => stepperComponent.push([singleStep(index + 1), element]));

    console.log(stepperComponent);
    return <div className="stepper">
        {stepperComponent}
    </div>
};


export default Stepper;
