import {createSlice} from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'burgers',
    initialState: {
        burgers: [],
    },
    reducers: {
        setBurgers(state, action) {
            return {...state, burgers: [...action.payload]}
        },
    }
})

export const {setBurgers} = shopSlice.actions;
export default shopSlice.reducer;