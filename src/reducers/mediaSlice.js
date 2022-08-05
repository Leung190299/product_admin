import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import media from '../service/media';

const initialState = {
	isLoading: false,
	data: [],
	page: 1,
	pages: 1,
	allFile:[],
	errorMessage: ''
};

export const getList = createAsyncThunk( 'media/get', async ( thunkAPI ) => {
	const data = await media.getAll(thunkAPI);
	return data
} );
export const getAll = createAsyncThunk( 'media/getAll', async ( thunkAPI ) => {
	const data = await media.getAllFile();
	return data
} );
export const mediaSlice = createSlice( {
	name: 'media',
	initialState,
	extraReducers: ( builder ) => {
		builder.addCase( getList.pending, ( state ) => {
			state.isLoading = true;
		} );
		builder.addCase( getList.fulfilled, ( state, action ) => {
			state.data = action.payload.medias;
			state.page = action.payload.page;
			state.pages = action.payload.pages;
		} );
		builder.addCase( getList.rejected, ( state, action ) => {
			state.isLoading = false;
			state.errorMessage = action.payload.message;
		} );
		builder.addCase( getAll.fulfilled, ( state, action ) => {
			state.allFile = action.payload;
		})
	}
} );
export default mediaSlice.reducer;