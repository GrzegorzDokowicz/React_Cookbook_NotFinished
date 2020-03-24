import React from 'react';
import Stepper from '../../../components/stepper';
import Text from '../../../components/text';

const RecipeSteps = ({steps}) => {
    console.log(steps);
    return <div className="recipe-steps">
        <Text type={"subheader"}>Kroki do przygotowania</Text>
        <Stepper textArray={steps}/>
    </div>
};

export default RecipeSteps;
