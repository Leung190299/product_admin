import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./reducers/categorySlice";
import mediaSlice from "./reducers/mediaSlice";
import productSlice from "./reducers/productSlice";

const store = configureStore( {
	reducer: {
		media: mediaSlice,
		category: categorySlice,
		product: productSlice
	}
} );
export default store;