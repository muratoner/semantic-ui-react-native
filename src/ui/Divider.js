import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import { DividerProps } from '../';
import Icon from '../icons/Icon';

const Component = (props: DividerProps) => {
	const { style, title, icon, color, children, ...attributes } = props;
	return (
		<View {...attributes} style={[styles.divider(color), style]}>
			<View style={styles.titleContainer}>
				{icon && <Icon style={styles.icon} {...icon} />}
				{title && <Text style={styles.title}>{title}</Text>}
				{children}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	divider: (borderColor) => ({
		borderBottomWidth: 1,
		borderColor: borderColor || 'rgba(0, 0, 0, .1)',
		width: '100%',
		marginBottom: 10
	}),
	title: {
		fontWeight: 'bold'
	},
	icon: {
		marginRight: 5
	},
	titleContainer: {
		alignItems: 'center',
		flexDirection: 'row',
		alignSelf: 'center',
		backgroundColor: 'white',
		paddingHorizontal: 10,
		top: 8
	}
});

Component.protoTypes = {
	...ViewPropTypes,
	text: PropTypes.string
};

export default Component;
