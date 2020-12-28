import React, { useMemo, useState } from 'react';
import {
	ImageBackground,
	LayoutAnimation,
	StyleSheet,
	Text,
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
	withRandomColor = true
}: AvatarProps) => {
	const [avatarLoaded, setAvatarLoaded] = useState(false);
	const [defaultBg] = useState('#b1b1b1');
	const [defaultTextColor] = useState('#fff');
	const chars = useMemo(() => {
		let chars = title
			?.trim()
			?.split(' ')
			.map((word) => word?.trim()?.charAt(0));
		if (titleShowLimit) {
			return chars.slice(0, titleShowLimit);
		}
		return chars;
	}, [title, titleShowLimit]);

	const avatarTitleContent = useMemo(
		() => (
			<Text
				minimumFontScale={0.01}
				adjustsFontSizeToFit
				numberOfLines={1}
				style={StyleSheet.flatten([
					styles.text(
						size,
						source || !withRandomColor
							? defaultTextColor
							: UtilColor.contrast(UtilColor.stringToColour(title))
					),
					style
				])}
			>
				{chars}
			</Text>
		),
		[title, size]
	);

	const avatarTitle = useMemo(
		() => (
			<View
				style={styles.textContainer(
					size,
					withRandomColor ? UtilColor.stringToColour(title) : defaultBg,
					rounded
				)}
			>
				{avatarTitleContent}
			</View>
		),
		[title, size]
	);

	const avatarIcon = useMemo(() => {
		return (
			<View style={styles.textContainer(size, defaultBg, rounded)}>
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
			</View>
		);
	}, [source, size, icon]);

	const avatarImage = useMemo(
		() => (
			<View style={[styles.imageContainer(size, rounded), containerStyle]}>
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
			</View>
		),
		[source, size, avatarLoaded]
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
