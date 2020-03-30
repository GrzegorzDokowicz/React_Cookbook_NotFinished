import React from 'react';
import './style.scss';

import Text from 'CoreComponents/text';
import IconText from 'CoreComponents/icon-text';
import Rating from 'CoreComponents/rating';

//TODO Change maxRating actualRating in Rating component to properties
const RecipeThumbnail = ({title, time, energyValue, image}) => {
    return <div className="recipe-thumbnail">
        <div className="recipe-thumbnail__image">
            <img src={image} alt="Not found"/>
        </div>
        <div className="recipe-thumbnail__content">
            <div className="recipe-thumbnail__title">
                <Text type={'title'}>
                    {title}
                </Text>
            </div>
            <div className="recipe-thumbnail__info">
                <IconText icon="coffee">{time}</IconText>
                <IconText icon="coffee">{energyValue}</IconText>
            </div>
            <div className="recipe-thumbnail__rating">
                <Rating iconName="star" maxRating={5} actualRating={2}/>
            </div>
        </div>
    </div>;
};

export default RecipeThumbnail;
