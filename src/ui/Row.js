import React from 'react'
import {StyleSheet, View} from 'react-native'

export default ({style, ...attributes}) => {
	return <View {...attributes} style={[styles.row, style]} />
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	}
})
