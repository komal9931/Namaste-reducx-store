import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//THUNK

export function fetchproducts() {
  return async function fetchProductThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      dispatch(setProducts(products));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.log("first error");
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
