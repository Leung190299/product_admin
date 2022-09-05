import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from '../service/product';
const initialState = {
	isLoading: false,
	data: [],
	page: 1,
	pages: 1,
	errorMessage: ''
};
export const getListProduct = createAsyncThunk( 'product/get', async ( page ) => {
	const data = await productService.getAll(page);
	return data
} );
const productSlice = createSlice( {
	name: 'category',
	initialState,
	extraReducers: ( builder ) => {
		builder.addCase( getListProduct.pending, ( state ) => {
			state.isLoading = true;
		} );
		builder.addCase( getListProduct.fulfilled, ( state, action ) => {
			state.data = action.payload.products;
			state.page = action.payload.page;
			state.pages = action.payload.pages;
		} );
		builder.addCase( getListProduct.rejected, ( state, action ) => {
			state.isLoading = false;
			state.errorMessage = action.payload.message;
		} );

	}
} );
export default productSlice.reducer;


