import React from 'react';
import {connect} from 'react-redux';

//import './style.scss';

const mapStateToProps = state => ({
    alerts: state.page.alerts
});

/**
 * Base application component
 */
const Alerts = ({alerts}) => {
    return <div className="alerts">
        {alerts.map(({text}) => <div>{text}</div>)}
    </div>;
};

const AlertsComponent = connect(mapStateToProps)(Alerts);

export default AlertsComponent;
