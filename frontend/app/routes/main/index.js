import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import ResponsiveAppContainer from "../../components/responsive-app-container";
import {registerAlert} from "../../data-layer/page/actions";

class Main extends React.Component {
    render() {
        this.props.dispatch(registerAlert("Main!"));

        setTimeout(() => {
            this.props.dispatch(registerAlert("Main 2!"));
        }, 1000);

        setTimeout(() => {
            this.props.dispatch(registerAlert("Main 3!"));
        }, 2000);

        setTimeout(() => {
            this.props.dispatch(registerAlert("Main 4!"));
        }, 5000);

        return <ResponsiveAppContainer>
            Welcome on board!
        </ResponsiveAppContainer>
    }
}

const MainComponent = connect()(Main);

export default MainComponent;
