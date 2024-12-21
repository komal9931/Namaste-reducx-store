import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReuder from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReuder,
  },
});
export default store;
