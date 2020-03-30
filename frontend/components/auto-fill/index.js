import React, {useState} from 'react';

import AutoFillBase from '../auto-fill-base';

const AutoFill = ({limit = 1, data = [], onSelect, matchCase = false, title}) => {
    const getStringValue = value => matchCase ? value.toString() : value.toString().toLocaleLowerCase();
    const [listData, setListData] = useState(data);

    const runList = value => {
        const listData = data.filter(element => getStringValue(element).indexOf(getStringValue(value)) !== -1)
            .sort((a, b) => a >= b ? 1 : -1);

        setListData(listData);
    };

    return <AutoFillBase data={listData}
        limit={limit}
        title={title}
        onSearch={runList}
        onSelect={onSelect}/>;

};

export default AutoFill;
