import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { clear, increment } from './store/counterSlice'
import { setSearch } from './store/searchSlice'
import { store } from './store/store'
export function useStore() {
	const count = useSelector(state => state.counter)
	const countActions = { increment, clear }
	const search = useSelector(state => state.search)
	const searchActions = { setSearch, clear }
	const dispatch = useDispatch()
	return {
		count,
		countActions,
		search,
		searchActions,
		dispatch,
	}
}

export function StoreProvider({ children }) {
	return <Provider store={store}>{children}</Provider>
}
