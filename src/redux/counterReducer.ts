import {createSlice, Dispatch} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "./store";

interface CounterState {
    value: number
    disableInc: boolean
    disableSet: boolean
    startValue: number
    maxValue: number
    setValueLC: number
}

const initialState: CounterState = {
    value: 0,
    disableInc: false,
    disableSet: false,
    startValue: 0,
    maxValue: 3,
    setValueLC: 0
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
        setValueLC: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        }
    },
})

export const { start, max, set, increment, reset, setValueLC } = counterSlice.actions

export default counterSlice.reducer



export const incValuesTC = () => (dispatch: Dispatch, getState: () => RootState) => {

    let currentValue = getState().counter.value

    localStorage.setItem('counterValue', JSON.stringify(currentValue + 1))
    dispatch(increment())
}

export const setValueFromLocalStorageTC = () => (dispatch: Dispatch) => {
    let valueAsString = localStorage.getItem('counterValue')
    if(valueAsString) {
        let newValue = JSON.parse(valueAsString)
        dispatch(setValueLC(newValue))
    }

}



