import React from 'react';
import range from '../../utils/range';
import IconButton from '../icon-button';
import Button from '../button';

import './style.scss';

const Pagination = ({elements, currentItem = 1, callback}) => {
    const sendCallback = (newPosition) => {
        if (callback) {
            callback(newPosition);
        }
    };

    const move = forward => {
        return () => {
            const newPosition = forward ? currentItem + 1 : currentItem - 1;
            if (newPosition < 1 || newPosition > elements) {
                return currentItem;
            }

            sendCallback(newPosition);
        }
    };
    const buttons = range(1, elements).map((currentValue, index) => {
        let pageNumber = index + 1;
        return <span key={pageNumber} className={"pagination__button"}>
            <Button children={pageNumber} onClick={() => sendCallback(pageNumber)}/>
        </span>;
    });

    const leftArrow = currentItem !== 1 && <IconButton icon={"arrow-circle-left"} onClick={move(false)}/>;
    const rightArrow = currentItem !== elements && <IconButton icon={"arrow-circle-right"} onClick={move(true)}/>;

    return <div className={"pagination"}>
        {leftArrow}
        {buttons}
        {rightArrow}
    </div>
};

export default Pagination;
