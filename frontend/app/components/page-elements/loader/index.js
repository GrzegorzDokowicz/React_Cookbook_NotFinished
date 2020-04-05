import React, {useState, useEffect} from 'react';

import Logo from '../../../../components/logo';

//TODO add name to props and read if you should load data
const Loader = ({isLoading = false, children}) => {
    const [shouldRender, setRender] = useState(isLoading);
    useEffect(() => {
        if (isLoading) {
            setRender(true);
        }
        return () => {
            if (!isLoading) {
                setTimeout(() => setRender(false), 3000);
            }
        };
    }, [isLoading]);


    const Element = () => {
        return <div className={'loader'}><Logo/></div>;
    };


    return <React.Fragment>
        {shouldRender ? <Element/> : children}
    </React.Fragment>;
};

export default Loader;

