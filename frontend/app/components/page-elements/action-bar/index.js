import React from 'react';

import IconButton from 'CoreComponents/icon-button';
import Input from 'CoreComponents/input';

import './style.scss';

const ActionBar = ({onClick, onSearch}) => {
    const icons = [
        onClick ? <IconButton color={'secondary'} key={0} icon={'plus'} onClick={onClick}/> : ''
    ];

    const searchElement = onSearch ? <Input onChange={onSearch} text={'Search by name: '} name={'search'}/> : '';

    return <div className="action-bar">
        <div className={'action-bar__search'}>
            {searchElement}
        </div>
        <div className={'action-bar__icons'}>
            {icons}
        </div>
    </div>;
};

export default ActionBar;
