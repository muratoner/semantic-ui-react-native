import React from 'react'
import {StyleSheet, View} from 'react-native'

export default (props) => {
	const {style, ...attributes} = props
	return <View {...attributes} style={[style, styles.row]}></View>
}

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	}
})
