import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AvatarProps } from '../index';

const Avatar = ({
	fullName,
	source,
	size = 32,
	showFullNameLimit,
	imageStyle,
	textStyle
}: AvatarProps) => {
	const chars = useMemo(() => {
		let chars = fullName
			?.trim()
			?.split(' ')
			.map((word) => word?.trim()?.charAt(0));
		if (showFullNameLimit) {
			return chars.slice(0, showFullNameLimit);
		}
		return chars;
	}, [fullName, showFullNameLimit]);

	const avatarText = useMemo(
		() => (
			<View style={styles.textContainer(size)}>
				<Text
					minimumFontScale={0.01}
					adjustsFontSizeToFit
					numberOfLines={1}
					style={StyleSheet.flatten([styles.text(size), textStyle])}
				>
					{chars}
				</Text>
			</View>
		),
		[fullName, size]
	);

	const avatarImage = useMemo(
		() => (
			<Image
				source={source}
				style={StyleSheet.flatten([styles.image(size), imageStyle])}
				width={size}
				height={size}
			/>
		),
		[source, size]
	);

	return fullName ? avatarText : avatarImage;
};

const styles = StyleSheet.create({
	text: (size) => ({
		color: 'white',
		textAlignVertical: 'center',
		textAlign: 'center',
		fontSize: 200,
		paddingHorizontal: size / 10
	}),
	image: (size) => ({
		width: size,
		height: size,
		backgroundColor: 'gray',
		borderRadius: size
	}),
	textContainer: (size) => ({
		backgroundColor: 'red',
		width: size,
		height: size,
		borderRadius: size,
		alignItems: 'center',
		justifyContent: 'center'
	})
});

export default Avatar;
