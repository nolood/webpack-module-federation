import { createSlice } from '@reduxjs/toolkit'
export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		search: '',
	},
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload
		},
		clear: state => {
			state.search = ''
		},
	},
})

export const { setSearch, clear } = searchSlice.actions
export default searchSlice.reducer
