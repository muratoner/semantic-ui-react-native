import React, {useMemo} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {UtilColor} from '../utils'

export default (props) => {
	let {
		containerStyle,
		contentStyle,
		style,
		size = 10,
		circular = true,
		color = UtilColor.getBgColor('green'),
		content,
		rounded,
		overlap,
		children,
		...attrs
	} = props
	let computedStyle = useMemo(() => {
		let res = {backgroundColor: UtilColor.getBgColor(color), zIndex: 9}
		if (children) {
			res.position = 'absolute'
			if (overlap != 'circular') {
				res.right = -3
				res.top = -3
			} else {
				res.right = 5
				res.top = 5
			}
		}
		if (typeof content != 'string') {
			res.width = res.height = size
		}
		rounded && (res.borderRadius = 3)
		circular && (res.borderRadius = size * 2)
		return res
	}, [size, color, children, content, circular])
	let getBadge = () => {
		return (
			<View style={[computedStyle, styles.container, style]}>
				{typeof content == 'string' ? (
					<Text
						numberOfLines={1}
						adjustsFontSizeToFit
						style={[
							styles.content,
							{color: UtilColor.contrast(computedStyle.backgroundColor)},
							contentStyle
						]}
					>
						{content}
					</Text>
				) : (
					content
				)}
			</View>
		)
	}
	return (
		<View {...attrs} style={[containerStyle]}>
			{getBadge()}
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	content: {
		fontSize: 9,
		textAlign: 'center',
		paddingHorizontal: 4,
		paddingVertical: 2
	}
})
