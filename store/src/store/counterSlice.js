import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0,
	},
	reducers: {
		increment: state => {
			state.count += 1
		},
		clear: state => {
			state.count = 0
		},
	},
})

export const { increment, clear } = counterSlice.actions
export default counterSlice.reducer
