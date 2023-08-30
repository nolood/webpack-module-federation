import React from 'react'
import ReactDOM from 'react-dom'

import { StoreProvider } from 'store/store'
import ClearButton from './ClearButton'
import './index.scss'

const App = () => {
	return (
		<div className='mt-10 text-3xl mx-auto max-w-6xl'>
			<h1>REMOTE</h1>
			<ClearButton />
		</div>
	)
}
ReactDOM.render(
	<StoreProvider>
		<App />
	</StoreProvider>,
	document.getElementById('app')
)
