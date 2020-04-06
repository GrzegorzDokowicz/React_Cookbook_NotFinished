import React, {useState, useEffect} from 'react';

import Text from 'CoreComponents/text';
import StepForm from 'AppComponents/page-elements/step-form';

import './style.scss';

const RecipeStepsForm = ({steps = [], onChange}) => {
    const [currentSteps, setSteps] = useState(steps);
    const addStep = (step) => {
        setSteps([
            ...currentSteps,
            step
        ]);
    };

    useEffect(() => {
        if (onChange) {
            onChange(currentSteps);
        }
    }, [currentSteps]);

    return <div className="recipe-steps-form">
        <div className="recipe-steps-form__title">
            <Text type={'subheader'}>Dodaj kroki</Text>
        </div>
        <div className="recipe-steps-form__form">
            <StepForm addStep={addStep}/>
        </div>
    </div>;
};

export default RecipeStepsForm;
