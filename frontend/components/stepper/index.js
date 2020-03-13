import React from 'react';
import './style.scss';
import Text from '../text';

const Stepper = ({textArray = []}) => {
    const SingleStep = ({number, children}) => <div key={number} className={'stepper__step'}>
        <div className={'stepper__step-index'}>{number + 1}</div>
        <Text>{children}</Text>
    </div>;

    return <div className="stepper">
        {textArray.map((element, index) => <SingleStep number={index}>{element}</SingleStep>)}
    </div>
};


export default Stepper;
