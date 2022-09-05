import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import category from '../service/category';

const initialState = {
	isLoading: false,
	data: [],
	page: 1,
	pages: 1,
	errorMessage: ''
};
export const getListCategory = createAsyncThunk( 'category/get', async ( page ) => {
	const data = await category.getAll(page);
	return data
} );
const categorySlice = createSlice( {
	name: 'category',
	initialState,
	extraReducers: ( builder ) => {
		builder.addCase( getListCategory.pending, ( state ) => {
			state.isLoading = true;
		} );
		builder.addCase( getListCategory.fulfilled, ( state, action ) => {
			state.data = action.payload.categorys;
			state.page = action.payload.page;
			state.pages = action.payload.pages;
		} );
		builder.addCase( getListCategory.rejected, ( state, action ) => {
			state.isLoading = false;
			state.errorMessage = action.payload.message;
		} );

	}
} );
export default categorySlice.reducer;