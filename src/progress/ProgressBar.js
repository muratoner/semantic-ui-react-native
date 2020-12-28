import React, { useEffect, useMemo } from 'react';
import { LayoutAnimation, StyleSheet, Text, View } from 'react-native';
import { ProgressBarProps } from '../';
import { UtilColor } from '../utils';

export default (props: ProgressBarProps) => {
	let {
		style,
		progress,
		height,
		showProgressValue,
		bottomText,
		bottomTextIncludeProgress,
		autoColored
	} = props;

	useEffect(() => {
		LayoutAnimation.configureNext(
			LayoutAnimation.create(500, LayoutAnimation.Types.easeIn)
		);
	}, [progress]);

	const autoColorValue = useMemo(() => {
		var red = 0,
			green = 0;
		if (progress >= 50) {
			red = 255 - Math.round(((progress - 50) / 50) * 255);
			green = 255;
		} else {
			red = 255;
			green = Math.round((progress / 50) * 255);
		}
		return `rgb(${red}, ${green}, 0)`;
	}, [progress]);

	const autoBgColor = useMemo(() => {
		if (autoColored) {
			return {
				backgroundColor: autoColorValue
			};
		}
		return null;
	}, [progress, autoColorValue]);

	const autoProgressTextColor = useMemo(() => {
		if (autoColored) {
			return {
				color: UtilColor.contrast(autoColorValue)
			};
		}
		return null;
	}, [autoBgColor]);

	const autoBottomTextColor = useMemo(() => {
		if (autoColored) {
			return {
				color: autoColorValue
			};
		}
		return null;
	}, [autoBgColor]);

	return (
		<>
			<View style={[styles.container, style]}>
				<View
					style={[
						styles.fill,
						{ width: `${showProgressValue && progress < 10 ? 10 : progress}%` },
						autoBgColor
					]}
				>
					{showProgressValue && (
						<Text
							numberOfLines={1}
							adjustsFontSizeToFit
							style={StyleSheet.flatten([
								styles.progressBarText,
								autoProgressTextColor
							])}
						>
							{progress}%
						</Text>
					)}
				</View>
			</View>
			{bottomText && (
				<Text
					style={StyleSheet.flatten([styles.bottomText, autoBottomTextColor])}
				>
					{bottomTextIncludeProgress ? `${progress}% ` : ''}
					{bottomText}
				</Text>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	bottomText: {
		color: '#000',
		marginTop: 5,
		alignSelf: 'center',
		fontWeight: '500'
	},
	progressBarText: {
		color: '#fff',
		paddingHorizontal: 5,
		alignSelf: 'flex-end'
	},
	fill: {
		backgroundColor: '#888',
		borderRadius: 10,
		height: 20,
		justifyContent: 'center'
	},
	container: {
		overflow: 'hidden',
		height: 20,
		borderRadius: 10,
		backgroundColor: 'rgba(0,0,0,.1)'
	}
});
