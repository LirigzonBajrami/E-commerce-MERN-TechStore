// This is global store, we can use it in every page/component

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

// Create store
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// To use this store we need to wrap our app with Provider in index.js
