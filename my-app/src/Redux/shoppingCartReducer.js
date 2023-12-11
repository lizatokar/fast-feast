import {createSlice} from "@reduxjs/toolkit";

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        burgersInCart: [],
    },
    reducers: {
        addBurgersToCart(state, action) {
            let {id} = action.payload;
            let burgerInCart = {...action.payload, counter: 1};
            if (!state.burgersInCart.some(burger => burger.id === id)) {
                return {...state, burgersInCart: [...state.burgersInCart, burgerInCart]}
            } else {
                state.burgersInCart.forEach(item => {
                    if (item.id === id) {
                        item.counter += 1;
                    }
                });
            }
        },

        setCounter(state, action) {
            let {id} = action.payload;
            state.burgersInCart.forEach(item => {
                if (item.id === id) {
                    item.counter += 1;
                }
            });
        },

        removeBurgerAtCart(state, action) {
            let {id} = action.payload;
            return {...state, burgersInCart: [...state.burgersInCart.filter(item => item.id !== id)]}
        },
    }
})

export const {addBurgersToCart, setCounter, removeBurgerAtCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;