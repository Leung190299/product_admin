import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isloading: false,
	items: [],
	errorMessage:''
};

export const productSlice = createSlice( {
	name: 'product',
	initialState,
	reducers: {
		getList: ( state ,action) => {
			state[ 'items' ] =action.payload
		},
		add: ( state, action ) => {
			state['items'].push(action.payload)
		}
	}
} );


