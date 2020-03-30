import React, {useRef, useState} from 'react';
import './style.scss';
import Input from "../input";
import TableList from "../table-list";
import clickOutsideHook from "../../utils/clickOutsideHook";
import InputWrapper from "../input-wrapper";

const AutoFillBase = ({limit = 1, data = [], onSelect, title, onSearch}) => {
    const listRef = useRef(null);
    const [isActive, setActive] = useState(false);
    const [currentSearchValue, setSearchValue] = useState('');

    const onChange = $event => {
        const value = $event.currentTarget.value;
        const isSearchActive = value.length >= limit;

        if (isSearchActive && onSearch) {
            onSearch(value);
        }

        setActive(isSearchActive);
        setSearchValue(value);
    };

    const onClick = name => {
        if (onSelect) {
            onSelect(name);
        }

        setSearchValue(name);
        setActive(false);
    };

    clickOutsideHook(listRef, () => {
        if (isActive) {
            setActive(false);
        }
    });

    return <InputWrapper text={title}>
        <div className={`auto-fill ${isActive ? ' auto-fill--active' : ''}`} ref={listRef}>
            <div className="auto-fill__input-container">
                <Input onChange={onChange} value={currentSearchValue}/>
            </div>
            <div className={`auto-fill__content`}>
                <div className={`auto-fill__container`}>
                    <TableList data={data} onClick={onClick} seleceted={currentSearchValue}/>
                </div>
            </div>
        </div>
    </InputWrapper>

};

export default AutoFillBase;
