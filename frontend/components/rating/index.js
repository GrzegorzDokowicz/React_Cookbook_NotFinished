import React from 'react';
import PropTypes from "prop-types";
import './style.scss';
import Icons from '../icons';

const Rating = ({iconName, maxRating, actualRating, onClick}) => {
    const clickStar = () => {
        if(onClick) {
            onClick();
        }
    };
    const createIconsArray = ()=> {
        const iconsArray = [];
        for (let index = 0;index < maxRating; index++){
            let className = index < actualRating ?  'rating__icon rating__icon--active' : 'rating__icon'
            let icon = <div className={className} onClick={clickStar()}><Icons name={iconName} /></div>
            iconsArray.push(icon)
        }
        return iconsArray
    }

    return <div className={'rating'}>
        {createIconsArray()}
    </div>

};

export default Rating;
