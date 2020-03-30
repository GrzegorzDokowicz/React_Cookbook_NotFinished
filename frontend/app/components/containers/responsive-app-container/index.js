import React from 'react';

import './style.scss';

const ResponsiveAppContainer = ({children}) => {
    return <div className="responsive-app-container">
        {children}
    </div>;
};

export default ResponsiveAppContainer;
