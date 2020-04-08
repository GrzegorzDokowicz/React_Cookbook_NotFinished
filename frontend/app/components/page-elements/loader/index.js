import React, {useState, useEffect, useRef} from 'react';

import Logo from 'CoreComponents/logo';

const Element = () => {
    return <div className={'loader'}><Logo prefix={'loader'}/></div>;
};

//TODO add name to props and read if you should load data
const Loader = ({isLoading = false, children}) => {
    const [isRendering, setRender] = useState(false);
    const [isRendered, setIsRendered] = useState(true);

    useEffect(() => {
        setRender(isLoading);
    }, [isLoading]);

    useEffect(() => {
        if (isRendering && isRendered) {
            setIsRendered(false);
            _handleAnimation();
        }
    }, [isRendering]);

    // It have to be to properly change state inside callbacks
    const renderRef = useRef(isRendering);
    renderRef.current = isRendering;

    const animationCallback = () => {
        if (renderRef.current) {
            _handleAnimation();
        } else {
            setIsRendered(true);
        }
    };
    const _handleAnimation = () => {
        //todo animations - onComplete - wywolaj ponownie _handleAnimation

        //todo If/Else musi pojsc na onComplete
        setTimeout(animationCallback, 1000);
    };
    
    return <React.Fragment>
        {!isRendered ? <Element/> : children}
    </React.Fragment>;
};

export default Loader;

