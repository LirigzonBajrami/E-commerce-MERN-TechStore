import { createSlice } from "@reduxjs/toolkit";

// createSlice accept only one reducer
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    // Actions
    addProduct(state, action) {
      state.quantity += 1;
      state.products.push(action.payload); // push new product in array
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
  },
});

// Export actions
export const { addProduct } = cartSlice.actions;

// Export cartSlice's reducer
export default cartSlice.reducer;
