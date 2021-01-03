import React, { useMemo, useState } from 'react';
import {
	ImageBackground,
	LayoutAnimation,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import Icon from '../icons/Icon';
import { AvatarProps } from '../index';
import { UtilColor } from '../utils';

const Component = ({
	title,
	source,
	size = 32,
	titleShowLimit,
	style,
	containerStyle,
	icon,
	rounded = true,
	withRandomColor = true,
	shortestTitle = true,
	onPress,
	textColorMode
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

	const avatarTitleAutoColor = useMemo(() => {
		if (textColorMode == 'auto-light') {
			return UtilColor.lightenColor(UtilColor.stringToColour(title), 80);
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
				style={styles.textContainer(
					size,
					withRandomColor ? UtilColor.stringToColour(title) : defaultBg,
					rounded
				)}
			>
				{avatarTitleContent}
			</Wrapper>
		),
		[title, size, rounded, withRandomColor, Wrapper, avatarTitleContent]
	);

	const avatarIcon = useMemo(() => {
		return (
			<Wrapper
				onPress={onPress}
				style={styles.textContainer(size, defaultBg, rounded)}
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
	}, [size, icon, rounded, Wrapper]);

	const avatarImage = useMemo(
		() => (
			<Wrapper
				onPress={onPress}
				style={[styles.imageContainer(size, rounded), containerStyle]}
			>
				<ImageBackground
					source={source}
					style={StyleSheet.flatten([styles.image(size), style])}
					width={size}
					height={size}
					resizeMode="cover"
					onLoadEnd={() => {
						LayoutAnimation.linear();
						setAvatarLoaded(true);
					}}
				>
					{title && !avatarLoaded && avatarTitleContent}
				</ImageBackground>
			</Wrapper>
		),
		[source, size, avatarLoaded, rounded, title, Wrapper, avatarTitleContent]
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
	image: (size) => ({
		width: size,
		height: size,
		backgroundColor: '#BCBEC1',
		alignItems: 'center',
		justifyContent: 'center'
	}),
	imageContainer: (size, radius) => ({
		borderRadius: radius ? size * 0.5 : undefined,
		overflow: 'hidden'
	}),
	textContainer: (size, bgColor, radius) => ({
		backgroundColor: bgColor,
		width: size,
		height: size,
		borderRadius: radius ? size * 0.5 : undefined,
		alignItems: 'center',
		justifyContent: 'center'
	})
});

export default Component;
