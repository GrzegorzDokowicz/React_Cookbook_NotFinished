import React from 'react';

import './style.scss';
import Text from '../../../../components/text';
import IconText from '../../../../components/icon-text';

const UserDashboardCard = ({contentArray = [], counterTitle = ''}) => {

    const UserDashboardLink = ({children}) => {
        return <li className="card__link">
            <Text type={'paragraph'}>
                {children}
            </Text>
        </li>;
    };

    const filterRecipesData = (data) => {
        //TODO - it have to slice data according to last added
        if (data && Array.isArray(data)) {
            return data.slice(0, 3);
        }
    };

    const counter = () => {
        const elements = [
            {
                text: 'You have',
                type: 'title-small'
            },
            {
                text: contentArray.length,
                type: 'subheader'
            },
            {
                text: counterTitle,
                type: 'title-small'
            }
        ];

        return elements.map((element, index) => <Text key={index} type={element.type}>{element.text}</Text>);
    };


    return <div className="user-dashboard__card">
        <div className="card__action-field">
            <div className="card__counter">
                {counter()}
            </div>
            <div className="card__action-button">
                <IconText icon={'plus'} vertical={true} size={'big'}>
                    {'Add new recipe'}
                </IconText>
            </div>
        </div>
        <div className="card__content">
            <ul className="card__link-list">
                {(filterRecipesData(contentArray)).map((element, index) => {
                    return <UserDashboardLink key={index}>{element}</UserDashboardLink>;
                })}
            </ul>
            <div className="card__content-button">
                <Text type={'paragraph'}>
                    {'Show more...'}
                </Text>
            </div>
        </div>
    </div>;
};
export default UserDashboardCard;
