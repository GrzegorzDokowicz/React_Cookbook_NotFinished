import React, {useState} from 'react';
import './style.scss';
import Text from "../text";

const Tab = ({component, active}) => {
    return <div className={`tabs__tab${active ? ' tabs__tab--active' : ''}`}>
            {component}
    </div>
};

const Tabs = ({data, hasPadding=true}) => {
    const [activeTab, setActiveTab] = useState(0);
    const onClick = (index) => {
        return () => {
            setActiveTab(index);
        }
    };
    const tabs = data.map(({component}, index) => <Tab key={index} active={index === activeTab} component={component}/>);
    const title = data.map(({title}, index) => <a key={index} className="tabs__title" onClick={onClick(index)}><Text type={"title-small"}>{title}</Text></a>);

    return <div className={`tabs${hasPadding ? ' tabs--padding' : ''}`}>
        <div className="tabs__titles">{title}</div>
        <div className="tabs__content">{tabs}</div>
    </div>
};

export default Tabs;
