import React, {useState, useEffect, useRef, forwardRef} from 'react';
import {gsap} from 'gsap'
import './style.scss'

import SVGUniqueID from 'CoreComponents/svg-unique-id';

const Element = forwardRef((props, ref) => {
    return <div ref={ref} className={'loader'}><SVGUniqueID className={'loader__logo'} src={'Public/logo_rhombus.svg'}/>
    </div>
})


//TODO add name to props and read if you should load data
const Loader = ({isLoading = false, children}) => {
    const currentLoaderSVG = useRef();
    const [isRendering, setRender] = useState(false);
    const [isRendered, setIsRendered] = useState(true);
    let rhombus = null;


    useEffect(() => {
        setRender(isLoading);
    }, [isLoading]);

    useEffect(() => {
        if (isRendering && isRendered) {
            _handleAnimation();
        }
    }, [isRendering]);

    // It have to be to properly change state inside callbacks
    const renderRef = useRef(isRendering);
    renderRef.current = isRendering;

    const animationCallback = () => {
        console.log(renderRef.current)
        if (renderRef.current) {
            _handleAnimation();
        } else {
            setIsRendered(false);
        }
    };
    const _handleAnimation = () => {
        if (currentLoaderSVG && currentLoaderSVG.current !== undefined) {
            rhombus = currentLoaderSVG.current.querySelector('[id^=rhombus]')
            const rhombusTimeline = gsap.timeline()
            const animationConfig = {
                from: {rotate: 0},
                to: {rotate: 90, transformOrigin: 'center center'}
            };
            rhombusTimeline.from(rhombus, animationConfig.from).to(rhombus, animationConfig.to);
            rhombusTimeline.eventCallback('onComplete', ()=> {
                animationCallback();
            })
        }
    };


    return <React.Fragment>
        {isRendered ? <Element ref={currentLoaderSVG}/> : children}
    </React.Fragment>
};

export default Loader;

