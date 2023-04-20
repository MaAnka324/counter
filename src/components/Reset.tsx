import React, {ChangeEvent, useState} from 'react';
import s from "../App.module.css";

import Button from "./Button";
import Settings from "./Set";

const Reset = () => {

    let [start, setStart] = useState<any>(3)
    let [max, setMax] = useState<any>(5)
    let [displayValue, setDisplayValue] = useState<any>(0)
    let [disableSet, setDisableSet] = useState<boolean>(false)
    let [disableInc, setDisableInc] = useState<boolean>(false)
    let [disableReset, setDisableReset] = useState<boolean>(false)

    const startDisable = (e: ChangeEvent<HTMLInputElement>) => {
        handleStartValue(+e.currentTarget.value)
        setDisableInc(true)
        setDisableReset(true)
    }
    const maxDisable = (e: ChangeEvent<HTMLInputElement>) => {
        handleMaxValue(+e.currentTarget.value)
        setDisableInc(true)
        setDisableReset(true)
    }

    const handleStartValue = (newStartValue: number) => {
        setStart(newStartValue)
        setDisableSet(false)
        if(newStartValue < 0) {
            setDisableSet(true)
            setDisplayValue('Incorrect value')
            return
        }
        if(newStartValue >=  max) {
            setDisableSet(true)
            setDisplayValue('Incorrect value')
            return
        }
        else {
            return  setDisplayValue('Click set')
        }

    }
    const handleMaxValue = (newMaxValue: number) => {
        setMax(newMaxValue)
        setDisableSet(false)
        if(newMaxValue < 0) {
            setDisableSet(true)
            setDisplayValue('Incorrect value')
            return
        }
        if(newMaxValue <= start) {
            setDisableSet(true)
            setDisplayValue('Incorrect value')
            return
        }
        else return setDisplayValue('Click set')
    }

    const handlerDisplayValue = () => {
        setDisplayValue(start)
        setDisableSet(true)
        setDisableInc(false)
        setDisableReset(false)
    }

    const onClickHandler = () => {
        if (start === max) return
        setDisplayValue(++displayValue)
        if(displayValue === max) setDisableInc(true)
    }

    const onClickHandler0 = () => {
        setDisplayValue(start)
        setDisableInc(false)
    }

    const finalClassName = `${s.number}
    ${displayValue === max ? s.number5 : displayValue === 'Incorrect value' ? s.number5 : s.number}`

    return (
        <div>
            <Settings
                max={max}
                start={start}
                handleStartValue={handleStartValue}
                handleMaxValue={handleMaxValue}
                handlerDisplayValue={handlerDisplayValue}
                onChangeStartDis={startDisable}
                onChangeMaxDis={maxDisable}
                disabled={disableSet}
            />
            <div className={s.block}>
                <div>
                    <h1 className={finalClassName}>{displayValue}</h1>
                </div>
                <div className={s.buttons}>
                    {/*<button className={s.incButton} disabled={disableInc} onClick={onClickHandler}>inc</button>*/}
                    <Button onClick={onClickHandler} disabled={disableInc} buttonName={'inc'}/>
                    {/*<button className={s.resetButton} disabled={disableReset} onClick={onClickHandler0}>reset</button>*/}
                    <Button onClick={onClickHandler0} disabled={disableReset} buttonName={'reset'}/>
                </div>
            </div>
        </div>
    );
};

export default Reset;