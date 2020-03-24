import React, {useState} from 'react';
import './style.scss';

const Tab = ({component, active}) => {
    return <div className={`tabs__tab${active ? ' tabs__tab--active' : ''}`}>
            {component}
    </div>
};

const Tabs = ({data}) => {
    const [activeTab, setActiveTab] = useState(0);
    const onClick = (index) => {
        return () => {
            setActiveTab(index);
        }
    };
    const tabs = data.map(({component}, index) => <Tab key={index} active={index === activeTab} component={component}/>);
    const title = data.map(({title}, index) => <a key={index} className="tabs__title" onClick={onClick(index)}>{title}</a>);

    return <div className="tabs">
        <div className="tabs__titles">{title}</div>
        <div className="tabs__content">{tabs}</div>
    </div>
};

export default Tabs;
