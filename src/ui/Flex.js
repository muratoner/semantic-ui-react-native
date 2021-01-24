import React from 'react'
import {View} from 'react-native'
export default (props) => {
	let {size: flex = 1, children, ...attrs} = props
	return (
		<View
			{...attrs}
			style={{
				flex
			}}
		>
			{children}
		</View>
	)
}
