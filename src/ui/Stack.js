import React from 'react'
import {View} from 'react-native'
export default ({size: height = 10, style, ...attrs}) => {
	return <View style={[{height}, style]} {...attrs} />
}
