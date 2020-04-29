import React from 'react';
import {connect} from 'react-redux';
import ResponsiveAppContainer from 'AppComponents/containers/responsive-app-container';
import SideBar from '../../../components/page-elements/side-bar';

import './style.scss';

const mapStateToProps = state =>({
    userData: state.user.userData
});

//TODO usun dashboard-wrapper przy porzadkowaniu struktury
class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ResponsiveAppContainer>
            <SideBar userData={this.props.userData}/>
            <div className="dashboard-wrapper">
            </div>
        </ResponsiveAppContainer>;
    }
}

const LoginComponent = connect(mapStateToProps)(Login);
export default LoginComponent;
