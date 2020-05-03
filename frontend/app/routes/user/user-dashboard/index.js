import React from 'react';
import {connect} from 'react-redux';
import ResponsiveAppContainer from 'AppComponents/containers/responsive-app-container';
import SideBar from '../../../components/page-elements/side-bar';

import './style.scss';
import UserDashboardCard from '../../../components/page-elements/user-dashboard-card';

const mapStateToProps = state => ({
    userData: state.user.userData
});

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <ResponsiveAppContainer>
            <div className="user-dashboard">
                <SideBar userData={this.props.userData}/>
                <div className="user-dashboard__cards-field">
                    <UserDashboardCard contentArray={this.props.userData.recipes}
                        counterTitle={'recipes'}
                        showMorePath={'/recipe-categories'}
                        actionButtonOnClick={()=>{}}
                    />
                </div>
            </div>
        </ResponsiveAppContainer>;
    }
}

const UserDashboardComponent = connect(mapStateToProps)(UserDashboard);
export default UserDashboardComponent;
