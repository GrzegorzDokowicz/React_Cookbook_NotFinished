import React from 'react';
import './style.scss';

import Text from "../text";
import IconText from "../icon-text";

const RecipeThumbnail = ({title, time, energyValue}) => {
    return <div className="recipe-thumbnail">
        <div className="recipe-thumbnail__image">
            <img src={""} alt="Not found"/>
        </div>
        <div className="recipe-thumbnail__content">
            <div className="recipe-thumbnail__title">
                <Text type={"title"}>
                    {title}
                </Text>
            </div>
            <div className="recipe-thumbnail__info">
                <IconText icon="coffee">{time}</IconText>
                <IconText icon="coffee">{energyValue}</IconText>
            </div>
        </div>
    </div>;
};

export default RecipeThumbnail;
