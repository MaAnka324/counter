import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface CounterState {
    value: number
    disableInc: boolean
    disableSet: boolean
    startValue: number
    maxValue: number
}

const initialState: CounterState = {
    value: 0,
    disableInc: false,
    disableSet: false,
    startValue: 0,
    maxValue: 3
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
        }
    },
})

export const { start, max, set, increment, reset } = counterSlice.actions

export default counterSlice.reducer