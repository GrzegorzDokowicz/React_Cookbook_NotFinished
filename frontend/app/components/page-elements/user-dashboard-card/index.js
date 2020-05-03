import React from 'react';

import './style.scss';
import Text from '../../../../components/text';
import IconText from '../../../../components/icon-text';
import {Link} from 'react-router-dom';
import Button from '../../../../components/button';

const UserDashboardCard = ({contentArray = [], counterTitle = '', showMorePath = '/', actionButtonOnClick}) => {

    const UserDashboardLink = ({children, childrenPath}) => {
        return <li className="card__link">
            <Link to={childrenPath || '/login'}>
                <Text type={'paragraph'}>
                    {children}
                </Text></Link>
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
                <Button style={['text']} onClick={actionButtonOnClick}>
                    <Link to={'/recipe/add'}>
                        <IconText icon={'plus'} vertical={true} size={'big'}>
                            {'Add new recipe'}
                        </IconText>
                    </Link>
                </Button>
            </div>
        </div>
        <div className="card__content">
            <ul className="card__link-list">
                {(filterRecipesData(contentArray)).map((element, index) => {
                    return <UserDashboardLink key={index} childrenPath={element.path}>
                        {element.title}
                    </UserDashboardLink>;
                })}
            </ul>
            <div className="card__content-button">
                <Link to={showMorePath}>
                    <Text type={'paragraph'}>
                        {'Show more...'}
                    </Text>
                </Link>
            </div>
        </div>
    </div>;
}
;
export default UserDashboardCard;
