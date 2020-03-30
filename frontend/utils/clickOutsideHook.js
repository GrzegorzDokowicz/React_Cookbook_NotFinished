/*eslint-disable no-unused-vars*/
import React, { useEffect } from 'react';

const clickOutsideHook = (ref, callback) => {
    useEffect(() => {
        let timeout = null;

        const click = (event) => {
            if (!timeout) {
                if (ref.current && !ref.current.contains(event.target)) {
                    callback();
                }

                timeout = setTimeout(() => {
                    timeout = null;
                }, 50);
            }
        };

        document.addEventListener('click', click);
        return () => {
            document.removeEventListener('mousedown', click);
        };
    }, [ref]);
};

export default clickOutsideHook;