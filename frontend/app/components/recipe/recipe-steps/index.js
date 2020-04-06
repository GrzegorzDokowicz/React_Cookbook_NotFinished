import React from 'react';

import Stepper from 'CoreComponents/stepper';
import Text from 'CoreComponents/text';

import './style.scss';

const RecipeSteps = ({steps}) => {
    const hasContent = steps && steps.length > 0;
    const noContent = <Text type={'title-small'}>Nie zdefiniowano krokow.</Text>;
    const content = hasContent ? <Stepper textArray={steps}/> : noContent;

    return <div className="recipe-steps">
        <div className="recipe-steps__title">
            <Text type={'subheader'}>Kroki do przygotowania</Text>
        </div>
        <div className={`recipe-steps__content ${!hasContent ? 'recipe-steps__content--items' : ''}`}>
            {content}
        </div>
    </div>;
};

export default RecipeSteps;
