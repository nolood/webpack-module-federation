import React from 'react'
import { useStore } from 'store/store'
const SearchField = () => {
	const { search, searchActions, dispatch } = useStore()
	return (
		<input
			className='bg-indigo-100'
			placeholder='Search'
			onChange={e => dispatch(searchActions.setSearch(e.target.value))}
			value={search.search}
		/>
	)
}

export default SearchField
