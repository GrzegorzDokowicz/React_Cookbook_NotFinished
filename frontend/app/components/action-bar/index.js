import React from 'react';
import './style.scss';
import IconButton from "../../../components/icon-button";
import Input from "../../../components/input";

const ActionBar = ({onClick, onSearch}) => {
    const icons = [
        onClick ? <IconButton key={0} icon={"plus"} onClick={onClick}/> : ''
    ];

    const searchElement = onSearch ? <Input onChange={onSearch} text={"Search by name: "} name={'search'}/> : '';

    return <div className="action-bar">
        <div className={"action-bar__search"}>
            {searchElement}
        </div>
        <div className={"action-bar__icons"}>
            {icons}
        </div>
    </div>;
};

export default ActionBar;
