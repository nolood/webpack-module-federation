import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import searchSlice from './searchSlice'

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		search: searchSlice,
	},
})
