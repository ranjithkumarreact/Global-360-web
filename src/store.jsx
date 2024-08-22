import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../src/features/categorySlice";
import productReducer from "../src/features/productSlice";
import newArrivals from "../src/features/newArrivals"
const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    newarrival:newArrivals,
  },
});

export default store;
