import React, {ChangeEvent} from 'react';
import s from "../App.module.css";
import Button from "./Button";
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/hooks/hooks";
import {max, set, start} from "../redux/counterReducer";


const Settings = () => {

    const startValue = useAppSelector<number>(state => state.counter.startValue)

    const maxValue = useAppSelector<number>(state => state.counter.maxValue)

    const disableSet = useAppSelector<boolean>(state => state.counter.disableSet)

    const dispatch = useAppDispatch()
    const handlerDisplayValue = () => {
        dispatch(set())
    }

    const startDisable = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(start(+e.currentTarget.value))
    }

    const maxDisable = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(max(+e.currentTarget.value))
    }


    const finalClassName = `${s.number}`
    const inputMax = maxValue <= startValue ? `${s.inputRed}` : ''
    const inputStart = startValue < 0 ? `${s.inputRed}` : maxValue <= startValue ? `${s.inputRed}` : ''

    return (
        <div className={s.block}>
            <div className={finalClassName}>
                <span>max value</span>
                <input className={inputMax}
                       value={maxValue}
                       type="number"
                       onChange={maxDisable}
                />
            </div>
            <div className={finalClassName}>
                <span>start value</span>
                <input className={inputStart} value={startValue} type={"number"} onChange={startDisable}/>
            </div>
            <div className={s.buttons}>
                <NavLink to='/reset' ><Button onClick={handlerDisplayValue} disabled={disableSet} buttonName={'set'}/></NavLink>
            </div>
        </div>
    );
};

export default Settings;
