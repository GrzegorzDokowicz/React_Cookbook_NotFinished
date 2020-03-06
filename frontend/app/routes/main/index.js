import React from 'react';
import {connect} from "react-redux";
import './style.scss';
import ResponsiveAppContainer from "../../components/responsive-app-container";

class Main extends React.Component {
    render() {
        return <ResponsiveAppContainer>
            Welcome on board!
        </ResponsiveAppContainer>
    }
}

const MainComponent = connect()(Main);

export default MainComponent;
