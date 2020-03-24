import React from 'react';
import './style.scss';
import ActionBar from "../action-bar";
import ResponsiveAppContainer from "../responsive-app-container";
import Text from "../../../components/text";


const ActionBarPageContainer = ({onSearch, onClick, children, title}) => {
    return <div className="action-bar-page-container">
        <ResponsiveAppContainer>
            <div className="action-bar-page-container__header">
                <Text type={"header"}>
                    {title}
                </Text>
            </div>
        </ResponsiveAppContainer>
        <ActionBar onClick={onClick} onSearch={onSearch}/>
        <div className="action-bar-page-container__content">
            <ResponsiveAppContainer>
                {children}
            </ResponsiveAppContainer>
        </div>
    </div>
};

export default ActionBarPageContainer;
