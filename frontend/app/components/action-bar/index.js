import React from 'react';
import './style.scss';
import IconButton from "../../../components/icon-button";

const ActionBar = ({onClick}) => {
    const icons = [
        onClick ? <IconButton icon={"plus"} onClick={onClick}/> : ''
    ];

    return <div className="action-bar">
        {icons}
    </div>;
};

export default ActionBar;
