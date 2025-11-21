import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slice/countSlice"
import productReducer from "./slice/productSlice"
import wishReducer from "./slice/wishSlice"
import cartReduser from "./slice/cartSlice"


const myStore = configureStore({
    reducer: {
        counter: countReducer,
        product: productReducer,
        wishlist: wishReducer,
        carts: cartReduser,

    }
})

export default myStore