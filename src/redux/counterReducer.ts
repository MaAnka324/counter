import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
    value: number
    disableInc: boolean
    disableSet: boolean
    startValue: number
    maxValue: number
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
    disableInc: false,
    disableSet: false,
    startValue: 0,
    maxValue: 3
}


export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        start: (state, action) => {
            state.startValue = action.payload

            state.disableSet = state.startValue < 0

            if (state.startValue >= state.maxValue) {
                state.disableSet = true
            }
        },
        max: (state, action) => {
            state.maxValue = action.payload
            state.disableSet = false

            // if (state.maxValue < 0) {
            //     state.disableSet = true
            // }
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
        increment0: (state) => {
            state.value = state.startValue
            state.disableInc = false
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const {start, max, set, increment, increment0, incrementByAmount} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default counterSlice.reducer