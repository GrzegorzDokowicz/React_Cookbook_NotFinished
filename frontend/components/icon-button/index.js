import React from 'react';
import Button from "../button";
import Icons from "../icons";

const IconButton = ({icon, onClick, color}) => {
    return <Button type="icon" onClick={onClick} color={color}>
        <Icons name={icon}/>
    </Button>;
};


export default IconButton;
