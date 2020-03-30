import React from 'react';

import Text from "CoreComponents/text";

import ActionBar from "../../page-elements/action-bar";
import ResponsiveAppContainer from "../responsive-app-container";

import './style.scss';

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
