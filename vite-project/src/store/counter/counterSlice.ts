import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counter {
    value: number;
}

const initialValue : counter = {
    value : 0
}


const counterSlice = createSlice({
    name: "counter",
    initialState: initialValue,
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => {
            state.value -= 1;
        },
        decrementByAmount: (state,action:PayloadAction<number>) => {
            state.value -= action.payload;
        }
    }
    
    

})

export const { increment, decrement, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;