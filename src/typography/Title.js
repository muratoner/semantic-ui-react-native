import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { StyleSheet, Text, ViewPropTypes } from 'react-native';

const Component = (props) => {
	const { style, type, ...attributes } = props;

	const fontSize  = useMemo(() => {
		switch (type) {
		case 'huge':
			return 28;
		case 'large':
			return 24;
		case 'small':
			return 15;
		case 'tiny':
			return 14;
		case 'medium':
		default:
			return 18
		}
	}, [type])

	return (
		<Text {...attributes} style={[{fontSize},styles.title, style]} />
	);
};

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold'
	}
})

Component.protoTypes = {
	...ViewPropTypes,
	text: PropTypes.string,
	type: PropTypes.oneOf(['huge','large','medium', 'small', 'tiny']),
};

export default Component;
