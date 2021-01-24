import React from 'react'
import {View} from 'react-native'
export default (props) => {
	const {
		style,
		alignItems = 'center',
		justifyContent = 'center',
		flexDirection,
		...attributes
	} = props
	return (
		<View
			{...attributes}
			style={[{alignItems, justifyContent, flexDirection}, style]}
		></View>
	)
}
