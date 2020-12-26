import React from 'react';
import { StyleSheet } from 'react-native';

export default (props) => {
	const { style, ...attributes } = props;
	return <View {...attributes} style={[style, styles.row]}></View>;
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row'
	}
});
