import React from 'react';
import {connect} from 'react-redux';
import ResponsiveAppContainer from 'AppComponents/containers/responsive-app-container';
import SideBar from '../../../components/page-elements/side-bar';

import './style.scss';
import UserDashboardCard from '../../../components/page-elements/user-dashboard-card';

const mapStateToProps = state =>({
    userData: state.user.userData
});

class UserDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    filterRecipesData(data){
        //TODO - it have to slice data according to last added
        if(data && Array.isArray(data)){
            return data.slice(0, 3);
        }
    }

    render() {
        return <ResponsiveAppContainer>
            <div className="user-dashboard">
                <SideBar userData={this.props.userData}/>
                <div className="user-dashboard__cards-field">
                    <UserDashboardCard contentArray={this.filterRecipesData(this.props.userData.recipes)}/>
                </div>
            </div>
        </ResponsiveAppContainer>;
    }
}

const UserDashboardComponent = connect(mapStateToProps)(UserDashboard);
export default UserDashboardComponent;
