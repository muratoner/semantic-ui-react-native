import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { StyleSheet, Text, ViewStyle } from 'react-native';
import Button from '../buttons/Button';
import { SocialIconProps } from '../index';
import IconRoot from './Icon';

const colors = {
	google: '#dd4b39',
	reddit: '#fc461e',
	'stack-overflow': '#f27f33',
	angellist: '#1c4082',
	codepen: '#000000',
	envelope: '#000000',
	etsy: '#f2581e',
	facebook: '#4267B2',
	flickr: '#ff0084',
	foursquare: '#0072b1',
	github: '#000000',
	gitlab: '#e14329',
	instagram: '#517fa4',
	linkedin: '#007bb6',
	medium: '#02b875',
	pinterest: '#cb2027',
	quora: '#a82400',
	soundcloud: '#f50',
	steam: '#c6c3c1',
	stumbleupon: '#EB4823',
	tumblr: '#32506d',
	twitch: '#6441A5',
	twitter: '#00aced',
	vimeo: '#aad450',
	vk: '#5181b8',
	wechat: '#7bb32e',
	weibo: '#e6162d',
	wordpress: '#21759b',
	youtube: '#bb0000'
};

const Icon = (props: SocialIconProps) => {
	const { type, title, titleStyle, style, light, ...attributes } = props;
	const iconSize = 24;

	var Icon = useMemo(() => {
		return (
			<IconRoot
				name={type}
				size={iconSize}
				color={light ? colors[type] : '#fff'}
				type="FontAwesome"
				style={[styles.icon, { marginRight: title ? 10 : 0 }]}
			/>
		);
	}, [type, title, light]);

	var ComputedButtonStyle = useMemo(() => {
		let style: ViewStyle = {
			backgroundColor: light ? '#fff' : colors[type]
		};

		if (!attributes.fluid) {
			style.width = iconSize * 2;
			style.height = iconSize * 2;
		}

		return style;
	}, [light, type, title, attributes.fluid]);

	return (
		<Button style={[styles.style, ComputedButtonStyle, style]} {...attributes}>
			{Icon}
			{typeof title == 'object' ? (
				title
			) : (
				<Text style={[{ color: light ? colors[type] : '#fff' }, titleStyle]}>
					{title}
				</Text>
			)}
		</Button>
	);
};

const styles = StyleSheet.create({
	icon: {},
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

Icon.defaultProps = {};

Icon.propTypes = {
	name: PropTypes.string,
	type: PropTypes.oneOf([
		'angellist',
		'codepen',
		'envelope',
		'etsy',
		'facebook',
		'flickr',
		'foursquare',
		'github-alt',
		'github',
		'gitlab',
		'instagram',
		'linkedin',
		'medium',
		'pinterest',
		'quora',
		'reddit-alien',
		'soundcloud',
		'stack-overflow',
		'steam',
		'stumbleupon',
		'tumblr',
		'twitch',
		'twitter',
		'google',
		'google-plus-official',
		'vimeo',
		'vk',
		'weibo',
		'wordpress',
		'youtube'
	]),
	size: PropTypes.number,
	color: PropTypes.string,
	style: PropTypes.object
};

export default Icon;
