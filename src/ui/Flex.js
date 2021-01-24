import React from 'react'
import {View} from 'react-native'
export default ({size: flex = 1, style, ...attrs}) => {
	return (
		<View
			{...attrs}
			style={[
				{
					flex
				},
				style
			]}
		/>
	)
}
