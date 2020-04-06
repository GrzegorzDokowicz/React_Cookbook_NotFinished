import React from 'react';

import './style.scss';

const ResponsiveAppContainer = ({children, style = {}, className=''}) => {
    return <div className={`responsive-app-container ${className}`} style={style}>
        {children}
    </div>;
};

export default ResponsiveAppContainer;
