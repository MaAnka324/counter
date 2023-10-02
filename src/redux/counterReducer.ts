import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "./store";

interface CounterState {
    value: number
    disableInc: boolean
    disableSet: boolean
    startValue: number
    maxValue: number
    setValueLS: number
}

const initialState: CounterState = {
    value: 0,
    disableInc: true,
    disableSet: false,
    startValue: 0,
    maxValue: 3,
    setValueLS: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        start: (state, action: PayloadAction<number>) => {
            state.startValue = action.payload

            state.disableSet = state.startValue < 0

            if (state.startValue >= state.maxValue) {
                state.disableSet = true
            }
        },
        max: (state, action: PayloadAction<number>) => {
            state.maxValue = action.payload

            state.disableSet = state.maxValue < 0;

            if (state.maxValue <= state.startValue) {
                state.disableSet = true
            }
        },
        set: (state) => {
            state.value = state.startValue
            state.disableInc = false
        },
        increment: (state) => {
            state.value += 1
            if (state.value === state.maxValue) {
                state.disableInc = true
            }
        },
        reset: (state) => {
            state.value = state.startValue
            state.disableInc = false
        },
        setValueLS: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

export const {start, max, set, increment, reset, setValueLS} = counterSlice.actions

export default counterSlice.reducer


export const incValuesTC = () => (dispatch: Dispatch, getState: () => RootState) => {

    let currentValue = getState().counter.value

    localStorage.setItem('counterValue', JSON.stringify(currentValue + 1))
    dispatch(increment())
}

export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(setValueLS(newValue))
    }
}


export const settingsValuesTC = () => (dispatch: Dispatch, getState: () => RootState) => {

    let currentMaxValue = getState().counter.maxValue
    let currentMinValue = getState().counter.startValue

    localStorage.setItem('settingsValues', JSON.stringify({
        max: currentMaxValue,
        min: currentMinValue
    }))

    dispatch(set())
}

export const settingsValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('settingsValues')
    if (valueAsString) {
        let newValue = JSON.parse(valueAsString)

        dispatch(start(newValue.min))
        dispatch(max(newValue.max))
    }
}



