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

	function rgbToYIQ({ r, g, b }) {
		return (r * 299 + g * 587 + b * 114) / 1000;
	}

	function hexToRgb(hex) {
		if (!hex || hex === undefined || hex === '') {
			return undefined;
		}

		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

		return result
			? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			  }
			: undefined;
	}

	function contrast(colorHex, threshold = 128) {
		if (colorHex === undefined) {
			return '#000';
		}

		const rgb = hexToRgb(colorHex);

		if (rgb === undefined) {
			return '#000';
		}

		return rgbToYIQ(rgb) >= threshold ? '#000' : '#fff';
	}

	var stringToColour = function (str) {
		var hash = 0;
		for (var i = 0; i < str?.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		var colour = '#';
		for (var i = 0; i < 3; i++) {
			var value = (hash >> (i * 8)) & 0xff;
			colour += ('00' + value.toString(16)).substr(-2);
		}
		return colour;
	};

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
							: contrast(stringToColour(title))
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
					withRandomColor ? stringToColour(title) : defaultBg,
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
	}, [source, size]);

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
