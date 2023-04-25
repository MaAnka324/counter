import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "../App.module.css";
import Button from "./Button";
import Settings from "./Set";

type ResetType = {
    displayValue: string
    onClickHandler: () => void
    onClickHandler0: () => void
    disableInc: boolean
    disableReset: boolean
    max: string
}

const Reset = (props: ResetType) => {

    // let [start, setStart] = useState<any>(JSON.parse(localStorage.getItem('startValue') ?? '0'))
    // let [max, setMax] = useState<any>(JSON.parse(localStorage.getItem('maxValue') ?? '5'))
    // let [displayValue, setDisplayValue] = useState<any>( JSON.parse(localStorage.getItem('counterValue') ?? '0'))//localStorage.getItem('counterValue') ? localStorage.getItem('counterValue'): '0'
    // let [disableSet, setDisableSet] = useState<boolean>(true)
    // let [disableInc, setDisableInc] = useState<boolean>(false)
    // let [disableReset, setDisableReset] = useState<boolean>(false)
    //
    // useEffect( () => {
    //     localStorage.setItem('counterValue', JSON.stringify(displayValue))
    // }, [displayValue] )
    //
    // useEffect( () => {
    //     localStorage.setItem('startValue', JSON.stringify(start))
    // }, [start] )
    //
    // useEffect( () => {
    //     localStorage.setItem('maxValue', JSON.stringify(max))
    // }, [max] )
    //
    // const startDisable = (e: ChangeEvent<HTMLInputElement>) => {
    //     handleStartValue(+e.currentTarget.value)
    //     setDisableInc(true)
    //     setDisableReset(true)
    // }
    // const maxDisable = (e: ChangeEvent<HTMLInputElement>) => {
    //     handleMaxValue(+e.currentTarget.value)
    //     setDisableInc(true)
    //     setDisableReset(true)
    // }
    //
    // const handleStartValue = (newStartValue: number) => {
    //     setStart(newStartValue)
    //     setDisableSet(false)
    //     if(newStartValue < 0) {
    //         setDisableSet(true)
    //         setDisplayValue('Incorrect value')
    //         return
    //     }
    //     if(newStartValue >=  max) {
    //         setDisableSet(true)
    //         setDisplayValue('Incorrect value')
    //         return
    //     }
    //     else {
    //         return  setDisplayValue('Click set')
    //     }
    // }
    // const handleMaxValue = (newMaxValue: number) => {
    //     setMax(newMaxValue)
    //     setDisableSet(false)
    //     if(newMaxValue < 0) {
    //         setDisableSet(true)
    //         setDisplayValue('Incorrect value')
    //         return
    //     }
    //     if(newMaxValue <= start) {
    //         setDisableSet(true)
    //         setDisplayValue('Incorrect value')
    //         return
    //     }
    //     else return setDisplayValue('Click set')
    // }
    //
    // const handlerDisplayValue = () => {
    //     setDisplayValue(start)
    //     setDisableSet(true)
    //     setDisableInc(false)
    //     setDisableReset(false)
    // }
    //
    // const onClickHandler = () => {
    //     if (start === max) return
    //     setDisplayValue(++displayValue)
    //     if(displayValue === max) setDisableInc(true)
    // }
    //
    // const onClickHandler0 = () => {
    //     setDisplayValue(start)
    //     setDisableInc(false)
    // }

    const finalClassName = `${s.number}
    ${props.displayValue === props.max ? s.number5 : props.displayValue === 'Incorrect value' ? s.number5 : s.number}`

    return (
        <div>
            {/*<Settings*/}
            {/*    max={max}*/}
            {/*    start={start}*/}
            {/*    handleStartValue={handleStartValue}*/}
            {/*    handleMaxValue={handleMaxValue}*/}
            {/*    handlerDisplayValue={handlerDisplayValue}*/}
            {/*    onChangeStartDis={startDisable}*/}
            {/*    onChangeMaxDis={maxDisable}*/}
            {/*    disabled={disableSet}*/}
            {/*/>*/}

            <div className={s.block}>
                <div>
                    <h1 className={finalClassName}>{props.displayValue}</h1>
                </div>
                <div className={s.buttons}>
                    <Button onClick={props.onClickHandler} disabled={props.disableInc} buttonName={'inc'}/>
                    <Button onClick={props.onClickHandler0} disabled={props.disableReset} buttonName={'reset'}/>
                    <Button onClick={()=> {} } disabled={false} buttonName={'set'}/>
                </div>
            </div>
        </div>
    );
};

export default Reset;