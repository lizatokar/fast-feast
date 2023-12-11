import {createSlice} from "@reduxjs/toolkit";

const burgerInfo = createSlice({
    name: 'burgerInfo',
    initialState: {
        burger: {}
    },
    reducers: {
        setBurger (state, action) {
            return {...state, burger: action.payload}
        }
    }
})

export const {setBurger} = burgerInfo.actions;
export default burgerInfo.reducer;