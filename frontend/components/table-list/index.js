import React from 'react';
import Text from '../text';

import './style.scss';

const Option = ({title, onClick, selected}) => {
    const className = `table-list__element ${onClick && 'table-list__element--clickable'} ${selected && 'table-list__element--selected'}`;

    return <li className={className} onClick={() => onClick(title)}>
        <Text type="title-small">{title}</Text>
    </li>;
};

const TableList = ({data = [], onClick, selected}) => {
    const getOption = (option, index) => <Option selected={option === selected}
        onClick={onClick}
        key={index} title={option}/>;

    return <ul className={'table-list'}>
        {data.map(getOption)}
    </ul>;
};


export default TableList;
