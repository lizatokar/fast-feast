import {configureStore} from "@reduxjs/toolkit";
import shoppingCartReducer from "./shoppingCartReducer";
import burgersReducer from "./burgersReducer";
import burgerInfoReducer from "./burgerInfoReducer";


let store = configureStore({
    reducer: {
        burgers: burgersReducer,
        burgerInfo: burgerInfoReducer,
        shoppingCart: shoppingCartReducer,
    }
})

export default store;