import React from 'react';

import './style.scss';
import Text from '../../../../components/text';

const UserDashboardCard = ({contentArray = []}) => {

    const UserDashboardLink = ({children})=>{
        return <li className="card__link">
            <Text type={'paragraph'}>
                {children}
            </Text>
        </li>;
    };

    return <div className="user-dashboard__card">
        <div className="card__action-field">
            <div className="card__counter"></div>
            <div className="card__button"></div>
        </div>
        <ul className="card__link-list">
            {(contentArray).map((element,index) => {
                return <UserDashboardLink key={index}>{element}</UserDashboardLink>;
            })}
        </ul>
    </div>;
};

export default UserDashboardCard;
