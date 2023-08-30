import React from 'react'
import ReactDOM from 'react-dom'
import ClearButton from 'remote/ClearButton'
import Search from 'search/searchfield'
import { StoreProvider, useStore } from 'store/store'
import './index.scss'
const App = () => {
	const { count, countActions, dispatch, search } = useStore()
	return (
		<div className='mt-10 text-3xl mx-auto max-w-6xl'>
			<h1>HOST</h1>
			<button
				className='bg-indigo-500 text-white font-bold px-10 py-2'
				onClick={() => dispatch(countActions.increment())}
			>
				ADD
				{count.count}
			</button>
			<ClearButton />
			<Search />
			{search.search}
		</div>
	)
}
ReactDOM.render(
	<StoreProvider>
		<App />
	</StoreProvider>,
	document.getElementById('app')
)
