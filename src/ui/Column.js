import React from 'react'
import {StyleSheet, View} from 'react-native'

export default ({style, ...attributes}) => {
	return <View {...attributes} style={[styles.column, style]}></View>
}

const styles = StyleSheet.create({
	column: {
		flexDirection: 'column'
	}
})
