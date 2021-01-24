import React from 'react'
import {View} from 'react-native'
export default (props) => {
	let {
		all: padding,
		horizontal: paddingHorizontal,
		vertical: paddingVertical,
		left: paddingLeft,
		right: paddingRight,
		top: paddingTop,
		bottom: paddingBottom,
		children,
		style,
		flex,
		...attrs
	} = props
	console.info('paddingVertical > ', paddingVertical)

	return (
		<View
			{...attrs}
			style={[
				{
					padding,
					paddingHorizontal,
					paddingVertical,
					paddingLeft,
					paddingRight,
					paddingTop,
					paddingBottom,
					flex
				},
				style
			]}
		>
			{children}
		</View>
	)
}
