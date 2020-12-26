import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import Icon from '../icons/Icon';

const Component = (props) => {
	const { style, text, icon, ...attributes } = props;
	return (
		<View {...attributes} style={[styles.divider, style]}>
			<View style={styles.title}>
				{icon && <Icon style={styles.icon} {...icon} />}
				{text && <Text style={styles.text}>{text}</Text>}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	divider: {
		borderBottomWidth: 1,
		borderColor: 'rgba(0, 0, 0, .1)',
		width: '100%',
	},
	text: {
		fontWeight: 'bold',
	},
	icon: {
		marginRight: 5,
	},
	title: {
		alignItems: 'center',
		flexDirection: 'row',
		alignSelf: 'center',
		backgroundColor: 'white',
		paddingHorizontal: 10,
		top: 8,
	},
});

Component.protoTypes = {
	...ViewPropTypes,
	text: PropTypes.string,
};

export default Component;
