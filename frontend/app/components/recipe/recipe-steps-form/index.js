import React, {useState, useEffect} from 'react';

import Text from 'CoreComponents/text';

import StepForm from '../../page-elements/step-form';

const RecipeStepsForm = ({steps = [], onChange}) => {
    const [currentSteps, setSteps] = useState(steps);
    const addStep = (step) => {
        setSteps([
            ...currentSteps,
            step
        ]);
    };

    useEffect(() => {
        if(onChange) {
            onChange(currentSteps);
        }
    }, [currentSteps]);

    return <div className="recipe-steps">
        <Text type={'subheader'}>Dodaj kroki</Text>
        <StepForm addStep={addStep}/>
    </div>;
};

export default RecipeStepsForm;