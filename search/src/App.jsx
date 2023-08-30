import React from 'react'
import ReactDOM from 'react-dom'

import { StoreProvider } from 'store/store'
import './index.scss'
import Search from './SearchField'

const App = () => (
	<div>
		<Search />
	</div>
)
ReactDOM.render(
	<StoreProvider>
		<App />
	</StoreProvider>,
	document.getElementById('app')
)
