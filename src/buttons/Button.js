import PropTypes from 'prop-types'
import React, {useMemo} from 'react'
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native'
import {ButtonProps} from '../'
import Icon from '../icons/Icon'
import {Styles} from '../mixins'
import {UtilColor} from '../utils'
import ButtonColor from './ButtonColor'

const Button = ({
	children,
	circular,
	color,
	disabled,
	fluid,
	iconName,
	iconType,
	indicatorStyle,
	loading,
	raised,
	style,
	title,
	type,
	onPress
}: ButtonProps) => {
	const outline = type == 'outline'
	const bgColor = ButtonColor.getBgColor(color)
	const textColor = outline ? bgColor : UtilColor.contrast(bgColor)
	const iconStyle = {
		marginRight: title ? 5 : 0
	}
	const buttonBgColor = outline ? '#fff' : bgColor
	const ComputedStyle = useMemo(() => {
		var computed = {}
		if (raised) computed = StyleSheet.flatten([computed, Styles.boxShadow])
		if (outline)
			computed = StyleSheet.flatten([
				computed,
				Styles.border,
				{
					borderColor: bgColor
				}
			])
		return computed
	}, [raised, type])

	return (
		<TouchableOpacity
			onPress={disabled || loading ? null : onPress}
			disabled={disabled}
			style={StyleSheet.flatten([
				styles.button,
				{
					backgroundColor: buttonBgColor,
					borderRadius: circular ? 50 : 3,
					opacity: disabled ? 0.45 : 1,
					flex: fluid ? 1 : null
				},
				ComputedStyle,
				style
			])}
		>
			{iconName && !loading && iconType && !children && (
				<Icon
					name={iconName}
					type={iconType}
					color={textColor}
					style={StyleSheet.flatten([styles.icon, iconStyle])}
				/>
			)}
			{title && !loading && !children && (
				<Text
					style={{
						fontWeight: 'bold',
						color: textColor
					}}
				>
					{title}
				</Text>
			)}
			{children}
			{loading && (
				<ActivityIndicator
					color={UtilColor.contrast(buttonBgColor)}
					style={StyleSheet.flatten([styles.indicator, indicatorStyle])}
				/>
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 11,
		paddingVertical: 11,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	icon: {
		fontSize: 15
	},
	indicator: {}
})

Button.propTypes = {
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
}

export default Button
