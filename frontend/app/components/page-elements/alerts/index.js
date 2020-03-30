import React from 'react';
import {connect} from 'react-redux';

import './style.scss';

const mapStateToProps = state => ({
    alerts: state.page.alerts
});

const Alerts = ({alerts}) => {
    return <div className="alerts">
        {alerts.map(({text}, key) => <div key={key}>{text}</div>)}
    </div>;
};

const AlertsComponent = connect(mapStateToProps)(Alerts);

export default AlertsComponent;
