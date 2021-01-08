import React, { useMemo, useState } from 'react';
import {
	ActivityIndicator,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Icon from '../icons/Icon';
import { AvatarProps } from '../index';
import { Styles } from '../mixins';
import { UtilColor } from '../utils';

const Component = ({
	title,
	source,
	size = 32,
	titleShowLimit,
	style,
	containerStyle,
	icon,
	circular = true,
	withRandomColor = true,
	shortestTitle = true,
	onPress,
	textColorMode,
	bordered,
	raised,
	loading = true
}: AvatarProps) => {
	const [avatarLoaded, setAvatarLoaded] = useState(false);
	const [defaultBg] = useState('#b1b1b1');
	const [defaultTextColor] = useState('#fff');
	const chars = useMemo(() => {
		if (!shortestTitle) return title;
		let chars = title
			?.trim()
			?.split(' ')
			.map((word) => word?.trim()?.charAt(0));
		if (titleShowLimit) {
			return chars.slice(0, titleShowLimit);
		}
		return chars;
	}, [title, titleShowLimit, shortestTitle]);

	const Wrapper = useMemo(() => {
		if (onPress) {
			return TouchableOpacity;
		} else {
			return View;
		}
	}, [onPress]);

	const ComputedBorder = useMemo(() => {
		let res = bordered ? Styles.border : {};
		return res;
	}, [bordered, raised]);

	const ComputedRaised = useMemo(() => {
		let res = raised ? Styles.boxShadow : {};
		return res;
	}, [bordered, raised]);

	const avatarTitleAutoColor = useMemo(() => {
		if (textColorMode == 'light') {
			return UtilColor.lightenColor(UtilColor.stringToColour(title), 100);
		} else {
			return UtilColor.contrast(UtilColor.stringToColour(title));
		}
	}, [textColorMode, title]);

	const avatarTitleContent = useMemo(
		() => (
			<Text
				minimumFontScale={0.01}
				adjustsFontSizeToFit
				numberOfLines={1}
				style={StyleSheet.flatten([
					styles.text(
						size,
						source || !withRandomColor ? defaultTextColor : avatarTitleAutoColor
					),
					style
				])}
			>
				{chars}
			</Text>
		),
		[
			title,
			size,
			withRandomColor,
			source,
			shortestTitle,
			titleShowLimit,
			avatarTitleAutoColor
		]
	);

	const avatarTitle = useMemo(
		() => (
			<Wrapper
				onPress={onPress}
				style={[
					styles.textContainer(
						size,
						withRandomColor ? UtilColor.stringToColour(title) : defaultBg,
						circular
					),
					ComputedBorder,
					ComputedRaised
				]}
			>
				{avatarTitleContent}
			</Wrapper>
		),
		[
			title,
			size,
			circular,
			withRandomColor,
			Wrapper,
			avatarTitleContent,
			ComputedBorder,
			ComputedRaised
		]
	);

	const avatarIcon = useMemo(() => {
		return (
			<Wrapper
				onPress={onPress}
				style={[
					styles.textContainer(size, defaultBg, circular),
					ComputedBorder,
					ComputedRaised
				]}
			>
				<Icon
					minimumFontScale={0.01}
					adjustsFontSizeToFit
					numberOfLines={1}
					style={StyleSheet.flatten([
						styles.icon(size, defaultTextColor),
						style
					])}
					{...icon}
				/>
			</Wrapper>
		);
	}, [size, icon, circular, Wrapper, ComputedBorder, ComputedRaised]);

	const avatarImage = useMemo(
		() => (
			<Wrapper onPress={onPress} style={[ComputedRaised, containerStyle]}>
				<ImageBackground
					source={source}
					style={StyleSheet.flatten([
						styles.image(size, circular),
						style,
						ComputedBorder
					])}
					width={size}
					height={size}
					resizeMode="cover"
					onLoadEnd={() => {
						setAvatarLoaded(true);
					}}
				>
					{title && !avatarLoaded && avatarTitleContent}
					{!avatarLoaded && loading && (
						<ActivityIndicator color="#fff" style={styles.indicator} />
					)}
				</ImageBackground>
			</Wrapper>
		),
		[
			source,
			size,
			avatarLoaded,
			circular,
			title,
			Wrapper,
			avatarTitleContent,
			ComputedBorder,
			ComputedRaised,
			loading
		]
	);

	const avatar = useMemo(() => {
		if (source) {
			return avatarImage;
		} else if (icon) {
			return avatarIcon;
		} else {
			return avatarTitle;
		}
	}, [avatarTitle, avatarIcon, avatarImage]);

	return avatar;
};

const styles = StyleSheet.create({
	indicator: {
		position: 'absolute',
		backgroundColor: 'rgba(0,0,0,.5)',
		width: '100%',
		height: '100%'
	},
	icon: (size, color) => ({
		color,
		textAlignVertical: 'center',
		textAlign: 'center',
		fontSize: size / 1.75
	}),
	text: (size, color) => ({
		color,
		textAlignVertical: 'center',
		textAlign: 'center',
		fontSize: 200,
		paddingHorizontal: size / 7
	}),
	image: (size, radius) => ({
		width: size,
		height: size,
		backgroundColor: '#BCBEC1',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		borderRadius: radius ? size * 0.5 : undefined
	}),
	textContainer: (size, bgColor, radius, bordered) => ({
		backgroundColor: bgColor,
		width: size,
		height: size,
		borderRadius: radius ? size * 0.5 : undefined,
		alignItems: 'center',
		justifyContent: 'center'
	})
});

export default Component;
