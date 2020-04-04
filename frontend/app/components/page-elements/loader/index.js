import React from 'react';

import Logo from '../../../../components/logo';

//TODO add name to props and read if you should load data
const Loader = ({isLoading = false, children}) => {

    const Load = () => {
        return <Logo/>;
    };

    return <React.Fragment>
        {isLoading ? <Load/> : children}
    </React.Fragment>;
};

export default Loader;

