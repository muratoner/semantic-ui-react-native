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
		style,
		flex,
		...attrs
	} = props

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
		/>
	)
}
