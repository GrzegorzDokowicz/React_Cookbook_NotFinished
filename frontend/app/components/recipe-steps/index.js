import React from 'react';
import Stepper from '../../../components/stepper';
import Text from '../../../components/text';

const step1 = <Text key={4} type={'paragraph'}
                    children={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, totam!'}/>
const step2 = <Text key={5} type={'paragraph'}
                    children={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet beatae delectus magnam velit! Ad consequatur deleniti facere laboriosam laborum reiciendis voluptates. Aliquid blanditiis dicta est explicabo impedit iusto perspiciatis placeat vitae voluptatibus! Assumenda at, eaque laboriosam molestiae reprehenderit sed sequi totam vel. Cum, incidunt.'}/>
const step3 = <Text key={6} type={'paragraph'}
                    children={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam explicabo ipsum neque possimus, praesentium!'}/>
let mockSteps = [step1, step2, step3];

const RecipeSteps = () => {
    return <div className="recipe-steps">Recipe steps
        <Stepper textArray={mockSteps}/>
    </div>
};

export default RecipeSteps;
