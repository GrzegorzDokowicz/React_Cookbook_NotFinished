import React from 'react';
import Stepper from '../../../components/stepper';
import Text from '../../../components/text';

let mockSteps = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, totam!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, totam!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, totam!'
];

const RecipeSteps = () => {
    return <div className="recipe-steps">
        <Text type={"subheader"}>Kroki do przygotowania</Text>
        <Stepper textArray={mockSteps}/>
    </div>
};

export default RecipeSteps;
