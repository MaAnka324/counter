import React, {ChangeEvent} from 'react';
import s from "../App.module.css";
import Button from "./Button";


type SettingsType = {
    start: number
    max: number
    handleStartValue:(newStartValue:number)=>void
    handleMaxValue:(newMaxValue:number)=>void
    handlerDisplayValue:()=>void
    onChangeStartDis: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxDis: (e: ChangeEvent<HTMLInputElement>) => void
    disabled: boolean
}

const Settings = (props: SettingsType) => {

    const finalClassName = `${s.number}`

    return (
        <div className={s.block}>
            <div className={finalClassName}>
                <span>max value</span>
                <input value={props.max} type={"number"} onChange={props.onChangeMaxDis} />
            </div>
            <div className={finalClassName}>
                <span>start value</span>
                <input value={props.start} type={"number"} onChange={props.onChangeStartDis}/>
            </div>
            <div className={s.buttons}>
                <Button onClick={props.handlerDisplayValue} disabled={props.disabled} buttonName={'set'}/>
            </div>
        </div>
    );
};

export default Settings;
