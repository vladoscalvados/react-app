import React from "react";
import './Button.scss';

export const Button = ({children, onClick}) => {
    return (
        <button className='baseButton' onClick={onClick}>children</button>
    )
}