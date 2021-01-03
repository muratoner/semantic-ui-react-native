import React, { useMemo } from 'react';
import {
	LayoutAnimation,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { CheckboxProps } from '../';
import Icon from '../icons/Icon';

export default (props: CheckboxProps) => {
	const {
		style,
		icon,
		iconType = 'FontAwesome',
		containerStyle,
		iconStyle,
		titleStyle,
		checked,
		onChanged,
		type = 'circle',
		checkedColor,
		unCheckedColor,
		disable,
		title
	} = props;

	const Slider = useMemo(() => {
		if (type == 'slider') {
			return (
				<View
					style={[
						styles.slider,
						{
							backgroundColor: checked ? '#191919' : 'rgba(0,0,0,.1)'
						}
					]}
				>
					<View
						style={{
							borderRadius: 50,
							shadowColor: 'rgba(0,0,0,.5)',
							shadowOpacity: 1,
							shadowRadius: 1,
							shadowOffset: { width: 0, height: 0 },
							width: 20,
							height: 20,
							backgroundColor: 'white',
							position: 'absolute',
							top: -8,
							left: !checked ? 0 : undefined,
							right: checked ? 0 : undefined
						}}
					></View>
				</View>
			);
		}
	}, [type, checked]);

	const Toggle = useMemo(() => {
		if (type == 'toggle') {
			return (
				<View
					style={[
						styles.toggle,
						{
							backgroundColor: checked ? '#2185d0' : 'rgba(0,0,0,.1)'
						}
					]}
				>
					<View
						style={[
							styles.toggleCircle,
							{
								left: !checked ? 1 : undefined,
								right: checked ? 1 : undefined
							}
						]}
					></View>
				</View>
			);
		}
	}, [type, checked]);

	const IconComponent = useMemo(
		() => () => {
			if (typeof icon == 'object') {
				return icon;
			}
			let name = '';
			let iconType = '';
			switch (type) {
			case 'circle':
				name = checked ? 'check-circle-outline' : 'circle-outline';
				iconType = 'MaterialCommunityIcons';
				break;
			case 'heart':
				name = checked ? 'heart-sharp' : 'heart-outline';
				iconType = 'Ionicons';
				break;
			case 'circle-overflow':
				name = checked ? 'check-circle' : 'circle';
				iconType = 'Feather';
				break;
			case 'volume':
				name = checked ? 'ios-volume-high' : 'ios-volume-mute';
				iconType = 'Ionicons';
				break;
			case 'square-overflow':
				name = checked ? 'check-square' : 'square';
				iconType = 'Feather';
				break;
			case 'square':
				name = checked ? 'checksquareo' : 'square';
				iconType = checked ? 'AntDesign' : 'Feather';
				break;
			case 'notification':
				name = checked
					? 'ios-notifications-circle-outline'
					: 'ios-notifications-off-circle-outline';
				iconType = 'Ionicons';
				break;
			case 'lock':
				name = checked ? 'lock-closed' : 'lock-open';
				iconType = 'Ionicons';
				break;
			case 'flag':
				name = checked ? 'flag-checkered' : 'flag-o';
				iconType = 'FontAwesome';
				break;
			case 'radio':
				name = checked ? 'radio-button-on' : 'radio-button-off';
				iconType = 'Ionicons';
				break;
			case 'slider':
				return Slider;
			case 'toggle':
				return Toggle;
			}
			return (
				<Icon
					name={name}
					type={iconType}
					color={(checked ? checkedColor : unCheckedColor) || '#191919'}
					style={StyleSheet.flatten([style, styles.icon(type), iconStyle])}
				/>
			);
		},
		[type, iconStyle, checked, style, checkedColor, unCheckedColor, disable]
	);

	return (
		<TouchableOpacity
			onPress={
				!disable
					? () => {
						LayoutAnimation.easeInEaseOut();
						onChanged?.(!checked);
					  }
					: undefined
			}
			style={[styles.container, containerStyle, { opacity: disable ? 0.7 : 1 }]}
		>
			<IconComponent />
			{title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		marginLeft: 10
	},
	slider: {
		height: 3,
		width: 50,
		borderRadius: 10
	},
	toggle: {
		height: 20,
		width: 50,
		borderRadius: 20 * 0.5
	},
	toggleCircle: {
		borderRadius: 50,
		shadowColor: 'rgba(0,0,0,.5)',
		shadowOpacity: 1,
		shadowRadius: 1,
		shadowOffset: { width: 0, height: 0 },
		width: 18,
		height: 18,
		backgroundColor: 'white',
		position: 'absolute',
		top: 1
	},
	icon: (type) => ({
		padding: type == 'flat' ? 2 : null,
		borderRadius: 5,
		fontSize: 24,
		borderColor: '#d4d4d5',
		borderWidth: type == 'flat' ? 1 : undefined,
		alignSelf: 'center'
	})
});
