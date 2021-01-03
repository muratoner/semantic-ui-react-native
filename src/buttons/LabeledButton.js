import PropTypes from 'prop-types';
import React from 'react';
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { LabeledButtonProps } from '../';
import Icon from '../icons/Icon';
import ButtonColor from './ButtonColor';

const LabeledButton = ({
	circular,
	color,
	disabled,
	fluid,
	indicatorStyle,
	label,
	labelIcon,
	labelIconType,
	labelRight,
	loading,
	pointing,
	onPress,
	style,
	title,
	type
}: LabeledButtonProps) => {
	const bgColor = ButtonColor.getBgColor(color);
	const textColor = ButtonColor.getTextColor(color);
	const outline = type == 'outline';

	const getValueColor = () => {
		switch (color) {
		case 'red':
			return '#db2828';
		case 'primary':
			return '#2185d0';
		default:
			return 'rgba(0,0,0,.6)';
		}
	};

	const getLabel = () => {
		const iconStyle = {
			marginRight: label ? 5 : 0
		};
		return (
			<View
				style={StyleSheet.flatten([
					styles.labelContainer,
					{
						backgroundColor: outline ? '#fff' : bgColor,
						borderColor: outline ? bgColor : '#fff',
						borderRightWidth: outline ? 1 : 0
					}
				])}
			>
				{labelIcon && labelIconType && (
					<Icon
						name={labelIcon}
						type={labelIconType}
						color={outline ? bgColor : textColor}
						style={StyleSheet.flatten([styles.icon, iconStyle])}
					/>
				)}
				{label && (
					<Text
						style={StyleSheet.flatten([
							styles.label,
							{
								color: outline ? bgColor : textColor
							}
						])}
					>
						{label}
					</Text>
				)}
				{labelRight && getPointing()}
			</View>
		);
	};

	const getPointing = () => {
		const customStyle = {
			borderColor: outline ? bgColor : '#fff',
			transform: [
				{ rotate: '45deg' },
				{ translateX: labelRight ? -6 : -3 },
				{ translateY: labelRight ? 0 : 4 }
			]
		};
		return pointing ? (
			<View style={StyleSheet.flatten([styles.pointing, customStyle])} />
		) : null;
	};

	return (
		<TouchableOpacity
			onPress={disabled || loading ? null : onPress}
			disabled={disabled}
			style={StyleSheet.flatten([
				styles.button,
				{
					borderColor: bgColor,
					borderRadius: circular ? 50 : 3,
					width: fluid ? '100%' : undefined,
					opacity: disabled ? 0.45 : 1
				},
				style
			])}
		>
			{!labelRight && getLabel()}
			{title && !loading && (
				<Text
					style={StyleSheet.flatten([
						styles.title,
						{
							color: getValueColor()
						}
					])}
				>
					{!labelRight && getPointing()}
					{title}
				</Text>
			)}
			{loading && (
				<ActivityIndicator
					style={StyleSheet.flatten([styles.indicator, indicatorStyle])}
				/>
			)}
			{labelRight && getLabel()}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	labelContainer: {
		height: '100%',
		paddingHorizontal: 21,
		flexDirection: 'row',
		alignItems: 'center'
	},
	label: {
		fontWeight: 'bold'
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		overflow: 'hidden',
		borderWidth: 1
	},
	icon: {
		fontSize: 15
	},
	indicator: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		flex: 1
	},
	title: {
		fontWeight: 'bold',
		paddingHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: 'white',
		flex: 1
	},
	pointing: {
		position: 'absolute',
		width: 10,
		height: 10,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderLeftWidth: 1,
		top: '50%'
	}
});

LabeledButton.propTypes = {
	title: PropTypes.string,
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'red',
		'positive',
		'negative'
	]),
	iconName: PropTypes.string,
	iconType: PropTypes.oneOf([
		'AntDesign',
		'Entypo',
		'EvilIcons',
		'Feather',
		'FontAwesome',
		'FontAwesome5',
		'Fontisto',
		'Foundation',
		'Ionicons',
		'MaterialCommunityIcons',
		'MaterialIcons',
		'Octicons',
		'SimpleLineIcons',
		'Zocial'
	])
};

export default LabeledButton;
