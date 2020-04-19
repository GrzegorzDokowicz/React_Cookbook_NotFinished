import React, {useState, useEffect, useRef, forwardRef} from 'react';
import {gsap} from 'gsap';
import './style.scss';

import SVGUniqueID from 'CoreComponents/svg-unique-id';

//TODO add name to props and read if you should load data - integration with redux/store
const Loader = ({isLoading = false, children}) => {
    const currentLoaderSVG = useRef();
    const [isRendering, setRender] = useState(false);
    // const [isRendered, setIsRendered] = useState(true);

    const LoaderElement = forwardRef((props, ref) => {
        return <div ref={ref} className={'loader'}>
            <SVGUniqueID onLoad={_handleAnimation} className={'loader__logo'} src={'Public/logo_rhombus.svg'}/>
        </div>;
    });


    useEffect(() => {
        setRender(isLoading);
    }, [isLoading]);

    // useEffect(() => {
    //     if (isRendering && isRendered) {
    //         _handleAnimation();
    //     }
    // }, [isRendering]);

    // It have to be to properly change state inside callbacks
    const renderRef = useRef(isRendering);
    renderRef.current = isRendering;


    const _handleAnimation = () => {
        if (!currentLoaderSVG || !currentLoaderSVG.current) {
            return;
        }

        const rhombusTemp = currentLoaderSVG.current.querySelector('[id^=rhombus]');

        const rhombusTimeline = gsap.timeline({repeat: -1, paused:false});
        const animationConfig = {
            from: {duration: 1, rotate: -360, transformOrigin: 'center center', ease: 'power2.inOut'}
        };
        rhombusTimeline.from(rhombusTemp, animationConfig.from);
        rhombusTimeline.eventCallback('onStart', ()=>{
            if(!renderRef.current){
                rhombusTimeline.kill();
                gsap.set(currentLoaderSVG.current, {display:'none'});
            }
        });
    };

    return <React.Fragment>
        <LoaderElement ref={currentLoaderSVG}/>
        {children}
    </React.Fragment>;
};

export default Loader;

