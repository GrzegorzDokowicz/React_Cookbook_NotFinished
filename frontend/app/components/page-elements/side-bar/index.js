import React from 'react';

import './style.scss';
import Text from '../../../../components/text';
import IconText from '../../../../components/icon-text';
import Avatar from '../../../../components/avatar';

const SideBar = ({userData}) =>{

    const SideBarLink = ({icon='' ,text = '', onclick}) =>{
        return <div onClick={onclick} className="side-bar__link">
            <IconText icon={icon}>
                {text}
            </IconText>
        </div>;
    };

    const userFullName = `${userData.name} ${userData.lastName}`;

    return <React.Fragment>
        <div className="side-bar">
            <div className="side-bar__bio">
                <div className="side-bar__avatar">
                    <Avatar photo={userData.photo} size={'normal'}/>
                </div>
                <div className="side-bar__user-name">
                    <Text type={'title'}>
                        {userFullName}
                    </Text>
                </div>
            </div>
            <div className="side-bar__controls-list">
                <SideBarLink icon={'atom'} text={'1 button'} onclick={()=>{console.log('click');}}/>
                <SideBarLink icon={'atom'} text={'2 button'} onclick={()=>{console.log('click');}}/>
                <SideBarLink icon={'atom'} text={'3 button'} onclick={()=>{console.log('click');}}/>
                <SideBarLink icon={'atom'} text={'4 button'} onclick={()=>{console.log('click');}}/>
            </div>
        </div>
    </React.Fragment>;
};

export default SideBar;