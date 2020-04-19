import React, {useState, useEffect} from 'react';
import {gsap} from 'gsap';

import './style.scss';

const AnimationContainer = ({list, targetRef, childrenSelector}) => {
    const [currentList, setCurrentList] = useState([]);

    const getTargets = () => {
        return targetRef.current.querySelectorAll(childrenSelector);
    };

    const getAnimationsConfig = () => {
        return {
            to: {
                opacity: 1,
                scale: 1,
                rotate: 0,
                stagger: {
                    each: 0.3,
                    from: 0,
                    axis: 'x'
                }
            },
            set: {scale: 2.5, rotate: -180}
        };
    };

    const renderAnimation = (elements, animationsConfig) => {
        const tl = gsap.timeline();
        if (elements && elements.length > 0) {
            tl.set(elements, animationsConfig.set).to(elements, animationsConfig.to);
        }
    };

    useEffect(() => {
        setCurrentList(list);
    }, [list]);

    useEffect(() => {
        renderAnimation(getTargets(), getAnimationsConfig());
    }, [currentList]);

    return <React.Fragment>
        {currentList}
    </React.Fragment>;
};

export default AnimationContainer;