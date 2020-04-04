import React from 'react';

import Logo from '../../../../components/logo';


const Loader = ({isLoading = false, name = '', children}) => {

    const Load = () => {
        return <Logo/>
    };

    return <React.Fragment>
        {isLoading ? <Load/> : children}
    </React.Fragment>
};

export default Loader;

