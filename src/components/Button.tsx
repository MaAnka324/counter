import React from 'react';
import s from "../App.module.css";

type Button = {
    onClick: () => void
    disabled: boolean
    buttonName: string

}

const Button = (props: Button) => {
    return (
        <div>
            <button
                className={s.incButton}
                onClick={props.onClick}
                disabled={props.disabled}
            >{props.buttonName}</button>
        </div>
    );
};

export default Button;