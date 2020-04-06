import React from 'react';
import {connect} from 'react-redux';
import ResponsiveAppContainer from 'AppComponents/containers/responsive-app-container';

import './style.scss';

class Login extends React.Component {
    render() {
        return <ResponsiveAppContainer>
            <div className="login">
                Login
            </div>
        </ResponsiveAppContainer>;
    }
}

const LoginComponent = connect()(Login);
export default LoginComponent;
