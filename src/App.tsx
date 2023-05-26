import React, {ChangeEvent, useEffect, useState} from 'react';
import Reset from "./components/Reset";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Settings from "./components/Set";
import {useDispatch, useSelector} from "react-redux";
import {increment, increment0, max, set, start} from "./redux/counterReducer";
import {RootState} from "./redux/store";

function App() {

    // let [start, setStart] = useState<any>(JSON.parse(localStorage.getItem('startValue') ?? '0'))
    // let [max, setMax] = useState<any>(JSON.parse(localStorage.getItem('maxValue') ?? '5'))
    // let [displayValue, setDisplayValue] = useState<any>( JSON.parse(localStorage.getItem('counterValue') ?? '0'))    //localStorage.getItem('counterValue') ? localStorage.getItem('counterValue'): '0'

    const value = useSelector<RootState, number>(state => state.counter.value)

    const disableInc = useSelector<RootState, boolean>(state => state.counter.disableInc)

    const disableSet = useSelector<RootState, boolean>(state => state.counter.disableSet)

    const startValue = useSelector<RootState, number>(state => state.counter.startValue)

    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)

    // let [start, setStart] = useState<any>(0)
    // let [max, setMax] = useState<any>(5)
    // let [disableSet, setDisableSet] = useState<boolean>(false)

    // let [displayValue, setDisplayValue] = useState<number>(0)
    // let [disableInc, setDisableInc] = useState<boolean>(false)
    // let [disableReset, setDisableReset] = useState<boolean>(false)

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

    const dispatch = useDispatch()



    const startDisable = (e: ChangeEvent<HTMLInputElement>) => {
        // handleStartValue(+e.currentTarget.value)
        // setDisableInc(true)
        // setDisableReset(true)
        dispatch(start(+e.currentTarget.value))
    }

    const maxDisable = (e: ChangeEvent<HTMLInputElement>) => {
        // handleMaxValue(+e.currentTarget.value)
        // setDisableInc(true)
        // setDisableReset(true)
        dispatch(max(+e.currentTarget.value))
    }

    const handleStartValue = (newStartValue: number) => {
        // setStart(newStartValue)
        // setDisableSet(false)
        // if (newStartValue < 0) {
        //     setDisableSet(true)
        //     setDisplayValue('Incorrect value')
        //     return
        // }
        // if (newStartValue >= max) {
        //     setDisableSet(true)
        //     setDisplayValue('Incorrect value')
        //     return
        // } else {
        //     return setDisplayValue('Click set')
        // }
    }

    const handleMaxValue = (newMaxValue: number) => {
        // setMax(newMaxValue)
        // setDisableSet(false)
        // if (newMaxValue < 0) {
        //     setDisableSet(true)
        //     setDisplayValue('Incorrect value')
        //     return
        // }
        // if (newMaxValue <= start) {
        //     setDisableSet(true)
        //     setDisplayValue('Incorrect value')
        //     return
        // }
        //  else return setDisplayValue('Click set')
    }

    const handlerDisplayValue = () => {
        // setDisplayValue(start)
        // setDisableInc(false)
        // setDisableReset(false)
        dispatch(set())
    }

    const onClickHandler = () => {
        // if (start === max) return
        // setDisplayValue(++displayValue)
        // if (displayValue === max) setDisableInc(true)
        dispatch(increment())
    }

    const onClickHandler0 = () => {
        // setDisplayValue(start)
        // setDisableInc(false)
        dispatch(increment0())
    }

    return (
        <div>
            <Routes>
                <Route path={'/*'} element={<Settings
                    max={maxValue}
                    start={startValue}
                    handleStartValue={handleStartValue}
                    handleMaxValue={handleMaxValue}
                    handlerDisplayValue={handlerDisplayValue}
                    onChangeStartDis={startDisable}
                    onChangeMaxDis={maxDisable}
                    disabled={disableSet}
                />}/>
                <Route path={'/reset'} element={<Reset
                    // displayValue={displayValue}
                    displayValue={value.toString()}
                    onClickHandler={onClickHandler}
                    onClickHandler0={onClickHandler0}
                    disableInc={disableInc}
                    disableReset={disableSet}
                    max={maxValue.toString()}
                />}/>
            </Routes>
        </div>
    )
}

export default App;
