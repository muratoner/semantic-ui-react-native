import React from 'react'
import { StyleSheet, View } from 'react-native'

export default ({progress, style}) => {
	return (
		<View style={[styles.container, style]}>
			<View style={[styles.fill, {width: `${progress}%}`}]} />
		</View>
	)
}

const styles = StyleSheet.create({
	fill: {
		backgroundColor: 'black',
		borderRadius: 10,
		height: 5
	},
	container: {
		overflow: 'hidden',
		height: 5,
		borderRadius: 10,
		backgroundColor: 'rgba(0,0,0,.1)'
	}
})
