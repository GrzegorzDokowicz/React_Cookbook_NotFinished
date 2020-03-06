import React from 'react';
import './style.scss';

const Text = ({type, children}) => {
    switch (type) {
        case "header":
            return <h1 className={'text text--h1'}>{children}</h1>;
        case "subheader":
            return <h2 className={'text text--h2'}>{children}</h2>;
        case "title":
            return <h3 className={'text text--title'}>{children}</h3>;
        case "icon":
            return <span className={"text text--icon-description"}>{children}</span>
        case "paragraph":
            return <p className={'text text--paragraph'}>{children}</p>;
        default:
            return <span className={'text text--span'}>{children}</span>
    }
};

export default Text;
