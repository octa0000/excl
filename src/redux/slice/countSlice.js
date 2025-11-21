import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name: "counter", 
    initialState: {
        color: ""
    },
    reducers: {
        increment: (state) => {
            state.timer += 1;
        },
        decrement: (state) => {
            if(state.timer > 0) {
                state.timer -= 1;
            }
        },
        send: (state,action) => {
            state.timer += action.payload
        },
        addColor: (state, action) => {
            state.color = action.payload
        }
    }
})

export const {increment, decrement, send, addColor} = countSlice.actions;
export default countSlice.reducer;
