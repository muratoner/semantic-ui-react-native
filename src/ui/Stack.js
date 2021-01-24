import React from 'react'
import {View} from 'react-native'
export default ({size: height = 10, children}) => {
	return <View style={{height}}>{children}</View>
}
