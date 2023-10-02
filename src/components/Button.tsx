import React from 'react';
import s from "../App.module.css";

type ButtonPropsType = {
    onClick?: () => void
    disabled?: boolean
    classname?: string
    buttonName: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button
                className={`${s.incButton} ${props.classname ? props.classname : ''}`}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.buttonName}
            </button>
        </div>
    );
};

export default Button;