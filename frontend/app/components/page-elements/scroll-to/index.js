import React, {useRef} from 'react';
import {connect} from 'react-redux';

import {scrollTo as scrollToAction} from '../../../data-layer/page/actions';

const mapStateToProps = state => ({
    scrollTo: state.page.scrollTo.state,
    scrollName: state.page.scrollTo.name
});

const scrollTo = ({scrollTo, dispatch, name, scrollName}) => {
    const myRef = useRef(null);

    if (scrollTo && name === scrollName) {
        window.scrollTo(0, myRef.current.offsetTop);

        dispatch(scrollToAction({
            state: false,
            name
        }));
    }

    return <div ref={myRef}/>;
};

const ScrollToComponent = connect(mapStateToProps)(scrollTo);
export default ScrollToComponent;
