import React from 'react';
import {connect} from 'react-redux';

import ResponsiveAppContainer from 'AppComponents/containers/responsive-app-container';

import './style.scss';


class Main extends React.Component {
    render() {
        return <ResponsiveAppContainer>
            Welcome on board!
        </ResponsiveAppContainer>;
    }
}

const MainComponent = connect()(Main);

export default MainComponent;
