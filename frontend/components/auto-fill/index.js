import React, {useState} from 'react';
import './style.scss';
import Input from "../input";
import Text from "../text";

const FoundElement = ({onClick, children}) => <a onClick={onClick}>
    <div className="auto-fill__cell" onClick={onClick}>
        <Text type={"label"}>{children}</Text>
    </div>
</a>;


const AutoFill = ({limit = 1, data = [], onSelect}) => {
    const [listData, setListData] = useState([]);
    const [isActive, setActive] = useState(false);
    const onChange = $event => {
        const value = $event.currentTarget.value;
        const isActive = value.length > limit;

        if (isActive) {
            setListData(data.filter(element => element.toString().toLowerCase().indexOf(value) !== -1));
        }

        setActive(isActive);
    };
    const onClick = name => {
        return () => {
            setActive(false);

            if (onSelect) {
                onSelect(name);
            }
        }
    };

    return <div className="auto-fill">
        <Input onChange={onChange}/>
        <div className={`auto-fill__container${isActive ? ' auto-fill__container--active' : ''}`}>
            {
                listData.map(element => <FoundElement key={element} onClick={onClick(element)} children={element}/>)
            }
        </div>
    </div>
};

export default AutoFill;
