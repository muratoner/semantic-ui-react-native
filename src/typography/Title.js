import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { StyleSheet, Text, ViewPropTypes } from 'react-native';
import { TitleProps } from '../';

const Component = (props: TitleProps) => {
	const { style, size, ...attributes } = props;

	const fontSize = useMemo(() => {
		switch (size) {
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
			return 18;
		}
	}, [size]);

	return <Text {...attributes} style={[{ fontSize }, styles.title, style]} />;
};

const styles = StyleSheet.create({
	title: {
		fontWeight: 'bold'
	}
});

Component.protoTypes = {
	...ViewPropTypes,
	text: PropTypes.string,
	type: PropTypes.oneOf(['huge', 'large', 'medium', 'small', 'tiny'])
};

export default Component;
