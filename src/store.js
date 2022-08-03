import { configureStore } from "@reduxjs/toolkit";
import mediaSlice from "./reducers/mediaSlice";

 const store = configureStore( {
	reducer: {
		media:mediaSlice
	}
 } );
export default store;