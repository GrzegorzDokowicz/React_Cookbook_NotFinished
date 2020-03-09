import React from 'react';
import Button from "../button";
import Icons from "../icons";

const IconButton = ({icon, onClick}) => {
    return <Button type="icon" onClick={onClick}>
        <Icons name={icon}/>
    </Button>;
};


export default IconButton;
