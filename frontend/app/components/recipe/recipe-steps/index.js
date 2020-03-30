import React from 'react';

import Stepper from 'CoreComponents/stepper';
import Text from 'CoreComponents/text';

const RecipeSteps = ({steps}) => {
    return <div className="recipe-steps">
        <Text type={'subheader'}>Kroki do przygotowania</Text>
        <Stepper textArray={steps}/>
    </div>;
};

export default RecipeSteps;
