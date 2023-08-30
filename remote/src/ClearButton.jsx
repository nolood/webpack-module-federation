import React from 'react'
import { useStore } from 'store/store'
const ClearButton = () => {
	const { dispatch, count, countActions } = useStore()

	return (
		<button
			className='px-10 py-2 bg-indigo-500 text-white font-bold'
			onClick={() => dispatch(countActions.clear())}
		>
			CLEAR
			{count.count}
		</button>
	)
}

export default ClearButton
