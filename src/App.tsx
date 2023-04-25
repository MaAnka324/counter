import React, {ChangeEvent, useEffect, useState} from 'react';
import Reset from "./components/Reset";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from "./components/Set";

function App() {

    let [start, setStart] = useState<any>(JSON.parse(localStorage.getItem('startValue') ?? '0'))
    let [max, setMax] = useState<any>(JSON.parse(localStorage.getItem('maxValue') ?? '5'))
    let [displayValue, setDisplayValue] = useState<any>( JSON.parse(localStorage.getItem('counterValue') ?? '0'))//localStorage.getItem('counterValue') ? localStorage.getItem('counterValue'): '0'
    let [disableSet, setDisableSet] = useState<boolean>(true)
    let [disableInc, setDisableInc] = useState<boolean>(false)
    let [disableReset, setDisableReset] = useState<boolean>(false)

    useEffect( () => {
        localStorage.setItem('counterValue', JSON.stringify(displayValue))
    }, [displayValue] )

    useEffect( () => {
        localStorage.setItem('startValue', JSON.stringify(start))
    }, [start] )

    useEffect( () => {
        localStorage.setItem('maxValue', JSON.stringify(max))
    }, [max] )

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

  return (
      <BrowserRouter>
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
          <Reset
              displayValue={displayValue}
              onClickHandler={onClickHandler}
              onClickHandler0={onClickHandler0}
              disableInc={disableInc}
              disableReset={disableReset}
              max={max}
          />
          {/*<Route path={'/settings'} render={() => <Settings*/}
          {/*    max={max}*/}
          {/*    start={start}*/}
          {/*    handleStartValue={handleStartValue}*/}
          {/*    handleMaxValue={handleMaxValue}*/}
          {/*    handlerDisplayValue={handlerDisplayValue}*/}
          {/*    onChangeStartDis={startDisable}*/}
          {/*    onChangeMaxDis={maxDisable}*/}
          {/*    disabled={disableSet}*/}
          {/*/>}/>*/}
        {/*  <Route path={'/reset'} render={() => <Reset*/}
        {/*    displayValue={displayValue}*/}
        {/*    onClickHandler={onClickHandler}*/}
        {/*    onClickHandler0={onClickHandler0}*/}
        {/*    disableInc={disableInc}*/}
        {/*    disableReset={disableReset}*/}
        {/*    max={max}*/}
        {/*/>}/>*/}
      </BrowserRouter>
  )
}

export default App;
